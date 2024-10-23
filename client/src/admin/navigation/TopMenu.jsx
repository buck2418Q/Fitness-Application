import { bellIcon, userIcon } from '../../components/icons'

const TopMenu = () => {

    return (

        <div className=" h-16 flex items-center justify-between px-8 pt-2 m-2">
            <h3 className="text-2xl font-bold">
                Welcome userName
            </h3>
            <div className="flex gap-6 items-center">

                <input type="text" className="w-60 border rounded-lg px-2 h-12 py-1 shadow-lg" placeholder="Search..." />
                <span >
                    <img src={bellIcon} className='shadow-2xl h-5 w-5 hover:shadow-2xl relative' />

                </span>
                <span className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center">
                    <img src={userIcon} alt="User" className='border rounded-full h-full' />
                </span>
            </div>
        </div>

    );
};

export default TopMenu;
