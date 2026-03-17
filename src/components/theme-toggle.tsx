"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { markThemeAsUserSet } from "@/components/theme-provider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    function handleToggle() {
        markThemeAsUserSet(); // lock in manual preference, stop auto-override
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={handleToggle}
            className="w-11 h-11 px-0 rounded-full"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-zinc-600 dark:text-zinc-400" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-zinc-600 dark:text-zinc-400" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

