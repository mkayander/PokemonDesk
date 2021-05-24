import Url from "url";
import getUrl from "../utils/getUrl";
import { Endpoint } from "./config";

function request(endpoint: Endpoint) {
    const uri = Url.format(getUrl(endpoint));

    return fetch(uri).then(response => response.json());
}

export default request;
