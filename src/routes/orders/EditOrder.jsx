import React from 'react';
import styles from './EditOrder.styles';
import { Container, Box, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLoaderData, useSubmit } from 'react-router-dom';
import { ingredients, burgers } from '../../backend/BurguesMenu';

// colocar os ingredientes (imagem, nome, botão adicionar, em baixo preço, quantidade)


export default function EditOrder() {
    const submit = useSubmit();
    const order = useLoaderData();
    const addIngredients = (ingrediente, pedido) => {
        submit({ingrediente: ingrediente, pedido: pedido, edit: "add"}, {
            method: "post", encType: "application/json", 
          });
    };
    const removeIngredients = (ingrediente, pedido) => {
        submit({ingrediente: ingrediente, pedido: pedido, edit: "remove"}, {
            method: "post", encType: "application/json", 
          });
    };

    const indexBurger = burgers.findIndex((burger) => {
        return burger.name === order.name
    });

    return (
        <>
            <h1>Edite seu pedido</h1>
            <Container sx={styles.container}>
                <h3>{order.name} {order.price}</h3>
                    {Object.entries(order.ingredients).map(ingredient => {
                        if (ingredient[0] === 'bread') return
                        return (
                            <Box key={ingredient[0]} sx={styles.horizontalBox}>
                                <Box sx={styles.itemBox}>{ingredients[ingredient[0]].namePT}</Box>
                                <Box sx={styles.itemBox}>{ingredient[1]}</Box>                                
                                {
                                    burgers[indexBurger].extras.find(extra => extra.name === ingredient[0])
                                    ?
                                    <Button sx={[styles.addButton, styles.itemBox]} onClick={() => addIngredients(ingredient[0], order.name)}><AddIcon /></Button>
                                    :
                                    <Button disabled sx={[styles.addButton, styles.itemBox]} onClick={() => addIngredients(ingredient[0], order.name)}><AddIcon /></Button>
                                }
                                <Button sx={[styles.addButton, styles.itemBox]} onClick={() => removeIngredients(ingredient[0], order.name)}><RemoveIcon /></Button>
                                <Box sx={styles.itemBox}>{ingredients[ingredient[0]].price}</Box>
                            </Box>
                        );
                    })}
            </Container>
        </>
    )
}