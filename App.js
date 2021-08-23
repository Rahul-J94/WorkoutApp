import React from 'react';
import useSplash from './globalConfigs/useSplash';
import RootNavigation from './navigation/rootNavigation';

export default function App() {

  const appLoaded = useSplash()

  if(!appLoaded){
    return null
  }else{
    return <RootNavigation />    
  }
  
}
