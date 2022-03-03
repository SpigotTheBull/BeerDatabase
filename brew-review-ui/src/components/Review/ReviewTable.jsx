import React from "react";
import ReviewTableRow from "./ReviewTableRow";

function ReviewTable({ review }) {

    return (
        <>
            {review.map((review, i) => <ReviewTableRow reviewID={review}
                    key={i} />)}
        </>
    );
}

export default ReviewTable;