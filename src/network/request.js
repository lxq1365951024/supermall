import axios from 'axios'
export function request(config){
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //请求拦截
  instance.interceptors.request.use((config)=>{
    // console.log(config);
    return config
  },err=>{
    console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use((res)=>{
    // console.log(res);
    return res.data//过滤axios内多余的信息
  },(err)=>{
    console.log(err)
  })
  return instance(config)//axios 本身已经封装了promise 所以可以直接返回
}