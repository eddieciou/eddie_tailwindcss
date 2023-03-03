import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-5 p-2'>
      <Link href='/lesson01' className='rounded-md bg-blue-400 p-5 text-white'>
        Lesson01
      </Link>
      <Link href='/lesson02' className='rounded-md bg-blue-400 p-5 text-white'>
        Lesson02
      </Link>
    </div>
  );
}
