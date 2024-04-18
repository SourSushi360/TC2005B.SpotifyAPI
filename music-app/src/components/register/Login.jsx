const Login = () => {
    return (
            <div className="bg-[url(/src/assets/background-login.jpg)] bg-center bg-cover h-screen flex justify-center items-center font-rubik">
                <div className="h-screen w-screen absolute -z-0 bg-black opacity-40"></div>
                <div className="border-zinc-300 px-10 pt-28 pb-16 z-0 w-1/3 border-2 rounded-3xl backdrop-blur shadow-lg shadow-black">
                    <div className=" w-7 h-7 absolute -translate-y-0.5 top-0 left-32 ml-2 translate-x-1.5 rounded-se-3xl shadow-se"></div>
                    <div className="font-mono bg-zinc-300 text-teal-950 absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-36 h-16 rounded-b-2xl text-3xl select-none font-black">Login</div>
                    <div className="w-7 h-7 absolute -translate-y-0.5 top-0 right-32 mr-3.5 rounded-ss-3xl shadow-ss"></div>
                    <div className="relative flex flex-col mb-5">
                        <input placeholder="" type="text" className="w-full h-14 text-base bg-transparent text-zinc-300 py-5 px-5 border-zinc-300 border-2 rounded-full outline-none mb-2.5 shadow-zinc-300 peer" />
                        <label htmlFor="" className="absolute select-none peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-300 peer-placeholder-shown:top-4 left-5 duration-200 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-zinc-300 peer-focus:rounded-full peer-focus:px-3 peer-focus:text-teal-950 peer-focus:font-bold  -top-2.5 text-sm bg-zinc-300 rounded-full px-3 text-teal-950 font-bold font-rubik pointer-events-none">Username</label>
                        <span className="material-symbols-outlined absolute text-zinc-300 top-2 right-5 text-3xl select-none">person</span>
                    </div>
                    <div className="relative flex flex-col mb-5">
                        <input placeholder="" type="password" className="w-full h-14 text-base bg-transparent text-zinc-300 py-5 px-5 border-zinc-300 border-2 rounded-full outline-none mb-2.5 shadow-zinc-300 peer" />
                        <label htmlFor="" className="absolute select-none peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-300 peer-placeholder-shown:top-4 left-5 duration-200 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-zinc-300 peer-focus:rounded-full peer-focus:px-3 peer-focus:text-teal-950 peer-focus:font-bold  -top-2.5 text-sm bg-zinc-300 rounded-full px-3 text-teal-950 font-bold font-rubik pointer-events-none">Password</label>
                        <span className="material-symbols-outlined absolute text-zinc-300 top-2 right-5 text-3xl select-none">lock</span>
                    </div>
                    <div className="relative flex flex-row justify-between text-sm mb-5 text-zinc-300 font-rubik">
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="" className="px-2">Remember me</label>
                        </div>
                        <div>
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="relative flex flex-col mb-5">
                        <input type="submit" className="h-12 rounded-full bg-zinc-300 font-rubik font-black text-teal-950 duration-300 active:bg-zinc-400" value="Login" />
                    </div>
                    <div>
                        <a href="/" className="text-zinc-300 font-rubik flex justify-center">Don't have an account? Register</a>
                    </div>
                </div>
            </div>
    )
}

export default Login