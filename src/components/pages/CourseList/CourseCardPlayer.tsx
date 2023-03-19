import { forwardRef, useState } from 'react';
import { useVideoPlayer } from '../../../hooks/useVideoPlayer';

interface CourseCardImageProps {
    previewImageSrc: string;
    videoSrc: string | undefined;
}

export const CourseCardPlayer = forwardRef<HTMLVideoElement, CourseCardImageProps>(
    function CourseCardImage({ previewImageSrc, videoSrc }, ref) {
        const { playVid, pauseVid } = useVideoPlayer({ videoElementRef: ref, videoSrc });

        return (
            <video
                ref={ref}
                muted={true}
                poster={`${previewImageSrc}/cover.webp`}
                onMouseOver={playVid}
                onMouseOut={pauseVid}
            ></video>
        );
    }
);
