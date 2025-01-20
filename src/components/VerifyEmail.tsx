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

export const VerifyUser = ({
    token,
    isDark,
}: {
    token: string;
    isDark: boolean;
}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [emailVerified, setEmailVerified] = useState(false);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        if (!token) return;

        const fetchUserDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch user details
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
                    throw new Error("Failed to fetch user details.");
                }

                const data = await response.json();
                setEmail(data.email);
                setEmailVerified(data.emailVerified);
            } catch (err: any) {
                setError(err.message || "An unexpected error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [token]);

    const handleEmailVerification = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `https://reach.devarno.com/verify?token=${token}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Email verification failed. Please try again.");
            }

            setEmailVerified(true);
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
                        emailVerified
                            ? "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVyeWhqOXNob2hreHVldzhwdmk2eWNoNWxveW9hMTA3ZDVuMjB0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HTjcWZwMtHpyhuCGKZ/giphy.gif"
                            : "https://y.yarn.co/f6c67d56-5bb6-4681-a1cf-a64fbd74d083_text.gif"
                    }
                    alt="VerifGif"
                />
                {emailVerified ? (
                    <CardContent>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                color: appColors[
                                    isDark ? "textDark" : "primaryPastel"
                                ],
                            }}
                        >
                            Email Already Verified
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: appColors[
                                    isDark ? "textDark" : "textLight"
                                ],
                            }}
                        >
                            Your email has already been verified. No further
                            action is needed.
                        </Typography>
                    </CardContent>
                ) : (
                    <CardContent>
                        <Alert
                            variant="outlined"
                            severity="warning"
                            sx={{
                                mb: 2,
                                border: "none",
                                color: appColors[
                                    isDark ? "textDark" : "textLight"
                                ],
                            }}
                        >
                            Click the button below to verify{" "}
                            <code
                                style={{
                                    background: "#333",
                                    borderRadius: 4,
                                    color: "rgb(250, 189, 74)",
                                    fontWeight: 500,
                                    padding: "2px 6px",
                                }}
                            >
                                {email}
                            </code>
                            .
                        </Alert>
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={handleEmailVerification}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress /> : "Verify Email"}
                        </Button>
                    </CardContent>
                )}
            </Card>
        </Container>
    );
};
