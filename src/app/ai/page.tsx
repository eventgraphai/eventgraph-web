import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Bot, Network, Workflow, Zap, ArrowRight, BrainCircuit } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "AI Agents & MCP | EventGraph",
    description: "Model Context Protocol integration for AI agents and LLMs.",
};

export default function AiPage() {
    const tools = [
        { name: "get_events", desc: "Search and filter active prediction events" },
        { name: "get_markets", desc: "Fetch live order books for a specific market" },
        { name: "get_cross_venue", desc: "Compare odds for the same event across venues" },
        { name: "get_arbitrage", desc: "Locate active arbitrage opportunities" },
        { name: "get_probabilities", desc: "Calculate the algorithmic consensus probability" }
    ];

    return (
        <>
            <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">Model Context Protocol</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Prediction Market Data for AI Agents</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Give your LLMs and custom AI agents direct, structured access to global prediction market intelligence using our native Model Context Protocol (MCP) server.
                    </p>
                    <div className="pt-6 flex flex-wrap justify-center gap-4">
                        <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
                            <Button size="lg" className="h-14 px-8 text-lg group">
                                Install MCP Server
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Seamless LLM Connectivity</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The EventGraph MCP Server securely exposes normalized prediction market data directly to Claude, ChatGPT, and custom agent frameworks (like LangChain, AutoGen, and Eliza).
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Whether you are building an automated trading bot, an intelligence aggregator, or a specialized forecasting assistant, EventGraph provides the tooling required to reason about the future.
                        </p>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-8 relative overflow-hidden shadow-sm">
                        {/* Visual connecting LLM to Tools */}
                        <div className="flex flex-col space-y-8">
                            <div className="flex justify-center">
                                <div className="bg-primary/20 border border-primary text-primary px-6 py-3 rounded-lg font-medium flex items-center">
                                    <BrainCircuit className="w-5 h-5 mr-2" />
                                    Your AI Agent
                                </div>
                            </div>

                            <div className="flex justify-center relative">
                                <div className="w-px h-12 bg-gradient-to-b from-primary to-border"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-border text-xs px-2 py-1 rounded text-muted-foreground">MCP</div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {['get_cross_venue()', 'get_probabilities()'].map(t => (
                                    <div key={t} className="bg-muted/30 border border-border rounded p-3 text-center text-sm font-mono text-muted-foreground">
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-muted/10 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Example Use Cases</h2>
                        <p className="text-muted-foreground">What you can build with EventGraph MCP.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-card">
                            <CardHeader>
                                <Network className="w-8 h-8 text-primary mb-3" />
                                <CardTitle>AI Market Research</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">Agents that constantly monitor election odds or tech product launches, summarizing probability shifts into daily digests.</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card">
                            <CardHeader>
                                <Workflow className="w-8 h-8 text-accent mb-3" />
                                <CardTitle>Arbitrage Monitoring</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">Background agents that poll `get_arbitrage` tool and automatically execute trades across connected exchange wallets when spreads widen.</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card">
                            <CardHeader>
                                <Zap className="w-8 h-8 text-emerald-500 mb-3" />
                                <CardTitle>Trading Workflow Assistant</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">A personal chatbot that allows you to ask "What is the Polymarket edge on the Fed rate cut vs Kalshi?" in natural language.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
