"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const RESPONSE = `{
  "event": "2028 US Presidential Election Winner",
  "consensus_probability": 0.54,
  "arbitrage_spread": 0.04,
  "last_updated": "2026-03-06T16:30:00Z",
  "venues": [
    { "name": "polymarket", "price": 0.56 },
    { "name": "kalshi", "price": 0.52 }
  ]
}`;

const tabs = [
  {
    label: "curl",
    language: "bash",
    request: `curl https://api.eventgraph.ai/v1/events/evt_2028_us_president \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    response: RESPONSE,
  },
  {
    label: "Python",
    language: "python",
    request: `import eventgraph

client = eventgraph.Client(api_key="YOUR_API_KEY")
event  = client.events.get("evt_2028_us_president")`,
    response: RESPONSE,
  },
  {
    label: "JavaScript",
    language: "javascript",
    request: `import EventGraph from '@eventgraph/sdk';

const client = new EventGraph({ apiKey: 'YOUR_API_KEY' });
const event  = await client.events.get('evt_2028_us_president');`,
    response: RESPONSE,
  },
];

export function APICodeTabs() {
  const [active, setActive] = useState(0);
  const [copiedReq, setCopiedReq] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const copy = (text: string, which: "req" | "res") => {
    navigator.clipboard.writeText(text);
    if (which === "req") {
      setCopiedReq(true);
      setTimeout(() => setCopiedReq(false), 2000);
    } else {
      setCopiedRes(true);
      setTimeout(() => setCopiedRes(false), 2000);
    }
  };

  const tab = tabs[active];

  return (
    <div className="rounded-xl border border-zinc-700/50 bg-zinc-950 shadow-[0_0_48px_-6px_rgba(99,102,241,0.35)] ring-1 ring-indigo-500/20 overflow-hidden">
      {/* Language tab bar */}
      <div className="flex items-center gap-1 border-b border-zinc-800 px-4 py-2.5">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={cn(
              "px-3 py-1.5 text-xs font-semibold rounded-md transition-colors",
              active === i
                ? "bg-indigo-600/25 text-indigo-300 border border-indigo-500/40"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* REQUEST block */}
      <div>
        <div className="flex items-center justify-between px-5 pt-4 pb-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Request</span>
          <button
            onClick={() => copy(tab.request, "req")}
            aria-label="Copy request"
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded"
          >
            {copiedReq ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
        <div className="px-5 pb-4 overflow-x-auto">
          <pre className="text-sm text-zinc-100 font-mono leading-7 whitespace-pre">
            <code>{tab.request}</code>
          </pre>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800" />

      {/* RESPONSE block */}
      <div>
        <div className="flex items-center justify-between px-5 pt-4 pb-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-500/80">Response</span>
          <button
            onClick={() => copy(tab.response, "res")}
            aria-label="Copy response"
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded"
          >
            {copiedRes ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
        <div className="px-5 pb-4 overflow-x-auto">
          <pre className="text-sm text-emerald-300/90 font-mono leading-7 whitespace-pre">
            <code>{tab.response}</code>
          </pre>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 px-5 py-2.5 flex items-center gap-3">
        <span className="text-xs text-zinc-500 font-mono">{tab.language}</span>
        <span className="text-xs text-zinc-700">•</span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-500/80">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          live
        </span>
      </div>
    </div>
  );
}
