
/* =====================================================================
   CITIES – AFRICA
   Part of the CITIES dataset, split by continent for easier maintenance.
   Combined together (with all other regions) into CITIES in data.js.
   ===================================================================== */

const CITIES_AFRICA = [

  // Egypt
  {name:"Cairo",country:"Egypt",lat:30.0444,lng:31.2357},
  {name:"Alexandria",country:"Egypt",lat:31.2001,lng:29.9187},
  {name:"Giza",country:"Egypt",lat:30.0131,lng:31.2089},
  {name:"Shubra El-Kheima",country:"Egypt",lat:30.1286,lng:31.2422},
  {name:"Port Said",country:"Egypt",lat:31.2653,lng:32.3019},
  {name:"Suez",country:"Egypt",lat:29.9668,lng:32.5498},
  {name:"Luxor",country:"Egypt",lat:25.6872,lng:32.6396},
  {name:"Aswan",country:"Egypt",lat:24.0889,lng:32.8998},
  {name:"Tanta",country:"Egypt",lat:30.7865,lng:31.0004},
  {name:"Asyut",country:"Egypt",lat:27.1810,lng:31.1837},
  {name:"Ismailia",country:"Egypt",lat:30.5965,lng:32.2715},
  {name:"Fayyum",country:"Egypt",lat:29.3084,lng:30.8428},

  // Nigeria
  {name:"Lagos",country:"Nigeria",lat:6.5244,lng:3.3792},
  {name:"Kano",country:"Nigeria",lat:12.0022,lng:8.5920},
  {name:"Ibadan",country:"Nigeria",lat:7.3775,lng:3.9470},
  {name:"Abuja",country:"Nigeria",lat:9.0765,lng:7.3986},
  {name:"Port Harcourt",country:"Nigeria",lat:4.8156,lng:7.0498},
  {name:"Benin City",country:"Nigeria",lat:6.3350,lng:5.6275},
  {name:"Kaduna",country:"Nigeria",lat:10.5105,lng:7.4165},
  {name:"Zaria",country:"Nigeria",lat:11.0855,lng:7.7199},
  {name:"Aba",country:"Nigeria",lat:5.1066,lng:7.3667},
  {name:"Jos",country:"Nigeria",lat:9.8965,lng:8.8583},
  {name:"Ilorin",country:"Nigeria",lat:8.5000,lng:4.5500},
  {name:"Enugu",country:"Nigeria",lat:6.4584,lng:7.5463},
  {name:"Maiduguri",country:"Nigeria",lat:11.8311,lng:13.1510},
  {name:"Sokoto",country:"Nigeria",lat:13.0609,lng:5.2390},
  {name:"Owerri",country:"Nigeria",lat:5.4853,lng:7.0358},
  {name:"Calabar",country:"Nigeria",lat:4.9517,lng:8.3220},

  // South Africa
  {name:"Johannesburg",country:"South Africa",lat:-26.2041,lng:28.0473},
  {name:"Cape Town",country:"South Africa",lat:-33.9249,lng:18.4241},
  {name:"Durban",country:"South Africa",lat:-29.8587,lng:31.0218},
  {name:"Pretoria",country:"South Africa",lat:-25.7479,lng:28.2293},
  {name:"Port Elizabeth",country:"South Africa",lat:-33.9608,lng:25.6022},
  {name:"Bloemfontein",country:"South Africa",lat:-29.1141,lng:26.2208},
  {name:"East London",country:"South Africa",lat:-33.0292,lng:27.9116},
  {name:"Polokwane",country:"South Africa",lat:-23.9045,lng:29.4688},
  {name:"Nelspruit",country:"South Africa",lat:-25.4753,lng:30.9853},
  {name:"Kimberley",country:"South Africa",lat:-28.7282,lng:24.7623},
  {name:"Pietermaritzburg",country:"South Africa",lat:-29.6006,lng:30.3794},
  {name:"Rustenburg",country:"South Africa",lat:-25.6676,lng:27.2421},
  {name:"Soweto",country:"South Africa",lat:-26.2678,lng:27.8585},
  {name:"George",country:"South Africa",lat:-33.9630,lng:22.4617},

  // Morocco
  {name:"Casablanca",country:"Morocco",lat:33.5731,lng:-7.5898},
  {name:"Rabat",country:"Morocco",lat:34.0209,lng:-6.8416},
  {name:"Marrakech",country:"Morocco",lat:31.6295,lng:-7.9811},
  {name:"Fes",country:"Morocco",lat:34.0331,lng:-5.0003},
  {name:"Tangier",country:"Morocco",lat:35.7595,lng:-5.8340},
  {name:"Agadir",country:"Morocco",lat:30.4278,lng:-9.5981},
  {name:"Meknes",country:"Morocco",lat:33.8730,lng:-5.5407},
  {name:"Oujda",country:"Morocco",lat:34.6814,lng:-1.9086},
  {name:"Kenitra",country:"Morocco",lat:34.2541,lng:-6.5890},
  {name:"Tetouan",country:"Morocco",lat:35.5721,lng:-5.3723},
  {name:"Essaouira",country:"Morocco",lat:31.5085,lng:-9.7595},

  // Algeria
  {name:"Algiers",country:"Algeria",lat:36.7372,lng:3.0865},
  {name:"Oran",country:"Algeria",lat:35.6987,lng:-0.6349},
  {name:"Constantine",country:"Algeria",lat:36.3650,lng:6.6147},
  {name:"Annaba",country:"Algeria",lat:36.9000,lng:7.7667},
  {name:"Blida",country:"Algeria",lat:36.4700,lng:2.8277},
  {name:"Batna",country:"Algeria",lat:35.5559,lng:6.1741},
  {name:"Sétif",country:"Algeria",lat:36.1898,lng:5.4108},
  {name:"Sidi Bel Abbès",country:"Algeria",lat:35.1899,lng:-0.6300},
  {name:"Biskra",country:"Algeria",lat:34.8500,lng:5.7333},

  // Kenya
  {name:"Nairobi",country:"Kenya",lat:-1.2921,lng:36.8219},
  {name:"Mombasa",country:"Kenya",lat:-4.0435,lng:39.6682},
  {name:"Kisumu",country:"Kenya",lat:-0.0917,lng:34.7680},
  {name:"Nakuru",country:"Kenya",lat:-0.3031,lng:36.0800},
  {name:"Eldoret",country:"Kenya",lat:0.5143,lng:35.2698},
  {name:"Thika",country:"Kenya",lat:-1.0333,lng:37.0693},
  {name:"Malindi",country:"Kenya",lat:-3.2192,lng:40.1169},

  // Ethiopia
  {name:"Addis Ababa",country:"Ethiopia",lat:9.0320,lng:38.7469},
  {name:"Dire Dawa",country:"Ethiopia",lat:9.5833,lng:41.8667},
  {name:"Mekelle",country:"Ethiopia",lat:13.4967,lng:39.4753},
  {name:"Gondar",country:"Ethiopia",lat:12.6000,lng:37.4667},
  {name:"Awasa",country:"Ethiopia",lat:7.0504,lng:38.4768},
  {name:"Bahir Dar",country:"Ethiopia",lat:11.5936,lng:37.3908},
  {name:"Jimma",country:"Ethiopia",lat:7.6667,lng:36.8333},

  // Tanzania
  {name:"Dar es Salaam",country:"Tanzania",lat:-6.7924,lng:39.2083},
  {name:"Dodoma",country:"Tanzania",lat:-6.1722,lng:35.7395},
  {name:"Mwanza",country:"Tanzania",lat:-2.5167,lng:32.9000},
  {name:"Arusha",country:"Tanzania",lat:-3.3667,lng:36.6833},
  {name:"Mbeya",country:"Tanzania",lat:-8.9000,lng:33.4500},
  {name:"Morogoro",country:"Tanzania",lat:-8.8256,lng:36.6820},
  {name:"Tanga",country:"Tanzania",lat:-5.0667,lng:39.1000},
  {name:"Zanzibar City",country:"Tanzania",lat:-6.1659,lng:39.1990},

  // Ghana
  {name:"Accra",country:"Ghana",lat:5.6037,lng:-0.1870},
  {name:"Kumasi",country:"Ghana",lat:6.6885,lng:-1.6244},
  {name:"Tamale",country:"Ghana",lat:9.4008,lng:-0.8393},
  {name:"Sekondi-Takoradi",country:"Ghana",lat:4.8927,lng:-1.7554},
  {name:"Ashaiman",country:"Ghana",lat:5.7005,lng:-0.0298},
  {name:"Cape Coast",country:"Ghana",lat:5.1053,lng:-1.2466},
  {name:"Obuasi",country:"Ghana",lat:6.2000,lng:-1.6833},

  // Democratic Republic of the Congo
  {name:"Kinshasa",country:"Democratic Republic of the Congo",lat:-4.4419,lng:15.2663},
  {name:"Lubumbashi",country:"Democratic Republic of the Congo",lat:-11.6609,lng:27.4794},
  {name:"Mbuji-Mayi",country:"Democratic Republic of the Congo",lat:-6.1360,lng:23.5898},
  {name:"Kisangani",country:"Democratic Republic of the Congo",lat:0.5153,lng:25.1910},
  {name:"Kananga",country:"Democratic Republic of the Congo",lat:-5.8962,lng:22.4166},
  {name:"Bukavu",country:"Democratic Republic of the Congo",lat:-2.5083,lng:28.8608},
  {name:"Goma",country:"Democratic Republic of the Congo",lat:-1.6585,lng:29.2205},

  // Ivory Coast (Côte d'Ivoire)
  {name:"Abidjan",country:"Ivory Coast",lat:5.3600,lng:-4.0083},
  {name:"Yamoussoukro",country:"Ivory Coast",lat:6.8276,lng:-5.2893},
  {name:"Bouaké",country:"Ivory Coast",lat:7.6939,lng:-5.0303},
  {name:"Daloa",country:"Ivory Coast",lat:6.8774,lng:-6.4502},
  {name:"San-Pédro",country:"Ivory Coast",lat:4.7485,lng:-6.6363},
  {name:"Korhogo",country:"Ivory Coast",lat:9.4580,lng:-5.6296},

  // Angola
  {name:"Luanda",country:"Angola",lat:-8.8368,lng:13.2343},
  {name:"Huambo",country:"Angola",lat:-12.7761,lng:15.7392},
  {name:"Lobito",country:"Angola",lat:-12.3644,lng:13.5360},
  {name:"Benguela",country:"Angola",lat:-12.5763,lng:13.4055},
  {name:"Lubango",country:"Angola",lat:-14.9172,lng:13.4925},
  {name:"Malanje",country:"Angola",lat:-9.5401,lng:16.3410},

  // Cameroon
  {name:"Douala",country:"Cameroon",lat:4.0511,lng:9.7679},
  {name:"Yaoundé",country:"Cameroon",lat:3.8480,lng:11.5021},
  {name:"Garoua",country:"Cameroon",lat:9.3000,lng:13.4000},
  {name:"Bamenda",country:"Cameroon",lat:5.9586,lng:10.1475},
  {name:"Maroua",country:"Cameroon",lat:10.5960,lng:14.3159},
  {name:"Bafoussam",country:"Cameroon",lat:5.4778,lng:10.4176},

  // Sudan
  {name:"Khartoum",country:"Sudan",lat:15.5007,lng:32.5599},
  {name:"Omdurman",country:"Sudan",lat:15.6445,lng:32.4777},
  {name:"Nyala",country:"Sudan",lat:12.0461,lng:24.8776},
  {name:"Port Sudan",country:"Sudan",lat:19.6175,lng:37.2164},
  {name:"Kassala",country:"Sudan",lat:15.4592,lng:36.4000},
  {name:"El Obeid",country:"Sudan",lat:13.1833,lng:30.2167},

  // Uganda
  {name:"Kampala",country:"Uganda",lat:0.3476,lng:32.5825},
  {name:"Gulu",country:"Uganda",lat:2.7667,lng:32.3000},
  {name:"Lira",country:"Uganda",lat:2.2499,lng:32.9000},
  {name:"Mbarara",country:"Uganda",lat:-0.6072,lng:30.6545},
  {name:"Jinja",country:"Uganda",lat:0.4479,lng:33.2026},
  {name:"Entebbe",country:"Uganda",lat:0.0612,lng:32.4736},

  // Senegal
  {name:"Dakar",country:"Senegal",lat:14.7167,lng:-17.4677},
  {name:"Touba",country:"Senegal",lat:14.8667,lng:-15.8833},
  {name:"Thiès",country:"Senegal",lat:14.7833,lng:-16.9333},
  {name:"Rufisque",country:"Senegal",lat:14.7167,lng:-17.2667},
  {name:"Kaolack",country:"Senegal",lat:14.1667,lng:-16.0833},
  {name:"Ziguinchor",country:"Senegal",lat:12.5833,lng:-16.2667},

  // Zimbabwe
  {name:"Harare",country:"Zimbabwe",lat:-17.8252,lng:31.0335},
  {name:"Bulawayo",country:"Zimbabwe",lat:-20.1500,lng:28.5833},
  {name:"Chitungwiza",country:"Zimbabwe",lat:-18.0127,lng:31.0756},
  {name:"Mutare",country:"Zimbabwe",lat:-18.9707,lng:32.6709},
  {name:"Gweru",country:"Zimbabwe",lat:-19.4500,lng:29.8167},
  {name:"Kwekwe",country:"Zimbabwe",lat:-18.9167,lng:29.8167},

  // Zambia
  {name:"Lusaka",country:"Zambia",lat:-15.4167,lng:28.2833},
  {name:"Kitwe",country:"Zambia",lat:-12.8024,lng:28.2132},
  {name:"Ndola",country:"Zambia",lat:-12.9667,lng:28.6333},
  {name:"Kabwe",country:"Zambia",lat:-14.4333,lng:28.4500},
  {name:"Chingola",country:"Zambia",lat:-12.5290,lng:27.8838},
  {name:"Livingstone",country:"Zambia",lat:-17.8489,lng:25.8543},

  // Mali
  {name:"Bamako",country:"Mali",lat:12.6392,lng:-8.0029},
  {name:"Sikasso",country:"Mali",lat:11.3175,lng:-5.6667},
  {name:"Mopti",country:"Mali",lat:14.4843,lng:-4.1825},
  {name:"Koutiala",country:"Mali",lat:12.3917,lng:-5.4642},
  {name:"Kayes",country:"Mali",lat:14.4469,lng:-11.4445},

  // Madagascar
  {name:"Antananarivo",country:"Madagascar",lat:-18.8792,lng:47.5079},
  {name:"Toamasina",country:"Madagascar",lat:-18.1492,lng:49.4023},
  {name:"Antsirabe",country:"Madagascar",lat:-19.8659,lng:47.0333},
  {name:"Fianarantsoa",country:"Madagascar",lat:-21.4527,lng:47.0857},
  {name:"Mahajanga",country:"Madagascar",lat:-15.7167,lng:46.3167},

  // Mozambique
  {name:"Maputo",country:"Mozambique",lat:-25.9692,lng:32.5732},
  {name:"Matola",country:"Mozambique",lat:-25.9667,lng:32.4667},
  {name:"Nampula",country:"Mozambique",lat:-15.1165,lng:39.2666},
  {name:"Beira",country:"Mozambique",lat:-19.8436,lng:34.8389},
  {name:"Chimoio",country:"Mozambique",lat:-19.1167,lng:33.4833},
  {name:"Quelimane",country:"Mozambique",lat:-17.8764,lng:36.8872},

  // Tunisia
  {name:"Tunis",country:"Tunisia",lat:36.8190,lng:10.1658},
  {name:"Sfax",country:"Tunisia",lat:34.7333,lng:10.7667},
  {name:"Sousse",country:"Tunisia",lat:35.8254,lng:10.6369},
  {name:"Kairouan",country:"Tunisia",lat:35.6781,lng:10.0963},
  {name:"Bizerte",country:"Tunisia",lat:37.2744,lng:9.8739},
  {name:"Gabès",country:"Tunisia",lat:33.8815,lng:10.0982},

  // Libya
  {name:"Tripoli",country:"Libya",lat:32.8872,lng:13.1913},
  {name:"Benghazi",country:"Libya",lat:32.1167,lng:20.0667},
  {name:"Misrata",country:"Libya",lat:32.3754,lng:15.0925},
  {name:"Zawiya",country:"Libya",lat:32.7522,lng:12.7278},
  {name:"Bayda",country:"Libya",lat:32.7627,lng:21.7551},

  // Burkina Faso
  {name:"Ouagadougou",country:"Burkina Faso",lat:12.3714,lng:-1.5197},
  {name:"Bobo-Dioulasso",country:"Burkina Faso",lat:11.1771,lng:-4.2979},
  {name:"Koudougou",country:"Burkina Faso",lat:12.2500,lng:-2.3167},
  {name:"Banfora",country:"Burkina Faso",lat:10.6333,lng:-4.7667},

  // Rwanda
  {name:"Kigali",country:"Rwanda",lat:-1.9441,lng:30.0619},
  {name:"Butare",country:"Rwanda",lat:-2.6000,lng:29.7500},
  {name:"Ruhengeri",country:"Rwanda",lat:-1.5000,lng:29.6333},
  {name:"Gisenyi",country:"Rwanda",lat:-1.7000,lng:29.2500},

  // Malawi
  {name:"Lilongwe",country:"Malawi",lat:-13.9626,lng:33.7741},
  {name:"Blantyre",country:"Malawi",lat:-15.7861,lng:35.0058},
  {name:"Mzuzu",country:"Malawi",lat:-11.4656,lng:34.0207},
  {name:"Zomba",country:"Malawi",lat:-15.3833,lng:35.3333},

  // Somalia
  {name:"Mogadishu",country:"Somalia",lat:2.0469,lng:45.3182},
  {name:"Hargeisa",country:"Somalia",lat:9.5600,lng:44.0626}, // Somaliland
  {name:"Merca",country:"Somalia",lat:1.7133,lng:44.7717},
  {name:"Bosaso",country:"Somalia",lat:11.2842,lng:49.1816},
  {name:"Kismayo",country:"Somalia",lat:-0.3582,lng:42.5454},

  // Guinea
  {name:"Conakry",country:"Guinea",lat:9.5092,lng:-13.7122},
  {name:"Nzérékoré",country:"Guinea",lat:7.7562,lng:-8.8179},
  {name:"Kankan",country:"Guinea",lat:10.3854,lng:-9.3057},
  {name:"Kindia",country:"Guinea",lat:10.0569,lng:-12.8656},

  // Burundi
  {name:"Bujumbura",country:"Burundi",lat:-3.3822,lng:29.3614},
  {name:"Gitega",country:"Burundi",lat:-3.4273,lng:29.9246},

  // Chad
  {name:"N'Djamena",country:"Chad",lat:12.1131,lng:15.0498},
  {name:"Moundou",country:"Chad",lat:8.5667,lng:16.0833},
  {name:"Sarh",country:"Chad",lat:9.1429,lng:18.3923},
  {name:"Abéché",country:"Chad",lat:13.8292,lng:20.8324},

  // Niger
  {name:"Niamey",country:"Niger",lat:13.5116,lng:2.1254},
  {name:"Zinder",country:"Niger",lat:13.8058,lng:8.9881},
  {name:"Maradi",country:"Niger",lat:13.5000,lng:7.1017},
  {name:"Tahoua",country:"Niger",lat:14.8888,lng:5.2692},

  // Mauritania
  {name:"Nouakchott",country:"Mauritania",lat:18.0735,lng:-15.9582},
  {name:"Nouadhibou",country:"Mauritania",lat:20.9310,lng:-17.0347},
  {name:"Rosso",country:"Mauritania",lat:16.5167,lng:-15.8000},

  // Eritrea
  {name:"Asmara",country:"Eritrea",lat:15.3333,lng:38.9333},
  {name:"Keren",country:"Eritrea",lat:15.7778,lng:38.4500},
  {name:"Massawa",country:"Eritrea",lat:15.6097,lng:39.4500},

  // Central African Republic
  {name:"Bangui",country:"Central African Republic",lat:4.3947,lng:18.5582},
  {name:"Bimbo",country:"Central African Republic",lat:4.2567,lng:18.4158},
  {name:"Berbérati",country:"Central African Republic",lat:4.2612,lng:15.7922},

  // Republic of the Congo
  {name:"Brazzaville",country:"Republic of the Congo",lat:-4.2694,lng:15.2832},
  {name:"Pointe-Noire",country:"Republic of the Congo",lat:-4.7692,lng:11.8664},
  {name:"Dolisie",country:"Republic of the Congo",lat:-4.2000,lng:12.6667},

  // Namibia
  {name:"Windhoek",country:"Namibia",lat:-22.5594,lng:17.0832},
  {name:"Rundu",country:"Namibia",lat:-17.9167,lng:19.7667},
  {name:"Walvis Bay",country:"Namibia",lat:-22.9575,lng:14.5053},
  {name:"Swakopmund",country:"Namibia",lat:-22.6848,lng:14.5246},

  // Togo
  {name:"Lomé",country:"Togo",lat:6.1375,lng:1.2125},
  {name:"Sokodé",country:"Togo",lat:8.9833,lng:1.1333},
  {name:"Kara",country:"Togo",lat:9.5500,lng:1.1833},

  // Gabon
  {name:"Libreville",country:"Gabon",lat:0.4162,lng:9.4673},
  {name:"Port-Gentil",country:"Gabon",lat:-0.7193,lng:8.7815},
  {name:"Franceville",country:"Gabon",lat:-1.6333,lng:13.5833},

  // Botswana
  {name:"Gaborone",country:"Botswana",lat:-24.6282,lng:25.9231},
  {name:"Francistown",country:"Botswana",lat:-21.1736,lng:27.5125},
  {name:"Molepolole",country:"Botswana",lat:-24.4066,lng:25.4951},

  // Gambia
  {name:"Banjul",country:"Gambia",lat:13.4549,lng:-16.5790},
  {name:"Serekunda",country:"Gambia",lat:13.4384,lng:-16.6780},
  {name:"Brikama",country:"Gambia",lat:13.2667,lng:-16.6500},

  // Lesotho
  {name:"Maseru",country:"Lesotho",lat:-29.3167,lng:27.4833},

  // Eswatini
  {name:"Mbabane",country:"Eswatini",lat:-26.3167,lng:31.1333},
  {name:"Manzini",country:"Eswatini",lat:-26.5000,lng:31.3833},

  // Djibouti
  {name:"Djibouti City",country:"Djibouti",lat:11.5880,lng:43.1450},

  // Guinea-Bissau
  {name:"Bissau",country:"Guinea-Bissau",lat:11.8636,lng:-15.5977},

  // Equatorial Guinea
  {name:"Malabo",country:"Equatorial Guinea",lat:3.7500,lng:8.7833},
  {name:"Bata",country:"Equatorial Guinea",lat:1.8639,lng:9.7658},

  // Mauritius
  {name:"Port Louis",country:"Mauritius",lat:-20.1609,lng:57.5012},
  {name:"Beau Bassin-Rose Hill",country:"Mauritius",lat:-20.2403,lng:57.4722},
  {name:"Vacoas",country:"Mauritius",lat:-20.2981,lng:57.4783},

  // Liberia
  {name:"Monrovia",country:"Liberia",lat:6.3005,lng:-10.7969},
  {name:"Gbarnga",country:"Liberia",lat:6.9956,lng:-9.4722},

  // Sierra Leone
  {name:"Freetown",country:"Sierra Leone",lat:8.4606,lng:-13.2317},
  {name:"Bo",country:"Sierra Leone",lat:7.9647,lng:-11.7383},
  {name:"Kenema",country:"Sierra Leone",lat:7.8768,lng:-11.1903},
  {name:"Makeni",country:"Sierra Leone",lat:8.8833,lng:-12.0500},

  // South Sudan
  {name:"Juba",country:"South Sudan",lat:4.8594,lng:31.5713},
  {name:"Malakal",country:"South Sudan",lat:9.5334,lng:31.6605},
  {name:"Wau",country:"South Sudan",lat:7.7029,lng:27.9953},

  // Seychelles
  {name:"Victoria",country:"Seychelles",lat:-4.6191,lng:55.4513},

  // Comoros
  {name:"Moroni",country:"Comoros",lat:-11.7022,lng:43.2551},

  // Cape Verde
  {name:"Praia",country:"Cape Verde",lat:14.9315,lng:-23.5125},
  {name:"Mindelo",country:"Cape Verde",lat:16.8901,lng:-24.9804},

  // Sao Tome and Principe
  {name:"São Tomé",country:"Sao Tome and Principe",lat:0.3361,lng:6.7308},

  // Overseas Territories in Africa
  {name:"Saint-Denis",country:"Reunion (France)",lat:-20.8789,lng:55.4481},
  {name:"Mamoudzou",country:"Mayotte (France)",lat:-12.7806,lng:45.2278}

];
