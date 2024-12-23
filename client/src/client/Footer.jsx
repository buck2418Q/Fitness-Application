//"client\src\components\icons.js"
import { phoneIcon, mailIcon, mapPinIcon } from '../../src/components/icons'

function Footer() {
  return (
    <>


      <div className="px-16 pt-4 bg-background  text-secondlight hidden md:block">
        <div className="flex flex-col md:flex-row py-4 px-4 justify-between items-start">

          {/* First Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light">Actions</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light">Login</li>
              <li className="hover:text-light">Sign In</li>
              <li className="hover:text-light">Book Demo</li>
              <li className="hover:text-light">Orders</li>
            </ul>
          </div>

          {/* Second Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light">Actions</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light">Login</li>
              <li className="hover:text-light">Sign In</li>
              <li className="hover:text-light">Book Demo</li>
              <li className="hover:text-light">Orders</li>
            </ul>
          </div>

          {/* Third Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light">Information</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light">Locations</li>
              <li className="hover:text-light">Gyms</li>
              <li className="hover:text-light">Yoga Centers</li>
            </ul>
          </div>

          {/* Fourth Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2 text-light">Get in touch</h3>
            <ul className="list-none p-0">
              <li className="hover:text-light">
                <img src={phoneIcon} className='inline w-5 mr-2 text-sm' />
                1234564578
              </li>
              <li className="hover:text-light">
                <img src={mailIcon} className='inline w-5 mr-2 text-sm' />
                mail@fitness360
              </li>
              <li className="hover:text-light">
                <img src={phoneIcon} className='inline w-5 mr-2 text-sm' />
                Book Demo
              </li>
              <li className="hover:text-light">
                <img src={mapPinIcon} className='inline w-5 mr-2 text-sm' />
                Chandigarh
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='h-[1px] bg-secondlight'></div>
      <div className="px-16 py-2 sm:px-8 bg-background text-secondlight sm:text-center text-[14px]">
        &copy; 2014 fitness360. All Rights Reserved.
      </div>

    </>

  );
}

export default Footer;
