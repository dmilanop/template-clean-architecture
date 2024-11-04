import Link from "next/link";

export default function Counter () {
  return (
    <div className='flex flex-col items-center justify-center h-svh gap-y-5'>
      <h1 className='text-4xl font-bold' >COUNTER PAGE</h1>
      
      <Link href={'/'} >
        <button
          className='text-base font-semibold border rounded border-blue-700 w-40 h-10 hover:bg-blue-700 hover:text-white'
        >
          IR AL HOME
        </button>
      </Link>
    </div>
  )
}