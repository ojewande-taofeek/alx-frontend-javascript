import handleResponseFromAPI from "./2-then";

const promise = Promise.reject();
const resolv = handleResponseFromAPI(promise);
console.log(resolv);
