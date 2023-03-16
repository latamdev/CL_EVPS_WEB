interface TooltipProps {
  message: string;
  children: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  message,
  children,
  className,
}) => {
  return (
    <div className={className ? className : "group relative flex"}>
      {children}
      <span className="absolute -top-10 left-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};
