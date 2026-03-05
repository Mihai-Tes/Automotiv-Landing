import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navData } from "./data-nav"

export default function Header() {
    const parentNavItems = navData.filter(item => !item.childOf);

    return (
        <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
            <div className="container mx-auto px-6 h-full flex items-center">
                <div className="font-bold text-xl tracking-tighter">AUTOMOTIV</div>
                <nav className="flex-1">
                    <NavigationMenu
                    // viewport={false}
                    >
                        <NavigationMenuList>
                            {parentNavItems.map((parent) => {
                                const children = navData.filter(item => item.childOf === parent.title);
                                const hasChildren = children.length > 0;

                                return (
                                    <NavigationMenuItem key={parent.title}>
                                        {hasChildren ? (
                                            <>
                                                <NavigationMenuTrigger>{parent.title}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <div className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                        {children.map((child) => (
                                                            <NavigationMenuLink key={child.title} href={child.href} className="flex flex-col gap-2 rounded-lg p-2 transition-colors hover:bg-zinc-50 border border-transparent hover:border-zinc-100">
                                                                {child.image && (
                                                                    <div className="aspect-video w-full overflow-hidden rounded-md border border-zinc-200">
                                                                        <img
                                                                            src={child.image}
                                                                            alt={child.title}
                                                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                                        />
                                                                    </div>
                                                                )}
                                                                <div className="flex flex-col gap-1">
                                                                    <div className="text-sm font-semibold leading-none text-black">{child.title}</div>
                                                                    {child.description && (
                                                                        <p className="line-clamp-2 text-[13px] leading-snug text-zinc-500">
                                                                            {child.description}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
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
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-zinc-600 hover:text-black">Login</button>
                    <button className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-all active:scale-95">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
}