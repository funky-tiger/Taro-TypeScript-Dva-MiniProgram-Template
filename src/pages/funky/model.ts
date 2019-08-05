import * as funkyApi from './apis';

export default {
    namespace: 'funky',
    state: {
        funkyDataList: []
    },

    reducers: {
        save(state, { payload }) {
            return { ...state, funkyDataList: [].concat(payload) };
        }
    },
    effects: {
        *effectsDemo(action, { call, put }) {
            const { code, data } = yield call(funkyApi.demo, {});
            if (code === "OK") {
                yield put({
                    type: "save",
                    payload: data
                });
            }
        }
    }
};