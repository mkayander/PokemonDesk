import Url from "url";
import getUrlWithParams from "../utils/getUrlWithParams";
import config, { ApiEndpoints, ReturnTypeOfEndpoint } from "./config";
import { RequestArguments } from "./api";
import HttpError from "../exceptions/HttpError";
import ParameterError from "../exceptions/ParameterError";

async function request<K extends keyof ApiEndpoints>(
    endpointKey: K,
    args?: RequestArguments
): Promise<ReturnTypeOfEndpoint<K>> {
    const endpoint = config.endpoints[endpointKey];

    const urlObject = getUrlWithParams(endpoint, args);

    const fetchOptions: RequestInit = {
        method: endpoint.method,
    };

    // This should theoretically work faster than Array.includes()
    switch (endpoint.method) {
        // case "HEAD":
        // case "OPTIONS":
        // case "TRACE":
        // case "DELETE":
        case "GET": {
            if (args?.body) {
                // These methods are not allowed to have body
                console.error("Invalid request parameters: ", endpoint, args);
                throw new ParameterError(`${endpoint.method} HTTP method is not allowed to have body in the request!`);
            }
            break;
        }

        default: {
            // The rest of the HTTP methods are allowed to have body
            const body = args?.body ?? {};
            if (Object.keys(body).length > 0) {
                fetchOptions.body = JSON.stringify(body);
                // @ts-ignore: TS2367
            } else if (endpoint.method !== "GET") {
                throw new ParameterError(`Body should not be empty for ${endpoint.method} HTTP method!`);
            }
        }
    }

    const response = await fetch(Url.format(urlObject), fetchOptions);

    const data = await response.json();

    if (!response.ok) throw new HttpError(response.status, `${response.statusText};\n{data}`);

    return data;
}

export default request;
