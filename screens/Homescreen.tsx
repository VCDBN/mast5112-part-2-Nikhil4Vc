import React, { Component, useState } from "react";
import {Button, StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, FlatList} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Book from "./Book";
import { enableScreens } from "react-native-screens";
import App from "../App";
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types.js';
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SearchScreen from './Searchscreen';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";


const HomeScreen =() =>{ 
    const [title, setTitle] = React.useState('');
    const saveTitle = async () => {
        try {
            AsyncStorage.setItem('Title', title);
        } catch (error) {
            console.log(error);
        }
};

const getTitle = async () => {
  try {
      const title = await AsyncStorage.getItem('Title');
      setTitle(title);
  } catch (error) {}
};
React.useEffect(() => {
  getTitle();
    }, []);

//

    const [author, setAuthor] = React.useState('');
    const saveAuthor = async () => {
      try {
          AsyncStorage.setItem('Author', author);
      } catch (error) {
          console.log(error);
        }
};

const getAuthor = async () => {
  try {
      const author = await AsyncStorage.getItem('Author');
      setAuthor(author);
  } catch (error) {}
};
React.useEffect(() => {
  getAuthor();
    }, []);

//

    const [pages, setPages] = React.useState('');
    const savePages = async () => {
      try {
          AsyncStorage.setItem('Pages', pages);
      } catch (error) {
          console.log(error);
        }
};

const getPages = async () => {
try {
    const pages = await AsyncStorage.getItem('Pages');
    setPages(pages);
} catch (error) {}
};
React.useEffect(() => {
getPages();
    }, []);

//

    const [genre, setGenre] = React.useState('');
    const saveGenre = async () => {
      try {
          AsyncStorage.setItem('Genre', genre);
      } catch (error) {
          console.log(error);
        }
};

const getGenre = async () => {
try {
    const genre = await AsyncStorage.getItem('Genre');
    setGenre(genre);
} catch (error) {}
};
React.useEffect(() => {
getGenre();
    }, []);

// 

const navigation = useNavigation(); 

    const [books, setBooks] = useState<BookItem[]>([]);


 interface BookItem {
  title: string;
  author: string;
  pages: number;
  genre: string;
 }

 const addBook =() =>{
    if (title && author && pages && genre){
      const newBook ={
        title,
        author,
        pages : parseFloat(pages),
        genre,
      };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
      setGenre('');
    }
  };  
   
   const renderBookItem = ({item}: {item: {title:string; author:string; pages:number; genre:string}}) =>(
    <View>
      <Text>{item.title}</Text>
      <Text>{item.author}</Text>
      <Text>Pages: {item.pages}</Text>
      <Text>{item.genre}</Text>
    </View>
   );


    return(

        <View style ={{ height:'100%',  backgroundColor: '#fefbd8',justifyContent:'center', alignItems:'center', //View tag with Text tags in it that displays data, Touchable opacity used to create button
        }}>
            <Text style={{fontSize:40, fontWeight:'bold',  letterSpacing:5, position: 'absolute', bottom: 880, color:'#098686',}}>Books app</Text>
            <Text style={{fontSize:30, fontWeight:'bold',  letterSpacing:5,  position:'absolute', bottom: 840, color:'#000000'}}>Home</Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 800, color:'#000000', fontWeight: 'bold'}}>Last book read:</Text>   
            <Text style={{fontSize:30, position:'absolute', bottom: 750, color:'#000000'}}></Text> 
            <Text style={{fontSize:30, position:'absolute', bottom: 710, color:'#000000'}}></Text>
            <Text style={{fontSize:30, position:'absolute', bottom: 670, color:'#000000'}}></Text>
            <Text style={{fontSize:30, position:'absolute', bottom: 630, color:'#000000'}}></Text>
            <Text style={{fontSize:30, position:'absolute', bottom: 540, color:'#000000'}}>Total number of pages read: {pages}</Text> 
          
            <Text style={{fontSize:30, fontWeight:'bold',  letterSpacing:5,  position:'absolute', bottom: 480, color:'#000000'}}>Add a book</Text>  
              <Text style={{fontSize:25, fontWeight:'bold',  position:'absolute', bottom: 440, color:'#000000'}}>Please fill in the following details:</Text> 
              <TextInput style={{position: 'absolute', bottom: 360, backgroundColor: 'white', height: 50, width: 250, margin: 12, borderWidth: 2, padding: 10,}} placeholder="Title" value={title} onChangeText={value => setTitle(value)}/>
              <TextInput style={{position: 'absolute', bottom: 300, backgroundColor: 'white', height: 50, width: 250, margin: 12, borderWidth: 2, padding: 10,}} placeholder="Author" value={author} onChangeText={value => setAuthor(value)}/>
              <TextInput style={{position: 'absolute', bottom: 240, backgroundColor: 'white', height: 50, width: 250, margin: 12, borderWidth: 2, padding: 10,}} placeholder="Pages" value={pages} onChangeText={value => setPages(value)}/>
              <View>
    <Picker
       style={styles.picker}
       selectedValue={genre}
       onValueChange={value => setGenre(value)}>
       <Picker.Item label="Action" value="Action" />
       <Picker.Item label="Fantasy" value="Fantasy" />
       <Picker.Item label="Science fiction" value="Science fiction" />
       <Picker.Item label="Drama" value="Drama" />
       <Picker.Item label="Thriller" value="Thriller" />
       <Picker.Item label="Mystery" value="Mystery" />
       <Picker.Item label="Romance" value="Romance" />
       <Picker.Item label="Horror" value="Horror" />
       <Picker.Item label="True story" value="True story" />
       <Picker.Item label="Historical" value="Historical" />
       <Picker.Item label="Adventure" value="Adventure" />
       <Picker.Item label="Poetry" value="Poetry" />
       <Picker.Item label="Fairy tale" value="Fairy tale" />
       <Picker.Item label="Comedy" value="Comedy" />
       <Picker.Item label="Biography" value="Biography" />
       <Picker.Item label="Politics" value="Politics" />
       <Picker.Item label="Mythology" value="Mythology" />
       <Picker.Item label="Western fiction" value="Western fiction" />
       <Picker.Item label="Classics" value="Classics" />
       <Picker.Item label="Childrens" value="Childrens" />
       <Picker.Item label="Historical fiction" value="historical fiction" />
       <Picker.Item label="Crime" value="Crime" />
       <Picker.Item label="Kids" value="Kids" />
       <Picker.Item label="Narrative" value="Narrative" />
       <Picker.Item label="Music" value="Music" />
       <Picker.Item label="Family" value="Family" />
       <Picker.Item label="Comics" value="Comics" />
       <Picker.Item label="News" value="News" />

     </Picker>

</View>

            <Text style={{fontSize:30, position:'absolute', bottom: 580, color:'#000000'}}>Average number of pages read: {pages}</Text> 
            <TouchableOpacity style={styles.addButton} onPress={addBook}>
             <Text style={styles.buttonText}><Ionic name={"book"} size={30} color={"black"}/> Add book</Text> 
            </TouchableOpacity>

            <FlatList<BookItem>
data ={books} style={styles.List1}
keyExtractor ={(item, index) => index.toString()}
renderItem = {renderBookItem}
    />
        </View>
    );
};
//Stylesheet created to style components
const styles = StyleSheet.create({
    addButton:{
        backgroundColor: '#66d366',
        paddingHorizontal: 40,
        paddingVertical: 15,
         marginTop: 10,
         borderRadius: 8,
         position:'absolute',
         top: 800,
      },
      
      buttonText:{
      fontWeight: 'bold',
      fontSize: 20,
      },

      
      picker:{
        backgroundColor: 'white',
        fontSize: 16,
        paddingHorizontal: 60,
        paddingVertical: 20,
        borderWidth: 10,
        borderColor: 'black',
        borderRadius: 10,
        color: 'black',
        paddingRight: 100,
        position: 'absolute',
        top: 250,
      },

      List1:{
        position: "absolute",
        top: 170,
        fontSize: 80,
        fontWeight: 'bold',
      },

      Pass:{
        backgroundColor: '#66d366',
        paddingHorizontal: 40,
        paddingVertical: 15,
         marginTop: 10,
         borderRadius: 8,
         position:'absolute',
         top: 850,
      }

         
});

//Export app
export default HomeScreen;
