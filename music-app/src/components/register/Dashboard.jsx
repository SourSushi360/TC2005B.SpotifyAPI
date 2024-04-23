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
    };

    const types = ["album", "artist", "playlist", "track", "show", "episode", "audiobook"];
    const [form,setForm] = useState({
        track:'',
        artist:'',
    });
    const [option,setOption] = useState('');

    return (
        <div className="bg-[url(/src/assets/background-login.jpg)] bg-center bg-cover h-screen flex justify-center items-center font-rubik flex-col">
            <div className="h-screen w-screen absolute -z-1 bg-black opacity-60"></div>
            <input type="text" className="w-screen h-16 z-0 outline-none px-32 text-xl" />
            <div className="bg-black w-1/2 h-full z-0">
                <div>
                    <input type="text" placeholder="track" name="track" value={form.track} onChange={handleChange} />
                    <input type="text" placeholder="artist" name="artist" value={form.artist} onChange={handleChange} />
                </div>
                <select name="types" onChange={handleSelectChange}>
                    {types.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <div className=" bg-white w-1/4 select-none" onClick={handleSearch}>Search</div>
            </div>
        </div>
    )
}

export default Dashboard