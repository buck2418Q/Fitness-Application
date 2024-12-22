import { treeCompany, cocoCompany, leafCompany, coffeeCompany, mixlrCompany, gym1Company, gym2Company } from "../components/images";
function About() {

  const companies = [
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: cocoCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: treeCompany,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: leafCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: coffeeCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: mixlrCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: gym1Company,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: gym2Company,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: cocoCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: treeCompany,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: leafCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: coffeeCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: mixlrCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: gym1Company,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: gym2Company,
    },
  ];

  return (
    <>
      <div className="text-light">
        <div className="py-52 px-32 bg-background align-middle flex  flex-col justify-center items-center gap-8">
          <h2 className="text-6xl font-bold tracking-wide">Our Team</h2>
          <p className="text-xl  text-center"> Fitness360 is a results-driven fitness organization offering tailored training programs, expert coaching, and community support. We prioritize health, strength, and mental well-being, helping members achieve their fitness goals with dedication.</p>
        </div>


        <div className="py-8 px-32 bg-secondary overflow-hidden">
          <div className="marquee-container relative">
            {/* The following 8 divs are the blocks that move */}
            <div className="marquee-content flex gap-16 animate-marquee">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="w-auto h-24 flex-shrink-0  cursor-pointer flex items-center justify-center gap-4"
                >
                  <img src={company.image} alt="" className="h-20" />
                  <p className="text-3xl">{company.CompanyName}</p>
                </div>
              ))}

            </div>
          </div>
        </div>


        {/* {CompanyName: 'groot',        description: "A gymnast boom bam",        image: "Gymnast",    }, */}



      </div>
    </>
  )
}

export default About


