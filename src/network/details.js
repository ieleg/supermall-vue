import {request, request2} from './request'



export function getDetail(iid){
  return request({
     url:'/detail',
     params:{
       iid
      }
    })
  }
export function getRecommend(){
  return request({
    url:'./recommend'
  })
}



  export class goods{
    constructor(columns,itemInfo,service){
      this.title = itemInfo.title;
      this.discount = itemInfo.discountDesc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.columns = columns;
      this.services = service;
      this.desc = itemInfo.desc;
      this.highPrice = itemInfo.highPrice;
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