type catIdParams = {
  params: { catId: string }
}

export default function CatPage({ params }: catIdParams) {
  return (
    <>
      <div>Cat {params.catId} page</div>
    </>
  )
}