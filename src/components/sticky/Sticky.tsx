'use client';

export const Sticky = () => {
  return(
  <section className="max-w-[1250px] mx-auto">
    <div className="h-60 bg-slate-300 sticky top-0 z-10">
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
    <div className="h-60 bg-slate-400 sticky top-0 z-10">
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
    <div className="h-60 bg-slate-500 sticky top-0 z-10">
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
  </section>
  )
}
