"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    code: string;
    language?: string;
}

export function CodeBlock({ code, language = "bash", className, ...props }: CodeBlockProps) {
    const [copied, setCopied] = React.useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg bg-zinc-950 p-4 border border-zinc-800">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-zinc-400">{language}</span>
                <button
                    onClick={onCopy}
                    className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
            </div>
            <pre
                className={cn(
                    "overflow-x-auto text-sm text-zinc-100 font-mono leading-relaxed",
                    className
                )}
                {...props}
            >
                <code>{code}</code>
            </pre>
        </div>
    );
}
