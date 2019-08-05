import Request from "../../utils/request";

export const getHomeData = data =>
    Request({
        url: "/api/weapp/home",
        method: "GET",
        data,
        headers: {
            Funky: "Tiger"
        }
    });

export const getProductList = data =>
    Request({
        url: "/product/filter",
        method: "GET",
        data
    });
