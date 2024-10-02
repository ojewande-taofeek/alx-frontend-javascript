export default function getFullResponseFromAPI(success) {
  const myObj = {
    status: 200,
    body: 'Success',
  };
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      resolve(myObj);
    } else {
      const errorResponse = 'The fake API is not working currently';
      reject(errorResponse);
    }
  });
  return myPromise;
}
