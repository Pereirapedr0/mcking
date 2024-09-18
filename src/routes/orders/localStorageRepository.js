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
  const orders = JSON.parse(window.localStorage.getItem('order') || '[]');
  const pedidoParaAlterar = orders.find((order) => order.name == pedido);
  pedidoParaAlterar.ingredients[ingrediente] = pedidoParaAlterar.ingredients[ingrediente] + 1;
  const indice = orders.findIndex(order => pedido.name === order.name);
  orders[indice] = pedidoParaAlterar; 
  window.localStorage.setItem('order', JSON.stringify(orders));
  return null;
}

export const removeIngredients = async ({ request }) => {
  const item = await request.json();
  const {ingrediente , pedido} = item;
  const orders = JSON.parse(window.localStorage.getItem('order') || '[]');
  const removerIngrediente = orders.find((order) => order.name === pedido);
  removerIngrediente.ingredients[ingrediente] = removerIngrediente.ingredients[ingrediente] - 1;
  const indice = orders.findIndex(order => pedido.name === order.name);
  orders[indice] = removerIngrediente;
  window.localStorage.setItem('order', JSON.stringify(orders));
  
    return null;
}

//alterar preços
//alterar quantidades
//limitar adiçoes
//passar nome em portugues
//resolver removeIngredients