import Link from "next/link";

interface Props {
  direction : string;
  navigateTo: string
}

export const ButtonToNavigate = ({ direction, navigateTo }: Props) => {
  return (
    <>
      <Link href={`${direction}`}>
        <button
          className='text-base font-semibold border rounded border-blue-700 w-40 h-10 hover:bg-blue-700 hover:text-white'
        >
          IR AL {navigateTo}
        </button>
      </Link>
    </>
  )
};