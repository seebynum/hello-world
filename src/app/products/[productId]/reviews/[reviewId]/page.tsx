import React from 'react'

export default function ReviewDetail({ params }: {
    params: {
        reviewId: string;
        productId: string;
    }
}) {
    return (
        <div>Review {params.reviewId} for Product {params.productId}</div>
    )
}
