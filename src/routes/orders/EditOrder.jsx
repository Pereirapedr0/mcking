import React from 'react';
import styles from './EditOrder.styles';
import { Container, Box } from '@mui/material';
import { useLoaderData } from 'react-router-dom';



export default function Teste() {
    const getOrder = useLoaderData();
    return (
        <>
            <h1>Edite seu pedido</h1>
            <Container sx={styles.container}>
            {getOrder.name} , {getOrder.price}
            </Container>
        </>
    )
}
