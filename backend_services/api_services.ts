import { $http } from "./axios";

export const get = async (url: string, params?: any) => {

  return new Promise((resolve, reject) => {
    $http
      .get(url, (params = { params }))
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const post = (payload: any) => {

  return new Promise((resolve, reject) => {
    $http
      .post(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authUpdate = (payload: any) => {
  var token = validateToken();
  $http.defaults.headers.common["authorization"] = "bearer " + token;

  return new Promise((resolve, reject) => {
    $http
      .put(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authPost = (payload: any) => {
  var token = validateToken();
  $http.defaults.headers.common["authorization"] = "bearer " + token;

  return new Promise((resolve, reject) => {
    $http
      .post(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authGet = (payload: any) => {
  var token = validateToken();
  $http.defaults.headers.common["authorization"] = "bearer " + token;

  return new Promise((resolve, reject) => {
    $http
      .get(payload.url, payload.req)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const validateToken = () => {
  let val = null;

  let storeVal = localStorage.getItem("token");
  if (storeVal !== null) {
    val = JSON.parse(storeVal);
  }
  return val;
};


