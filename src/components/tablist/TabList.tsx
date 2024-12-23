'use client';

import Tabdesc from "./Tabdesc";


const features = [
    { title: 'Natural Language', description: 'Type dates and set due dates into tasks' },
    { title: 'Nested Tasks', description: 'Infinite level of subtasks' },
    { title: 'Tasks from Integrations', description: 'Slack messages, Linear tickets, & Github issues together' },
  ];

export const TabList = () => {
    return(
        <section className="max-w-[1250px] flex justify-between  mx-auto">
            <ul>
                {features.map((feature , index) => (

                ))}
            </ul>
            <div>
                <div>
                    <video 
                        className="w-full h-60 pointer-events-none" 
                        controls 
                        autoPlay 
                        loop 
                        muted
                        >
                        <source src="/assets/video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video 
                        className="w-full h-60 pointer-events-none" 
                        controls 
                        autoPlay 
                        loop 
                        muted
                        >
                        <source src="/assets/video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video 
                        className="w-full h-60 pointer-events-none" 
                        controls 
                        autoPlay 
                        loop 
                        muted
                        >
                        <source src="/assets/video3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

    )
}