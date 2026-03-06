"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    key: "markets",
    label: "Markets",
    desc: "Explore prediction markets across venues with unified event data.",
    headers: ["Event", "Prob", "Volume"],
    rows: [
      ["US Election 2026", "62%", "$2.4M"],
      ["Fed Rate Cut Jul", "38%", "$890K"],
      ["SpaceX Mars 2027", "42%", "$1.1M"],
      ["AI Regulation Bill", "71%", "$560K"],
      ["BTC $150K EOY", "55%", "$3.2M"],
      ["Trump VP Pick", "81%", "$1.8M"],
    ],
    accent: "text-emerald-400",
  },
  {
    key: "screener",
    label: "Screener",
    desc: "Filter markets by category, volume, liquidity, and probability.",
    headers: ["Category", "Markets", "Min Volume"],
    rows: [
      ["Politics", "24 mkts", ">$100K"],
      ["Sports", "89 mkts", ">$50K"],
      ["Crypto", "31 mkts", ">$200K"],
      ["Science & Tech", "12 mkts", ">$10K"],
      ["Culture", "47 mkts", ">$25K"],
      ["Economics", "19 mkts", ">$75K"],
    ],
    accent: "text-blue-400",
  },
  {
    key: "cross-venue",
    label: "Cross-Venue",
    desc: "Compare odds across Polymarket, Kalshi, and other venues.",
    headers: ["Event", "Polymarket", "Kalshi"],
    rows: [
      ["US Election 2026", "62¢", "59¢"],
      ["Fed Rate Cut Jul", "38¢", "41¢"],
      ["AI Regulation Bill", "71¢", "68¢"],
      ["SpaceX Mars 2027", "44¢", "42¢"],
      ["BTC $150K EOY", "55¢", "52¢"],
      ["Trump VP Pick", "81¢", "79¢"],
    ],
    accent: "text-violet-400",
  },
  {
    key: "arbitrage",
    label: "Arbitrage",
    desc: "Automatically detect price differences across platforms.",
    headers: ["Event", "Spread", "Volume"],
    rows: [
      ["US Election 2026", "+3.2%", "$2.4M"],
      ["Fed Rate Cut Jul", "+1.8%", "$890K"],
      ["AI Regulation Bill", "+2.5%", "$340K"],
      ["BTC $150K EOY", "+3.0%", "$3.2M"],
      ["SpaceX Mars 2027", "+1.1%", "$1.1M"],
      ["Trump VP Pick", "+2.1%", "$1.8M"],
    ],
    accent: "text-emerald-400",
  },
];

export function TerminalTabs() {
  const [active, setActive] = useState(0);

  // Auto-rotate every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const tab = tabs[active];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-4">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            onClick={() => setActive(i)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
              active === i
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Screenshot area */}
      <div className="rounded-xl border border-border bg-background overflow-hidden shadow-lg">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-zinc-950/50">
          <div className="flex items-center gap-3">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
            </div>
            <span className="text-xs text-muted-foreground font-medium">{tab.label}</span>
          </div>
          <span className="text-[10px] text-muted-foreground/50 font-mono">app.eventgraph.ai/terminal/{tab.key}</span>
        </div>

        {/* Description */}
        <div className="px-5 py-3 border-b border-border/50">
          <p className="text-xs text-muted-foreground">{tab.desc}</p>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-3 gap-4 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/50 border-b border-border/30">
          {tab.headers.map((h) => (
            <span key={h} className={h !== tab.headers[0] ? "text-right" : ""}>
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        <div>
          {tab.rows.map((row, j) => (
            <div
              key={j}
              className="grid grid-cols-3 gap-4 px-5 py-3 border-b border-border/20 last:border-0 hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-sm text-foreground/90 font-medium">{row[0]}</span>
              <span className={cn("text-sm text-right font-mono", tab.accent)}>{row[1]}</span>
              <span className="text-sm text-right text-foreground/50 font-mono">{row[2]}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-border/30 flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground/40">Showing {tab.rows.length} of {tab.rows.length * 8}+ results</span>
          <span className="text-[10px] text-muted-foreground/40">Updated 2s ago</span>
        </div>
      </div>
    </div>
  );
}
