import React from 'react';

const Card = () => {
    return (
        <section className="relative">
            <div className="max-w-[490px] mx-auto rounded-3xl shadow-2xl h-[450px] md:h-[700px] relative">
                {/* Bubble kiri */}
                <div className="bubble -left-7 md:left-[-150px] z-10 top-50 md:top-80 block bg-purple-500">
                    UI/UX Designer
                </div>
                
                <div className="bubble left-75 md:left-[580px] z-10 top-15 md:top-30 block bg-teal-500">
                    Gamer
                </div>


                <div className="bubble -right-6 md:right-[-150px] z-1 bottom-20 md:bottom-30 block bg-pink-500">
                    Web Developer
                </div>

                <img 
                    src="/images/profile.png"
                    alt="Profile"
                    className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-300" 
                />
            </div>
        </section>
    );
};

export default Card;
