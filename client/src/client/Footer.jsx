//"client\src\components\icons.js"
import { phoneIcon, mailIcon, mapPinIcon } from '../../src/components/icons'

function Footer() {
  return (
    <>


      <div className="px-16 pt-4 bg-background  text-secondlight dark:bg-secondlight dark:text-secondary hidden md:block">
        <div className="flex flex-col md:flex-row py-4 px-4 justify-between items-start">

          {/* First Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light dark:text-background">Actions</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Login</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Sign In</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Book Demo</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Orders</li>
            </ul>
          </div>

          {/* Second Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light dark:text-background">Actions</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Login</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Sign In</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Book Demo</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Orders</li>
            </ul>
          </div>


          {/* Third Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light dark:text-background">Information</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Locations</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Gyms</li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">Yoga Centers</li>
            </ul>
          </div>

          {/* Fourth Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light dark:text-background">Get in touch</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">
                <img src={phoneIcon} className='inline w-5 mr-2 text-sm' />
                1234564578
              </li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">
                <img src={mailIcon} className='inline w-5 mr-2 text-sm' />
                mail@fitness360
              </li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">
                <img src={phoneIcon} className='inline w-5 mr-2 text-sm' />
                Book Demo
              </li>
              <li className="hover:text-light dark:hover:text-secondary cursor-pointer">
                <img src={mapPinIcon} className='inline w-5 mr-2 text-sm' />
                Chandigarh
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='h-[1px] bg-secondlight dark:bg-secondary'></div>
      <div className="px-16 py-2 sm:px-8 bg-background text-secondlight dark:bg-light dark:text-background sm:text-center text-[14px]">
        &copy; 2024 fitness360. All Rights Reserved.
      </div>

    </>

  );
}

export default Footer;
