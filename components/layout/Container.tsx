import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}