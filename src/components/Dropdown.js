import React from 'react';
import { View } from 'react-native';
import { Form, Picker, Item, Label, Input, Icon} from "native-base";


const Dropdown=({ name, value, onValueChange, label1, label2, value1, value2 })=>{

    // renderPickerItem = (label) => {

    //     return label.map((x, y) => <Picker.Item label={x} value={y} />
    //     )

    // }
    return(
        <View style={{ width: '44%', marginVertical: 10, alignSelf: 'center', marginLeft: 10}}>
            <Form >
                    <Label style={{ fontSize: 12, marginBottom: -10, marginLeft: 5}}>{name}</Label>
                <Item picker style={{ borderBottomWidth: 0.8, borderBottomColor: 'black'}}>
                    <Picker
                        mode='dropdown'
                        style={{ marginBottom: -10, paddingLeft: -50}}
                        placeholder={name}
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        iosIcon={<Icon name="arrow-down" />}
                        selectedValue={value}
                        onValueChange={onValueChange}
                        textStyle={{ paddingRight: -10, marginRight: -10}}
                        itemStyle={{ paddingRight: -10, marginRight: -10}}
        
                        
                    >
                        <Picker.Item label={label1} value={value1} />
                        <Picker.Item label={label2} value={value2} />

                    </Picker>

                </Item>
            </Form>
        </View>
    )
}


export default Dropdown;