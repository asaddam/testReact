import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Text, Divider, Input, Icon, Button, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import ListProfile from './ListProfile';
import Dropdown from './Dropdown';
import CardAlamat from './CardAlamat';
import { onSimpanAlamat, onHapusAlamat } from "../actions";
import { Card } from 'native-base';

class Profile extends Component {

    state = {
        nama: '',
        gender: '',
        tempatlahir: '',
        tanggalLahir: '',
        nikah: '',
        agama: '',
        kwn: '',
        pendidikan: '',
        hp: '',
        email: '',
        persenprofile:0,
        radioBtnsData: ['Item1', 'Item2'],
        checked: 0
    }


    onBtnAlamatBaru = () => {
        this.props.onHapusAlamat()
        this.props.navigation.navigate('TambahAlamat')
    }

    renderCardAlamat = (data) => {
        if(data.jenisAlamat !== ''){
            return <CardAlamat data={data} />
        } else {
            return null
        }
    }

    renderAlamatUtama = (data) => {
        if(data.jenisAlamat !== ''){
            return <TouchableOpacity style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <View style={{ width: '50%', marginRight: -40 }}>
                            {this.renderCardAlamat(this.props.alamatForm)}
                        </View>
                        <Button 
                            title="Utama"
                            buttonStyle={styles.buttonStyle}
                            titleStyle={{ color: 'black', fontSize: 12, textAlign: 'center'}}
                            containerStyle={{ marginLeft: -15, width: '30%', marginTop: 10}}
                        />
                        <Icon 
                            name='radiobox-marked' 
                            type="material-community"
                            containerStyle={{ marginTop: 80, alignItems: 'flex-end'}}
                            />
                    </TouchableOpacity>
        }
    }

    renderAlamattambahan = (data, key) => {
        if(data.jenisAlamat !== ''){
           return <TouchableOpacity onPress={()=>{this.setState({checked: key})}} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={{ width: '50%', marginRight: -40 }}>
                    {this.renderCardAlamat(this.props.alamatForm)}
                </View> 
                <Text style={{ marginLeft: -15, width: '30%', marginTop: 10}}></Text>                                
                   <Icon 
                    name="radiobox-blank" 
                    type="material-community"
                    containerStyle={{ marginTop: 80, alignItems: 'flex-end'}}
                        />
            </TouchableOpacity>
        }
    }
 
    // rendertambahAlamat = (data, index) => {
    //     if(data){
    //         this.renderCardAlamat()
    //     }else if(data[index]){
    //         return <CardAlamat data={data} />
    //     }
    // }

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
                        text: 'Akun Saya', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    containerStyle={{
                        backgroundColor: '#42bcf5',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
                {/* <Text h2 style={{ marginVertical: 20}}>Akun Saya</Text> */}
                <Text style={styles.menuStyle}>Pribadi</Text>
            <View style={styles.containerStyle}>
                <Divider />
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Kelengkapan profil 40% </Text>
                <Text style={{ marginTop: 5 }}>Nama User</Text>
                <Divider />
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Icon
                    name='account-circle'
                    type='material'
                    size={70}
                    containerStyle={{
                        borderWidth:2,
                        borderColor:'blue',
                        borderRadius:45,
                        width:75,
                        height:75,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderStyle: 'dashed',
                        backgroundColor: '#fff'
                    }}
                    
                />
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap", paddingTop: 10, alignItems: 'center'}}>
                    <ListProfile 
                        name='Nama Lengkap' 
                        value={(this.state.nama, this.state.persenprofile)}
                        onChangeText={(val, tes) => this.setState({ nama: val, persenprofile: parseInt(tes+1)})}
                        />
                    <Dropdown 
                        name='Jenis Kelamin' 
                        value={this.state.gender}
                        onValueChange={(val) => this.setState({ gender: val, persenprofile: +1})} 
                        label1='Laki-laki' 
                        label2='Perempuan' />
                    <ListProfile 
                        name='Tempat Lahir' 
                        value={this.state.tempatlahir}
                        onChangeText={(val) => this.setState({ tempatlahir: val, persenprofile: +1})}
                    />
                    <ListProfile 
                        name='Tanggal lahir' 
                        leftIcon={<Icon 
                                        name='calendar-month'
                                        type='material-community'
                                        size={24}
                                        style={{ marginBottom: -10, paddingBottom: -10}} 
                                        iconStyle={{ marginBottom: -15, marginLeft: -12}} 
                                        />}
                        value={this.state.tanggalLahir}
                        onChangeText={(val) => this.setState({ tanggalLahir: val, persenprofile: +1})}
                    />
                    <Dropdown 
                        name='Status Pernikahan'
                        value={this.state.nikah}
                        onValueChange={(val) => this.setState({ nikah: val, persenprofile: +1})} 
                        label1='Menikah' 
                        label2='Belum Menikah' />
                    <ListProfile 
                        name='Agama'
                        value={this.state.agama}
                        onChangeText={(val) => this.setState({ agama: val, persenprofile: +1})} />
                    <Dropdown 
                        name='Kewarganegaraan'
                        value={this.state.kwn}
                        onValueChange={(val) => this.setState({ kwn: val, persenprofile: +1})}  
                        label1='Indonesia' 
                        label2='Asing' />
                    <ListProfile 
                        name='Pendidikan' 
                        value={this.state.pendidikan}
                        onChangeText={(val) => this.setState({ pendidikan: val, persenprofile: +1})}/>
                </View>
                <Text>Kontak</Text>
                <Divider />
                <View style={{ flexDirection: "row", flexWrap: "wrap", paddingTop: 10, }}>
                    <ListProfile 
                        name='Handphone'
                        value={this.state.hp}
                        onChangeText={(val) => this.setState({ hp: val, persenprofile: +1})}
                        />
                    <ListProfile 
                        name='Email'
                        value={this.state.email}
                        onChangeText={(val) => this.setState({ email: val, persenprofile: +1})}
                        />
                </View>
                <Text style={{ marginTop: 5}}>Alamat</Text>
                <Divider />
                <View style={{ alignItems: 'flex-start' }}>
                    <Button 
                        title='Tambah Alamat Baru'
                        buttonStyle={styles.buttonStyle}
                        containerStyle={{ alignItems: 'center', alignContent: 'center', paddingRight: 10 }}
                        titleStyle={{ color: 'black', fontSize: 12, textAlign: 'center', paddingRight: 20 }}
                        onPress={this.onBtnAlamatBaru}
                    />

                </View>
                <View style={{ alignItems: 'center'}}>
                    {/* {this.renderCardAlamat(this.props.alamatForm)}
                    {this.renderCardAlamat(this.props.alamatForm)} */}

                </View>
                <Card>
                {this.state.radioBtnsData.map((data, key) => {
                    return (
                        <View key={key}>
                            {this.state.checked == key ?
                                this.renderAlamatUtama(this.props.alamatForm)
                                :
                                this.renderAlamattambahan(this.props.alamatForm, key)
                            }
                        </View>
                    )
                })}
                </Card>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        marginLeft: 10
    },
    buttonStyle: {
        marginTop: 10, 
        marginLeft: 10, 
        borderRadius: 10, 
        height: 12, 
        width: '50%', 
        alignItems: 'center', 
        paddingRight: 10, 
        backgroundColor: '#42bcf5'
    },
    menuStyle: {
        marginTop: 10, 
        marginLeft: 5, 
        fontWeight: 'bold', 
        fontSize: 18, 
        borderBottomColor: '#42bcf5', 
        borderBottomWidth: 1
    }
})

const mapStateToProps = ({ alamatForm }) => {
    return { alamatForm }
}

export default connect(mapStateToProps, { onHapusAlamat}) (Profile);