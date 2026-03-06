import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight, TerminalSquare, Database, FileJson, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "API Platform | EventGraph",
    description: "Developer-friendly APIs for normalized prediction market data and intelligence.",
};

export default function ApiPage() {
    const endpoints = [
        { method: "GET", path: "/v1/events", desc: "List all active prediction events across all venues" },
        { method: "GET", path: "/v1/markets", desc: "Get specific market order books and pricing" },
        { method: "GET", path: "/v1/cross-venue", desc: "Get normalized price comparisons for specific events" },
        { method: "GET", path: "/v1/arbitrage", desc: "Scan and fetch real-time arb opportunities" },
        { method: "GET", path: "/v1/probabilities", desc: "Get consensus probability scores for outcomes" },
    ];

    return (
        <>
            <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">REST API Platform</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Build with the EventGraph API</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        A single, powerful REST API to query normalized prediction market data, cross-venue analytics, and arbitrage opportunities.
                    </p>
                    <div className="pt-6">
                        <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
                            <Button size="lg" className="h-14 px-8 text-lg group">
                                Read the Docs
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-background-subtle border-y border-border">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Normalized Data Layer</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Every prediction market venue uses different data schemas, market resolutions, and order book structures. EventGraph handles the messy integrations, offering you a clean, unified JSON schema.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start text-muted-foreground">
                                <div className="mr-3 p-1 rounded bg-primary/20 text-primary mt-1">
                                    <Database className="w-4 h-4" />
                                </div>
                                <div>
                                    <strong className="text-foreground block">Venue-Agnostic Setup</strong>
                                    Query Polymarket, Kalshi, and Limitless with exactly the same parameters.
                                </div>
                            </li>
                            <li className="flex items-start text-muted-foreground">
                                <div className="mr-3 p-1 rounded bg-primary/20 text-primary mt-1">
                                    <FileJson className="w-4 h-4" />
                                </div>
                                <div>
                                    <strong className="text-foreground block">Structured JSON</strong>
                                    Clean order books, trades, and liquidity metrics ready for ingestion.
                                </div>
                            </li>
                            <li className="flex items-start text-muted-foreground">
                                <div className="mr-3 p-1 rounded bg-primary/20 text-primary mt-1">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <div>
                                    <strong className="text-foreground block">Intelligence Included</strong>
                                    Directly fetch consensus probability or arbitrage spreads, no local calculations needed.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-background rounded-xl p-2 border border-border shadow-sm">
                        <CodeBlock
                            language="json"
                            code={`// GET /v1/events/president-2028/cross-venue
{
  "id": "president-2028",
  "title": "Who will win the 2028 US Presidential Election?",
  "consensus_probability": {
    "democrat": 0.48,
    "republican": 0.52
  },
  "venues": {
    "polymarket": {
      "democrat": 0.49,
      "republican": 0.51,
      "liquidity": 12050000
    },
    "kalshi": {
      "democrat": 0.46,
      "republican": 0.54,
      "liquidity": 8500000
    }
  },
  "arbitrage_available": true,
  "max_spread": 0.03
}`}
                        />
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Core Endpoints</h2>
                        <p className="text-muted-foreground">The most powerful prediction market REST API ever built. Base URL: <code className="bg-muted px-2 py-1 rounded text-primary text-sm">https://api.eventgraph.ai</code></p>
                    </div>

                    <div className="space-y-4">
                        {endpoints.map((ep, i) => (
                            <Card key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background-subtle hover:border-primary/50 transition-colors shadow-none">
                                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                                    <span className="bg-primary/20 text-primary uppercase text-xs font-bold px-2 py-1 rounded w-12 text-center">
                                        {ep.method}
                                    </span>
                                    <span className="font-mono text-sm font-medium">{ep.path}</span>
                                </div>
                                <div className="text-muted-foreground text-sm">
                                    {ep.desc}
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center pt-8">
                        <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
                            <Button variant="outline" size="lg">View Full API Reference</Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
