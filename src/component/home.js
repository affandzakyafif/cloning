
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Image, TouchableOpacity
} from 'react-native';


class App extends React.Component {
    render() {
        return (
            <View>
                <View style={{ height: 200, width: '100%', backgroundColor: 'black',alignItems:'center' }}>
                    <Text style={{color:'white',fontSize:50}}>Balek.Com</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Food')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3,alignItems:'center',borderRadius:10 }}>
                            <Image source={require('../../sdr/assets/restaurant.png')} style={{ height: '70%', width: '70%'}} />
                            <Text>Go-Food</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Car')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3,alignItems:'center',borderRadius:10 }}>
                            <Image source={require('../../sdr/assets/automobile.png')} style={{height:'70%',width:'70%'}}/>
                            <Text>Go-Car</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Ride')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/motocross.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>Go-Ride</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/help.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>help</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/instagram.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>instagram</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/facebook.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/youtube.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>youtube</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/twitter.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>twitter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/taxi.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>Go-Taxi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/store-infrastructure.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>Go-Mart</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/smartphone.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>Go-Pulsa</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/archive.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>Go-Box</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/home-building-symbol-variant.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/placeholder.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>location</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/user.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>Profil</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
                        <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../../sdr/assets/black-back-closed-envelope-shape.png')} style={{ height: '70%', width: '70%' }} />
                            <Text>messege</Text>
                        </View>
                    </TouchableOpacity>
                </View>



            </View>
        )
    }
}
export default App;
