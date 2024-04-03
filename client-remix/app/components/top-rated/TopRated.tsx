import CatSmallCard from "../cat-small-card/CatSmallCard";
import c from "./TopRated.module.css";
import { CatSmallCardType } from "~/types/CatSmallCardType";

type TopRatedProps = {
  cats: CatSmallCardType[];
}

export default function TopRated({ cats }: TopRatedProps) {
  return (
    <>
      <h2>Top Rated</h2>
      {cats?.length > 0 && (
        <div className={c.cardsContainer}>
          {cats.map((cat: CatSmallCardType) => (
            <CatSmallCard key={cat._id} {...cat} loading="eager" />
          ))}
        </div>
      )}
    </>
  )
}