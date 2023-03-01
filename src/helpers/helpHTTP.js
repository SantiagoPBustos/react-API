export const HelperHTTP = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers ? {
            ...defaultHeader,
            ...options.headers
        } : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body

        console.log(options);
        setTimeout(() => { controller.abort() }, 2000);

        return fetch(endpoint, options)
            .then((response) => response.ok ? response.json() : Promise.reject({}))
            .catch((error) => error);

    }

    const get = () => { }
    const post = () => { }
    const put = () => { }
    const del = () => { }

    return {
        get,
        post,
        put,
        del
    };
}
