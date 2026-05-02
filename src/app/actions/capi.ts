'use server';

import { PIXEL_ID } from '@/components/MetaPixel';
import { headers } from 'next/headers';
import crypto from 'crypto';

function hash(value: string | undefined) {
    if (!value || value.trim() === '') return undefined;
    return crypto
        .createHash('sha256')
        .update(value.trim().toLowerCase())
        .digest('hex');
}

export async function trackCapiLead(userData: {
    nome: string;
    telefone: string;
    eventId: string;
    value?: number;
}) {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
        console.error('Meta CAPI: Missing credentials');
        return;
    }

    const hHeaders = await headers();
    const clientIp = (hHeaders.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
    const userAgent = hHeaders.get('user-agent') ?? '';
    const cookieHeader = hHeaders.get('cookie') ?? '';

    // Extract fbp and fbc cookies
    const fbp = cookieHeader.split(';').find(c => c.trim().startsWith('_fbp='))?.split('=')[1];
    const fbc = cookieHeader.split(';').find(c => c.trim().startsWith('_fbc='))?.split('=')[1];

    // Extract name parts
    const nameParts = userData.nome.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

    const eventData = {
        data: [
            {
                event_name: 'Lead',
                event_time: Math.floor(Date.now() / 1000),
                event_id: userData.eventId,
                action_source: 'website',
                event_source_url: hHeaders.get('referer') ?? '',
                user_data: {
                    fn: hash(firstName),
                    ln: hash(lastName),
                    ph: hash(
                        userData.telefone.replace(/\D/g, '').length === 9 
                        ? '351' + userData.telefone.replace(/\D/g, '') 
                        : userData.telefone.replace(/\D/g, '')
                    ),
                    client_ip_address: clientIp,
                    client_user_agent: userAgent,
                    fbp: fbp,
                    fbc: fbc,
                },
                custom_data: {
                    value: userData.value ?? 390000,
                    currency: 'EUR',
                },
            },
        ],
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventData),
            }
        );

        const result = await response.json();
        console.log('Meta CAPI Lead result:', result);
        return result;
    } catch (error) {
        console.error('Meta CAPI error:', error);
    }
}
