import {request} from './request'



export function getDetail(iid){
  return request({
     url:'/api/h3/detail',
     params:{
       iid
      }
    })
  }

  export class goods{
    constructor(columns,itemInfo,service){
      this.desc = itemInfo.title;
      this.discount = itemInfo.discountDesc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.columns = columns;
      this.services = service;
    }
  }

  // export class shop{
  //   constructor(shopInfo){
  //     this.shopLogo = shopInfo.shopLogo;
  //     this.score = shopInfo.score;
  //     this.newPrice = itemInfo.price;
  //     this.oldPrice = itemInfo.oldPrice;
  //     this.columns = columns;
  //     this.services = service;
  //   }
  // }