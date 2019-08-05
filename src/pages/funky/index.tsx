import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { FunkyProps, FunkyState } from './index.interface'
import styles from './funky.module.less'
// import { } from '../../components'

@connect(({ funky }) => ({
    ...funky
}))
class Funky extends Component<FunkyProps, FunkyState> {
  config: Config = {
      navigationBarTitleText: '标题'
  }
  constructor(props: FunkyProps) {
      super(props)
      this.state = {}
  }

  componentDidMount() {
      const aBdcE = 1
  }

  render() {
      return <View className={styles.funkyMain}>FUNKY</View>
  }
}

export default Funky
