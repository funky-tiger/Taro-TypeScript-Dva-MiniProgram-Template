import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtButton } from "taro-ui";
import { TigerProps, TigerState } from "./index.interface";
import TestHeader from "../../components/TestHeader/index";
import Testdemo from "../../components/testdemo/index";
import styles from "./tiger.module.less";
// import { } from '../../components'

@connect(({ tiger }) => ({
    ...tiger
}))
class Tiger extends Component<TigerProps, TigerState> {
    config: Config = {
        navigationBarTitleText: "标题"
    };
    constructor(props: TigerProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <View className={styles.tigerMain}>
                两只 TIGER,两只 TIGER,跑得快～跑得快～
                <AtButton
                    type='secondary'
                    onClick={() => {
                        Taro.navigateBack({ delta: 2 });
                    }}
                >
                    跳转页面 - redirectTo
                </AtButton>
                <TestHeader />
                <Testdemo />
            </View>
        );
    }
}

export default Tiger;
