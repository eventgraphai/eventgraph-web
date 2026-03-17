import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export const metadata = {
    title: "Pricing | EventGraph",
    description: "Simple, transparent pricing for prediction market data APIs.",
};

export default function PricingPage() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            desc: "best for exploration",
            features: [
                "100K API calls / month",
                "Events & Markets data",
                "Market prices",
                "Community support",
            ],
            missing: ["Cross-venue analytics", "Arbitrage & Probabilities", "Historical exports"],
            cta: "Start Free",
            link: "https://developers.eventgraph.ai",
            popular: false
        },
        {
            name: "Pro",
            price: "$29",
            desc: "best for developers and bots",
            features: [
                "1M API calls / month",
                "Events & Markets data",
                "Cross-venue intelligence",
                "Arbitrage & Probabilities",
                "Email support",
            ],
            missing: ["Streaming / WebSocket", "Historical data exports"],
            cta: "Upgrade to Pro",
            link: "https://app.eventgraph.ai/pricing",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "advanced data access",
            features: [
                "10M+ API calls / month",
                "All Pro features",
                "Streaming / WebSocket access",
                "Historical data exports",
                "Priority 24/7 support",
            ],
            missing: [],
            cta: "Contact Sales",
            link: "/contact",
            popular: false
        }
    ];

    return (
        <>
           <SectionWrapper className="pt-28 pb-10 md:pt-36 md:pb-12 border-b border-border">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Transparent Pricing</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Flexible plans for any scale</h1>
                    <p className="text-xl text-muted-foreground">Start building your next AI agent or trading bot today.</p>
                    {/* Trust bar */}
                    <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">⚡</span>
                            <span>500+ active builders</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-border" />
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🔑</span>
                            <span>Free API key, no credit card</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-border" />
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🚀</span>
                            <span>Live in under 5 minutes</span>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Pricing Cards Section */}
           <SectionWrapper >
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative items-start">
                    {plans.map((plan) =>
                        plan.popular ? (
                            <div key={plan.name} className="relative p-[2px] rounded-xl bg-gradient-to-b from-amber-400 via-orange-400 to-amber-500 transform md:-translate-y-4 z-10 shadow-xl shadow-amber-500/20">
                                <Card className="flex flex-col h-full bg-card rounded-[10px]">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                            <span className="text-xs bg-amber-400/15 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full font-semibold border border-amber-400/30 uppercase tracking-wider">Most Popular</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-4 mb-2">
                                            <div className="text-4xl font-bold">{plan.price}</div>
                                            {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                                        </div>
                                        <CardDescription>{plan.desc}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <ul className="space-y-4 flex-1 mb-8">
                                            {plan.features.map(f => (
                                                <li key={f} className="flex items-start text-sm">
                                                    <Check className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mr-3 shrink-0" />
                                                    <span className="text-foreground">{f}</span>
                                                </li>
                                            ))}
                                            {plan.missing.map(f => (
                                                <li key={f} className="flex items-start text-sm text-muted-foreground/60">
                                                    <X className="w-5 h-5 mr-3 shrink-0" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href={plan.link} className="w-full mt-auto block">
                                            <Button variant="default" className="w-full h-12">{plan.cta}</Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        ) : (
                            <Card key={plan.name} className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-4 mb-2">
                                        <div className="text-4xl font-bold">{plan.price}</div>
                                        {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                                    </div>
                                    <CardDescription>{plan.desc}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <ul className="space-y-4 flex-1 mb-8">
                                        {plan.features.map(f => (
                                            <li key={f} className="flex items-start text-sm">
                                                <Check className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mr-3 shrink-0" />
                                                <span className="text-foreground">{f}</span>
                                            </li>
                                        ))}
                                        {plan.missing.map(f => (
                                            <li key={f} className="flex items-start text-sm text-muted-foreground/60">
                                                <X className="w-5 h-5 mr-3 shrink-0" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={plan.link} className="w-full mt-auto block">
                                        <Button variant={plan.name === "Free" ? "default" : "outline"} className="w-full h-12">{plan.cta}</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )
                    )}
                </div>

                <div className="max-w-3xl mx-auto text-center mt-20 pt-12 border-t border-border">
                    <h3 className="text-lg font-medium text-foreground mb-2">Need custom limits or dedicated infrastructure?</h3>
                    <p className="text-muted-foreground mb-6">Our enterprise plan is tailored for high-frequency trading firms and large-scale AI applications.</p>
                    <Link href="/contact">
                        <Button variant="secondary">Contact our team</Button>
                    </Link>
                </div>
            </SectionWrapper>
        </>
    );
}
