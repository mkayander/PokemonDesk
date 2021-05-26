import Url from "url";
import getUrlWithParams from "../utils/getUrlWithParams";
import { Endpoint } from "./config";
import { PathArguments } from "./api";

function request(endpoint: Endpoint, args?: PathArguments) {
    const uri = Url.format(getUrlWithParams(endpoint, args));

    return fetch(uri).then(response => response.json());
}

export default request;
