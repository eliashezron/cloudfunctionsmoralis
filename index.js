/* Moralis init code */
const serverUrl = 'https://5zenrjqoogkm.usemoralis.com:2053/server';
const appId = 'fpV6gOf2DBVPelzeXHevT0gO8S0bDMa6zDmWupPm';
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: 'Log in using Moralis',
    })
      .then(function (user) {
        console.log('logged in user:', user);
        console.log(user.get('ethAddress'));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log('logged out');
}

document.getElementById('btn-login').onclick = login;
document.getElementById('btn-logout').onclick = logOut;

