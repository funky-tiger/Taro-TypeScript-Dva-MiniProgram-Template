import * as homeApi from "./apis";

export default {
    namespace: "home",
    state: {
        homeDataList: []
    },
    reducers: {
        saveHomeData(state, { payload }) {
            return {
                ...state,
                homeDataList: state.homeDataList.concat(payload)
            };
        }
    },
    effects: {
        *asyncGetData(action, { call, put }) {
            const { code, data } = yield call(
                homeApi.getHomeData,
                action.params
            );
            if (code === "OK") {
                yield put({
                    type: "saveHomeData",
                    payload: data
                });
            }
        },
        *product(_, { call, put, select }) {
            const { page, homeDataList } = yield select(state => state.home);
            const { status, data } = yield call(homeApi.getProductList, {
                page,
                mode: 1,
                type: 0,
                filter: "sort:recomm|c:330602"
            });
            if (status === "ok") {
                yield put({
                    type: "save",
                    payload: {
                        homeDataList:
                            page > 1
                                ? [...homeDataList, ...data.rows]
                                : data.rows
                    }
                });
            }
        }
    }
};
