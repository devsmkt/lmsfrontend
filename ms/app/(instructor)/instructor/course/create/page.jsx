
import React from 'react'
import CreateForm from '../_components/CreateForm';
import { getMetaTitle } from '@/lib/helpers';

export const dynamic = 'force-dynamic';
export const metadata = getMetaTitle('Course Create');
export default async function Create() {
    return (
        <>
        <CreateForm />
        </>
    );
}
