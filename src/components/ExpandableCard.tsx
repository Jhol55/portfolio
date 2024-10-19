"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";

export function ExpandableCard({
  src,
  title,
  ctaText,
  ctaLink,
  description,
  observation,
  content,
  className
}: {
  src: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  description: string;
  observation: string;
  content: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick(ref, () => setOpen(false));

  const id = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);


  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 grid place-items-center z-50">
            <motion.div
              ref={ref}
              layoutId={id}
              className={
                cn("w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gradient-to-r from-[#130428] to-[#26094e] sm:rounded-3xl overflow-hidden",
                  className
                )}
            >
              <motion.div className="relative">
                <motion.button
                  layout
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-6 w-6 z-50"
                >
                  <CloseIcon />
                </motion.button>
                <div className="relative h-40 w-full mt-4">
                  <Image
                    priority
                    fill
                    src={src}
                    alt={title}
                    className="w-full p-4 sm:rounded-tr-lg sm:rounded-tl-lg object-contain"
                  />
                </div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3 className="font-bold text-white">
                      {title}
                    </motion.h3>
                    <motion.p className="text-neutral-300">
                      {description}
                    </motion.p>
                    <motion.p className="text-neutral-300">
                      {observation}
                    </motion.p>
                  </div>
                  <motion.a
                    href={ctaLink}
                    target="_blank"
                    className="rounded-full bg-[linear-gradient(325deg,#4F228D_0%,#874CDE_55%,#4F228D_90%)] bg-[280%_auto] px-6 py-2 font-medium text-white shadow-[0px_0px_20px_rgba(111,57,173,0.5),0px_5px_5px_-1px_rgba(133,94,197,0.25),inset_4px_4px_8px_rgba(161,117,227,0.5),inset_-4px_-4px_8px_rgba(79,34,141,0.35)] transition-[background] duration-700 hover:bg-right-top focus:outline-none focus:ring-purple-400 focus:ring-offset-1 focus:ring-offset-white focus-visible:ring-2 dark:focus:ring-purple-500 dark:focus:ring-offset-black"
                  >
                    {ctaText}
                  </motion.a>
                </div>
              </motion.div>
              <div className="overflow-auto">
                <div className="pt-4 relative px-4">
                  <motion.div className="text-neutral-300 text-md h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        className="w-full h-full gap-4"
        layoutId={id}
      >
        <motion.div className="p-4 flex flex-col md:flex-row justify-between items-center h-full rounded-xl">
          <div className="flex md:gap-4 flex-col md:flex-row items-center">
            <motion.div className="flex justify-center items-center h-20">
              <div className="relative h-full w-32 lg:w-20 lg:mr-2">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-contain"
                />
              </div>
            </motion.div>
            <div className="lg:mb-0 mb-4">
              <motion.h3 className="font-medium text-lg text-white text-center md:text-left">
                {title}
              </motion.h3>
              <motion.p className="text-neutral-300 text-center md:text-left">
                {description}
              </motion.p>
              <motion.p className="text-neutral-300 text-center md:text-left">
                {observation}
              </motion.p>
            </div>
          </div>

          {ctaText &&
            <motion.button onClick={() => setOpen(true)} className="m-2 whitespace-nowrap rounded-full bg-[linear-gradient(325deg,#4F228D_0%,#874CDE_55%,#4F228D_90%)] bg-[280%_auto] px-6 py-2 font-medium text-white shadow-[0px_0px_20px_rgba(111,57,173,0.5),0px_5px_5px_-1px_rgba(133,94,197,0.25),inset_4px_4px_8px_rgba(161,117,227,0.5),inset_-4px_-4px_8px_rgba(79,34,141,0.35)] transition-[background] duration-700 hover:bg-right-top">
              {ctaText}
            </motion.button>
          }
        </motion.div>
      </motion.div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
