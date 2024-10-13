"use client";

import { ShimmerButton } from "@/components/ShimmerButton"
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/Drawer';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@reactuses/core";
import { StarsBackground } from "@/components/StarsBackground";
import { ShootingStars } from "@/components/ShootingStars";


const Navigation = ({ className, onClick }: { className?: string, onClick?: () => void }) => {

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 70) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            <div className={cn(!isFixed && "!hidden", "h-6 w-full")} />
            <nav
                className={cn(
                    "flex lg:w-2/3 w-full flex-col lg:flex-row gap-10 items-center transition-all duration-300 ease-in-out",
                    isFixed && "fixed p-3 z-50 bg-[#10071f] rounded-full",
                    className)}
            >
                <div className="flex lg:w-full w-[200px] gap-10 justify-center lg:items-center px-4 flex-col lg:flex-row">
                    <a href="#top" className="text-white text-center whitespace-nowrap content-center px-4 py-2 border border-white/50 rounded-full" onClick={onClick}>
                        Sobre mim
                    </a>
                    <a href="#work-experience" className="text-white text-center whitespace-nowrap content-center px-4 py-2 border border-white/50 rounded-full" onClick={onClick}>
                        Experiências
                    </a>
                    <a href="#hard-skills" className="text-white text-center whitespace-nowrap content-center px-4 py-2 border border-white/50 rounded-full" onClick={onClick}>
                        Hard Skills
                    </a>
                </div>
                <div className="flex justify-center w-1/2">
                    <ShimmerButton
                        className="!text-white !px-6"
                        background="bg-gradient-to-r from-[#9757EE] to-[#6825D9]"
                    >
                        Entre em contato
                    </ShimmerButton>
                </div>
                <StarsBackground className={cn(!isFixed && "hidden", "-z-10")} />
                <ShootingStars className={cn(!isFixed && "hidden", "-z-10")} />
            </nav>
        </>
    )
}


export const NavigationMenu = () => {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 1024px)', false);

    useEffect(() => {
        if (isDesktop) {
            setOpen(false);
        }
    }, [isDesktop])

    return (
        <header className="flex items-center lg:mb-20 lg:justify-center justify-end p-6 gap-4">
            <Navigation className="lg:flex hidden" />
            <Drawer
                open={!isDesktop && open}
                onClose={() => setOpen(false)}
                noBodyStyles
            >
                <DrawerTrigger
                    asChild
                    onClick={() => setOpen(true)}
                    className="lg:hidden cursor-pointer"
                    aria-label="show menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </DrawerTrigger>
                <DrawerContent
                    aria-describedby={undefined}
                    onInteractOutside={() => setOpen(false)}
                    className="bg-[#10071f]"
                >
                    <div className="my-10 overflow-y-auto">
                        <DrawerTitle className='hidden' />
                        <Navigation onClick={() => setOpen(false)} />
                    </div>
                </DrawerContent>
            </Drawer>
        </header>
    )
}

