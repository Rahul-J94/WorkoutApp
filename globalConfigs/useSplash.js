import React, { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import customFonts from './customFonts';

export default function useSplash() {
    const [ appReady, setAppReady ] = useState(false)

    useEffect(() => {
        async function prepare() {
          try {
            await SplashScreen.preventAutoHideAsync();
            await Font.loadAsync(customFonts);
          } catch (e) {
            console.warn(e);
          } finally {
            setAppReady(true);
            SplashScreen.hideAsync();
          }
        }
        prepare();
      }, 
    []);

    return appReady
}
