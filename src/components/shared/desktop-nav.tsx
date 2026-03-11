"use client"

import { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navData } from "./data-nav"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export default function DesktopNav() {
    const parentNavItems = navData.filter(item => !item.childOf);

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {parentNavItems.map((parent) => {
                    const children = navData.filter(item => item.childOf === parent.title);
                    const hasChildren = children.length > 0;
                    const hasImages = children.some(c => c.image);

                    return (
                        <NavigationMenuItem key={parent.title}>
                            {hasChildren ? (
                                <>
                                    <NavigationMenuTrigger className="bg-transparent [state=open]:bg-transparent">
                                        {parent.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {hasImages ? (
                                            // Split-panel layout: links left, image preview right
                                            <SplitPanelMenu items={children} />
                                        ) : (
                                            // Simple list layout for categories without images
                                            <div className="w-[420px]">
                                                {children.map((child) => (
                                                    <NavigationMenuLink
                                                        key={child.title}
                                                        href={child.href}
                                                        className="flex flex-row gap-3 group rounded-md p-3 transition-colors hover:bg-accent"
                                                    >
                                                        <div className="size-11 border group-hover:border-brand-red grid place-items-center rounded-sm">
                                                            {child.icon && <child.icon />}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div className="text-sm font-semibold text-black">{child.title}</div>
                                                            {child.description && (
                                                                <p className="text-[11px] text-muted-foreground">
                                                                    {child.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        )}
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <NavigationMenuLink
                                    href={parent.href}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                >
                                    {parent.title}
                                </NavigationMenuLink>
                            )}
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

// --- Split-panel: links on the left, image preview on the right ---
interface NavChild {
    icon?: LucideIcon;
    title: string;
    href: string;
    description?: string;
    image?: string;
    childOf?: string;
}

function SplitPanelMenu({ items }: { items: NavChild[] }) {
    const firstWithImage = items.find(c => c.image);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    const displayImage = hoveredImage ?? firstWithImage?.image ?? null;

    return (
        <div className="flex w-[640px] overflow-hidden">
            {/* Left: link list */}
            <ul className="flex-1 p-0 space-y-0.5 mr-3">
                {items.map((child) => (
                    <li key={child.title}>
                        <NavigationMenuLink
                            href={child.href}
                            className={cn(
                                "group flex flex-row items-center gap-3 rounded-md p-3",
                                "transition-colors",
                                "hover:bg-accent"
                            )}
                            onMouseEnter={() => setHoveredImage(child.image ?? firstWithImage?.image ?? null)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <div className="size-11 border group-hover:border-brand-red grid place-items-center rounded-sm">
                                {child.icon && <child.icon />}
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-sm font-semibold leading-none">
                                    {child.title}
                                </span>
                                {child.description && (
                                    <span className="text-[11px] leading-snug text-muted-foreground">
                                        {child.description}
                                    </span>
                                )}
                            </div>
                        </NavigationMenuLink>
                    </li>
                ))}
            </ul>

            {/* Right: image preview */}
            {displayImage && (
                <div className="relative w-[280px] shrink-0 overflow-hidden rounded-sm">
                    <Image
                        key={displayImage}
                        src={displayImage}
                        alt="Feature preview"
                        fill
                        className="object-cover transition-all duration-300 ease-in-out"
                    />
                </div>
            )}
        </div>
    );
}