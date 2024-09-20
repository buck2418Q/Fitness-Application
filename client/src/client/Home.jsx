import '../styleSheets/home.css'
function home() {
  return (
    <div>
      <section className=" w-full flex justify-around bg-black text-white my-8 py-8">
        <div className="card">
          <h4 className='text-4xl font-extrabold mb-4'>
            500+
          </h4>

          <div className="card-details">
            Happy Members
          </div>
          <div className="card-details">
            Our Community is growing fast
          </div>

        </div>
        <div className="card">
          <h4 className='text-4xl font-extrabold mb-4'>
            5+
          </h4>

          <div className="card-details">
            Years Experience
          </div>
          <div className="card-details">
            Experience in various Workouts
          </div>

        </div>
        <div className="card">
          <h4 className='text-4xl font-extrabold mb-4'>
            13+
          </h4>

          <div className="card-details">
            Certified Trainers
          </div>
          <div className="card-details">
            Guiance at every step
          </div>

        </div>
        <div className="card">
          <h4 className='text-4xl font-extrabold mb-4'>
            90%
          </h4>

          <div className="card-details">
            Customer Satisfaction
          </div>
          <div className="card-details">
            We ensure your progress satisfaction
          </div>

        </div>
      </section>
    </div>
  )
}

export default home
