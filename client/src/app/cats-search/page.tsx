'use client'
import { Suspense } from 'react';
import CatsSearchSuspensed from './CatsSearchSuspensed';

export default function CatsSearch() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CatsSearchSuspensed />
      </Suspense>
    </>
  )
}