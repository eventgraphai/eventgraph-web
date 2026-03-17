import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export const metadata = {
    title: "Contact | EventGraph",
    description: "Get in touch for enterprise, partnerships, and support.",
};

export default function ContactPage() {
    return (
       <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-[70vh] flex flex-col justify-center">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Looking for enterprise access, partnerships, or support? Our team is ready to help you build the future of prediction markets.
                </p>

                <div className="pt-12">
                    <div className="inline-flex items-center justify-center space-x-4 bg-muted/20 border border-border rounded-xl p-8 hover:bg-muted/30 transition-colors w-full sm:w-auto">
                        <div className="bg-primary/20 text-primary p-3 rounded-full">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-medium text-foreground">Email us at</div>
                            <a href="mailto:support@eventgraph.ai" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                                support@eventgraph.ai
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
