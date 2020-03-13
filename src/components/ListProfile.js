import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { Form, Item, Label } from "native-base";


const ListProfile=({ name, value, onChangeText, leftIcon, keyboardType }) => {
    return(
        <View style={{ width: '47%' }}>
            <Form>
                {/* <Item floatingLabel > */}
                    <Label style={{ fontSize: 12, marginBottom: -10, marginLeft: 10}}>{name}</Label>
                    <Input
                        value={value}
                        onChangeText={onChangeText}
                        fontSize={4}
                        inputStyle={{ fontSize: 16, marginBottom: -10}}
                        leftIcon={leftIcon}
                        keyboardType={keyboardType}
                        
                    />
                {/* </Item> */}
            </Form>
            
        </View>
    )
}


export default ListProfile;