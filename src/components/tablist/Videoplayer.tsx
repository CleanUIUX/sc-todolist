import exp from "constants";

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer : React.FC<VideoPlayerProps> = ({src}) => (
    <div>
        <video
        className="w-full h-60 pointer-events-none"
        controls
        autoPlay
        loop
        muted
        >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    </div>
);

export default VideoPlayer;