const Dashboard = () => {
    return (
        <div className="bg-blue-500 w-screen h-screen flex flex-col items-center">
            <input type="text" className="w-screen h-16 outline-none px-10 text-xl" />
            <div className="bg-red-500 w-1/2 h-full">
                <div>
                    <div>"Bohemian Rhapsody" - Queen</div>
                    <div>"Imagine" - John Lennon</div>
                    <div>"Hotel California" - Eagles</div>
                    <div>"Thriller" - Michael Jackson</div>
                    <div>"Smells Like Teen Spirit" - Nirvana</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard