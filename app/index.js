import { Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Haut_Partie1 from "../Components/Haut_Partie1";
import Haut_Partie2 from "../Components/Haut_Partie2";
import Haut_Partie3 from "../Components/Haut_Partie3";
import Haut_Partie4 from "../Components/Haut_Partie4";
import Haut_Partie5 from "../Components/Haut_Partie5";
import Haut_Partie6 from "../Components/Haut_Partie6";
import Haut_Partie7 from "../Components/Haut_Partie7";

export default function Page() {
  return (
 <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
<ScrollView>
 <View style={styles.container}>
        <Haut_Partie1/>
        <Haut_Partie2/>
        <Haut_Partie3/>
        <Haut_Partie4/>
        <Haut_Partie5/>
        <Haut_Partie6/>
      </View>
</ScrollView>
       <Haut_Partie7/>
</SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
