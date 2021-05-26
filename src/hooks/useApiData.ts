import { useEffect, useState } from "react";
import { ApiOperation, PathArguments } from "../api/api";

interface ApiDataHook<T> {
    data: T | null;
    isLoading: boolean;
    errorMessage: string | null;
}

function useApiData<T>(apiOperation: ApiOperation<T>, args?: PathArguments, deps: any[] = []): ApiDataHook<T> {
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
    }, [apiOperation, ...deps]);

    return { data, isLoading, errorMessage };
}

export default useApiData;
