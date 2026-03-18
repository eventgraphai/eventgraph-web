import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Mail, MessageSquare, Building2 } from "lucide-react";

export const metadata = {
    title: "Contact | EventGraph",
    description: "Get in touch for enterprise, partnerships, and support.",
};

export default function ContactPage() {
    return (
        <>
            <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/60">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in Touch</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Looking for enterprise access, partnerships, or support? Our team is ready to help you build the future of prediction markets.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/40 transition-colors">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">General Inquiries</h3>
                            <a href="mailto:support@eventgraph.ai" className="text-primary hover:underline text-sm font-medium">
                                support@eventgraph.ai
                            </a>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/40 transition-colors">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 mb-4">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Enterprise Sales</h3>
                            <a href="mailto:enterprise@eventgraph.ai" className="text-primary hover:underline text-sm font-medium">
                                enterprise@eventgraph.ai
                            </a>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/40 transition-colors">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 text-violet-500 mb-4">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Community</h3>
                            <a href="https://discord.gg/eventgraphai" target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm font-medium">
                                Join Discord
                            </a>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
