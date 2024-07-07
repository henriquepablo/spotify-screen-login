import React from "react";
import { GluestackUIProvider, StatusBar} from "@gluestack-ui/themed";
import Login from "./Login";

const App = (): React.JSX.Element => {
  return( 
    <GluestackUIProvider>
      <StatusBar backgroundColor="#000" />
      <Login />
    </GluestackUIProvider>
  );
}

export default App;
