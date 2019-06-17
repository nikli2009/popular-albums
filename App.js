/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, FlatList
} from 'react-native';
import OrderDetailRow from './src/components/order/OrderDetailRow';
import type { Order } from './src/types/orderTypes';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu'
// });

type State = {
  orderList: Order[]
};

type Props = {};
export default class App extends Component<Props, State> {
  // declare way 1
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     orderList: [
  //       {
  //         id: 'o1000',
  //         no: 10000,
  //         warehouse: undefined
  //       }
  //     ]
  //   };
  // }

  // declare way 2
  state = {
    orderList: [
      {
        key: 'o1000',
        id: 'o1000',
        no: 10000,
        warehouse: undefined
      },
      {
        key: '01001',
        id: 'o1001',
        no: 10001,
        warehouse: undefined
      }
    ]
  };

  // render a child or use a separate component
  renderOrderDetailRow() {
    const { orderList } = this.state;
    return <Text>{orderList[0].no}</Text>;
  }

  render() {
    // const orderChild = this.renderOrderDetailRow();
    const { orderList } = this.state;

    return (
      <View style={styles.container}>
        {/* {orderChild} */}
        {/* <View>
          <OrderDetailRow order={orderList[0]} />
        </View> */}
        <View>
          <Text>{orderList[0].id}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.container}
          data={orderList}
          renderItem={renderOrderItem}
        />
      </View>
    );
  }
}

// _renderOrderItem
const renderOrderItem = ({ item }) => (
  <View>
    <OrderDetailRow order={item} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
