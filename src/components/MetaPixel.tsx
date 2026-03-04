'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function MetaPixel() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!PIXEL_ID) {
            console.warn('[Meta Pixel] PIXEL_ID is missing. Check your environment variables.');
            return;
        }

        if (typeof window !== 'undefined' && (window as any).fbq) {
            if (process.env.NODE_ENV === 'development') {
                console.log(`[Meta Pixel] Tracking PageView: ${pathname}`);
            }
            (window as any).fbq('track', 'PageView');
        }
    }, [pathname, searchParams, PIXEL_ID]);

    if (!PIXEL_ID) return null;

    return (
        <>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                onLoad={() => {
                    if (process.env.NODE_ENV === 'development') {
                        console.log('[Meta Pixel] Script loaded successfully');
                    }
                }}
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    );
}

export const pageview = () => {
    const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    if (typeof window !== 'undefined' && (window as any).fbq && PIXEL_ID) {
        (window as any).fbq('track', 'PageView');
    }
};
