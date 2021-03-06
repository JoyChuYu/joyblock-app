import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'cc1804@live.mdx.ac.uk',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'LEGO',
        logo: '/images/LEGO_LOGO.png',
        description: 'LEGO Expert',
        rating: 4,
        numReviews: 120,
      },
    },
    {
      name: 'JoyChu',
      email: 'joypigyu@gmail.com',
      password: bcrypt.hashSync('871231', 8),
      isAdmin: false,
      isSeller: true,
      seller: {
        name: 'Tomica',
        logo: '/images/logo1.png',
        description: 'Tomica Collector',
        rating: 4.5,
        numReviews: 10,
      },
    },
    {
      name: 'Mickey',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
    {
      name: 'Benson',
      email: 'ncc.hkma@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
  ],
 
  products: [
    {
      name: 'Spider-Cyclee Chase 76004',
      category: 'Marvel',
      image: '/images/76004.jpg',
      price: 500,
      countInStock: 10,
      brand: 'LEGO',
      rating: 4.5,
      numReviews: 10,
      description: 'Ultimate Spider-Man',
    },
    {
      name: 'Volkswagen T2 Camper Van 10279',
      category: 'Creator',
      image: '/images/10279.jpg',
      price: 1000,
      countInStock: 10,
      brand: 'LEGO',
      rating: 4.0,
      numReviews: 0,
      description: 'Creator Expert 10279',
    },
    {
      name: 'No.72 Lotus Elise Sports 220 II',
      category: 'Tomica',
      image: '/images/Tomica72.jpg',
      price: 35,
      countInStock: 50,
      brand: 'TOMICA',
      rating: 4.5,
      numReviews: 2,
      description: '2021 New Tomica No.72',
    },
    {
      name: 'Ride On RD-01 Mickey Mouse & Tinker',
      category: 'Dream Tomica',
      image: '/images/TomicaRD01.jpg',
      price: 70,
      countInStock: 6,
      brand: 'TOMICA',
      rating: 2,
      numReviews: 4,
      description: '2021 New Dream Tomica RD-01',
    },
    {
      name: 'Santas Visit 10293',
      category: 'Creator',
      image: '/images/10293.jpg',
      price: 800,
      countInStock: 0,
      brand: 'LEGO',
      rating: 3.9,
      numReviews: 7,
      description: 'Creator Expert 10293',
    },
    {
      name: 'Elf Club House 10275',
      category: 'Creator',
      image: '/images/10275.jpg',
      price: 700,
      countInStock: 20,
      brand: 'LEGO',
      rating: 4.9,
      numReviews: 1,
      description: 'hCreator Expert 10275',
    },
  ],
};
export default data;
