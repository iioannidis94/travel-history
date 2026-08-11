/* =====================================================================
   CITIES – curated list used for search and markers
   Europe - Extended list with 250+ major cities
   ===================================================================== */

const CITIES = [

   //================EUROPE========================================#######
  // Albania
  {name:"Tirana",country:"Albania",lat:41.3275,lng:19.8189},
  {name:"Durrës",country:"Albania",lat:41.3246,lng:19.4558},
  {name:"Berat",country:"Albania",lat:40.7058,lng:19.9522},
  {name:"Vlorë",country:"Albania",lat:40.4650,lng:19.4850},
  {name:"Shkodër",country:"Albania",lat:42.0683,lng:19.5126},
  
  // Andorra
  {name:"Andorra la Vella",country:"Andorra",lat:42.5063,lng:1.5218},
  
  // Armenia
  {name:"Yerevan",country:"Armenia",lat:40.1872,lng:44.5152},
  {name:"Gyumri",country:"Armenia",lat:40.7942,lng:43.8453},
  
  // Austria
  {name:"Vienna",country:"Austria",lat:48.2082,lng:16.3738},
  {name:"Salzburg",country:"Austria",lat:47.8095,lng:13.0550},
  {name:"Innsbruck",country:"Austria",lat:47.2692,lng:11.4041},
  {name:"Graz",country:"Austria",lat:47.0707,lng:15.4395},
  {name:"Linz",country:"Austria",lat:48.3069,lng:14.2858},
  {name:"Klagenfurt",country:"Austria",lat:46.6247,lng:14.3122},
  
  // Azerbaijan
  {name:"Baku",country:"Azerbaijan",lat:40.4093,lng:49.8671},
  {name:"Ganja",country:"Azerbaijan",lat:40.6828,lng:46.3606},
  
  // Belarus
  {name:"Minsk",country:"Belarus",lat:53.9045,lng:27.5615},
  {name:"Brest",country:"Belarus",lat:52.0976,lng:23.7341},
  {name:"Gomel",country:"Belarus",lat:52.4345,lng:30.9754},
  {name:"Vitebsk",country:"Belarus",lat:55.1904,lng:30.2049},
  
  // Belgium
  {name:"Brussels",country:"Belgium",lat:50.8503,lng:4.3517},
  {name:"Antwerp",country:"Belgium",lat:51.2194,lng:4.4025},
  {name:"Bruges",country:"Belgium",lat:51.2093,lng:3.2247},
  {name:"Ghent",country:"Belgium",lat:51.0543,lng:3.7174},
  {name:"Liège",country:"Belgium",lat:50.6326,lng:5.5797},
  {name:"Namur",country:"Belgium",lat:50.4674,lng:4.8712},
  {name:"Leuven",country:"Belgium",lat:50.8798,lng:4.7005},
  
  // Bosnia and Herzegovina
  {name:"Sarajevo",country:"Bosnia and Herzegovina",lat:43.8563,lng:18.4131},
  {name:"Mostar",country:"Bosnia and Herzegovina",lat:43.3438,lng:17.8078},
  {name:"Banja Luka",country:"Bosnia and Herzegovina",lat:44.7722,lng:17.1910},
  {name:"Tuzla",country:"Bosnia and Herzegovina",lat:44.5328,lng:18.6732},
  
  // Bulgaria
  {name:"Sofia",country:"Bulgaria",lat:42.6977,lng:23.3219},
  {name:"Plovdiv",country:"Bulgaria",lat:42.1354,lng:24.7453},
  {name:"Varna",country:"Bulgaria",lat:43.2141,lng:27.9147},
  {name:"Burgas",country:"Bulgaria",lat:42.5048,lng:27.4626},
  {name:"Ruse",country:"Bulgaria",lat:43.8356,lng:25.9657},
  
  // Croatia
  {name:"Zagreb",country:"Croatia",lat:45.8150,lng:15.9819},
  {name:"Dubrovnik",country:"Croatia",lat:42.6507,lng:18.0944},
  {name:"Split",country:"Croatia",lat:43.5081,lng:16.4402},
  {name:"Zadar",country:"Croatia",lat:44.1194,lng:15.2314},
  {name:"Rijeka",country:"Croatia",lat:45.3271,lng:14.4422},
  {name:"Osijek",country:"Croatia",lat:45.5550,lng:18.6955},
  
  // Cyprus
  {name:"Nicosia",country:"Cyprus",lat:35.1856,lng:33.3823},
  {name:"Limassol",country:"Cyprus",lat:34.7071,lng:33.0226},
  {name:"Paphos",country:"Cyprus",lat:34.7720,lng:32.4297},
  {name:"Larnaca",country:"Cyprus",lat:34.9172,lng:33.6277},
  {name:"Ayia Napa",country:"Cyprus",lat:34.9828,lng:34.0016},
  
  // Czech Republic
  {name:"Prague",country:"Czech Republic",lat:50.0755,lng:14.4378},
  {name:"Brno",country:"Czech Republic",lat:49.1951,lng:16.6068},
  {name:"Ostrava",country:"Czech Republic",lat:49.8209,lng:18.2625},
  {name:"Plzen",country:"Czech Republic",lat:49.7384,lng:13.3736},
  {name:"Olomouc",country:"Czech Republic",lat:49.5938,lng:17.2509},
  
  // Denmark
  {name:"Copenhagen",country:"Denmark",lat:55.6761,lng:12.5683},
  {name:"Aarhus",country:"Denmark",lat:56.1629,lng:10.2039},
  {name:"Odense",country:"Denmark",lat:55.4038,lng:10.4024},
  {name:"Aalborg",country:"Denmark",lat:57.0467,lng:9.9200},
  
  // Estonia
  {name:"Tallinn",country:"Estonia",lat:59.4370,lng:24.7536},
  {name:"Tartu",country:"Estonia",lat:58.3780,lng:26.7290},
  {name:"Pärnu",country:"Estonia",lat:58.3859,lng:24.4971},
  
  // Finland
  {name:"Helsinki",country:"Finland",lat:60.1699,lng:24.9384},
  {name:"Tampere",country:"Finland",lat:61.4978,lng:23.7610},
  {name:"Turku",country:"Finland",lat:60.4518,lng:22.2666},
  {name:"Oulu",country:"Finland",lat:65.0121,lng:25.4651},
  {name:"Espoo",country:"Finland",lat:60.2055,lng:24.6559},
  
  // France
  {name:"Paris",country:"France",lat:48.8566,lng:2.3522},
  {name:"Lyon",country:"France",lat:45.7640,lng:4.8357},
  {name:"Marseille",country:"France",lat:43.2965,lng:5.3698},
  {name:"Nice",country:"France",lat:43.7102,lng:7.2620},
  {name:"Bordeaux",country:"France",lat:44.8378,lng:-0.5792},
  {name:"Toulouse",country:"France",lat:43.6047,lng:1.4442},
  {name:"Strasbourg",country:"France",lat:48.5734,lng:7.7521},
  {name:"Montpellier",country:"France",lat:43.6108,lng:3.8767},
  {name:"Nantes",country:"France",lat:47.2184,lng:-1.5536},
  {name:"Lille",country:"France",lat:50.6292,lng:3.0573},
  {name:"Rennes",country:"France",lat:48.1173,lng:-1.6778},
  
  // Georgia
  {name:"Tbilisi",country:"Georgia",lat:41.6938,lng:44.8015},
  {name:"Batumi",country:"Georgia",lat:41.6168,lng:41.6367},
  {name:"Kutaisi",country:"Georgia",lat:42.2662,lng:42.7180},
  
  // Germany
  {name:"Berlin",country:"Germany",lat:52.5200,lng:13.4050},
  {name:"Munich",country:"Germany",lat:48.1351,lng:11.5820},
  {name:"Hamburg",country:"Germany",lat:53.5753,lng:10.0153},
  {name:"Frankfurt",country:"Germany",lat:50.1109,lng:8.6821},
  {name:"Cologne",country:"Germany",lat:50.9375,lng:6.9603},
  {name:"Stuttgart",country:"Germany",lat:48.7758,lng:9.1829},
  {name:"Düsseldorf",country:"Germany",lat:51.2277,lng:6.7735},
  {name:"Leipzig",country:"Germany",lat:51.3397,lng:12.3731},
  {name:"Dortmund",country:"Germany",lat:51.5136,lng:7.4653},
  {name:"Essen",country:"Germany",lat:51.4556,lng:7.0116},
  {name:"Bremen",country:"Germany",lat:53.0793,lng:8.8017},
  {name:"Dresden",country:"Germany",lat:51.0504,lng:13.7373},
  {name:"Hanover",country:"Germany",lat:52.3759,lng:9.7320},
  {name:"Nuremberg",country:"Germany",lat:49.4521,lng:11.0767},
  
  // Greece
  {name:"Athens",country:"Greece",lat:37.9838,lng:23.7275},
  {name:"Thessaloniki",country:"Greece",lat:40.6401,lng:22.9444},
  {name:"Patras",country:"Greece",lat:38.2466,lng:21.7346},
  {name:"Heraklion",country:"Greece",lat:35.3387,lng:25.1442},
  {name:"Larissa",country:"Greece",lat:39.6390,lng:22.4191},
  {name:"Volos",country:"Greece",lat:39.3621,lng:22.9426},
  {name:"Ioannina",country:"Greece",lat:39.6650,lng:20.8537},
  {name:"Chania",country:"Greece",lat:35.5138,lng:24.0180},
  {name:"Rhodes",country:"Greece",lat:36.4408,lng:28.2225},
  {name:"Kavala",country:"Greece",lat:40.9396,lng:24.4069},
  
  // Hungary
  {name:"Budapest",country:"Hungary",lat:47.4979,lng:19.0402},
  {name:"Debrecen",country:"Hungary",lat:47.5316,lng:21.6273},
  {name:"Szeged",country:"Hungary",lat:46.2530,lng:20.1414},
  {name:"Miskolc",country:"Hungary",lat:48.1035,lng:20.7784},
  {name:"Pécs",country:"Hungary",lat:46.0727,lng:18.2323},
  
  // Iceland
  {name:"Reykjavik",country:"Iceland",lat:64.1466,lng:-21.9426},
  {name:"Akureyri",country:"Iceland",lat:65.6835,lng:-18.1105},
  
  // Ireland
  {name:"Dublin",country:"Ireland",lat:53.3498,lng:-6.2603},
  {name:"Cork",country:"Ireland",lat:51.8985,lng:-8.4756},
  {name:"Galway",country:"Ireland",lat:53.2707,lng:-9.0568},
  {name:"Limerick",country:"Ireland",lat:52.6638,lng:-8.6267},
  {name:"Waterford",country:"Ireland",lat:52.2593,lng:-7.1101},
  
  // Italy
  {name:"Rome",country:"Italy",lat:41.9028,lng:12.4964},
  {name:"Milan",country:"Italy",lat:45.4642,lng:9.1900},
  {name:"Venice",country:"Italy",lat:45.4408,lng:12.3155},
  {name:"Florence",country:"Italy",lat:43.7696,lng:11.2558},
  {name:"Naples",country:"Italy",lat:40.8518,lng:14.2681},
  {name:"Turin",country:"Italy",lat:45.0703,lng:7.6869},
  {name:"Bologna",country:"Italy",lat:44.4949,lng:11.3426},
  {name:"Genoa",country:"Italy",lat:44.4056,lng:8.9463},
  {name:"Palermo",country:"Italy",lat:38.1157,lng:13.3615},
  {name:"Bari",country:"Italy",lat:41.1171,lng:16.8719},
  {name:"Catania",country:"Italy",lat:37.5079,lng:15.0830},
  {name:"Verona",country:"Italy",lat:45.4384,lng:10.9916},
  {name:"Pisa",country:"Italy",lat:43.7228,lng:10.4017},
  {name:"Siena",country:"Italy",lat:43.3188,lng:11.3308},
  
  // Kosovo
  {name:"Pristina",country:"Kosovo",lat:42.6629,lng:21.1655},
  {name:"Prizren",country:"Kosovo",lat:42.2139,lng:20.7397},
  
  // Latvia
  {name:"Riga",country:"Latvia",lat:56.9496,lng:24.1052},
  {name:"Jurmala",country:"Latvia",lat:56.9680,lng:23.7704},
  {name:"Daugavpils",country:"Latvia",lat:55.8747,lng:26.5362},
  {name:"Liepaja",country:"Latvia",lat:56.5047,lng:21.0108},
  
  // Liechtenstein
  {name:"Vaduz",country:"Liechtenstein",lat:47.1410,lng:9.5209},
  
  // Lithuania
  {name:"Vilnius",country:"Lithuania",lat:54.6872,lng:25.2797},
  {name:"Kaunas",country:"Lithuania",lat:54.8985,lng:23.9036},
  {name:"Klaipėda",country:"Lithuania",lat:55.7033,lng:21.1443},
  {name:"Šiauliai",country:"Lithuania",lat:55.9349,lng:23.3137},
  
  // Luxembourg
  {name:"Luxembourg City",country:"Luxembourg",lat:49.6116,lng:6.1319},
  {name:"Esch-sur-Alzette",country:"Luxembourg",lat:49.4971,lng:5.9828},
  
  // Malta
  {name:"Valletta",country:"Malta",lat:35.8997,lng:14.5147},
  {name:"Sliema",country:"Malta",lat:35.9125,lng:14.5019},
  {name:"St Julian's",country:"Malta",lat:35.9184,lng:14.4899},
  {name:"Mdina",country:"Malta",lat:35.8869,lng:14.4025},
  {name:"Rabat",country:"Malta",lat:35.8815,lng:14.3987},
  {name:"Victoria",country:"Malta",lat:36.0431,lng:14.2398},
  {name:"Mellieha",country:"Malta",lat:35.9564,lng:14.3622},
  {name:"Marsaxlokk",country:"Malta",lat:35.8419,lng:14.5446},
  {name:"Birkirkara",country:"Malta",lat:35.8972,lng:14.4611},
  
  // Moldova
  {name:"Chisinau",country:"Moldova",lat:47.0105,lng:28.8638},
  {name:"Tiraspol",country:"Moldova",lat:46.8364,lng:29.6105},
  
  // Monaco
  {name:"Monaco",country:"Monaco",lat:43.7384,lng:7.4246},
  
  // Montenegro
  {name:"Podgorica",country:"Montenegro",lat:42.4304,lng:19.2594},
  {name:"Kotor",country:"Montenegro",lat:42.4247,lng:18.7712},
  {name:"Budva",country:"Montenegro",lat:42.2911,lng:18.8403},
  {name:"Tivat",country:"Montenegro",lat:42.4364,lng:18.6961},
  
  // Netherlands
  {name:"Amsterdam",country:"Netherlands",lat:52.3676,lng:4.9041},
  {name:"Rotterdam",country:"Netherlands",lat:51.9244,lng:4.4777},
  {name:"The Hague",country:"Netherlands",lat:52.0705,lng:4.3007},
  {name:"Utrecht",country:"Netherlands",lat:52.0907,lng:5.1214},
  {name:"Eindhoven",country:"Netherlands",lat:51.4416,lng:5.4697},
  {name:"Groningen",country:"Netherlands",lat:53.2194,lng:6.5665},
  {name:"Tilburg",country:"Netherlands",lat:51.5555,lng:5.0913},
  {name:"Almere",country:"Netherlands",lat:52.3702,lng:5.2141},
  {name:"Breda",country:"Netherlands",lat:51.5893,lng:4.7738},
  
  // North Macedonia
  {name:"Skopje",country:"North Macedonia",lat:41.9973,lng:21.4280},
  {name:"Ohrid",country:"North Macedonia",lat:41.1231,lng:20.8016},
  {name:"Bitola",country:"North Macedonia",lat:41.0314,lng:21.3336},
  
  // Norway
  {name:"Oslo",country:"Norway",lat:59.9139,lng:10.7522},
  {name:"Bergen",country:"Norway",lat:60.3913,lng:5.3221},
  {name:"Trondheim",country:"Norway",lat:63.4305,lng:10.3951},
  {name:"Stavanger",country:"Norway",lat:58.9699,lng:5.7331},
  {name:"Tromsø",country:"Norway",lat:69.6492,lng:18.9553},
  
  // Poland
  {name:"Warsaw",country:"Poland",lat:52.2297,lng:21.0122},
  {name:"Krakow",country:"Poland",lat:50.0647,lng:19.9450},
  {name:"Gdansk",country:"Poland",lat:54.3520,lng:18.6466},
  {name:"Wroclaw",country:"Poland",lat:51.1079,lng:17.0385},
  {name:"Poznan",country:"Poland",lat:52.4064,lng:16.9252},
  {name:"Lodz",country:"Poland",lat:51.7592,lng:19.4560},
  {name:"Szczecin",country:"Poland",lat:53.4285,lng:14.5528},
  {name:"Bydgoszcz",country:"Poland",lat:53.1235,lng:18.0084},
  {name:"Lublin",country:"Poland",lat:51.2465,lng:22.5684},
  
  // Portugal
  {name:"Lisbon",country:"Portugal",lat:38.7169,lng:-9.1395},
  {name:"Porto",country:"Portugal",lat:41.1579,lng:-8.6291},
  {name:"Faro",country:"Portugal",lat:37.0194,lng:-7.9304},
  {name:"Braga",country:"Portugal",lat:41.5454,lng:-8.4265},
  {name:"Coimbra",country:"Portugal",lat:40.2033,lng:-8.4103},
  {name:"Funchal",country:"Portugal",lat:32.6511,lng:-16.9087},
  {name:"Sintra",country:"Portugal",lat:38.8029,lng:-9.3817},
  
  // Romania
  {name:"Bucharest",country:"Romania",lat:44.4268,lng:26.1025},
  {name:"Cluj-Napoca",country:"Romania",lat:46.7712,lng:23.6236},
  {name:"Brasov",country:"Romania",lat:45.6427,lng:25.5887},
  {name:"Timisoara",country:"Romania",lat:45.7489,lng:21.2087},
  {name:"Iasi",country:"Romania",lat:47.1585,lng:27.5873},
  {name:"Constanta",country:"Romania",lat:44.1733,lng:28.6383},
  {name:"Craiova",country:"Romania",lat:44.3302,lng:23.7949},
  {name:"Sibiu",country:"Romania",lat:45.7983,lng:24.1256},
  
  // Russia (European Part)
  {name:"Moscow",country:"Russia",lat:55.7558,lng:37.6173},
  {name:"Saint Petersburg",country:"Russia",lat:59.9311,lng:30.3609},
  {name:"Kazan",country:"Russia",lat:55.7963,lng:49.1088},
  {name:"Nizhny Novgorod",country:"Russia",lat:56.3269,lng:44.0059},
  {name:"Samara",country:"Russia",lat:53.1959,lng:50.1001},
  {name:"Rostov-on-Don",country:"Russia",lat:47.2357,lng:39.7015},
  {name:"Volgograd",country:"Russia",lat:48.7071,lng:44.5169},
  {name:"Kaliningrad",country:"Russia",lat:54.7104,lng:20.4522},
  
  // San Marino
  {name:"San Marino",country:"San Marino",lat:43.9424,lng:12.4578},
  
  // Serbia
  {name:"Belgrade",country:"Serbia",lat:44.7866,lng:20.4489},
  {name:"Novi Sad",country:"Serbia",lat:45.2671,lng:19.8335},
  {name:"Niš",country:"Serbia",lat:43.3209,lng:21.8958},
  {name:"Kragujevac",country:"Serbia",lat:44.0128,lng:20.9114},
  
  // Slovakia
  {name:"Bratislava",country:"Slovakia",lat:48.1486,lng:17.1077},
  {name:"Kosice",country:"Slovakia",lat:48.7164,lng:21.2611},
  {name:"Prešov",country:"Slovakia",lat:48.9984,lng:21.2339},
  {name:"Žilina",country:"Slovakia",lat:49.2231,lng:18.7394},
  
  // Slovenia
  {name:"Ljubljana",country:"Slovenia",lat:46.0569,lng:14.5058},
  {name:"Maribor",country:"Slovenia",lat:46.5547,lng:15.6459},
  {name:"Kranj",country:"Slovenia",lat:46.2389,lng:14.3556},
  {name:"Celje",country:"Slovenia",lat:46.2289,lng:15.2685},
  
  // Spain
  {name:"Madrid",country:"Spain",lat:40.4168,lng:-3.7038},
  {name:"Barcelona",country:"Spain",lat:41.3851,lng:2.1734},
  {name:"Seville",country:"Spain",lat:37.3891,lng:-5.9845},
  {name:"Valencia",country:"Spain",lat:39.4699,lng:-0.3763},
  {name:"Malaga",country:"Spain",lat:36.7213,lng:-4.4214},
  {name:"Bilbao",country:"Spain",lat:43.2630,lng:-2.9350},
  {name:"Palma",country:"Spain",lat:39.5696,lng:2.6502},
  {name:"Zaragoza",country:"Spain",lat:41.6488,lng:-0.8891},
  {name:"Murcia",country:"Spain",lat:37.9922,lng:-1.1307},
  {name:"Las Palmas",country:"Spain",lat:28.1235,lng:-15.4363},
  {name:"Alicante",country:"Spain",lat:38.3452,lng:-0.4810},
  {name:"Córdoba",country:"Spain",lat:37.8882,lng:-4.7794},
  {name:"Valladolid",country:"Spain",lat:41.6523,lng:-4.7245},
  {name:"Vigo",country:"Spain",lat:42.2406,lng:-8.7207},
  
  // Sweden
  {name:"Stockholm",country:"Sweden",lat:59.3293,lng:18.0686},
  {name:"Gothenburg",country:"Sweden",lat:57.7089,lng:11.9746},
  {name:"Malmö",country:"Sweden",lat:55.6049,lng:13.0038},
  {name:"Uppsala",country:"Sweden",lat:59.8586,lng:17.6389},
  {name:"Västerås",country:"Sweden",lat:59.6099,lng:16.5448},
  {name:"Örebro",country:"Sweden",lat:59.2741,lng:15.2066},
  
  // Switzerland
  {name:"Zurich",country:"Switzerland",lat:47.3769,lng:8.5417},
  {name:"Geneva",country:"Switzerland",lat:46.2044,lng:6.1432},
  {name:"Basel",country:"Switzerland",lat:47.5596,lng:7.5886},
  {name:"Lucerne",country:"Switzerland",lat:47.0502,lng:8.3093},
  {name:"Bern",country:"Switzerland",lat:46.9480,lng:7.4474},
  {name:"Lausanne",country:"Switzerland",lat:46.5197,lng:6.6323},
  {name:"Winterthur",country:"Switzerland",lat:47.4988,lng:8.7300},
  {name:"St. Gallen",country:"Switzerland",lat:47.4245,lng:9.3767},
  
  // Turkey (European Part)
  {name:"Istanbul",country:"Turkey",lat:41.0082,lng:28.9784},
  {name:"Edirne",country:"Turkey",lat:41.6771,lng:26.5557},
  {name:"Tekirdağ",country:"Turkey",lat:40.9780,lng:27.5117},
  
  // Ukraine
  {name:"Kyiv",country:"Ukraine",lat:50.4501,lng:30.5234},
  {name:"Lviv",country:"Ukraine",lat:49.8397,lng:24.0297},
  {name:"Odesa",country:"Ukraine",lat:46.4825,lng:30.7233},
  {name:"Kharkiv",country:"Ukraine",lat:49.9935,lng:36.2304},
  {name:"Dnipro",country:"Ukraine",lat:48.4647,lng:35.0462},
  {name:"Zaporizhzhia",country:"Ukraine",lat:47.8388,lng:35.1396},
  
  // United Kingdom
  {name:"London",country:"United Kingdom",lat:51.5074,lng:-0.1278},
  {name:"Edinburgh",country:"United Kingdom",lat:55.9533,lng:-3.1883},
  {name:"Manchester",country:"United Kingdom",lat:53.4808,lng:-2.2426},
  {name:"Birmingham",country:"United Kingdom",lat:52.4862,lng:-1.8904},
  {name:"Glasgow",country:"United Kingdom",lat:55.8642,lng:-4.2518},
  {name:"Liverpool",country:"United Kingdom",lat:53.4084,lng:-2.9916},
  {name:"Leeds",country:"United Kingdom",lat:53.8008,lng:-1.5491},
  {name:"Sheffield",country:"United Kingdom",lat:53.3811,lng:-1.4701},
  {name:"Bristol",country:"United Kingdom",lat:51.4545,lng:-2.5879},
  {name:"Newcastle",country:"United Kingdom",lat:54.9783,lng:-1.6178},
  {name:"Nottingham",country:"United Kingdom",lat:52.9548,lng:-1.1581},
  {name:"Cardiff",country:"United Kingdom",lat:51.4816,lng:-3.1791},
  {name:"Belfast",country:"United Kingdom",lat:54.5973,lng:-5.9301},
  
  // Vatican City
  {name:"Vatican City",country:"Vatican City",lat:41.9029,lng:12.4534},



   //========================================== ASIA===================================================#####
   // Afghanistan
  {name:"Kabul",country:"Afghanistan",lat:34.5553,lng:69.2075},
  {name:"Kandahar",country:"Afghanistan",lat:31.6289,lng:65.7372},
  {name:"Herat",country:"Afghanistan",lat:34.3419,lng:62.2031},
  {name:"Mazar-i-Sharif",country:"Afghanistan",lat:36.7090,lng:67.1109},

  // Bahrain
  {name:"Manama",country:"Bahrain",lat:26.2235,lng:50.5876},


   
  // Bangladesh
  {name:"Dhaka",country:"Bangladesh",lat:23.8103,lng:90.4125},
  {name:"Chittagong",country:"Bangladesh",lat:22.3569,lng:91.7832},
  {name:"Sylhet",country:"Bangladesh",lat:24.8949,lng:91.8687},
  {name:"Khulna",country:"Bangladesh",lat:22.8456,lng:89.5403},
  {name:"Rajshahi",country:"Bangladesh",lat:24.3745,lng:88.6042},

  // Bhutan
  {name:"Thimphu",country:"Bhutan",lat:27.4728,lng:89.6393},

  // Cambodia
  {name:"Phnom Penh",country:"Cambodia",lat:11.5564,lng:104.9282},
  {name:"Siem Reap",country:"Cambodia",lat:13.3611,lng:103.8593},
  {name:"Battambang",country:"Cambodia",lat:13.0957,lng:103.2022},

  // China
  {name:"Beijing",country:"China",lat:39.9042,lng:116.4074},
  {name:"Shanghai",country:"China",lat:31.2304,lng:121.4737},
  {name:"Guangzhou",country:"China",lat:23.1291,lng:113.2644},
  {name:"Shenzhen",country:"China",lat:22.5431,lng:114.0579},
  {name:"Chengdu",country:"China",lat:30.5728,lng:104.0668},
  {name:"Xi'an",country:"China",lat:34.3416,lng:108.9398},
  {name:"Hangzhou",country:"China",lat:30.2741,lng:120.1551},
  {name:"Wuhan",country:"China",lat:30.5928,lng:114.3055},
  {name:"Chongqing",country:"China",lat:29.5628,lng:106.5528},
  {name:"Nanjing",country:"China",lat:32.0603,lng:118.7969},
  {name:"Tianjin",country:"China",lat:39.0842,lng:117.2009},
  {name:"Harbin",country:"China",lat:45.8038,lng:126.5350},
  {name:"Hong Kong",country:"China",lat:22.3193,lng:114.1694},
  {name:"Macau",country:"China",lat:22.1987,lng:113.5439},

  // India
  {name:"Mumbai",country:"India",lat:19.0760,lng:72.8777},
  {name:"Delhi",country:"India",lat:28.6139,lng:77.2090},
  {name:"Bangalore",country:"India",lat:12.9716,lng:77.5946},
  {name:"Hyderabad",country:"India",lat:17.3850,lng:78.4867},
  {name:"Ahmedabad",country:"India",lat:23.0225,lng:72.5714},
  {name:"Chennai",country:"India",lat:13.0827,lng:80.2707},
  {name:"Kolkata",country:"India",lat:22.5726,lng:88.3639},
  {name:"Surat",country:"India",lat:21.1702,lng:72.8311},
  {name:"Pune",country:"India",lat:18.5204,lng:73.8567},
  {name:"Jaipur",country:"India",lat:26.9124,lng:75.7873},
  {name:"Lucknow",country:"India",lat:26.8467,lng:80.9462},
  {name:"Kanpur",country:"India",lat:26.4499,lng:80.3319},
  {name:"Nagpur",country:"India",lat:21.1458,lng:79.0882},
  {name:"Indore",country:"India",lat:22.7196,lng:75.8577},
  {name:"Bhopal",country:"India",lat:23.2599,lng:77.4126},
  {name:"Patna",country:"India",lat:25.5941,lng:85.1376},
  {name:"Vadodara",country:"India",lat:22.3072,lng:73.1812},
  {name:"Agra",country:"India",lat:27.1767,lng:78.0081},
  {name:"Varanasi",country:"India",lat:25.3176,lng:83.0039},
  {name:"Amritsar",country:"India",lat:31.6340,lng:74.8723},

  // Indonesia
  {name:"Jakarta",country:"Indonesia",lat:-6.2088,lng:106.8456},
  {name:"Surabaya",country:"Indonesia",lat:-7.2504,lng:112.7688},
  {name:"Bandung",country:"Indonesia",lat:-6.9175,lng:107.6191},
  {name:"Medan",country:"Indonesia",lat:-3.5952,lng:98.6722},
  {name:"Semarang",country:"Indonesia",lat:-6.9932,lng:110.4203},
  {name:"Makassar",country:"Indonesia",lat:-5.1477,lng:119.4327},
  {name:"Palembang",country:"Indonesia",lat:-2.9909,lng:104.7566},
  {name:"Denpasar",country:"Indonesia",lat:-8.6705,lng:115.2126},
  {name:"Malang",country:"Indonesia",lat:-7.9797,lng:112.6304},
  {name:"Samarinda",country:"Indonesia",lat:-0.5022,lng:117.1536},

  // Iran
  {name:"Tehran",country:"Iran",lat:35.6892,lng:51.3890},
  {name:"Mashhad",country:"Iran",lat:36.2605,lng:59.6168},
  {name:"Isfahan",country:"Iran",lat:32.6539,lng:51.6660},
  {name:"Karaj",country:"Iran",lat:35.8327,lng:50.9915},
  {name:"Shiraz",country:"Iran",lat:29.5918,lng:52.5836},
  {name:"Tabriz",country:"Iran",lat:38.0962,lng:46.2890},
  {name:"Qom",country:"Iran",lat:34.6416,lng:50.8746},
  {name:"Ahvaz",country:"Iran",lat:31.3183,lng:48.6706},

  // Iraq
  {name:"Baghdad",country:"Iraq",lat:33.3152,lng:44.3661},
  {name:"Basra",country:"Iraq",lat:30.5081,lng:47.7835},
  {name:"Mosul",country:"Iraq",lat:36.3400,lng:43.1300},
  {name:"Erbil",country:"Iraq",lat:36.1901,lng:44.0090},
  {name:"Kirkuk",country:"Iraq",lat:35.4700,lng:44.3900},
  {name:"Najaf",country:"Iraq",lat:31.9930,lng:44.3317},
  {name:"Karbala",country:"Iraq",lat:32.6160,lng:44.0250},

  // Israel
  {name:"Tel Aviv",country:"Israel",lat:32.0853,lng:34.7818},
  {name:"Jerusalem",country:"Israel",lat:31.7683,lng:35.2137},
  {name:"Haifa",country:"Israel",lat:32.7940,lng:34.9896},
  {name:"Rishon LeZion",country:"Israel",lat:31.9730,lng:34.7925},
  {name:"Petah Tikva",country:"Israel",lat:32.0840,lng:34.8878},
  {name:"Ashdod",country:"Israel",lat:31.8014,lng:34.6435},

  // Japan
  {name:"Tokyo",country:"Japan",lat:35.6762,lng:139.6503},
  {name:"Yokohama",country:"Japan",lat:35.4437,lng:139.6380},
  {name:"Osaka",country:"Japan",lat:34.6937,lng:135.5022},
  {name:"Nagoya",country:"Japan",lat:35.1815,lng:136.9066},
  {name:"Sapporo",country:"Japan",lat:43.0618,lng:141.3545},
  {name:"Fukuoka",country:"Japan",lat:33.5902,lng:130.4017},
  {name:"Kobe",country:"Japan",lat:34.6901,lng:135.1955},
  {name:"Kyoto",country:"Japan",lat:35.0116,lng:135.7681},
  {name:"Hiroshima",country:"Japan",lat:34.3853,lng:132.4553},
  {name:"Sendai",country:"Japan",lat:38.2682,lng:140.8694},

  // Jordan
  {name:"Amman",country:"Jordan",lat:31.9539,lng:35.9106},
  {name:"Zarqa",country:"Jordan",lat:32.0728,lng:36.0880},
  {name:"Irbid",country:"Jordan",lat:32.5514,lng:35.8515},
  {name:"Aqaba",country:"Jordan",lat:29.5319,lng:35.0061},

  // Kazakhstan
  {name:"Astana",country:"Kazakhstan",lat:51.1694,lng:71.4491},
  {name:"Almaty",country:"Kazakhstan",lat:43.2220,lng:76.8512},
  {name:"Shymkent",country:"Kazakhstan",lat:42.3417,lng:69.5901},
  {name:"Karaganda",country:"Kazakhstan",lat:49.8019,lng:73.1021},
  {name:"Aktobe",country:"Kazakhstan",lat:50.2839,lng:57.1670},

  // Kuwait
  {name:"Kuwait City",country:"Kuwait",lat:29.3759,lng:47.9774},
  {name:"Al Ahmadi",country:"Kuwait",lat:29.0769,lng:48.0839},

  // Kyrgyzstan
  {name:"Bishkek",country:"Kyrgyzstan",lat:42.8746,lng:74.5698},
  {name:"Osh",country:"Kyrgyzstan",lat:40.5139,lng:72.8161},

  // Laos
  {name:"Vientiane",country:"Laos",lat:17.9757,lng:102.6331},
  {name:"Luang Prabang",country:"Laos",lat:19.8833,lng:102.1333},

  // Lebanon
  {name:"Beirut",country:"Lebanon",lat:33.8938,lng:35.5018},
  {name:"Tripoli",country:"Lebanon",lat:34.4367,lng:35.8352},
  {name:"Sidon",country:"Lebanon",lat:33.5599,lng:35.3725},

  // Malaysia
  {name:"Kuala Lumpur",country:"Malaysia",lat:3.1390,lng:101.6869},
  {name:"George Town",country:"Malaysia",lat:5.4141,lng:100.3288},
  {name:"Johor Bahru",country:"Malaysia",lat:1.4927,lng:103.7414},
  {name:"Ipoh",country:"Malaysia",lat:4.5975,lng:101.0901},
  {name:"Kuching",country:"Malaysia",lat:1.5535,lng:110.3592},
  {name:"Kota Kinabalu",country:"Malaysia",lat:5.9804,lng:116.0735},

  // Maldives
  {name:"Malé",country:"Maldives",lat:4.1755,lng:73.5093},

  // Mongolia
  {name:"Ulaanbaatar",country:"Mongolia",lat:47.8864,lng:106.9057},
  {name:"Erdenet",country:"Mongolia",lat:49.0279,lng:104.0450},

  // Myanmar
  {name:"Yangon",country:"Myanmar",lat:16.8661,lng:96.1951},
  {name:"Mandalay",country:"Myanmar",lat:21.9588,lng:96.0891},
  {name:"Naypyidaw",country:"Myanmar",lat:19.7633,lng:96.0785},
  {name:"Bago",country:"Myanmar",lat:17.3353,lng:96.4818},

  // Nepal
  {name:"Kathmandu",country:"Nepal",lat:27.7172,lng:85.3240},
  {name:"Pokhara",country:"Nepal",lat:28.2096,lng:83.9856},
  {name:"Lalitpur",country:"Nepal",lat:27.6710,lng:85.3129},

  // North Korea
  {name:"Pyongyang",country:"North Korea",lat:39.0392,lng:125.7625},
  {name:"Hamhung",country:"North Korea",lat:39.9142,lng:127.5369},

  // Oman
  {name:"Muscat",country:"Oman",lat:23.5880,lng:58.3829},
  {name:"Salalah",country:"Oman",lat:17.0151,lng:54.0924},

  // Pakistan
  {name:"Karachi",country:"Pakistan",lat:24.8607,lng:67.0011},
  {name:"Lahore",country:"Pakistan",lat:31.5497,lng:74.3436},
  {name:"Faisalabad",country:"Pakistan",lat:31.4187,lng:73.0791},
  {name:"Rawalpindi",country:"Pakistan",lat:33.5984,lng:73.0441},
  {name:"Peshawar",country:"Pakistan",lat:34.0151,lng:71.5249},
  {name:"Multan",country:"Pakistan",lat:30.1978,lng:71.4697},
  {name:"Hyderabad",country:"Pakistan",lat:25.3960,lng:68.3578},
  {name:"Islamabad",country:"Pakistan",lat:33.6844,lng:73.0479},
  {name:"Quetta",country:"Pakistan",lat:30.1798,lng:67.0077},

  // Philippines
  {name:"Manila",country:"Philippines",lat:14.5995,lng:120.9842},
  {name:"Quezon City",country:"Philippines",lat:14.6760,lng:121.0437},
  {name:"Davao City",country:"Philippines",lat:7.1907,lng:125.4553},
  {name:"Cebu City",country:"Philippines",lat:10.3157,lng:123.8854},
  {name:"Zamboanga City",country:"Philippines",lat:6.9214,lng:122.0790},
  {name:"Cagayan de Oro",country:"Philippines",lat:8.4777,lng:124.6308},

  // Qatar
  {name:"Doha",country:"Qatar",lat:25.2854,lng:51.5310},
  {name:"Al Rayyan",country:"Qatar",lat:25.2919,lng:51.4244},

  // Russia (Asian Part / Siberia)
  {name:"Novosibirsk",country:"Russia",lat:55.0084,lng:82.9357},
  {name:"Yekaterinburg",country:"Russia",lat:56.8389,lng:60.6057},
  {name:"Chelyabinsk",country:"Russia",lat:55.1644,lng:61.4368},
  {name:"Omsk",country:"Russia",lat:54.9885,lng:73.3242},
  {name:"Krasnoyarsk",country:"Russia",lat:56.0153,lng:92.8932},
  {name:"Vladivostok",country:"Russia",lat:43.1198,lng:131.8869},
  {name:"Irkutsk",country:"Russia",lat:52.2870,lng:104.3050},

  // Saudi Arabia
  {name:"Riyadh",country:"Saudi Arabia",lat:24.7136,lng:46.6753},
  {name:"Jeddah",country:"Saudi Arabia",lat:21.4858,lng:39.1925},
  {name:"Mecca",country:"Saudi Arabia",lat:21.3891,lng:39.8579},
  {name:"Medina",country:"Saudi Arabia",lat:24.4672,lng:39.6112},
  {name:"Dammam",country:"Saudi Arabia",lat:26.3927,lng:50.1971},
  {name:"Taif",country:"Saudi Arabia",lat:21.2825,lng:40.4136},
  {name:"Tabuk",country:"Saudi Arabia",lat:28.3835,lng:36.5662},

  // Singapore
  {name:"Singapore",country:"Singapore",lat:1.3521,lng:103.8198},

  // South Korea
  {name:"Seoul",country:"South Korea",lat:37.5665,lng:126.9780},
  {name:"Busan",country:"South Korea",lat:35.1796,lng:129.0756},
  {name:"Incheon",country:"South Korea",lat:37.4563,lng:126.7052},
  {name:"Daegu",country:"South Korea",lat:35.8714,lng:128.6014},
  {name:"Daejeon",country:"South Korea",lat:36.3504,lng:127.3845},
  {name:"Gwangju",country:"South Korea",lat:35.1595,lng:126.8526},
  {name:"Suwon",country:"South Korea",lat:37.2636,lng:127.0286},
  {name:"Ulsan",country:"South Korea",lat:35.5384,lng:129.3114},

  // Sri Lanka
  {name:"Colombo",country:"Sri Lanka",lat:6.9271,lng:79.8612},
  {name:"Kandy",country:"Sri Lanka",lat:7.2906,lng:80.6337},
  {name:"Galle",country:"Sri Lanka",lat:6.0535,lng:80.2210},

  // Syria
  {name:"Damascus",country:"Syria",lat:33.5138,lng:36.2765},
  {name:"Aleppo",country:"Syria",lat:36.2012,lng:37.1612},
  {name:"Homs",country:"Syria",lat:34.7324,lng:36.7137},
  {name:"Latakia",country:"Syria",lat:35.5317,lng:35.7892},

  // Taiwan
  {name:"Taipei",country:"Taiwan",lat:25.0330,lng:121.5654},
  {name:"New Taipei City",country:"Taiwan",lat:25.0119,lng:121.4651},
  {name:"Kaohsiung",country:"Taiwan",lat:22.6273,lng:120.3014},
  {name:"Taichung",country:"Taiwan",lat:24.1477,lng:120.6736},
  {name:"Tainan",country:"Taiwan",lat:22.9997,lng:120.2270},

  // Tajikistan
  {name:"Dushanbe",country:"Tajikistan",lat:38.5598,lng:68.7870},
  {name:"Khujand",country:"Tajikistan",lat:40.2826,lng:69.6222},

  // Thailand
  {name:"Bangkok",country:"Thailand",lat:13.7563,lng:100.5018},
  {name:"Chiang Mai",country:"Thailand",lat:18.7883,lng:98.9853},
  {name:"Phuket",country:"Thailand",lat:7.8804,lng:98.3923},
  {name:"Pattaya",country:"Thailand",lat:12.9236,lng:100.8825},
  {name:"Hat Yai",country:"Thailand",lat:7.0094,lng:100.4730},
  {name:"Nakhon Ratchasima",country:"Thailand",lat:14.9799,lng:102.0978},

  // Turkey (Asian Part)
  {name:"Ankara",country:"Turkey",lat:39.9334,lng:32.8597},
  {name:"Izmir",country:"Turkey",lat:38.4192,lng:27.1287},
  {name:"Bursa",country:"Turkey",lat:40.1885,lng:29.0610},
  {name:"Adana",country:"Turkey",lat:37.0000,lng:35.3213},
  {name:"Gaziantep",country:"Turkey",lat:37.0662,lng:37.3833},
  {name:"Konya",country:"Turkey",lat:37.8746,lng:32.4932},
  {name:"Antalya",country:"Turkey",lat:36.8969,lng:30.7133},
  {name:"Kayseri",country:"Turkey",lat:38.7312,lng:35.4787},

  // Turkmenistan
  {name:"Ashgabat",country:"Turkmenistan",lat:37.9601,lng:58.3261},
  {name:"Türkmenabat",country:"Turkmenistan",lat:39.0833,lng:63.5667},

  // United Arab Emirates
  {name:"Dubai",country:"United Arab Emirates",lat:25.2048,lng:55.2708},
  {name:"Abu Dhabi",country:"United Arab Emirates",lat:24.4539,lng:54.3773},
  {name:"Sharjah",country:"United Arab Emirates",lat:25.3463,lng:55.4209},
  {name:"Al Ain",country:"United Arab Emirates",lat:24.1917,lng:55.7606},
  {name:"Ajman",country:"United Arab Emirates",lat:25.4052,lng:55.4402},

  // Uzbekistan
  {name:"Tashkent",country:"Uzbekistan",lat:41.2995,lng:69.2401},
  {name:"Samarkand",country:"Uzbekistan",lat:39.6270,lng:66.9749},
  {name:"Namangan",country:"Uzbekistan",lat:41.0010,lng:71.6726},
  {name:"Bukhara",country:"Uzbekistan",lat:39.7715,lng:64.4253},

  // Vietnam
  {name:"Ho Chi Minh City",country:"Vietnam",lat:10.8231,lng:106.6297},
  {name:"Hanoi",country:"Vietnam",lat:21.0285,lng:105.8542},
  {name:"Da Nang",country:"Vietnam",lat:16.0544,lng:108.2022},
  {name:"Hai Phong",country:"Vietnam",lat:20.8449,lng:106.6881},
  {name:"Can Tho",country:"Vietnam",lat:10.0452,lng:105.7469},
  {name:"Bien Hoa",country:"Vietnam",lat:10.9575,lng:106.8243},
  {name:"Hue",country:"Vietnam",lat:16.4637,lng:107.5909},

  // Yemen
  {name:"Sana'a",country:"Yemen",lat:15.3694,lng:44.1910},
  {name:"Aden",country:"Yemen",lat:12.7981,lng:45.0354},
  {name:"Taiz",country:"Yemen",lat:13.5795,lng:44.0205},


//Oceania######
   
// Australia (Major Cities & Regional Centres)
  {name:"Sydney",country:"Australia",lat:-33.8688,lng:151.2093},
  {name:"Melbourne",country:"Australia",lat:-37.8136,lng:144.9631},
  {name:"Brisbane",country:"Australia",lat:-27.4698,lng:153.0251},
  {name:"Perth",country:"Australia",lat:-31.9505,lng:115.8605},
  {name:"Adelaide",country:"Australia",lat:-34.9285,lng:138.6007},
  {name:"Gold Coast",country:"Australia",lat:-28.0167,lng:153.4000},
  {name:"Newcastle",country:"Australia",lat:-32.9283,lng:151.7817},
  {name:"Canberra",country:"Australia",lat:-35.2809,lng:149.1300},
  {name:"Sunshine Coast",country:"Australia",lat:-26.6500,lng:153.0667},
  {name:"Wollongong",country:"Australia",lat:-34.4244,lng:150.8931},
  {name:"Hobart",country:"Australia",lat:-42.8821,lng:147.3272},
  {name:"Geelong",country:"Australia",lat:-38.1499,lng:144.3617},
  {name:"Townsville",country:"Australia",lat:-19.2590,lng:146.8169},
  {name:"Cairns",country:"Australia",lat:-16.9186,lng:145.7781},
  {name:"Darwin",country:"Australia",lat:-12.4634,lng:130.8456},
  {name:"Toowoomba",country:"Australia",lat:-27.5598,lng:151.9507},
  {name:"Ballarat",country:"Australia",lat:-37.5622,lng:143.8503},
  {name:"Bendigo",country:"Australia",lat:-36.7570,lng:144.2794},
  {name:"Albury",country:"Australia",lat:-36.0737,lng:146.9135},
  {name:"Launceston",country:"Australia",lat:-41.4332,lng:147.1441},
  {name:"Mackay",country:"Australia",lat:-21.1411,lng:149.1861},
  {name:"Rockhampton",country:"Australia",lat:-23.3739,lng:150.5117},
  {name:"Bunbury",country:"Australia",lat:-33.3256,lng:115.6396},
  {name:"Coffs Harbour",country:"Australia",lat:-30.2963,lng:153.1141},
  {name:"Bundaberg",country:"Australia",lat:-24.8662,lng:152.3489},
  {name:"Wagga Wagga",country:"Australia",lat:-35.1119,lng:147.3698},
  {name:"Hervey Bay",country:"Australia",lat:-25.2884,lng:152.8711},
  {name:"Mildura",country:"Australia",lat:-34.2080,lng:142.1365},
  {name:"Shepparton",country:"Australia",lat:-36.3833,lng:145.4000},
  {name:"Gladstone",country:"Australia",lat:-23.8427,lng:151.2555},
  {name:"Port Macquarie",country:"Australia",lat:-31.4308,lng:152.9069},
  {name:"Tamworth",country:"Australia",lat:-31.0927,lng:150.9320},
  {name:"Traralgon",country:"Australia",lat:-38.1965,lng:146.5401},
  {name:"Orange",country:"Australia",lat:-33.2833,lng:149.1000},
  {name:"Geraldton",country:"Australia",lat:-28.7744,lng:114.6144},
  {name:"Bowral",country:"Australia",lat:-34.4792,lng:150.4181},
  {name:"Dubbo",country:"Australia",lat:-32.2479,lng:148.6012},
  {name:"Busselton",country:"Australia",lat:-33.6532,lng:115.3455},
  {name:"Bathurst",country:"Australia",lat:-33.4200,lng:149.5775},
  {name:"Nowra",country:"Australia",lat:-34.8806,lng:150.6053},
  {name:"Warrnambool",country:"Australia",lat:-38.3840,lng:142.4839},
  {name:"Kalgoorlie",country:"Australia",lat:-30.7489,lng:121.4658},
  {name:"Albany",country:"Australia",lat:-35.0275,lng:117.8840},
  {name:"Mount Gambier",country:"Australia",lat:-37.8284,lng:140.7804},
  {name:"Alice Springs",country:"Australia",lat:-23.6980,lng:133.8807},
  {name:"Broken Hill",country:"Australia",lat:-31.9539,lng:141.4539},

  // New Zealand
  {name:"Auckland",country:"New Zealand",lat:-36.8485,lng:174.7633},
  {name:"Wellington",country:"New Zealand",lat:-41.2865,lng:174.7762},
  {name:"Christchurch",country:"New Zealand",lat:-43.5321,lng:172.6362},
  {name:"Hamilton",country:"New Zealand",lat:-37.7870,lng:175.2793},
  {name:"Tauranga",country:"New Zealand",lat:-37.6878,lng:176.1651},
  {name:"Napier",country:"New Zealand",lat:-39.4928,lng:176.9120},
  {name:"Hastings",country:"New Zealand",lat:-39.6385,lng:176.8465},
  {name:"Dunedin",country:"New Zealand",lat:-45.8788,lng:170.5028},
  {name:"Palmerston North",country:"New Zealand",lat:-40.3523,lng:175.6082},
  {name:"Nelson",country:"New Zealand",lat:-41.2706,lng:173.2840},
  {name:"Rotorua",country:"New Zealand",lat:-38.1368,lng:176.2497},
  {name:"New Plymouth",country:"New Zealand",lat:-39.0556,lng:174.0752},
  {name:"Whangarei",country:"New Zealand",lat:-35.7317,lng:174.3239},
  {name:"Invercargill",country:"New Zealand",lat:-46.4132,lng:168.3538},
  {name:"Whanganui",country:"New Zealand",lat:-39.9300,lng:175.0500},
  {name:"Gisborne",country:"New Zealand",lat:-38.6623,lng:178.0176},
  {name:"Blenheim",country:"New Zealand",lat:-41.5134,lng:173.9612},
  {name:"Timaru",country:"New Zealand",lat:-44.3970,lng:171.2550},
  {name:"Taupo",country:"New Zealand",lat:-38.6857,lng:176.0702},
  {name:"Masterton",country:"New Zealand",lat:-40.9511,lng:175.6574},
  {name:"Levin",country:"New Zealand",lat:-40.6225,lng:175.2865},
  {name:"Ashburton",country:"New Zealand",lat:-43.9006,lng:171.7375},
  {name:"Queenstown",country:"New Zealand",lat:-45.0312,lng:168.6626},

  // Papua New Guinea
  {name:"Port Moresby",country:"Papua New Guinea",lat:-9.4438,lng:147.1803},
  {name:"Lae",country:"Papua New Guinea",lat:-6.7260,lng:146.9846},
  {name:"Mount Hagen",country:"Papua New Guinea",lat:-5.8569,lng:144.2272},
  {name:"Madang",country:"Papua New Guinea",lat:-5.2185,lng:145.7952},
  {name:"Goroka",country:"Papua New Guinea",lat:-6.0827,lng:145.3907},
  {name:"Wewak",country:"Papua New Guinea",lat:-3.5517,lng:143.6268},

  // Fiji
  {name:"Suva",country:"Fiji",lat:-18.1416,lng:178.4419},
  {name:"Lautoka",country:"Fiji",lat:-17.6167,lng:177.4667},
  {name:"Nadi",country:"Fiji",lat:-17.8000,lng:177.4167},
  {name:"Labasa",country:"Fiji",lat:-16.4333,lng:179.3667},

  // Solomon Islands
  {name:"Honiara",country:"Solomon Islands",lat:-9.4280,lng:159.9497},
  {name:"Auki",country:"Solomon Islands",lat:-8.7667,lng:160.7000},

  // Vanuatu
  {name:"Port Vila",country:"Vanuatu",lat:-17.7333,lng:168.3167},
  {name:"Luganville",country:"Vanuatu",lat:-15.5167,lng:167.1667},

  // Samoa
  {name:"Apia",country:"Samoa",lat:-13.8333,lng:-171.7667},

  // Tonga
  {name:"Nukuʻalofa",country:"Tonga",lat:-21.1333,lng:-175.2000},

  // Kiribati
  {name:"Tarawa",country:"Kiribati",lat:1.4333,lng:173.0000},

  // Tuvalu
  {name:"Funafuti",country:"Tuvalu",lat:-8.5167,lng:179.2167},

  // Nauru
  {name:"Yaren",country:"Nauru",lat:-0.5477,lng:166.9209},

  // Palau
  {name:"Koror",country:"Palau",lat:7.3400,lng:134.4800},

  // Marshall Islands
  {name:"Majuro",country:"Marshall Islands",lat:7.1167,lng:171.2000},

  // Micronesia
  {name:"Palikir",country:"Micronesia",lat:6.9248,lng:158.1611},

  // New Caledonia (France)
  {name:"Nouméa",country:"New Caledonia",lat:-22.2758,lng:166.4580},

  // French Polynesia (France)
  {name:"Papeete",country:"French Polynesia",lat:-17.5350,lng:-149.5696},

  // Guam (US Territory)
  {name:"Hagåtña",country:"Guam",lat:13.4763,lng:144.7502},

  // Northern Mariana Islands (US Territory)
  {name:"Saipan",country:"Northern Mariana Islands",lat:15.2123,lng:145.7545},

  // American Samoa (US Territory)
  {name:"Pago Pago",country:"American Samoa",lat:-14.2794,lng:-170.7006},

  // Hawaii (US - Geographically Oceania)
  {name:"Honolulu",country:"United States",lat:21.3069,lng:-157.8583},
  {name:"Hilo",country:"United States",lat:19.7241,lng:-155.0868},
  {name:"Kailua",country:"United States",lat:21.4022,lng:-157.7394},



   // ================= NORTH AMERICA =================
  // United States
  {name:"New York",country:"United States",lat:40.7128,lng:-74.0060},
  {name:"Los Angeles",country:"United States",lat:34.0522,lng:-118.2437},
  {name:"Chicago",country:"United States",lat:41.8781,lng:-87.6298},
  {name:"Houston",country:"United States",lat:29.7604,lng:-95.3698},
  {name:"Phoenix",country:"United States",lat:33.4484,lng:-112.0740},
  {name:"Philadelphia",country:"United States",lat:39.9526,lng:-75.1652},
  {name:"San Antonio",country:"United States",lat:29.4241,lng:-98.4936},
  {name:"San Diego",country:"United States",lat:32.7157,lng:-117.1611},
  {name:"Dallas",country:"United States",lat:32.7767,lng:-96.7970},
  {name:"San Jose",country:"United States",lat:37.3382,lng:-121.8863},
  {name:"Austin",country:"United States",lat:30.2672,lng:-97.7431},
  {name:"Jacksonville",country:"United States",lat:30.3322,lng:-81.6557},
  {name:"Fort Worth",country:"United States",lat:32.7555,lng:-97.3308},
  {name:"Columbus",country:"United States",lat:39.9612,lng:-82.9988},
  {name:"Indianapolis",country:"United States",lat:39.7684,lng:-86.1581},
  {name:"Charlotte",country:"United States",lat:35.2271,lng:-80.8431},
  {name:"San Francisco",country:"United States",lat:37.7749,lng:-122.4194},
  {name:"Seattle",country:"United States",lat:47.6062,lng:-122.3321},
  {name:"Denver",country:"United States",lat:39.7392,lng:-104.9903},
  {name:"Washington DC",country:"United States",lat:38.9072,lng:-77.0369},
  {name:"Nashville",country:"United States",lat:36.1627,lng:-86.7816},
  {name:"Oklahoma City",country:"United States",lat:35.4676,lng:-97.5164},
  {name:"El Paso",country:"United States",lat:31.7619,lng:-106.4850},
  {name:"Boston",country:"United States",lat:42.3601,lng:-71.0589},
  {name:"Portland",country:"United States",lat:45.5152,lng:-122.6784},
  {name:"Las Vegas",country:"United States",lat:36.1699,lng:-115.1398},
  {name:"Detroit",country:"United States",lat:42.3314,lng:-83.0458},
  {name:"Memphis",country:"United States",lat:35.1495,lng:-90.0490},
  {name:"Louisville",country:"United States",lat:38.2527,lng:-85.7585},
  {name:"Baltimore",country:"United States",lat:39.2904,lng:-76.6122},
  {name:"Milwaukee",country:"United States",lat:43.0389,lng:-87.9065},
  {name:"Albuquerque",country:"United States",lat:35.0844,lng:-106.6504},
  {name:"Tucson",country:"United States",lat:32.2226,lng:-110.9747},
  {name:"Fresno",country:"United States",lat:36.7378,lng:-119.7871},
  {name:"Sacramento",country:"United States",lat:38.5816,lng:-121.4944},
  {name:"Kansas City",country:"United States",lat:39.0997,lng:-94.5786},
  {name:"Mesa",country:"United States",lat:33.4152,lng:-111.8315},
  {name:"Atlanta",country:"United States",lat:33.7490,lng:-84.3880},
  {name:"Omaha",country:"United States",lat:41.2565,lng:-95.9345},
  {name:"Colorado Springs",country:"United States",lat:38.8339,lng:-104.8214},
  {name:"Raleigh",country:"United States",lat:35.7796,lng:-78.6382},
  {name:"Miami",country:"United States",lat:25.7617,lng:-80.1918},
  {name:"Virginia Beach",country:"United States",lat:36.8529,lng:-75.9780},
  {name:"Oakland",country:"United States",lat:37.8044,lng:-122.2712},
  {name:"Minneapolis",country:"United States",lat:44.9778,lng:-93.2650},
  {name:"Tulsa",country:"United States",lat:36.1540,lng:-95.9928},
  {name:"New Orleans",country:"United States",lat:29.9511,lng:-90.0715},
  {name:"Wichita",country:"United States",lat:37.6872,lng:-97.3301},
  {name:"Cleveland",country:"United States",lat:41.4993,lng:-81.6944},
  {name:"Tampa",country:"United States",lat:27.9506,lng:-82.4572},
  {name:"Bakersfield",country:"United States",lat:35.3733,lng:-119.0187},
  {name:"Aurora",country:"United States",lat:39.7294,lng:-104.8319},
  {name:"Anaheim",country:"United States",lat:33.8366,lng:-117.9143},
  {name:"Santa Ana",country:"United States",lat:33.7455,lng:-117.8677},
  {name:"Corpus Christi",country:"United States",lat:27.8006,lng:-97.3964},
  {name:"Riverside",country:"United States",lat:33.9806,lng:-117.3755},
  {name:"St. Louis",country:"United States",lat:38.6270,lng:-90.1994},
  {name:"Pittsburgh",country:"United States",lat:40.4406,lng:-79.9959},
  {name:"Cincinnati",country:"United States",lat:39.1031,lng:-84.5120},
  {name:"Anchorage",country:"United States",lat:61.2181,lng:-149.9003},
  {name:"Orlando",country:"United States",lat:28.5383,lng:-81.3792},
  {name:"Salt Lake City",country:"United States",lat:40.7608,lng:-111.8910},
  {name:"Reno",country:"United States",lat:39.5296,lng:-119.8138},
  {name:"Boise",country:"United States",lat:43.6150,lng:-116.2023},
  {name:"Des Moines",country:"United States",lat:41.5868,lng:-93.6250},
  {name:"Little Rock",country:"United States",lat:34.7465,lng:-92.2896},
  {name:"Cheyenne",country:"United States",lat:41.1400,lng:-104.8202},
  {name:"Fargo",country:"United States",lat:46.8772,lng:-96.7898},

  // Canada
  {name:"Toronto",country:"Canada",lat:43.6510,lng:-79.3470},
  {name:"Montreal",country:"Canada",lat:45.5017,lng:-73.5673},
  {name:"Vancouver",country:"Canada",lat:49.2827,lng:-123.1207},
  {name:"Calgary",country:"Canada",lat:51.0447,lng:-114.0719},
  {name:"Edmonton",country:"Canada",lat:53.5461,lng:-113.4938},
  {name:"Ottawa",country:"Canada",lat:45.4215,lng:-75.6919},
  {name:"Winnipeg",country:"Canada",lat:49.8951,lng:-97.1384},
  {name:"Quebec City",country:"Canada",lat:46.8139,lng:-71.2080},
  {name:"Hamilton",country:"Canada",lat:43.2557,lng:-79.8711},
  {name:"Kitchener",country:"Canada",lat:43.4516,lng:-80.4925},
  {name:"London",country:"Canada",lat:42.9849,lng:-81.2453},
  {name:"Victoria",country:"Canada",lat:48.4284,lng:-123.3656},
  {name:"Halifax",country:"Canada",lat:44.6488,lng:-63.5752},
  {name:"Oshawa",country:"Canada",lat:43.8971,lng:-78.8658},
  {name:"Windsor",country:"Canada",lat:42.3149,lng:-83.0364},
  {name:"Saskatoon",country:"Canada",lat:52.1332,lng:-106.6700},
  {name:"Regina",country:"Canada",lat:50.4452,lng:-104.6189},
  {name:"St. John's",country:"Canada",lat:47.5615,lng:-52.7126},
  {name:"Kelowna",country:"Canada",lat:49.8880,lng:-119.4960},
  {name:"Barrie",country:"Canada",lat:44.3894,lng:-79.6903},
  {name:"Sherbrooke",country:"Canada",lat:45.4010,lng:-71.8929},
  {name:"Guelph",country:"Canada",lat:43.5467,lng:-80.2482},
  {name:"Kingston",country:"Canada",lat:44.2312,lng:-76.4860},
  {name:"Moncton",country:"Canada",lat:46.0878,lng:-64.7782},
  {name:"Sudbury",country:"Canada",lat:46.4917,lng:-80.9930},
  {name:"Yellowknife",country:"Canada",lat:62.4540,lng:-114.3718},
  {name:"Whitehorse",country:"Canada",lat:60.7212,lng:-135.0568},
  {name:"Iqaluit",country:"Canada",lat:63.7467,lng:-68.5170},

  // Mexico
  {name:"Mexico City",country:"Mexico",lat:19.4326,lng:-99.1332},
  {name:"Ecatepec",country:"Mexico",lat:19.6018,lng:-99.0396},
  {name:"Guadalajara",country:"Mexico",lat:20.6597,lng:-103.3496},
  {name:"Puebla",country:"Mexico",lat:19.0414,lng:-98.2063},
  {name:"Ciudad Juarez",country:"Mexico",lat:31.7352,lng:-106.4869},
  {name:"Tijuana",country:"Mexico",lat:32.5149,lng:-117.0382},
  {name:"Leon",country:"Mexico",lat:21.1241,lng:-101.6820},
  {name:"Zapopan",country:"Mexico",lat:20.7225,lng:-103.3920},
  {name:"Monterrey",country:"Mexico",lat:25.6866,lng:-100.3161},
  {name:"Nezahualcoyotl",country:"Mexico",lat:19.4006,lng:-98.9912},
  {name:"Chihuahua",country:"Mexico",lat:28.6329,lng:-106.0691},
  {name:"Merida",country:"Mexico",lat:20.9674,lng:-89.6237},
  {name:"San Luis Potosi",country:"Mexico",lat:22.1565,lng:-100.9855},
  {name:"Aguascalientes",country:"Mexico",lat:21.8798,lng:-102.2960},
  {name:"Hermosillo",country:"Mexico",lat:29.0892,lng:-110.9613},
  {name:"Saltillo",country:"Mexico",lat:25.4216,lng:-100.9995},
  {name:"Mexicali",country:"Mexico",lat:32.6245,lng:-115.4523},
  {name:"Culiacan",country:"Mexico",lat:24.8016,lng:-107.3934},
  {name:"Acapulco",country:"Mexico",lat:16.8531,lng:-99.8237},
  {name:"Cancun",country:"Mexico",lat:21.1619,lng:-86.8515},
  {name:"Queretaro",country:"Mexico",lat:20.5881,lng:-100.3899},
  {name:"Torreon",country:"Mexico",lat:25.5428,lng:-103.4068},
  {name:"Morelia",country:"Mexico",lat:19.7060,lng:-101.1950},
  {name:"Reynosa",country:"Mexico",lat:26.0806,lng:-98.2883},
  {name:"Tuxtla Gutierrez",country:"Mexico",lat:16.7569,lng:-93.1292},
  {name:"Durango",country:"Mexico",lat:24.0277,lng:-104.6532},
  {name:"Toluca",country:"Mexico",lat:19.2826,lng:-99.6557},
  {name:"Veracruz",country:"Mexico",lat:19.1738,lng:-96.1342},
  {name:"Oaxaca",country:"Mexico",lat:17.0732,lng:-96.7266},

  // ================= CENTRAL AMERICA =================
  // Guatemala
  {name:"Guatemala City",country:"Guatemala",lat:14.6349,lng:-90.5069},
  {name:"Mixco",country:"Guatemala",lat:14.6333,lng:-90.6000},
  {name:"Quetzaltenango",country:"Guatemala",lat:14.8347,lng:-91.5181},
  
  // Belize
  {name:"Belmopan",country:"Belize",lat:17.2510,lng:-88.7590},
  {name:"Belize City",country:"Belize",lat:17.5046,lng:-88.1962},
  
  // El Salvador
  {name:"San Salvador",country:"El Salvador",lat:13.6929,lng:-89.2182},
  {name:"Soyapango",country:"El Salvador",lat:13.7167,lng:-89.1500},
  {name:"Santa Ana",country:"El Salvador",lat:13.9942,lng:-89.5597},
  
  // Honduras
  {name:"Tegucigalpa",country:"Honduras",lat:14.0818,lng:-87.2068},
  {name:"San Pedro Sula",country:"Honduras",lat:15.5000,lng:-88.0333},
  {name:"La Ceiba",country:"Honduras",lat:15.7589,lng:-86.7892},
  
  // Nicaragua
  {name:"Managua",country:"Nicaragua",lat:12.1150,lng:-86.2362},
  {name:"León",country:"Nicaragua",lat:12.4379,lng:-86.8780},
  {name:"Granada",country:"Nicaragua",lat:11.9300,lng:-85.9560},
  
  // Costa Rica
  {name:"San José",country:"Costa Rica",lat:9.9281,lng:-84.0907},
  {name:"Alajuela",country:"Costa Rica",lat:10.0163,lng:-84.2116},
  {name:"Cartago",country:"Costa Rica",lat:9.8667,lng:-83.9167},
  
  // Panama
  {name:"Panama City",country:"Panama",lat:8.9936,lng:-79.5197},
  {name:"San Miguelito",country:"Panama",lat:9.0333,lng:-79.5000},
  {name:"David",country:"Panama",lat:8.4273,lng:-82.4308},

  // ================= CARIBBEAN =================
  // Cuba
  {name:"Havana",country:"Cuba",lat:23.1136,lng:-82.3666},
  {name:"Santiago de Cuba",country:"Cuba",lat:20.0208,lng:-75.8267},
  {name:"Camagüey",country:"Cuba",lat:21.3838,lng:-77.9175},
  
  // Jamaica
  {name:"Kingston",country:"Jamaica",lat:17.9970,lng:-76.7936},
  {name:"Montego Bay",country:"Jamaica",lat:18.4714,lng:-77.9229},
  
  // Haiti
  {name:"Port-au-Prince",country:"Haiti",lat:18.5432,lng:-72.3395},
  {name:"Cap-Haïtien",country:"Haiti",lat:19.7596,lng:-72.1981},
  
  // Dominican Republic
  {name:"Santo Domingo",country:"Dominican Republic",lat:18.4861,lng:-69.9312},
  {name:"Santiago de los Caballeros",country:"Dominican Republic",lat:19.4517,lng:-70.6970},
  {name:"Punta Cana",country:"Dominican Republic",lat:18.5820,lng:-68.4055},
  
  // Puerto Rico (US Territory)
  {name:"San Juan",country:"Puerto Rico",lat:18.4655,lng:-66.1057},
  {name:"Ponce",country:"Puerto Rico",lat:18.0111,lng:-66.6141},
  
  // Bahamas
  {name:"Nassau",country:"Bahamas",lat:25.0343,lng:-77.3963},
  {name:"Freeport",country:"Bahamas",lat:26.5333,lng:-78.6942},
  
  // Trinidad and Tobago
  {name:"Port of Spain",country:"Trinidad and Tobago",lat:10.6549,lng:-61.5019},
  {name:"San Fernando",country:"Trinidad and Tobago",lat:10.2833,lng:-61.4667},
  
  // Barbados
  {name:"Bridgetown",country:"Barbados",lat:13.1132,lng:-59.5988},
  
  // Other Island Nations/Territories
  {name:"Castries",country:"Saint Lucia",lat:14.0101,lng:-60.9875},
  {name:"St. John's",country:"Antigua and Barbuda",lat:17.1221,lng:-61.8427},
  {name:"Willemstad",country:"Curaçao",lat:12.1166,lng:-68.9333},
  {name:"Oranjestad",country:"Aruba",lat:12.5186,lng:-70.0358},

  // ================= SOUTH AMERICA =================
  // Brazil
  {name:"São Paulo",country:"Brazil",lat:-23.5505,lng:-46.6333},
  {name:"Rio de Janeiro",country:"Brazil",lat:-22.9068,lng:-43.1729},
  {name:"Brasília",country:"Brazil",lat:-15.7942,lng:-47.8825},
  {name:"Salvador",country:"Brazil",lat:-12.9714,lng:-38.5014},
  {name:"Fortaleza",country:"Brazil",lat:-3.7172,lng:-38.5433},
  {name:"Belo Horizonte",country:"Brazil",lat:-19.9208,lng:-43.9378},
  {name:"Manaus",country:"Brazil",lat:-3.1190,lng:-60.0217},
  {name:"Curitiba",country:"Brazil",lat:-25.4284,lng:-49.2733},
  {name:"Recife",country:"Brazil",lat:-8.0476,lng:-34.8770},
  {name:"Goiânia",country:"Brazil",lat:-16.6869,lng:-49.2648},
  {name:"Belém",country:"Brazil",lat:-1.4558,lng:-48.5044},
  {name:"Porto Alegre",country:"Brazil",lat:-30.0346,lng:-51.2177},
  {name:"Guarulhos",country:"Brazil",lat:-23.4628,lng:-46.5333},
  {name:"Campinas",country:"Brazil",lat:-22.9099,lng:-47.0626},
  {name:"São Luís",country:"Brazil",lat:-2.5297,lng:-44.3028},
  {name:"Maceió",country:"Brazil",lat:-9.6662,lng:-35.7351},
  {name:"Campo Grande",country:"Brazil",lat:-20.4697,lng:-54.6201},
  {name:"Natal",country:"Brazil",lat:-5.7945,lng:-35.2110},
  {name:"Teresina",country:"Brazil",lat:-5.0892,lng:-42.8016},
  {name:"Florianópolis",country:"Brazil",lat:-27.5954,lng:-48.5480},
  {name:"Vitória",country:"Brazil",lat:-20.3155,lng:-40.3128},
  {name:"Cuiabá",country:"Brazil",lat:-15.6014,lng:-56.0979},
  {name:"Aracaju",country:"Brazil",lat:-10.9472,lng:-37.0731},
  {name:"João Pessoa",country:"Brazil",lat:-7.1153,lng:-34.8610},
  {name:"Porto Velho",country:"Brazil",lat:-8.7612,lng:-63.9039},

  // Argentina
  {name:"Buenos Aires",country:"Argentina",lat:-34.6037,lng:-58.3816},
  {name:"Córdoba",country:"Argentina",lat:-31.4201,lng:-64.1888},
  {name:"Rosario",country:"Argentina",lat:-32.9468,lng:-60.6393},
  {name:"Mendoza",country:"Argentina",lat:-32.8908,lng:-68.8272},
  {name:"Tucumán",country:"Argentina",lat:-26.8241,lng:-65.2226},
  {name:"La Plata",country:"Argentina",lat:-34.9205,lng:-57.9536},
  {name:"Mar del Plata",country:"Argentina",lat:-38.0055,lng:-57.5426},
  {name:"Salta",country:"Argentina",lat:-24.7821,lng:-65.4232},
  {name:"Santa Fe",country:"Argentina",lat:-31.6333,lng:-60.7000},
  {name:"San Juan",country:"Argentina",lat:-31.5375,lng:-68.5364},
  {name:"Resistencia",country:"Argentina",lat:-27.4606,lng:-58.9839},
  {name:"Neuquén",country:"Argentina",lat:-38.9516,lng:-68.0591},
  {name:"Corrientes",country:"Argentina",lat:-27.4692,lng:-58.8306},
  {name:"Bahía Blanca",country:"Argentina",lat:-38.7183,lng:-62.2663},
  {name:"Ushuaia",country:"Argentina",lat:-54.8019,lng:-68.3030},

  // Colombia
  {name:"Bogotá",country:"Colombia",lat:4.7110,lng:-74.0721},
  {name:"Medellín",country:"Colombia",lat:6.2518,lng:-75.5636},
  {name:"Cali",country:"Colombia",lat:3.4516,lng:-76.5320},
  {name:"Barranquilla",country:"Colombia",lat:10.9639,lng:-74.7964},
  {name:"Cartagena",country:"Colombia",lat:10.3910,lng:-75.4794},
  {name:"Cúcuta",country:"Colombia",lat:7.8939,lng:-72.5078},
  {name:"Bucaramanga",country:"Colombia",lat:7.1193,lng:-73.1227},
  {name:"Pereira",country:"Colombia",lat:4.8133,lng:-75.6961},
  {name:"Santa Marta",country:"Colombia",lat:11.2408,lng:-74.1990},
  {name:"Ibagué",country:"Colombia",lat:4.4389,lng:-75.2322},
  {name:"Pasto",country:"Colombia",lat:1.2136,lng:-77.2811},
  {name:"Manizales",country:"Colombia",lat:5.0689,lng:-75.5174},
  {name:"Villavicencio",country:"Colombia",lat:4.1420,lng:-73.6266},
  {name:"Valledupar",country:"Colombia",lat:10.4631,lng:-73.2532},
  {name:"Montería",country:"Colombia",lat:8.7480,lng:-75.8814},

  // Peru
  {name:"Lima",country:"Peru",lat:-12.0464,lng:-77.0428},
  {name:"Arequipa",country:"Peru",lat:-16.4090,lng:-71.5375},
  {name:"Trujillo",country:"Peru",lat:-8.1091,lng:-79.0215},
  {name:"Chiclayo",country:"Peru",lat:-6.7714,lng:-79.8409},
  {name:"Piura",country:"Peru",lat:-5.1945,lng:-80.6328},
  {name:"Iquitos",country:"Peru",lat:-3.7491,lng:-73.2538},
  {name:"Cusco",country:"Peru",lat:-13.5226,lng:-71.9675},
  {name:"Chimbote",country:"Peru",lat:-9.0853,lng:-78.5783},
  {name:"Huancayo",country:"Peru",lat:-12.0651,lng:-75.2049},
  {name:"Tacna",country:"Peru",lat:-18.0146,lng:-70.2536},

  // Chile
  {name:"Santiago",country:"Chile",lat:-33.4489,lng:-70.6693},
  {name:"Antofagasta",country:"Chile",lat:-23.6500,lng:-70.4000},
  {name:"Viña del Mar",country:"Chile",lat:-33.0245,lng:-71.5518},
  {name:"Valparaíso",country:"Chile",lat:-33.0472,lng:-71.6127},
  {name:"Concepción",country:"Chile",lat:-36.8201,lng:-73.0444},
  {name:"Temuco",country:"Chile",lat:-38.7397,lng:-72.5901},
  {name:"Iquique",country:"Chile",lat:-20.2133,lng:-70.1503},
  {name:"Rancagua",country:"Chile",lat:-34.1708,lng:-70.7444},
  {name:"Puerto Montt",country:"Chile",lat:-41.4693,lng:-72.9424},
  {name:"Punta Arenas",country:"Chile",lat:-53.1500,lng:-70.9167},

  // Venezuela
  {name:"Caracas",country:"Venezuela",lat:10.4806,lng:-66.9036},
  {name:"Maracaibo",country:"Venezuela",lat:10.6427,lng:-71.6125},
  {name:"Valencia",country:"Venezuela",lat:10.1620,lng:-68.0077},
  {name:"Barquisimeto",country:"Venezuela",lat:10.0678,lng:-69.3472},
  {name:"Maracay",country:"Venezuela",lat:10.2469,lng:-67.5958},
  {name:"Ciudad Guayana",country:"Venezuela",lat:8.3653,lng:-62.6469},
  {name:"Barcelona",country:"Venezuela",lat:10.1363,lng:-64.6862},
  {name:"Maturín",country:"Venezuela",lat:9.7457,lng:-63.1832},
  {name:"San Cristóbal",country:"Venezuela",lat:7.7667,lng:-72.2333},
  {name:"Mérida",country:"Venezuela",lat:8.5952,lng:-71.1388},

  // Ecuador
  {name:"Guayaquil",country:"Ecuador",lat:-2.1962,lng:-79.8862},
  {name:"Quito",country:"Ecuador",lat:-0.1807,lng:-78.4678},
  {name:"Cuenca",country:"Ecuador",lat:-2.9001,lng:-79.0059},
  {name:"Santo Domingo",country:"Ecuador",lat:-0.2530,lng:-79.1754},
  {name:"Machala",country:"Ecuador",lat:-3.2581,lng:-79.9554},
  {name:"Manta",country:"Ecuador",lat:-0.9621,lng:-80.7127},
  {name:"Loja",country:"Ecuador",lat:-3.9931,lng:-79.2042},

  // Bolivia
  {name:"Santa Cruz de la Sierra",country:"Bolivia",lat:-17.7833,lng:-63.1821},
  {name:"El Alto",country:"Bolivia",lat:-16.5000,lng:-68.2000},
  {name:"La Paz",country:"Bolivia",lat:-16.5000,lng:-68.1500},
  {name:"Cochabamba",country:"Bolivia",lat:-17.3895,lng:-66.1568},
  {name:"Oruro",country:"Bolivia",lat:-17.9667,lng:-67.1167},
  {name:"Sucre",country:"Bolivia",lat:-19.0333,lng:-65.2627},

  // Paraguay
  {name:"Asunción",country:"Paraguay",lat:-25.2637,lng:-57.5759},
  {name:"Ciudad del Este",country:"Paraguay",lat:-25.5097,lng:-54.6111},
  {name:"San Lorenzo",country:"Paraguay",lat:-25.3333,lng:-57.5333},
  {name:"Luque",country:"Paraguay",lat:-25.2667,lng:-57.4833},

  // Uruguay
  {name:"Montevideo",country:"Uruguay",lat:-34.9011,lng:-56.1645},
  {name:"Salto",country:"Uruguay",lat:-31.3833,lng:-57.9667},
  {name:"Ciudad de la Costa",country:"Uruguay",lat:-34.8167,lng:-55.9500},
  {name:"Paysandú",country:"Uruguay",lat:-32.3167,lng:-58.0833},

  // Guyanas
  {name:"Georgetown",country:"Guyana",lat:6.8013,lng:-58.1551},
  {name:"Paramaribo",country:"Suriname",lat:5.8520,lng:-55.2038},
  {name:"Cayenne",country:"French Guiana",lat:4.9224,lng:-52.3258},

   // ================= AFRICA =================
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
