import { LucideIcon } from "lucide-react";

export interface NavItem {
    icon?: LucideIcon;
    title: string;
    description?: string;
    image?: string;
    href: string;
    childOf?: string;
}

export const navData: NavItem[] = [


    // ======= Platform =======

    {
        title: "Platform",
        href: "/platform",
    },

    {
        childOf: "Platform",
        title: "Dashboard",
        href: "/platform/dashboard",
        description: "A bird's eye view of your entire shop operation.",
        image: "/media/logo_symbol_red.svg"
    },
    {
        childOf: "Platform",
        title: "Inventory",
        href: "/platform/inventory",
        description: "Track parts, supplies, and stock levels in real-time.",
        image: "/media/logo_symbol_red.svg"
    },


    // ======= Solutions =======

    {
        title: "Solutions",
        href: "/solutions",
    },
    {
        childOf: "Solutions",
        title: "CRM",
        href: "/solutions/crm",
        description: "Manage customer relationships and history effortlessly.",
    },

    {
        childOf: "Solutions",
        title: "Inventory Management",
        href: "/solutions/inventory-management/",
        description: "Optimize your stock and reduce waste.",
    },
    {
        childOf: "Solutions",
        title: "Estimates",
        href: "/solutions/estimates/",
        description: "Create professional estimates in seconds.",
    },
    {
        childOf: "Solutions",
        title: "Invoicing",
        href: "/solutions/invoicing/",
        description: "Get paid faster with automated invoicing.",
    },
    {
        childOf: "Solutions",
        title: "Marketing",
        href: "/solutions/marketing/",
        description: "Grow your business with targeted campaigns.",
    },


    // ======= Resources =======

    {
        title: "Resources",
        href: "/resources/",
    },
    {
        childOf: "Resources",
        title: "Documentation",
        href: "https://docs.automotiv.app",
        description: "Everything you need to master the platform.",
    },
    {
        childOf: "Resources",
        title: "Changelog",
        href: "https://automotiv.app/changelog/",
        description: "What's new in the platform.",
    },
    {
        childOf: "Resources",
        title: "Roadmap",
        href: "https://automotiv.app/roadmap/",
        description: "Future plans and upcoming features.",
    },
    {
        childOf: "Resources",
        title: "Blog",
        href: "/blog/",
        description: "Insights and tips for modern auto shops.",
    },
    {
        childOf: "Resources",
        title: "FAQ",
        href: "https://automotiv.app/faq/",
        description: "Frequently Asked Questions.",
    },




    // ======= Pricing =======


    {
        title: "Pricing",
        href: "/pricing/",
    },


    // ======= Contact =======

    {
        title: "Contact",
        href: "/contact/",
    },
];