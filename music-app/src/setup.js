export const getDataAuth = async () => {
    const generateRandomString = (length) => {
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const values = crypto.getRandomValues(new Uint8Array(length));
      return values.reduce((acc, x) => acc + possible[x % possible.length], '');
    };

    const codeVerifier = generateRandomString(64);
    console.log({ codeVerifier });
    window.localStorage.setItem('code_verifier', codeVerifier);

    const sha256 = async (plain) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(plain);
      return window.crypto.subtle.digest('SHA-256', data);
    };

    const base64encode = (input) => {
      return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    };

    const hashed = await sha256(codeVerifier);

    const codeChallenge = base64encode(hashed);
    return codeChallenge;
  };

  export const authFLow = (codeChallenge) => {
    const clientId = '482765e0a5f84f0fae12f16395586edd';
    const redirectUri = 'http://localhost:5173/';

 
    const scope = 'user-read-playback-state user-modify-playback-state user-read-private user-read-email';
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    const params = {
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  };
