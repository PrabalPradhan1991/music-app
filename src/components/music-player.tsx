"use client";
import { useState, useRef } from "react";
import * as Slider from "@radix-ui/react-slider";
import {
  ChevronUp,
  ChevronDown,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Tooltip from "./tooltip";

interface MusicPlayerProps {
  title: string;
  artist: string;
  plays: number;
  coverUrl: string;
  audioUrl: string;
  className?: string;
  handleShow?: () => void;
}

export function MusicPlayer({
  title,
  artist,
  plays,
  coverUrl,
  audioUrl,
  className,
  handleShow,
}: MusicPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      console.log({ duration: audioRef.current.duration });
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      console.log({ currenttime: audioRef.current.currentTime });
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    console.log("i am here");
    if (audioRef.current) {
      console.log({ duration: audioRef.current?.duration });
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  return (
    <div
      className={cn(
        className,
        "bg-black/90 rounded-[20px] text-white border transition-all duration-300 ease-bounce",
        "w-11/12 max-w-[850px]",
        isExpanded ? "h-[200px]" : "h-[87px]"
      )}
    >
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="flex relative rounded-[20px]">
        <div className="absolute -top-4 left-0 right-4 w-full h-1">
          <Tooltip
            contentComponent={"test"}
            triggerComponent={
              <div className="relative w-full h-full">
                <Slider.Root
                  className="relative flex items-center w-full h-full"
                  defaultValue={[0]}
                  max={400}
                  onValueChange={handleSeek}
                  value={[currentTime]}
                  //onValueChange={(e) => console.log({ e })}
                >
                  <Slider.Track className="relative h-full w-full">
                    <Slider.Range className="absolute h-full bg-gradient-to-r from-violet-500 to-violet-700" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-3 h-3 bg-white rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-violet-500" />
                </Slider.Root>
              </div>
            }
          />
        </div>
        <div className="flex ">
          <div className="h-20 w-20 aspect-square ">
            <Image
              unoptimized
              width={10}
              height={10}
              src={coverUrl}
              alt="Album cover"
              className="object-cover w-full h-full rounded-l-[20px]"
              style={{ height: "5.5rem" }}
            />
          </div>

          <div className="flex-1 flex items-center px-3 hover:cursor-pointer">
            <div className="min-w-0 py-2 px-2">
              <div className="flex items-center gap-1 sm:block">
                <h3 className="font-medium truncate text-sm sm:text-base">
                  Balenciaga
                </h3>
                <span className="text-xs text-gray-400 sm:hidden">·</span>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  <span className="sm:hidden">{artist}</span>
                  <span className="hidden sm:inline">
                    {artist} · {plays} Plays
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 px-2">
              <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full">
                <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full">
                <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:block px-2">
          <h3 className="font-medium truncate text-sm sm:text-base">
            R&B with uplifiting vibes about neon streets
          </h3>
          <p>(Verse 1)</p>
          {isExpanded && (
            <div className="mt-4 text-sm">
              <p className="text-gray-400">Verse 1</p>
              <p className="mt-1">Running down neon streets</p>
            </div>
          )}
        </div>

        <button
          className="hidden group-hover:block p-1 absolute bg-black border border-border -top-2.5 right-5 rounded-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronDown className="w-3 h-3" />
          ) : (
            <ChevronUp className="w-3 h-3" />
          )}
        </button>
        <button
          className="hidden group-hover:block p-1 absolute bg-black border border-border -top-2.5 -right-2.5 rounded-full"
          onClick={handleShow}
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
