import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className='w-full min-h-screen grid place-items-center'>
    <SignUp />
  </div>
}