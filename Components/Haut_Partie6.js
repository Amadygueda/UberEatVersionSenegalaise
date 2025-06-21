import { useState } from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


export default function Haut_Partie6() {
    const[allumer,setalumer]= useState(false)
    function Cliquer(){
        setalumer(true)
    }
  
  return (
    <View>
           <View style={styles.Tritre1}>
          <Text style={styles.Proxi}>Restaurant Proximite</Text>
            <View  style={styles.Imageflesh1}>
            <Image   source={require('../images/Accueil/Haut/fleche-droite.png')} 
                  style={styles.Imageflesh}/>
            </View>
          </View>
    
  
        <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
  <View style={{ flexDirection: 'row', gap: 10,marginTop:15 }}>
    <Pressable onPress={Cliquer}>
      <Image source={require('../images/Accueil/Haut/1.png')} style={styles.Image1} />
    </Pressable>
    <Image source={require('../images/Accueil/Haut/2.png')} style={styles.Image1} />
    <Image source={require('../images/Accueil/Haut/3.png')} style={styles.Image1} />
  </View>
</ScrollView>
<Modal visible={allumer} animationType="slide"   transparent={true} >
  <View style={styles.modal0}>
    <Pressable onPress={() => setalumer(false)} style={styles.mo}>
      <Text>Clique</Text>
    </Pressable>
  </View>
</Modal>
        
  <View style={styles.Tritre1}>
          <Text style={styles.Proxi1}>Multiservices Proche</Text>
            <View  style={styles.Imageflesh1}>
            <Image   source={require('../images/Accueil/Haut/fleche-droite.png')} 
                  style={styles.Imageflesh}/>
            </View>
          </View>
           <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
  <View style={{ flexDirection: 'row', gap: 10,marginTop:15 }}>
    <Pressable onPress={Cliquer}>
     <Image source={require('../images/Accueil/Haut/wave.png')} style={styles.ImageTransfer} />
    </Pressable>
   
   
    <Image source={require('../images/Accueil/Haut/ria.png')} style={styles.ImageTransfer} />
     <Image source={require('../images/Accueil/Haut/kpay.png')} style={styles.ImageTransfer} />
      <Image source={require('../images/Accueil/Haut/Om.png')} style={styles.ImageTransfer} />
    <Image source={require('../images/Accueil/Haut/wt.png')} style={styles.ImageTransfer} />
    <Image source={require('../images/Accueil/Haut/wf.png')} style={styles.ImageTransfer} />
        <Image source={require('../images/Accueil/Haut/mgm.png')} style={styles.ImageTransfer} />
  </View>
</ScrollView>
<Modal visible={allumer} animationType="slide"   transparent={true} >
  <View style={styles.modal0}>
    <Pressable onPress={() => setalumer(false)} style={styles.mo}>
      <Text>Clique</Text>
    </Pressable>
  </View>
</Modal>
     <View style={styles.Tritre1}>
          <Text style={styles.Proxi2}>Stations Service</Text>
            <View  style={styles.Imageflesh1}>
            <Image   source={require('../images/Accueil/Haut/fleche-droite.png')} 
                  style={styles.Imageflesh}/>
            </View>
          </View>
           <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
  <View style={{ flexDirection: 'row', gap: 10,marginTop:15 }}>
    <Pressable onPress={Cliquer}>
     <Image source={require('../images/Accueil/Haut/shell.png')} style={styles.ImageTransfer} />
    </Pressable>
   
   
    <Image source={require('../images/Accueil/Haut/elton.png')} style={styles.ImageTransfer} />
     <Image source={require('../images/Accueil/Haut/touba.jpeg')} style={styles.ImageTransfer} />
      <Image source={require('../images/Accueil/Haut/total.jpeg')} style={styles.ImageTransfer} />
       <Image source={require('../images/Accueil/Haut/Ola.png')} style={styles.ImageTransfer} />
    <Image source={require('../images/Accueil/Haut/edeka.jpeg')} style={styles.ImageTransfer} />
    <Image source={require('../images/Accueil/Haut/oil.png')} style={styles.ImageTransfer} />
       
  </View>
</ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
    Tritre1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25,
    },
    Imageflesh1:{
        height:35,
        width:35,
        backgroundColor:'grey',
        borderRadius:100,
        backgroundColor: 'rgba(242, 242, 242, 1.2)',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginRight:15,
       marginTop:-8

    },
    
    Imageflesh:{
        height:20,
        width:20,
        marginLeft:8
 
    
    },
    Proxi:{
        fontSize:22,
        marginLeft:15
    },
    Image1:{
        height:200,
        width:200,
        borderTopLeftRadius:8,
        borderTopRightRadius:8

    },
    mo:{
        position:'absolute',
        left:30,
        top:'8%'
    },
    modal0:{
        borderWidth:1,
        backgroundColor:'white',
        flex:1,
        borderRadius:20,
        borderColor: 'rgba(242, 242, 242, 2)',
  
    },
    ImageTransfer:{
      height:48,
      width:48,
      borderRadius:100,
      borderWidth:1,
      borderColor: 'rgb(128,128,128)'

    },
    Proxi1:{
      fontSize:23,
        marginLeft:15
    },
     Proxi2:{
      fontSize:24,
        marginLeft:15
    }


});