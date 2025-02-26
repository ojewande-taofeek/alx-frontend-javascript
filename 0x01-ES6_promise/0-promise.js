export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    const myPromise = true;
    if (myPromise) {
      resolve(true);
    } else {
      reject(Error);
    }
  });
}
