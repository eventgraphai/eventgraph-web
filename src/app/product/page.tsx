import { redirect } from "next/navigation";

export const metadata = {
    title: "Product | EventGraph",
    description: "The complete platform for prediction market intelligence.",
};

export default function ProductPage() {
    redirect("/terminal");
}
