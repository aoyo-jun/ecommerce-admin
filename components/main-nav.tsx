"use client"

import { useParams, usePathname } from "next/navigation";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();
    const [mounted, setMounted] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const routes = [
        {
            href: `/${params.storeId}`,
            label: 'Overview',
            active: pathname === `/${params.storeId}`
        },
        {
            href: `/${params.storeId}/billboards`,
            label: 'Billboards',
            active: pathname === `/${params.storeId}/billboards`
        },
        {
            href: `/${params.storeId}/categories`,
            label: 'Categories',
            active: pathname === `/${params.storeId}/categories`
        },
        {
            href: `/${params.storeId}/sizes`,
            label: 'Sizes',
            active: pathname === `/${params.storeId}/sizes`
        },
        {
            href: `/${params.storeId}/colors`,
            label: 'Colors',
            active: pathname === `/${params.storeId}/colors`
        },
        {
            href: `/${params.storeId}/products`,
            label: 'Products',
            active: pathname === `/${params.storeId}/products`
        },
        {
            href: `/${params.storeId}/orders`,
            label: 'Orders',
            active: pathname === `/${params.storeId}/orders`
        },
        {
            href: `/${params.storeId}/settings`,
            label: 'Settings',
            active: pathname === `/${params.storeId}/settings`
        }
    ];

    return (
        <>
            {isMobile
                ? (
                    <div className="flex items-center justify-center ml-2 visible md:invisible">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Menu className="h-8 w-8 text-muted-foreground" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <nav>
                                    {routes.map((route) => (
                                        <DropdownMenuItem key={route.href} asChild>
                                            <Link
                                                href={route.href}
                                                className={cn(
                                                    "text-sm font-medium transition-colors hover:text-primary",
                                                    route.active ? "text-black dark:text-white" : "text-muted-foreground"
                                                )}
                                            >
                                                {route.label}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </nav>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )
                : (
                    <nav
                        className={cn("flex items-center space-x-4 lg:space-x-6 invisible md:visible", className)}
                    >
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    route.active ? "text-black dark:text-white" : "text-muted-foreground"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                )
            }
        </>
    );
}