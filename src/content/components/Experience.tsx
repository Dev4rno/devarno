import { appColors } from "@/src/utils";

const experienceContent = [
    // {
    //     year: "2022 - Present",
    //     position: "Front End Lead",
    //     company: "Nocodelytics",
    //     details:
    //         "Providing simple Webflow analytics to track users and get insights that help you grow your business.",
    // },
    {
        year: "2022 - Present",
        position: "Systems Developer & Consultant",
        company: "DevArno",
        details:
            "As a trustworthy partner for clients in need of technical expertise, responsive design and search engine optimisation, DevArno is perfectly positioned to provide innovative custom solutions with high quality project management and effective communication.",
    },
    {
        year: "2021 - 2022",
        position: "Front End Developer",
        company: "Code & Wander",
        details:
            "Full-stack migration from PHP to TypeScript for Brandwatch.com, a social media analytics tool tracking billions of conversations happening online everyday.",
    },
    {
        year: "2018 - 2020",
        position: "Avionics Systems Engineer",
        company: "General Electric Aviation Systems",
        details: "Systems verification for the Propeller Electronic Controller and 777X Remote Data Concentrator.",
    },
    {
        year: "2017",
        position: "Thermal/Power Subsystems Internship",
        company: "SES Astra",
        details: `Developed a tool to correlate an empirical thermal model of temperature, EPC power and inclination angle for live telemetry.`,
    },
    {
        year: "2016",
        position: "Flight Dynamics Internship",
        company: "SES Astra",
        details: `Developed a tool to correlate O3b and SP3 satellite visibility for live telemetry.`,
    },
    {
        year: "2016 - 2018",
        position: "Lifeguard",
        company: "Jubilee Leisure Centre, Southampton",
        details: "RLSS National Pool Lifeguard Qualification and gym maintenance",
    },
];

export const Experience = () => {
    return (
        <ul>
            {experienceContent.map((val, i) => (
                <li key={i} style={{ listStyleType: "none", marginBottom: 20 }}>
                    <h5 className="poppins-font text-uppercase">
                        <span style={{ color: appColors.primary }}>{val.position}</span>
                        <span className="place open-sans-font">{val.company}</span>
                    </h5>
                    <p className="open-sans-font">{val.details}</p>
                    <span
                        className="time open-sans-font text-uppercase"
                        style={{ marginTop: 12, border: `1px solid ${appColors.primary}` }}
                    >
                        {val.year}
                    </span>
                </li>
            ))}
        </ul>
    );
};
