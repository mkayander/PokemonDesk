class ParameterError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ParameterError"
    }
}

export default ParameterError