import React from 'react';

const Education = () => {
  const education = [
    {
      logo: "/images/kuliah.png",
      date: "2024 - NOW",
      title: "UNIVERSITAS PRIMAKARA",
    },
    {
      logo: "/images/smk.png",
      date: "2021 - 2024",
      title: "SMK NEGERI 1 MAS UBUD",
    },
    {
      logo: "/images/smp.png",
      date: "2018 - 2021",
      title: "SMP NEGERI 1 MENGWI",
    },
  ];

  return (
    <section className="mt-20 md:mt-30">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Title Section */}
        <h2 className="text-2xl font-semibold">
          Education
        </h2>
        {/* Content Section */}
        <div className="w-full max-w-3xl">
          {education.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl p-2 md:p-6 flex items-center gap-6 shadow-lg hover:scale-105 transition-transform duration-300 mb-3 md:mb-6"
            >
              {/* Logo Section */}
              <div className="w-12 h-12 bg-[#081014] dark:bg-white rounded-lg flex items-center justify-center">
                <img
                  src={exp.logo}
                  alt={exp.title}
                  className="w-10 h-10 object-contain transition-all duration-300"
                />
              </div>
              {/* Text Section */}
              <div className="text-left">
                <p className="text-sm">{exp.date}</p>
                <p className="text-lg font-semibold">{exp.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
