/* =====================================================================
   CITIES  –  curated list used for search and markers
   Europe - All countries and major cities
   ===================================================================== */

const CITIES = [
  // Albania
  {name:"Tirana",country:"Albania",lat:41.3275,lng:19.8189},
  {name:"Durrës",country:"Albania",lat:41.3246,lng:19.4558},
  {name:"Berat",country:"Albania",lat:40.7058,lng:19.9522},
  // Andorra
  {name:"Andorra la Vella",country:"Andorra",lat:42.5063,lng:1.5218},
  // Armenia
  {name:"Yerevan",country:"Armenia",lat:40.1872,lng:44.5152},
  // Austria
  {name:"Vienna",country:"Austria",lat:48.2082,lng:16.3738},
  {name:"Salzburg",country:"Austria",lat:47.8095,lng:13.0550},
  {name:"Innsbruck",country:"Austria",lat:47.2692,lng:11.4041},
  {name:"Graz",country:"Austria",lat:47.0707,lng:15.4395},
  // Azerbaijan
  {name:"Baku",country:"Azerbaijan",lat:40.4093,lng:49.8671},
  // Belarus
  {name:"Minsk",country:"Belarus",lat:53.9045,lng:27.5615},
  {name:"Brest",country:"Belarus",lat:52.0976,lng:23.7341},
  // Belgium
  {name:"Brussels",country:"Belgium",lat:50.8503,lng:4.3517},
  {name:"Antwerp",country:"Belgium",lat:51.2194,lng:4.4025},
  {name:"Bruges",country:"Belgium",lat:51.2093,lng:3.2247},
  {name:"Ghent",country:"Belgium",lat:51.0543,lng:3.7174},
  // Bosnia and Herzegovina
  {name:"Sarajevo",country:"Bosnia and Herzegovina",lat:43.8563,lng:18.4131},
  {name:"Mostar",country:"Bosnia and Herzegovina",lat:43.3438,lng:17.8078},
  {name:"Banja Luka",country:"Bosnia and Herzegovina",lat:44.7722,lng:17.1910},
  // Bulgaria
  {name:"Sofia",country:"Bulgaria",lat:42.6977,lng:23.3219},
  {name:"Plovdiv",country:"Bulgaria",lat:42.1354,lng:24.7453},
  {name:"Varna",country:"Bulgaria",lat:43.2141,lng:27.9147},
  // Croatia
  {name:"Zagreb",country:"Croatia",lat:45.8150,lng:15.9819},
  {name:"Dubrovnik",country:"Croatia",lat:42.6507,lng:18.0944},
  {name:"Split",country:"Croatia",lat:43.5081,lng:16.4402},
  {name:"Zadar",country:"Croatia",lat:44.1194,lng:15.2314},
  // Cyprus
  {name:"Nicosia",country:"Cyprus",lat:35.1856,lng:33.3823},
  {name:"Limassol",country:"Cyprus",lat:34.7071,lng:33.0226},
  {name:"Paphos",country:"Cyprus",lat:34.7720,lng:32.4297},
  // Czech Republic
  {name:"Prague",country:"Czech Republic",lat:50.0755,lng:14.4378},
  {name:"Brno",country:"Czech Republic",lat:49.1951,lng:16.6068},
  {name:"Ostrava",country:"Czech Republic",lat:49.8209,lng:18.2625},
  // Denmark
  {name:"Copenhagen",country:"Denmark",lat:55.6761,lng:12.5683},
  {name:"Aarhus",country:"Denmark",lat:56.1629,lng:10.2039},
  // Estonia
  {name:"Tallinn",country:"Estonia",lat:59.4370,lng:24.7536},
  {name:"Tartu",country:"Estonia",lat:58.3780,lng:26.7290},
  // Finland
  {name:"Helsinki",country:"Finland",lat:60.1699,lng:24.9384},
  {name:"Tampere",country:"Finland",lat:61.4978,lng:23.7610},
  // France
  {name:"Paris",country:"France",lat:48.8566,lng:2.3522},
  {name:"Lyon",country:"France",lat:45.7640,lng:4.8357},
  {name:"Marseille",country:"France",lat:43.2965,lng:5.3698},
  {name:"Nice",country:"France",lat:43.7102,lng:7.2620},
  {name:"Bordeaux",country:"France",lat:44.8378,lng:-0.5792},
  // Georgia
  {name:"Tbilisi",country:"Georgia",lat:41.6938,lng:44.8015},
  {name:"Batumi",country:"Georgia",lat:41.6168,lng:41.6367},
  // Germany
  {name:"Berlin",country:"Germany",lat:52.5200,lng:13.4050},
  {name:"Munich",country:"Germany",lat:48.1351,lng:11.5820},
  {name:"Hamburg",country:"Germany",lat:53.5753,lng:10.0153},
  {name:"Frankfurt",country:"Germany",lat:50.1109,lng:8.6821},
  {name:"Cologne",country:"Germany",lat:50.9375,lng:6.9603},
  {name:"Stuttgart",country:"Germany",lat:48.7758,lng:9.1829},
  // Greece
  {name:"Athens",country:"Greece",lat:37.9838,lng:23.7275},
  {name:"Thessaloniki",country:"Greece",lat:40.6401,lng:22.9444},
  {name:"Patras",country:"Greece",lat:38.2466,lng:21.7346},
  {name:"Heraklion",country:"Greece",lat:35.3387,lng:25.1442},
  {name:"Larissa",country:"Greece",lat:39.6390,lng:22.4191},
  // Hungary
  {name:"Budapest",country:"Hungary",lat:47.4979,lng:19.0402},
  {name:"Debrecen",country:"Hungary",lat:47.5316,lng:21.6273},
  // Iceland
  {name:"Reykjavik",country:"Iceland",lat:64.1466,lng:-21.9426},
  // Ireland
  {name:"Dublin",country:"Ireland",lat:53.3498,lng:-6.2603},
  {name:"Cork",country:"Ireland",lat:51.8985,lng:-8.4756},
  {name:"Galway",country:"Ireland",lat:53.2707,lng:-9.0568},
  // Italy
  {name:"Rome",country:"Italy",lat:41.9028,lng:12.4964},
  {name:"Milan",country:"Italy",lat:45.4642,lng:9.1900},
  {name:"Venice",country:"Italy",lat:45.4408,lng:12.3155},
  {name:"Florence",country:"Italy",lat:43.7696,lng:11.2558},
  {name:"Naples",country:"Italy",lat:40.8518,lng:14.2681},
  {name:"Turin",country:"Italy",lat:45.0703,lng:7.6869},
  {name:"Bologna",country:"Italy",lat:44.4949,lng:11.3426},
  // Kosovo
  {name:"Pristina",country:"Kosovo",lat:42.6629,lng:21.1655},
  // Latvia
  {name:"Riga",country:"Latvia",lat:56.9496,lng:24.1052},
  {name:"Jurmala",country:"Latvia",lat:56.9680,lng:23.7704},
  // Liechtenstein
  {name:"Vaduz",country:"Liechtenstein",lat:47.1410,lng:9.5209},
  // Lithuania
  {name:"Vilnius",country:"Lithuania",lat:54.6872,lng:25.2797},
  {name:"Kaunas",country:"Lithuania",lat:54.8985,lng:23.9036},
  // Luxembourg
  {name:"Luxembourg City",country:"Luxembourg",lat:49.6116,lng:6.1319},
  // Malta
  {name:"Valletta",country:"Malta",lat:35.8997,lng:14.5147},
  {name:"Sliema",country:"Malta",lat:35.9125,lng:14.5019},
  {name:"St Julian's",country:"Malta",lat:35.9184,lng:14.4899},
  {name:"Mdina",country:"Malta",lat:35.8869,lng:14.4025},
  {name:"Rabat",country:"Malta",lat:35.8815,lng:14.3987},
  {name:"Victoria",country:"Malta",lat:36.0431,lng:14.2398},
  {name:"Mellieha",country:"Malta",lat:35.9564,lng:14.3622},
  {name:"Marsaxlokk",country:"Malta",lat:35.8419,lng:14.5446},
  // Moldova
  {name:"Chisinau",country:"Moldova",lat:47.0105,lng:28.8638},
  // Monaco
  {name:"Monaco",country:"Monaco",lat:43.7384,lng:7.4246},
  // Montenegro
  {name:"Podgorica",country:"Montenegro",lat:42.4304,lng:19.2594},
  {name:"Kotor",country:"Montenegro",lat:42.4247,lng:18.7712},
  // Netherlands
  {name:"Amsterdam",country:"Netherlands",lat:52.3676,lng:4.9041},
  {name:"Rotterdam",country:"Netherlands",lat:51.9244,lng:4.4777},
  {name:"The Hague",country:"Netherlands",lat:52.0705,lng:4.3007},
  {name:"Utrecht",country:"Netherlands",lat:52.0907,lng:5.1214},
  // North Macedonia
  {name:"Skopje",country:"North Macedonia",lat:41.9973,lng:21.4280},
  {name:"Ohrid",country:"North Macedonia",lat:41.1231,lng:20.8016},
  // Norway
  {name:"Oslo",country:"Norway",lat:59.9139,lng:10.7522},
  {name:"Bergen",country:"Norway",lat:60.3913,lng:5.3221},
  // Poland
  {name:"Warsaw",country:"Poland",lat:52.2297,lng:21.0122},
  {name:"Krakow",country:"Poland",lat:50.0647,lng:19.9450},
  {name:"Gdansk",country:"Poland",lat:54.3520,lng:18.6466},
  {name:"Wroclaw",country:"Poland",lat:51.1079,lng:17.0385},
  // Portugal
  {name:"Lisbon",country:"Portugal",lat:38.7169,lng:-9.1395},
  {name:"Porto",country:"Portugal",lat:41.1579,lng:-8.6291},
  {name:"Faro",country:"Portugal",lat:37.0194,lng:-7.9304},
  // Romania
  {name:"Bucharest",country:"Romania",lat:44.4268,lng:26.1025},
  {name:"Cluj-Napoca",country:"Romania",lat:46.7712,lng:23.6236},
  {name:"Brasov",country:"Romania",lat:45.6427,lng:25.5887},
  {name:"Timisoara",country:"Romania",lat:45.7489,lng:21.2087},
  // Russia (European Part)
  {name:"Moscow",country:"Russia",lat:55.7558,lng:37.6173},
  {name:"Saint Petersburg",country:"Russia",lat:59.9311,lng:30.3609},
  {name:"Kazan",country:"Russia",lat:55.7963,lng:49.1088},
  // San Marino
  {name:"San Marino",country:"San Marino",lat:43.9424,lng:12.4578},
  // Serbia
  {name:"Belgrade",country:"Serbia",lat:44.7866,lng:20.4489},
  {name:"Novi Sad",country:"Serbia",lat:45.2671,lng:19.8335},
  // Slovakia
  {name:"Bratislava",country:"Slovakia",lat:48.1486,lng:17.1077},
  {name:"Kosice",country:"Slovakia",lat:48.7164,lng:21.2611},
  // Slovenia
  {name:"Ljubljana",country:"Slovenia",lat:46.0569,lng:14.5058},
  {name:"Maribor",country:"Slovenia",lat:46.5547,lng:15.6459},
  // Spain
  {name:"Madrid",country:"Spain",lat:40.4168,lng:-3.7038},
  {name:"Barcelona",country:"Spain",lat:41.3851,lng:2.1734},
  {name:"Seville",country:"Spain",lat:37.3891,lng:-5.9845},
  {name:"Valencia",country:"Spain",lat:39.4699,lng:-0.3763},
  {name:"Malaga",country:"Spain",lat:36.7213,lng:-4.4214},
  {name:"Bilbao",country:"Spain",lat:43.2630,lng:-2.9350},
  {name:"Palma",country:"Spain",lat:39.5696,lng:2.6502},
  // Sweden
  {name:"Stockholm",country:"Sweden",lat:59.3293,lng:18.0686},
  {name:"Gothenburg",country:"Sweden",lat:57.7089,lng:11.9746},
  {name:"Malmo",country:"Sweden",lat:55.6049,lng:13.0038},
  // Switzerland
  {name:"Zurich",country:"Switzerland",lat:47.3769,lng:8.5417},
  {name:"Geneva",country:"Switzerland",lat:46.2044,lng:6.1432},
  {name:"Basel",country:"Switzerland",lat:47.5596,lng:7.5886},
  {name:"Lucerne",country:"Switzerland",lat:47.0502,lng:8.3093},
  {name:"Bern",country:"Switzerland",lat:46.9480,lng:7.4474},
  // Turkey (European Part & Major)
  {name:"Istanbul",country:"Turkey",lat:41.0082,lng:28.9784},
  {name:"Ankara",country:"Turkey",lat:39.9334,lng:32.8597},
  // Ukraine
  {name:"Kyiv",country:"Ukraine",lat:50.4501,lng:30.5234},
  {name:"Lviv",country:"Ukraine",lat:49.8397,lng:24.0297},
  {name:"Odesa",country:"Ukraine",lat:46.4825,lng:30.7233},
  // United Kingdom
  {name:"London",country:"United Kingdom",lat:51.5074,lng:-0.1278},
  {name:"Edinburgh",country:"United Kingdom",lat:55.9533,lng:-3.1883},
  {name:"Manchester",country:"United Kingdom",lat:53.4808,lng:-2.2426},
  {name:"Birmingham",country:"United Kingdom",lat:52.4862,lng:-1.8904},
  {name:"Glasgow",country:"United Kingdom",lat:55.8642,lng:-4.2518},
  {name:"Liverpool",country:"United Kingdom",lat:53.4084,lng:-2.9916},
  // Vatican City
  {name:"Vatican City",country:"Vatican City",lat:41.9029,lng:12.4534},
];
