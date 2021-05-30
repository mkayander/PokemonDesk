class HttpError extends Error {
    constructor(code: number, message: string) {
        super(message);
        this.code = code;
        this.name = "HttpError";
    }

    code: number;
}

export default HttpError;