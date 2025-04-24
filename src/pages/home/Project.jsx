import React from 'react'

const Project = () => {
    const projects = [
    {
        year: 2024,
        title: 'Hari Natal & Tahun Baru',
        image: '/public/images/1.png',
    },
    {
        year: 2024,
        title: 'Personal Website',
        image: '/public/images/2.png',
    },
    {
        year: 2023,
        title: 'Pricelist Event The Exorcist',
        image: '/public/images/3.png',
    },
    {
        year: 2023,
        title: 'Kasir Laundry',
        image: '/public/images/4.png',
    },
    {
        year: 2022,
        title: 'Tournament Sugar Lab',
        image: '/public/images/5.png',
    },
    {
        year: 2022,
        title: 'Sistem Kampus',
        image: '/public/images/6.png',
    },
    ];

    return (
        <section>
            <div className="hidden md:flex md:-ml-85">
                <h2 className="absolute -mt-8 text-[150px] font-bold text-gray-800 tracking-wider leading-none opacity-3 dark:opacity-20 pointer-events-none">
                    FEATURED
                </h2>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-3xl font-bold">Featured Project</h3>
                <p className="text-gray-400 mt-2 mb-10">More of my design 👇</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-3xl shadow-xl hover:scale-105 hover:bg-black/10 dark:hover:bg-white/5 transition-all duration-300 backdrop-blur-[100hv]"
                        >
                        <div className="relative">
                            <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between items-center mt-6 md:mt-0 mb-4">
                            <h3 className="text-lg text-black dark:text-white font-semibold">{project.title}</h3>
                            <span className="text-sm text-slate-600 bg-slate-300 rounded-md px-2 py-1">{project.year}</span>
                        </div>
                    </div>
                    
                ))}
            </div>
        </section>
    )
}

export default Project