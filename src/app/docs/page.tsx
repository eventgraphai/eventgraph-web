import { redirect } from 'next/navigation';

export default function DocsPage() {
    // Permanently redirect to the developer docs
    redirect('https://developers.eventgraph.ai');
}
