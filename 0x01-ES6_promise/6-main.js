import handleProfileSignup from './6-final-user';

async function run() {
  const result = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
  console.log(result);
}

run();
