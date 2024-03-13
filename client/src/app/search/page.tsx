import SearchResults from '../../components/search-results/SearchResults';
import { SearchParamsProps } from '@/types/SearchParamsProps';

export default function Search({ searchParams }: SearchParamsProps) {
  const catName: string | null = Array.isArray(searchParams?.name) ? searchParams?.name[0] : searchParams?.name ?? null;
  return (
    <>
      <SearchResults catName={catName} />
    </>
  )
}