import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Menu: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Summary")}
        >
          <Icon name="home-outline" size={24} color="black" />
          <Text style={styles.menuText}>Journal Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="document-text-outline" size={24} color="black" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="exit-outline" size={24} color="black" />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#CB7723",
    borderRadius: 5,
    elevation: 75,
    padding: 10,
    position: "absolute",
    right: 0,
    top: 30,
  },
  menuContainer: {
    position: "relative",
  },
  menuItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  menuText: {
    color: "white",
    marginLeft: 10,
  },
});

export default Menu;