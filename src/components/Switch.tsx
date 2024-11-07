import lightImage from "@/public/assets/img/brand/logo-transparent.png";
import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { useAppState } from "../context";
import { handleSwitchValue } from "../utils";

export const SwitchDark = () => {
    const {
        appState: { isDark, setIsDark },
    } = useAppState();

    const handleLabelClick = () => {
        if (isDark) {
            handleSwitchValue(true);
            setIsDark(false);
        } else {
            handleSwitchValue(false);
            setIsDark(true);
        }
    };

    useEffect(() => {
        const logo = document.getElementById("logo") as HTMLImageElement;
        let rotation = 0;

        const rotateLogo = () => {
            rotation += 90;
            logo.style.transition = "transform 0.15s ease-in-out";
            logo.style.transform = `rotate(${rotation}deg)`;
        };

        if (logo) {
            logo.addEventListener("click", rotateLogo);
        }

        return () => {
            if (logo) logo.removeEventListener("click", rotateLogo);
        };
    }, []);

    return (
        <div onClick={handleLabelClick} className={`theme-switcher-label${isDark ? " dark-mode" : ""}`}>
            <Box
                sx={{
                    height: { xs: 40, sm: 45, md: 50, lg: 55, xl: 60 },
                    width: { xs: 40, sm: 45, md: 50, lg: 55, xl: 60 },
                }}
            >
                <Image
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    src={lightImage}
                    alt="theme-switcher"
                    id="logo"
                />
            </Box>
        </div>
    );
};
