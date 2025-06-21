import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Haut_Partie4() {
  const Donnee = [
    { id: 2, item: "Chez katy", image: require('../images/Accueil/Haut/Resto.png') },
    { id: 3, item: "Bante Ya", image: require('../images/Accueil/Haut/brochette.png') },
    { id: 4, item: "Tangana", image: require('../images/Accueil/Haut/omlette.png') },
    { id: 5, item: "Lakeu djeun", image: require('../images/Accueil/Haut/djeune.png') },
    { id: 6, item: "Nourla Nampeu yi", image: require('../images/Accueil/Haut/jusbouyyyye.png') },
  ];

  return (
    <View style={styles.ParentPrincipale}>
      <FlatList
        data={Donnee}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
            <Image source={item.image} style={{ width: 40, height: 40, marginBottom: 4 }} resizeMode="contain" />
            <Text style={styles.texte1}>{item.item}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ParentPrincipale: { marginTop: 15 }
});