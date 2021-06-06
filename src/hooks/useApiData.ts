import { useEffect, useState } from "react";
import { ApiOperation, RequestArguments } from "../api/api";

export interface ApiData<T> {
    data: T | null | undefined;
    isLoading: boolean;
    errorMessage: string | null;
}

function useApiData<T>(apiOperation: ApiOperation<T>, args?: RequestArguments, deps: any[] = []): ApiData<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    if (errorMessage) console.error("API Error! \n", errorMessage);

    useEffect(() => {
        console.log(apiOperation);
        apiOperation(args)
            .then(result => {
                setData(result);
                setErrorMessage(null);
            })
            .catch(reason => setErrorMessage(reason.message))
            .finally(() => setIsLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiOperation, ...deps]);

    return { data, isLoading, errorMessage };
}

export default useApiData;
