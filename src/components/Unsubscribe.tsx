import {
    Alert,
    Button,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { appColors } from "../utils";

export const Unsubscribe = ({
    token,
    isDark,
}: {
    token: string;
    isDark: boolean;
}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [preferences, setPreferences] = useState({
        content: false,
        product: false,
        marketing: false,
    });
    const [allUnsubscribed, setAllUnsubscribed] = useState(false);

    useEffect(() => {
        if (!token) return;

        const fetchUserPreferences = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://reach.devarno.com/user?token=${token}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch user preferences.");
                }

                const data = await response.json();
                setPreferences(data.preferences);
                setAllUnsubscribed(
                    !data.preferences.content &&
                        !data.preferences.product &&
                        !data.preferences.marketing
                );
            } catch (err: any) {
                setError(err.message || "An unexpected error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserPreferences();
    }, [token]);

    const handleUnsubscribe = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `https://reach.devarno.com/unsubscribe?token=${token}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        content: false,
                        product: false,
                        marketing: false,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update preferences.");
            }

            setPreferences({
                content: false,
                product: false,
                marketing: false,
            });
            setAllUnsubscribed(true);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    if (error) {
        return (
            <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 10 }}>
            <Card
                sx={{
                    bgcolor: appColors[`cardBg${isDark ? "Light" : "Dark"}`],
                    border: `3px solid rgba(${
                        !isDark ? "255, 210, 107" : "211, 211, 211"
                    }, ${!isDark ? "0.2" : "0.5"})`,
                    borderRadius: 4,
                }}
            >
                <CardMedia
                    component="img"
                    height="500"
                    image={
                        allUnsubscribed
                            ? "https://media.tenor.com/n2phw_K-XuYAAAAM/homer-simpsons.gif"
                            : "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"
                    }
                    alt="Unsubscribe Gif"
                />
                <CardContent>
                    {allUnsubscribed ? (
                        <>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    color: appColors[
                                        isDark ? "textDark" : "primaryPastel"
                                    ],
                                }}
                            >
                                You're Unsubscribed
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: appColors[
                                        isDark ? "textDark" : "textLight"
                                    ],
                                }}
                            >
                                You are no longer subscribed to Devarno email
                                updates. No further action is needed.
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Alert
                                severity="warning"
                                sx={{
                                    mb: 2,
                                    border: "none",
                                    bgcolor: "inherit",
                                    fontSize: 16,
                                    color: appColors[
                                        isDark ? "textDark" : "textLight"
                                    ],
                                }}
                            >
                                You are currently subscribed to the following
                                Devarno updates:
                                <ul style={{ marginTop: 8 }}>
                                    {preferences.product && (
                                        <li>
                                            New Features & Product Announcements
                                        </li>
                                    )}
                                    {preferences.content && (
                                        <li>Curated Articles & Newsletters</li>
                                    )}
                                    {preferences.marketing && (
                                        <li>Exciting Offers & Promotions</li>
                                    )}
                                </ul>
                            </Alert>
                            <Button
                                variant="contained"
                                color="warning"
                                onClick={handleUnsubscribe}
                                disabled={loading}
                            >
                                {loading ? (
                                    <CircularProgress />
                                ) : (
                                    "Unsubscribe from All"
                                )}
                            </Button>
                        </>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
};
