'use client';
import "@/i18n"
import { ReactNode } from 'react';

export default function I18nextProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
