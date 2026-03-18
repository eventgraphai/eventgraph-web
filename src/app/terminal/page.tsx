import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { LayoutDashboard, ArrowRight, LineChart, Target, Eye, Bell, Globe, Zap, ScanSearch } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
    title: "Terminal | EventGraph",
    description: "Dashboard for prediction market intelligence.",
};

export default function TerminalPage() {
    const terminalFeatures = [
        { name: "Live Dashboard", desc: "A customizable view of your top tracked markets and overall portfolio sentiment.", icon: <LayoutDashboard /> },
        { name: "Global Screener", desc: "Filter thousands of events by volume, probability shifts, and liquidity.", icon: <Eye /> },
        { name: "Cross-Venue Comparison", desc: "Visualize order books and line charts side-by-side for polymarket vs kalshi.", icon: <LineChart /> },
        { name: "Arbitrage Scanner", desc: "Real-time alerts for risk-free profit loops across divergent markets.", icon: <Target /> },
        { name: "Actionable Alerts", desc: "Get pinged when a market swings by >10% or liquidity drops.", icon: <Bell /> },
    ];

    return (
        <>
           <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">Professional Dashboard</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">EventGraph Terminal</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        The professional dashboard for traders and analysts tracking the pulse of global prediction markets.
                    </p>
                    <div className="pt-6">
                        <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                            <Button size="lg" className="h-14 px-8 text-lg group">
                                Launch Terminal
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>

           <SectionWrapper className="border-t border-border/60">
                <div className="max-w-6xl mx-auto">
                    {/* Main big dashboard mock */}
                    <div className="rounded-2xl border border-border bg-background shadow-lg overflow-hidden mb-20 relative">
                        <div className="flex items-center px-4 py-3 border-b border-border/60 bg-muted/20">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="aspect-[16/9] md:aspect-[21/9] bg-background p-6 grid grid-cols-12 gap-4">
                            <div className="col-span-3 space-y-3 hidden md:block">
                                <div className="h-8 bg-muted/30 rounded w-full"></div>
                                <div className="h-8 bg-muted/30 rounded w-full"></div>
                                <div className="h-8 bg-primary/20 border border-primary/30 rounded w-full"></div>
                                <div className="h-8 bg-muted/30 rounded w-full"></div>
                            </div>
                            <div className="col-span-12 md:col-span-9 space-y-4">
                                <div className="flex gap-4">
                                    <div className="h-24 flex-1 bg-muted/30 rounded border border-border"></div>
                                    <div className="h-24 flex-1 bg-muted/30 rounded border border-border"></div>
                                    <div className="h-24 flex-1 bg-primary/10 border border-primary/20 rounded"></div>
                                </div>
                                <div className="h-full min-h-[200px] bg-muted/20 border border-border rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {terminalFeatures.map((feat, idx) => (
                            <Card key={idx} className="bg-card hover:border-primary/50 transition-colors">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        {feat.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{feat.name}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Unified Data — from Product */}
            <SectionWrapper className="border-t border-border/60">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                                <Globe className="w-4 h-4 mr-2" /> Unified Data
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">One API for Every Venue</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We handle the complex integrations with Polymarket, Kalshi, Limitless, and Opinion Trade. You get a single, robust REST API that streams normalized events, markets, and order books.
                            </p>
                            <ul className="space-y-3 pt-2">
                                <li className="flex items-center text-sm font-medium"><Zap className="w-4 h-4 mr-2 text-primary" /> Low-latency polling</li>
                                <li className="flex items-center text-sm font-medium"><Zap className="w-4 h-4 mr-2 text-primary" /> Normalized schemas</li>
                                <li className="flex items-center text-sm font-medium"><Zap className="w-4 h-4 mr-2 text-primary" /> Venue-agnostic identifiers</li>
                            </ul>
                        </div>
                        <div className="h-80 bg-background rounded-2xl border border-border p-6 relative overflow-hidden shadow-sm">
                            <div className="flex flex-col h-full justify-center space-y-4">
                                <div className="flex justify-between items-center px-4">
                                    <span className="font-mono text-xs text-muted-foreground border border-border/50 px-2 py-1 rounded">Polymarket</span>
                                    <div className="h-px bg-gradient-to-r from-border to-primary w-24"></div>
                                </div>
                                <div className="flex justify-between items-center px-4">
                                    <span className="font-mono text-xs text-muted-foreground border border-border/50 px-2 py-1 rounded">Kalshi</span>
                                    <div className="h-px bg-gradient-to-r from-border to-primary w-24"></div>
                                    <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded-lg font-mono text-sm text-center">
                                        EventGraph Core
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-4">
                                    <span className="font-mono text-xs text-muted-foreground border border-border/50 px-2 py-1 rounded">Limitless</span>
                                    <div className="h-px bg-gradient-to-r from-border to-primary w-24"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cross-Venue Intelligence — from Product */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 h-80 bg-background shadow-sm rounded-2xl border border-border p-6 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                <div className="bg-background/80 border border-border p-4 rounded-xl text-center space-y-2">
                                    <div className="text-xs text-muted-foreground">Polymarket Yes</div>
                                    <div className="text-lg font-mono font-bold text-green-500">42¢</div>
                                </div>
                                <div className="bg-background/80 border border-border p-4 rounded-xl text-center space-y-2 ring-1 ring-primary/50 relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Arb</div>
                                    <div className="text-xs text-muted-foreground">Kalshi No</div>
                                    <div className="text-lg font-mono font-bold text-green-500">60¢</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <div className="inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 text-sm font-medium">
                                <ScanSearch className="w-4 h-4 mr-2" /> Intelligence Layer
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Cross-Venue Intelligence</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Identify mispricings instantly. Our intelligence engine calculates probability consensus and highlights real-time arbitrage opportunities across identical events traded on different venues.
                            </p>
                            <div className="pt-4">
                                <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                                    <Button variant="outline" className="group">
                                        Try it in the Terminal
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
