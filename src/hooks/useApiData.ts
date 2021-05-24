import { useEffect, useState } from "react";

interface ApiDataHook<T> {
    data: T | null;
    isLoading: boolean;
    errorMessage: string | null;
}

function useApiData<T>(apiOperation: () => Promise<T>): ApiDataHook<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        console.log(apiOperation);
        apiOperation()
            .then(result => {
                setData(result);
                setErrorMessage(null);
            })
            .catch(reason => setErrorMessage(reason.message))
            .finally(() => setIsLoading(false));
    }, [apiOperation]);

    return { data, isLoading, errorMessage };
}

export default useApiData;
