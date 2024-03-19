import c from './SearchResults.module.css';
import { SearchResultsProps } from '~/types/SearchResultsProps';
import { CatSmallCardType } from '~/types/CatSmallCardType';
import CatSmallCard from '../cat-small-card/CatSmallCard';

export default function SearchResults({ name, cats }: SearchResultsProps) {
  return (
    <>
      {name !== null && cats && cats?.length > 0 && (
        <>
          <div className={c.container}>
            <p>Searched: <span className={c.searchedValue}>{name || ""}</span></p>
            <div className={c.cardsContainer}>
              {cats.map((cat: CatSmallCardType) => (
                <CatSmallCard key={cat._id} {...cat} loading="eager" />
              ))}
            </div>
          </div>
        </>
      )}
      {name !== null && cats?.length === 0 && <div className="main-container-message"><h2>No cats found</h2></div>}
    </>
  )
}
