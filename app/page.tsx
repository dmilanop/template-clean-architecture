import { ButtonToNavigate } from './components/ButtonToNavigate';

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center h-svh gap-y-5'>
      <h1 className='text-4xl font-bold' >TEMPLATE WITH CLEAN ARCHITECTURE</h1>
      
      <ButtonToNavigate direction='/counter' navigateTo='COUNTER' />
    </div>
  );
};