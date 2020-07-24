import { request } from './request'
//此处为home页面的所有请求函数
export function getHomeMultidata(){
 return request({
    url:'/home/multidata'
  })
}
export function getHomeGoos(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}