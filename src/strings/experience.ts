interface Experience {
    year: string | JSX.Element;
    position: string;
    company: string;
    details: string;
}

export const experiences: Experience[] = [
    {
        year: "Aug'23 - Jun'24",
        position: "Systems Verification Consultant",
        company: "GE Aerospace",
        details:
            "Led the development of a customised packet capture utility aimed at providing in-depth insights into RDC network traffic, as well as a Test Procedure Suite to mitigate technical debt by minimising the time gap between test case definition and execution.",
    },
    {
        year: "Aug'23 - Present",
        position: "Founder & Consultant",
        company: "DevArno",
        details:
            "DevArno is a software consultancy built on extensive proficiency in Python and significant experience with frontend frameworks across multiple digital products. Applying DevOps methodologies procured from diverse startup experiences, along with a self-taught mastery of RESTful API frameworks and NoSQL databases, DevArno engineers intuitive concepts into robust, scalable, and autonomous applications.",
    },
    {
        year: "Aug'22 - Jan'23",
        position: "Front End Consultant",
        company: "Nocodelytics",
        details:
            "Contributed to shaping a user-friendly interface and optimising the frontend to align with the needs of businesses relying on Nocodelytics for actionable data, analytics and solutions for growth.",
    },
    {
        year: "Oct'21 - Jan'23",
        position: "Front End Developer",
        company: "Code & Wander",
        details:
            "Supported the full stack migration and testing of Brandwatch.com, a social media analytics tool tracking billions of conversations happening online every day. Additionally, converted massive dynamic blog and formal report templates from traditional PHP to TypeScript, ensuring accurate typing and thorough testing throughout the process.",
    },
    {
        year: "Sep'18 - Dec'20",
        position: "Avionics Systems Engineer",
        company: "GE Aviation Systems",
        details:
            "Defined Input Requirement Files (IRFs) to call specific templates from a Resource Database (RDb) for unit testing, ensuring accurate transmission of network protocols in the 777X Remote Data Concentrator. Additionally, led the development of a Problem Report and Change Request metrics dashboard for Boeing, facilitating a visual representation of planned workloads and technical debt.",
    },
    {
        year: "Sep'18 - Mar'19",
        position: "Sytems Engineering Intern",
        company: "GE Aviation Systems",
        details:
            "Designed and implemented a MATLAB AppDesigner GUI to verify the PEC Simulink model, providing crucial insight into requirements traceability and test suites. The Minimum Viable Product (MVP) enabled real-time automatic control observation of propeller speed and pitch during different flight phases. Additionally, I led a team of interns in conceptualising and managing the systems lifecycle of a Micro Interface Unit.",
    },
    {
        year: "Jul'17 - Aug'17",
        position: "Power Subsystem Intern",
        company: "SES Astra",
        details:
            "Engineered an advanced tool to synchronise real-time telemetry, effectively correlating an empirical thermal model of operational temperature, EPC power, and solar inclination angle.",
    },
    {
        year: "Jul'16",
        position: "Flight Dynamics Intern",
        company: "SES Astra",
        details:
            "Designed and developed a verification tool to synchronize O3b and SP3 satellite visibility, significantly enhancing the precision of real-time telemetry across various internal systems.",
    },
];
