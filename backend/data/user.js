import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
  },
  {
    name:'John cena',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456',10),

  },
  {
    name: 'Doe John',
    email: 'doe@example.com',
    password: bcrypt.hashSync('123456',10),
  
  },
  
];

export default users