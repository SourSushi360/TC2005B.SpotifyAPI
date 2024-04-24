import { useState } from "react";
import { fetchSpotifyAPI } from "../../api/spotifyAPI";

const Dashboard = () => {
    const handleChange = (e) => {
        const newValues = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(newValues);
    };
    const handleSelectChange = (e) => {
        setOption(e.target.value)
    };
    const handleSearch = async () => {
        const params = new URLSearchParams();
        params.append('q',encodeURIComponent(`remaster track:${form.track} artist:${form.artist}`));
        params.append('type',option);

        const queryString = params.toString();
        const url = 'https://api.spotify.com/v1/search'
        const updateUrl = `${url}?${queryString}`;
        const token = `Bearer ${localStorage.getItem('token')}`;

        const response = await fetchSpotifyAPI(
            updateUrl,
            'GET',
            null,
            'application/json',
            token
        );
        console.log(response);
        setResults(response.tracks.items);
    };
    const handleGetToken = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get('code');
        let codeVerifier = localStorage.getItem('code_verifier');
        console.log({ codeVerifier });
        const url = 'https://accounts.spotify.com/api/token';
        const clientId = '482765e0a5f84f0fae12f16395586edd';
        const redirectUri = 'http://localhost:5173/';
        const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: clientId,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
        }),
    };
        const body = await fetch(url, payload);
        const response = await body.json();

        localStorage.setItem('token', response.access_token);
   
    };
    const getDeviceId = async() => {
        const token = `Bearer ${localStorage.getItem('token')}`;

        const response = await fetchSpotifyAPI(
            'https://api.spotify.com/v1/me/player',
            'GET',
            null,
            'application/json',
            token
        );
    };

    const types = ["album", "artist", "playlist", "track", "show", "episode", "audiobook"];
    const [form,setForm] = useState({
        track:'',
        artist:'',
    });
    const [option,setOption] = useState('');
    const [results, setResults] = useState([]);

    return (
        <div className="flex justify-center items-center font-rubik flex-col">
            <div className="bg-[url(/src/assets/background-login.jpg)] bg-center bg-cover w-screen h-screen flex justify-center items-center font-rubik flex-col fixed top-0"></div>
            <div className="h-screen w-screen fixed top-0 -z-1 bg-black opacity-60"></div>
            <div className="w-screen h-20 bg-black fixed top-0 z-10 justify-center flex">
                <input className="m-4 h-12 w-1/4 px-5 text-xl rounded-lg" type="text" placeholder="Name" name="track" value={form.track} onChange={handleChange} />
                <input className="m-4 h-12 w-1/4 px-5 text-xl rounded-lg" type="text" placeholder="Artist" name="artist" value={form.artist} onChange={handleChange} />
                <select className="m-4 h-12 w-1/4 px-5 text-xl rounded-lg" name="types" onChange={handleSelectChange}>
                    {types.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <div className=" bg-white select-none m-4 h-12 w-1/4 px-5 flex justify-center items-center font-black text-2xl rounded-lg hover:opacity-80" onClick={handleSearch}>Search</div>
            </div>
            <div className="bg-black w-1/2 h-full z-0 pt-20 px-10">
                <div>
                    <div>
                        <div className="bg-white" onClick={handleGetToken}>GET TOKEN</div>
                        <div className="bg-white" onClick={getDeviceId}>GET DEVICE ID</div>
                    </div>
                    {results.length > 0 && (
                        <div>
                            {results.map((item) => (
                                <div className="text-white flex flex-row m-5 h-32" key={item.id}>
                                    <img src={item.album.images[0].url} className="w-auto h-auto" alt="" />
                                    <div className="text-2xl pl-4 flex justify-center items-center">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard