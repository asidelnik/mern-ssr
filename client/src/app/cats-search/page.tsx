'use client'
import { useSearchParams } from 'next/navigation'

export default function CatsSearch() {
  const searchParams = useSearchParams()
  const catName = searchParams.get('name')

  return (
    <>
      <div>Cats Search</div>
      Search: {catName}
    </>
  )
}