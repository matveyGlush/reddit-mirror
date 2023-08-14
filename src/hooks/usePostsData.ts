import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

export function usePostsData() {
  const [posts, setPosts] = useState([]);
  const token = useSelector<RootState, string>(state => state.token)
  useEffect(() => {
    if (token === 'undefined') return;
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=2', {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then((resp) => {
        setPosts(resp.data.data.children);
      })
      .catch(console.log);
  }, []);
  return [posts];
}
