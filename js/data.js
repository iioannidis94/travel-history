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
];
