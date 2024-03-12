'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='main-container-message'>
      <h2>Something went wrong!</h2>
      <button className={'button-base button-primary'}
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}