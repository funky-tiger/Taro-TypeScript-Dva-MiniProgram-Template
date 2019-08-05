import Request from "../../utils/request";

export const demo = data =>
    Request({
        url: "/api/demo",
        method: "GET",
        data
    });
export const getHomeData = data =>
    Request({
        url: "/api/weapp/home",
        method: "GET",
        data,
        headers: {
            Funky: "Tiger"
        }
    });
