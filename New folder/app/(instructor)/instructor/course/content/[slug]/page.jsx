
import React from 'react'

import CourseContent from '../../_components/CourseContent';
import { getMetaTitle } from '@/lib/helpers';

export const dynamic = 'force-dynamic';
export const metadata = getMetaTitle('Course Content');
export default async function page(props) {
    const params = await props.params;
    const { slug } = params;

    return (
        <CourseContent slug={slug} />
    );
}
