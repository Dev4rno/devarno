import Image from "next/image";
import { useEffect } from "react";
import { heroContent } from "../strings";
import { startHeroTypewriter } from "../utils";

export const Hero = ({ setIndex }) => {
    const setAboutPage = () => setIndex(1);
    useEffect(() => {
        if (document) startHeroTypewriter(document);
    }, []);
    return (
        <div className="row home-details-container align-items-center">
            <div
                className="col-lg-4 bg position-fixed d-none d-lg-block"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.15)), url(${heroContent.imgMain})`,
                }}
            ></div>
            <div className="col-12 col-lg-10 offset-lg-3 home-details">
                <div>
                    <Image
                        alt="Hero Mobile"
                        src={heroContent.imgMobile}
                        className="img-fluid main-img-mobile d-sm-block d-lg-none"
                    />
                    <h1 className="text-uppercase hero-heading poppins-font p-0">
                        Hi, I{"'"}m {heroContent.name}.
                    </h1>
                    <div className="typewriter" id="tw" />
                    <div className="open-sans-font hero-description">{heroContent.description}</div>
                    <div className="hero-button">
                        <button className="button" onClick={setAboutPage}>
                            <span className="button-text">{heroContent.button}</span>
                            <span className="button-icon fa fa-arrow-right"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
