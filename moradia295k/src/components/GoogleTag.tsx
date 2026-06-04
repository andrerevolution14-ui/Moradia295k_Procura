'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export const GA_TRACKING_ID = 'AW-17936797026';

export default function GoogleTag() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('config', GA_TRACKING_ID, {
                page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
            });
        }
    }, [pathname, searchParams]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="google-tag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}');

                        window.gtag_report_conversion = function(url) {
                            var callback = function () {
                                if (typeof(url) != 'undefined') {
                                    window.location = url;
                                }
                            };
                            gtag('event', 'conversion', {
                                'send_to': '${GA_TRACKING_ID}/T7aMCMK23LUcEOKa9-hC',
                                'event_callback': callback
                            });
                            return false;
                        };
                    `,
                }}
            />
        </>
    );
}
