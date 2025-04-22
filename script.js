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
        '"Sensor is sensitive to only the measured property. It is insensitive to any other property besides what it is designed to detect." True or false?',
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        '……….. …..sensors produce an output proportional to the magnitude of the quantity being measured." Fill in the blank.',
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
        "When the operating frequency is less than 2.4 GHz",
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
      question: "Z-wave uses __ network topology. Fill in the blank.",
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
      question:
        "MQTT works on __ framework on top of TCP/IP. Fill in the blank.",
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
      question:
        "Which of the following is a feature of the Fourth industrial revolution?",
      options: [
        "Use of Mainframes and the Internet",
        "Mass production",
        "Utilization of machines in production processes",
        "Use of AI ML, and CPS",
      ],
      answer: "Use of AI ML, and CPS",
    },
    {
      question:
        "…….. has helped in producing objects that are mutable and adaptable. Fill in the blank.",
      options: [
        "Digital fabrication",
        "Additive manufacturing",
        "Synthetic biology",
        "None of the above",
      ],
      answer: "Digital fabrication",
    },
    {
      question: "Select the option that best describes the tipping point.",
      options: [
        "Radical change in the future that leads to innovation",
        "Change that leads to failing economy",
        "A point which marks the profit in business",
        "A space in factory floor for goods collection",
      ],
      answer: "Radical change in the future that leads to innovation",
    },
    {
      question:
        "Which of the following is/are drivers of sustainability in Industry 4.0?",
      options: [
        "Globalization",
        "Socio-economic factors",
        "Environmental factors",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "Information regulation in public is covered under which of the following laws?",
      options: [
        "Employment and Labor rules",
        "Advertisement regulations",
        "Environmental rules",
        "Privacy regulation",
      ],
      answer: "Advertisement regulations",
    },
    {
      question: "How does population growth affect the manufacturing industry?",
      options: [
        "It affects the food supplies",
        "It affects the availability of industrial locations",
        "It affects the political actions and outcomes",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "Which of the following statements is true about recession?",
      options: [
        "Recession is the extremity of depression",
        "Recession stays for only two months",
        "Recession is observable on GDP of a country",
        "All of the above",
      ],
      answer: "Recession is observable on GDP of a country",
    },
    {
      question:
        "The lean manufacturing system, introduced by Toyota, is based on which of the following approaches?",
      options: ["JIDOKA", "JIT", "Both a and b", "SUDOKA"],
      answer: "Both a and b",
    },
    {
      question:
        "Which of the following is not an impact of the Lean production system on manufacturing?",
      options: [
        "Highest lead time",
        "Low cost",
        "High quality",
        "All of the above",
      ],
      answer: "Highest lead time",
    },
    {
      question: "What is KPI in the context of performance management?",
      options: [
        "Key Product Index",
        "Key Performance Indicator",
        "Key Performance Index",
        "Key Product Identifier",
      ],
      answer: "Key Performance Indicator",
    },
    {
      question:
        "Which of the following statements is/are true about smart and connected products?",
      options: [
        "Smart and connected products are cheaper",
        "Decrease environmental impact",
        "Improves recall process of products",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "Lock-in centric business models helps in",
      options: [
        "Preventing customer migration",
        "Eliminating errors",
        "Making faster transactions",
        "Creating new market for innovative product",
      ],
      answer: "Preventing customer migration",
    },
    {
      question:
        "What is the function of the digital layer in a smart business architecture?",
      options: [
        "Data storage",
        "Data analysis",
        "Data processing",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "Which of the following is not a characteristic of a smart factory?",
      options: ["Proactivity", "Agility", "Opaque", "Optimization"],
      answer: "Opaque",
    },
    {
      question:
        "Which of the following falls under the Agility characteristic of a smart factory?",
      options: [
        "Predicting future challenges",
        "Real-time tracking",
        "Connected smart devices",
        "Self-configuration",
      ],
      answer: "Self-configuration",
    },
  ],
  // <!-------------------------------------------- WEEK 3---------------------------------------------------------->
  "Week 3": [
    {
      question: "What is the full form of CPS?",
      options: [
        "Central-Physical System",
        "Cyber-Physical System",
        "Cyber-Property System",
        "Central-Private System",
      ],
      answer: "Cyber-Physical System",
    },
    {
      question: "Select the statement(s) that best describes a CPS.",
      options: [
        "A CPS interacts with the physical world through sensors and actuators.",
        "A CPS is a network of physical and computational components.",
        "It is a set of multiple networked embedded systems.",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What does conversion refer to in context of CPS architecture for IIoT?",
      options: [
        "Conversion of CPS into individual components.",
        "Conversion of machine data to meaningful information.",
        "Conversion of present data into future data prediction.",
        "Conversion of analog signal to digital signal.",
      ],
      answer: "Conversion of machine data to meaningful information.",
    },
    {
      question:
        "Select the statement which describes one of the limitations of smart sensors.",
      options: [
        "Sensor data aggregation not possible.",
        "Cannot connect with an actuator.",
        "Cannot connect to a network",
        "All of the above",
      ],
      answer: "Sensor data aggregation not possible.",
    },
    {
      question:
        "__ sensors are capable of processing sensed data and performing pre-defined functions by processing data. Fill in the blank.",
      options: ["Smart", "Intelligent", "Digital", "Scalar"],
      answer: "Intelligent",
    },
    {
      question:
        "Which of the following allows application-specific customization of sensor nodes?",
      options: [
        "Smart sensors",
        "Intelligent sensors",
        "ADC",
        "None of the above",
      ],
      answer: "Intelligent sensors",
    },
    {
      question:
        "………allows employees to share information and solve business problems. Fill in the blank.",
      options: [
        "Sharing platform",
        "Business platform",
        "E-Commerce platform",
        "Collaboration platform",
      ],
      answer: "Collaboration platform",
    },
    {
      question:
        "Coordination is one of the four keys that enable collaboration productivity. How can one initiate coordination?",
      options: [
        "Provide authority to decision-makers in a decentralized system.",
        "Format data model to store every data element exactly once.",
        "Bridge the gap between the virtual and physical world.",
        "All of the above",
      ],
      answer: "Provide authority to decision-makers in a decentralized system.",
    },
    {
      question:
        "How many components are there in PLM that are used to handle a product across its lifetime?",
      options: ["3", "5", "7", "9"],
      answer: "9",
    },
    {
      question:
        "Which of the following statements is true about Augmented reality?",
      options: [
        "It is a mixture of interactive hardware and software-based artificial environment..",
        "It creates and enhances an imaginary reality.",
        "It amplifies the present perception of reality.",
        "All of the above",
      ],
      answer: "It amplifies the present perception of reality.",
    },
    {
      question: "What is projection-based AR?",
      options: [
        "It gives outcomes by projecting light on real world surfaces.",
        "It substitutes the original view with of an object with the augmented view.",
        "It gives the output when a marker is detected.",
        "It is used for GPS-denied regions",
      ],
      answer: "It gives outcomes by projecting light on real world surfaces.",
    },
    {
      question: "Semi-immersive simulation is a type of",
      options: ["AR", "VR", "Both a and b", "None of the above"],
      answer: "VR",
    },
    {
      question:
        "Which of the following search methods is used by a computer program that does not use artificial intelligence?",
      options: [
        "Heuristic",
        "Algorithmic",
        "Approximation",
        "None of the above",
      ],
      answer: "Algorithmic",
    },
    {
      question: "Select the correct statement.",
      options: [
        "Artificial intelligence is a type of machine learning",
        "Deep learning is a subset of machine learning",
        "Deep learning cannot learn the features on its own.",
        "Machine learning is a subset of deep learning.",
      ],
      answer: "Deep learning is a subset of machine learning",
    },
    {
      question:
        "Which of the following statements is true about the GFS file system?",
      options: [
        "It is based on the Hadoop Distributed File System",
        "It is a distributed file system that supports large-scale file system",
        "It is a centralized file management system",
        "It is a file system designed specifically for unstructured data management",
      ],
      answer:
        "It is a distributed file system that supports large-scale file system",
    },
  ],
  // <!-------------------------------------------- WEEK 4---------------------------------------------------------->
  "Week 4": [
    {
      question: "Cybersecurity involves the security of",
      options: [
        "Hardware and software",
        "Software and data",
        "Hardware, software, and data",
        "Hardware, software, data and processes",
      ],
      answer: "Hardware, software, and data",
    },
    {
      question:
        "……..security represents the set of policies that monitor and prevent unauthorized access, safeguard the data and network from network traffic. Fill in the blank.",
      options: ["Information", "Hardware", "Software", "Network"],
      answer: "Information",
    },
    {
      question: "Locky is an example of which type of cybersecurity threat?",
      options: ["Ransomware", "Malware", "Phishing", "All of the above"],
      answer: "Ransomware",
    },
    {
      question: "What does C represent in the CIA-Triad in cybersecurity?",
      options: ["Cyber-physical", "Centralized", "Confidentiality", "Critical"],
      answer: "Confidentiality",
    },
    {
      question: "What is ubiquitous sensing in IIoT?",
      options: [
        "In IIoT, sensors and actuators are used to control critical elements.",
        "In IIoT, sensors and actuators are used almost everywhere to control, enhance and optimize various functions.",
        "In IIoT, advanced analytics helps to enhance the working condition, increase machine life and optimize operational efficiency.",
        "None of the above",
      ],
      answer:
        "In IIoT, sensors and actuators are used almost everywhere to control, enhance and optimize various functions.",
    },
    {
      question:
        "Which of the following is a data integration challenge in deploying IIoT?",
      options: [
        "Understanding the generated data for analysis and application in business.",
        "Storing the data",
        "Lack of skills",
        "Cybersecurity",
      ],
      answer:
        "Understanding the generated data for analysis and application in business.",
    },
    {
      question:
        "Commercialization and the mass production of steam engines marked the beginning of the _ stage of the Industrial revolution. Fill in the blank.",
      options: ["Fourth", "Third", "Second", "First"],
      answer: "First",
    },
    {
      question: "What were the negative effects of Industrial revolution?",
      options: [
        "Harm to environment by waste products",
        "Inefficient",
        "Bad working environment",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "How many key elements are there in the Industrial internet?",
      options: ["4", "3", "5", "2"],
      answer: "3",
    },
    {
      question: "How does sensing contribute to the industry?",
      options: [
        "Increase downtime",
        "Increase cost",
        "Higher degree of automation",
        "Safety hazards",
      ],
      answer: "Higher degree of automation",
    },
    {
      question:
        "A smart sensor can perform multiple sensing, unlike the traditional sensors. True or false?",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question: "What is self-decision making in a smart sensor?",
      options: [
        "It can self-monitor its operation and changes in the ambience by taking proper decision by itself.",
        "Reduce the cost by reduced downtime",
        "Communicate data",
        "Enable multiple parameter sensing",
      ],
      answer:
        "It can self-monitor its operation and changes in the ambience by taking proper decision by itself.",
    },
    {
      question: "What is the full form of SCADA?",
      options: [
        "Supervisory Confidential and Data Acquisition",
        "Supervisory Control and Data Acquisition",
        "Smart Control and Data Acquisition",
        "Smart Controlled and Direct Acquisition",
      ],
      answer: "Supervisory Control and Data Acquisition",
    },
    {
      question:
        "What does the Cognitive layer in the 5C architecture for Cyber-physical Systems represents?",
      options: [
        "System for supervised control: Self-configure, Self-Optimize, Self-Adjust",
        "Sensor records machine health data: data to information interpretation",
        "System for optimized decision: Human-readable interpretation & data visualization",
        "All of the above",
      ],
      answer:
        "System for optimized decision: Human-readable interpretation & data visualization",
    },
    {
      question: "How can smart factory be beneficial in inventory tracking?",
      options: [
        "Global inter-connectivity of smart factory facilitates real-time updates of inventory",
        "Ease of process re-adjustment facility",
        "End-to-end production line management with sensors",
        "None of the above",
      ],
      answer:
        "Global inter-connectivity of smart factory facilitates real-time updates of inventory",
    },
  ],
  // <!-------------------------------------------- WEEK 5---------------------------------------------------------->
  "Week 5": [
    {
      question:
        "Which of the following is a feature of Amazon Smart Warehousing's logistics and supply chain management?",
      options: [
        "Manual control of supply fleet",
        "Logistic status update with future market demand",
        "Centralized customer service",
        "Distributed parking and space surrounding control",
      ],
      answer: "Logistic status update with future market demand",
    },
    {
      question: "How does Boeing achieve efficient manufacturing?",
      options: [
        "Using smart & digital manufacturing facility",
        "By lowering assembly delay & response time",
        "By reducing errors in manufacture & assembly",
        "All the above",
      ],
      answer: "All the above",
    },
    {
      question: "Which of the following company provides Air-as-a-Service?",
      options: ["Kaeser Kompressoren", "Hitachi", "John Deere", "Komatsu"],
      answer: "Kaeser Kompressoren",
    },
    {
      question:
        "According to the International Labor Organization, what is the approximate death rate owing to occupational disease or accident?",
      options: [
        "~1/5 seconds",
        "~1/10 seconds",
        "~1/15 seconds",
        "~1/20 seconds",
      ],
      answer: "~1/15 seconds",
    },
    {
      question: "What is a Business Model?",
      options: [
        "A business model describes the rationale of how an organization creates, delivers, and captures value.",
        "It is the embodiment of the organizational and financial architecture of a business.",
        "It is the description of how a business intends to operate and earn profits in a specific marketplace.",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is a Market Segment?",
      options: [
        "It is the different groups of customers or end-user organizations that the business enterprise aims to serve.",
        "It is the key resources and activities that a business requires to create value proposition.",
        "It is the products or services that create value for the customer segment.",
        "All of the above",
      ],
      answer:
        "It is the different groups of customers or end-user organizations that the business enterprise aims to serve.",
    },
    {
      question:
        "Which of the following statement is untrue w.r.t. Subscription Model?",
      options: [
        "It can be used for Smart Energy",
        "It brings together the businesses and their customers to monetize the solutions",
        "It aims to minimize downtime and maximize utilization of the assets",
        'It is not capable of generating "recurring" revenue',
      ],
      answer: 'It is not capable of generating "recurring" revenue',
    },
    {
      question: "Which of the following is not an IIoT business models?",
      options: [
        "Cloud-based Business Model",
        "Service-Oriented Business Model",
        "Outcome-based Business Model",
        "Process-Oriented Business Model",
      ],
      answer: "Outcome-based Business Model",
    },
    {
      question:
        "Which of the following Cloud-Based Business Model aims to provide the required hardware and software online in the cloud?",
      options: [
        "Infrastructure-as-a-Service",
        "Platform-as-a-Service",
        "Software-as-a-Service",
        "All of the above",
      ],
      answer: "Infrastructure-as-a-Service",
    },
    {
      question:
        "Which of the following is a/are challenge(s) of IIoT Business Model?",
      options: [
        "Lack of interoperability",
        "Immature or untested technologies",
        "Increase complexity",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the full form of IIRA?",
      options: [
        "Industrial Internet Related Architecture",
        "Industrial Internet Regional Architecture",
        "Industrial Internet Reference Architecture",
        "Industrial Internet Real-time Architecture",
      ],
      answer: "Industrial Internet Reference Architecture",
    },
    {
      question:
        '"Industrial Internet Consortium (IIC) is a non-profit organization created to promote open standards and interoperability for industry technologies and machine-to-machine (M2M) environments." - Is the statement True or False?',
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following are the components of Gateway-Mediated Edge Architecture?",
      options: [
        "Edge layer, Platform layer, Enterprise layer",
        "Physical layer, Edge devices Gateway, Cloud",
        "Sensors and Actuators, Edge devices Gateway, Wide Area Network",
        "Smart Machines, System of Systems, Industrial Internet",
      ],
      answer: "Sensors and Actuators, Edge devices Gateway, Wide Area Network",
    },
    {
      question: "Which of the following is not a viewpoint of IIRA?",
      options: [
        "Business viewpoint",
        "Market viewpoint",
        "Functional viewpoint",
        "Usage viewpoint",
      ],
      answer: "Market viewpoint",
    },
    {
      question:
        "How many domains are there in the Functional Viewpoint of IIRA?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
  ],
  // <!-------------------------------------------- WEEK 6---------------------------------------------------------->
  "Week 6": [
    {
      question: "Which type of voltage does LM 35 temperature sensor generate?",
      options: [
        "Analog",
        "Digital",
        "Both analog and digital",
        "It is unable to generate any voltage",
      ],
      answer: "Analog",
    },
    {
      question:
        "Temperature sensor DS1621 is a ___ sensor, which generates___ bits temperature",
      options: ["analog, 5", "analog, 9", "digital, 5", "digital, 9"],
      answer: "digital, 9",
    },
    {
      question:
        "Which of the following is the application of Ultrasonic sensor?",
      options: [
        "Detects radiations coming from human body in its surrounding area",
        "Distance measurement, pattern matching, color checking, structured lighting, and motion capture",
        "Automatic door open/close, human detection, lift lobby, common staircase, and shopping Mail",
        "Liquid level monitoring of tank, trash level monitoring",
      ],
      answer: "Liquid level monitoring of tank, trash level monitoring",
    },
    {
      question: "What is the Baseline Resistance of a sensor?",
      options: [
        "Resistance of the sensor material in air when not exposed to the target gas",
        "Resistance of the sensor material in air when exposed to the target gas",
        "Resistance of the sensor material when not exposed to the atmosphere",
        "Resistance of the sensor material when exposed to the atmosphere",
      ],
      answer:
        "Resistance of the sensor material in air when not exposed to the target gas",
    },
    {
      question:
        "Which type of sensor decreases its resistance w.r.t. the baseline resistance when exposed to a reducing gas?",
      options: [
        "c-type sensors",
        "p-type sensors",
        "n-type sensors",
        "All the sensor types",
      ],
      answer: "n-type sensors",
    },
    {
      question: "Define the Sensitivity of a gas sensor.",
      options: [
        "It is the ability to detect a particular gas in a mixture of different gases.",
        "It is the change in the output signal with respect to unit change in input.",
        "It is characteristic of the sensor which ensures its resistance to return to its base resistance value if exposure to the target gas is stopped",
        "None of the above",
      ],
      answer:
        "It is the change in the output signal with respect to unit change in input.",
    },
    {
      question:
        "Which of the following protocol falls under the category of Industrial Ethernet?",
      options: [
        "CC-Link",
        "DeviceNet",
        "Time-Sensitive Networking (TSN)",
        "Interbus",
      ],
      answer: "Time-Sensitive Networking (TSN)",
    },
    {
      question: "What are the two units defined in the ModBus-TCP data frame?",
      options: [
        "Protocol Data Unit and Application Data Unit",
        "Protocol Data Unit and Communication Data Unit",
        "Communication Data Unit and Application Data Unit",
        "None of the above",
      ],
      answer: "Protocol Data Unit and Application Data Unit",
    },
    {
      question:
        "Which of the following network topology/(ies) is/are not supported by EtherCat?",
      options: ["tree", "hybrid", "star", "mesh"],
      answer: "mesh",
    },
    {
      question: "What is the maximum data rate per packet of EtherNet/IP?",
      options: ["500 bytes", "100 bytes", "1500 bytes", "2000 bytes"],
      answer: "1500 bytes",
    },
    {
      question: "What is the full form of Profinet?",
      options: [
        "PReplanned Field NETwork",
        "PROcess Figured NETwork",
        "PReplanned Figured NETwork",
        "PROcess Field NETwork",
      ],
      answer: "PROcess Field NETwork",
    },
    {
      question:
        "Which of the following communication infrastructure is an example of wired connectivity?",
      options: ["LPWAN", "PSTN", "IEC-PAS 62601/WIA-PA", "ISA 100"],
      answer: "PSTN",
    },
    {
      question:
        "Which of the following is/are the limitation(s) of satellite communication?",
      options: [
        "Launching of satellite in space comes at a higher cost",
        "Propagation delay is more compared to other terrestrial methods",
        "Difficulty in repairs in case of any damage",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What is the frequency spectrum of mmWave for cellular communication?",
      options: ["30-100 GHz", "30-100 MHz", "57-64 GHz", "57-64 MHz"],
      answer: "30-100 GHz",
    },
    {
      question:
        "The output voltage of LM 35 temperature sensor is ___ proportional to the Celsius temperature.",
      options: [
        "quadratically",
        "exponential",
        "linearly",
        "None of the above",
      ],
      answer: "linearly",
    },
  ],
  // <!-------------------------------------------- WEEK 7---------------------------------------------------------->
  "Week 7": [
    {
      question: "What is the payload per message of SIGFOX?",
      options: ["10 bytes", "11 bytes", "12 bytes", "13 bytes"],
      answer: "12 bytes",
    },
    {
      question: "Which of the following is a processor?",
      options: ["DHT", "LoRa", "NodeMCU", "None of the above"],
      answer: "NodeMCU",
    },
    {
      question:
        "We can use Arduino IDE to program a NodeMCU board. Is this statement True/False?",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following topology(ies) is/are supported by ZigBee?",
      options: ["Star", "Tree", "Mesh", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which software is used to configure XBee?",
      options: ["XCTU", "Arduino IDE", "NodeMCU", "DHT"],
      answer: "XCTU",
    },
    {
      question: "Which Python library is necessary/imported while using Xbee?",
      options: ["numpy", "TensorFlow", "DigiMesh", "OpenCV"],
      answer: "DigiMesh",
    },
    {
      question:
        "Which of the following statements is true about Complex Event Processing (CEP)?",
      options: [
        "It analyses and correlates event stream from different data sources",
        "Can process data in near real-time",
        "Extract causal and temporal patterns using predefined rules",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "Edge provides___ computing, and cloud provides ___computing.",
      options: [
        "distributed, decentralized",
        "centralized, distributed",
        "distributed, centralized",
        "decentralized, distributed",
      ],
      answer: "distributed, centralized",
    },
    {
      question:
        "What are the Enablers of Prescriptive analytics in the context of IIoT - Processing & Analytics?",
      options: [
        "Optimization/Simulation/Decision models",
        "Data mining/Web mining/predictions",
        "Dashboard/Reports/Scorecards",
        "All of the above",
      ],
      answer: "Optimization/Simulation/Decision models",
    },
    {
      question: "What are the component of FarmBeats?",
      options: [
        "Soil sensors, camera, UAVs, weather station, IoT gateway, IoT base station, cloud-services",
        "Farmers, Brokers, customers, transport, markets",
        "Sensors, weather station, gateway, base station, cloud",
        "Sensors, virtual entity, analytics & learning, data management, service management",
      ],
      answer:
        "Soil sensors, camera, UAVs, weather station, IoT gateway, IoT base station, cloud-services",
    },
    {
      question: "What is SWAMP?",
      options: [
        "Water management system",
        "Data-driven precision agriculture",
        "Irrigation management for different types of crops & climate in different countries",
        "Analytics to empower understanding of plant growth according to soil and climatic conditions",
      ],
      answer:
        "Irrigation management for different types of crops & climate in different countries",
    },
    {
      question: "Which of the following provides Cognitive Manufacturing?",
      options: [
        "SmartSantander",
        "iRobot-Factory",
        "FarmBeats",
        "None of the above",
      ],
      answer: "iRobot-Factory",
    },
    {
      question: "What are the three different phases of smart manufacturing?",
      options: [
        "Organize & process data, decision making, and Generating & controlling the events in real-time",
        "Collection of the service offerings & infrastructure, virtualization, allocation & management of services, and on-demand service provisioning",
        "Authentication, Authorization and Accounting (AAA), Test bed management, and Application",
        "Integration of data and contextual information, synthesis & analysis, innovation in process & production",
      ],
      answer:
        "Integration of data and contextual information, synthesis & analysis, innovation in process & production",
    },
    {
      question: "What are the three user entities in Industrial Manufacturing?",
      options: [
        "Providers, manufacturers, operators",
        "Providers, consumers, operators",
        "Providers, manufacturers, distributors",
        "Providers, consumers, distributors",
      ],
      answer: "Providers, consumers, operators",
    },
    {
      question:
        "How many major components comprise Industrial Control Systems?",
      options: ["4", "5", "6", "7"],
      answer: "4",
    },
  ],
  // <!-------------------------------------------- WEEK 8---------------------------------------------------------->
  "Week 8": [
    {
      question: "What are the three types of IIoT Analytics?",
      options: [
        "Systematic Analytics, Predictive Analytics, Prescriptive Analytics",
        "Descriptive Analytics, Systematic Analytics, Prescriptive Analytics",
        "Descriptive Analytics, Predictive Analytics, Systematic Analytics",
        "Descriptive Analytics, Predictive Analytics, Prescriptive Analytics",
      ],
      answer:
        "Descriptive Analytics, Predictive Analytics, Prescriptive Analytics",
    },
    {
      question: "What are the main 5 Vs of big data?",
      options: [
        "Volume, virtualization, viscosity, veracity, variety",
        "Volume, virtualization, variability, viscosity, variety",
        "Volume, velocity, virtualization, veracity, viscosity",
        "Volume, velocity, variability, veracity, variety",
      ],
      answer: "Volume, velocity, variability, veracity, variety",
    },
    {
      question: "Machine learning is a subset of deep learning — True/False?",
      options: ["True", "False"],
      answer: "False",
    },
    {
      question: "Which of the following is an example of Classification?",
      options: [
        "Bayes Regression",
        "Support Vector Machine",
        "Gaussian Mixture Model",
        "All of the above",
      ],
      answer: "Support Vector Machine",
    },
    {
      question: "Clustering is used in learning?",
      options: [
        "Unsupervised",
        "Supervised",
        "Reinforcement",
        "None of the above",
      ],
      answer: "Unsupervised",
    },
    {
      question:
        "Which machine learning algorithm enables machines to improve performance by automatically learning the ideal behaviors for a specific environment?",
      options: [
        "Unsupervised Learning",
        "Supervised Learning",
        "Reinforcement Learning",
        "Deep Learning",
      ],
      answer: "Reinforcement Learning",
    },
    {
      question:
        "Which node in the Decision Tree evaluates or determines the outcome based on an attribute's value?",
      options: ["Parent node", "Leaf node", "Decision node", "Root node"],
      answer: "Decision node",
    },
    {
      question:
        "What is the subfield of machine learning that mimics the working function of billions of neurons in our brain?",
      options: [
        "Regression",
        "Deep Learning",
        "Decision tree",
        "Reinforcement learning",
      ],
      answer: "Deep Learning",
    },
    {
      question: "Why do we need cloud?",
      options: [
        "For high computational speed for data monitoring and analytics",
        "For storage of huge amount of data",
        "For effective data acquisition",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What are the three types of services offered by cloud computing?",
      options: [
        "SeaaS, PaaS and IaaS",
        "SeaaS, CaaS and IaaS",
        "SaaS, PaaS and IaaS",
        "NaaS, CaaS and IaaS",
      ],
      answer: "SaaS, PaaS and IaaS",
    },
    {
      question:
        "Which of the following is an example of Infrastructure-as-a-Service?",
      options: [
        "Google App Engine",
        "Microsoft Azure",
        "Microsoft 365",
        "All of the above",
      ],
      answer: "Microsoft Azure",
    },
    {
      question: "Amazon Web Service is a ___ cloud.",
      options: ["public", "private", "hybrid", "community"],
      answer: "public",
    },
    {
      question:
        "Which one of the following is not a characteristic of a good SLA?",
      options: [
        "Mutually Acceptable",
        "Quantifiable",
        "Refundable",
        "Controllable",
      ],
      answer: "Refundable",
    },
    {
      question: "Fog layer is located between which two layers?",
      options: [
        "the edge and the gateways",
        "the devices and the edge",
        "the devices and the gateways",
        "the edge and the cloud",
      ],
      answer: "the edge and the cloud",
    },
    {
      question: "What are the three main layers of Deep learning?",
      options: [
        "Input layer, prediction layer, output layer",
        "Input layer, hidden layer, decision layer",
        "Input layer, prediction layer, decision layer",
        "Input layer, hidden layer, output layer",
      ],
      answer: "Input layer, hidden layer, output layer",
    },
  ],
  // <!-------------------------------------------- WEEK 9---------------------------------------------------------->
  "Week 9": [],
  // <!-------------------------------------------- WEEK 10---------------------------------------------------------->
  "Week 10": [],
  // <!-------------------------------------------- WEEK 11---------------------------------------------------------->
  "Week 11": [],
  // <!-------------------------------------------- WEEK 12---------------------------------------------------------->
  "Week 12": [],
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
