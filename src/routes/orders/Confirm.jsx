import React from "react";
import { Box, Typography, Container, Button } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import styles from './Confirm.styles';

export default function Confirm() {
  const orderList = useLoaderData();
  return (
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
    </Container>
  )
}


