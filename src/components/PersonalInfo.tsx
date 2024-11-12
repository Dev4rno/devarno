import { Grid, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { appColors } from "../utils";

interface ContentBlock {
    name: string;
    value: string | JSX.Element;
    color?: string;
}

const nationalities = (
    <Stack direction="row" spacing={1.5}>
        <Tooltip title="British">
            <span className="fi fi-gb fic" />
        </Tooltip>
        <Tooltip title="Italian">
            <span className="fi fi-it fic" />
        </Tooltip>
        <Tooltip title="Luxembourgish">
            <span className="fi fi-lu fic" />
        </Tooltip>
    </Stack>
);

const languages = (
    <Stack direction="row" spacing={1}>
        <Tooltip title="English">
            <span className="fi fi-gb fic" />
        </Tooltip>
        <Tooltip title="French">
            <span className="fi fi-fr fic" />
        </Tooltip>
        <Tooltip title="Italian">
            <span className="fi fi-it fic" />
        </Tooltip>
        <Tooltip title="Spanish">
            <span className="fi fi-es fic" />
        </Tooltip>
    </Stack>
);

const content: ContentBlock[] = [
    { name: "name", value: "Alex Arno" },
    { name: "age", value: "28 years old" },
    {
        name: "nationalities",
        value: nationalities,
    },
    { name: "availability", value: "Contract • PT", color: "#7FFF00" },
    { name: "typing from", value: "London, UK" },
    { name: "email", value: "alex@devarno.com" },
    {
        name: "languages",
        value: languages,
        color: "",
    },
    { name: "reach", value: "30+ stakeholders" },
    {
        name: "stack",
        value: "40+ libraries",
    },
    {
        name: "fav. languages",
        value: "Python • TypeScript • Go",
    },
    {
        name: "fav. libraries",
        value: "pandas • scrapy • pyshark",
    },
    {
        name: "fav. FE frameworks",
        value: "Next.js • Remix • Svelte",
    },
    {
        name: "fav. BE frameworks",
        value: "FastAPI • NestJS • gin-gonic",
    },
    {
        name: "strengths",
        value: "APIs • Scripting • Testing",
    },
    {
        name: "devops",
        value: "MongoDB • Loki • Datadog",
    },
    {
        name: "env",
        value: "macOS • VSCode • Jazz",
    },
    {
        name: "fastest swim",
        value: "24.99s (50m free)",
    },
    {
        name: "fav. stroke",
        value: "butterfly",
    },
    {
        name: "fav. tennis player",
        value: "Jannik Sinner",
    },
    {
        name: "unusual hobby",
        value: "crafting mead",
    },
    {
        name: "strange side quest",
        value: "learning norwegian",
    },
    {
        name: "fav. band",
        value: "Supertramp",
    },
    {
        name: "fav. artist",
        value: "Declan McKenna",
    },
    {
        name: "fav. food",
        value: "beef • kiwi • blue cheese",
    },
];

interface PropTypes {
    isDark: boolean;
}

export const PersonalInfo: FC<PropTypes> = ({ isDark }) => {
    return (
        <Grid
            container
            display="flex"
            alignItems="stretch" // Ensure items stretch vertically
            justifyContent="center"
            width="100%"
            maxWidth={{ sm: "sm", md: "md" }}
            rowSpacing={{ xs: 1, sm: 2 }}
            columnSpacing={{ xs: 0, sm: 2 }}
        >
            {content.map((block) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={block.name}
                    display="flex"
                    alignItems="stretch" // Ensure Grid item stretches
                >
                    <Paper
                        key={block.name}
                        sx={{
                            height: "100%", // Ensure Paper takes full height of Grid item
                            width: "100%",
                            borderRadius: 2,
                            bgcolor: isDark ? "inherit" : "#262626",
                            border: `1px solid rgba(${
                                !isDark ? "255, 210, 107" : "211, 211, 211"
                            }, ${!isDark ? "0.5" : "0.5"})`,
                            display: "flex",
                            flexDirection: "column", // Ensure content is aligned vertically
                            padding: 2,
                        }}
                        elevation={4}
                    >
                        <Stack
                            spacing={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                height: "100%", // Ensure Stack stretches to fill the Paper
                            }}
                        >
                            <Typography
                                noWrap
                                fontFamily="monospace"
                                textTransform="uppercase"
                                letterSpacing={1.2}
                                style={{
                                    color: appColors[
                                        !isDark
                                            ? "primaryPastel"
                                            : "primaryLight"
                                    ],
                                }}
                            >
                                <strong>{block.name}</strong>
                            </Typography>
                            {typeof block.value === "string" ? (
                                <Typography
                                    noWrap
                                    variant="subtitle2"
                                    width="100%"
                                    textAlign="center"
                                    fontFamily="monospace"
                                    sx={{
                                        letterSpacing: -0.3,
                                        color: isDark
                                            ? appColors.lightText
                                            : appColors.darkText,
                                        fontSize: { xs: 17 },
                                    }}
                                >
                                    {block.value}
                                </Typography>
                            ) : (
                                block.value
                            )}
                        </Stack>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};
