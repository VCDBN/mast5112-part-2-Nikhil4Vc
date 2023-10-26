import React from "react";
import {Text, View} from 'react-native';


const SearchScreen =() =>{
    return(
        <View style ={{height:'100%', backgroundColor: '#fefbd8', justifyContent:'center', alignItems:'center',
        }}>
            <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}>History</Text>
        </View>
    );
};

export default SearchScreen;