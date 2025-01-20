import { VerifyUser } from "@/src/components";
import { useAppState } from "@/src/context";
import { useRouter } from "next/router";

export default function VerifyPage() {
    const router = useRouter();
    const { token } = router.query;
    const { isDark } = useAppState();
    if (typeof token !== "string") return;
    if (!token) {
        return <p>Loading...</p>;
    }
    return <VerifyUser isDark={isDark} token={token} />;
}
