import {useEffect, useState} from "react";
import axios from "axios/index";
import {IMAGE_DEFAULT} from "../constants";

export default function UseImageByAI(descr: string) {
  const [img, setImg] = useState('');
  useEffect( () => {
    const options = {
      method: 'GET',
      url: 'https://bing-image-search1.p.rapidapi.com/images/search',
      params: {
        q: `${descr}`
      },
      headers: {
        'X-RapidAPI-Key': 'bf6830762emshdaa36486ae61f52p177015jsn9023924492b5',
        'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
      }
    };

    try {
      axios.request(options).then(resp => {
          setImg(resp.data.value[0].thumbnailUrl);
        });
    } catch (error) {
      setImg(IMAGE_DEFAULT)
    }
  }, []);
  return img;
}
