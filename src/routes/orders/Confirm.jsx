import React from "react";
import { Box, Typography, Container, Button, Divider } from '@mui/material';
import { useLoaderData, Outlet } from 'react-router-dom';
import styles from './Confirm.styles';


export default function Confirm() {
  const orderList = useLoaderData();

  let orderTotal = 0.00;
  for (let i = 0; i < orderList.length; i++) {
    orderTotal = orderTotal + parseFloat(orderList[i].price);
  }
  return (
    <>
  <h1>Resumo do pedido </h1>
    <Container sx={styles.container}>
      <Box sx={styles.boxRelativeToFadeOut}>
        {orderList.map((order, index) => (
          <Box key={index} sx={styles.listBox}>
            <img src={order.img} alt={order.name} width={100} height={100} style={{ marginRight: 16 }} />
            <Box sx={styles.itemBox}>
              <Typography variant="h6">{order.name}</Typography>
              <Typography variant="body1">R$ {order.price}</Typography>
            </Box>
            <Button sx={styles.addButton} onClick={() => handleAdd(burger)}></Button>
          </Box>
        ))}
        <Box sx={styles.boxStickyToFadeOut} />
      </Box>
      <Box sx={styles.priceBox} >
            <Typography>Total R$ {orderTotal.toFixed(2)}</Typography>
          </Box>
      <Divider sx={styles.divider} />
      <Container disableGutters sx={styles.buttonContainer}>
        <Button disableRipple sx={styles.cancelButton}>Método de Pagamento</Button>
        <Button disableRipple sx={styles.buyButton}
          onClick={() => navigate('/order/menu')}>Menu</Button>
      </Container>
      
    </Container>
    < Outlet />
    </>
  )
}


