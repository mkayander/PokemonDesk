import config, { Endpoint } from "../api/config";

export default function getUrl(endpoint: Endpoint) {
    return {
        ...config.server,
        pathname: `/${config.server.apiRoot}/${endpoint.pathname}`,
    };
}
