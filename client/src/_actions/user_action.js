import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_COMPANY,
  AUTH_USER,
  ADD_SPOT,
} from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function company(dataToSubmit) {
  const request = axios
    .post("/api/companies/addcompany", dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_COMPANY,
    payload: request,
  };
}

export function addspot(dataToSubmit) {
  const request = axios
    .post("/api/spots/spot", dataToSubmit)
    .then((response) => response.data);

  return {
    type: ADD_SPOT,
    payload: request,
  };
}
