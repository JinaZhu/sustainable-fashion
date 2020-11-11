export const DEBUG = process.env.NODE_ENV === "development" ? true : false;
export const PREFIX = DEBUG ? "http://0.0.0.0:8000" : "https://sustainable-fashion.herokuapp.com/";
