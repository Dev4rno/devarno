import { Accreditations, Achievements, Experience, PersonalInfo, Proficiencies } from "@/components";
import { Stack } from "@mui/material";
import { ResumeButton } from "./ResumeButton";

export const AboutMain = () => {
    return (
        <section className="main-content">
            <div className="container">
                <div className="row">
                    <Stack spacing={6}>
                        <PersonalInfo />
                        <Achievements />
                        <ResumeButton />
                    </Stack>
                </div>
                <hr className="separator" />
                <div className="row">
                    <Proficiencies />
                </div>
                <hr className="separator mt-1" />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="resume-box">
                            <Experience />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="resume-box">
                            <Accreditations />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
