import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Preloader from '@/components/Preloader';
import "../globals.css";
import { Suspense } from 'react';
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Preloader/>}>
          {children}
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}