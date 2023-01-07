const educationContent = [
    {
        year: "2022 - Present",
        degree: "CS50 Introduction to Computer Science",
        institute: "Harvard University",
        details: `Overview of C, Python, SQL, HTML, CSS, and JavaScript with a final project`,
    },
    {
        year: "2014 - 2018",
        degree: "MEng Aeronautics and Astronautics (Spacecraft Engineering)",
        institute: "University of Southampton",
        details: `Primary focus on Spacecraft Systems, Propulsion and Structures, with further modules in Avionics, Advanced Computational Methods and Engineering Accounting and Finance. This included one dissertation in hybrid electric propulsion and one Design Excellence Award contending group Masters thesis on the neutralisation of a gridded ion thruster for stationkeeping of GEO telecoms satellites by using ECR for plasma production.`,
    },
    {
        year: "2013 - 2014",
        degree: "Engineering Foundation Year",
        institute: "University of Southampton",
        details: `Received a Merit Scholarship Award based on academic results.`,
    },
    {
        year: "2011 - 2013",
        degree: "International Baccalaureate Diploma Programme",
        institute: "International School of Luxembourg",
        details: `Higher Level: Physics, History and French. Extended Essay: ‘How a change in the wingspan of an aircraft affects its range.’`,
    },
];

export const Education = () => {
    return (
        <ul>
            {educationContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                        {val.year}
                    </span>
                    <h5 className="poppins-font">
                        {val.degree}
                        <span className="place open-sans-font">
                            {val.institute}
                        </span>
                    </h5>
                    <p className="open-sans-font">{val.details}</p>
                </li>
            ))}
        </ul>
    );
};
