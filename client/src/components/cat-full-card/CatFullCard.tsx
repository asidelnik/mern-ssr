'use client'
import c from './CatFullCard.module.scss';
import { useEffect, useState } from 'react';
import { CatType } from '@/types/CatType';

export default function CatFullCard() {
  const [catData, setCatData] = useState<CatType | null>(null);

  useEffect(() => {
    const catCardData = sessionStorage.getItem('cat-card-data');
    const data = catCardData ? JSON.parse(catCardData) : null;
    setCatData(data);

    return () => {
      console.log('CatFullCard unmounted');
    }
  }, []);

  return (
    <>
      <div className={c.fullCardContainer}>
        <div>{catData?.name}</div>
        <div>{catData?.age}</div>
      </div>
    </>
  )
}