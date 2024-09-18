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

    console.log(burgers[indexBurger].extras.findIndex(extra => {
        return extra.name === ingredients.id
    }))

    return (
        <>
            <h1>Edite seu pedido</h1>
            <Container sx={styles.container}>
                {order.name} , {order.price}
                    {Object.entries(order.ingredients).map(ingredient => {
                        return (
                            <Box key={ingredient[0]} sx={styles.horizontalBox}>
                                <div>{ingredients[ingredient[0]].namePT}</div>
                                <div>{ingredient[1]}</div>
                                
                                {
                                    burgers[indexBurger].extras.find(extra => extra.name === ingredients.id)
                                    &&
                                    <Button sx={styles.addButton} onClick={() => addIngredients(ingredient[0], order.name)}><AddIcon /></Button>
                                }
                                <Button sx={styles.addButton} onClick={() => removeIngredients(ingredient[0], order.name)}><RemoveIcon /></Button>
                                <div>{ingredients[ingredient[0]].price}</div>
                                </Box>
                        );
                    })}
            </Container>
        </>
    )
}