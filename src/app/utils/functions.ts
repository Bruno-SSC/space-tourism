export function debounce(callback: Function, timeout = 300) {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), timeout);
  };
}
