import clsx from 'clsx';
import { SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { InputHandler } from '@/components/form';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ className, ...props }: SearchInputProps) {
  const t = useTranslations();
  return (
    <div className={clsx('relative', className)}>
      <SearchIcon className="absolute start-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <InputHandler
        type="search"
        className="w-full rounded-lg bg-background ps-8"
        placeholder={t('placeholder.searchPropertyPlaceholder')}
        {...props}
      />
    </div>
  );
}
