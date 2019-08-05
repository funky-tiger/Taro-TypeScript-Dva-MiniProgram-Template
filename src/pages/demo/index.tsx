import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtButton, AtTag } from "taro-ui";
import { DemoProps, DemoState } from "./index.interface";
import styles from "./demo.module.less";
// import { } from '../../components'

@connect(({ demo }) => ({
    ...demo
}))
class Demo extends Component<DemoProps, DemoState> {
    config: Config = {
        navigationBarTitleText: "标题"
    };
    constructor(props: DemoProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <View className={styles.demoMain}>
                路由跳转DEMO页
                <View>
                    当前页面栈
                    <AtTag type='small' circle>
                        {Taro.getCurrentPages().length}
                    </AtTag>
                </View>
                <View style={{ width: "100%", height: "30px" }} />
                <AtButton
                    type='secondary'
                    onClick={() => {
                        Taro.navigateTo({
                            url: "/pages/tiger/index?params=xxx"
                        });
                    }}
                >
                    跳转页面 - navigateTo
                </AtButton>
                {/* 保留当前页面，跳转到应用内的某个页面，调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，使用wx.navigateBack可以返回到上一级页面。navigateTo 超过8次之后 强行进行redirectTo 否则会造成页面卡死  */}
                <View style={{ width: "100%", height: "30px" }} />
                <AtButton
                    type='secondary'
                    onClick={() => {
                        Taro.redirectTo({
                            url: "/pages/tiger/index?params=xxx"
                        });
                    }}
                >
                    跳转页面 - redirectTo
                    {/* 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。 */}
                </AtButton>
                <View style={{ width: "100%", height: "30px" }} />
                <AtButton
                    type='secondary'
                    onClick={() => {
                        Taro.navigateBack({ delta: 1 });
                    }}
                >
                    跳转页面 - navigateBack
                    {/* 关闭当前页面，返回上一页面或多级页面。可通过 Taro.getCurrentPages() 获取当前的页面栈，决定需要返回几层。 */}
                </AtButton>
                <View style={{ width: "100%", height: "30px" }} />
                <AtButton
                    type='secondary'
                    onClick={() => {
                        Taro.switchTab({ url: "/pages/user/index" });
                    }}
                >
                    跳转页面 - switchTab
                    {/* 跳转到tabBar选中的页面，同时关闭其他非tabBar页面。 */}
                </AtButton>
                <View style={{ width: "100%", height: "30px" }} />
                <AtButton
                    type='secondary'
                    onClick={() => {
                        Taro.reLaunch({ url: "/pages/tiger/index" });
                    }}
                >
                    跳转页面 - reLaunch
                    {/* 关闭所有页面，打开到应用内的某个页面 */}
                </AtButton>
                <View style={{ width: "100%", height: "30px" }} />
                <AtButton
                    type='secondary'
                    onClick={() => {
                        Taro.navigateTo({
                            url: "/pages/funky/index?params=xxx"
                        });
                    }}
                >
                    跳转新页面 - navigateToFunky
                </AtButton>
            </View>
        );
    }
}
export default Demo;
