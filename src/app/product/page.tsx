import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe, Zap, ScanSearch } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Product | EventGraph",
    description: "The complete platform for prediction market intelligence.",
};

export default function ProductPage() {
    return (
        <>
           <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/60 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Core Platform</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        EventGraph aggregates and normalizes prediction market data across platforms to provide unified intelligence, cross-venue analytics, and arbitrage detection.
                    </p>
                </div>
            </SectionWrapper>

           <SectionWrapper>
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
                            {/* Abstract visual of data merging */}
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
                                <Link href="/terminal">
                                    <Button variant="outline" className="group">
                                        See the Terminal in action
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
