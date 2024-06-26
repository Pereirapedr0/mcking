import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Summary.styles';
import { useLoaderData } from 'react-router-dom';

export default function Summary() {
  const orderList = useLoaderData();
  const navigate = useNavigate();
  // TODO: calcular total
  let orderTotal = 0.00;
  for (let i = 0; i < orderList.length; i++) {
    orderTotal = orderTotal + parseFloat(orderList[i].price);
  }

  return (
    <Container disableGutters sx={styles.container}>
      <Container disableGutters sx={styles.horizontalContainer}>
        <Container disableGutters sx={styles.leftContainer}>
          <Typography variant="h6">Resumo do Pedido</Typography>
          {/* TODO: Mostar nome do item + preço */}
          {orderList.map((order, index) => (
            <Typography variant="body2" key={index}>{order.name} R$ {order.price}</Typography>
          ))}
        </Container>
        <Container disableGutters sx={styles.rightContainer}>
          <Typography variant="h6">Total do Pedido</Typography>
          <Box sx={styles.priceBox} >
            {/* TODO: MOSTRAR TOTAL */}
            <Typography>R$ {orderTotal.toFixed(2)}</Typography>
          </Box>
        </Container>
      </Container>
      <Container disableGutters sx={styles.buttonContainer}>
        <Button disableRipple sx={styles.cancelButton}>Cancelar</Button>
        <Button disableRipple sx={styles.buyButton}
          onClick={() => navigate('/confirm')}>Comprar</Button>
      </Container>
    </Container>
  )
}