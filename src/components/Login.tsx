import React from "react";
import { Center, Image, SafeAreaView, Text } from "@gluestack-ui/themed";
import {LinearGradient as Gradient} from 'react-native-linear-gradient';

const Login = (): React.JSX.Element => {
  return(
    <SafeAreaView flex={1}> 
         <Gradient colors={["#000000c1","#262626", "#090909f5"]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 0, y: 0.2}} >
            <Center>
                <Image source={require('./spotify.png')} alt="logo do spotify" mt={161} />
                
                <Text fontWeight="$semibold" color="#fff" mt={96} fontSize={17}>
                    Milhões de músicas à sua escolha.
                </Text>
                <Text color="#fff" fontWeight="$semibold" fontSize={17}>
                    Grátis no Spotify.
                </Text>
            
            </Center>
         </Gradient>
    </SafeAreaView>
  );
}

export default Login;