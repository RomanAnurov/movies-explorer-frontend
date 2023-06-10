export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}


export const formatLength = (length) => {
  if (length >= 60) {
      return `${Math.floor(length / 60)}ч ${length % 60}м`
  }
  return `${length}м`
}
