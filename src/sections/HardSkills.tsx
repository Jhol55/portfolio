"use client";

import { AnimatedBeam } from "@/components/AnimatedBeam";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedTooltip } from "../components/AnimatedTooltip";

export default function HardSkills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative h-96 flex flex-col md:w-2/3 w-full justify-center lg:gap-20 gap-8">
            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={targetRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={targetRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={targetRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={targetRef} reverse curvature={10} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={targetRef} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={targetRef} reverse />

            <div className="flex justify-center lg:gap-20 gap-8">
                <AnimatedTooltip
                    tooltipContent={<span className="font-bold text-white text-lg">React.js</span>}>
                    <div ref={div1Ref} className="relative cursor-pointer flex justify-center items-center z-10 sm:h-12 sm:min-h-12 sm:w-12 sm:min-w-12 min-h-8 h-8 min-w-8 w-8 rounded-full bg-[#251C31] shadow-xl">
                        <Image src="/react.png" fill alt="" className="sm:p-3 p-2" />
                    </div>
                </AnimatedTooltip>
                <AnimatedTooltip
                    tooltipContent={<span className="font-bold text-white text-lg">Next.js</span>}>
                    <div ref={div2Ref} className="relative cursor-pointer flex justify-center items-center z-10 sm:h-12 sm:min-h-12 sm:w-12 sm:min-w-12 min-h-8 h-8 min-w-8 w-8 rounded-full bg-[#251C31] shadow-xl">
                        <Image src="/next.png" fill alt="" className="sm:p-3 p-2" />
                    </div>
                </AnimatedTooltip>
                <AnimatedTooltip
                    tooltipContent={<span className="font-bold text-white text-lg">JavaScript</span>}>
                    <div ref={div3Ref} className="relative cursor-pointer flex justify-center items-center z-10 sm:h-12 sm:min-h-12 sm:w-12 sm:min-w-12 min-h-8 h-8 min-w-8 w-8 rounded-full bg-[#251C31] shadow-xl">
                        <Image src="/js.png" fill alt="" className="sm:p-3 p-2" />
                    </div>
                </AnimatedTooltip>
                <AnimatedTooltip
                    tooltipContent={<span className="font-bold text-white text-lg">TypeScript</span>}>
                    <div ref={div4Ref} className="relative cursor-pointer flex justify-center items-center z-10 sm:h-12 sm:min-h-12 sm:w-12 sm:min-w-12 min-h-8 h-8 min-w-8 w-8 rounded-full bg-[#251C31] shadow-xl">
                        <Image src="/ts.png" fill alt="" className="sm:p-3 p-2" />
                    </div>
                </AnimatedTooltip>
                <AnimatedTooltip
                    tooltipContent={<span className="font-bold text-white text-lg">HTML</span>}>
                    <div ref={div5Ref} className="relative cursor-pointer flex justify-center items-center z-10 sm:h-12 sm:min-h-12 sm:w-12 sm:min-w-12 min-h-8 h-8 min-w-8 w-8 rounded-full bg-[#251C31] shadow-xl">
                        <Image src="/html.png" fill alt="" className="sm:p-3 p-2" />
                    </div>
                </AnimatedTooltip>
                <AnimatedTooltip
                    tooltipContent={<span className="font-bold text-white text-lg">Tailwind CSS</span>}>
                    <div ref={div6Ref} className="relative cursor-pointer flex justify-center items-center z-10 sm:h-12 sm:min-h-12 sm:w-12 sm:min-w-12 min-h-8 h-8 min-w-8 w-8 rounded-full bg-[#251C31] shadow-xl">
                        <Image src="/tailwind.png" fill alt="" className="sm:p-3 p-2" />
                    </div>
                </AnimatedTooltip>
            </div>

            <div className="z-20 h-full w-full rounded-full shadow-xl">
                <div className="relative flex justify-center items-center w-full h-full">
                    <div ref={targetRef} className="absolute h-2 w-1/12 -translate-x-[7%] -translate-y-[4vw]"></div>
                    <Image src="/bg-skills2.png" fill alt="" className="absolute z-10 object-contain" />
                    <div className="relative w-full h-full translate-y-8 opacity-70">
                        <Image src="/bg-gradient.png" fill alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}