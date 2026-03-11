import { LucideIcon, LayoutDashboard, Calendar1, FileText, Bell, Workflow, Wrench, Users, Paperclip, Book, Rotate3D, Newspaper, FileQuestion } from "lucide-react";

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
        icon: LayoutDashboard,
        title: "Dashboard",
        href: "/platform/dashboard",
        description: "A bird's eye view of your entire shop operation.",
        image: "/media/pictures/modern-warehouse.jpg"
    },
    {
        childOf: "Platform",
        icon: Calendar1,
        title: "Appointments",
        href: "/platform/appointments",
        description: "Manage your appointments and schedule.",
        image: "/media/logo_symbol_red.svg"
    },
    {
        childOf: "Platform",
        icon: FileText,
        title: "Estimates",
        href: "/platform/estimates",
        description: "Create professional estimates in seconds.",
        image: "/media/logo_symbol_red.svg"
    },
    {
        childOf: "Platform",
        icon: FileText,
        title: "Invoices",
        href: "/platform/invoices",
        description: "Get paid faster with automated invoicing.",
        image: "/media/logo_symbol_red.svg"
    },
    {
        childOf: "Platform",
        icon: Bell,
        title: "Notifications",
        href: "/platform/notifications",
        description: "Stay updated with important notifications.",
        image: "/media/logo_symbol_red.svg"
    },
    {
        childOf: "Platform",
        icon: Workflow,
        title: "Automations",
        href: "/platform/automations",
        description: "Automate your workflows and save time.",
        image: "/media/logo_symbol_red.svg"
    },


    // ======= Solutions =======

    {
        title: "Solutions",
        href: "/solutions",
    },
    {
        childOf: "Solutions",
        icon: Users,
        title: "CRM",
        href: "/solutions/crm",
        description: "Manage customer relationships and history effortlessly.",
    },

    {
        childOf: "Solutions",
        icon: Wrench,
        title: "Inventory Management",
        href: "/solutions/inventory-management/",
        description: "Optimize your stock and reduce waste.",
    },
    {
        childOf: "Solutions",
        icon: FileText,
        title: "Estimates",
        href: "/solutions/estimates/",
        description: "Create professional estimates in seconds.",
    },
    {
        childOf: "Solutions",
        icon: FileText,
        title: "Invoicing",
        href: "/solutions/invoicing/",
        description: "Get paid faster with automated invoicing.",
    },
    {
        childOf: "Solutions",
        icon: Paperclip,
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
        icon: Book,
        title: "Documentation",
        href: "https://docs.automotiv.app",
        description: "Everything you need to master the platform.",
    },
    {
        childOf: "Resources",
        icon: Workflow,
        title: "Changelog",
        href: "https://automotiv.app/changelog/",
        description: "What's new in the platform.",
    },
    {
        childOf: "Resources",
        icon: Rotate3D,
        title: "Roadmap",
        href: "https://automotiv.app/roadmap/",
        description: "Future plans and upcoming features.",
    },
    {
        childOf: "Resources",
        icon: Newspaper,
        title: "Blog",
        href: "/blog/",
        description: "Insights and tips for modern auto shops.",
    },
    {
        childOf: "Resources",
        icon: FileQuestion,
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