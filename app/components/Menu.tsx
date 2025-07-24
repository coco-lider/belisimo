'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const sections = [
    { id: 'kombo', label: 'Kombo' },
    { id: 'pitsa', label: 'Pitsa' },
    { id: 'gazaklar', label: 'Gazaklar' },
    { id: 'ichimliklar', label: 'Ichimliklar' },
];

const tabs = ['Yetkazib berish', 'Olib ketish'];


export default function Menu() {
    const [activeTab, setActiveTab] = useState('');
    const [activeTabs, setActiveTabs] = useState(0);
    console.log(activeTabs);
    

    const router = useRouter();
    const goToCart = () => {
        router.push('/cart');
    }

    const goToDetails = () => {
        router.push('/details');
    }



    useEffect(() => {
        const header = document.querySelector('header');

        const handleScroll = () => {
            if (!header) return;
            const headerRect = header.getBoundingClientRect();
            if (headerRect.top >= 0) {
                setActiveTab('');
                return;
            }
            let found = false;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom > 100) {
                        setActiveTab(section.id);
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                const lastSection = sections[sections.length - 1];
                const lastEl = document.getElementById(lastSection.id);
                if (lastEl) {
                    const rect = lastEl.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        setActiveTab(lastSection.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className="min-h-screen font-sans">
            <header className="bg-white shadow-md mx-auto container px-15 py-3 top-10 mt-5 z-50 flex items-center justify-between">
                <div className="relative flex p-1 bg-gray-100 rounded-[80px]">
                    {tabs.map((tab: string, index: number) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTabs(index)}
                            className={`w-[230px] h-10 text-sm font-bold text-gray-600 z-10 relative transition-opacity duration-200
            ${activeTabs === index ? 'opacity-100 ' : 'opacity-60'}
            flex items-center justify-center`}
                        >
                            {tab}
                        </button>
                    ))}

                    <div
                        className="absolute top-[4px] w-[230px] h-10 bg-white rounded-[80px] shadow-md transition-all duration-200 ease-out z-0"
                        style={{
                            left: `${4 + 230 * activeTabs}px`
                        }}
                    />
                </div>

                <div className="bg-yellow-100 w-[50%] text-yellow-600 font-semibold px-3 py-1 rounded-md border border-yellow-300">
                    {activeTabs === 0 ? 'Yetkazib berish' : 'Olib ketish'}
                </div>

            </header>
            <div className={`bg-white sticky top-1 z-40 shadow container mx-auto ${activeTab ? 'px-16' : 'px-12'}`}>
                <div className="flex py-3 gap-3 overflow-x-auto whitespace-nowrap relative">
                    <div
                        className={`transition-all duration-500 ease-in-out
            ${activeTab ? 'w-[40px] h-[40px]' : 'w-[0px] h-[0px]'}
        `}
                    >
                        <img
                            src="https://bellissimo.uz/_next/image?url=%2Fimages%2Ficon.png&w=1920&q=75"
                            alt="logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`
                px-4 py-2 rounded-full text-sm transition
                ${activeTab === id
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-red-100'
                                }
            `}
                        >
                            {label}
                        </button>
                    ))}
                    <div onClick={goToCart} className="text-white absolute right-2 bg-red-500 px-3 py-1 rounded-full">Savatcha | 1</div>
                </div>

            </div>
            <div className="space-y-16 container mx-auto px-16">
                {sections.map(({ id, label }) => (
                    <div key={id} id={id} className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">{label}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div onClick={goToDetails} key={i} className="bg-white p-4 rounded-lg shadow">
                                    <div className="h-32 bg-gray-200 mb-2 rounded" />
                                    <div className="font-semibold text-lg">{label} mahsuloti #{i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
