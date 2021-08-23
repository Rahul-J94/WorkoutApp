import { StyleSheet, Dimensions } from "react-native";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const mainStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      fontFamily: "sfBold",
    },

    // NOTE: Carousal styles
    carousalMain: { 
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center'
    },
    carousalContainer: {
      // backgroundColor:'floralwhite',
      borderWidth: 1,
      borderRadius: 25,
      height: windowHeight/2,
      borderColor: "#ececec"
      // padding: 10,
      // marginLeft: 20,
      // marginRight: 10, 
    },
    carousalHeading: {
      fontSize: 25,
      fontFamily: "sfBold"
    },
    carousallight: {
      padding: 5, fontFamily: "sfRegular", color: "#c0c0c0"
    },
    carousalImageBg: {
      width: 248,
      height: windowHeight/3,
      borderTopRightRadius:25,
      borderTopLeftRadius: 25,
    }
});

export default mainStyle