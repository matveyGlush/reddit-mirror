import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export function usePostsData() {
  const [posts, setPosts] = useState([]);
  const token = useSelector<RootState, string>(state => state.token)
  useEffect(() => {
    if (token === 'undefined') return;
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
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
