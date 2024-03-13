import CatsSearchComp from './CatsSearchComp';
import { SearchParamsProps } from '@/types/SearchParamsProps';

export default function CatsSearch({ searchParams }: SearchParamsProps) {
  const catName: string | null = Array.isArray(searchParams?.name) ? searchParams?.name[0] : searchParams?.name ?? null;
  return (
    <>
      <CatsSearchComp catName={catName} />
    </>
  )
}