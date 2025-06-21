import { BlurView } from 'expo-blur';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function Haut_Partie7() {
  return (
    <BlurView intensity={50} tint="light" style={styles.peredefamille}>
      <TouchableOpacity style={styles.Proxi2}>
        <Image source={require('../images/Accueil/Haut/accueil.png')} style={styles.ImagesBas} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.Proxi2}>
        <Image source={require('../images/Accueil/Haut/adresse.png')} style={styles.ImagesBas} />
      </TouchableOpacity>

      <View style={styles.recherche}>
        <Image source={require('../images/Accueil/Haut/loupe.png')} style={styles.ImageLoupe} />
        <TextInput style={styles.Proxi3} placeholder="Recherche" />
      </View>

      <TouchableOpacity style={styles.Proxi2}>
        <Image source={require('../images/Accueil/Haut/panier.png')} style={styles.ImagesBas} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.Proxi2}>
        <Image source={require('../images/Accueil/Haut/utilisateur.png')} style={styles.ImagesBas} />
      </TouchableOpacity>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  ImagesBas: {
    height: 22,
    width: 22,
    alignSelf: 'center'
  },
  peredefamille: {
    flexDirection: 'row',
    justifyContent: "space-around",
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // plus de backgroundColor car BlurView gère ça
  },
  recherche: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 35,
  },
  ImageLoupe: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  Proxi2: {
    borderWidth: 1,
    width: 40,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: '#E0E0E0',
  },
  Proxi3: {
    width: 100,
    height: 35,
  }
});