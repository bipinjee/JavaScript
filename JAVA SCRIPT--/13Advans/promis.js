const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.

////   All output is in this code ///////
/*{
  login: 'hiteshchoudhary',
  id: 11613311,
  node_id: 'MDQ6VXNlcjExNjEzMzEx',
  avatar_url: 'https://avatars.githubusercontent.com/u/11613311?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/hiteshchoudhary',
  html_url: 'https://github.com/hiteshchoudhary',
  followers_url: 'https://api.github.com/users/hiteshchoudhary/followers',
  following_url: 'https://api.github.com/users/hiteshchoudhary/following{/other_user}',
  gists_url: 'https://api.github.com/users/hiteshchoudhary/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/hiteshchoudhary/subscriptions',
  organizations_url: 'https://api.github.com/users/hiteshchoudhary/orgs',
  repos_url: 'https://api.github.com/users/hiteshchoudhary/repos',
  events_url: 'https://api.github.com/users/hiteshchoudhary/events{/privacy}',
  received_events_url: 'https://api.github.com/users/hiteshchoudhary/received_events',
  type: 'User',
  site_admin: false,
  name: 'Hitesh Choudhary',
  company: null,
  blog: 'https://www.youtube.com/c/HiteshChoudharydotcom',
  location: 'India',
  email: null,
  hireable: null,
  bio: 'I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out',
  twitter_username: 'hiteshdotcom',
  public_repos: 82,
  public_gists: 4,
  followers: 19291,
  following: 0,
  created_at: '2015-03-23T13:03:25Z',
  updated_at: '2024-03-18T18:58:57Z'
}
Async task is compelete
Promise consumed
Async task 2
Async 2 resolved
{ username: 'Chai', email: 'chai@example.com' }
{ username: 'hitesh', password: '123' }
hitesh
The promise is either resolved or rejected
{ username: 'javascript', password: '123' }
*/
