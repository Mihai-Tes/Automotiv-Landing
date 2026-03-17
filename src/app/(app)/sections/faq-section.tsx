import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
    return (
        <section className="dark bg-brand-dark-1 text-foreground py-30">
            <div className="page-width">
                <header className="max-w-xl mx-auto mb-15">
                    <h3 className="text-4xl lg:text-6xl font-semibold tracking-tight">FAQ</h3>
                </header>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="shipping"
                    className="max-w-xl  mx-auto"
                >
                    <AccordionItem value="shipping">
                        <AccordionTrigger className="py-6 hover:no-underline">What are your shipping options?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            We offer standard (5-7 days), express (2-3 days), and overnight
                            shipping. Free shipping on international orders.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="returns">
                        <AccordionTrigger className="py-6 hover:no-underline">What is your return policy?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Returns accepted within 30 days. Items must be unused and in original
                            packaging. Refunds processed within 5-7 business days.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="support">
                        <AccordionTrigger className="py-6 hover:no-underline">How can I contact customer support?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Reach us via email, live chat, or phone. We respond within 24 hours
                            during business days.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="dsds">
                        <AccordionTrigger className="py-6 hover:no-underline">What are your shipping options?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            We offer standard (5-7 days), express (2-3 days), and overnight
                            shipping. Free shipping on international orders.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="dasdas">
                        <AccordionTrigger className="py-6 hover:no-underline">What is your return policy?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Returns accepted within 30 days. Items must be unused and in original
                            packaging. Refunds processed within 5-7 business days.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="asgfasda">
                        <AccordionTrigger className="py-6 hover:no-underline">How can I contact customer support?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Reach us via email, live chat, or phone. We respond within 24 hours
                            during business days.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
