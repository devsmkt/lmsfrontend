
import React from 'react'
import PurchaseListTable from './_component/PurchaseListTable'
import { getMetaTitle } from '@/lib/helpers';


export const metadata = getMetaTitle('Purchase History');
export const dynamic = 'force-dynamic';
export default function purchaseHistory() {

  return (
    <>
      <PurchaseListTable />
    </>
  )
}
