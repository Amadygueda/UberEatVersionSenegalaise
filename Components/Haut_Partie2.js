import { useState } from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Haut_Partie2() {
  const [ouver, setouvert] = useState(false);
  return (
    <View style={styles.ParentPrincipale}>
      <Pressable onPress={() => setouvert(true)} style={styles.Gauche}>
        <Text style={styles.localisation}>Grand Dakar Zone Captage</Text>
        <Image 
          source={require('../images/Accueil/Haut/chevront .png')} 
          style={styles.Image1}/>
      </Pressable>
      <View style={styles.Droite}>
        <Image 
          source={require('../images/Accueil/Haut/loupe.png')} 
          style={styles.Image1}/>
        <Image 
          source={require('../images/Accueil/Haut/notification.png')} 
          style={styles.Image2}/>
        <Image 
          source={require('../images/Accueil/Haut/panier.png')} 
          style={styles.Image3}/>
      </View>
      <Modal visible={ouver} transparent={true} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.tete} >
           <Pressable onPress={() => setouvert(false)} style={styles.closeButton}>
            <Image source={require('../images/Accueil/Haut/x.png')} style={styles.X}/>
          </Pressable>
          <Text  style={styles.adress}>Adresses</Text>
          </View>
          <View style={styles.Champs_saisie}>
          <Image   source={require('../images/Accueil/Haut/loupe.png')} 
          style={styles.ImageLoupe}/>
          <TextInput placeholder="Rechercher une adresse" style={styles.Poute}  placeholderTextColor="#000000" />
          </View>
          <View style={styles.BasSaisie}>
         
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.gapee}>
              <View style={styles.Home}>
             <Image   source={require('../images/Accueil/Haut/abri.png')} 
             style={styles.Logos}/>
             <Text style={styles.Textebassausie}>Maison</Text>
              
           </View>

             <View style={styles.Home}>
               <Image   source={require('../images/Accueil/Haut/valise.png')} 
             style={styles.Logos}/>
             <Text style={styles.Textebassausie}>Travail</Text>
            
           </View>

             <View style={styles.Home}>
               <Image   source={require('../images/Accueil/Haut/icone-plus.png')} 
             style={styles.Logos}/>
              <Text style={styles.Textebassausie}>Ajouter</Text>
            
           </View>
           </ScrollView>
          </View>

          <View style={styles.Proximite}>
            <Text style={styles.TitreP}>Adresse a Proximite</Text>
             <View style={styles.basTotal}>
            <ScrollView>
              <View style={styles.basTotal2}>
                 <Image source={require('../images/Accueil/Haut/broche-de-localisation.png')} style={styles.Logos2} />
                  <View style={styles.droiteBoite}>
                    <Text style={styles.texte00}>Colobane Rue 22</Text>
                    <Text style={styles.texte01}>Dakar Sénégal</Text>
                  </View>  
              </View>

              <View style={styles.basTotal2}>
                <Image source={require('../images/Accueil/Haut/broche-de-localisation.png')} style={styles.Logos2} />
                  <View style={styles.droiteBoite}>
                    <Text style={styles.texte00}>Medina Rue 5</Text>
                    <Text style={styles.texte01}>Dakar Sénégal</Text>
                  </View>
              </View> 
              <View style={styles.basTotal2}>
                <Image source={require('../images/Accueil/Haut/broche-de-localisation.png')} style={styles.Logos2} />
                    <View style={styles.droiteBoite}>
                      <Text style={styles.texte00}>Plateau Avenue Lamine Guèye</Text>
                      <Text style={styles.texte01}>Dakar Sénégal</Text>
                    </View>
              </View> 
              <View style={styles.basTotal2}>
                <Image source={require('../images/Accueil/Haut/broche-de-localisation.png')} style={styles.Logos2} />
                      <View style={styles.droiteBoite}>
                        <Text style={styles.texte00}>Yoff Virage Lot 14</Text>
                        <Text style={styles.texte01}>Dakar Sénégal</Text>
                      </View>
              </View> 
              <View style={styles.basTotal2}>
                <Image source={require('../images/Accueil/Haut/broche-de-localisation.png')} style={styles.Logos2} />
                        <View style={styles.droiteBoite}>
                          <Text style={styles.texte00}>Point E Rue 10</Text>
                          <Text style={styles.texte01}>Dakar Sénégal</Text>
                        </View>
              </View> 
              <View style={styles.basTotal2}>
                <Image source={require('../images/Accueil/Haut/broche-de-localisation.png')} style={styles.Logos2} />
                        <View style={styles.droiteBoite}>
                          <Text style={styles.texte00}>Ouakam Cité Avion</Text>
                          <Text style={styles.texte01}>Dakar Sénégal</Text>
                        </View>
              </View> 
              <View style={styles.basTotal2}>
               <Image source={require('../images/Accueil/Haut/broche-de-localisation.png')} style={styles.Logos2} />
                        <View style={styles.droiteBoite}>
                          <Text style={styles.texte00}>Liberté 6 Extension</Text>
                          <Text style={styles.texte01}>Dakar Sénégal</Text>
                        </View>
              </View>        
            </ScrollView>
            </View>
            <View style={styles.LastFils}>
               <Text style={styles.texte03}>Preference Horaire</Text>
               <View style={styles.lastlast}>
                <Image source={require('../images/Accueil/Haut/timer.png')} style={styles.Logos3} />
                <Text style={styles.Logos4}>Livraison ThiakThiak</Text>
                <TouchableOpacity style={styles.press0}><Text style={styles.donneeee}>Planifier</Text></TouchableOpacity>

               </View>
            </View>
           </View>
           
  





        {/*Fin contenant du Modale */}  
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  ParentPrincipale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Gauche: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15
  },
  Droite: {
    flexDirection: 'row',
    width: 100,
    paddingTop: 15,
    justifyContent: 'space-between',
    marginRight: 40
  },
  localisation: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    marginLeft: 10
  },
  ImageChevron: {
    height: 18,
    width: 23,
    marginTop: 3
  },
  Image1: { height: 19, width: 19 },
  Image2: { height: 19, width: 19 },
  Image3: { height: 19, width: 19 },
  centeredView: {
    backgroundColor: 'white',
    marginTop: 72,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: '100%',
    height: '93%',
  },
  closeButton: {
   position:'absolute',
   left:12
  },
  X: { height: 24, 
    width:24,
   }
  ,
  tete:{
    flexDirection:'row',
    marginTop:22
    ,justifyContent:'center',
    alignItems:'center',
  },
 adress:{
  fontSize: 20,
  fontWeight:'400',

 },
 ImageLoupe:{
  height:20,
  width:15,
  marginTop:12,
  marginLeft:15
 },
 Champs_saisie:{
  flexDirection:'row',
  marginTop:20,
  height:45,
  borderRadius:25,
  width:340,
  marginLeft:30,
  marginRight:10,
 backgroundColor: 'rgba(242, 242, 242, 1)'
 },
 Poute:{
  marginLeft:8,
  fontSize:15,
   placeholderTextColor:"#999999"
 },
 Logos:{
  height:17,
  width:17,
  marginRight:15
  
 },
 BasSaisie:{
  flexDirection:"row",
  marginTop:15,
  justifyContent:'space-around',
  height:60
 },
 Home:{
  flexDirection:'row',
  height:50,
  borderWidth:2,
  width:124,
  borderRadius:7,
  justifyContent:"center",
  alignItems:'center',
  borderColor:'rgba(242, 242, 242, 1)'
 },
 Textebassausie:{
  fontSize:17
 },
 gapee:{
paddingLeft:15,
gap:10,
flexDirection:'row'
 },
 Logos2:{
  height:27,
  width:27

 },
 TitreP:{
  fontSize:25,
  marginLeft:12,
  marginTop:4,
  marginBottom:10
 },
 basTotal:{
  borderBottomWidth:2.5,
  paddingBottom:2,
  borderColor:'rgba(242, 242, 242, 1)'
 },
 basTotal2:{
  flexDirection:'row',
  marginBottom:12,
  marginLeft:15,

 },
 droiteBoite:{
  marginLeft:15,
  borderBottomWidth:2,
   borderColor:'rgba(242, 242, 242, 1)',
   paddingBottom:10,
  width:'100%'
 },
 texte00:{
  fontSize:17
 },
 texte01:{
  marginTop:4,
  color:'grey'
 },
 LastFils:{
  marginTop:8
 },
 texte03:{
  fontSize:22,
  marginLeft:10
 },lastlast:{
  flexDirection:'row',
  marginTop:8,
  borderBottomWidth:2,
   borderColor:'rgba(242, 242, 242, 1)',
  paddingBottom:5,
  justifyContent:"space-evenly"
 },
 Logos3:{
  height:22,
 width:22,
 position:'absolute',
 left:15,
 bottom:8
 },
 Logos4:{
  position:'absolute',
  left:50,
  fontSize:15,
  bottom:12
 },
 press0:{
  marginLeft:'70%',
  height:35,
  width:68,
  backgroundColor: 'rgba(242, 242, 242, 1)',
  borderRadius:15,
  alignItems:'center',
  paddingTop:10,

 },
 donneeee:{
 textAlign:'center',
 alignSelf:'center'
 }

});