import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"



export default function Header() {
    return (
        <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <div className="font-bold text-xl tracking-tighter">AUTOMOTIV</div>
                <nav>
                    <NavigationMenu>
                        <ul className="flex justify-start">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink>Item One</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            </NavigationMenuItem>
                        </ul>
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