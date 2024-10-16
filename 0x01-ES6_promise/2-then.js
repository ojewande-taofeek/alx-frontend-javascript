export default function handleResponseFromAPI(promise) {
  const myObj = {
    status: 200,
    body: 'success',
  };
  return promise
    .then(() => myObj)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
