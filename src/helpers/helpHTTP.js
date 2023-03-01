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

        setTimeout(() => { controller.abort() }, 3000);

        return fetch(endpoint, options)
            .then((response) => response.ok ?
                response.json()
                : Promise.reject(
                    {
                        error: true,
                        status: response.status || "00",
                        statusText: response.statusText || "Ups!, ¡Ocurrio un error inesperado!",
                    }
                ))
            .catch((error) => error);

    }

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetct(url, options);
    }
    const put = () => {
        options.method = "PUT";
        return customFetct(url, options);
    }
    const del = () => {
        options.method = "DELETE";
        return customFetct(url, options);
    }

    return {
        get,
        post,
        put,
        del
    };
}
