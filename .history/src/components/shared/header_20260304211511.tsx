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
        <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                <div className="font-bold text-xl">Automotiv</div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    <NavigationMenuLink href="/">
                                        <div className="text-sm font-medium leading-none">Dashboard</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Manage your auto repair shop operations.
                                        </p>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink href="/appointments">
                                        <div className="text-sm font-medium leading-none">Appointments</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            View and schedule customer service visits.
                                        </p>
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/about"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            >
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium">Login</button>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">Get Started</button>
                </div>
            </div>
        </header>
    );
}