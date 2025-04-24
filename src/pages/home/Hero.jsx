import React from "react";

const Hero = () => {
    return (
    <section>
        <div class="justify-center flex flex-col py-8 px-4 mx-auto min-h-screen text-center -mt-20 md:-mt-0 lg:py-16 lg:px-1 2">
            <h6 className="text-slate-400 tracking-[0.6em] md:text-2xl text-[18px] mb-4 ml-6 md:ml-0">
                <span className="whitespace-nowrap">KADEK</span>{" "}
                <span className="whitespace-nowrap">PANJI</span>
            </h6>
            <h1 className="text-[100px] md:text-[260px] leading-none font-medium text-white stroke-text mb-4">
                <span className="block text-slate-800 dark:text-white">ENJOY</span>
                <span className="block text-slate-500">YOUR</span>
                <span className="block text-slate-800 dark:text-white">LIFE</span>
            </h1>
        </div>
    </section>
    )
}

export default Hero