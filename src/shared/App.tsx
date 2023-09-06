import React, {useEffect} from 'react';
import { hot } from "react-hot-loader/root";
import {Layout} from "./Layout";
import './main.global.css'
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {StrictMode} from 'react';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {rootReducer, saveToken} from "../store/reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent () {

  useEffect(() => {
    // @ts-ignore
    store.dispatch(saveToken())
  })

  return (
      <StrictMode>
        <Provider store={store}>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </Provider>
      </StrictMode>
  );
}

export const App = hot(() => <AppComponent/>);
