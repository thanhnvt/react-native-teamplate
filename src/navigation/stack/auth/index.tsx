import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreensName from "../../../constant/screensName";
import { LoginScreen, RegisterScreen } from "../../../screens";

const AuthStack = createNativeStackNavigator()

const AuthStackNavigation=()=>{
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name={ScreensName.LOGIN_SCREEN} component={LoginScreen}/>
            <AuthStack.Screen name={ScreensName.REGISTER_SCREEN} component={RegisterScreen}/>
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigation