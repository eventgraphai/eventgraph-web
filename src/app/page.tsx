import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ArrowRight, BarChart3, Bot, Check, ChevronDown, Cpu, Database, LayoutDashboard, TerminalSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
        {/* Abstract background pattern or strict geometric lines could go here */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] -z-10 pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary font-medium tracking-wide">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            EventGraph API v1 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
            The Intelligence Layer for <br className="hidden md:block" />
            <span className="text-foreground">Global Prediction Markets</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Unified data, cross-venue analytics, and APIs across Polymarket, Kalshi, Limitless, and Opinion Trade.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
              <Button size="lg" className="h-12 px-8 text-base group">
                Explore Terminal
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                View API Docs
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground pt-2">Built for traders, developers, and AI agents.</p>
        </div>

        {/* Dashboard Mockup Visual */}
        <div className="mt-20 relative mx-auto max-w-6xl">
          <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-border bg-muted/10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto bg-background border border-border rounded text-xs text-muted-foreground px-24 py-1">
                app.eventgraph.ai/terminal
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 bg-zinc-950/50">
              <div className="hidden md:block space-y-4 border-r border-border pr-6">
                <div className="h-4 w-24 bg-muted/80 rounded mb-8"></div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`h-8 rounded flex items-center px-3 ${i === 1 ? 'bg-primary/20 text-primary' : 'bg-transparent text-muted-foreground cursor-default'}`}>
                    <div className="h-3 w-3 rounded-sm bg-current mr-3 opacity-70"></div>
                    <div className="h-2 w-16 bg-current opacity-70 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="md:col-span-3 space-y-6">
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <div className="h-6 w-32 bg-muted rounded"></div>
                  <div className="ml-auto flex gap-2">
                    <div className="h-6 w-16 bg-muted rounded"></div>
                    <div className="h-6 w-20 bg-muted rounded"></div>
                  </div>
                </div>
                <div className="h-64 bg-background rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                  {/* Abstract chart wave */}
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute bottom-0 w-full h-1/2 opacity-20 text-primary">
                    <path d="M0 20 L0 15 Q 25 5, 50 15 T 100 10 L100 20 Z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full opacity-30 text-accent">
                    <line x1="0" y1="18" x2="100" y2="5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                    <polyline points="0,15 20,8 40,12 60,3 80,10 100,5" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <span className="font-mono text-sm text-foreground bg-background border border-border px-3 py-1 rounded z-10 shadow-sm">Cross-Venue Arbitrage Spread</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-24 bg-background rounded-lg border border-border p-4 flex flex-col justify-between">
                      <div className="h-3 w-1/3 bg-muted rounded"></div>
                      <div className="h-6 w-1/2 bg-muted/80 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Problem Section */}
      <SectionWrapper className="bg-background-subtle border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Prediction Market Data Is Fragmented</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Market data currently exists in silos across multiple venues, with inconsistent formats and separate interfaces. It is incredibly difficult to compare markets, track probability consensus, and build reliable algorithmic tools. Manual venue monitoring simply doesn&apos;t scale.
          </p>
        </div>
      </SectionWrapper>

      {/* Pillars Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-start p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-xl mb-6 text-primary">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Market Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              Unified access to events, markets, prices, trades, and liquidity across venues via a single normalized schema.
            </p>
          </div>

          <div className="flex flex-col items-start p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors">
            <div className="p-3 bg-accent/10 rounded-xl mb-6 text-accent">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Market Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cross-venue comparison, arbitrage detection, probability consensus, and deep liquidity analysis to find your edge.
            </p>
          </div>

          <div className="flex flex-col items-start p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors">
            <div className="p-3 bg-emerald-500/10 rounded-xl mb-6 text-emerald-500">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Developer & AI Platform</h3>
            <p className="text-muted-foreground leading-relaxed">
              Lightning-fast REST APIs, structured data, MCP support, and robust tooling for AI agents and developer workflows.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Terminal Preview Section */}
      <SectionWrapper className="bg-background-subtle border-y border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground font-medium">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              EventGraph Terminal
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Professional grade tools for analysts</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The EventGraph Terminal gives traders and analysts the ultimate dashboard to monitor election odds, sports, and pop culture markets across every major prediction venue.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Market screener & event explorer",
                "Cross-venue visual comparison",
                "Automated arbitrage opportunity scanner",
                "Custom analytics dashboards & alerts"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <div className="mr-3 p-1 rounded-full bg-primary/20 text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                <Button className="group">
                  Open Terminal
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Markets', 'Screener', 'Cross-Venue', 'Arbitrage'].map((title, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-5 shadow-sm aspect-square flex flex-col hover:border-primary/50 transition-colors">
                <h4 className="font-semibold text-sm text-foreground">{title}</h4>
                <div className="flex-1 mt-4 rounded border border-border border-dashed bg-muted/30"></div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* API Platform Section */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <CodeBlock
              language="bash"
              code={`# Fetch normalized events across platforms
curl https://api.eventgraph.ai/v1/events \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Response
{
  "events": [
    {
      "id": "evt_123xyz",
      "title": "Will SpaceX reach Mars by 2026?",
      "consensus_probability": 0.42,
      "markets": [
        { "venue": "polymarket", "price": 0.44 },
        { "venue": "kalshi", "price": 0.41 }
      ]
    }
  ]
}`}
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground font-medium">
              <TerminalSquare className="w-4 h-4 mr-2" />
              API Platform
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Build with the EventGraph API</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We did the hard work of normalizing messy prediction market data so you don&apos;t have to. Build powerful tools rapidly with our clean REST JSON API.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4 pb-2">
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Unified endpoints</div>
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Normalized events</div>
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Cross-venue queries</div>
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Arbitrage endpoints</div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
                <Button>View Documentation</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline">Explore Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* AI Agents & MCP Section */}
      <SectionWrapper className="bg-background-subtle border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/20 text-primary px-3 py-1 text-sm font-medium mb-4">
            <Bot className="w-4 h-4 mr-2" />
            AI Native
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Prediction Market Data for AI Agents</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EventGraph natively supports the Model Context Protocol (MCP), allowing LLMs and custom AI agents to query prediction markets, summarize consensus, and analyze trades securely and accurately.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['get_events', 'get_cross_venue', 'get_arbitrage', 'get_probabilities'].map(tool => (
            <div key={tool} className="bg-background border border-border p-4 rounded-xl text-center shadow-sm font-mono text-sm text-primary">
              {tool}()
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/ai">
            <Button size="lg" className="group">
              Explore AI Integration
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Pricing Preview Section */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">Start building for free, scale when you need it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="text-4xl font-bold mt-4 mb-2">$0</div>
              <CardDescription>Good for testing</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> 100K API calls / month</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /> Basic endpoints</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col border-primary relative transform md:-translate-y-4 shadow-xl">
            <div className="absolute top-0 inset-x-0 h-1 bg-primary rounded-t-xl" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">Popular</span>
              </div>
              <div className="text-4xl font-bold mt-4 mb-2">$29<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              <CardDescription>Good for bots and apps</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> 1M API calls / month</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Cross-venue analytics</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" /> Arbitrage & Probabilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <div className="text-4xl font-bold mt-4 mb-2">Custom</div>
              <CardDescription>Advanced access & streaming</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-muted-foreground mr-2" /> 10M+ calls</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-muted-foreground mr-2" /> Historical datasets</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-muted-foreground mr-2" /> Streaming / WebSocket</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Link href="/pricing">
            <Button variant="outline" className="min-w-[200px]">View Full Pricing</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Blog Preview Section */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From the Blog</h2>
              <p className="text-lg text-muted-foreground mt-2">Market insights and technical deep dives.</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { slug: "polymarket-vs-kalshi-liquidity-analysis", title: "Polymarket vs Kalshi: A Deep Dive into Liquidity", category: "Market Analysis", date: "Mar 4, 2026", readTime: "8 min" },
              { slug: "building-ai-agents-on-prediction-markets", title: "Building AI Agents That Trade Prediction Markets Using MCP", category: "Developer", date: "Feb 28, 2026", readTime: "12 min" },
              { slug: "arbitrage-opportunities-in-election-markets", title: "Arbitrage in Election Markets: Patterns, Risks, and Returns", category: "Trading Strategy", date: "Feb 20, 2026", readTime: "10 min" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group flex flex-col h-full border border-border rounded-xl p-6 bg-card hover:border-primary/50 transition-colors">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{post.category}</span>
                  <h3 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                  <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-background-subtle border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: "Which venues does EventGraph support?", a: "We currently support Polymarket, Kalshi, Limitless, and Opinion Trade natively, with more venues constantly being added to the normalized index." },
              { q: "How fresh is the data?", a: "Our APIs fetch data securely and normalize it with minimal latency. We guarantee real-time competitive polling with streaming options coming for enterprise." },
              { q: "Do you provide streaming / WebSocket support?", a: "WebSocket streaming is currently in private beta and will be rolled out to Enterprise customers shortly." },
              { q: "Can I use EventGraph with AI agents?", a: "Yes. Our platform includes an MCP server (Model Context Protocol) ready for use with Claude, ChatGPT, and custom open-source agents." },
              { q: "Are you tracking all markets or only the most relevant ones?", a: "We track all active markets from our supported venues and provide endpoints to easily filter trending, highly liquid, or cross-venue comparable markets." },
            ].map((faq, i) => (
              <details key={i} className="group border border-border rounded-lg bg-background text-card-foreground [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-medium">
                  <h3 className="text-foreground">{faq.q}</h3>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper className="bg-background relative overflow-hidden border-t border-border">
        {/* Subtle dot pattern background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] -z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 py-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Start Building on Prediction Market Intelligence</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
              <Button size="lg" className="h-14 px-10 text-lg">Start Free</Button>
            </Link>
            <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg">
                Explore Terminal
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
