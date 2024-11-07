import { experiences } from "@/strings";
import { appColors } from "@/utils";
import { Typography } from "@mui/material";
import { useAppState } from "../context";

export const Experience = () => {
    const {
        appState: { isDark },
    } = useAppState();
    return (
        <>
            <h3 className="text-uppercase pb-5 mb-0 text-center custom-title ft-wt-600">Experience</h3>
            <ul>
                {experiences.map((val, i) => (
                    <li key={i} style={{ listStyleType: "none", marginBottom: 20 }}>
                        <h5 className="poppins-font">
                            <span style={{ color: isDark ? "#ff8c00" : appColors.primary }}>{val.position}</span>
                            <span className="place open-sans-font text-uppercases">{val.company}</span>
                        </h5>
                        <Typography variant="subtitle1">{val.details}</Typography>
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
