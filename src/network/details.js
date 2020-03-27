import {request} from './request'



export function getDetail(iid){
  return request({
     url:'/api/wh/detail',
     params:{
       iid
      }
    })
  }

  export class goods{
    constructor(columns,itemInfo,service){
      this.desc = itemInfo.desc;
      this.discount = itemInfo.discountDesc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.columns = columns;
      this.services = service;
    }
  }