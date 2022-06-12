const photos = 'https://jsonplaceholder.typicode.com/photos';
const users = 'https://jsonplaceholder.typicode.com/users';


function get(url) {
  return new Promise((resolve, reject) => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url);
    httpRequest.onload = function () {
      if (httpRequest.status === 200) {
        resolve(httpRequest.responseText);
      } else {
        reject(Error(httpRequest.status));
      }
    };
    httpRequest.send();
  });
}

(async () => {
  try {
    const photosList = await get(photos);
    const usersList = await get(users);
    const res = await Promise.all([photosList, usersList]);
    success(res);
  }
  catch (status) {
    fail(status);
  }
  finally {
    console.log('Completed');
  }

})();

function success(responseText) {
  console.log(responseText);
}

function fail(error) {
  console.log(error);
}




