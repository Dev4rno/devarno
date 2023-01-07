import { FunctionComponent } from "react";

const achievementsContent = [
    { title: "12", subTitle1: "years of", subTitle2: "experience" },
    { title: "97", subTitle1: "completed", subTitle2: "projects" },
    { title: "81", subTitle1: "Happy", subTitle2: "customers" },
    { title: "53", subTitle1: "awards", subTitle2: "won" },
];

export const Achievements: FunctionComponent = (): JSX.Element => {
    return (
        <div className="row">
            {achievementsContent.map((val, i) => (
                <div className="col-6" key={i}>
                    <div className="box-stats with-margin">
                        <h3 className="poppins-font position-relative">
                            {val.title}
                        </h3>
                        <p className="open-sans-font m-0 position-relative text-uppercase">
                            {val.subTitle1}{" "}
                            <span className="d-block">{val.subTitle2}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
