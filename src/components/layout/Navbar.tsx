'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/terminal', label: 'Terminal' },
    { href: '/docs', label: 'Developers' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Insights' },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
            <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
                    <span className="font-bold text-xl tracking-tight">
                        Event<span className="text-primary">Graph</span>
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-foreground after:transition-[width] after:duration-200 ${isActive(href)
                                    ? 'text-foreground font-semibold after:w-full'
                                    : 'text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                    <ThemeToggle />
                    <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                        <Button>Launch Terminal</Button>
                    </Link>
                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border/60 bg-background/98 backdrop-blur px-4 pb-4 pt-3">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMobileOpen(false)}
                                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(href)
                                        ? 'bg-primary/10 text-foreground font-semibold'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="pt-3 border-t border-border mt-2 flex flex-col gap-2">
                            <Link href="https://app.eventgraph.ai" target="_blank" rel="noreferrer">
                                <Button className="w-full">Launch Terminal</Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
