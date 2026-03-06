import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ArrowRight, BarChart3, Bot, Check, ChevronDown, Code2, Cpu, Database, LayoutDashboard, LineChart, TerminalSquare, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TerminalTabs } from "@/components/ui/TerminalTabs";
import { APICodeTabs } from "@/components/ui/APICodeTabs";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-2 md:pt-48 md:pb-2 overflow-hidden relative">
        {/* Abstract background pattern or strict geometric lines could go here */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] -z-10 pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary font-medium tracking-wide">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            EventGraph API v1 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.15] md:leading-[1.2]">
            The Intelligence Layer for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-blue-300 dark:to-violet-400 bg-clip-text text-transparent">Global Prediction Markets</span>
          </h1>
          <p className="text-xl text-foreground/65 max-w-2xl leading-relaxed">
            Unified prediction market data across venues — real-time prices, cross-venue intelligence, and developer APIs built for traders, developers, and AI agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
              <Button className="h-12 px-8 text-base font-semibold">
                Explore Terminal
              </Button>
            </Link>
            <Link href="https://developers.eventgraph.ai/docs" target="_blank" rel="noreferrer">
              <Button variant="outline" className="h-12 px-8 text-base font-semibold border border-foreground/20 hover:border-foreground/40 text-foreground/70 hover:text-foreground">
                View API Docs
              </Button>
            </Link>
          </div>
        </div>

        {/* Supported Venues — inline between CTAs and video */}
        <div className="mt-12 w-full">
          <p className="text-center text-xs font-medium text-muted-foreground mb-6">
            Aggregating data from the world&apos;s leading prediction markets
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap px-6">
            {[
              { name: 'Polymarket',    src: '/logo-polymarket.webp' },
              { name: 'Kalshi',        src: '/logo-kalshi.png'      },
              { name: 'Limitless',     src: '/logo-limitless.png'   },
              { name: 'Opinion Trade', src: '/logo-opiniontrade.webp' },
            ].map(({ name, src }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={name}
                src={src}
                alt={name}
                className="h-6 w-auto max-w-[110px] object-contain opacity-40 hover:opacity-70 transition-opacity"
                style={{ filter: 'grayscale(100%) brightness(10)' }}
              />
            ))}
          </div>
        </div>

        {/* Dashboard Video Preview */}
        <div className="mt-14 relative mx-auto max-w-5xl">
          {/* Caption */}
          <div className="text-center mb-6">
            <p className="text-base font-semibold text-foreground">EventGraph Terminal</p>
            <p className="text-sm text-muted-foreground mt-1">Explore prediction markets across venues with unified data and analytics.</p>
          </div>
          {/* Glow behind the window */}
          <div className="absolute -inset-4 rounded-2xl bg-indigo-500/10 blur-2xl pointer-events-none" />
          <div className="relative rounded-xl border border-border bg-zinc-950 shadow-2xl overflow-hidden">
            {/* macOS-style title bar */}
            <div className="flex items-center px-4 py-3 border-b border-border bg-zinc-900/80">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto bg-zinc-800 border border-white/10 rounded text-xs text-zinc-400 px-24 py-1">
                app.eventgraph.ai/terminal
              </div>
            </div>
            {/* Video cropped to 16:9 showing top of UI */}
            <div className="w-full aspect-video overflow-hidden">
              <video
                src="/eventgraph-demo.mov"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Problem + How It Works — two-column */}
      <SectionWrapper className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-primary/5 via-blue-500/3 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Problem */}
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400 font-medium tracking-wide">
              The Problem
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Prediction Market Data Is Fragmented Across Venues</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prediction markets are spread across multiple platforms with inconsistent data formats and disconnected APIs.
            </p>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                <span>Markets cannot be compared across venues</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                <span>No unified probability consensus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                <span>Developers must integrate multiple APIs</span>
              </li>
            </ul>
            <p className="text-lg font-medium text-foreground/80">
              Manual venue monitoring simply doesn&apos;t scale.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-indigo-500/40 pl-4">
              EventGraph aggregates, normalizes, and analyzes prediction markets across platforms to create a unified intelligence layer.
            </p>
          </div>

          {/* Right — How EventGraph Works */}
          <div className="flex flex-col items-center gap-0">
            <p className="text-base font-semibold text-foreground mb-6 self-center">How EventGraph Works</p>

            {/* Sources */}
            <div className="w-full text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Supported Venues</p>
              <div className="flex items-center justify-center flex-wrap gap-2">
                {['Polymarket', 'Kalshi', 'Limitless', 'Opinion Trade'].map(v => (
                  <div key={v} className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground">
                    {v}
                  </div>
                ))}
                <div className="px-3 py-1.5 rounded-lg border border-dashed border-border text-xs font-medium text-muted-foreground">
                  + More
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center my-3">
              <div className="w-px h-6 bg-gradient-to-b from-border to-indigo-500/50" />
              <ChevronDown className="w-4 h-4 text-indigo-400/70 -mt-1" />
            </div>

            {/* Normalization Engine */}
            <div className="px-6 py-3 rounded-xl border border-indigo-500/30 bg-indigo-500/5 text-center w-full max-w-[280px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-400/60 mb-1">Normalization Engine</p>
              <p className="font-semibold text-sm text-foreground">Normalization &amp; Data Pipeline</p>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center my-3">
              <div className="w-px h-6 bg-gradient-to-b from-indigo-500/50 to-violet-500/50" />
              <ChevronDown className="w-4 h-4 text-violet-400/70 -mt-1" />
            </div>

            {/* Intelligence Layer */}
            <div className="px-6 py-5 rounded-xl border border-violet-500/40 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 text-center w-full max-w-[320px] shadow-xl shadow-violet-500/10 ring-1 ring-violet-500/20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400/70 mb-2">EventGraph Intelligence Engine</p>
              <p className="text-lg font-bold text-foreground mb-3">EventGraph Intelligence Layer</p>
              <div className="flex flex-col gap-1.5 text-xs text-violet-300/80">
                <span>Cross-Venue Intelligence</span>
                <span>Probability Consensus</span>
                <span>Arbitrage Detection</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center my-3">
              <div className="w-px h-6 bg-gradient-to-b from-violet-500/50 to-border" />
              <ChevronDown className="w-4 h-4 text-muted-foreground -mt-1" />
            </div>

            {/* Outputs */}
            <div className="w-full text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Build With EventGraph</p>
              <div className="flex items-center justify-center flex-wrap gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-xs font-medium">
                  <TerminalSquare className="w-3.5 h-3.5 text-primary" />
                  REST APIs
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-xs font-medium">
                  <LayoutDashboard className="w-3.5 h-3.5 text-primary" />
                  Terminal
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-xs font-medium">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                  AI Agents (MCP)
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* Gradient divider */}
      <div className="w-full px-8 md:px-32">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />
      </div>

      {/* Pillars Section */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Everything you need to build on prediction markets</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">One platform for normalized data, cross-venue intelligence, and developer tooling across major prediction markets.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto">
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-foreground">8,000+</p>
                <p className="text-xs text-muted-foreground">Events tracked</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-foreground">20,000+</p>
                <p className="text-xs text-muted-foreground">Markets indexed</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">$7B+</p>
                <p className="text-xs text-muted-foreground">Historical trading volume</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-foreground">4+</p>
                <p className="text-xs text-muted-foreground">Venues integrated</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start p-10 rounded-2xl border border-border border-t-2 border-t-blue-500/50 bg-card hover:bg-white/[0.03] hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-200 group">
              <div className="p-4 bg-blue-500/15 rounded-xl mb-7 text-blue-400 group-hover:bg-blue-500/25 group-hover:scale-110 transition-all duration-200 shadow-lg shadow-blue-500/5">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Market Data</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Unified prediction market data — events, markets, prices, trades, and liquidity across venues via a normalized schema.
              </p>
            </div>

            <div className="flex flex-col items-start p-10 rounded-2xl border border-border border-t-2 border-t-violet-500/50 bg-card hover:bg-white/[0.03] hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-200 group">
              <div className="p-4 bg-violet-500/15 rounded-xl mb-7 text-violet-400 group-hover:bg-violet-500/25 group-hover:scale-110 transition-all duration-200 shadow-lg shadow-violet-500/5">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Market Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Cross-venue intelligence for prediction markets — compare prices, detect arbitrage opportunities, and analyze probability consensus across venues.
              </p>
            </div>

            <div className="flex flex-col items-start p-10 rounded-2xl border border-border border-t-2 border-t-emerald-500/50 bg-card hover:bg-white/[0.03] hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-200 group">
              <div className="p-4 bg-emerald-500/15 rounded-xl mb-7 text-emerald-400 group-hover:bg-emerald-500/25 group-hover:scale-110 transition-all duration-200 shadow-lg shadow-emerald-500/5">
                <Cpu className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Developer & AI Platform</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Developer-first APIs and structured datasets with MCP support, enabling developers and AI agents to build on prediction market intelligence.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Terminal Preview Section */}
      <SectionWrapper className="bg-background-subtle border-y border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left — Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Terminal
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The EventGraph Terminal</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional tools for exploring prediction markets across venues.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Explore thousands of prediction markets across venues",
                "Compare odds and probabilities across platforms",
                "Detect real-time cross-venue arbitrage opportunities",
                "Build custom alerts and analytics dashboards"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <div className="mr-3 p-1 rounded-full bg-primary/20 text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground border-l-2 border-indigo-500/40 pl-4">
              Monitor, compare, and analyze markets across venues in one place.
            </p>
            <div className="pt-2">
              <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                <Button className="group h-12 px-8 text-base font-semibold">
                  Launch Terminal
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Tabbed product preview */}
          <TerminalTabs />
        </div>
      </SectionWrapper>

      {/* API Platform Section */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <APICodeTabs />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground font-medium">
              <TerminalSquare className="w-4 h-4 mr-2" />
              Developer APIs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Build with the EventGraph API</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We normalize fragmented prediction market data so you can build faster.
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              Used by traders, developers, and AI agents to build prediction market applications.
            </p>
            <p className="text-xs font-mono text-muted-foreground/60 tracking-wide">
              REST JSON API &nbsp;•&nbsp; Real-time market data &nbsp;•&nbsp; 99.9% uptime
            </p>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest font-semibold">Data from</p>
              <div className="flex flex-wrap items-center gap-2">
                {["Polymarket", "Kalshi", "Limitless", "OpinionTrade"].map((v) => (
                  <span key={v} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-2 pb-2">
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Unified REST endpoints</div>
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Normalized event schemas</div>
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Cross-venue market queries</div>
              <div className="flex items-center text-sm font-medium"><Database className="w-4 h-4 mr-2 text-primary" /> Arbitrage detection endpoints</div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
                <Button>View API Docs</Button>
              </Link>
              <Link href="https://app.eventgraph.ai/signup" target="_blank" rel="noreferrer">
                <Button variant="outline">Get API Key</Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* AI Agents & MCP Section */}
      <SectionWrapper className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-background to-violet-950/40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 relative z-10">
          <div className="inline-flex items-center rounded-full bg-primary/20 text-primary px-3 py-1 text-sm font-medium">
            <Bot className="w-4 h-4 mr-2" />
            AI Native Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Prediction Market Data for AI Agents</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let AI agents query prediction markets, compare venues, and analyze probabilities using MCP.
          </p>
          <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
            AI agents can use EventGraph to analyze prediction markets, detect arbitrage opportunities, and summarize probability consensus across venues.
          </p>
        </div>

        {/* Architecture diagram + functions side by side */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start relative z-10">

          {/* Architecture diagram */}
          <div className="flex flex-col items-center gap-0 select-none">
            {/* AI Agent tier */}
            <div className="flex items-center justify-center gap-2 flex-wrap w-full">
              {['OpenAI', 'Claude', 'LangChain', 'Cursor'].map((name) => (
                <span key={name} className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/25 bg-indigo-950/50 px-3 py-1.5 text-xs font-mono font-medium text-indigo-300 backdrop-blur-sm">
                  {name}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center py-2 gap-0.5">
              <div className="w-px h-5 bg-indigo-500/30" />
              <div className="text-indigo-400/60 text-xs font-mono">↓</div>
              <div className="w-px h-5 bg-indigo-500/30" />
            </div>
            {/* EventGraph MCP tier */}
            <div className="w-full rounded-xl border border-indigo-500/40 bg-indigo-950/60 px-6 py-5 text-center backdrop-blur-sm shadow-[0_0_32px_-8px_rgba(99,102,241,0.4)]">
              <p className="text-[10px] uppercase tracking-widest text-indigo-400/60 font-semibold mb-1">EventGraph</p>
              <p className="text-base font-bold text-indigo-200">MCP + Data Engine</p>
              <p className="text-xs text-indigo-400/70 mt-1">Normalization · Intelligence · Arbitrage</p>
            </div>
            <div className="flex flex-col items-center py-2 gap-0.5">
              <div className="w-px h-5 bg-indigo-500/30" />
              <div className="text-indigo-400/60 text-xs font-mono">↓</div>
              <div className="w-px h-5 bg-indigo-500/30" />
            </div>
            {/* Venues tier */}
            <div className="flex items-center justify-center gap-2 flex-wrap w-full">
              {['Polymarket', 'Kalshi', 'Limitless', 'OpinionTrade'].map((v) => (
                <span key={v} className="inline-flex items-center gap-1.5 rounded-lg border border-violet-500/20 bg-violet-950/40 px-3 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Functions + ecosystem */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest font-semibold mb-3">MCP Functions</p>
              <div className="flex flex-col gap-2">
                {[
                  'eventgraph.get_events()',
                  'eventgraph.get_cross_venue_prices()',
                  'eventgraph.detect_arbitrage()',
                  'eventgraph.get_consensus_probability()',
                ].map(fn => (
                  <div key={fn} className="flex items-center gap-3 rounded-lg border border-indigo-500/20 bg-zinc-950/80 px-4 py-3 font-mono text-sm text-indigo-300 backdrop-blur-sm">
                    <span className="text-indigo-500/50">›</span>
                    {fn}
                  </div>
                ))}
              </div>
            </div>

            {/* Works with */}
            <div>
              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest font-semibold mb-3">Works with</p>
              <div className="flex flex-wrap gap-2">
                {['OpenAI', 'Claude', 'LangChain', 'OpenClaw', 'AgentBot', 'Cursor'].map((name) => (
                  <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-950/40 px-3 py-1 text-xs font-medium text-indigo-300 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center relative z-10">
          <Link href="/ai">
            <Button size="lg" className="group">
              Build AI Agents with EventGraph
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
              {
                q: "What prediction markets does EventGraph support?",
                a: "EventGraph aggregates data from major prediction market venues including Polymarket, Kalshi, Limitless, and OpinionTrade. Markets are normalized into a unified schema so developers and traders can easily compare events, prices, and probabilities across venues. We continuously add new venues to the EventGraph index.",
              },
              {
                q: "What makes EventGraph different from individual venue APIs?",
                a: "Prediction market data is fragmented across platforms. EventGraph aggregates and normalizes markets across venues so you can compare probabilities, detect cross-venue arbitrage opportunities, analyze consensus probabilities, and build applications on a unified dataset — instead of integrating multiple APIs.",
              },
              {
                q: "How fresh is EventGraph market data?",
                a: "EventGraph continuously ingests market data from supported venues and updates normalized market states with low-latency polling. For most use cases the API provides near real-time market updates, with WebSocket streaming support available for enterprise integrations.",
              },
              {
                q: "Can I build trading tools or analytics dashboards with EventGraph?",
                a: "Yes. Developers use EventGraph to build prediction market dashboards, arbitrage detection tools, research and analytics platforms, automated trading agents, and probability tracking systems — all accessible through the EventGraph REST API.",
              },
              {
                q: "Does EventGraph detect arbitrage opportunities?",
                a: "Yes. EventGraph compares market prices across venues and exposes endpoints that highlight cross-venue price discrepancies and arbitrage opportunities. These signals allow traders and applications to identify markets where probability differences exist across platforms.",
              },
              {
                q: "Can I use EventGraph with AI agents?",
                a: "Yes. EventGraph provides an MCP server (Model Context Protocol) allowing AI agents to query prediction markets directly. AI systems can summarize market consensus, compare cross-venue probabilities, analyze trends, and build autonomous trading agents. Compatible with OpenAI, Claude, LangChain, and other agent frameworks.",
              },
              {
                q: "How many markets does EventGraph track?",
                a: "EventGraph tracks thousands of active prediction markets across supported venues. The platform focuses on high-liquidity and relevant markets, while still exposing full datasets for developers who want broader coverage.",
              },
              {
                q: "Do I need accounts on prediction market platforms?",
                a: "No. EventGraph only provides data and intelligence. Trading execution happens directly on the underlying venues like Polymarket or Kalshi.",
              },
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

    </>
  );
}
