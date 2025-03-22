"use client";

import React from "react";
import { Button } from "./ui/button";

interface CanvasHeaderProps {
  onMinimize: () => void;
  onClose: () => void;
  onNew: () => void;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onMouseMove: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
}

export function CanvasHeader({
  onMinimize,
  onClose,
  onNew,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
}: CanvasHeaderProps) {
  return (
    <>
      <div
        className="bg-blue-900 rounded-t text-white px-2 py-1 flex justify-between items-center cursor-move"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <p className="text-white">Mississippi Paint</p>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            className="size-5 p-0 cursor-pointer min-w-0 text-white hover:bg-blue-600"
            onClick={onMinimize}
          >
            -
          </Button>
          <Button
            variant="ghost"
            className="size-5 p-0 cursor-pointer min-w-0 text-white hover:bg-blue-600"
            onClick={onClose}
          >
            ×
          </Button>
        </div>
      </div>
      <div className="bg-gray-300 p-1 text-sm">
        <span
          className="mr-1 cursor-pointer text-slate-800 hover:text-black hover:bg-gray-400/20 rounded px-1.5 py-0.5"
          onClick={onNew}
        >
          New
        </span>
        <a
          href="https://github.com/egarrisxn/mississippi-paint"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-slate-800 hover:text-black hover:bg-gray-400/20 rounded px-1.5 py-0.5"
        >
          Help
        </a>
      </div>
    </>
  );
}
