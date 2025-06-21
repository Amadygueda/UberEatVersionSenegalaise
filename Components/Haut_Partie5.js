import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Haut_Partie5() {
  const Donnee = [
    { id: 1, item: "Thiak Thiak", image: require('../images/Accueil/Haut/motorbike.png') },
    { id: 2, item: "Favoris", image: require('../images/Accueil/Haut/favori.png') },
    { id: 3, item: "Paiement", image: require('../images/Accueil/Haut/chevront .png') },
  ];

  return (
    <View style={styles.ParentPrincipale}>
  <FlatList
   contentContainerStyle={{ gap: 25}}
    data={Donnee}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item, index }) => (
      <View style={styles.ParentParents} >
        <Image
          source={item.image}
          style={{ width: 22, height: 22, marginBottom: 4 }}
          resizeMode="contain"
        />
        <Text style={index === 0 ? styles.special : styles.normal}>{item.item}</Text>
        
      </View>
    )}
    style={styles.flat0}
  />
</View>
  );
}

const styles = StyleSheet.create({
  ParentPrincipale:{
   marginTop:15

  },
  Contenue1: {
     borderWidth:1,
     borderColor:'red'
  },special: {
    //backgroundColor: 'red',   // le style spécial
   //borderRadius: 10,
  },
  ParentParents:{
    borderWidth:0.2,
    paddingRight:18,flexDirection:'row',
    borderRadius:20,
 height:35,
 justifyContent:'center',
 alignItems:'center',
 marginLeft:15,
 paddingLeft:10,
 backgroundColor:'rgb(239, 239, 240,0.7)'
  }

});