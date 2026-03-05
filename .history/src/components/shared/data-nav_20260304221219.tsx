export interface NavItem {
    title: string;
    href: string;
    childOf?: string;
}

export const navData: NavItem[] = [
    {
        title: "Platform",
        href: "/platform",
    },

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

    {
        title: "Resources",
        href: "/resources",
    },

    {
        title: "Pricing",
        href: "/pricing",
    },

    {
        title: "Contact",
        href: "/contact",
    },
];