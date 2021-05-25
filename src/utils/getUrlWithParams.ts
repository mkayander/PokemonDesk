import { UrlObject } from "url";
import config, { Endpoint } from "../api/config";

export default function getUrlWithParams(endpoint: Endpoint, query?: {}, urlArgs?: Record<string, string>): UrlObject {
    let pathname = `/${config.server.apiRoot}/${endpoint.pathname}`
    if (urlArgs) {
        for (const [key, value] of Object.entries(urlArgs)) {
            console.log("Params");
            pathname = pathname.replace(`:${key}`, value)
        }
    }

    return {
        ...config.server,
        pathname,
        query,
    };
}
