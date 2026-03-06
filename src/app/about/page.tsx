import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata = {
    title: "About | EventGraph",
    description: "Building the intelligence layer for prediction markets.",
};

export default function AboutPage() {
    return (
        <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-[70vh] flex flex-col justify-center">
            <div className="max-w-3xl mx-auto space-y-12">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About EventGraph</h1>
                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
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
            </div>
        </SectionWrapper>
    );
}
