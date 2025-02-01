"use client";

import { useState, useRef, useEffect } from "react";
import {
  DndContext,
  useDraggable,
  //type DragEndEvent,
  type DragMoveEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { MusicPlayer } from "./music-player";

interface Position {
  x: number;
  y: number;
}

interface DraggablePlayerProps {
  title: string;
  artist: string;
  plays: number;
  coverUrl: string;
  audioUrl: string;
}

function DraggableHandle() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "music-player",
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    touchAction: "none",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="absolute inset-x-0 top-0 h-2 cursor-move bg-gray-700 rounded-t-lg"
      style={style}
    />
  );
}

export function DraggablePlayer(props: DraggablePlayerProps) {
  const [position, setPosition] = useState<Position>({ x: 0, y: -8 });
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (constraintsRef.current) {
        const rect = constraintsRef.current.getBoundingClientRect();
        setPosition((prev) => ({
          x: Math.min(Math.max(prev.x, -rect.width / 2), rect.width / 2),
          y: Math.min(Math.max(prev.y, -window.innerHeight + 100), -8),
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragMove = (event: DragMoveEvent) => {
    const { delta } = event;

    if (constraintsRef.current) {
      const rect = constraintsRef.current.getBoundingClientRect();

      setPosition((prev) => {
        const newX = prev.x + delta.x;
        const newY = prev.y + delta.y;

        // Constrain the player within the viewport
        const constrainedX = Math.min(
          Math.max(newX, -rect.width / 2),
          rect.width / 2
        );
        const constrainedY = Math.min(
          Math.max(newY, -window.innerHeight + 100),
          -80
        );

        return {
          x: constrainedX,
          y: constrainedY,
        };
      });
    }
  };

  const handleDragEnd = () => {
    // We don't need to update the position here anymore
    // as it's already being updated in handleDragMove
  };

  return (
    <DndContext onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 bottom-20 pointer-events-auto"
          style={{
            transform: `translate(calc(-50% + ${position.x}px), ${position.y}px)`,
            transition: "transform 0.05s ease-out",
          }}
        >
          <DraggableHandle />
          <MusicPlayer {...props} />
        </div>
      </div>
    </DndContext>
  );
}
