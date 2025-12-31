import React from 'react'
import { getMetaTitle } from '@/lib/helpers';
import Goal from './_component/Goal';

export const metadata = getMetaTitle('Goal');
export const dynamic = 'force-dynamic';

export default function page() {
    return (
     <Goal/>
    );
}