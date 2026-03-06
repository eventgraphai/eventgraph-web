import Link from 'next/link';

export function Footer() {
    return (
        <footer>
            {/* Pre-footer CTA Band */}
            <div className="relative overflow-hidden border-t border-border">
                {/* Ambient glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/4 top-0 w-96 h-40 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute right-1/4 bottom-0 w-96 h-40 rounded-full bg-blue-500/15 blur-3xl" />
                </div>
                <div className="container mx-auto px-4 md:px-6 py-20 md:py-24 text-center relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started Today</p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Ready to explore prediction markets?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Start with a free API key. No credit card required. Full access to markets, cross-venue data, and our MCP server.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://developers.eventgraph.ai"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
                        >
                            Start for Free →
                        </Link>
                        <Link
                            href="/docs"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                        >
                            Read the Docs
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-border bg-muted/20">
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        <div className="col-span-2 lg:col-span-2">
                            <Link href="/" className="flex items-center space-x-2 mb-4">
                                <span className="font-bold text-xl tracking-tight">
                                    Event<span className="text-primary">Graph</span>
                                </span>
                            </Link>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                                The intelligence layer for global prediction markets. Unified data, cross-venue analytics, and developer APIs.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4 text-sm">Product</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/product" className="hover:text-foreground transition-colors">Overview</Link></li>
                                <li><Link href="/terminal" className="hover:text-foreground transition-colors">Terminal</Link></li>
                                <li><a href="https://app.eventgraph.ai" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Launch Dashboard</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4 text-sm">Platform</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/api" className="hover:text-foreground transition-colors">API</Link></li>
                                <li><Link href="/ai" className="hover:text-foreground transition-colors">AI Agents</Link></li>
                                <li><Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4 text-sm">Company</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                                <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                                <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} EventGraph. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Discord</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
