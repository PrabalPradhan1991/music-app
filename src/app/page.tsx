"use client";
import { Button } from "@/components/ui/button";

import { MusicPlayer } from "@/components/music-player";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="text-white p-3">
      <Button
        variant="default"
        onClick={handleShow}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {show ? "Hide" : "Show"} Content
      </Button>
      <MusicPlayer
        className={`transform transition-all duration-500 ease-out
            ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 pointer-events-none"
            } fixed left-1/2 group -translate-x-1/2 bottom-[30px]`}
        title="R&B with uplifting vibes about neon streets"
        artist="@username"
        plays={13000}
        coverUrl="/cover.png"
        audioUrl="/music/music.mp3"
        handleShow={handleShow}
      />
    </div>
  );
}
