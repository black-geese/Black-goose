import axios from "axios";
import jsonp from 'jsonp';

export const getMock = axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists').then((e) => {
  const { status, data } = e;
  if (status === 200) {
    return data;
  } else {
    return 'err'
  }
})

export const getBaidu = ({wd}) => {
  return new Promise((resolve, reject) => {
    jsonp('http://suggestion.baidu.com/su?wd='+wd,{param:"cb"}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    })
  })
}
