import React, {useState} from 'react';
import { hot } from "react-hot-loader/root";
import {Layout} from "./Layout";
import './main.global.css'
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import { StrictMode } from 'react';
import {useToken} from "../hooks/useToken";
import {tokenContext} from "./context/tokenContext";
import {UserContextProvider} from './context/userContext';
import {PostContextProvider} from './context/postsContext';
import { commentContext } from './context/commentContext';

function AppComponent () {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState('');

  return (
      <StrictMode>
        <commentContext.Provider value={ { value: commentValue, onChange: setCommentValue } }>
          <tokenContext.Provider value={token}>
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
          </tokenContext.Provider>
        </commentContext.Provider>
      </StrictMode>
  );
}

export const App = hot(() => <AppComponent/>);
