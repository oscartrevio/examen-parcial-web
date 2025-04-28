// Usuario Contraseña Nombre Completo Número de Boleto
// alejandra.m verde123 Alejandra Morales 00123
// david.p bosque456 David Pérez 00124
// lucia.r eco789 Lucía Ramírez 00125

import { User } from '@/types/auth';

export const USERS: User[] = [
  {
    username: 'alejandra.m',
    password: 'verde123',
    name: 'Alejandra Morales',
    ticket: '00123',
  },
  {
    username: 'david.p',
    password: 'bosque456',
    name: 'David Pérez',
    ticket: '00124',
  },
  {
    username: 'lucia.r',
    password: 'eco789',
    name: 'Lucía Ramírez',
    ticket: '00125',
  },
];
