import React from "react";
import { LinearGradient, SafeAreaView, Text } from "@gluestack-ui/themed";
import {LinearGradient as Gradient} from 'react-native-linear-gradient';

const Login = (): React.JSX.Element => {
  return(
    <SafeAreaView flex={1}> 
         <Gradient colors={["#000000c1","#262626", "#090909f5"]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 0, y: 0.2}} >
            
         </Gradient>
    </SafeAreaView>
  );
}

export default Login;