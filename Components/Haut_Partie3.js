import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Haut_Partie3() {
  const Donnee = [
    { id: 1, item: "Tout" },
    { id: 2, item: "Bante Ya" },
    { id: 3, item: "Tangana" },
    { id: 4, item: "Forokh thiaya" },
    { id: 5, item: "Dibiterie" },
    { id: 6, item: "Thierei" },
    { id: 7, item: "Saflei Dibi" },
  ];
  return (
    <View style={styles.ParentPrincipale}>
      <FlatList
        data={Donnee}
        renderItem={({ item }) => <Text style={styles.texte1}>{item.item}</Text>}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        style={styles.Flateur}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Flateur: { marginTop: 15 },
  texte1: { marginLeft: 20 }
});