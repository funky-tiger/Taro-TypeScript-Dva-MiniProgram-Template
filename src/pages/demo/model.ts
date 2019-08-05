import * as demoApi from "./apis";

export default {
    namespace: "demo",
    state: {},

    reducers: {
        save(state, { payload }) {
            return { ...state, userDataList: [].concat(payload) };
        }
    },
    effects: {
        *effectsDemo(action, { call, put }) {
            const { status, data } = yield call(demoApi.demo, {});
            if (status === "OK") {
                yield put({
                    type: "save",
                    payload: {
                        topData: data
                    }
                });
            }
        }
    }
};
