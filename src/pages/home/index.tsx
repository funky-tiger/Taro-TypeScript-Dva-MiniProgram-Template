import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtButton, AtCalendar } from "taro-ui";
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { HomeProps, HomeState } from "./index.interface";
import styles from "./home.module.less";
// import { } from '../../components'

@connect(({ home }) => ({
    ...home
}))
class Home extends Component<HomeProps, HomeState> {
    config: Config = {
        navigationBarTitleText: "标题"
    };
    constructor(props: HomeProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch({
            type: "home/asyncGetData",
            params: { name: "funky_tiger" }
        });
    }

    render() {
        return (
            <View className={styles.homeMain}>
                HoMe
                <View className={styles.AtCalendarBox}>
                    <AtCalendar
                        marks={[{ value: "2019/08/02" }]}
                        // marks={[{ value: "2018/10/28" }, { value: "2018/10/18" }]}
                    />
                </View>
            </View>
        );
    }
}

export default Home;
