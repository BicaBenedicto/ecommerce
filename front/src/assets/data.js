import clothsIMG from '../imgs/cloths.jpg';
import informaticaIMG from '../imgs/informatica.jpg';
import carIMG from '../imgs/car.jpg';
import foodsIMG from '../imgs/foods.jpg';
import cloth1 from '../imgs/cloth1.jpg';
import cloth2 from '../imgs/cloth2.jpg';
import cloth3 from '../imgs/cloth3.jpg';
import cloth4 from '../imgs/cloth4.jpg';
import car1 from '../imgs/car1.jpg';
import car2 from '../imgs/car2.jpg';
import car3 from '../imgs/car3.jpg';
import informatica1 from '../imgs/informatica1.jpg';
import informatica2 from '../imgs/informatica2.jpg';
import informatica3 from '../imgs/informatica3.jpg';
import informatica4 from '../imgs/informatica4.jpg';
import food1 from '../imgs/food1.jpg';
import food2 from '../imgs/food2.jpg';
import food3 from '../imgs/food3.jpg';
import food4 from '../imgs/food4.jpg';
import food5 from '../imgs/food5.jpg';
import food6 from '../imgs/food6.jpg';
import food7 from '../imgs/food7.jpg';
import food8 from '../imgs/food8.jpg';
import food9 from '../imgs/food9.jpg';
import food10 from '../imgs/food10.jpg';
import food11 from '../imgs/food11.jpg';
import food12 from '../imgs/food12.jpg';

export const CATEGORY_DEFAULT = [
  {
    category: 'cloths',
    category_name: 'Roupas',
    category_image: clothsIMG,
  },
  {
    category: 'informatica',
    category_name: 'Informática',
    category_image: informaticaIMG,
  },
  {
    category: 'piecesOfCar',
    category_name: 'Peças de Carro',
    category_image: carIMG,
  },
  {
    category: 'comidas',
    category_name: 'Comidas',
    category_image: foodsIMG,
  },
];

export const ITEMS_DEFAULT = [
  {
    id: 1000,
    price: 220.318,
    name: 'Roupa 1',
    image: cloth1,
    category: 'cloths',
    like: 20,
    unlike: 0,
    comments: [{
      name: 'Thiago',
      message: 'Minha namorada amou! Parábens pelo produto!',
    },
    {
      name: 'Roberta',
      message: 'Melhor compra que fiz no ano, valeu cada centavo!',
    }],
  },
  {
    id: 1001,
    price: 40,
    name: 'Roupa 2',
    image: cloth2,
    category: 'cloths',
    like: 5,
    unlike: 0,
    comments: [],
  },
  {
    id: 1002,
    price: 30,
    name: 'Roupa 3',
    image: cloth3,
    category: 'cloths',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 1003,
    price: 20,
    name: 'Roupa 4',
    image: cloth4,
    category: 'cloths',
    like: 2,
    unlike: 0,
    comments: [],
  },
  {
    id: 2000,
    price: 10,
    name: 'Informatica 1',
    image: informatica1,
    category: 'informatica',
    like: 1,
    unlike: 1,
    comments: [],
  },
  {
    id: 2001,
    price: 30,
    name: 'Informatica 2',
    image: informatica2,
    category: 'informatica',
    like: 30,
    unlike: 2,
    comments: [],
  },
  {
    id: 2002,
    price: 50,
    name: 'Informatica 3',
    image: informatica3,
    category: 'informatica',
    like: 2,
    unlike: 0,
    comments: [],
  },
  {
    id: 2003,
    price: 60,
    name: 'Informatica 4',
    image: informatica4,
    category: 'informatica',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 3000,
    price: 70,
    name: 'Peça 1',
    image: car1,
    category: 'piecesOfCar',
    like: 0,
    unlike: 3,
    comments: [],
  },
  {
    id: 3001,
    price: 80,
    name: 'Peça 2',
    image: car2,
    category: 'piecesOfCar',
    like: 5,
    unlike: 1,
    comments: [],
  },
  {
    id: 3002,
    price: 430,
    name: 'Peça 3',
    image: car3,
    category: 'piecesOfCar',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4000,
    price: 30,
    name: 'Comida 1',
    image: food1,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4001,
    price: 60,
    name: 'Comida 2',
    image: food2,
    category: 'comidas',
    like: 10,
    unlike: 0,
    comments: [],
  },
  {
    id: 4002,
    price: 30,
    name: 'Comida 3',
    image: food3,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4003,
    price: 50,
    name: 'Comida 4',
    image: food4,
    category: 'comidas',
    like: 40,
    unlike: 0,
    comments: [],
  },
  {
    id: 4004,
    price: 30,
    name: 'Comida 5',
    image: food5,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4005,
    price: 70,
    name: 'Comida 6',
    image: food6,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4006,
    price: 90,
    name: 'Comida 7',
    image: food7,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4007,
    price: 20,
    name: 'Comida 8',
    image: food8,
    category: 'comidas',
    like: 7,
    unlike: 0,
    comments: [],
  },
  {
    id: 4008,
    price: 30,
    name: 'Comida 9',
    image: food9,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4009,
    price: 60,
    name: 'Comida 10',
    image: food10,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4010,
    price: 40,
    name: 'Comida 11',
    image: food11,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
  {
    id: 4011,
    price: 40,
    name: 'Comida 12',
    image: food12,
    category: 'comidas',
    like: 0,
    unlike: 0,
    comments: [],
  },
];