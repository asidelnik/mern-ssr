import { Link } from '@remix-run/react';
import c from './CatSmallCard.module.css';
import { useState } from 'react';
import { CatCardProps } from '~/types/CatType';
import { likeCat } from '~/requests/requests';
import { UpdatedLikeCount } from '~/types/UpdatedLikeCount';
// Icons
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbWeight } from "react-icons/tb";

export default function CatSmallCard(props: CatCardProps) {
  const { _id, name, likeCount, breed, image, age, weightG, loading } = props;
  const [isLikedClicked, setIsLikedClicked] = useState<boolean>(false);
  const [updatedLikeCount2, setUpdatedLikeCount] = useState<number>(likeCount);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
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

  return (
    <>
      <div className={c.smallCardContainer}>
        <Link to={`/cat-profile/${_id}`}>
          <img src={image} alt={name} width={300} height={300} loading={loading} />
        </Link>
        <div className={c.cardInfoContainer}>
          <div className={c.cardInfo}>
            <Link to={`/cat-profile/${_id}`}><h3>{name}</h3></Link>
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