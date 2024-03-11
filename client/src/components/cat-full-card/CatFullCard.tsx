'use client'
import c from './CatFullCard.module.scss';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { CatType } from '@/types/CatType';
import { baseUrl, serverPaths } from '@/constants/api';
import { UpdatedLikeCount } from '@/types/UpdatedLikeCount';

export default function CatFullCard() {
  const [catData, setCatData] = useState<CatType | null>(null);

  const [isLikedClicked, setIsLikedClicked] = useState<boolean>(false);
  const [updatedLikeCount, setUpdatedLikeCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const catCardData = sessionStorage.getItem('cat-card-data');
    const data: CatType | null = catCardData ? JSON.parse(catCardData) : null;
    setCatData(data);
    setUpdatedLikeCount(data?.likeCount || 0);

    return () => {
      console.log('CatFullCard unmounted');
    }
  }, []);

  const handleLike = async () => {
    setIsLoading(true);
    setIsLikedClicked(true);
    try {
      const path = `${baseUrl}${serverPaths.likeCat}/${catData?._id}`;
      const response = await fetch(path, { method: 'PUT' });
      const { updatedLikeCount }: UpdatedLikeCount = await response.json();
      setUpdatedLikeCount(updatedLikeCount);
    } catch (err: unknown) {
      if (err instanceof TypeError) {
        // Handle fetch TypeError
        setError((err as TypeError).message);
      } else {
        // Handle generic errors
        setError((err as Error).message);
      }
      setIsLikedClicked(false);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <>
      {catData && (
        <div className={c.fullCardContainer}>
          <Image src={catData?.image} alt={catData?.name} width={300} height={300} />
          <div className={c.cardInfo}>
            <h3>{catData.name}</h3>
            <p>{catData.breed}</p>
            <p>Likes: {updatedLikeCount}</p>
            <button onClick={handleLike} disabled={isLikedClicked} className={c.likeButton}>Like</button>
          </div>
        </div>
      )}
    </>
  )
}