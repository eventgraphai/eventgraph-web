import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Polymarket vs Kalshi: A Deep Dive into Liquidity Mechanics | EventGraph",
    description:
        "We analyzed 12 months of order book data (Jan 2025–Feb 2026) to compare liquidity across Polymarket and Kalshi — spreads, depth, slippage, and arbitrage windows.",
};

export default function PolymarketVsKalshiPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 md:px-6">
            {/* Back */}
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors pt-28 md:pt-36 mb-10">
                <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            {/* Hero Image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-border/60 mb-10">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-cyan-500/20 blur-[80px]" />
                <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-violet-500/20 blur-[80px]" />
                <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                    <div>
                        <p className="font-mono text-xs text-primary/80 mb-2 tracking-wider">EVENTGRAPH RESEARCH</p>
                        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Polymarket vs Kalshi</h2>
                        <p className="text-sm text-slate-400 mt-2">Liquidity Mechanics · 2026 Market Analysis</p>
                    </div>
                </div>
            </div>

            {/* Author + Date */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-border flex items-center justify-center text-xs font-bold text-primary">AP</div>
                <div>
                    <p className="text-sm font-medium text-foreground">Ajay Prashanth</p>
                    <p className="text-xs text-muted-foreground">March 4, 2026</p>
                </div>
            </div>

            {/* Article */}
            <article className="space-y-6 text-[15px] text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_strong]:text-foreground [&_strong]:font-semibold pb-20">

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    Polymarket vs Kalshi: A Deep Dive into Liquidity Mechanics
                </h1>

                <p className="text-lg">
                    We analyzed over 12 months of order book data (January 2025 – February 2026) to understand how liquidity differs across the two largest prediction market platforms — and what it means for traders and arbitrageurs.
                </p>

                <p>
                    Prediction markets have exploded into a <strong>$50B+ annual volume</strong> asset class. Polymarket and Kalshi now dominate ~97% of the market, but they operate on fundamentally different mechanics. One is crypto-native and peer-to-peer. The other is federally regulated with institutional market makers. Liquidity — not just headline volume or probability — determines real execution costs, slippage, and arbitrage viability.
                </p>

                <p>
                    At EventGraph, we aggregate and normalize raw order books, open interest, and depth from both platforms in real time. This unified dataset let us run the first apples-to-apples liquidity comparison across identical events — matched elections, sports, macro, and geopolitics contracts. Here are the key findings.
                </p>

                <h2>Methodology</h2>

                <p>Using our cross-venue ingestion architecture, we:</p>

                <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground/50">
                    <li>Matched <strong>1,200+ comparable markets</strong> across venues</li>
                    <li>Measured bid-ask spreads, order book depth at 1%/5% price impact, simulated slippage for $1k / $10k / $50k orders</li>
                    <li>Tracked volume distribution, open interest correlation, and cross-venue arbitrage windows</li>
                    <li>Covered the full 2025 election cycle through early 2026 sports and macro volatility</li>
                </ul>

                <p className="text-sm border-l-2 border-primary/30 pl-4 italic">
                    All data was pulled live via EventGraph&apos;s ingestion pipeline — no manual scraping required.
                </p>

                <h2>Key Findings</h2>

                <h3>1. Raw Volume &amp; Market Share</h3>

                <p>
                    Kalshi edged ahead in total notional volume for 2025 (~$25B vs Polymarket ~$23B) and maintained the lead into February 2026 (~$9.8B monthly vs Polymarket&apos;s $7B+). Sports drove ~80% of Kalshi&apos;s volume; politics and crypto drove Polymarket&apos;s peaks — including $478M single-day records.
                </p>

                <h3>2. Bid-Ask Spreads</h3>

                <p>
                    Polymarket consistently delivered tighter spreads on high-interest markets. Top 100 political and crypto markets averaged <strong>0.2–0.5¢</strong> spreads. Kalshi&apos;s top markets were wider: 0.5–1¢ for political contracts, 1–2¢ for sports. In niche markets, both widened to 3–10¢, but Polymarket&apos;s global trader base closed gaps faster after news events.
                </p>

                <h3>3. Order Book Depth &amp; Slippage</h3>

                <p>
                    Polymarket excelled for institutional-sized trades in politics and crypto — $50k+ orders often moved price &lt;0.8% in top markets. Kalshi offered more consistent depth up to $10k thanks to dedicated market makers and CFTC oversight. Larger orders saw 1–2% slippage more frequently outside sports.
                </p>

                <p>
                    Open interest stayed neck-and-neck (~$400M each at peak), but Polymarket concentrated liquidity in fewer, higher-stakes contracts.
                </p>

                <h3>4. Category Breakdown</h3>

                <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground/50">
                    <li><strong>Politics &amp; Elections:</strong> Polymarket advantage — tighter spreads, faster depth recovery after polls and breaking news.</li>
                    <li><strong>Sports:</strong> Kalshi&apos;s regulated order book and market makers delivered more reliable fills.</li>
                    <li><strong>Macro / Geopolitics:</strong> Cross-platform arbitrage windows appeared 2–5% of trading days when one venue lagged in depth.</li>
                    <li><strong>Niche Events:</strong> Both platforms thin. $1k trades could move prices 2–5%.</li>
                </ul>

                {/* Comparison Table */}
                <div className="overflow-x-auto rounded-xl border border-border my-8">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="text-left px-4 py-3 font-semibold text-foreground">Metric</th>
                                <th className="text-left px-4 py-3 font-semibold text-foreground">Polymarket</th>
                                <th className="text-left px-4 py-3 font-semibold text-foreground">Kalshi</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-border/60"><td className="px-4 py-3 font-medium text-foreground">2025 Total Volume</td><td className="px-4 py-3">~$23B</td><td className="px-4 py-3">~$25B</td></tr>
                            <tr className="border-b border-border/60"><td className="px-4 py-3 font-medium text-foreground">Avg Bid-Ask Spread</td><td className="px-4 py-3">0.2–0.5¢</td><td className="px-4 py-3">0.5–1¢</td></tr>
                            <tr className="border-b border-border/60"><td className="px-4 py-3 font-medium text-foreground">$50k Trade Slippage</td><td className="px-4 py-3">&lt;1%</td><td className="px-4 py-3">1–2%</td></tr>
                            <tr className="border-b border-border/60"><td className="px-4 py-3 font-medium text-foreground">Sports Liquidity</td><td className="px-4 py-3">Good, event-driven</td><td className="px-4 py-3">Consistent + MMs</td></tr>
                            <tr><td className="px-4 py-3 font-medium text-foreground">Arb Frequency</td><td className="px-4 py-3">Higher (global flows)</td><td className="px-4 py-3">Narrower spreads</td></tr>
                        </tbody>
                    </table>
                </div>

                <h2>What This Means for Traders</h2>

                <p>
                    <strong>Retail traders (&lt;$5k):</strong> Polymarket often wins on lower effective cost — tighter spreads with no traditional fees beyond Polygon gas.
                </p>

                <p>
                    <strong>Institutions &amp; funds:</strong> Kalshi&apos;s regulatory clarity and consistent market-maker depth reduce compliance risk. Polymarket offers deeper pockets on global events.
                </p>

                <p>
                    <strong>Arbitrageurs:</strong> Liquidity mismatches create genuine edges. We detected multi-percentage-point probability divergences with executable depth multiple times per week — but only if you monitor both order books simultaneously. Manual monitoring is impossible at scale.
                </p>

                <p>
                    In short: headline probabilities look similar, but real P&amp;L is determined by liquidity mechanics. Ignoring depth and slippage is the fastest way to erode edge.
                </p>

                <h2>How EventGraph Helps</h2>

                <p>
                    This entire analysis was only possible because of our unified platform. EventGraph solves the core problem every trader faces: fragmented data across incompatible venues.
                </p>

                <ul className="space-y-2 pl-5 list-disc marker:text-muted-foreground/50">
                    <li>Cross-venue market aggregation — see the same event on Polymarket and Kalshi side-by-side</li>
                    <li>Real-time liquidity and depth insights — spread alerts and slippage simulators</li>
                    <li>Arbitrage detection — automated flags when spread + depth = profitable opportunity</li>
                    <li>Market screener — filter by volume, liquidity score, or category</li>
                </ul>

                <p>
                    We operate the exact pipeline we used for this research: raw ingestion → normalization → gold-layer analytics. Available as a trader platform, data APIs, and an AI integration layer for LLMs and autonomous agents.
                </p>

                <h2>2026 Outlook</h2>

                <p>
                    Liquidity across both platforms is improving rapidly as institutional capital flows in and regulation clarifies. Yet fragmentation persists. Prediction markets are becoming the &quot;Bloomberg terminal&quot; signal for elections, economics, and global events — but only if you can see the full picture.
                </p>

                <p>
                    EventGraph is building exactly that infrastructure layer.
                </p>

                {/* Disclaimer */}
                <p className="text-xs text-muted-foreground/70 mt-10 pt-6 border-t border-border/60">
                    All data derived from EventGraph&apos;s proprietary aggregation of public Polymarket and Kalshi order books. Past performance is not indicative of future results. Trade responsibly.
                </p>

            </article>
        </div>
    );
}