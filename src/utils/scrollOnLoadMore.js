export function smoothScrollOnLoadMore(element) {
  const { height: cardHeight } =
    element.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}
