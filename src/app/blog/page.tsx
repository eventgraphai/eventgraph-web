import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Blog | EventGraph",
    description: "Insights, analysis, and updates from the EventGraph team on prediction markets, data infrastructure, and AI.",
};

const posts = [
    {
        slug: "polymarket-vs-kalshi-liquidity-analysis",
        title: "Polymarket vs Kalshi: A Deep Dive into Liquidity Mechanics",
        excerpt: "We analyzed over 12 months of order book data to understand how liquidity differs across the two largest prediction market platforms — and what it means for traders and arbitrageurs.",
        category: "Market Analysis",
        date: "Mar 4, 2026",
        readTime: "8 min read",
        author: "EventGraph Research Team",
        featured: true,
    },
    {
        slug: "building-ai-agents-on-prediction-markets",
        title: "Building AI Agents That Trade Prediction Markets Using MCP",
        excerpt: "A step-by-step technical walkthrough on setting up an AI agent powered by EventGraph's MCP server to poll live market odds, detect anomalies, and trigger alerts automatically.",
        category: "Developer",
        date: "Feb 28, 2026",
        readTime: "12 min read",
        author: "EventGraph Engineering",
        featured: false,
    },
    {
        slug: "arbitrage-opportunities-in-election-markets",
        title: "Arbitrage in Election Markets: Patterns, Risks, and Returns",
        excerpt: "Election prediction markets are uniquely prone to venue-specific mispricings. We identify recurring patterns and the window of opportunity before the market corrects.",
        category: "Trading Strategy",
        date: "Feb 20, 2026",
        readTime: "10 min read",
        author: "EventGraph Research Team",
        featured: false,
    },
    {
        slug: "eventgraph-api-v1-launch",
        title: "EventGraph API v1 Is Live: Unified Prediction Market Data at Your Fingertips",
        excerpt: "Today we are launching the EventGraph REST API v1 — a single, normalized endpoint layer that unifies data from Polymarket, Kalshi, Limitless, and Opinion Trade into one clean JSON schema.",
        category: "Product Update",
        date: "Feb 12, 2026",
        readTime: "5 min read",
        author: "EventGraph Team",
        featured: false,
    },
    {
        slug: "probability-consensus-how-it-works",
        title: "Consensus Probability Explained: How EventGraph Aggregates Market Signals",
        excerpt: "Not all prediction markets are created equal. Our consensus probability engine weighs each venue's price signal by liquidity depth, trading volume, and historical resolution accuracy.",
        category: "Explainer",
        date: "Feb 5, 2026",
        readTime: "7 min read",
        author: "EventGraph Research Team",
        featured: false,
    },
    {
        slug: "the-case-for-normalized-prediction-data",
        title: "Why Data Normalization Is the Hardest Problem in Prediction Markets",
        excerpt: "Every prediction market venue uses a different schema, market resolution logic, and liquidity model. Here is how we tackled the data normalization problem from the ground up at EventGraph.",
        category: "Engineering",
        date: "Jan 28, 2026",
        readTime: "9 min read",
        author: "EventGraph Engineering",
        featured: false,
    },
];

const categoryColors: Record<string, string> = {
    "Market Analysis": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "Developer": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    "Trading Strategy": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    "Product Update": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    "Explainer": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    "Engineering": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
};

export default function BlogPage() {
    const [featured, ...rest] = posts;

    return (
        <>
            {/* Hero */}
            <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Blog & Insights</h1>
                    <p className="text-xl text-muted-foreground">
                        Market intelligence, product updates, and technical deep-dives from the EventGraph team.
                    </p>
                </div>
            </SectionWrapper>

            {/* Featured Post */}
            <SectionWrapper className="pb-4">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Featured Post</p>
                    <Link href={`/blog/${featured.slug}`}>
                        <Card className="group hover:border-primary/50 transition-colors overflow-hidden">
                            <div className="md:grid md:grid-cols-2 md:gap-0">
                                {/* Visual placeholder */}
                                <div className="h-56 md:h-full bg-gradient-to-br from-primary/10 via-blue-500/10 to-violet-500/10 flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
                                    <div className="text-center space-y-2 px-8">
                                        <div className="font-mono text-sm text-primary opacity-70">EventGraph Research</div>
                                        <div className="font-bold text-2xl text-foreground">Polymarket vs Kalshi</div>
                                        <div className="font-mono text-sm text-muted-foreground">Liquidity Analysis 2026</div>
                                    </div>
                                </div>
                                <CardContent className="p-8 flex flex-col justify-center space-y-4">
                                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full w-fit ${categoryColors[featured.category]}`}>
                                        <Tag className="w-3 h-3" />
                                        {featured.category}
                                    </span>
                                    <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                        {featured.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                                    <div className="flex items-center justify-between pt-2">
                                        <div className="text-xs text-muted-foreground flex items-center gap-3">
                                            <span>{featured.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                                        </div>
                                        <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read more <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </Link>
                </div>
            </SectionWrapper>

            {/* All Posts Grid */}
            <SectionWrapper className="bg-background-subtle">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">All Posts</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card className="group flex flex-col h-full hover:border-primary/50 transition-colors">
                                    {/* Mini visual strip */}
                                    <div className="h-2 w-full rounded-t-xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-violet-500/20" />
                                    <CardHeader>
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full w-fit mb-2 ${categoryColors[post.category]}`}>
                                            <Tag className="w-3 h-3" />
                                            {post.category}
                                        </span>
                                        <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="leading-relaxed mt-2">{post.excerpt}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto pt-0">
                                        <div className="flex items-center justify-between border-t border-border pt-4">
                                            <div className="text-xs text-muted-foreground flex items-center gap-3">
                                                <span>{post.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
