import {request} from './request'



export function getDetail(iid){
  return request({
     url:'/api/wh/detail',
     params:{
       iid
      }
    })
  }