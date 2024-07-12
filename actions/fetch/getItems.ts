'use server'
import 'dotenv/config'
// export const getItems = async(query:string,variables={})=>{
//   try {
//     const res = await fetch(process.env.URL || 'https://1e669e-28.myshopify.com/admin/api/2024-04/graphql.json',{
//         method:'POST',
//         headers:{
//             "Content-Type":'application/json',
//             "X-Shopify-Access-Token":''
//         },
//         body:JSON.stringify({
//             query,variables
//         })
//     }
//     )
//     const result =await res.json();
// const products = result.data.products.edges
//     // console.log(products)
//     return products
//   } catch (error) {
//     console.log(error)
//   }
// }
// export const getProduct = async(productId:string,variables={})=>{
//    console.log(productId)
//   try {
//     const res = await fetch(process.env.URL || 'https://1e669e-28.myshopify.com/admin/api/2024-04/graphql.json',{
//         method:'POST',
//         headers:{
//             "Content-Type":'application/json',
//             "X-Shopify-Access-Token":''
//         },
//         body:JSON.stringify({
//             query:`{
//               product(id: "${productId}") {
//                 id
//                 status
//                 tags
//                 featuredImage {
//                   url
//                 }
//                 media(first: 1) {
//                   edges {
//                     node {
//                       id
//                     }
//                   }
//                 }
//                 title
//               }
//             }`,variables
//         })
//     }
//     )
//     const result =await res.json();

//  console.log(result)
//     return result
//   } catch (error) {
//     console.log(error)
//   }
// }

import Client from 'shopify-buy';


const client = Client.buildClient({
  storefrontAccessToken:'',
  domain:'1e669e-28.myshopify.com',
  apiVersion:'2024-04'
})

export const getAllItems = async()=>{
 try {
    const res =await client.product.fetchAll()
    console.log({res})
 } catch (error) {
   console.log({error})
 }
}