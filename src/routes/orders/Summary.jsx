import React, { useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import styles from './Summary.styles';


export default function Summary() {
  const location = useLocation();
  useEffect(() => {
  }, [location]);

  const orderList = useLoaderData();
  const navigate = useNavigate();
  // TODO: calcular total - feito
  let orderTotal = 0.00;
  for (let i = 0; i < orderList.length; i++) {
    orderTotal = orderTotal + parseFloat(orderList[i].price);
  }

  let textoDireita = 'Comprar';
  if (location.pathname == '/order/confirm/summary') {
    textoDireita = 'Método de Pagamento'
  }

  let textoEsquerda = 'Cancelar';
  if (location.pathname == '/order/confirm/summary') {
    textoEsquerda = 'Menu'
  }

  return (
    <Container disableGutters sx={styles.container}>
      <Container disableGutters sx={styles.horizontalContainer}>
        <Container disableGutters sx={styles.leftContainer}>
          <Typography variant="h6">Resumo do Pedido</Typography>

          {orderList.map((order, index) => (
            <Typography variant="body2" key={index}>{order.name} R$ {order.price}</Typography>
          ))}
        </Container>
        <Container disableGutters sx={styles.rightContainer}>
          <Typography variant="h6">Total do Pedido</Typography>
          <Box sx={styles.priceBox} >

            <Typography>R$ {orderTotal.toFixed(2)}</Typography>
          </Box>
        </Container>
      </Container>
      <Container disableGutters sx={styles.buttonContainer}>
        <Button disableRipple sx={styles.cancelButton}>{textoEsquerda}</Button>
        <Button disableRipple sx={styles.buyButton}
          onClick={() => navigate('/order/confirm/summary')}>{textoDireita}</Button>
      </Container>
    </Container>
  )
}