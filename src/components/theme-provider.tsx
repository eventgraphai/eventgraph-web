"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

const USER_SET_KEY = "theme-user-set";

/**
 * On first visit (no manual preference saved), automatically pick light or
 * dark based on the user's local time:
 *   06:00 – 18:00  →  light
 *   18:00 – 06:00  →  dark
 *
 * Once the user manually toggles the theme, their choice is stored and
 * respected on every subsequent visit.
 */
function TimeBasedThemeInit() {
    const { setTheme } = useTheme();

    React.useEffect(() => {
        const userHasSetTheme = localStorage.getItem(USER_SET_KEY);
        if (userHasSetTheme) return; // respect manual preference

        const hour = new Date().getHours();
        const isDaytime = hour >= 6 && hour < 18;
        setTheme(isDaytime ? "light" : "dark");
    }, [setTheme]);

    return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <TimeBasedThemeInit />
            {children}
        </NextThemesProvider>
    );
}

/** Call this when the user manually picks a theme so we stop overriding it. */
export function markThemeAsUserSet() {
    localStorage.setItem(USER_SET_KEY, "true");
}

