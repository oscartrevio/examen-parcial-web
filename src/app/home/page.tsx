'use client';

import { useAuth } from '@/hooks/useAuth';

export default function MainPage() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 pt-20'>
      <header className='w-full p-6 fixed top-0 z-10'>
        <h1 className='text-lg font-bold text-green-600'>GreenPark</h1>
      </header>
      <div className='flex flex-col items-center justify-center w-full max-w-md p-6'>
        <p className='text-2xl mb-2 text-center'>
          Bienvenid@, <span className='font-bold'>{user?.name}</span>, disfruta
          tu experiencia en GreenPark.
        </p>
        <p>
          Número de Boleto: <span className='font-bold'>{user?.ticket}</span>
        </p>
        <button
          className='h-12 w-full items-center justify-center rounded-full bg-[#4EAFFE] text-base font-semibold text-white shadow-xs hover:bg-[#60b7fe] mt-4'
          onClick={() => handleLogout()}
        >
          Log Out
        </button>
      </div>
    </main>
  );
}
