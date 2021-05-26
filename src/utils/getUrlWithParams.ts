import { UrlObject } from "url";
import config, { Endpoint } from "../api/config";
import ParameterError from "../exceptions/ParameterError";
import { PathArguments } from "../api/api";

export default function getUrlWithParams(endpoint: Endpoint, { query, urlArgs }: PathArguments = {}): UrlObject {
    let pathname = `/${config.server.apiRoot}/${endpoint.pathname}`;

    if (urlArgs) {
        for (const [key, value] of Object.entries(urlArgs)) {
            console.log("URL Params: ", key, value);
            pathname = pathname.replace(`:${key}`, value);
        }
    }

    const missedParamIndex = pathname.indexOf(":");
    if (missedParamIndex > -1) {
        throw new ParameterError(`URL argument not specified for parameter "${pathname.substring(missedParamIndex)}"`);
    }

    return {
        ...config.server,
        pathname,
        query,
    };
}
