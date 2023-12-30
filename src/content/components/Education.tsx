import { appColors } from "@/src/utils";
import { educations } from "../strings";

export const Education = () => {
    return (
        <>
            <h3 className="text-uppercase pb-5 mt-0 text-center custom-title ft-wt-600">Education</h3>
            <ul>
                {educations.map((val, i) => (
                    <li key={i} style={{ listStyleType: "none", marginBottom: 20 }}>
                        <h5 className="poppins-font">
                            <span style={{ color: appColors.primary }}>{val.degree}</span>
                            <span className="place open-sans-font">{val.school}</span>
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
        </>
    );
};
