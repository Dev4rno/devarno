const experienceContent = [
    // {
    //     year: "2022 - Present",
    //     position: "Front End Lead",
    //     compnayName: "Nocodelytics",
    //     details:
    //         "Providing simple Webflow analytics to track users and get insights that help you grow your business.",
    // },
    {
        year: "2022 - Present",
        position: "Front End Lead",
        compnayName: "Nocodelytics",
        details:
            "Providing simple Webflow analytics and insights that help businesses grow.",
    },
    {
        year: "2021 - 2022",
        position: "Front End Developer",
        compnayName: "Code & Wander",
        details:
            "Migration from PHP to TypeScript for a social media analytics platform.",
    },
    {
        year: "2018 - 2020",
        position: "Avionics Systems Engineer",
        compnayName: "General Electric Aviation Systems",
        details:
            "Systems verification for the Propeller Electronic Controller and 777X Remote Data Concentrator.",
    },
    {
        year: "2017",
        position: "Thermal/Power Subsystems Internship",
        compnayName: "SES Astra",
        details: `Developed a tool to correlate an empirical thermal model of temperature, EPC power and inclination angle for live telemetry.`,
    },
    {
        year: "2016",
        position: "Flight Dynamics Internship",
        compnayName: "SES Astra",
        details: `Developed a tool to correlate O3b and SP3 satellite visibility for live telemetry.`,
    },
    {
        year: "2016 - 2018",
        position: "Lifeguard",
        compnayName: "Jubilee Leisure Centre, Southampton",
        details:
            "RLSS National Pool Lifeguard Qualification and gym maintenance",
    },
];

export const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i}>
                    <div className="icon">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                        {val.year}
                    </span>
                    <h5 className="poppins-font text-uppercase">
                        {val.position}
                        <span className="place open-sans-font">
                            {val.compnayName}
                        </span>
                    </h5>
                    <p className="open-sans-font">{val.details}</p>
                </li>
            ))}
        </ul>
    );
};
