import { redirect } from "react-router-dom";

export const addBurger = async ({ request }) => {
  const item = await request.json();
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  // TODO: Salvar nome item
  window.localStorage.setItem('order', JSON.stringify([...order, item]));
  return redirect("/order/menu/summary");
}

export const listOrder = async () => {
  const order = JSON.parse(window.localStorage.getItem('order') || '[]');
  return order;
}