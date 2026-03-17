import React from 'react';

export function AmbientBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
            {/* ---------- TOP SECTION (Hero Area) ---------- */}
            <div className="absolute top-0 left-0 w-full h-[150vh] opacity-100 transition-opacity duration-1000">
                {/* Cool-toned top glow — matching app's dark charcoal + cyan aesthetic */}
                <div className="absolute top-[-15%] left-[-10%] w-[70vw] h-[50vh] rounded-[100%] bg-cyan-500/8 dark:bg-cyan-500/6 blur-[120px]" />
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vh] rounded-[100%] bg-sky-500/8 dark:bg-sky-500/5 blur-[140px]" />

                {/* Upper center subtle blue layer */}
                <div className="absolute top-[15%] left-[10%] w-[80vw] h-[70vh] rounded-[100%] bg-blue-500/6 dark:bg-blue-500/5 blur-[140px]" />

                {/* Mid-right teal depth */}
                <div className="absolute top-[30%] right-[5%] w-[60vw] h-[60vh] rounded-[100%] bg-teal-500/6 dark:bg-teal-500/4 blur-[130px]" />
            </div>

            {/* ---------- MIDDLE SECTION (Terminal/Features Area) ---------- */}
            <div className="absolute top-[200vh] left-0 w-full h-[200vh] opacity-100 transition-opacity duration-1000">
                {/* Left side cool blue glow */}
                <div className="absolute top-[10%] left-[-20%] w-[100vw] h-[80vh] rounded-[100%] bg-blue-500/6 dark:bg-blue-500/5 blur-[150px]" />

                {/* Right side subtle cyan glow */}
                <div className="absolute top-[40%] right-[-20%] w-[100vw] h-[80vh] rounded-[100%] bg-cyan-500/6 dark:bg-cyan-500/4 blur-[150px]" />

                {/* Center subtle glow */}
                <div className="absolute top-[70%] left-[20%] w-[80vw] h-[80vh] rounded-[100%] bg-sky-500/5 dark:bg-sky-500/4 blur-[150px]" />
            </div>

            {/* ---------- BOTTOM SECTION (Footer Area) ---------- */}
            <div className="absolute bottom-0 left-0 w-full h-[100vh] opacity-100 transition-opacity duration-1000">
                {/* Bottom cool-toned glows */}
                <div className="absolute bottom-[-15%] left-[-10%] w-[70vw] h-[60vh] rounded-[100%] bg-sky-500/6 dark:bg-sky-500/4 blur-[130px]" />
                <div className="absolute bottom-[-5%] right-[-10%] w-[80vw] h-[80vh] rounded-[100%] bg-cyan-500/6 dark:bg-cyan-500/4 blur-[140px]" />
                <div className="absolute bottom-[20%] left-[15%] w-[80vw] h-[60vh] rounded-[100%] bg-blue-500/5 dark:bg-blue-500/4 blur-[140px]" />
            </div>
        </div>
    );
}
