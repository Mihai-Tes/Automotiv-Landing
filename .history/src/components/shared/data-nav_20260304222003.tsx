export interface NavItem {
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
        image: "https://images.unsplash.com/photo-1551288049-bbda3363355d?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
        childOf: "Platform",
        title: "Inventory",
        href: "/platform/inventory",
    },
    {
        childOf: "Platform",
        title: "Inventory",
        href: "/platform/inventory",
    },
    {
        childOf: "Platform",
        title: "Inventory",
        href: "/platform/inventory",
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
    },

    {
        childOf: "Solutions",
        title: "Inventory Management",
        href: "/solutions/inventory-management",
    },
    {
        childOf: "Solutions",
        title: "Estimates",
        href: "/solutions/estimates",
    },
    {
        childOf: "Solutions",
        title: "Invoicing",
        href: "/solutions/invoicing",
    },
    {
        childOf: "Solutions",
        title: "Marketing",
        href: "/solutions/marketing",
    },


    // ======= Resources =======

    {
        title: "Resources",
        href: "/resources",
    },
    {
        childOf: "Resources",
        title: "Blog",
        href: "/blog",
    },
    {
        childOf: "Resources",
        title: "Docs",
        href: "docs.automotiv.app",
    },




    // ======= Pricing =======


    {
        title: "Pricing",
        href: "/pricing",
    },


    // ======= Contact =======

    {
        title: "Contact",
        href: "/contact",
    },
];