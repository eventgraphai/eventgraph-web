import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { LayoutDashboard, ArrowRight, LineChart, Target, Eye, Bell } from "lucide-react";
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
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4 text-primary">
                        <LayoutDashboard className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">EventGraph Terminal</h1>
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

            <SectionWrapper className="bg-background-subtle border-t border-border">
                <div className="max-w-6xl mx-auto">
                    {/* Main big dashboard mock */}
                    <div className="rounded-xl border border-border bg-background shadow-lg overflow-hidden mb-20 relative">
                        <div className="flex items-center px-4 py-3 border-b border-border bg-muted/20">
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
        </>
    );
}
