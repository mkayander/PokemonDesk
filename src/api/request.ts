import Url from "url";
import getUrlWithParams from "../utils/getUrlWithParams";
import { Endpoint } from "./config";

function request(endpoint: Endpoint, params?: {}) {
    const uri = Url.format(getUrlWithParams(endpoint, params));

    return fetch(uri).then(response => response.json());
}

export default request;
