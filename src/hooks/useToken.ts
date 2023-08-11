import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTokenInStore} from "../store";

export function useToken() {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (window.__token__) {
      setToken(window.__token__)
    }
  }, []);

  const dispatch = useDispatch();
  dispatch(setTokenInStore(token));
}
