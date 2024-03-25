import { clsx } from 'clsx';
// import SpinnerWhite from '@/assets/svg/white-spinner.svg';
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button';
import { forwardRef, HTMLProps } from 'react';
import { useTranslations } from 'next-intl';

export interface SubmitButtonProps extends ButtonProps {
  loading?: boolean;
  containerClassName?: HTMLProps<HTMLDivElement>['className'];
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(function SubmitButton(
  { loading, variant, className, title, size, containerClassName, ...props },
  ref
) {
  const t = useTranslations();

  return (
    <div className={clsx('flex justify-center', containerClassName)}>
      <Button
        className={clsx(
          buttonVariants({ variant, size }),
          'gap-x-2 items-center',
          'duration-200 transition-[flex-grow]',
          { 'flex-grow': !loading },
          className
        )}
        {...props}
        type="submit"
        ref={ref}
      >
        {/* <SpinnerWhite
          className={clsx({
            block: loading,
            hidden: !loading,
            'fill-primary': variant === 'link',
            'w-6 h-6': !size || size === 'default',
            'w-5 h-5': size === 'sm'
          })}
        /> */}
        <span
          className={clsx({
            'font-medium text-lg': !size || size === 'default',
            'font-medium text-sm': size === 'sm',
            hidden: loading,
            inline: !loading
          })}
        >
          {title || t('label.submit')}
        </span>
      </Button>
    </div>
  );
});
