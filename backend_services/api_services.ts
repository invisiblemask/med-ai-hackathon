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

export const update = (payload: any) => {

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


