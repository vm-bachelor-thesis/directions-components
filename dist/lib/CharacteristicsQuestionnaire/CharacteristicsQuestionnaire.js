import React, { useState, useEffect } from 'react';
import { Button, Switch } from 'react-native';
import { View, Text, Divider, TextInput, ActionSheetInput } from '..';
import { FormRow } from '../FormRow/FormRow';
export var CharacteristicsQuestionnaire = function (_a) {
    var callback = _a.callback;
    var _b = useState(), age = _b[0], setAge = _b[1];
    var _c = useState(), gender = _c[0], setGender = _c[1];
    var _d = useState(), smartphoneExperience = _d[0], setSmartphoneExperience = _d[1];
    var _e = useState(), areaExperience = _e[0], setAreaExperience = _e[1];
    var _f = useState(), speechControlExperience = _f[0], setSpeechControlExperience = _f[1];
    var _g = useState(), speechControlType = _g[0], setSpeechControlType = _g[1];
    var _h = useState(false), consent = _h[0], setConsent = _h[1];
    var _j = useState(false), allowSubmit = _j[0], setAllowSubmit = _j[1];
    var handleSubmitButtonPress = function () {
        if (age &&
            gender &&
            smartphoneExperience &&
            areaExperience &&
            speechControlExperience) {
            var personalDetails = {
                age: age,
                gender: gender,
                smartphoneExperience: smartphoneExperience,
                areaExperience: areaExperience,
                speechControlExperience: speechControlExperience,
                speechControlType: speechControlType,
            };
            callback(personalDetails);
        }
    };
    useEffect(function () {
        var hasAllData = age &&
            gender &&
            smartphoneExperience &&
            areaExperience &&
            speechControlExperience &&
            consent
            ? true
            : false;
        setAllowSubmit(hasAllData);
    }, [
        age,
        gender,
        smartphoneExperience,
        areaExperience,
        speechControlExperience,
        consent,
    ]);
    return (<View type="container">
      <Text type="header">Personliga uppgifter</Text>

      <Text type="onGrayBackground" margin="bottom+horizontal">
        Dessa uppgifter samlas in för att säkerställa att vi får en varierad
        grupp personer som besvarar undersökningen.
      </Text>

      <View padding="horizontal" borderTopBottom={true}>
        <FormRow title="Ålder" inputComponent={<TextInput placeholder="35" keyboardType="number-pad" onChangeText={setAge}/>}/>
        <Divider />
        <FormRow title="Kön" inputComponent={<ActionSheetInput title="Vilket kön identifierar du dig med?" placeholder="Kvinna" options={['Kvinna', 'Man', 'Annat', 'Vill ej uppge']} onValueChange={setGender}/>}/>
        <Divider />
        <FormRow title="Använder mobiltelefon" inputComponent={<ActionSheetInput title="Hur ofta använder du mobiltelefon?" placeholder="Minst en gång i veckan" options={[
        'Varje dag',
        'Flera gånger i veckan',
        'Minst en gång i veckan',
        'Minst en gång i månaden',
        'Mer sällan',
    ]} onValueChange={setSmartphoneExperience}/>}/>
        <Divider />
        <FormRow title="Är i närområdet" inputComponent={<ActionSheetInput title="Hur ofta är du i närområdet?" placeholder="Minst en gång i veckan" options={[
        'Varje dag',
        'Flera gånger i veckan',
        'Minst en gång i veckan',
        'Minst en gång i månaden',
        'Mer sällan',
    ]} onValueChange={setAreaExperience}/>}/>
        <Divider />
        <FormRow title="Använder röststyrning" inputComponent={<ActionSheetInput title="Hur ofta använder du röststyrning?" placeholder="Minst en gång i veckan" options={[
        'Varje dag',
        'Flera gånger i veckan',
        'Minst en gång i veckan',
        'Minst en gång i månaden',
        'Mer sällan',
    ]} onValueChange={setSpeechControlExperience}/>}/>
        <Divider />
        <FormRow title="Om ja, typ av röststyrning" inputComponent={<TextInput placeholder="Siri, Google Home" onChangeText={setSpeechControlType}/>}/>
        <Divider />
        <FormRow title="Jag godkänner att mina uppgifter lagras och bearbetas för användning i studien." wideTitle={true} inputComponent={<Switch value={consent} onValueChange={function () { return setConsent(!consent); }}/>}/>
      </View>
      <Button title="Nästa" disabled={!allowSubmit} onPress={handleSubmitButtonPress}/>
    </View>);
};
//# sourceMappingURL=CharacteristicsQuestionnaire.js.map