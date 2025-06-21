import { Image, StyleSheet, Text, View } from "react-native";

export default function Haut_Partie1() {
  return (
    <View style={styles.ParentPrincipale}>
      <View style={styles.Ubereat}>
        <Image 
          source={require('../images/Accueil/Haut/image.png')} 
          style={styles.ImageRiz}/>
        <Text style={styles.UberGAlsend}>UberEat Galsen</Text>
      </View>
      <View style={styles.BusTata}>
        <Image 
          source={require('../images/Accueil/Haut/tata.png')} 
          style={styles.ImageBuss}/>
        <Text style={styles.BusTAta}>Bus Tata</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ParentPrincipale: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Ubereat: {
    flexDirection: 'row',
    width: '50%',
    borderBottomWidth: 4,
    justifyContent: 'space-around'
  },
  BusTata: {
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderColor: '#E5E5E5',
    width: '50%',
    justifyContent: 'space-around'
  },
  UberGAlsend: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1C1C1E',
    fontFamily: 'System',
    alignSelf: 'center'
  },
  BusTAta: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1C1C1E',
    fontFamily: 'System',
    alignSelf: 'center',
    marginRight: 45
  },
  ImageRiz: {
    width: 45, height: 45,
    marginLeft: 15
  },
  ImageBuss: {
    width: 45, height: 45,
    marginLeft: 15
  }
});