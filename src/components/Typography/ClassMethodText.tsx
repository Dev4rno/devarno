import { appColors } from "@/src/utils";
import { Stack, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { LetterTypingText } from "./LetterTypingText";

interface PropTypes {
    isDark: boolean;
    text: string;
}

export const ClassMethodText: FC<PropTypes> = ({
    isDark,
    text,
}): ReactElement => {
    return (
        <Stack
            direction="row"
            sx={{
                width: "fit-content",
                backgroundColor: isDark
                    ? appColors.cardBgLight
                    : appColors.cardBgDark,
                padding: "2px 12px",
                borderRadius: 2,
                border: `1px solid rgba(${
                    !isDark ? "255, 210, 107" : "211, 211, 211"
                }, ${!isDark ? "0.2" : "0.5"})`,
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    fontFamily: "courier new",
                    fontWeight: isDark ? 600 : 500,
                    color: appColors[isDark ? "primaryLight" : "textLight"],
                }}
            >
                Alex.
            </Typography>
            <LetterTypingText text={text} isDark={isDark} />
        </Stack>
    );
};
