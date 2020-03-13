import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Form, Card, CardItem, Text } from "native-base";


export default CardAlamat = ({ data }) => {
    return(
        <View style={{ width: '90%', alignItems: 'center' }}>
            <Card style={{ alignItems: 'flex-start', elevation: 0, borderWidth: 0, backgroundColor: '#fff', borderColor: '#fff', borderWidth: 0}}>
                <CardItem style={{ flexDirection: 'row'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16}}>{data.jenisAlamat}</Text>
                </CardItem>
                <CardItem>
                    <Text>{data.namaPenerima}</Text>
                </CardItem>
                <CardItem style={{ marginTop: -10}}>
                    <Text style={{ marginTop: -15, fontSize: 12}}>{data.alamat}, RT {data.RT} RW {data.RW}</Text>
                </CardItem>
                <CardItem style={{ marginTop: -10}}>
                    <Text style={{ marginTop: -15, fontSize: 12}}>{data.kotaKecamatan}, {data.kodePos}</Text>
                </CardItem>
                <CardItem style={{ marginTop: -10}}>
                    <Text style={{ marginTop: -15, fontSize: 12}}>{data.noPonsel}</Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center'}}>
                    <Button
                        style={{ marginTop: -20}}
                        buttonStyle={{ alignItems: 'center', marginTop: -20}}
                        titleStyle={{ fontSize: 12}}
                        title="Ubah Alamat"
                    />
                </CardItem>
            </Card>            
            
        </View>
    )
}


