import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl tracking-tight">
                            Event<span className="text-primary">Graph</span>
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/product" className="transition-colors hover:text-foreground">Product</Link>
                        <Link href="/terminal" className="transition-colors hover:text-foreground">Terminal</Link>
                        <Link href="/api" className="transition-colors hover:text-foreground">API</Link>
                        <Link href="/ai" className="transition-colors hover:text-foreground">AI Agents</Link>
                        <Link href="/pricing" className="transition-colors hover:text-foreground">Pricing</Link>
                        <Link href="/blog" className="transition-colors hover:text-foreground">Blog</Link>
                        <Link href="/docs" className="transition-colors hover:text-foreground">Docs</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <ThemeToggle />
                    <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                        <Button variant="ghost" className="hidden sm:inline-flex">Login</Button>
                    </Link>
                    <Link href="https://developers.eventgraph.ai" target="_blank" rel="noreferrer">
                        <Button>Start Free</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
