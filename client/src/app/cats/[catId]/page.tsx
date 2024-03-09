'use client'
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
      <div>Cat {params.catId} page</div>
    </>
  )
}