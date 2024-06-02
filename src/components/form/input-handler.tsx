'use client';

import React, { forwardRef } from 'react';

import { cn } from '../../lib/utils';

import clsx from 'clsx';
import { useField } from 'formik';
import { Input, Label } from '../ui';

export interface InputHandlerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputHandler = forwardRef<HTMLInputElement, InputHandlerProps>(
  ({ id, name, label, type = 'text', ...props }, ref) => {
    const [field, meta] = useField(name as string);

    const isError = meta.error && meta.touched;

    return (
      <div className={clsx('w-full', { 'grid items-center gap-1.5': label })}>
        {label && (
          <Label className={cn(isError ? 'text-red-500' : '')} htmlFor={id}>
            {label}
          </Label>
        )}
        <Input
          type={type}
          ref={ref}
          className={cn(
            'flex h-9 w-full rounded-md border border-input text-sm bg-transparent px-3 py-1 shadow-sm transition-colors file:text-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            isError ? 'border-red-500' : ''
          )}
          {...field}
          {...props}
        />
      </div>
    );
  }
);

InputHandler.displayName = 'Input';
