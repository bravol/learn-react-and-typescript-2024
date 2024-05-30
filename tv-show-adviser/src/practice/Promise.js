// function generateRandomNumber(onSuccess, onFailure) {
//   setTimeout(() => {
//     const random = Math.random().toFixed(2);
//     if (random > 0.5) {
//       onSuccess("It worked the random number is", random);
//     } else {
//       onFailure("It did not work well, the random number is", random);
//     }
//   }, 2000);
// }

// const promise = new Promise(generateRandomNumber);
// promise
//   .then((successResponse) => {
//     console.log(successResponse);
//   })
//   .catch((failureResponse) => {
//     console.log(failureResponse);
//   });

/*

fetch("https://api.github.com/users/john-smilga/repos")
  .then((response) => {
    response.json().then((json) => {
      console.log("success data", json);
    });
  })
  .catch((failure) => {
    console.log("failure", failure.message);
  });

  */

import axios from "axios";
// axios("https://randomuser.me/api/")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function req() {
  try {
    const response = await axios("https://randomuser.me/api/");
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

req();
