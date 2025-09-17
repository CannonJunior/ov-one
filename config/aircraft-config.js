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
  callsignCounters: {},

  // Radar system configurations for each aircraft type
  radarSystems: {
    "F-35 Lightning II": {
      primary: {
        type: "AESA",
        model: "AN/APG-81",
        detectionRange: 185, // km for 1m² RCS target
        scanCoverage: {
          azimuth: 120, // ±60° total coverage
          elevation: 120 // ±60° total coverage
        },
        trackCapacity: 20,
        rcsThreshold: 0.001, // m² minimum detectable RCS
        frequency: "X-band",
        modes: ["air-to-air", "air-to-ground", "SAR", "TWS"],
        sweepRate: 2.0, // seconds per complete scan
        enabled: true,
        emissionState: "active", // active, passive, standby

        // Cylinder visualization properties
        cylinderLength: 1000,    // meters
        cylinderTopRadius: 500,  // meters

        // Radar positioning and orientation parameters
        positioning: {
          // Position relative to aircraft center (meters)
          offsetX: 0,      // side-to-side (positive = starboard/right)
          offsetY: 8,      // fore-aft (positive = forward toward nose)
          offsetZ: 0,      // vertical (positive = up)

          // Radar pointing direction relative to aircraft heading (degrees)
          azimuthAngle: 0,     // left/right deviation from aircraft nose (0 = straight ahead)
          elevationAngle: 0,   // up/down tilt (positive = up, negative = down)
          rollAngle: 0,        // roll rotation around forward axis

          // Cone visualization parameters
          coneFieldOfView: 60,     // total cone angle in degrees
          coneVisualizationAlpha: 0.15,  // transparency of cone fill (0-1)
          coneOutlineAlpha: 0.5,         // transparency of cone outline (0-1)

          // Advanced positioning
          mountPoint: "nose",      // "nose", "center", "custom"
          gimbalLimits: {          // radar gimbal movement limits
            azimuthMin: -60,       // degrees
            azimuthMax: 60,        // degrees
            elevationMin: -30,     // degrees
            elevationMax: 30       // degrees
          }
        }
      },
      secondary: {
        type: "EOTS",
        model: "AN/AAQ-40",
        detectionRange: 80, // km for large targets
        scanCoverage: {
          azimuth: 360,
          elevation: 120
        },
        trackCapacity: 10,
        rcsThreshold: 0.1,
        frequency: "IR",
        modes: ["IRST", "targeting", "navigation"],
        sweepRate: 1.5,
        enabled: false,
        emissionState: "passive",

        // Cylinder visualization properties
        cylinderLength: 800,     // meters (shorter for secondary)
        cylinderTopRadius: 400,  // meters

        positioning: {
          offsetX: 0,
          offsetY: 5,      // slightly behind primary radar
          offsetZ: -2,     // below aircraft centerline
          azimuthAngle: 0,
          elevationAngle: -15,  // angled down for ground targeting
          rollAngle: 0,
          coneFieldOfView: 45,
          coneVisualizationAlpha: 0.1,
          coneOutlineAlpha: 0.3,
          mountPoint: "nose",
          gimbalLimits: {
            azimuthMin: -180,
            azimuthMax: 180,
            elevationMin: -90,
            elevationMax: 45
          }
        }
      }
    },
    "J-20 Mighty Dragon": {
      primary: {
        type: "AESA",
        model: "Type 1475 (KLJ-5)",
        detectionRange: 50, // 350 km for 1m² RCS target
        scanCoverage: {
          azimuth: 140, // ±70° total coverage
          elevation: 100 // ±50° total coverage
        },
        trackCapacity: 24,
        rcsThreshold: 0.0005, // m² minimum detectable RCS
        frequency: "X-band",
        modes: ["air-to-air", "air-to-ground", "multi-target", "LPI"],
        sweepRate: 1.8, // seconds per complete scan
        enabled: true,
        emissionState: "active",

        // Cylinder visualization properties
        cylinderLength: 1000,    // meters
        cylinderTopRadius: 500,  // meters

        positioning: {
          offsetX: 0,
          offsetY: 10,     // forward position for long-range detection
          offsetZ: 1,      // slightly elevated
          azimuthAngle: 90,
          elevationAngle: 2,   // slight upward tilt for air-to-air
          rollAngle: 0,
          coneFieldOfView: 70,  // wider field of view
          coneVisualizationAlpha: 0.2,
          coneOutlineAlpha: 0.6,
          mountPoint: "nose",
          gimbalLimits: {
            azimuthMin: -35, //70
            azimuthMax: 35, //70
            elevationMin: 0, //-25
            elevationMax: 90 //40
          }
        }
      }
    },
    "Test Box": {
      primary: {
        type: "Test",
        model: "Basic Radar",
        detectionRange: 50,
        scanCoverage: {
          azimuth: 90,
          elevation: 90
        },
        trackCapacity: 5,
        rcsThreshold: 1.0,
        frequency: "X-band",
        modes: ["air-to-air"],
        sweepRate: 3.0,
        enabled: true,
        emissionState: "active",

        // Cylinder visualization properties
        cylinderLength: 1000,    // meters
        cylinderTopRadius: 500,  // meters

        positioning: {
          offsetX: 0,
          offsetY: 2,      // small forward offset
          offsetZ: 0.5,    // slightly elevated
          azimuthAngle: 0,
          elevationAngle: 0,
          rollAngle: 0,
          coneFieldOfView: 45,  // narrow field of view for testing
          coneVisualizationAlpha: 0.3,  // more visible for testing
          coneOutlineAlpha: 0.8,
          mountPoint: "center",
          gimbalLimits: {
            azimuthMin: -45,
            azimuthMax: 45,
            elevationMin: -20,
            elevationMax: 20
          }
        }
      }
    }
  },

  // RCS (Radar Cross Section) values for aircraft types
  rcsDatabase: {
    "F-35 Lightning II": {
      nose: 0.0015, // m² head-on aspect
      beam: 0.01,   // m² side aspect
      tail: 0.008,  // m² rear aspect
      average: 0.005
    },
    "J-20 Mighty Dragon": {
      nose: 0.001,
      beam: 0.05,
      tail: 0.02,
      average: 0.01
    },
    "Test Box": {
      nose: 10.0,
      beam: 20.0,
      tail: 15.0,
      average: 15.0
    }
  }
};
