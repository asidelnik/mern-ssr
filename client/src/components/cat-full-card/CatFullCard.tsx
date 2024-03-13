'use client';
import c from './CatFullCard.module.scss';
import Image from 'next/image'
import { useState } from 'react';
import { CatType } from '@/types/CatType';
import { UpdatedLikeCount } from '@/types/UpdatedLikeCount';
import { likeCat } from '@/data-fetching/functions';
// Icons
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbWeight } from "react-icons/tb";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { MdFormatColorFill } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";

export default function CatFullCard(props: CatType) {
  const { _id, name, likeCount, breed, image, age, weightG, heightCM, colors, favoriteFood, address } = props;
  const [isLikedClicked, setIsLikedClicked] = useState<boolean>(false);
  const [updatedLikeCount2, setUpdatedLikeCount] = useState<number>(likeCount);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const weightKg = (weightG / 1000).toFixed(1);
  const addressString = `${address.street}, ${address.city}, ${address.country}`;


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

  return (
    <>
      <div className={c.fullCardContainer}>
        <Image src={image} alt={name} width={300} height={300} />
        <div className={c.cardInfoContainer}>
          <div className={c.cardInfo}>

            <h1>{name}</h1>
            <h3 className={c.breed}>{breed}</h3>
            <p className={c.address}>{addressString}</p>

            <div className={c.detailsContainer}>
              <div className={c.detailsGrid}>
                <div className={c.detailCard}>
                  <button onClick={handleLike} disabled={isLikedClicked} className={c.likeButton}>
                    {isLikedClicked ?
                      isError ? <IoMdHeart className={c.gray} /> : <IoMdHeart className={c.red} /> :
                      <IoMdHeartEmpty className={c.icon + ' ' + c.iconHover} />}
                  </button>
                  <span className={c.label}>Likes</span>
                  <span className={c.value}>{updatedLikeCount2}</span>
                </div>
                <div className={c.detailCard}>
                  <LiaBirthdayCakeSolid className={c.icon} />
                  <span className={c.label}>Age</span>
                  <span className={c.value}>{age}</span>
                </div>
                <div className={c.detailCard}>
                  <TbWeight className={c.icon} />
                  <span className={c.label}>Weight</span>
                  <span className={c.value}>{weightKg}</span>
                </div>
                <div className={c.detailCard}>
                  <LiaRulerVerticalSolid className={c.icon} />
                  <span className={c.label}>Height</span>
                  <span className={c.value}>{heightCM}m</span>
                </div>
                <div className={c.detailCard}>
                  <MdFormatColorFill className={c.icon} />
                  <span className={c.label}>Colors</span>
                  <div className={c.value + " " + c.flex}>
                    {colors.map((color: string) => {
                      return <div key={color} className={c.colorCircle} style={{ backgroundColor: color }}></div>
                    })}
                  </div>
                </div>
                <div className={c.detailCard}>
                  <GiHotMeal className={c.icon} />
                  <span className={c.label}>Favorite food</span>
                  <span className={c.value}>{favoriteFood}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}