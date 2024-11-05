'use client'
import { increment } from '@/lib/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';

export const CounterButton = () => {
  const counter  = useAppSelector((state: RootState) => state.counter.counter);
  const dispatch = useAppDispatch();

  let incrementValue: number = 5;

  return (
    <div className='flex flex-col items-center'>
      <button
        className='text-base font-semibold mt-14 border rounded border-blue-700 w-40 h-10 hover:bg-blue-700 hover:text-white'
        onClick={() => dispatch(increment(incrementValue))}
      >
        Increment + {incrementValue} 
      </button>

      <span className='text-xl font-bold mt-7' >Current value: {counter.value}</span>
    </div>
  );
};