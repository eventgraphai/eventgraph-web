import Link from 'next/link';

export function Footer() {
    return (
        <footer>
            {/* Pre-footer CTA Band */}
            <div className="relative overflow-hidden border-t border-border/60">
                {/* Subtle glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-[120px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 text-center relative z-10">
                    <p className="text-sm font-medium text-primary mb-4">Early Access</p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
                        Ready to build with prediction<br className="hidden sm:block" /> market intelligence?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                        Start exploring the API today or schedule a walkthrough with our team to see how EventGraph fits your workflow.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                        <Link
                            href="https://app.eventgraph.ai"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                        >
                            Launch Terminal
                        </Link>
                        <Link
                            href="https://calendly.com/eventgraph"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                            Schedule Onboarding
                        </Link>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        <Link href="/docs" className="text-primary hover:underline">Read the docs</Link>
                        {' · '}
                        <a href="mailto:support@eventgraph.ai" className="text-primary hover:underline">support@eventgraph.ai</a>
                    </p>
                </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-border/60">
                <div className="container mx-auto px-4 md:px-6 py-14 md:py-16">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                        {/* Brand + social */}
                        <div className="col-span-2">
                            <Link href="/" className="flex items-center space-x-2 mb-4">
                                <span className="font-bold text-xl tracking-tight">
                                    Event<span className="text-primary">Graph</span>
                                </span>
                            </Link>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mb-6">
                                The intelligence layer for global prediction markets.
                            </p>
                            {/* Social icons */}
                            <div className="flex items-center gap-3">
                                <Link href="https://x.com/eventgraphai" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors" aria-label="Twitter">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </Link>
                                <Link href="https://github.com/eventgraphai" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors" aria-label="GitHub">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                </Link>
                                <Link href="https://discord.gg/eventgraphai" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors" aria-label="Discord">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                                </Link>
                                <Link href="https://linkedin.com/company/eventgraph" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors" aria-label="LinkedIn">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="font-medium mb-4 text-sm text-foreground">Product</h3>
                            <ul className="space-y-2.5 text-sm text-muted-foreground">
                                <li><Link href="/terminal" className="hover:text-foreground transition-colors">Terminal</Link></li>
                                <li><Link href="/api" className="hover:text-foreground transition-colors">API</Link></li>
                                <li><Link href="/ai" className="hover:text-foreground transition-colors">AI Agents</Link></li>
                                <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                            </ul>
                        </div>

                        {/* Developers */}
                        <div>
                            <h3 className="font-medium mb-4 text-sm text-foreground">Developers</h3>
                            <ul className="space-y-2.5 text-sm text-muted-foreground">
                                <li><Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
                                <li><a href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">API Reference</a></li>
                                <li><a href="https://github.com/eventgraphai" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
                                <li><a href="https://status.eventgraph.ai" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Status</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-medium mb-4 text-sm text-foreground">Company</h3>
                            <ul className="space-y-2.5 text-sm text-muted-foreground">
                                <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
                                <li><Link href="/blog" className="hover:text-foreground transition-colors">Insights</Link></li>
                                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-medium mb-4 text-sm text-foreground">Legal</h3>
                            <ul className="space-y-2.5 text-sm text-muted-foreground">
                                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-6 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                        <p>© {new Date().getFullYear()} EventGraph Inc. All rights reserved.</p>
                        <p className="hidden sm:block">San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
