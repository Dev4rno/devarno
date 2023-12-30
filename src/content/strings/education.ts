interface Education {
    year: string;
    degree: string;
    school: string;
    details: string;
}

export const educations: Education[] = [
    {
        year: "Jan 2023 - Present",
        degree: "CS50 Introduction to Computer Science",
        school: "Harvard University",
        details: "Overview of C, Python, SQL, HTML, CSS, and JavaScript with a final project",
    },
    {
        year: "Sep 2014 - Jun 2018",
        degree: "MEng Aeronautics and Astronautics w/ Spacecraft Engineering",
        school: "University of Southampton",
        details:
            "Primary focus on Spacecraft Systems, Propulsion and Structures, with further modules in Avionics, Advanced Computational Methods and Engineering Accounting and Finance. This included one dissertation in hybrid electric propulsion and one Design Excellence Award contending group Masters thesis on the neutralisation of a gridded ion thruster for stationkeeping of GEO telecoms satellites by using ECR for plasma production.",
    },
    {
        year: "Sep 2013 - Jun 2014",
        degree: "Engineering Foundation Year",
        school: "University of Southampton",
        details: "Received a Merit Scholarship Award based on academic results.",
    },
    {
        year: "Sep 2011 - May 2013",
        degree: "IB Diploma Programme",
        school: "International School of Luxembourg",
        details:
            "Higher level focus in Physics, History and French, with an extended essay entitled ‘How a change in the wingspan of an aircraft affects its range.’",
    },
];
