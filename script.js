const quizData = {
  // <!-------------------------------------------- WEEK 1---------------------------------------------------------->
  "Week 1": [
    {
      question: "Which of the following is/are not a type of transducer?",
      options: ["Speaker", "Microphone", "Solar panel", "Connecting wire"],
      answer: "Connecting wire",
    },
    {
      question:
        "Sensor is sensitive to only the measured property. It is insensitive to any other property besides what it is designed to detect. True or false?",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "……….. …..sensors produce an output proportional to the magnitude of the quantity being measured.",
      options: ["Scalar", "Vector", "Analog", "Digital"],
      answer: "Scalar",
    },
    {
      question: "What is the resolution of a sensor?",
      options: [
        "It provides the difference between the measured value and the actual value of the sensing parameter.",
        "It provides the smallest change in the input that a sensor is capable of sensing.",
        "It provides the incremental changes produced in response by the system.",
        "All of the above.",
      ],
      answer:
        "It provides the smallest change in the input that a sensor is capable of sensing.",
    },
    {
      question:
        "………is a part of the system that deals with the control actions required in the system.",
      options: ["Sensor", "Actuator", "Manager", "None of the above"],
      answer: "Actuator",
    },
    {
      question: "What is the function of an electric rotary actuator?",
      options: [
        "Converts mechanical energy into electrical energy",
        "Converts analog signals to digital signals",
        "Converts electrical energy into rotational motion",
        "All of the above",
      ],
      answer: "Converts electrical energy into rotational motion",
    },
    {
      question:
        "Which of the following communication standards provide a framework for WPAN?",
      options: ["6LowPan", "IEEE 802.15.4", "Z-wave", "Wireless HART"],
      answer: "IEEE 802.15.4",
    },
    {
      question:
        "The IEEE 802.15.4 standard uses DSSS scheme for data transmission. What does DSSS stand for?",
      options: [
        "Double Spread Spectrum Scheme",
        "Direct-Sequence Spread Spectrum",
        "Discrete-Sequence Spread Spectrum",
        "Dynamic-Sequence Spread Spectrum",
      ],
      answer: "Direct-Sequence Spread Spectrum",
    },
    {
      question: "When does Zigbee use the OQPSK modulation scheme?",
      options: [
        "When the operating frequency is less the 2.4 GHz",
        "When the operating frequency is more than 2.4 GHz",
        "When the operating frequency is 2.4 GHz",
        "All of the above",
      ],
      answer: "When the operating frequency is 2.4 GHz",
    },
    {
      question:
        "Which of the following statements is true about the end devices in Zigbee protocol?",
      options: [
        "End devices do not participate in data routing",
        "End device manages and controls the network",
        "End devices contribute in data relaying",
        "There can be only one end device in a Zigbee network",
      ],
      answer: "End devices do not participate in data routing",
    },
    {
      question:
        "What is the maximum packet size supported by IEEE 802.15.4 standard?",
      options: ["1280 bytes", "125 bytes", "127 bytes", "256 bytes"],
      answer: "127 bytes",
    },
    {
      question: "Z-wave uses ___ network topology.",
      options: ["Bus", "Star", "Tree", "Mesh"],
      answer: "Mesh",
    },
    {
      question:
        "Passive tags in RFID are powered by their own power source. True or False?",
      options: ["True", "False"],
      answer: "False",
    },
    {
      question: "What is the full form of IETF in the context of the Internet?",
      options: [
        "Internet Enforced Task Force",
        "Internet for Engineers Task Force",
        "Internet Engineers Task Force",
        "Internet Engineering Task Force",
      ],
      answer: "Internet Engineering Task Force",
    },
    {
      question: "MQTT works on ___ framework on top of TCP/IP.",
      options: [
        "Push/Pull",
        "Publish/Subscribe",
        "Client/Server",
        "None of the above",
      ],
      answer: "Publish/Subscribe",
    },
  ],
  // <!-------------------------------------------- WEEK 2---------------------------------------------------------->
  "Week 2": [
    {
      question: "Which of the following is not a part of a smart product?",
      options: [
        "Physical Components",
        "Smart Components",
        "Connectivity Components",
        "Logistics Components",
      ],
      answer: "Logistics Components",
    },
    {
      question: "Which of the following is true for Smart Products?",
      options: [
        "They are disconnected physical products",
        "They are always virtual entities",
        "They are physical products with sensing, processing and communicating capabilities",
        "They have no real-world application",
      ],
      answer:
        "They are physical products with sensing, processing and communicating capabilities",
    },
    {
      question:
        "The __ layer provides interfaces and communication across the devices in IIoT architecture.",
      options: ["Network", "Edge", "Perception", "Application"],
      answer: "Network",
    },
    {
      question:
        "Which among the following is not an application layer protocol in IIoT?",
      options: ["MQTT", "COAP", "DDS", "IPv6"],
      answer: "IPv6",
    },
    {
      question: "Which among the following is a key challenge in IIoT?",
      options: ["Automation", "Scalability", "Data Sharing", "Data Security"],
      answer: "Data Security",
    },
    {
      question:
        "The open-source IIoT platform offered by Eclipse Foundation is known as:",
      options: ["Predix", "Kaa", "Thingworx", "MindSphere"],
      answer: "Kaa",
    },
    {
      question: "Which protocol is used by COAP for message exchange?",
      options: ["TCP", "UDP", "HTTP", "FTP"],
      answer: "UDP",
    },
    {
      question:
        "Which of the following is not a key feature of IIoT platforms?",
      options: [
        "Data Ingestion",
        "Data Analytics",
        "Device Management",
        "High Latency",
      ],
      answer: "High Latency",
    },
    {
      question:
        "In MQTT protocol, which component is responsible for distributing messages?",
      options: ["Client", "Broker", "Publisher", "Subscriber"],
      answer: "Broker",
    },
    {
      question: "Which company developed MindSphere as its IIoT platform?",
      options: ["GE", "Siemens", "IBM", "Hitachi"],
      answer: "Siemens",
    },
    {
      question:
        "Which of the following is true about the Perception Layer in IIoT?",
      options: [
        "It acts as the interface between sensors and actuators",
        "It is responsible for user interaction",
        "It is responsible for storage",
        "It performs analytics",
      ],
      answer: "It acts as the interface between sensors and actuators",
    },
    {
      question: "Which company developed the ThingWorx IIoT platform?",
      options: ["PTC", "GE", "IBM", "Intel"],
      answer: "PTC",
    },
    {
      question:
        "In IIoT, the communication between machines without human intervention is known as:",
      options: ["M2H", "H2M", "M2M", "H2H"],
      answer: "M2M",
    },
    {
      question: "What is the role of the Edge Layer in IIoT architecture?",
      options: [
        "Data ingestion and pre-processing",
        "End-user interface",
        "Application analytics",
        "Cloud orchestration",
      ],
      answer: "Data ingestion and pre-processing",
    },
    {
      question: "Which of the following is not an IIoT platform?",
      options: ["Predix", "ThingWorx", "Amazon Alexa", "Kaa"],
      answer: "Amazon Alexa",
    },
  ],
  // <!-------------------------------------------- WEEK 3---------------------------------------------------------->
  "Week 3": [
    {
      question:
        "Which of the following is an example of a smart wearable device?",
      options: ["Smartwatch", "Smart fridge", "Smart TV", "Smart fan"],
      answer: "Smartwatch",
    },
    {
      question:
        "Which technology helps improve the accuracy and precision of positioning systems?",
      options: ["Bluetooth", "GNSS", "Wi-Fi", "Ethernet"],
      answer: "GNSS",
    },
    {
      question:
        "In smart transportation, which of the following is used to detect the presence of vehicles?",
      options: [
        "Temperature sensor",
        "Light sensor",
        "Ultrasonic sensor",
        "Inductive loop sensor",
      ],
      answer: "Inductive loop sensor",
    },
    {
      question: 'What does the term "geofencing" refer to?',
      options: [
        "Virtual perimeter for a real-world geographic area",
        "Fencing used in GPS devices",
        "Physical GPS boundary",
        "Network firewall for location services",
      ],
      answer: "Virtual perimeter for a real-world geographic area",
    },
    {
      question: "Which of the following is a benefit of smart cities?",
      options: [
        "Reduced urban mobility",
        "Increased energy consumption",
        "Efficient resource utilization",
        "Manual traffic management",
      ],
      answer: "Efficient resource utilization",
    },
    {
      question: "Smart parking systems rely on which type of sensors?",
      options: ["Accelerometer", "Ultrasonic", "Thermal", "Light"],
      answer: "Ultrasonic",
    },
    {
      question:
        "Which protocol is primarily used for exchanging sensor data in smart buildings?",
      options: ["SMTP", "BACnet", "FTP", "HTTP"],
      answer: "BACnet",
    },
    {
      question: "What is a major challenge for smart healthcare systems?",
      options: [
        "Data privacy and security",
        "Wireless communication",
        "Low power sensors",
        "AI support",
      ],
      answer: "Data privacy and security",
    },
    {
      question:
        "Which layer of the smart city architecture collects data from the physical environment?",
      options: [
        "Data processing layer",
        "Application layer",
        "Perception layer",
        "Network layer",
      ],
      answer: "Perception layer",
    },
    {
      question: "Which one of these is a smart agriculture application?",
      options: [
        "Soil moisture monitoring",
        "Cloud gaming",
        "e-Commerce",
        "Digital library",
      ],
      answer: "Soil moisture monitoring",
    },
    {
      question:
        "Which communication protocol is most suitable for real-time IoT applications in smart factories?",
      options: ["MQTT", "CoAP", "DDS", "HTTP"],
      answer: "DDS",
    },
    {
      question:
        "Which sensor is used to detect harmful gases in smart environments?",
      options: [
        "Temperature sensor",
        "Gas sensor",
        "Proximity sensor",
        "Infrared sensor",
      ],
      answer: "Gas sensor",
    },
    {
      question: "Which technology enables energy management in smart homes?",
      options: ["Smart meters", "GPS", "CCTV", "NFC"],
      answer: "Smart meters",
    },
    {
      question:
        "In a smart grid, what balances supply and demand in real-time?",
      options: [
        "Power meter",
        "Control center",
        "Load balancer",
        "Smart inverter",
      ],
      answer: "Control center",
    },
    {
      question:
        "Which of the following is not a feature of smart manufacturing?",
      options: [
        "Predictive maintenance",
        "Manual data entry",
        "Automation",
        "Real-time monitoring",
      ],
      answer: "Manual data entry",
    },
  ],
  // <!-------------------------------------------- WEEK 4---------------------------------------------------------->
  "Week 4": [
    {
      question:
        "Which of the following is an example of industrial safety equipment?",
      options: ["Smart helmet", "Smartphone", "Smart bulb", "Smart TV"],
      answer: "Smart helmet",
    },
    {
      question:
        "What is the primary purpose of a vibration sensor in manufacturing?",
      options: [
        "Measuring temperature",
        "Detecting humidity",
        "Monitoring equipment health",
        "Controlling lights",
      ],
      answer: "Monitoring equipment health",
    },
    {
      question: "Which of the following best describes predictive maintenance?",
      options: [
        "Fixing machines after they break",
        "Periodic scheduled maintenance",
        "Using data to anticipate equipment failure",
        "Manual checking of equipment",
      ],
      answer: "Using data to anticipate equipment failure",
    },
    {
      question: "What type of data does a temperature sensor collect?",
      options: ["Speed", "Vibration", "Heat", "Humidity"],
      answer: "Heat",
    },
    {
      question:
        "Which protocol is commonly used for communication in industrial automation?",
      options: ["BACnet", "Modbus", "HTTP", "SMTP"],
      answer: "Modbus",
    },
    {
      question: "What does a PLC do in industrial settings?",
      options: [
        "Stores data in the cloud",
        "Controls industrial processes",
        "Measures air quality",
        "Provides internet access",
      ],
      answer: "Controls industrial processes",
    },
    {
      question: "Which one is an edge device in IIoT?",
      options: ["Cloud server", "Mobile app", "Sensor node", "Data center"],
      answer: "Sensor node",
    },
    {
      question:
        "Which standard ensures interoperability between industrial automation devices?",
      options: ["IEEE 1451", "OPC UA", "Zigbee", "LoRaWAN"],
      answer: "OPC UA",
    },
    {
      question: "What is one advantage of edge computing in IIoT?",
      options: [
        "High latency",
        "Local data processing",
        "Less security",
        "Dependence on the cloud",
      ],
      answer: "Local data processing",
    },
    {
      question:
        "Which component is responsible for data collection in IIoT systems?",
      options: ["Actuator", "Sensor", "Display", "Monitor"],
      answer: "Sensor",
    },
    {
      question:
        "Which industrial protocol supports both serial and Ethernet communication?",
      options: ["OPC UA", "MQTT", "Modbus", "HTTP"],
      answer: "Modbus",
    },
    {
      question:
        "Which of the following is a component of predictive maintenance?",
      options: [
        "Augmented reality",
        "Data analytics",
        "RFID tag",
        "Barcode scanner",
      ],
      answer: "Data analytics",
    },
    {
      question:
        "Which of these is used for condition monitoring of rotating machines?",
      options: [
        "Humidity sensor",
        "Pressure sensor",
        "Vibration sensor",
        "Light sensor",
      ],
      answer: "Vibration sensor",
    },
    {
      question:
        "What type of system allows human operators to interact with industrial processes?",
      options: ["PLC", "SCADA", "RTU", "HMI"],
      answer: "HMI",
    },
    {
      question:
        "Which technology is crucial for analyzing data from industrial machines?",
      options: ["Cloud storage", "Data analytics", "Wi-Fi", "Firewall"],
      answer: "Data analytics",
    },
  ],
  // <!----------------------------------------------------- WEEK 5---------------------------------------------------------->
  "Week 5": [
    {
      question:
        "Which technology is commonly used in smart farming for real-time data collection?",
      options: ["NFC", "RFID", "LPWAN", "Bluetooth"],
      answer: "LPWAN",
    },
    {
      question: "Which type of drone is used in precision agriculture?",
      options: [
        "Delivery drone",
        "Surveillance drone",
        "Agricultural drone",
        "Entertainment drone",
      ],
      answer: "Agricultural drone",
    },
    {
      question:
        "Which of the following helps in water conservation in agriculture?",
      options: [
        "Pest control",
        "Irrigation management systems",
        "Fertilizer application",
        "Seed optimization",
      ],
      answer: "Irrigation management systems",
    },
    {
      question: "Which sensor is used for detecting soil moisture?",
      options: [
        "Gas sensor",
        "Humidity sensor",
        "Moisture sensor",
        "Optical sensor",
      ],
      answer: "Moisture sensor",
    },
    {
      question: "What is the benefit of using sensors in smart farming?",
      options: [
        "Increased fuel use",
        "Reduced accuracy",
        "Efficient resource utilization",
        "Decreased yields",
      ],
      answer: "Efficient resource utilization",
    },
    {
      question:
        "Which wireless communication method is suitable for transmitting data over long distances in smart agriculture?",
      options: ["Wi-Fi", "LoRa", "Zigbee", "Bluetooth"],
      answer: "LoRa",
    },
    {
      question: "Which of the following is not a feature of smart agriculture?",
      options: [
        "Real-time monitoring",
        "Manual data recording",
        "Automated irrigation",
        "Pest detection",
      ],
      answer: "Manual data recording",
    },
    {
      question:
        "Which of the following is used to measure plant health in smart agriculture?",
      options: ["NDVI", "RFID", "MQTT", "OPC UA"],
      answer: "NDVI",
    },
    {
      question: "What does NDVI stand for?",
      options: [
        "Normalized Difference Vegetation Index",
        "National Digital Vegetation Indicator",
        "New Drone Visualization Interface",
        "Non-Digital Value Index",
      ],
      answer: "Normalized Difference Vegetation Index",
    },
    {
      question:
        "Which protocol is commonly used for sensor communication in agriculture IoT systems?",
      options: ["HTTP", "MQTT", "FTP", "SMTP"],
      answer: "MQTT",
    },
    {
      question: "Which of the following is not a benefit of smart agriculture?",
      options: [
        "Increased productivity",
        "Water wastage",
        "Disease detection",
        "Efficient fertilizer use",
      ],
      answer: "Water wastage",
    },
    {
      question: "Which technology is used for remote field monitoring?",
      options: [
        "GPS",
        "Camera sensors",
        "All of the above",
        "None of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "Which of the following helps optimize fertilizer usage in smart agriculture?",
      options: [
        "Weather forecasting",
        "Soil nutrient sensors",
        "Drone delivery",
        "Automated harvesting",
      ],
      answer: "Soil nutrient sensors",
    },
    {
      question:
        "Which component is essential for remote sensing in agriculture?",
      options: [
        "Cloud computing",
        "Mobile apps",
        "Satellites",
        "Bluetooth speakers",
      ],
      answer: "Satellites",
    },
    {
      question: "What is the role of AI in smart agriculture?",
      options: [
        "Disrupts traditional farming",
        "Improves decision-making through data analysis",
        "Replaces water sources",
        "Generates electricity",
      ],
      answer: "Improves decision-making through data analysis",
    },
  ],
  // <!-------------------------------------------- WEEK 6---------------------------------------------------------->
  "Week 6": [
    {
      question:
        "Which component is responsible for regulating temperature in HVAC systems?",
      options: ["Compressor", "Thermostat", "Sensor", "Evaporator"],
      answer: "Thermostat",
    },
    {
      question: "What does HVAC stand for?",
      options: [
        "Heat Ventilation and Coil",
        "Heat and Voltage Control",
        "Heating, Ventilation and Air Conditioning",
        "High Voltage Air Controller",
      ],
      answer: "Heating, Ventilation and Air Conditioning",
    },
    {
      question:
        "Which sensor is most appropriate for detecting room occupancy?",
      options: ["Gas sensor", "PIR sensor", "Thermal sensor", "Optical sensor"],
      answer: "PIR sensor",
    },
    {
      question: "What is a common protocol used for HVAC system communication?",
      options: ["Zigbee", "Modbus", "NFC", "BLE"],
      answer: "Modbus",
    },
    {
      question:
        "Which of the following is not a benefit of smart HVAC systems?",
      options: [
        "Energy efficiency",
        "Improved air quality",
        "Manual operation",
        "Remote control",
      ],
      answer: "Manual operation",
    },
    {
      question: "What role does IoT play in modern HVAC systems?",
      options: [
        "Reduces connectivity",
        "Increases manual work",
        "Enables remote monitoring and control",
        "Removes sensor functionality",
      ],
      answer: "Enables remote monitoring and control",
    },
    {
      question: "Which of the following is a parameter monitored in HVAC?",
      options: ["Soil moisture", "CO2 level", "UV radiation", "Magnetic field"],
      answer: "CO2 level",
    },
    {
      question:
        "Which device collects data and sends it to the cloud in smart HVAC systems?",
      options: ["Relay", "Sensor hub", "Actuator", "Modem"],
      answer: "Sensor hub",
    },
    {
      question: "Which of the following is used for temperature sensing?",
      options: ["DHT11", "LDR", "MQ-2", "HC-SR04"],
      answer: "DHT11",
    },
    {
      question:
        "Which standard communication protocol allows multi-vendor HVAC devices to operate together?",
      options: ["BACnet", "USB", "SMTP", "HTTPS"],
      answer: "BACnet",
    },
    {
      question: "What is a primary challenge in deploying smart HVAC systems?",
      options: [
        "Wireless connectivity",
        "Cost",
        "Cloud storage",
        "User training",
      ],
      answer: "Cost",
    },
    {
      question: "Which sensor is used to detect humidity?",
      options: ["LDR", "DHT11", "IR", "PIR"],
      answer: "DHT11",
    },
    {
      question: "Which of the following can control the compressor in HVAC?",
      options: ["Actuator", "Modbus", "MQTT", "Firewall"],
      answer: "Actuator",
    },
    {
      question: "What is the function of a relay in smart HVAC?",
      options: [
        "Data analysis",
        "System cooling",
        "Switching devices on/off",
        "Transmitting data",
      ],
      answer: "Switching devices on/off",
    },
    {
      question:
        "Which wireless communication method is suitable for HVAC in buildings?",
      options: ["LoRa", "Zigbee", "RFID", "NFC"],
      answer: "Zigbee",
    },
  ],
  // <!-------------------------------------------- WEEK 7---------------------------------------------------------->
  "Week 7": [
    {
      question:
        "Which of the following technologies is used for automatic lighting control in smart buildings?",
      options: ["Wi-Fi", "Zigbee", "NFC", "Infrared"],
      answer: "Zigbee",
    },
    {
      question:
        "Which of these sensors is commonly used for smart lighting systems?",
      options: ["PIR sensor", "Gas sensor", "Sound sensor", "Rain sensor"],
      answer: "PIR sensor",
    },
    {
      question: "Which of the following is a benefit of smart lighting?",
      options: [
        "Manual control",
        "Energy efficiency",
        "Over-illumination",
        "Fixed schedules",
      ],
      answer: "Energy efficiency",
    },
    {
      question:
        "Which protocol is widely used for lighting control in commercial buildings?",
      options: ["BACnet", "Modbus", "DALI", "HTTP"],
      answer: "DALI",
    },
    {
      question: "Which type of sensor detects light levels in smart buildings?",
      options: ["LDR", "Ultrasonic", "Thermal", "PIR"],
      answer: "LDR",
    },
    {
      question:
        "Which smart lighting feature adjusts brightness based on ambient light?",
      options: [
        "Motion sensing",
        "Daylight harvesting",
        "Color tuning",
        "Scheduling",
      ],
      answer: "Daylight harvesting",
    },
    {
      question: "What does DALI stand for?",
      options: [
        "Digital Addressable Lighting Interface",
        "Dynamic Automated Light Integration",
        "Digital Analog Light Interface",
        "Dual Access Light Indicator",
      ],
      answer: "Digital Addressable Lighting Interface",
    },
    {
      question:
        "Which of the following is not a benefit of smart lighting systems?",
      options: [
        "Improved comfort",
        "Remote control",
        "Excessive energy usage",
        "Automation",
      ],
      answer: "Excessive energy usage",
    },
    {
      question: "What is a typical use of motion sensors in smart buildings?",
      options: [
        "To increase humidity",
        "To control ventilation",
        "To switch lights ON/OFF",
        "To manage internet speed",
      ],
      answer: "To switch lights ON/OFF",
    },
    {
      question:
        "Which of the following is used for wireless lighting control in homes?",
      options: ["Ethernet", "Zigbee", "RFID", "SCADA"],
      answer: "Zigbee",
    },
    {
      question: "Which cloud service enables remote lighting control?",
      options: ["Google Drive", "Amazon Alexa", "OneDrive", "Dropbox"],
      answer: "Amazon Alexa",
    },
    {
      question: "Which lighting method adapts to user behavior and presence?",
      options: [
        "Scheduled lighting",
        "Smart adaptive lighting",
        "Manual switch",
        "Centralized dimming",
      ],
      answer: "Smart adaptive lighting",
    },
    {
      question: "Which of the following is NOT a lighting control strategy?",
      options: [
        "Time scheduling",
        "Occupancy sensing",
        "Loudness detection",
        "Daylight harvesting",
      ],
      answer: "Loudness detection",
    },
    {
      question:
        "Which of the following improves security in smart homes using lighting?",
      options: [
        "Automatic locking",
        "Presence simulation",
        "Temperature control",
        "Sound sensing",
      ],
      answer: "Presence simulation",
    },
    {
      question:
        "Which sensor is useful in smart restrooms for automatic lighting?",
      options: ["Gas sensor", "PIR sensor", "Smoke detector", "Light sensor"],
      answer: "PIR sensor",
    },
  ],
  // <!-------------------------------------------- WEEK 8---------------------------------------------------------->
  "Week 8": [
    {
      question: "Which type of waste bin uses sensors to detect fill level?",
      options: ["Manual bin", "Smart bin", "Garbage bin", "Recyclable bin"],
      answer: "Smart bin",
    },
    {
      question:
        "Which of the following sensors is used for water quality monitoring?",
      options: [
        "Gas sensor",
        "Turbidity sensor",
        "PIR sensor",
        "Pressure sensor",
      ],
      answer: "Turbidity sensor",
    },
    {
      question: "What is the role of a smart meter in smart grids?",
      options: [
        "Reduce power consumption",
        "Monitor energy usage and transmit data",
        "Generate power",
        "Provide customer feedback",
      ],
      answer: "Monitor energy usage and transmit data",
    },
    {
      question: "Which protocol is most suitable for smart energy meters?",
      options: ["MQTT", "Zigbee", "HTTP", "LoRa"],
      answer: "Zigbee",
    },
    {
      question: "Which of the following is a renewable energy source?",
      options: ["Coal", "Oil", "Wind", "Gas"],
      answer: "Wind",
    },
    {
      question: "Which parameter is measured by a flow sensor?",
      options: ["Temperature", "Pressure", "Flow rate", "Humidity"],
      answer: "Flow rate",
    },
    {
      question:
        "Which of these is a component of a smart water management system?",
      options: ["Flow sensor", "Smart plug", "Soil sensor", "Relay"],
      answer: "Flow sensor",
    },
    {
      question: "What is the primary benefit of smart energy systems?",
      options: [
        "Higher consumption",
        "Efficient energy use",
        "Manual metering",
        "Cost increase",
      ],
      answer: "Efficient energy use",
    },
    {
      question:
        "Which of the following is a key challenge in smart waste management?",
      options: [
        "Over-monitoring",
        "Low sensor cost",
        "Connectivity",
        "Excess manpower",
      ],
      answer: "Connectivity",
    },
    {
      question:
        "Which cloud service model is often used in smart utility management?",
      options: ["IaaS", "SaaS", "PaaS", "CaaS"],
      answer: "SaaS",
    },
    {
      question: "Which of these is not a use case of smart utility systems?",
      options: [
        "Smart metering",
        "Remote monitoring",
        "Manual billing",
        "Data analytics",
      ],
      answer: "Manual billing",
    },
    {
      question: "Which device is used for automatic billing in smart grids?",
      options: ["Sensor node", "Smart meter", "Power controller", "RTU"],
      answer: "Smart meter",
    },
    {
      question:
        "Which of the following is used for detecting leaks in pipelines?",
      options: [
        "PIR sensor",
        "Gas sensor",
        "Ultrasonic sensor",
        "Thermal sensor",
      ],
      answer: "Ultrasonic sensor",
    },
    {
      question:
        "What is one key function of a SCADA system in smart utilities?",
      options: [
        "Manual operations",
        "Customer billing",
        "Supervisory control and data acquisition",
        "Remote entertainment",
      ],
      answer: "Supervisory control and data acquisition",
    },
    {
      question: "Which of the following is a goal of smart city utilities?",
      options: [
        "More pollution",
        "Less connectivity",
        "Better resource management",
        "Manual monitoring",
      ],
      answer: "Better resource management",
    },
  ],
  // <!-------------------------------------------- WEEK 9---------------------------------------------------------->
  "Week 9": [
    {
      question:
        "Which of the following technologies is commonly used in vehicle tracking systems?",
      options: ["Wi-Fi", "Zigbee", "GPS", "NFC"],
      answer: "GPS",
    },
    {
      question: "What type of sensor is used to detect tire pressure?",
      options: ["Accelerometer", "TPMS", "Thermistor", "Proximity sensor"],
      answer: "TPMS",
    },
    {
      question: "Which of the following is a benefit of smart transportation?",
      options: [
        "Manual traffic control",
        "Increased fuel usage",
        "Reduced travel time",
        "More congestion",
      ],
      answer: "Reduced travel time",
    },
    {
      question: "Which device collects vehicle data for telematics?",
      options: ["OBD-II", "NFC reader", "Barcode scanner", "Smart watch"],
      answer: "OBD-II",
    },
    {
      question: "Which of the following helps in collision avoidance?",
      options: [
        "Blind spot monitoring",
        "Rear view mirrors",
        "Speedometer",
        "Windshield wipers",
      ],
      answer: "Blind spot monitoring",
    },
    {
      question: "Which protocol is used in vehicular communication systems?",
      options: ["DSRC", "HTTP", "MQTT", "LoRaWAN"],
      answer: "DSRC",
    },
    {
      question: "What does V2V communication stand for?",
      options: [
        "Vehicle to Voltage",
        "Vehicle to Vehicle",
        "Voice to Voice",
        "Vision to Vision",
      ],
      answer: "Vehicle to Vehicle",
    },
    {
      question: "Which of these is not a smart mobility solution?",
      options: [
        "Ride-sharing",
        "Autonomous vehicles",
        "Manual rickshaws",
        "Electric buses",
      ],
      answer: "Manual rickshaws",
    },
    {
      question:
        "Which component is responsible for route optimization in smart logistics?",
      options: ["Barcode", "Routing algorithm", "Scanner", "RFID tag"],
      answer: "Routing algorithm",
    },
    {
      question: "Which sensor detects lane departure?",
      options: [
        "Ultrasonic sensor",
        "Infrared sensor",
        "Camera sensor",
        "Pressure sensor",
      ],
      answer: "Camera sensor",
    },
    {
      question:
        "Which communication technology is used in intelligent traffic systems?",
      options: ["LoRa", "DSRC", "Zigbee", "Bluetooth"],
      answer: "DSRC",
    },
    {
      question:
        "Which of the following is a challenge for autonomous vehicles?",
      options: ["Manual control", "Data security", "Paperwork", "Fuel prices"],
      answer: "Data security",
    },
    {
      question:
        "Which protocol supports low-latency communication for vehicular networks?",
      options: ["HTTP", "DSRC", "FTP", "SMS"],
      answer: "DSRC",
    },
    {
      question:
        "Which of the following sensors is not commonly used in autonomous vehicles?",
      options: ["LiDAR", "Radar", "PIR", "Camera"],
      answer: "PIR",
    },
    {
      question: "What is the purpose of geofencing in logistics?",
      options: [
        "Enable weather tracking",
        "Virtual perimeter enforcement for tracking",
        "Sensor calibration",
        "Manual billing",
      ],
      answer: "Virtual perimeter enforcement for tracking",
    },
  ],
  // <!-------------------------------------------- WEEK 10---------------------------------------------------------->
  "Week 10": [
    {
      question: "Which of the following is a core benefit of Industrial IoT?",
      options: [
        "Increased manual labor",
        "Improved operational efficiency",
        "Reduced automation",
        "Higher energy consumption",
      ],
      answer: "Improved operational efficiency",
    },
    {
      question:
        "Which standard is widely used in industrial automation for device communication?",
      options: ["HTTP", "OPC UA", "SMTP", "FTP"],
      answer: "OPC UA",
    },
    {
      question:
        "Which cloud service is typically used for storing and analyzing industrial data?",
      options: ["Gmail", "AWS IoT", "Google Docs", "Dropbox"],
      answer: "AWS IoT",
    },
    {
      question:
        "Which of the following is a key challenge of deploying IIoT systems?",
      options: [
        "Data security",
        "Sensor cost",
        "Increased manpower",
        "Manual processes",
      ],
      answer: "Data security",
    },
    {
      question: "Which of these is not a cloud deployment model?",
      options: [
        "Private cloud",
        "Public cloud",
        "Virtual cloud",
        "Hybrid cloud",
      ],
      answer: "Virtual cloud",
    },
    {
      question: "Which of the following refers to cloud computing on the edge?",
      options: [
        "Remote computing",
        "Distributed computing",
        "Edge computing",
        "Fog computing",
      ],
      answer: "Fog computing",
    },
    {
      question:
        "Which communication protocol is designed for lightweight communication in IoT?",
      options: ["HTTP", "SMTP", "MQTT", "FTP"],
      answer: "MQTT",
    },
    {
      question: "What is one function of a digital twin in manufacturing?",
      options: [
        "Physical replication",
        "Energy generation",
        "Virtual representation for real-time monitoring",
        "Manual record keeping",
      ],
      answer: "Virtual representation for real-time monitoring",
    },
    {
      question:
        "Which layer in cloud architecture manages applications and services?",
      options: ["Infrastructure", "Platform", "Application", "Network"],
      answer: "Application",
    },
    {
      question:
        "Which of the following is a component of predictive maintenance?",
      options: [
        "Preventive maintenance schedule",
        "Manual inspection",
        "Data analytics",
        "None of the above",
      ],
      answer: "Data analytics",
    },
    {
      question: "Which among the following is a platform for Industrial IoT?",
      options: ["Netflix", "ThingWorx", "WhatsApp", "Trello"],
      answer: "ThingWorx",
    },
    {
      question:
        "Which of the following ensures access control and user identity management in IIoT?",
      options: ["Firewall", "IAM", "VPN", "MAC address"],
      answer: "IAM",
    },
    {
      question:
        "Which of the following is used to track machine performance over time?",
      options: ["Sensors", "Dashboards", "Digital twin", "All of the above"],
      answer: "All of the above",
    },
    {
      question:
        "What type of cloud model provides infrastructure resources on-demand?",
      options: ["IaaS", "PaaS", "SaaS", "DaaS"],
      answer: "IaaS",
    },
    {
      question:
        "Which type of maintenance avoids unexpected machine failures using real-time data?",
      options: [
        "Scheduled maintenance",
        "Preventive maintenance",
        "Predictive maintenance",
        "Corrective maintenance",
      ],
      answer: "Predictive maintenance",
    },
  ],
  // <!-------------------------------------------- WEEK 11---------------------------------------------------------->
  "Week 11": [
    {
      question:
        "Which of the following technologies is useful in disaster management?",
      options: ["RFID", "GPS", "Zigbee", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which sensor is used for fire detection in smart buildings?",
      options: ["Flame sensor", "PIR sensor", "Temperature sensor", "LDR"],
      answer: "Flame sensor",
    },
    {
      question: "Which of these is a wearable health monitoring device?",
      options: ["Smartwatch", "Smart plug", "Smart door", "Smart TV"],
      answer: "Smartwatch",
    },
    {
      question: "Which sensor measures the heart rate?",
      options: [
        "Pulse sensor",
        "Gas sensor",
        "Vibration sensor",
        "Ultrasonic sensor",
      ],
      answer: "Pulse sensor",
    },
    {
      question: "What is the key use of smart wearables in healthcare?",
      options: [
        "Entertainment",
        "Health monitoring",
        "Gaming",
        "Remote TV control",
      ],
      answer: "Health monitoring",
    },
    {
      question:
        "Which protocol is commonly used for sending healthcare sensor data?",
      options: ["FTP", "MQTT", "HTTP", "SMTP"],
      answer: "MQTT",
    },
    {
      question: "Which challenge is most critical in smart healthcare systems?",
      options: ["Battery life", "Data privacy", "Sensor size", "Connectivity"],
      answer: "Data privacy",
    },
    {
      question:
        "Which device enables location tracking in emergency situations?",
      options: ["Wi-Fi router", "RFID tag", "GPS device", "Bluetooth speaker"],
      answer: "GPS device",
    },
    {
      question: "What role does cloud computing play in healthcare?",
      options: [
        "Storing and processing medical data",
        "Temperature monitoring",
        "Power supply",
        "Manual testing",
      ],
      answer: "Storing and processing medical data",
    },
    {
      question: "Which wearable device tracks physical activity?",
      options: [
        "Fitness tracker",
        "Smart plug",
        "Smart switch",
        "Smart speaker",
      ],
      answer: "Fitness tracker",
    },
    {
      question: "Which of the following supports fall detection?",
      options: ["Accelerometer", "Gas sensor", "Thermal sensor", "GPS"],
      answer: "Accelerometer",
    },
    {
      question:
        "Which of the following enables real-time alerts in patient monitoring?",
      options: [
        "Wired connections",
        "Email reports",
        "Sensor integration with cloud",
        "Printed log books",
      ],
      answer: "Sensor integration with cloud",
    },
    {
      question:
        "Which parameter is NOT typically monitored in wearable healthcare devices?",
      options: [
        "Temperature",
        "Heart rate",
        "Oxygen level",
        "Color preference",
      ],
      answer: "Color preference",
    },
    {
      question:
        "Which is a major advantage of using IoT in disaster management?",
      options: [
        "Increased manual efforts",
        "Faster emergency response",
        "Paper-based records",
        "None",
      ],
      answer: "Faster emergency response",
    },
    {
      question: "Which of the following is NOT a wearable healthcare sensor?",
      options: ["ECG", "SpO2", "Camera", "Temperature"],
      answer: "Camera",
    },
  ],
  // <!-------------------------------------------- WEEK 12---------------------------------------------------------->
  "Week 12": [
    {
      question: "Which technology is used to secure IoT communications?",
      options: ["SSL/TLS", "HTTP", "POP3", "UDP"],
      answer: "SSL/TLS",
    },
    {
      question: "Which of the following is a risk in IoT data sharing?",
      options: [
        "Data integrity",
        "Data transparency",
        "Data leakage",
        "Data accessibility",
      ],
      answer: "Data leakage",
    },
    {
      question: "Which of these ensures confidentiality in IoT systems?",
      options: [
        "Encryption",
        "Broadcasting",
        "Data replication",
        "Open access",
      ],
      answer: "Encryption",
    },
    {
      question: "What is the goal of access control in IoT?",
      options: [
        "Granting access to all users",
        "Restricting unauthorized access",
        "Sharing credentials",
        "None of the above",
      ],
      answer: "Restricting unauthorized access",
    },
    {
      question: "Which method is used to identify a user or device in IoT?",
      options: ["Authentication", "Streaming", "Patching", "Scanning"],
      answer: "Authentication",
    },
    {
      question: "What does availability in security refer to?",
      options: [
        "Data is visible to hackers",
        "Services are always operational",
        "Data is encrypted",
        "Services are randomly assigned",
      ],
      answer: "Services are always operational",
    },
    {
      question: "Which of the following is NOT a security concern in IoT?",
      options: ["Unauthorized access", "Data breach", "Latency", "Malware"],
      answer: "Latency",
    },
    {
      question: "What is the use of firewalls in IoT systems?",
      options: [
        "Speed up network",
        "Filter incoming and outgoing traffic",
        "Increase latency",
        "Data compression",
      ],
      answer: "Filter incoming and outgoing traffic",
    },
    {
      question: "Which of these helps maintain data integrity?",
      options: ["Checksums", "Logs", "Email", "Chatbots"],
      answer: "Checksums",
    },
    {
      question: "Which is a challenge in managing IoT devices securely?",
      options: [
        "Ease of installation",
        "Scalability",
        "Battery life",
        "Resource constraints",
      ],
      answer: "Resource constraints",
    },
    {
      question:
        "Which type of attack floods a network with traffic to crash systems?",
      options: ["Phishing", "DDoS", "Spoofing", "Sniffing"],
      answer: "DDoS",
    },
    {
      question: "Which of these helps ensure secure software updates?",
      options: [
        "Over-the-air update with authentication",
        "Manual patching only",
        "Shared passwords",
        "Disabled updates",
      ],
      answer: "Over-the-air update with authentication",
    },
    {
      question: "Which of the following stores and processes identity data?",
      options: ["IAM system", "Firewall", "Proxy", "Router"],
      answer: "IAM system",
    },
    {
      question:
        "Which security principle ensures data is not altered by unauthorized parties?",
      options: ["Integrity", "Availability", "Redundancy", "Accessibility"],
      answer: "Integrity",
    },
    {
      question: "Which device is commonly used for network security?",
      options: ["Firewall", "Sensor", "Actuator", "Light switch"],
      answer: "Firewall",
    },
  ],
};

const weekList = document.getElementById("weekList");
const questionsDiv = document.getElementById("questions");
const weekTitle = document.getElementById("weekTitle");

Object.keys(quizData).forEach((week) => {
  const li = document.createElement("li");
  li.textContent = week;
  li.onclick = () => loadQuestions(week);
  weekList.appendChild(li);
});

function loadQuestions(week) {
  weekTitle.textContent = week;
  questionsDiv.innerHTML = "";

  if (quizData[week].length === 0) {
    questionsDiv.innerHTML = "<p>No questions available for this week.</p>";
    return;
  }

  quizData[week].forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    let imageHtml = item.image
      ? `<img src="${item.image}" alt="Question Image">`
      : "";
    let optionsHtml = item.options
      .map(
        (option) => `
                  <li>
                      <label>
                          <input type="radio" name="q${index}" value="${option}"> ${option}
                      </label>
                  </li>`
      )
      .join("");

    questionDiv.innerHTML = `
              ${imageHtml}
              <strong>Q${index + 1}:</strong> ${item.question}
              <ul>${optionsHtml}</ul>
              <button onclick="showAnswer(${index})">Show Answer</button>
              <p class="answer" id="answer${index}"></p>`;

    questionsDiv.appendChild(questionDiv);
  });

  // Add Submit Button at the end
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Answers";
  submitButton.className = "submit-btn";
  submitButton.onclick = () => checkAnswers(week);
  questionsDiv.appendChild(submitButton);
}

function showAnswer(index) {
  const answerDisplay = document.getElementById(`answer${index}`);
  const correctAnswer = quizData[weekTitle.textContent][index].answer;
  answerDisplay.textContent = `Correct Answer: ${correctAnswer}`;
  answerDisplay.style.display = "block";
}

function checkAnswers(week) {
  quizData[week].forEach((item, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    const answerDisplay = document.getElementById(`answer${index}`);

    if (selectedOption) {
      if (selectedOption.value === item.answer) {
        answerDisplay.textContent = "Correct ✅";
        answerDisplay.className = "answer correct";
      } else {
        answerDisplay.textContent = `Incorrect ❌ (Correct: ${item.answer})`;
        answerDisplay.className = "answer incorrect";
      }
    } else {
      answerDisplay.textContent = "No answer selected ❌";
      answerDisplay.className = "answer incorrect";
    }

    answerDisplay.style.display = "block";
  });

  // Disable all options after submission
  document.querySelectorAll("input[type=radio]").forEach((input) => {
    input.disabled = true;
  });
}
