/* =====================================================================
   CITIES – curated list used for search and markers
   Europe - Extended list with 250+ major cities
   ===================================================================== */

const CITIES = [
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
  {name:"Vatican City",country:"Vatican City",lat:41.9029,lng:12.4534}

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
  {name:"Taiz",country:"Yemen",lat:13.5795,lng:44.0205}

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
  {name:"Kailua",country:"United States",lat:21.4022,lng:-157.7394}
];
