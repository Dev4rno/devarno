import { Unsubscribe } from "@/src/components";
import { useAppState } from "@/src/context";
import { useRouter } from "next/router";

export default function UnsubscribePage() {
    const router = useRouter();
    const { token } = router.query;
    const { isDark } = useAppState();
    if (typeof token !== "string") return;
    if (!token) {
        return <p>Loading...</p>;
    }
    return <Unsubscribe isDark={isDark} token={token} />;
}
