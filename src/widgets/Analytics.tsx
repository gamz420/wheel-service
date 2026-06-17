'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

function YandexMetrika() {
  const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isReady, setIsReady] = useState(false);
  const previousUrlRef = useRef<string>();

  const query = searchParams.toString();

  useEffect(() => {
    if (!counterId || !isReady || typeof window.ym !== 'function') return;

    const currentUrl = `${window.location.origin}${pathname}${query ? `?${query}` : ''}`;

    window.ym(counterId, 'hit', currentUrl, {
      title: document.title,
      referer: previousUrlRef.current ?? document.referrer,
    });

    previousUrlRef.current = currentUrl;
  }, [counterId, isReady, pathname, query]);

  if (!counterId) return null;

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        onReady={() => setIsReady(true)}
      >
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j=0;j<document.scripts.length;j++) {
              if (document.scripts[j].src===r) return;
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,
            a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${counterId}','ym');

          ym(${counterId}, 'init', {
            defer: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });
        `}
      </Script>

      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <YandexMetrika />
    </Suspense>
  );
}
