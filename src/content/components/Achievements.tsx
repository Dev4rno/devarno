import { FunctionComponent } from "react";

const achievementsContent = [
    { title: "6", subTitle1: "years of", subTitle2: "experience" },
    { title: "12", subTitle1: "completed", subTitle2: "projects" },
    {
        title: "15",
        subTitle1: "Self-taught",
        subTitle2: "skills",
    },
    { title: "4", subTitle1: "Languages", subTitle2: "spoken" },
];

export const Achievements: FunctionComponent = (): JSX.Element => {
    return (
        <div className="row">
            {achievementsContent.map((val, i) => (
                <div className="col-6" key={i}>
                    <div className="box-stats with-margin">
                        <h3 className="poppins-font">{val.title}</h3>
                        <p className="open-sans-font text-uppercase">
                            {val.subTitle1}{" "}
                            <span className="d-block">{val.subTitle2}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
