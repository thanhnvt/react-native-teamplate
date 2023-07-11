import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreensName from "../../constant/screensName";
import { AccountScreen, HomeScreen, SettingScreen } from "../../screens";

const Tab = createBottomTabNavigator();
const OPTIONS = {
    headerShown: false
}

const TabNavigation =()=>{
    return (
        <Tab.Navigator>
          <Tab.Screen name={ScreensName.HOME_SCREEN} component={HomeScreen} options={OPTIONS}/>
          <Tab.Screen name={ScreensName.ACCOUNT_SCREEN} component={AccountScreen} options={OPTIONS}/>
          <Tab.Screen name={ScreensName.SETTING_SCREEN} component={SettingScreen} options={OPTIONS}/>
        </Tab.Navigator>
      );
}

export default TabNavigation;