'use client'

import CatFullCard from "@/components/cat-full-card/CatFullCard"

type catIdParams = {
  params: { catId: string }
}

export default function CatPage({ params }: catIdParams) {
  /*
  fetch cat data by id, if can not found
  notFound();
   */
  return (
    <>
      <CatFullCard />
    </>
  )
}