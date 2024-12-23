'use client';

import Tabdesc from "./Tabdesc";
import VideoPlayer from "./Videoplayer";

const features = [
    { title: 'Natural Language', description: 'Type dates and set due dates into tasks' },
    { title: 'Nested Tasks', description: 'Infinite level of subtasks' },
    { title: 'Tasks from Integrations', description: 'Slack messages, Linear tickets, & Github issues together' },
  ];

const videoSources = [
'/assets/video1.mp4',
'/assets/video2.mp4',
'/assets/video3.mp4',
];

export const TabList = () => {
    return(
        <section className="max-w-[1250px] flex justify-between items-center mx-auto">
            <ul>
                {features.map((feature , index) => (
                    <Tabdesc key={index} title={feature.title} description={feature.description}></Tabdesc>
                ))}
            </ul>
            <div>
                {videoSources.map((src , index) => (
                    <VideoPlayer key={index} src={src} />
                ))}
            </div>
        </section>

    )
}