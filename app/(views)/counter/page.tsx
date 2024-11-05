import { CounterButton } from './components/CounterButton';
import { ButtonToNavigate } from '@/app/components/ButtonToNavigate';

export default function Counter () {
  return (
    <div className='flex flex-col items-center justify-center h-svh gap-y-5'>
      <h1 className='text-4xl font-bold' >COUNTER PAGE</h1>

      <div className='flex justify-center items-center gap-x-5'>
        <ButtonToNavigate direction='/' navigateTo='HOME' />

        <CounterButton />
      </div>
      
    </div>
  )
}