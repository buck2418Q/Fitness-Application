function Footer() {
  return (
    <div className="border-2 m-4 rounded-xl">
      <div className="flex flex-col md:flex-row py-4 px-4 justify-between items-start">
        {/* Map section */}
        <div className="w-full md:w-5/12 overflow-hidden h-0 pb-[56.25%] md:pb-[20%] relative rounded-xl bg-green-500 mb-4 md:mb-0 z-0 ">
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
