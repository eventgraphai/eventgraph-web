import React from 'react';

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
            {/* ---------- TOP SECTION (Hero Area) ---------- */}
            <div className="absolute top-0 left-0 w-full h-[150vh] opacity-100 transition-opacity duration-1000">
                {/* Top Edge Warm Orange Glow - Stronger in light mode */}
                <div className="absolute top-[-20%] left-[-10%] w-[120vw] h-[50vh] rounded-[100%] bg-orange-400/50 dark:bg-orange-950/20 blur-[100px]" />

                {/* Upper Center Cool Blue Glow */}
                <div className="absolute top-[0%] left-[-10%] w-[120vw] h-[80vh] rounded-[100%] bg-blue-400/30 dark:bg-blue-950/20 blur-[120px]" />

                {/* Middle/Bottom Soft Purple/Pink Glow for depth */}
                <div className="absolute top-[40%] right-[-20%] w-[80vw] h-[60vh] rounded-[100%] bg-violet-400/30 dark:bg-violet-950/20 blur-[120px]" />
            </div>

            {/* ---------- BOTTOM SECTION (Footer Area) ---------- */}
            <div className="absolute bottom-0 left-0 w-full h-[100vh] opacity-100 transition-opacity duration-1000">
                {/* Bottom edge warm glow spreading upward */}
                <div className="absolute bottom-[-20%] left-[-10%] w-[120vw] h-[60vh] rounded-[100%] bg-orange-400/40 dark:bg-orange-950/20 blur-[120px]" />

                {/* Cool blue base layer */}
                <div className="absolute bottom-[0%] right-[-10%] w-[120vw] h-[80vh] rounded-[100%] bg-blue-400/20 dark:bg-blue-950/20 blur-[140px]" />
            </div>
        </div>
    );
}
