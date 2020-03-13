import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Input, Button, Header } from 'react-native-elements';
import { connect } from "react-redux";
import ListProfile from './ListProfile';
import { onInputAlamat } from '../actions'

class TambahAlamat extends Component {

    onPressSimpan = () => {
        // this.props.addAlamat.listAlamat.push(this.props.alamatForm)
        this.props.navigation.navigate('Profile')
        // console.log(this.props.addAlamat.listAlamat)
    } 

    render(){
        return(
            <ScrollView style={{ backgroundColor: '#fff'}}>
            <Header
                    placement="left"
                    leftComponent={{ 
                        icon: 'arrow-back', 
                        color: 'black',
                        onPress: () => this.props.navigation.goBack() 
                    }}
                    centerComponent={{ 
                        text: 'Tambah Alamat', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    containerStyle={{
                        backgroundColor: '#42bcf5',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
            <View style={{ marginTop: 20, marginHorizontal: 10, flex: 1 }}>
                <View style={{ width: '200%'}}>
                    <ListProfile 
                        name='Jenis Alamat'
                        value={this.props.alamatForm.jenisAlamat}
                        onChangeText={(val) => this.props.onInputAlamat('jenisAlamat', val)}
                        />
                    <ListProfile 
                        name='Nama Penerima' 
                        value={this.props.alamatForm.namaPenerima}
                        onChangeText={(val) => this.props.onInputAlamat('namaPenerima', val)}
                        />
                    <ListProfile 
                        name='Alamat'
                        value={this.props.alamatForm.alamat}
                        onChangeText={(val) => this.props.onInputAlamat('alamat', val)}
                        />
                    <View style={{ width: '50%', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <ListProfile 
                        name='RT' 
                        value={this.props.alamatForm.RT}
                        onChangeText={(val) => this.props.onInputAlamat('RT', val)}
                        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}

                        />
                    <ListProfile 
                        name='RW' 
                        value={this.props.alamatForm.RW}
                        onChangeText={(val) => this.props.onInputAlamat('RW', val)}
                        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}

                        />
                    </View>
                    <ListProfile 
                        name='Kota atau Kecamatan' 
                        value={this.props.alamatForm.kotaKecamatan}
                        onChangeText={(val) => this.props.onInputAlamat('kotaKecamatan', val)}
                        
                        />
                    <ListProfile 
                        name='Kode Pos' 
                        value={this.props.alamatForm.kodePos}
                        onChangeText={(val) => this.props.onInputAlamat('kodePos', val)}
                        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}

                        />
                    <ListProfile 
                        name='No Ponsel' 
                        value={this.props.alamatForm.noPonsel}
                        onChangeText={(val) => this.props.onInputAlamat('noPonsel', val)}
                        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}

                        />
                </View>

                <Button 
                    buttonStyle={{ marginTop: 10, borderRadius: 15, backgroundColor: '#42bcf5'}}
                    title='Simpan'
                    onPress={this.onPressSimpan}
                />
            </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = ({ alamatForm }) => {
    return { alamatForm }
} 

export default connect(mapStateToProps, { onInputAlamat })(TambahAlamat);