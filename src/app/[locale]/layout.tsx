import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import "./globals.css";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./page.module.css";
import { Logo } from "@/components/ui/logo";

// i18n
import Nav from '@/components/nav';

// i18n
import { Locale, i18nConfig } from '@/i18n';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Application Development",
    href: "/",
    description: "Under Construction.",
  },
  {
    title: "Auth secure app solutions",
    href: "/",
    description: "Under Construction.",
  },
  {
    title: "Progress and maintenance",
    href: "/",
    description: "Under Construction.",
  },
  {
    title: "Prompt Engineering",
    href: "/",
    description: "Under Construction.",
  },
  {
    title: "Cloud solutions",
    href: "/",
    description: "Under Construction.",
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
  title: "Kabots Software Solutions",
  description: "Generate software",
};


// i18n
export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

// i18n
type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default function RootLayout({
  children, params
}: Readonly<{
    children: React.ReactNode;
    params: {
        locale: Locale ;
     };
}>) {

  return (

    // i18n
    <html lang={params.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <header className={styles.header}>
          <div className="w-full p-4 md:p-6">

            <Nav locale={ params.locale} />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0 px-8">
                <Logo className="w-32 md:w-40 px-8" />
              </div>
              <nav className="md:flex">
                <input type="checkbox" id="menu-toggle" className="hidden" />
                <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
                  Menu ☰
                </label>
                <NavigationMenu className="hidden md:block">
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
                                  Software Solutions
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Under Construction
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="/" title="Chatbots implementation Solutions">
                            Under Construction.
                          </ListItem>
                          <ListItem href="/" title="Predictive Solutions">
                            Under Construction.
                          </ListItem>
                          <ListItem
                            href="/"
                            title="Artificial Intelligence Implementation solutions."
                          >
                            Under construction.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                      <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Blog
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                      <NavigationMenuItem>
                      <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Contact
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
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

