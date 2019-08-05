import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Testdemo1Props, Testdemo1State } from "./index.interface";
import styles from "./index.module.less";

class Testdemo1 extends Component<Testdemo1Props, Testdemo1State> {
    constructor(props: Testdemo1Props) {
        super(props);
        this.state = {};
    }
    static defaultProps: Testdemo1Props = {};

    render() {
        return <View className={styles.testdemo1Main}>组件-TESTDEMO1</View>;
    }
}

export default Testdemo1;
