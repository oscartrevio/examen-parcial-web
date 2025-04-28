'use client';

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { user, login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      redirect('/home');
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = login(username, password);

    if (user) {
      redirect('/home');
    } else {
      setError('No se pudo iniciar sesión.');
    }
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 pt-20'>
      <header className='w-full p-6 fixed top-0 z-10'>
        <h1 className='text-lg font-bold text-green-600'>GreenPark</h1>
      </header>
      <div className='flex flex-col items-center justify-center w-full max-w-sm p-6'>
        <h2 className='text-2xl font-bold mb-8'>Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
          <input
            type='text'
            placeholder='Usuario'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='bg-[#f2f2f2] h-12 w-full items-center rounded-2xl font-medium p-2'
          />
          <input
            type='password'
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#f2f2f2] flex h-12 w-full items-center rounded-2xl font-medium p-2'
          />
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button
            type='submit'
            className='h-12 w-full items-center justify-center rounded-full bg-[#4EAFFE] text-base font-semibold text-white shadow-xs hover:bg-[#60b7fe]'
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
