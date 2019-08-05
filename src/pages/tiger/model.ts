import * as tigerApi from "./apis";

export default {
    namespace: "tiger",
    state: {
        tigerDataList: []
    },

    reducers: {
        save(state, { payload }) {
            return { ...state, tigerDataList: [].concat(payload) };
        }
    },
    effects: {
        *effectsDemo(action, { call, put }) {
            const { code, data } = yield call(tigerApi.demo, {});
            if (code === "OK") {
                yield put({
                    type: "save",
                    payload: data
                });
            }
        }
    }
};
