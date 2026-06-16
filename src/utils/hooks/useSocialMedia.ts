import { ISocialMedia } from "@/src/core/types/ISocialMedia";
import { useEffect, useState } from "react";
import { getSocialMedia } from "../sevices/api/socialMedia/getSocial";


export const useSocialMedia = () => {
    const [socials, setSocials] = useState<ISocialMedia[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getSocialMedia();
                setSocials(result.data || []);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { socials, loading };
};