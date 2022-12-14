import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RightSideNav from '../components/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
        <Header></Header>
         <Outlet></Outlet>
      </div>
    );
};

export default Main;