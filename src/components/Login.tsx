import React from "react";
import {Box, Button, ButtonText, Center, HStack, Image, Link, SafeAreaView, Text } from "@gluestack-ui/themed";
import {LinearGradient as Gradient} from 'react-native-linear-gradient';

const Login = (): React.JSX.Element => {
  return(
    <SafeAreaView flex={1}> 
         <Gradient colors={["#000000c1","#262626", "#090909f5"]} style={{flex: 1}} start={{x: 0, y: 0}} end={{x: 0, y: 0.2}} >
            <Center>
                <Image source={require('../img/spotify.png')} alt="logo do spotify" mt={161} />
                
                <Text fontWeight="$semibold" color="#fff" mt={96} fontSize={17}>
                    Milhões de músicas à sua escolha.
                </Text>
                <Text color="#fff" fontWeight="$semibold" fontSize={17}>
                    Grátis no Spotify.
                </Text>

                <Box maxWidth={390} width={380} mt={96} mb={9}>
                    <Button borderRadius={25} bg="#00DF50" $active-opacity={0.5} h={45}>
                        <ButtonText color="#000" fontWeight="$semibold" >
                            Inscreva-se grátis
                        </ButtonText>
                    </Button>
                </Box>
                
                <Box maxWidth={390} width={380} mb={9} borderRadius={25} borderColor="#494949" borderWidth={1}>
                    <Image source={require('../img/smartphone.png')} width={20} height={25} alt="icone de celular" position="absolute" zIndex={1} mt={10} ml={10}/>
                    <Button borderRadius={25} bg="#090909f5" $active-opacity={0.5} h={45} >
                        <ButtonText color="#fff" fontWeight="$semibold" >
                            Continuar com um número de telefone
                        </ButtonText>
                    </Button>
                </Box>

                <Box maxWidth={390} width={380} mb={9} borderRadius={25} borderColor="#494949" borderWidth={1}>
                    <Image source={require('../img/google.png')} width={19} height={19} alt="icone de celular" position="absolute" zIndex={1} mt={12} ml={12}/>
                    <Button borderRadius={25} bg="#090909f5" $active-opacity={0.5} h={45}>
                        <ButtonText color="#fff" fontWeight="$semibold" >
                            Continuar o Google
                        </ButtonText>
                    </Button>
                </Box>

                <Box maxWidth={390} width={380} mb={9} borderRadius={25} borderColor="#494949" borderWidth={1}>
                    <Image source={require('../img/facebook.png')} width={19} height={19} alt="icone de celular" position="absolute" zIndex={1} mt={12} ml={12}/>
                    <Button borderRadius={25} bg="#090909f5" $active-opacity={0.5} h={45}>
                        <ButtonText color="#fff" fontWeight="$semibold" >
                            Continuar o Facebook
                        </ButtonText>
                    </Button>
                </Box>

                <Box>
                    <Text color="#fff" fontWeight="$semibold" mt={10}>
                        Entrar
                    </Text>
                </Box>
            </Center>
         </Gradient>
    </SafeAreaView>
  );
}

export default Login;