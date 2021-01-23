/*
TableCheck
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import TableCheckLine from "./TableCheckLine";
import Logo from "./Logo";
import My from "./My";
import backgroundImage2 from "../image/backgroundImage2.png";

const ClassCheckDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const NextA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    right: 1%;
    &:hover{
        color: #00462A;
    }
`;

const PreA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    left: 1%;
    &:hover{
        color: #00462A;
    }
`;

const ClassCheck = () => {
    return(
        <ClassCheckDiv>
            <Logo/>
            <My/>
            <Link to = "./tableCheck">
                <PreA>&#10094;</PreA> 
            </Link>
            <Link to = "./ClassCheck">
                <NextA>&#10095;</NextA>
            </Link>

        </ClassCheckDiv>    
    );
};

export default ClassCheck;