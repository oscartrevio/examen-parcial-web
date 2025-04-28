'use client';

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

import { USERS } from '@/data/users';
import { User } from '@/types/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(USERS.find((user) => user.username === savedUser) || null);
    }
  }, []);

  const login = (username: string, password: string) => {
    const foundUser = USERS.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', foundUser.username);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    redirect('/');
  };

  return { user, login, logout };
}
