import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { TestdemoProps, TestdemoState } from "./index.interface";
import styles from "./index.module.less";

class Testdemo extends Component<TestdemoProps, TestdemoState> {
    constructor(props: TestdemoProps) {
        super(props);
        this.state = {};
    }
    static defaultProps: TestdemoProps = {};

    render() {
        return <View className={styles.testdemoMain}>组件-TESTDEMO</View>;
    }
}

export default Testdemo;
