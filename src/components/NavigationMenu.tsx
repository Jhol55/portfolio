"use client";

import { ShimmerButton } from "@/components/ShimmerButton"
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/Drawer';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@reactuses/core";
import { StarsBackground } from "@/components/StarsBackground";
import { ShootingStars } from "@/components/ShootingStars";


const Navigation = ({ className, open, isFixed, onClick }: { className?: string, open: boolean, isFixed?: boolean, onClick?: () => void }) => {
    return (
        <>
            <div className={cn((!isFixed || open) && "!hidden", "h-20 w-full")} />
            <nav
                className={cn(
                    "flex lg:w-fit w-full flex-col lg:flex-row gap-10 items-center",
                    isFixed && "fixed z-50 bg-[#10071f] rounded-full -translate-y-[4px]",
                    (isFixed && !open) && "p-3",
                    className)}
            >
                <div className="flex lg:w-full w-[200px] gap-10 justify-center lg:items-center px-4 flex-col lg:flex-row">
                    <a href="#top" className="text-white text-center whitespace-nowrap content-center px-4 py-2 border border-white/50 rounded-full" onClick={onClick}>
                        Sobre mim
                    </a>
                    <a href="#work-experience" className="text-white text-center whitespace-nowrap content-center px-4 py-2 border border-white/50 rounded-full" onClick={onClick}>
                        Experiências
                    </a>
                    <a href="#objectives" className="text-white text-center whitespace-nowrap content-center px-4 py-2 border border-white/50 rounded-full" onClick={onClick}>
                        Objetivos
                    </a>
                    <a href="#hard-skills" className="text-white text-center whitespace-nowrap content-center px-4 py-2 border border-white/50 rounded-full" onClick={onClick}>
                        Hard Skills
                    </a>
                </div>
                <div className="flex justify-center w-1/2">
                    <ShimmerButton
                        onClick={onClick}
                        href="#contact"
                        className="!text-white !px-6"
                        background="bg-gradient-to-r from-[#9757EE] to-[#3b157d]"
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

    useEffect(() => {
        if (isDesktop) {
            setOpen(false);
        }
    }, [isDesktop])



    return (
        <header className={cn(!isFixed && "p-6", "flex items-center lg:mb-20 lg:justify-center justify-end gap-4")}>
            <Navigation className="lg:flex hidden" open={open} isFixed={isFixed} />
            <Drawer
                open={!isDesktop && open}
                onClose={() => setOpen(false)}
                noBodyStyles
            >
                <DrawerTrigger
                    asChild
                    onClick={() => setOpen(true)}
                    className={cn(isFixed && "fixed -top-12", "lg:hidden cursor-pointer z-50")}
                    aria-label="show menu"
                >
                    <div className={cn(isFixed && "p-6 mt-12 bg-[#10071f] z-50")} style={{ borderBottomLeftRadius: "50%" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </div>
                </DrawerTrigger>
                <DrawerContent
                    aria-describedby={undefined}
                    onInteractOutside={() => setOpen(false)}
                    className={cn(isFixed && "fixed top-0", "bg-[#10071f]")}
                >
                    <div className="my-6 overflow-y-auto">
                        <DrawerTitle className='hidden' />
                        <Navigation onClick={() => setOpen(false)} open={open} isFixed={isFixed} />
                    </div>
                    <StarsBackground className="-z-10" />
                    <ShootingStars className="-z-10" />
                </DrawerContent>
            </Drawer>
        </header>
    )
}

