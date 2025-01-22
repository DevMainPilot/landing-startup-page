import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import styles from "./page.module.css";
import { Logo } from "@/components/ui/logo";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const links = [
  { name: "Home", href: "/" },
  { name: "about", href: "/about" },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Feature 1",
    href: "/",
    description:
      "Feature content.",
  },
  {
    title: "Auth secute appa",
    href: "/",
    description:
      "For.",
  },
  {
    title: "Progress and maintance",
    href: "/",
    description:
      "Displays an indicators task.",
  },
  {
    title: "Service 1",
    href: "/d",
    description: "Visually content.",
  },
  {
    title: "Cloud solutions",
    href: "/",
    description:
      "Cloud.",
  },
  {
    title: "Service 2",
    href: "/",
    description:
      "Custom AI solutions.",
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generate software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <header className={styles.header}>

            <div className="w-full mt-4 flow-root items-left align-left pt-5">
              <div className="align-left w-75 items-left px-10">
                <Logo className="align-left  items-left"/>
              </div>
                <div className="w-full">
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                  <NavigationMenuLink asChild>
                                    <a
                                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                      href="/"
                                    >
                                      <div className="mb-2 mt-4 text-lg font-medium">
                                        Solutions
                                      </div>
                                      <p className="text-sm leading-tight text-muted-foreground">
                                        Components.
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                                <ListItem href="/" title="Introduction">
                                  Built using UI and CSS.
                                </ListItem>
                                <ListItem href="/" title="Build">
                                  Software.
                                </ListItem>
                                <ListItem
                                  href="/"
                                  title="AI"
                                >
                                  UI
                                </ListItem>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                  <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                  >
                                    {component.description}
                                  </ListItem>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About us
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                  </div>
               </div>
        </header>
        {children}



    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2025/01/17/12/20250117125925-XICVVD6W.js"></script>



      </body>
    </html>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
