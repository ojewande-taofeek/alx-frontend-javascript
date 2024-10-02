export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const newPromise = true;
    if (newPromise) {
      resolve();
    } else {
      reject();
    }
  });
  return myPromise;
}
