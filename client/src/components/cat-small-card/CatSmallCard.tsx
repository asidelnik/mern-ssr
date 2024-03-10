import Image from 'next/image'
import { CatType } from "@/types/CatType";
import c from './CatSmallCard.module.scss';
import { baseUrl, serverPaths } from '@/constants/api';
import { useState } from 'react';
import { UpdatedLikeCount } from '@/types/UpdatedLikeCount';

export default function CatSmallCard({ _id, name, likeCount, breed, image }: CatType) {
  const [isLikedClicked, setIsLikedClicked] = useState<boolean>(false);
  const [updatedLikeCount, setUpdatedLikeCount] = useState<number>(likeCount);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLike = async () => {
    setIsLoading(true);
    setIsLikedClicked(true);
    try {
      const path = `${baseUrl}${serverPaths.likeCat}/${_id}`;
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
      <div className={c.smallCardContainer}>
        <Image src={image} alt={name} width={300} height={300} />
        <h2>{name}</h2>
        <p>Breed: {breed}</p>
        <p>Likes: {updatedLikeCount}</p>
        <button onClick={handleLike} disabled={isLikedClicked} className={c.likeButton}>Like</button>
      </div>
    </>
  )
}