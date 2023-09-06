
import axios from "axios";
import {BaseUrl} from "./constants/Constants"


const instance = axios.create({
    baseURL: BaseUrl,
  });


  export  default  instance