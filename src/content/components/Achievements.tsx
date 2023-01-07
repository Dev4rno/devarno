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
        <div className="row" style={{ marginTop: 60 }}>
            {achievementsContent.map((val, i) => (
                <div className="col-3" key={i}>
                    <div
                        style={{
                            width: 130,
                            height: 130,
                            border: "1px solid #ffb400",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginBottom: 30,
                        }}
                    >
                        <h3
                            className="poppins-font"
                            style={{ fontSize: 32, margin: 0 }}
                        >
                            {val.title}+
                        </h3>
                        <p
                            className="open-sans-font text-uppercase text-center"
                            style={{ fontSize: 13, color: "grey", margin: 0 }}
                        >
                            {val.subTitle1}{" "}
                            <span className="d-block" style={{}}>
                                {val.subTitle2}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
