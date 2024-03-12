'use client'
import { Suspense } from 'react';
import CatsSearchSuspensed from './CatsSearchSuspensed';
import Loading from '../loading';

export default function CatsSearch() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CatsSearchSuspensed />
      </Suspense>
    </>
  )
}