import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {IUserData, meRequestAsync} from "../store/me/actions";

export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const token = useSelector<RootState, string>(state => state.token)
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === 'undefined' || token.length === 0) return;
    // @ts-ignore
    dispatch(meRequestAsync());
  }, [token]);

  return [data];
}
