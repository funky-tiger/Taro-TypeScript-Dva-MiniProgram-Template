import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { UserProps, UserState } from "./index.interface";
import styles from "./user.module.less";
// import { } from '../../components'

@connect(({ user }) => ({
    ...user
}))
class User extends Component<UserProps, UserState> {
  config: Config = {
      navigationBarTitleText: "标题"
  };
  constructor(props: UserProps) {
      super(props);
      this.state = {};
  }

  componentDidMount() {
      this.props.dispatch({ type: "user/effectsDemo" });
  }

  render() {
      const { userDataList } = this.props;
      return (
          <View className={styles.userMain}>
              <View className={styles.title}>USER</View>

              {userDataList.map((item: { name: string; age: number }) => {
                  return <View key={item.name}>{item.name}</View>;
              })}
          </View>
      );
  }
}

export default User;
