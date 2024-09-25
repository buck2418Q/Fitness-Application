function Footer() {
  return (
    <div className="border-2 m-4 rounded-xl">
      <div className="flex flex-col md:flex-row py-4 px-4 justify-between items-start">
        {/* Map section */}
        <div className="w-full md:w-5/12 overflow-hidden h-0 pb-[56.25%] md:pb-[20%] relative rounded-xl bg-green-500 mb-4 md:mb-0 z-0 ">
         ` {/* <iframe
            className="border-0 h-full w-full absolute rounded-xl z-0 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.40033770883!2d76.81928331145258!3d30.701965024493106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecca1d6c0001%3A0xe4953728a502a8e2!2sChandigarh%20Junction%20railway%20station!5e1!3m2!1sen!2sin!4v1726998920263!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>` */}
        </div>

        {/* Content section */}
        <div className="w-full md:w-6/12 md:px-6 flex flex-col md:flex-row justify-evenly">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="flex py-4 px-4 justify-between items-start  rounded-xl">
              <div>
                <h3 className="font-bold mb-2">Actions</h3>
                <ul className="list-none p-0">
                  <li>Login</li>
                  <li>Sign In</li>
                  <li>Book Demo</li>
                  <li>Orders</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* Content for the second column */}
            <div className=" rounded-xl p-4">
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
