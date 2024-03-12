'use client'
import { ErrorPageProps } from '@/types/ErrorPageProps'

export default function Error({ error, reset, }: ErrorPageProps) {
  return (
    <div className='main-container-message'>
      <h2>{error?.message || 'Something went wrong!'}</h2>
      <button className='button-base button-primary'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}