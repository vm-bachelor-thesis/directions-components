import React from 'react';
import { View, Divider, Text } from '../..';
export var CompletedMessage = function (_a) {
    var _b = _a.message, message = _b === void 0 ? undefined : _b;
    return (<View type="container">
    <Text type="header">Det var allt!</Text>
    <Text type="onGrayBackground" margin="horizontal">
      Nu är undersökningen klar. Stort tack för din medverkan!
    </Text>
    {message && (<>
        <Divider />
        <Text type="onGrayBackground">{JSON.stringify(message)}</Text>
      </>)}
  </View>);
};
//# sourceMappingURL=CompletedMessage.js.map