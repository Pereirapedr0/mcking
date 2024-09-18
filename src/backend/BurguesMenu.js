import classicBurguer from '../assets/classic_burger.webp';
import cheeseBurguer from '../assets/cheese_burger.png';
import baconBurguer from '../assets/bacon_burger.webp';
import veggieBurguer from '../assets/veggie_burger.jpeg';
import bbqBurguer from '../assets/bbq_burger.jpg';


export const ingredients = {
  bread: {
    namePT: 'Pão',
    id: 'bread',
  },
  tofu: {
    namePT: 'Tofu',
    price: '0,49',
    id: 'tofu',
  },
  picles: {
    namePT: 'Picles',
    price: '0,49',
    id: 'picles',
  },
  cheese: {
    namePT: 'Queijo',
    price: '0.99',
    id: 'cheese',
  },
  meat: {
    namePT: 'Carne',
    price: '1.99',
    id: 'meat',
  },
  bacon: {
    namePT: 'Bacon',
    price: '1.19',
    id: 'bacon',
  },
  barbecue: {
    namePT: 'Barbecue',
    price: '0.99',
    id: 'barbecue',
  },
  salad: {
    namePT: 'Salada',
    price: '0,49',
    id: 'salad',
  },
  veggieMeat: {
    namePT: 'Hamburguer de Planta',
    price: '0.99',
    id: 'veggieMeat',
  }
}

export const burgers = [
  {
    name: 'Cheese Burger',
    ingredients: {
      bread: 2,
      meat: 1,
      cheese: 1,
      salad: 1,
    },
    price: '4.99',
    image: cheeseBurguer,
  },
  {
    name: 'Classic Burger',
    ingredients: {
      bread: 2,
      meat: 1,
    },
    salad: 1,
    price: '5.99',
    image: classicBurguer,
  },
  {
    name: 'Bacon Burger',
    ingredients: {
      bread: 2,
      meat: 1,
      cheese: 1,
      bacon: 3,
      salad: 1,
    },
    extras: [{
      name: 'meat',
      limitAdd: 1,
    }, {
      name: 'bacon',
      limitAdd: 2,
    }],
    price: '7.99',
    image: baconBurguer,
  },
  {
    name: 'Veggie Burger',
    ingredients: {
      bread: 2,
      veggieMeat: 1,
      tofu: 1,
      picles: 1,
      salad: 2,
    },
    price: '5.49',
    image: veggieBurguer,
    extras: [{
      name: 'veggieMeat',
      limitAdd: 1,
    }, {
      name: 'tofu',
      limitAdd: 2,
    }]
  },
  {
    name: 'BBQ Burger',
    ingredients: {
      bread: 2,
      meat: 2,
      cheese: 1,
      bacon: 3,
      barbecue: 1,
      salad: 1,
    },
    price: '8.99',
    image: bbqBurguer,
    extras: [{
      name: 'meat',
      limitAdd: 1,
    }, {
      name: 'bacon',
      limitAdd: 2,
    },
    {
      name: 'barbecue',
      limitAdd: 1,
    },
    {
      name: 'cheese',
      limitAdd: 2,
    },
    {
      name: 'salad',
      limitAdd: 1,
    }]
  },
];