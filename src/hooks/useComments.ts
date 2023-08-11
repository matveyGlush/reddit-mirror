import {useContext, useEffect, useState} from "react";
import axios from "axios/index";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export function useComments(subreddit: string, postId: string) {
  const token = useSelector<RootState, string>(state => state.token)
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (token === 'undefined') return;
    axios.get(`https://oauth.reddit.com/r/${subreddit}/comments/${postId}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then((resp) => {
        setComments(resp.data[1].data.children)
      })
      .catch(console.log)
  }, []);
  return comments;
}
