import * as userApi from "./apis";

export default {
    namespace: "user",
    state: {
        userDataList: []
    },

    reducers: {
        save(state, { payload }) {
            return { ...state, userDataList: [].concat(payload) };
        }
    },
    effects: {
        *effectsDemo(action, { call, put }) {
            const { code, data } = yield call(
                userApi.getHomeData,
                action.params
            );
            if (code === "OK") {
                yield put({
                    type: "save",
                    payload: data
                });
            }
        }
    }
};
