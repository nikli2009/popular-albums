// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import type { Order } from '../../types/orderTypes';

type Props = {
  order: Order
};

class AlbumDetail extends Component<Props> {
  render() {
    const { order } = this.props;

    return (
      <View>
        <Text>{order.id}</Text>
        <Text>{order.no}</Text>
      </View>
    );
  }
}

export default AlbumDetail;
