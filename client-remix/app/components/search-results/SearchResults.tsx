import c from './SearchResults.module.css';
import { SearchResultsProps } from '~/types/SearchResultsProps';
import { CatSmallCardType } from '~/types/CatSmallCardType';
import CatSmallCard from '../cat-small-card/CatSmallCard';

export default function SearchResults({ cats }: SearchResultsProps) {
  return (
    <>
      <div className={c.cardsContainer}>
        {cats.map((cat: CatSmallCardType) => (
          <CatSmallCard key={cat._id} {...cat} loading="eager" />
        ))}
      </div>
    </>
  )
}