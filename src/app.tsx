import Taro from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import "@tarojs/async-await";
import "taro-ui/dist/style/index.scss";
import Home from "./pages/home/index";
import dva from "./utils/dva";
import models from "./models/index";
import "./app.less";

const dvaApp = dva.createApp({
    initialState: {},
    models: models
});

const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5") {
//   console.log("NODE_ENV:", process.env.NODE_ENV);
//   require("nerv-devtools");
// }

class App extends Taro.Component {
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Taro.Config = {
        pages: [
            "pages/home/index",
            "pages/demo/index",
            "pages/funky/index",
            "pages/tiger/index",
            "pages/user/index"
        ],
        window: {
            backgroundTextStyle: "light",
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: "WeChat",
            navigationBarTextStyle: "black"
        },
        tabBar: {
            list: [
                {
                    pagePath: "pages/home/index",
                    text: "HoMe"
                    // iconPath: './images/tab/home.png',
                    // selectedIconPath: './images/tab/home-active.png',
                },
                {
                    pagePath: "pages/demo/index",
                    text: "DeMo"
                    // iconPath: './images/tab/cart.png',
                    // selectedIconPath: './images/tab/cart-active.png',
                },
                {
                    pagePath: "pages/user/index",
                    text: "UsEr"
                    // iconPath: './images/tab/user.png',
                    // selectedIconPath: './images/tab/user-active.png',
                }
            ],
            color: "#fff",
            selectedColor: "#333",
            backgroundColor: "black",
            borderStyle: "white"
        }
    };

    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById("app"));
