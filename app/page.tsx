import Link from 'next/link';
import StoreProvider from "./StoreProvider";

export default function App() {
  return (
    <StoreProvider>
      <div className='flex flex-col items-center justify-center h-svh gap-y-5'>
        <h1 className='text-4xl font-bold' >TEMPLATE WITH CLEAN ARCHITECTURE</h1>
        
        <Link href={'/counter'}>
          <button
            className='text-base font-semibold border rounded border-blue-700 w-40 h-10 hover:bg-blue-700 hover:text-white'
          >
            IR AL COUNTER
          </button>
        </Link>
      </div>
    </StoreProvider>
  );
};