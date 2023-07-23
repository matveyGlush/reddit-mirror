import React from 'react';
import { hot } from "react-hot-loader/root";
import {Layout} from "./Layout";
import './main.global.css'
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import { StrictMode } from 'react';

const AppComponent = () => {
    return (
        <StrictMode>
            <Layout>
                <Header />
                <Content>
                    <CardsList />
                </Content>
            </Layout>
        </StrictMode>

    );
};

export const App = hot(AppComponent);
