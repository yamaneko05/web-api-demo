"use client";

import { useEffect, useRef } from "react";
import { button } from "../_variants/button";

export function MediaCaptureAndStreamAPI() {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const photo = useRef<HTMLImageElement>(null);

  const width = 640;
  let height = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    const context = canvas.current!.getContext("2d")!;
    context.drawImage(video.current!, 0, 0);

    const data = canvas.current!.toDataURL("image/png");
    photo.current!.setAttribute("src", data);

    event.preventDefault();
  };

  const handleCanPlay = () => {
    console.log("can play");
    height = video.current!.videoHeight / (video.current!.videoWidth / width);

    video.current!.setAttribute("width", width.toString());
    video.current!.setAttribute("height", height.toString());
    canvas.current!.setAttribute("width", width.toString());
    canvas.current!.setAttribute("height", height.toString());
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.current!.srcObject = stream;
        video.current!.play();
      })
      .catch(() => false);
  }, []);

  return (
    <>
      <p className="mb-2">camera: </p>
      <video ref={video} onCanPlay={handleCanPlay} className="mb-2">
        Video stream not available.
      </video>
      <button onClick={handleClick} className={button()}>
        Take photo
      </button>
      <canvas ref={canvas} hidden></canvas>
      <p className="mb-2">result: </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={photo} alt="The screen capture will appear in this box." />
    </>
  );
}
