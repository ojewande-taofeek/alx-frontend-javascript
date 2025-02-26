import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firtName, lastName, filename) {
  const userPhone = uploadPhoto(filename);
  const userName = signUpUser(firtName, lastName);
  return Promise.allSettled([userPhone, userName])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
    })));
}
