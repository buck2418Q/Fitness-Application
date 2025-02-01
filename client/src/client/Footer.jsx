//"client\src\components\icons.js"
import { phoneIcon, mailIcon, mapPinIcon } from '../../src/components/icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
function Footer() {
  return (
    <>


      <div className="px-16 pt-4 bg-secondlight  text-secondary dark:bg-secondary dark:text-light hidden md:block">
        <div className="flex flex-col md:flex-row py-4 px-4 justify-between items-start">

          {/* First Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 ">Actions</h3>
            <ul className="list-none p-0">
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Login</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Sign In</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Book Demo</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Orders</li>
            </ul>
          </div>

          {/* Second Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 ">Actions</h3>
            <ul className="list-none p-0">
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Login</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Sign In</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Book Demo</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Orders</li>
            </ul>
          </div>


          {/* Third Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Information</h3>
            <ul className="list-none p-0">
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Locations</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Gyms</li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">Yoga Centers</li>
            </ul>
          </div>

          {/* Fourth Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 ">Get in touch</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light dark:hover:text-light cursor-pointer">
                <LazyLoadImage src={phoneIcon} className='inline w-5 mr-2 text-sm' />
                1234564578
              </li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">
                <LazyLoadImage src={mailIcon} className='inline w-5 mr-2 text-sm' />
                mail@fitness360
              </li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">
                <LazyLoadImage src={phoneIcon} className='inline w-5 mr-2 text-sm' />
                Book Demo
              </li>
              <li className="hover:text-background dark:hover:text-light cursor-pointer">
                <LazyLoadImage src={mapPinIcon} className='inline w-5 mr-2 text-sm' />
                Chandigarh
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='h-[1px] bg-secondlight dark:bg-background/50'></div>
      <div className="px-16 py-2 sm:px-8 bg-light dark:bg-background dark:text-light sm:text-center text-[14px]">
        &copy; 2024 fitness360. All Rights Reserved.
      </div>

    </>

  );
}

export default Footer;
