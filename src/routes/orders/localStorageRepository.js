import { redirect, useLoaderData } from "react-router-dom";
import { burgers, ingredients } from "../../backend/BurguesMenu";

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
  const { ingrediente, pedido, edit } = item;
  const orders = JSON.parse(window.localStorage.getItem('order') || '[]');
  const pedidoParaAlterar = orders.find((order) => order.name === pedido);

  const indexBurger = burgers.findIndex((burguer) => {
    return burguer.name === pedido
  })

  
  const indexIngredient = burgers[indexBurger].extras.findIndex((extra) => {
    return extra.name === ingrediente
  })

  if (edit === "add"){
    const limit = burgers[indexBurger].extras[indexIngredient].limitAdd;
    const newPrice = parseFloat(pedidoParaAlterar.price) + ingredients[ingrediente].price
    const podeAdicionar = burgers[indexBurger].ingredients[ingrediente] + limit > pedidoParaAlterar.ingredients[ingrediente];
    

    if (podeAdicionar) {
      pedidoParaAlterar.ingredients[ingrediente] += 1;
      pedidoParaAlterar.price = parseFloat(newPrice).toFixed(2);
    }
  }
  if (edit === "remove") {
    const newPrice = parseFloat(pedidoParaAlterar.price) - ingredients[ingrediente].price
    if (pedidoParaAlterar.ingredients[ingrediente] > 0) {
      pedidoParaAlterar.ingredients[ingrediente] -= 1;
      pedidoParaAlterar.price = parseFloat(newPrice).toFixed(2);
    }
  }

  const indice = orders.findIndex(order => pedido === order.name);
  orders[indice] = pedidoParaAlterar;
  window.localStorage.setItem('order', JSON.stringify(orders));

  

  return null;
};

// export const removeIngredients = async ({ request }) => {
//   const item = await request.json();
//   const { ingrediente, pedido } = item;
//   const orders = JSON.parse(window.localStorage.getItem('order') || '[]');
//   const removerIngrediente = orders.find((order) => order.name === pedido);

//   if (removerIngrediente.ingredients[ingrediente] > 0) {
//     removerIngrediente.ingredients[ingrediente] -= 1;
//   }

//   const indice = orders.findIndex(order => pedido === order.name);
//   orders[indice] = removerIngrediente;
//   window.localStorage.setItem('order', JSON.stringify(orders));

//   return null;
// };


//alterar preços


