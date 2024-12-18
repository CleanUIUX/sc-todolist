'use client';

export const TabList = () => {
    return(
        <section className="max-w-[1250px] mx-auto">
            <ul>
                <li>
                    <p>Natural Language</p>
                    <span>Type dates and set due dates into tasks</span>
                </li>
                <li>
                    <p>Nested Tasks</p>
                    <span>Infinite level of subtasks</span>
                </li>
                <li>
                    <p>Tasks from Integrations</p>
                    <span>Slack messages, Linear tickets, & Github issues together</span>
                </li>
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