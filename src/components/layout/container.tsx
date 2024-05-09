import { clsx } from 'clsx';
import { HTMLProps, PropsWithChildren } from 'react';

export function Container({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
  return (
    <div
      className={clsx(
        'container mx-auto max-w-[1280px] px-6',
        'md:px-8',
        'xl:px-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
