import React from "react";
import { GluestackUIProvider, StatusBar} from "@gluestack-ui/themed";
import Login from "./Login";
import { config } from "@gluestack-ui/config";

const App = (): React.JSX.Element => {
  return( 
    <GluestackUIProvider config={config}>
      <StatusBar backgroundColor="#000" />
      <Login />
    </GluestackUIProvider>
  );
}

export default App;
