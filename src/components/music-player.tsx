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
  Ellipsis,
  Heart,
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
  handleShow: () => void;
}

export function MusicPlayer({
  //title,
  artist,
  plays,
  coverUrl,
  audioUrl,
  className,
  handleShow,
}: MusicPlayerProps) {
  const duration = 400;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [shouldOpenThumbTooltip, setShouldOpenThumbTooltip] = useState<
    undefined | boolean
  >(undefined);
  const [clientX, setClientX] = useState(0);
  const [trackHoverPercentage, setTrackHoverPercentage] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // const formatTime = (time: number) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  //   return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  // };

  const handlePlayPause = () => {
    if (audioRef.current) {
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
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    // TODO
    // if (audioRef.current) {
    //   setDuration(audioRef.current.duration);
    // }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const getThumbnailTooltipPoisition = () => {
    if (audioRef.current) {
      return `${convertSecondsToTime(
        audioRef.current.currentTime
      )} / ${convertSecondsToTime(audioRef.current.duration)}`;
    }
  };

  const getTrackTooltipPoisition = () => {
    if (audioRef.current) {
      return `${convertSecondsToTime(
        (trackHoverPercentage * audioRef.current.duration) / 100
      )} / ${convertSecondsToTime(audioRef.current.duration)}`;
    }
  };

  const convertSecondsToTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={cn(
        className,
        "bg-black/90 rounded-[20px] text-white shadow-[0px_0px_0.25em_rgba(250,250,250,1),0px_0.25em_1em_rgba(225,225,225,0.15)] transition-all duration-300 ease-bounce",
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
      <div className="relative h-full">
        <div className="flex h-full">
          <div className="flex flex-1 h-[87px] overflow-hidden">
            <div className="w-20 aspect-square">
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

            <div className="flex-1 flex items-center pl-3 py-3 overflow-x-hidden">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 sm:block">
                  <h3 className="font-medium truncate text-sm font-medium sm:text-base">
                    Balenciaga
                  </h3>
                  <span className="text-xs text-gray-400 sm:hidden">·</span>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    <span className="sm:hidden truncate">{artist}</span>
                    <span className="hidden sm:inline">
                      {artist} · {plays} Plays
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[132px] gap-1 sm:gap-2 pl-2">
                <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full">
                  <SkipBack className="w-4 h-4 fill-current sm:w-5 sm:h-5" />
                </button>
                <button
                  className="p-1.5 sm:p-2 bg-slate-700/50 hover:bg-white/10 rounded-full"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current sm:w-5 sm:h-5" />
                  ) : (
                    <Play className="w-4 h-4 fill-current sm:w-5 sm:h-5" />
                  )}
                </button>
                <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full">
                  <SkipForward className="w-4 fill-current h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex px-3 py-2">
            <div className="flex-1 flex flex-col h-full pr-2 relative">
              <h3 className="font-medium truncate text-sm sm:text-base">
                R&B with uplifiting vibes about neon streets
              </h3>
              <div
                className={cn("text-sm flex-1 overflow-hidden ", {
                  "overflow-y-auto": isExpanded,
                })}
              >
                (Verse 1)
                <p className="mb-4 leading-normal">
                  Running down neon streets Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Ullam deserunt soluta quos
                  voluptate, cumque nobis nemo hic quis repellat animi
                  recusandae, voluptatum consectetur tenetur. Perferendis nam,
                  nesciunt omnis illum fugit reprehenderit natus, placeat vero
                  sit accusamus corrupti nulla earum excepturi, similique
                  explicabo modi fuga! Ipsum accusamus provident deleniti magni
                  quis, dolores quam est error quisquam nesciunt consequatur
                  natus ea ut non vitae, molestiae illum? Aut optio in sapiente
                  repellendus deleniti corrupti harum culpa cupiditate nemo
                  repudiandae? Sit necessitatibus totam, laboriosam sapiente
                  nemo provident magni mollitia? Inventore provident animi
                  facilis facere eos, non dignissimos, veritatis eaque quis modi
                  saepe hic soluta.
                </p>
              </div>
              <div className="w-full absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
            </div>
            <div className="flex flex-col items-end justify-between text-zinc-400">
              <button>
                <Ellipsis className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-1">
                <p>854K</p>
                <button>
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
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
            onClick={() => {
              handleShow();
              handlePlayPause();
              setIsExpanded(false);
            }}
          >
            <X className="w-3 h-3" />
          </button>
        </div>
        <div className="absolute -top-0.5 left-[80px] right-[44px] h-0.5">
          <div className="relative w-full h-full">
            <Slider.Root
              className="relative flex items-center w-full h-full"
              defaultValue={[0]}
              max={duration}
              onValueChange={handleSeek}
              value={[currentTime]}
            >
              <Tooltip
                contentComponent={getTrackTooltipPoisition()}
                style={{
                  // transform: `translate(575px, -0px)`,

                  position: "relative",
                  left: clientX, //clientX,
                  top: 0,
                  //transform: "translateX(-50%)",
                }}
                triggerComponent={
                  <Slider.Track
                    className="relative cursor-pointer h-full w-full"
                    onMouseOver={(e) => {
                      const sliderRect =
                        e.currentTarget.getBoundingClientRect();
                      const newValue = e.clientX - sliderRect.left;
                      const percentage = Math.round(
                        Math.max(0, Math.min(1, newValue / sliderRect.width)) *
                          100
                      );
                      setTrackHoverPercentage(percentage);
                      setClientX(newValue - 350);
                    }}
                  >
                    <Slider.Range className="absolute h-full bg-gradient-to-r from-violet-500 to-violet-700" />
                  </Slider.Track>
                }
              />
              <Tooltip
                shouldOpen={shouldOpenThumbTooltip}
                contentComponent={getThumbnailTooltipPoisition()}
                triggerComponent={
                  <Slider.Thumb
                    className="hidden group-hover:block focus:block  cursor-pointer w-3 h-3 bg-white rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-violet-500"
                    onMouseMove={() => {
                      setShouldOpenThumbTooltip(true);
                    }}
                    onMouseLeave={() => setShouldOpenThumbTooltip(undefined)}
                  />
                }
              />
            </Slider.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
