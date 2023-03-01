export const HelperHTTP = () => {
    const customFetch = (endpoint, options) =>{
        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;
    }

    const get = () =>{}
    const post = () =>{}
    const put = () =>{}
    const del = () =>{}

    return{
        get,
        post,
        put,
        del
    };
}
