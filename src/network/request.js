import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/h8',
    timeout:5000
  })
  //这是一个promise
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
export function request2(){
  const instance = axios.create({
    baseURL:'https://view.inews.qq.com/g2',
    timeout:5000
  })
  instance({
    url:'/getOnsInfo',
    params:{
      name:'disease_h5'
    }
  }).then(res => {
    console.log(res);
    
  })
 
}