import { appColors } from "@/src/utils";
import { Box, Stack, Typography } from "@mui/material";

const personalInfoContent = [
    { name: "Name", value: "Alessandro Arno" },
    { name: "Age", value: "27" },
    {
        name: "Nationalities",
        value: (
            <>
                <span className="fi fi-gb fis" style={{ marginLeft: 4 }} />
                <span className="fi fi-it fis" style={{ margin: "0 8px" }} />
                <span className="fi fi-lu fis" />
            </>
        ),
        color: "",
    },
    { name: "Freelance", value: "Available", color: "#7FFF00" },
    { name: "Location", value: "London" },
    { name: "Phone", value: "+44 (0)7474 294190" },
    { name: "Email", value: "alex@devarno.com" },
    {
        name: "Languages",
        value: (
            <>
                <span className="fi fi-gb fis" style={{ marginLeft: 4 }} />
                <span className="fi fi-it fis" style={{ margin: "0 8px" }} />
                <span className="fi fi-fr fis" />
                <span className="fi fi-es fis" style={{ margin: "0 8px" }} />
            </>
        ),
        color: "",
    },
];

export const PersonalInfo = () => {
    return (
        <Box>
            <h3 className="text-uppercase text-center custom-title ft-wt-600">Details</h3>
            <Stack
                width="100%"
                direction="row"
                spacing={{ sm: 0, md: 6 }}
                sx={{
                    justifyContent: { sm: "space-evenly", md: "center" },
                    display: { xs: "none", sm: "flex" },
                }}
            >
                <Box>
                    {personalInfoContent.slice(0, 4).map((x) => (
                        <Stack direction="row" key={x.name} spacing={2}>
                            <Typography variant="h6" sx={{ color: appColors.primary }}>
                                {x.name}
                            </Typography>
                            <Typography variant="h6" fontWeight={300} sx={{ color: x.color }}>
                                {x.value}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
                <Box>
                    {personalInfoContent.slice(4, 8).map((x) => (
                        <Stack direction="row" key={x.name} spacing={2}>
                            <Typography variant="h6" sx={{ color: appColors.primary }}>
                                {x.name}
                            </Typography>
                            <Typography fontWeight={300} variant="h6">
                                {x.value}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
            </Stack>
            <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                <Stack alignItems="start" justifyContent="start" display={{ xs: "flex", sm: "none" }}>
                    {personalInfoContent.map((x) => (
                        <Stack direction="row" key={x.name} spacing={2}>
                            <Typography
                                variant="h6"
                                fontWeight={500}
                                letterSpacing={1}
                                sx={{ color: appColors.primary }}
                            >
                                {x.name}
                            </Typography>
                            <Typography variant="h6" fontWeight={300} sx={{ color: x.color }}>
                                {x.value}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};
