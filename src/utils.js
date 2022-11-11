const domain = "http://localhost:8080"

export const uploadAddress = (query) => {
    const authToken = localStorage.getItem("authToken");
    const uploadURL = `${domain}/search/?user_address=${query.homeaddress}`
    return fetch(uploadURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to upload new package");
      }

      return response.json();
    });
}