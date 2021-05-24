import { UrlObject } from "url";
import config, { Endpoint } from "../api/config";

export default function getUrlWithParams(endpoint: Endpoint, params?: {}): UrlObject {
    return {
        ...config.server,
        pathname: `/${config.server.apiRoot}/${endpoint.pathname}`,
        query: params,
    };
}
