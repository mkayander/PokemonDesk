import { UrlObject } from "url";
import config, { Endpoint } from "../api/config";
import ParameterError from "../exceptions/ParameterError";
import { RequestArguments } from "../api/api";

export default function getUrlWithParams(endpoint: Endpoint, { query, urlArgs }: RequestArguments = {}): UrlObject {
    let pathname = `/${config.server.apiRoot}/${endpoint.pathname}`;

    if (urlArgs) {
        for (const [key, value] of Object.entries(urlArgs)) {
            pathname = pathname.replace(`:${key}`, value);
        }
    }

    const missedParamIndex = pathname.indexOf(":");
    if (missedParamIndex > -1) {
        throw new ParameterError(`URL argument not specified for parameter "${pathname.substring(missedParamIndex)}"`);
    }

    if (query && endpoint.method !== "GET") {
        console.error("## Vars for exception debug - endpoint, query, urlArgs: ", endpoint, query, urlArgs);
        throw new ParameterError(`GET query parameters specified for the ${endpoint.method} endpoint!`);
    }

    return {
        protocol: config.server.protocol,
        hostname: config.server.hostname,
        pathname,
        query,
    };
}
