import { ReactNode } from "react";

interface TooltipVideosProps {
  tooltipContent: ReactNode;
  children: React.ReactNode;
}

export const TooltipVideos: React.FC<TooltipVideosProps> = ({
  tooltipContent,
  children,
}) => {
  return (
    <div className="group relative w-full flex gap-x-7">
      {children}
      <div className="absolute z-50 w-fit scale-0 h-fit inset-x-1/2  transition-all rounded bg-none p-2 text-xs text-black group-hover:scale-100">
        {tooltipContent}
      </div>
    </div>
  );
};
