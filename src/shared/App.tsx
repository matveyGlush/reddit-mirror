import React, {useEffect} from 'react';
import { hot } from "react-hot-loader/root";
import {Layout} from "./Layout";
import './main.global.css'
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {StrictMode} from 'react';
import {UserContextProvider} from './context/userContext';
import {PostContextProvider} from './context/postsContext';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {rootReducer, setToken} from "../store/reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent () {
  useEffect(() => {
    const token = localStorage.getItem('token') === 'undefined' ? window.__token__ : localStorage.getItem('token');
    store.dispatch(setToken(token));
    if (token) localStorage.setItem('token', token);
  }, []);

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
