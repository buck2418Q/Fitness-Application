// import React from 'react'

function Footer() {
  return (
    <div className=" border-2	m-4 rounded-xl">
      <div className="flex py-4 px-4 justify-between items-start">
        <div className="w-4/12 overflow-hidden h-0 pb-[20%] relative rounded-xl bg-green-500">

          <iframe className="border-0 h-full w-full absolute rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.40033770883!2d76.81928331145258!3d30.701965024493106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecca1d6c0001%3A0xe4953728a502a8e2!2sChandigarh%20Junction%20railway%20station!5e1!3m2!1sen!2sin!4v1726998920263!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className="w-8/12 px-6 flex justify-evenly testss">
          <div className="w-1/2">

            <address>
              Fitness
            </address>
          </div>
          <div className="w-1/2">2</div>
        </div>
      </div>

      <div className="flex py-4 px-4 justify-between items-start border-2	m-4 rounded-xl">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default Footer
