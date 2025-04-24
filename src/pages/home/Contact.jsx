import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const contacts = [
        {
          icon: <FaGithub />,
          title: "dhitxyz",
          desc: "Sometimes I practice code, just html&css.",
        },
        {
          icon: <FaInstagram />,
          title: "@kadekpanjiii_",
          desc: "Share anything about my daily life",
        },
      ];
    
    return (
        <section>
            <div className="hidden md:flex mt-30">
                <h2 className="absolute -ml-20 text-[160px] font-bold text-gray-800 tracking-wider leading-none opacity-3 dark:opacity-20 pointer-events-none">
                CONTACT
            </h2>
            </div>
            <div className="flex flex-col items-start mt-30 md:mt-0">
                <h3 className="text-3xl font-bold">Get in Touch</h3>
                <p className="text-gray-400 mt-2 text-sm">
                    Let’s be friends, hit me out on the social media
                </p>
                <p className="text-gray-400 mb-4">through the links below 👇</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contacts.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 p-2 md:p-8 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all transform duration-300"
                    >
                        <div className="text-2xl mt-3">{item.icon}</div>
                        <div className="text-left">
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Contact;
