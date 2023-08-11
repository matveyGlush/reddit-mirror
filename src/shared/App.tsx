import React from 'react';
import { hot } from "react-hot-loader/root";
import {Layout} from "./Layout";
import './main.global.css'
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {StrictMode} from 'react';
import {UserContextProvider} from './context/userContext';
import {PostContextProvider} from './context/postsContext';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {rootReducer} from "../store";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent () {

  return (
      <StrictMode>
        <Provider store={store}>
          <UserContextProvider>
              <PostContextProvider>
                <Layout>
                  <Header />
                  <Content>
                    <CardsList />
                  </Content>
                </Layout>
              </PostContextProvider>
            </UserContextProvider>
        </Provider>
      </StrictMode>
  );
}

export const App = hot(() => <AppComponent/>);
