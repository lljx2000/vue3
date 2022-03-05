/* jshint esversion:6 */
import axios from "axios";

const instance = axios.create({
  bashURL: "http://192.168.101.41:8080",
});

export default instance;
