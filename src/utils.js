const domain = ""

export const login = (credential, asHost) => {
  const loginUrl = `${domain}/authenticate/${asHost ? "admin" : "guest"}`;
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to log in");
    }
 
    return response.json();
  });
};
 
//login page register
export const register = (credential, asHost) => {
  const registerUrl = `${domain}/register/${asHost ? "admin" : "guest"}`;
  return fetch(registerUrl, {
    // mode: 'no-cors',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to register");
    }
  });
};

export const getOrders = () => {
  const authToken = localStorage.getItem("authToken");
  const listOrdersUrl = `${domain}/history/guest`;
 
  return fetch(listOrdersUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get the order");
    }
 
    return response.json();
  });
};

export const uploadPackage = (query) => {
    const authToken = localStorage.getItem("authToken");
    const uploadURL = `${domain}/search/?user_address=${query.address}&bill=${query.bill}`;

    return fetch(uploadURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        // "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to search the order");
      }

      return response.json();
    });
};

export const succeed = (data) => {
  const authToken = localStorage.getItem("authToken");
  const succeedUrl = `${domain}/order`;
 
  return fetch(succeedUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get the order info");
    }
  });
};