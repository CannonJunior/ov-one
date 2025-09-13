// Aircraft and styling configuration
window.AircraftConfig = {
  // Country-based styling configuration
  objectStyleConfig: {
    countries: {
      "USA": {
        fontColor: "#0000FF",
        flightPathColor: "#0000FF"
      },
      "China": {
        fontColor: "#FF0000", 
        flightPathColor: "#FF0000"
      }
    },
    aircraftMapping: {
      "J-20 Mighty Dragon": "China",
      "F-35 Lightning II": "USA"
    },
    default: {
      fontColor: "#4a9eff",
      flightPathColor: "#00FFFF"
    }
  },

  // Aircraft types with callsign configuration
  aircraftTypes: [
    {
      text: "F-35 Lightning II",
      platform: "Fighter",
      modelUrl: "assets/f-35b_lightning_ii.glb",
      callsign: "Viper",
      country: "USA"
    },
    {
      text: "J-20 Mighty Dragon",
      platform: "Fighter", 
      modelUrl: "assets/chengdu_j-20_fighter_v2.glb",
      callsign: "Dragon",
      country: "China"
    },
    {
      text: "Test Box",
      platform: "Test",
      modelUrl: "../SampleData/models/BoxInstanced/BoxInstanced.gltf",
      callsign: "Test",
      country: "USA"
    }
  ],

  // Platform-specific turn rates (degrees per second)
  platformTurnRates: {
    'Fighter': 20,
    'Bomber': 8,
    'Transport': 5,
    'UAV': 15
  },

  // Callsign counters for generating unique names
  callsignCounters: {}
};