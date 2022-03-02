import bcrypt from 'bcryptjs';

export const USERS = [
    {
        name: 'Fulanito',
        passwd: '1234',
        isAdmin: 'false',
        watchedSeries: [],
    },
    {
        name: 'Pepito',
        passwd: bcrypt.hashSync('1234'),
    },
    {
        name: 'Antonio',
        passwd: bcrypt.hashSync('1234'),
    },
];
