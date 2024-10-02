import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  const allPromises = [promise1, promise2];
  Promise.all(allPromises)
    .then((responses) => {
      const photoBody = responses[0].body;
      const userFirstName = responses[1].firstName;
      const userLastName = responses[1].lastName;
      console.log(`${photoBody} ${userFirstName} ${userLastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
