import { redirect } from "react-router-dom";
import {ingredients} from "../../backend/BurguesMenu"

export const addBurger = async ({ request }) => {
  const item = await request.json();
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  window.localStorage.setItem('order', JSON.stringify([...order, item]));
  return redirect("/order/menu/summary");
}

export const listOrder = async () => {
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  return order;
}

export const getOrder = async (burguers) => {
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  const item = order.find((order) => order.name == burguers);
  return item;
}

export const addIngredients = async ({ request }) => {
  const item = await request.json();
  const { ingrediente, pedido } = item;
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  const pedidoParaAlterar = order.find((order) => order.name == pedido);
  const pedidoAlterado = 
  console.log(pedidoParaAlterar);
  return null;
}

export const removeIngredients = async ({ request }) => {
  const item = await request.json();
  
  return null;
}

//alterar preços
//alterar quantidades
//limitar adiçoes
//passar nome em portugues
//resolver removeIngredients