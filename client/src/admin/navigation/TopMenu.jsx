
const TopMenu = () => {

    return (

        <div className=" h-16 flex items-center justify-between px-4 m-2">
            <div>
                Welcome userName
            </div>
            <div className="flex gap-4 items-center">

                <input type="text" className="w-60 border rounded-lg px-2 h-12 py-1 shadow-lg" placeholder="Search..." />
                <span>O</span>
                <span className="w-12 h-12 bg-gray-200 rounded-full">
                    <img src="" alt="" />
                </span>
            </div>
        </div>

    );
};

export default TopMenu;
