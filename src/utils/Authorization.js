const url = "http://localhost:5000/";

export async function sendRequestWithToken(
  path,
  method = "GET",
  type = "json",
  body = null
) {
  let requestOptions;
  if (localStorage.getItem("token") !== null) {
    requestOptions = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      method: method,
      body: body,
    };
  } else {
    requestOptions = { method: method };
  }

  return await fetch(`${url + path}`, requestOptions).then((response) =>
    convert(response, type)
  );
  // .then(checkAuthorization)
  // .then(response => response.status === 400 ? [] : response)
}

export async function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${url}login`, requestOptions)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    })
    .then(function (response) {
      localStorage.setItem("token", response);
    });
}

// async function checkAuthorization(response) {
//     if (response.status === 401 || response.status === 403) {
//         localStorage.removeItem('token');
//     }
//     return await response;
// }

async function convert(response, type) {
  if (type === "json") {
    return await response.json();
  } else {
    return await response.text();
  }
}
