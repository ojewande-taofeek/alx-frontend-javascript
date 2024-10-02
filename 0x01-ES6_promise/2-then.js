export default function handleResponseFromAPI(promise) {
  const myObj = {
    status: 200,
    body: 'success',
  };
  return promise
    .then(() => myObj)
    .catch(() => Error)
    .finally(() => console.log('Got a response from the API'));
}
