export function scrollOnFocus(element, container) {
  if (!container) {
    return;
  }

  if (element.offsetTop < container.scrollTop) {
    container.scrollTop = element.offsetTop - 20;
  } else {
    const offsetBottom = element.offsetTop + element.offsetHeight;
    const scrollBottom = container.scrollTop + container.offsetHeight;

    if (offsetBottom > scrollBottom) {
      container.scrollTop = offsetBottom - container.offsetHeight;
    }
  }
}
