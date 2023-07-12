import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import { NavigationTypeProps } from "../../constant/navigation";
import ScreensName from "../../constant/screensName";
import { useDispatch } from "react-redux";
import { sagaActions } from "../../sagas/actions";

interface LoginScreenProps extends NavigationTypeProps {}

const LoginScreen: React.FC<LoginScreenProps> =({navigation})=>{

    const dispatch = useDispatch()

    const onLogin=()=>{
        dispatch({type: sagaActions.LOGIN_REQUEST})
    }

    const onRegister=()=>{
        navigation.navigate(ScreensName.REGISTER_SCREEN)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onRegister}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}



export default LoginScreen