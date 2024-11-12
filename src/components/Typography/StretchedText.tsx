import { appColors } from "@/src/utils";
import { SxProps, Typography, TypographyVariant } from "@mui/material";
import { FC, ReactNode } from "react";

interface PropTypes {
    isDark: boolean;
    children: ReactNode;
    variant?: TypographyVariant;
    innerPad?: number;
}

export const StretchedText: FC<PropTypes> = (props) => {
    const style: SxProps = {
        color: !props.isDark ? appColors.textLight : appColors.textDark,
        lineHeight: 1.4,
        opacity: 0.8,
        wordBreak: "break-word",
        textAlign: "justify",
        textJustify: "inter-character",
        hyphens: "auto",
        msHyphenateLimitLines: 2,
        padding: props.innerPad || undefined,
    };
    return (
        <Typography variant={props.variant} sx={{ ...style }}>
            {props.children}
        </Typography>
    );
};
