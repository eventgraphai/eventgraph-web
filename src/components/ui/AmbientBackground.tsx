import React from 'react';

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
            {/* ---------- TOP SECTION (Hero Area) ---------- */}
            <div className="absolute top-0 left-0 w-full h-[150vh] opacity-100 transition-opacity duration-1000">
                {/* Top deep navy glow - institutional analytics tone */}
                <div className="absolute top-[-20%] left-[-10%] w-[120vw] h-[50vh] rounded-[100%] bg-blue-600/15 dark:bg-blue-900/25 blur-[120px]" />

                {/* Upper center indigo layer */}
                <div className="absolute top-[0%] left-[-10%] w-[120vw] h-[80vh] rounded-[100%] bg-indigo-500/10 dark:bg-indigo-950/20 blur-[140px]" />

                {/* Mid-right violet depth layer */}
                <div className="absolute top-[40%] right-[-20%] w-[80vw] h-[60vh] rounded-[100%] bg-violet-600/10 dark:bg-violet-950/15 blur-[130px]" />
            </div>

            {/* ---------- BOTTOM SECTION (Footer Area) ---------- */}
            <div className="absolute bottom-0 left-0 w-full h-[100vh] opacity-100 transition-opacity duration-1000">
                {/* Bottom indigo glow spreading upward */}
                <div className="absolute bottom-[-20%] left-[-10%] w-[120vw] h-[60vh] rounded-[100%] bg-indigo-600/10 dark:bg-indigo-950/15 blur-[120px]" />

                {/* Deep blue base layer */}
                <div className="absolute bottom-[0%] right-[-10%] w-[120vw] h-[80vh] rounded-[100%] bg-blue-500/8 dark:bg-blue-950/15 blur-[140px]" />
            </div>
        </div>
    );
}
