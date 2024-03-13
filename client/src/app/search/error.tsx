'use client'
import { ErrorPageProps } from '@/types/ErrorPageProps'

export default function Error({ error }: ErrorPageProps) {
  return (
    <div className='main-container-message'>
      <h2>Name search page - error.</h2>
      {/* <h2>{error?.message || 'Something went wrong!'}</h2> */}
    </div>
  )
}