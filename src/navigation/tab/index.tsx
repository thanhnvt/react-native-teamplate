import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreensName from "../../constant/screensName";
import { AccountScreen, HomeScreen, SettingScreen } from "../../screens";
import { HIDE_HEADER_OPTION } from "../../constant/navigation";

const Tab = createBottomTabNavigator();

const TabNavigation =()=>{
    return (
        <Tab.Navigator>
          <Tab.Screen name={ScreensName.HOME_SCREEN} component={HomeScreen} options={HIDE_HEADER_OPTION}/>
          <Tab.Screen name={ScreensName.ACCOUNT_SCREEN} component={AccountScreen} options={HIDE_HEADER_OPTION}/>
          <Tab.Screen name={ScreensName.SETTING_SCREEN} component={SettingScreen} options={HIDE_HEADER_OPTION}/>
        </Tab.Navigator>
      );
}

export default TabNavigation;