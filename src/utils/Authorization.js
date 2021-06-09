const url = "https://petclinicio.herokuapp.com/";

export async function sendRequestWithToken(path, method = "GET", body = null) {
  let requestOptions = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    method: method,
    body: body,
  };
  let response = await fetch(`${url + path}`, requestOptions);
  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem("id");
    localStorage.removeItem("petId");
    localStorage.removeItem("type");
    localStorage.removeItem("token");
    window.location = "/login";
    return [];
  } else {
    return response;
  }
}

export async function login(login, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login, password }),
  };
  let response = await fetch(`${url}login`, requestOptions);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    let json = await response.json();
    localStorage.setItem("token", json.token);
    localStorage.setItem("id", json.userId);
    localStorage.setItem("type", json.type);
    window.location = "/home";
  }
}

export async function register(login, password, firstName, surName, vetCode) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login, password, firstName, surName, vetCode }),
  };
  let response = await fetch(`${url}register`, requestOptions);
  if (response.ok) {
    let json = await response.json();
    localStorage.setItem("token", json.token);
    localStorage.setItem("id", json.userId);
    localStorage.setItem("type", json.type);
    window.location = "/home";
  }
  return response;
}
