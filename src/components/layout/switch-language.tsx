import { useLocale } from 'next-intl';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '..';
import { locales, usePathname, useRouter } from '@/navigation';

interface SwitchLanguageProps {}

export function SwitchLanguage({}: SwitchLanguageProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="lang" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
