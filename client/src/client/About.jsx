
const test = () => {
  alert("test");
}
function About() {
  return (
    <div>
      <h1 className="text-red-800">about</h1>
      <button onClick={test} className='bg-green-200 px-4 py-2'>Test</button>

    </div>
  )
}

export default About


