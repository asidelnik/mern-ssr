import { CatType } from "~/types/CatType";
import CatSmallCard from "../cat-small-card/CatSmallCard";
import c from "./TopRated.module.css";

type TopRatedProps = {
  cats: CatType[];
}

export default function TopRated({ cats }: TopRatedProps) {
  return (
    <>
      <h2>Top Rated</h2>
      {cats?.length > 0 && (
        <div className={c.cardsContainer}>
          {cats.map((cat: CatType) => (
            <CatSmallCard key={cat._id} {...cat} loading="eager" />
          ))}
        </div>
      )}
    </>
  )
}