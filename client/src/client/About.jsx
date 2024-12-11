/* eslint-disable react-hooks/rules-of-hooks */
// import GrootAlert from 'grootify';



const test = () => {
  // GrootAlert({
  //   type: 'success',
  //   text: 'This is a success alert!',
  //   showClose: true,
  // });
}
function About() {
  return (
    <div>
      <h1 className="text-red-800">about</h1>
      <button onClick={test} className='bg-green-200 px-4 py-2'>Test</button>
      {/* <GrootAlert /> */}
      {/* <GrootAlert
        type='success'
        text='Hello World!'
        showClose='true' /> */}
    </div>
  )
}

export default About


