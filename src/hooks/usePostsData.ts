import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

export function usePostsData() {
  const [posts, setPosts] = useState([]);
  const token = useContext(tokenContext)
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
