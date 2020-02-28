
export default function (call, wait) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      call(...args);
      timer = null;
    }, wait);
  };
}
