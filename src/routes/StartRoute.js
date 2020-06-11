import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//
import { Login } from "../containers";

export default function MainRoute() {
  const { isLogged, expirationTime } = useSelector((state) => state.auth);
  const tokenExpired = new Date().getTime() > expirationTime
  return (isLogged && !tokenExpired) ? <Redirect to="/dashboard" /> : <Login />;
};