import { capitalise } from "@/utils";

const personalInfoContent = [
    { meta: "name", metaInfo: "Alessandro Arno", hasColor: "" },
    { meta: "age", metaInfo: "27 Years", hasColor: "" },
    {
        meta: "nationalities",
        metaInfo: (
            <>
                <span className="fi fi-gb fis" style={{ marginLeft: 4 }} />
                <span className="fi fi-it fis" style={{ margin: "0 8px" }} />
                <span className="fi fi-lu fis" />
            </>
        ),
        hasColor: "",
    },
    { meta: "freelance", metaInfo: "Available", hasColor: "green" },
    { meta: "location", metaInfo: "London", hasColor: "" },
    { meta: "phone", metaInfo: "+44 (0)7474 294190", hasColor: "" },
    { meta: "email", metaInfo: "alex@devarno.com", hasColor: "" },
    {
        meta: "languages",
        metaInfo: (
            <>
                <span className="fi fi-gb fis" style={{ marginLeft: 4 }} />
                <span className="fi fi-it fis" style={{ margin: "0 8px" }} />
                <span className="fi fi-fr fis" />
                <span className="fi fi-es fis" style={{ margin: "0 8px" }} />
            </>
        ),
        hasColor: "",
    },
];

export const PersonalInfo = () => {
    return (
        <ul className="about-list list-unstyled open-sans-font">
            {personalInfoContent.map((val, i) => (
                <li key={i}>
                    <span className="title">{capitalise(val.meta)}: </span>
                    <span
                        className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
                    >
                        {val.metaInfo}
                    </span>
                </li>
            ))}
        </ul>
    );
};
