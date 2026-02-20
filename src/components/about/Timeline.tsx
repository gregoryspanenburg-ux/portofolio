import {Briefcase, Calendar, School} from "lucide-react";

const timelineEvents = [
    {
        year: '2017 - 2023',
        title: 'Accountancy Informatics',
        organization: 'Klein Seminarie Hoogstraten',
        description: 'During my high school years, I studied Accountancy Informatics at "Klein Seminarie Hoogstraten". I initially joined this course because I wanted to become an accountant, haha. But shortly after, I became obsessed with programming, which quickly became my new passion.',
        icon: School,
        color: 'from-emerald-500 to-teal-500'
    },
    {
        year: '2023 - 2026',
        title: 'Receptionist',
        organization: 'Sportoase Stede Akkers',
        description: 'Right after graduating from high school, I got my first student job as a receptionist at Sportoase Stede Akkers. I\'m very grateful for the opportunity to work here. Such a great team taught me how to work together effectively. I also learned how to deal with customers and communicate professionally.',
        icon: Briefcase,
        color: 'from-yellow-500 to-orange-500'
    },
    {
        year: '2023 - Present',
        title: 'Bachelor Applied Computer Science',
        organization: 'KdG Antwerp',
        description: 'At the moment, I\'m still studying for my Bachelor in Applied Computer Science (Application Development) at KdG in Antwerp. Here, I\'ve been able to further my curiosity for IT by experimenting and working with a wide range of technologies – from building applications with React, setting up small networks with CISCO, to creating our own AI models using Python.',
        icon: Briefcase,
        color: 'from-red-500 to-orange-500'
    },
];

export function Timeline(){
    return (
        <div className="mt-12 w-[80%] mx-auto">
            <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 hidden md:block"></div>
                <div className="space-y-12">
                    {timelineEvents.map((event, index) => {
                        const Icon = event.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex items-center ${
                                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col md:gap-8`}
                            >
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                                    <div className={`relative p-3 rounded-xl bg-gradient-to-r ${event.color} shadow-lg`}>
                                        <div className={`absolute inset-0 bg-gradient-to-r ${event.color} rounded-xl blur-xl opacity-50`}></div>
                                        <Icon className="size-6 text-white relative z-10" />
                                    </div>
                                </div>
                                <div className={`w-full md:w-[calc(50%-4rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="group relative">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                                        <div className="relative bg-gradient-to-br from-[#121218] to-[#1a1a24] rounded-2xl p-6 border border-[#1e1e28] hover:border-orange-500/30 transition-all duration-300">
                                            <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                                                <div className="md:hidden p-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
                                                    <Icon className="size-5 text-orange-400" />
                                                </div>
                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-full">
                                                    <Calendar className="size-3 text-orange-400" />
                                                    <span className="text-xs text-orange-300 font-semibold">{event.year}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-white mb-2">{event.title}</h3>
                                            <p className="text-orange-400 text-sm font-semibold mb-3">{event.organization}</p>
                                            <p className="text-gray-300 leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}