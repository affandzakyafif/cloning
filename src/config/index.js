import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../component/home'
import Profil from '../component/profil'
import Food from '../component/food'
import Car from '../component/car'
import Ride from '../component/ride'

const App = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions :{
            header:null
        }
    },
    Profil:{
        screen:Profil,
        navigationOptions :{
            title:'Profil'
        }
    },Food:{
        screen:Food,
        navigationOptions:{
            title:'Food'
        }
    },
    Car:{
        screen:Car,
        navigationOptions:{
            title:'Car'
        }
    },
    Ride:{
        screen:Ride,
        navigationOptions:{
            title:'Ride'
        }
    } 
})
    export default createAppContainer (App)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        