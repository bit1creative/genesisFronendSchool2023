import { useCallback, useEffect, useState } from 'react';
import Hls from 'hls.js';

interface UseVideoPlayerProps {
    videoElementRef: React.ForwardedRef<HTMLVideoElement>;
    videoSrc: string | undefined;
}

export function useVideoPlayer({ videoElementRef, videoSrc }: UseVideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const isVideoElementValid = videoElementRef && typeof videoElementRef === 'object' && videoSrc;

    const playVid = useCallback(() => {
        if (
            isVideoElementValid &&
            videoElementRef.current &&
            videoElementRef.current.paused &&
            !isPlaying
        ) {
            videoElementRef.current.play();
        }
    }, [isPlaying, isVideoElementValid, videoElementRef]);

    const pauseVid = useCallback(() => {
        if (
            isVideoElementValid &&
            videoElementRef.current &&
            !videoElementRef.current.paused &&
            isPlaying
        ) {
            videoElementRef.current.pause();
        }
    }, [isPlaying, isVideoElementValid, videoElementRef]);

    const videoLoad = useCallback((videoElement: HTMLVideoElement, vidSrc: string) => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(vidSrc);
            hls.attachMedia(videoElement);
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            videoElement.src = vidSrc;
        }
    }, []);

    useEffect(() => {
        if (isVideoElementValid && videoElementRef.current && videoSrc) {
            const videoElement = videoElementRef.current;
            videoElement.onplaying = () => {
                setIsPlaying(true);
            };

            videoElement.onpause = () => {
                setIsPlaying(false);
                // resetting the video to the beginning and show the poster
                videoLoad(videoElement, videoSrc);
            };

            videoElement.onended = () => {
                videoElement.load();
            };

            videoLoad(videoElement, videoSrc);
        }
    }, [isVideoElementValid, videoElementRef, videoSrc]);

    return { playVid, pauseVid };
}
