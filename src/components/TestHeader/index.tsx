import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { TestHeaderProps, TestHeaderState } from "./index.interface";
import styles from "./TestHeader.module.less";

class TestHeader extends Component<TestHeaderProps, TestHeaderState> {
    config: Config = {
        navigationBarTitleText: "标题"
    };
    constructor(props: TestHeaderProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <View className={styles.TestHeaderMain}>
                Test-Header \ 测试组件-component
            </View>
        );
    }
}
export default TestHeader;
