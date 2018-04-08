import { StackNavigator} from 'react-navigation';
import Home from './Home'
import Detail from './Detail'
const HomeStack = StackNavigator({
    Homepage:{
        screen:Home,
        navigationOptions: {
            header: null
          },
    },
    Detailpage:{
        screen:Detail,
        navigationOptions: {
            header: null
          },
    }
})
 export default HomeStack
