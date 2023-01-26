export const selectModuleReviews = (state) => state.reviews

export const selectReviewEntities = (state) => selectModuleReviews(state).entities

export const selectReviewIds = (state) => selectModuleReviews(state).ids

export const selectReviewById = (state, { reviewId }) => selectReviewEntities(state)[reviewId]