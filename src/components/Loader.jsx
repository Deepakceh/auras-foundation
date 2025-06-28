"use client";

import { useEffect, useState } from "react";
import { Handshake } from "lucide-react";

export default function Loader({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Show for 2 seconds every time

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-green-50 text-green-800 flex-col">
                <Handshake className="w-12 h-12 animate-bounce mb-4" />
                <p className="text-xl font-semibold">Empowering lives... Please wait</p>
            </div>
        );
    }

    return <>{children}</>;
}
