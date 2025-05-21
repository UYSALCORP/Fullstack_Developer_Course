module.exports = function generatePagination(
  previous,
  current,
  next,
  totalPages,
) {
  let pagesList = [];

  // Previous page
  if (previous) {
    pagesList.push(previous);
  }

  // Current page
  pagesList.push(current);

  // Next page
  if (next) {
    pagesList.push(next);
  }

  // Add appropriate pages at the beginning
  if (current > 2) {
    if (!pagesList.includes(current - 2)) {
      pagesList = [current - 2, ...pagesList];
    }
  }

  // Add appropriate pages at the end
  if (current < totalPages - 2) {
    if (!pagesList.includes(current + 2)) {
      pagesList.push(current + 2);
    }
  }

  if (!pagesList?.length) return false;
  return pagesList;
};
