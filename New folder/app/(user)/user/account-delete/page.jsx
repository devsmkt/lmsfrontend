import React from 'react'

import DeleteForm from './_component/DeleteForm';
import { getMetaTitle } from '@/lib/helpers';

export const metadata = getMetaTitle('Delete Account');
export const dynamic = 'force-dynamic';

export default function page() {
  return (
    <DeleteForm/>
  )
}
