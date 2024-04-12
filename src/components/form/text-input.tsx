'use client';

import React, { forwardRef } from 'react';

import { cn } from '../../lib/utils';

import { useField } from 'formik';
import { Label } from '..';
import clsx from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, name, label, type = 'text', ...props }, ref) => {
  const [field, meta] = useField(name);

  const isError = meta.error && meta.touched;

  return (
    <div className={clsx('w-full', { 'grid items-center gap-1.5': label })}>
      {label && (
        <Label className={cn(isError ? 'text-red-500' : '')} htmlFor={id}>
          {label}
        </Label>
      )}
      <input
        type={type}
        {...field}
        {...props}
        ref={ref}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          isError ? 'border-red-500' : ''
        )}
      />
      {/* {meta.touched && meta.error && <p>{error}</p>} */}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
