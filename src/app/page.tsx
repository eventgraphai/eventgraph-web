"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight, BarChart3, Bot, Check, ChevronDown, Cpu, Database, LayoutDashboard, TerminalSquare } from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { TerminalTabs } from "@/components/ui/TerminalTabs";
import { APICodeTabs } from "@/components/ui/APICodeTabs";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-20 pb-2 md:pt-28 md:pb-2 overflow-hidden relative">
        {/* Abstract background pattern or strict geometric lines could go here */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] -z-10 pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary font-medium tracking-wide"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
            EventGraph API v1 is now live
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            The intelligence layer for{" "}<br className="hidden md:block" />
            <span className="text-primary">prediction markets</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-foreground/60 max-w-2xl leading-relaxed"
          >
            Unified prediction market data across venues — real-time prices, cross-venue intelligence, and developer APIs built for traders, developers, and AI agents.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
              <Button className="h-11 px-6 text-sm font-semibold">
                Explore Terminal
              </Button>
            </Link>
            <Link href="https://developers.eventgraph.ai/docs" target="_blank" rel="noreferrer">
              <Button variant="outline" className="h-11 px-6 text-sm font-semibold border border-foreground/20 hover:border-foreground/40 text-foreground/70 hover:text-foreground">
                View API Docs
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Supported Venues — inline between CTAs and video */}
        <div className="mt-10 w-full">
          <p className="text-center text-xs font-medium text-muted-foreground mb-6">
            Aggregating data from the world&apos;s leading prediction markets
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap px-6">
            {[
              { name: 'Polymarket', src: '/logo-polymarket.webp' },
              { name: 'Kalshi', src: '/logo-kalshi.png' },
              { name: 'Limitless', src: '/logo-limitless.png' },
              { name: 'Opinion Trade', src: '/logo-opiniontrade.webp' },
            ].map(({ name, src }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={name}
                src={src}
                alt={name}
                className="h-6 w-auto max-w-[110px] object-contain opacity-50 hover:opacity-80 transition-opacity grayscale dark:invert"
              />
            ))}
          </div>
        </div>

        {/* Dashboard Video Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-10 relative mx-auto max-w-5xl"
        >
          {/* Caption */}
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-foreground">EventGraph Terminal</p>
            <p className="text-xs text-muted-foreground mt-1">Explore prediction markets across venues with unified data and analytics.</p>
          </div>
          {/* Glow behind the window */}
          <div className="absolute -inset-4 rounded-3xl bg-indigo-500/10 blur-2xl pointer-events-none" />
          <div className="relative rounded-2xl border border-border bg-zinc-50 dark:bg-zinc-950 shadow-2xl overflow-hidden group">
            {/* macOS-style title bar */}
            <div className="flex items-center px-4 py-3 border-b border-border/60 bg-zinc-100/80 dark:bg-zinc-900/80">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto bg-zinc-200 dark:bg-zinc-800 border border-black/5 dark:border-white/10 rounded text-xs text-zinc-600 dark:text-zinc-400 px-24 py-1 transition-colors group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700">
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
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Problem + How It Works — two-column */}
      <SectionWrapper className="relative overflow-hidden border-y border-border/60 min-h-screen flex items-center">
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
            <div className="px-6 py-5 rounded-xl border border-violet-500/30 bg-gradient-to-br from-indigo-50/60 to-violet-50/40 dark:from-indigo-950/60 dark:to-violet-950/40 text-center w-full max-w-[320px] shadow-xl shadow-violet-500/10 ring-1 ring-violet-500/10 dark:ring-violet-500/20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400/70 mb-2">EventGraph Intelligence Engine</p>
              <p className="text-lg font-bold text-foreground mb-3">EventGraph Intelligence Layer</p>
              <div className="flex flex-col gap-1.5 text-xs text-violet-700 dark:text-violet-300/80">
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

      {/* Pillars Section */}
      <SectionWrapper className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Everything you need to build on prediction markets</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">One platform for normalized data, cross-venue intelligence, and developer tooling across major prediction markets.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 border border-border rounded-2xl overflow-hidden mt-12 max-w-4xl mx-auto">
              {[
                { val: "8,000+", label: "Events tracked", colors: "from-primary to-cyan-400" },
                { val: "20,000+", label: "Markets indexed", colors: "from-indigo-400 to-indigo-600 dark:from-indigo-300 dark:to-indigo-500" },
                { val: "$7B+", label: "Historical volume", colors: "from-amber-400 to-orange-400 dark:from-amber-300 dark:to-yellow-400" },
                { val: "4+", label: "Venues integrated", colors: "from-violet-400 to-purple-500 dark:from-violet-300 dark:to-violet-500" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="space-y-1 bg-card p-8 flex flex-col justify-center items-center text-center hover:bg-muted/30 transition-colors"
                >
                  <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-br ${stat.colors} bg-clip-text text-transparent`}>{stat.val}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50 border border-border rounded-2xl overflow-hidden mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-start p-10 bg-card hover:bg-muted/50 transition-colors duration-200 group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              <div className="p-4 bg-blue-500/10 rounded-xl mb-7 text-blue-500 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-200">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Market Data</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Unified prediction market data — events, markets, prices, trades, and liquidity across venues via a normalized schema.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-start p-10 bg-card hover:bg-muted/50 transition-colors duration-200 group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500/50 to-transparent"></div>
              <div className="p-4 bg-violet-500/10 rounded-xl mb-7 text-violet-500 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all duration-200">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Market Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Cross-venue intelligence for prediction markets — compare prices, detect arbitrage opportunities, and analyze probability consensus across venues.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-start p-10 bg-card hover:bg-muted/50 transition-colors duration-200 group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              <div className="p-4 bg-emerald-500/10 rounded-xl mb-7 text-emerald-500 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-200">
                <Cpu className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Developer & AI Platform</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Developer-first APIs and structured datasets with MCP support, enabling developers and AI agents to build on prediction market intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Terminal Preview Section */}
      <SectionWrapper className="border-y border-border/60 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left — Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
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
                  <div className="mr-3 p-1 rounded-full bg-emerald-500/15 text-emerald-500 dark:text-emerald-400">
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
          </motion.div>

          {/* Right — Tabbed product preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalTabs />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* API Platform Section */}
      <SectionWrapper className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <APICodeTabs />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 order-1 md:order-2"
          >
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
            <div className="grid sm:grid-cols-2 gap-px bg-border/50 border border-border rounded-xl overflow-hidden mt-6 mb-6">
              <div className="flex items-center text-sm font-medium bg-card p-3"><Database className="w-4 h-4 mr-2 text-primary" /> Unified REST endpoints</div>
              <div className="flex items-center text-sm font-medium bg-card p-3"><Database className="w-4 h-4 mr-2 text-primary" /> Normalized event schemas</div>
              <div className="flex items-center text-sm font-medium bg-card p-3"><Database className="w-4 h-4 mr-2 text-primary" /> Cross-venue queries</div>
              <div className="flex items-center text-sm font-medium bg-card p-3"><Database className="w-4 h-4 mr-2 text-primary" /> Arbitrage detection</div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
                <Button>View API Docs</Button>
              </Link>
              <Link href="https://app.eventgraph.ai/signup" target="_blank" rel="noreferrer">
                <Button variant="outline">Get API Key</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* AI Agents & MCP Section */}
      <SectionWrapper className="relative overflow-hidden border-y border-border/60 min-h-screen flex items-center">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14 relative z-10"
        >
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
        </motion.div>

        {/* Architecture diagram + functions side by side */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start relative z-10">

          {/* Architecture diagram */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-0 select-none"
          >
            {/* AI Agent tier */}
            <div className="flex items-center justify-center gap-2 flex-wrap w-full">
              {['OpenAI', 'Claude', 'LangChain', 'Cursor'].map((name) => (
                <span key={name} className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 dark:border-indigo-500/25 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1.5 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 backdrop-blur-sm">
                  {name}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center py-2 gap-0.5">
              <div className="w-px h-5 bg-indigo-500/30" />
              <div className="text-indigo-500/60 dark:text-indigo-400/60 text-xs font-mono">↓</div>
              <div className="w-px h-5 bg-indigo-500/30" />
            </div>
            {/* EventGraph MCP tier */}
            <div className="w-full rounded-xl border border-indigo-200 dark:border-indigo-500/40 bg-indigo-50/80 dark:bg-indigo-950/60 px-6 py-5 text-center backdrop-blur-sm shadow-[0_0_32px_-8px_rgba(99,102,241,0.2)] dark:shadow-[0_0_32px_-8px_rgba(99,102,241,0.4)] transition-transform hover:scale-105 duration-300">
              <p className="text-[10px] uppercase tracking-widest text-indigo-500 dark:text-indigo-400/60 font-semibold mb-1">EventGraph</p>
              <p className="text-base font-bold text-indigo-900 dark:text-indigo-200">MCP + Data Engine</p>
              <p className="text-xs text-indigo-600 dark:text-indigo-400/70 mt-1">Normalization · Intelligence · Arbitrage</p>
            </div>
            <div className="flex flex-col items-center py-2 gap-0.5">
              <div className="w-px h-5 bg-indigo-500/30" />
              <div className="text-indigo-500/60 dark:text-indigo-400/60 text-xs font-mono">↓</div>
              <div className="w-px h-5 bg-indigo-500/30" />
            </div>
            {/* Venues tier */}
            <div className="flex items-center justify-center gap-2 flex-wrap w-full">
              {['Polymarket', 'Kalshi', 'Limitless', 'OpinionTrade'].map((v) => (
                <span key={v} className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200 dark:border-violet-500/20 bg-violet-50 dark:bg-violet-950/40 px-3 py-1.5 text-xs font-medium text-violet-700 dark:text-violet-300 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Functions + ecosystem */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs text-muted-foreground/50 uppercase tracking-widest font-semibold mb-3">MCP Functions</p>
              <div className="flex flex-col gap-2">
                {[
                  'eventgraph.get_events()',
                  'eventgraph.get_cross_venue_prices()',
                  'eventgraph.detect_arbitrage()',
                  'eventgraph.get_consensus_probability()',
                ].map(fn => (
                  <div key={fn} className="flex items-center gap-3 rounded-lg border border-indigo-200 dark:border-indigo-500/20 bg-white/50 dark:bg-zinc-950/80 px-4 py-3 font-mono text-sm text-indigo-700 dark:text-indigo-300 backdrop-blur-sm shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors">
                    <span className="text-indigo-400 dark:text-indigo-500/50">›</span>
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
                  <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
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
      <SectionWrapper className="min-h-screen flex items-center">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Start free, scale as you grow</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">No credit card required. Upgrade when you need more.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="flex flex-col h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Free</CardTitle>
                <div className="text-4xl font-bold mt-3 mb-1">$0<span className="text-base text-muted-foreground font-normal">/mo</span></div>
                <CardDescription>For exploration and prototyping</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> 100K API calls / month</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> All basic endpoints</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> Market search & discovery</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> Community support</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="flex flex-col h-full border-primary/50 relative transform md:-translate-y-4 shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-t-xl" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Pro</CardTitle>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold border border-primary/20">Popular</span>
                </div>
                <div className="text-4xl font-bold mt-3 mb-1">$29<span className="text-base text-muted-foreground font-normal">/mo</span></div>
                <CardDescription>For developers and trading apps</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" /> 1M API calls / month</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" /> Cross-venue analytics</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" /> Arbitrage detection</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" /> Priority support</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="flex flex-col h-full hover:border-border/80 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Enterprise</CardTitle>
                <div className="text-4xl font-bold mt-3 mb-1">Custom</div>
                <CardDescription>For teams with advanced needs</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" /> 10M+ API calls</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" /> Historical datasets</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" /> WebSocket streaming</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" /> Dedicated support & SLA</li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Compare all features →
          </Link>
        </div>
      </SectionWrapper>

      {/* Insights Section */}
      <SectionWrapper className="min-h-screen flex items-center border-t border-border/60">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-primary mb-3">Insights</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Latest from the team</h2>
              <p className="text-lg text-muted-foreground mt-2">Market analysis, technical deep dives, and product updates.</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link href="/blog/polymarket-vs-kalshi-liquidity-analysis" className="block">
              <div className="group grid md:grid-cols-2 gap-0 border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="aspect-[16/9] md:aspect-auto bg-gradient-to-br from-primary/10 via-cyan-500/5 to-sky-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(6,182,212,0.15),transparent_60%)]" />
                  <div className="text-center z-10 p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
                    </div>
                    <p className="text-xs font-medium text-primary/70">Market Analysis</p>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Market Analysis</span>
                  <h3 className="text-xl md:text-2xl font-bold leading-snug group-hover:text-primary transition-colors mb-3">Polymarket vs Kalshi: A Deep Dive into Liquidity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">Comparing order book depth, spread dynamics, and execution quality across the two largest prediction market venues.</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Mar 4, 2026</span>
                    <span>·</span>
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                slug: "building-ai-agents-on-prediction-markets",
                title: "Building AI Agents That Trade Prediction Markets Using MCP",
                description: "A step-by-step guide to connecting AI agents to live prediction market data through EventGraph's MCP server.",
                category: "Developer",
                date: "Feb 28, 2026",
                readTime: "12 min",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
                ),
                gradient: "from-violet-500/10 via-purple-500/5 to-fuchsia-500/10",
              },
              {
                slug: "arbitrage-opportunities-in-election-markets",
                title: "Arbitrage in Election Markets: Patterns, Risks, and Returns",
                description: "How cross-venue price discrepancies create opportunities — and the real-world constraints traders face capturing them.",
                category: "Trading Strategy",
                date: "Feb 20, 2026",
                readTime: "10 min",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
                ),
                gradient: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
              },
            ].map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="h-full"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="group flex flex-col h-full border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                    <div className={`aspect-[2/1] bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_60%)]" />
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center z-10">
                        {post.icon}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{post.category}</span>
                      <h3 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.description}</p>
                      <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime} read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile "View all" link */}
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
              View all posts →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="border-t border-border/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary text-center mb-3">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">Common questions</h2>
          <div className="space-y-3">
            {[
              {
                q: "What makes EventGraph different from individual venue APIs?",
                a: "Prediction market data is fragmented across platforms with incompatible schemas. EventGraph normalizes everything into a single API — compare probabilities, detect arbitrage, and build on a unified dataset instead of integrating each venue separately.",
              },
              {
                q: "Can I use EventGraph with AI agents?",
                a: "Yes. EventGraph ships an MCP server (Model Context Protocol) so AI agents can query prediction markets directly. Works with OpenAI, Claude, LangChain, and other agent frameworks out of the box.",
              },
              {
                q: "How quickly can I integrate?",
                a: "Most developers are making their first API call within minutes. The REST API uses simple GET endpoints with JSON responses — no SDKs required, though we provide client libraries for Python and TypeScript.",
              },
              {
                q: "Is there a free tier?",
                a: "Yes. The free plan includes generous API limits so you can explore the data, prototype applications, and validate your use case before upgrading. No credit card required.",
              },
              {
                q: "Which prediction markets are supported?",
                a: "EventGraph aggregates data from Polymarket, Kalshi, Limitless, and OpinionTrade — covering thousands of active markets. We continuously add new venues to the index.",
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
