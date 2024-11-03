import { useEffect, useRef } from 'react';

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
      style={{ filter: 'brightness(0.6)' }}
    >
      <source
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        type="video/mp4"
      />
    </video>
  );
}