import React from "react";
import ReviewTableRow from "./ReviewTableRow";

function ReviewTable({ review }) {
// This function feeds a list of reviewID's into each review row where they will be used in subquerries.
    return (
        <>
            {review.map((review, i) => <ReviewTableRow reviewID={review}
                    key={i} />)}
        </>
    );
}

export default ReviewTable;