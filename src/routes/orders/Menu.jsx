import React from 'react';
import { Button, Box, Typography, Container, Divider } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Outlet, useSubmit } from 'react-router-dom';

import { burgers } from '../../backend/BurguesMenu';
import styles from './Menu.styles';

export default function Menu() {
  const submit = useSubmit();

  const handleAdd = (burger) => {
    submit({ name: burger.name, price: burger.price, img: burger.image , ingredients: burger.ingredients}, {
      method: "post", encType: "application/json", 
    });
  };

  return (
    <>
      <Container sx={styles.container}>
        <Box sx={styles.boxRelativeToFadeOut}>
          {burgers.map((burger, index) => (
            <Box key={index} sx={styles.listBox}>
              <img src={burger.image} alt={burger.name} width={100} height={100} style={{ marginRight: 16 }} />
              <Box sx={styles.itemBox}>
                <Typography variant="h6">{burger.name}</Typography>
                <Typography variant="body1">R$ {burger.price}</Typography>
              </Box>
              <Button sx={styles.addButton} onClick={() => handleAdd(burger)}><Add /></Button>
            </Box>
          ))}
          <Box sx={styles.boxStickyToFadeOut} />
        </Box>
      </Container>
      <Divider sx={styles.divider} />
      <Outlet />
    </>
  )
}