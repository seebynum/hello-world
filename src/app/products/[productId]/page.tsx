import React from 'react'

export default function ProductDetails({
   params 
}: { 
  params: { productId: string } 
}) {
  return (
    <div>Product {params.productId}</div>
  )
}
