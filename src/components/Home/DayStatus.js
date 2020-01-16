import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Arrow = styled.View`
    width: 0;
    height: 0;
    border-left-color: transparent;
    border-left-width: 15px;
    border-bottom-width: 15px;
    border-bottom-color: #EDEDED;
    border-right-width: 15px;
    border-right-color: transparent;

`;

const Card = styled.View`
    width: 90%;
    padding: 20px;
    background-color: #EDEDED;
    border-radius: 10px;
    min-height: 100px;
`;

export default (props) => {
    return (
        <>
            <Arrow></Arrow>
            <Card></Card>
        </>
    );
};