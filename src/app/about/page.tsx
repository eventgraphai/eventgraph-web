import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata = {
    title: "About | EventGraph",
    description: "Building the intelligence layer for prediction markets.",
};

export default function AboutPage() {
    return (
        <>
            <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/60">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Story</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About EventGraph</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Building the intelligence layer for prediction markets — making fragmented market data accessible, structured, and actionable.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { label: "Mission", value: "Unify prediction market data globally" },
                            { label: "Focus", value: "Traders, developers, and AI agents" },
                            { label: "Coverage", value: "4+ venues, 20,000+ markets" },
                        ].map((item) => (
                            <div key={item.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{item.label}</p>
                                <p className="text-foreground font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                        <p>
                            EventGraph is building the intelligence layer for prediction markets. We make fragmented market data accessible, structured, and actionable for traders, developers, and AI systems.
                        </p>
                        <p>
                            As the prediction market ecosystem grows across chains and platforms, the liquidity and information become fractured. Our mission is to unify this data, providing a single source of truth for global consensus probabilities.
                        </p>
                        <p>
                            Whether you are a developer building an arbitrage bot, an analyst tracking political odds, or building natively with AI agents via MCP, EventGraph provides the professional-grade infrastructure you need to execute with confidence.
                        </p>
                    </div>

                    <div className="mt-16 rounded-2xl border border-border bg-card/50 p-8 md:p-12">
                        <h2 className="text-2xl font-bold tracking-tight mb-6">What We Believe</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Data Should Be Open", desc: "Prediction markets generate the most accurate forecasts when data flows freely between platforms." },
                                { title: "Intelligence Compounds", desc: "Cross-venue analysis reveals signals that no single platform can surface on its own." },
                                { title: "Developers First", desc: "The best products are built by developers with access to clean, reliable APIs." },
                                { title: "AI-Native Future", desc: "AI agents will drive the next wave of prediction market innovation and liquidity." },
                            ].map((belief) => (
                                <div key={belief.title} className="space-y-2">
                                    <h3 className="font-semibold text-foreground">{belief.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{belief.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
