import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { View, Text, Divider, ActionSheetInput } from '../..';
import { FormRow } from '../FormRow/FormRow';
import { questions } from './questions';
export var SUSQuestionnaire = function (_a) {
    var callback = _a.callback;
    var _b = useState(), q1 = _b[0], setQ1 = _b[1];
    var _c = useState(), q2 = _c[0], setQ2 = _c[1];
    var _d = useState(), q3 = _d[0], setQ3 = _d[1];
    var _e = useState(), q4 = _e[0], setQ4 = _e[1];
    var _f = useState(), q5 = _f[0], setQ5 = _f[1];
    var _g = useState(), q6 = _g[0], setQ6 = _g[1];
    var _h = useState(), q7 = _h[0], setQ7 = _h[1];
    var _j = useState(), q8 = _j[0], setQ8 = _j[1];
    var _k = useState(), q9 = _k[0], setQ9 = _k[1];
    var _l = useState(), q10 = _l[0], setQ10 = _l[1];
    var setters = [
        setQ1,
        setQ2,
        setQ3,
        setQ4,
        setQ5,
        setQ6,
        setQ7,
        setQ8,
        setQ9,
        setQ10,
    ];
    var _m = useState(false), allowSubmit = _m[0], setAllowSubmit = _m[1];
    var questionComponents = questions.map(function (question, index) { return (<React.Fragment key={index}>
        <FormRow title={question} wideTitle={true} inputComponent={<ActionSheetInput title={question} placeholder="3" textAlign="right" options={[
        '5 Instämmer helt',
        '4',
        '3',
        '2',
        '1 Instämmer inte alls',
    ]} values={['5', '4', '3', '2', '1']} onValueChange={setters[index]}/>}/>
        <Divider />
      </React.Fragment>); });
    var handleSubmitButtonPress = function () {
        if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
            var susResponse = {
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                q6: q6,
                q7: q7,
                q8: q8,
                q9: q9,
                q10: q10,
            };
            callback(susResponse);
        }
    };
    useEffect(function () {
        var hasAllData = q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 ? true : false;
        setAllowSubmit(hasAllData);
    }, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]);
    return (<View type="container">
      <Text type="header">System Usability Scale</Text>

      <Text type="onGrayBackground" margin="bottom+horizontal">
        Dessa frågor används för att mäta en användares upplevelse av en teknisk
        produkt.
      </Text>

      <View padding="horizontal" borderTopBottom={true}>
        {questionComponents}
      </View>
      <Button title="Nästa" disabled={!allowSubmit} onPress={handleSubmitButtonPress}/>
    </View>);
};
//# sourceMappingURL=SUSQuestionnaire.js.map