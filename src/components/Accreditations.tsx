import { accreditations } from "@/strings";
import { appColors } from "@/utils";
import { FunctionComponent, ReactElement } from "react";

export const Accreditations: FunctionComponent = (props): ReactElement => (
    <>
        <h3 className="text-uppercase pb-5 mt-0 text-center custom-title ft-wt-600">Accreditations</h3>
        <ul>
            {accreditations.map((val, i) => (
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
