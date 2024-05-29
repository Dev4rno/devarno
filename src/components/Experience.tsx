import { experiences } from "@/strings";
import { appColors } from "@/utils";

export const Experience = () => {
    return (
        <>
            <h3 className="text-uppercase pb-5 mb-0 text-center custom-title ft-wt-600">Experience</h3>
            <ul>
                {experiences.map((val, i) => (
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
        </>
    );
};
