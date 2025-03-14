import { StyleSheet, Dimensions } from "react-native"; // Yhdistetty kaikki tuonnit
import { MD3LightTheme } from "react-native-paper"; // Tämä on ok

// Container-stylit, yleiset sovelluksen näkymät
export const containerStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#e6e6e6', // Vaalea taustaväri
  },
  mapView: {
    flex: 1, // Kartan vie koko ruudun
  },
  inputField: {
    margin: 5,
    backgroundColor: 'lavenderblush', // Vaaleanpunertava tausta kentälle
  },
  ratingWrapper: {
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    justifyContent: 'space-evenly',
    backgroundColor: 'darkgray', // Tummanharmaa taustaväri
  },
  submitButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  addButton: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  card: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgray', // Vaalea reuna
    backgroundColor: '#fff', // Valkoinen tausta
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

// Sovelluksen päätyylit
export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e1e9d3', // Vaalea taustaväri
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    gap: 10, // Asetetaan tilaa elementtien väliin
  },
  loginPage: {
    flex: 1, // Täyttää koko ruudun
  },
  loginContainer: {
    flex: 1,
    margin: 10,
    gap: 10,
  },
  map: {
    width: Dimensions.get('window').width - 20, // Kartan leveys
    height: Dimensions.get('window').height - 20, // Kartan korkeus
    marginVertical: 10,
  },
  headerImage: {
    height: 150,
    width: Dimensions.get('window').width, // Kuva täyttää koko leveys
  },
  headline: {
    justifyContent: 'center',
    textAlign: 'center', // Teksti keskelle
    marginVertical: 20,
  },
  subHeadline: {
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemView: {
    flexDirection: 'row',
    gap: 10, // Väli elementtien välillä
  },
  item: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
  itemText: {
    flex: 2,
  },
  mapIcon: {
    flex: 1,
    alignItems: 'flex-end', // Ikoni oikealle
  },
  rating: {
    alignItems: 'space-between',
  },
  image: {
    width: 100,
    height: 60,
    flex: 1,
    alignItems: 'flex-end',
  },
  countryView: {
    flexDirection: 'row',
    gap: 10,
  },
  modal: {
    height: 100,
    marginHorizontal: 40,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#e8e5e8', // Vaalea tausta modaalille
  },
});

// Teema käyttäen MD3LightThemea, mukautettu värit ja ulkoasu
export const Theme = {
  ...MD3LightTheme,
  roundness: 2, // Pyöristetyt kulmat
  colors: {
    ...MD3LightTheme.colors,
    primary: "rgb(56, 107, 1)", // Pääväri
    onPrimary: "rgb(255, 255, 255)", // Päävärin päällä valkoinen teksti
    primaryContainer: "rgb(183, 244, 129)", // Päävärin taustaväri
    onPrimaryContainer: "rgb(13, 32, 0)", // Päävärin taustalla tumma teksti
    secondary: "rgb(87, 98, 74)", // Toissijainen väri
    onSecondary: "rgb(255, 255, 255)", // Toissijaisen värin päällä valkoinen teksti
    secondaryContainer: "rgb(218, 231, 201)", // Toissijaisen värin tausta
    onSecondaryContainer: "rgb(21, 30, 12)", // Toissijaisen värin taustalla tumma teksti
    tertiary: "rgb(56, 102, 100)", // Kolmas väri
    onTertiary: "rgb(255, 255, 255)", // Kolmannen värin päällä valkoinen teksti
    tertiaryContainer: "rgb(187, 236, 233)", // Kolmannen värin tausta
    onTertiaryContainer: "rgb(0, 32, 31)", // Kolmannen värin taustalla tumma teksti
    error: "rgb(186, 26, 26)", // Virheväri
    onError: "rgb(255, 255, 255)", // Virhevärin päällä valkoinen teksti
    errorContainer: "rgb(255, 218, 214)", // Virhevärin tausta
    onErrorContainer: "rgb(65, 0, 2)", // Virhevärin taustalla tumma teksti
    background: "rgb(253, 253, 245)", // Taustaväri
    onBackground: "rgb(26, 28, 24)", // Taustavärin päällä tumma teksti
    surface: "rgb(253, 253, 245)", // Pinta
    onSurface: "rgb(26, 28, 24)", // Pintavärin päällä tumma teksti
    surfaceVariant: "rgb(224, 228, 214)", // Pinnan variantti
    onSurfaceVariant: "rgb(68, 72, 62)", // Variantin päällä tumma teksti
    outline: "rgb(116, 121, 109)", // Rajoitusväri
    outlineVariant: "rgb(196, 200, 186)", // Variantin raja
    shadow: "rgb(0, 0, 0)", // Varjo
    scrim: "rgb(0, 0, 0)", // Scrim (läpinäkyvä kerros)
    inverseSurface: "rgb(47, 49, 44)", // Inversoitu pinta
    inverseOnSurface: "rgb(241, 241, 234)", // Inversoitu teksti pinnalla
    inversePrimary: "rgb(156, 215, 105)", // Inversoitu pääväri
    elevation: {
      level0: "transparent", // Tasojen värit
      level1: "rgb(243, 246, 233)",
      level2: "rgb(237, 241, 226)",
      level3: "rgb(231, 237, 218)",
      level4: "rgb(229, 236, 216)",
      level5: "rgb(225, 233, 211)",
    },
    surfaceDisabled: "rgba(26, 28, 24, 0.12)", // Pinta, kun elementti on pois päältä
    onSurfaceDisabled: "rgba(26, 28, 24, 0.38)", // Teksti, kun elementti on pois päältä
    backdrop: "rgba(45, 50, 40, 0.4)", // Taustat
  },
};
