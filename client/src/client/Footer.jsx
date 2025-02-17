import { Icon } from '@iconify/react/dist/iconify.js';
import { phoneIcon, mailIcon, mapPinIcon } from '../../src/components/icons'
import { motion } from 'framer-motion';
import { fadeIn } from '../assets/utils/motion';

const footerSections = [
  {
    title: "Actions",
    items: [
      { text: "Login" },
      { text: "Sign Up" },
      { text: "Book Demo" },
      { text: "My Orders" }
    ]
  },
  {
    title: "Information",
    items: [
      { text: "About Us" },
      { text: "Privacy Policy" },
      { text: "Terms & Conditions" },
      { text: "FAQ" }
    ]
  },
  {
    title: "Get in Touch",
    items: [
      { text: "123-456-7890", icon: phoneIcon },
      { text: "contact@fitness360.com", icon: mailIcon },
      { text: "Book a Personal Training Session", icon: phoneIcon },
      { text: "New York, USA", icon: mapPinIcon }
    ]
  },
  {
    title: "Follow Us",
    items: [
      { text: "Facebook", icon: "line-md:facebook" },
      { text: "Instagram", icon: "line-md:instagram" },
      { text: "Twitter", icon: "line-md:twitter" },
      { text: "YouTube", icon: "line-md:youtube" }
    ]
  }
]

function Footer() {
  return (
    <>
      <div className="px-16 pt-4 bg-secondlight text-secondary dark:bg-secondary dark:text-light hidden md:block">
        <div className="flex flex-col md:flex-row py-4 px-4 justify-between items-start">
          {footerSections.map((section, index) => (
            <div key={index} className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul className="list-none p-0">
                {section.items.map((item, index) => (
                  <motion.li
                    whileInView="show"
                    initial="hidden"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeIn("", "", index * 0.1, 0.4)}

                    key={index}
                    className="hover:text-background dark:hover:text-light cursor-pointer hover:scale-105 right-0 transition-all ease-in-out duration-300 flex"
                  >
                    {item.icon && (
                      <Icon icon={item.icon} width="20" className="hover:scale-125 transition ease-in-out duration-300 block" />
                    )}
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-secondlight dark:bg-background/50"></div>
      <div className="px-16 py-2 sm:px-8 bg-light dark:bg-background dark:text-light sm:text-center text-[14px]">
        &copy; 2024 Fitness360. All Rights Reserved.
      </div>
    </>
  )
}

export default Footer;
