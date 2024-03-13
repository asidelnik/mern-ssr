'use client'
import c from './CatSmallCard.module.scss';
import Image from 'next/image'
import { CatType } from "@/types/CatType";
import { baseUrl, serverPaths } from '@/constants/api';
import { useState } from 'react';
import { UpdatedLikeCount } from '@/types/UpdatedLikeCount';
import { useRouter } from "next/navigation";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbWeight } from "react-icons/tb";
import { revalidateTag } from 'next/cache';
import { likeCat } from '@/data-fetching/functions';
// import { PiCat } from "react-icons/pi";
// import { CiLocationOn } from "react-icons/ci";

export default function CatSmallCard(props: CatType) {
  const { _id, name, likeCount, breed, image, age, weightG } = props;
  const [isLikedClicked, setIsLikedClicked] = useState<boolean>(false);
  const [updatedLikeCount2, setUpdatedLikeCount] = useState<number>(likeCount);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();
  const weightKg = (weightG / 1000).toFixed(1);

  const handleLike = async () => {
    setIsLoading(true);
    setIsLikedClicked(true);
    try {
      const { updatedLikeCount }: UpdatedLikeCount = await likeCat(_id)
      setUpdatedLikeCount(updatedLikeCount);
      setIsError(false);
    } catch (err: unknown) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  function navigateToFullCard() {
    router.push(`/cats/${_id}`);
  }

  return (
    <>
      <div className={c.smallCardContainer}>
        <Image src={image} alt={name} width={300} height={300} onClick={navigateToFullCard} />
        <div className={c.cardInfoContainer}>
          <div className={c.cardInfo}>

            <h3 onClick={navigateToFullCard}>{name}</h3>
            <p className={c.breed}>{breed}</p>

            <div className={c.likeAgeWeight}>
              <div className={c.likes}>
                <button onClick={handleLike} disabled={isLikedClicked} className={c.likeButton}>
                  {isLikedClicked ?
                    isError ? <IoMdHeart className={c.gray} /> : <IoMdHeart className={c.red} /> :
                    <IoMdHeartEmpty className={c.icon + ' ' + c.iconHover} />}
                </button>
                <p>{updatedLikeCount2}</p>
              </div>

              <div className={c.age}>
                <LiaBirthdayCakeSolid className={c.icon} />
                <p>{age}</p>
              </div>
              <div className={c.weight}>
                <TbWeight className={c.icon} style={{ 'fontSize': '1rem' }} />
                <p>{weightKg}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}