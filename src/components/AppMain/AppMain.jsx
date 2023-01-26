import React from 'react';
import Footer from '../MainPage/Footer/Footer';
import Header from '../MainPage/Header/Header';
import Main from '../MainPage/Main/Main';
import styles from './AppMain.module.scss'

const AppMain = () => {
    return (
        <div>
            <>
            <Header/>
            <Main/>
            <Footer/>
            </>
        </div>
    );
};

export default AppMain;