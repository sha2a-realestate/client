'use client';
import { Input } from '@/components/ui';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface PriceRangeProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

export function PriceRange({ minPrice, maxPrice, onPriceChange }: PriceRangeProps) {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);
  const t = useTranslations();

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setMin(value);
      onPriceChange(value, max);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setMax(value);
      onPriceChange(min, value);
    }
  };

  return (
    <div className="w-full md:w-fit flex items-center">
      <Input placeholder={t('placeholder.minPricePlaceholder')} value={min} onChange={handleMinChange} />
      <div className="text-gray-600 mx-2">-</div>
      <Input placeholder={t('placeholder.maxPricePlaceholder')} value={max} onChange={handleMaxChange} />
    </div>
  );
}
