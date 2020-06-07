const cities = [
  {
    city: "Aarhus",
    country: "Denmark",
  },
  {
    city: "Aberdeen",
    country: "United Kingdom",
  },
  {
    city: "Abidjan",
    country: "Côte d'Ivoire",
  },
  {
    city: "Abu Dhabi",
    country: "United Arab Emirates",
  },
  {
    city: "Abuja",
    country: "Nigeria",
  },
  {
    city: "Accra",
    country: "Ghana",
  },
  {
    city: "Adak",
    country: "United States",
  },
  {
    city: "Adamstown",
    country: "United States",
  },
  {
    city: "Adana",
    country: "Turkey",
  },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
  },
  {
    city: "Adelaide",
    country: "Australia",
  },
  {
    city: "Agartala",
    country: "India",
  },
  {
    city: "Ahmedabad",
    country: "India",
  },
  {
    city: "Albuquerque",
    country: "United States",
  },
  {
    city: "Alexandria",
    country: "Egypt",
  },
  {
    city: "Algiers",
    country: "Algeria",
  },
  {
    city: "Almaty",
    country: "Kazakhstan",
  },
  {
    city: "Alofi",
    country: "Niue",
  },
  {
    city: "Alor Star",
    country: "Malaysia",
  },
  {
    city: "Ambon",
    country: "Indonesia",
  },
  {
    city: "Amman",
    country: "Jordan",
  },
  {
    city: "Amritsar",
    country: "India",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    city: "Anadyr (town)",
    country: "",
  },
  {
    city: "Anchorage",
    country: "United States",
  },
  {
    city: "Andorra la Vella",
    country: "Andorra",
  },
  {
    city: "Angra do Heroísmo",
    country: "Portugal",
  },
  {
    city: "Ankara",
    country: "Turkey",
  },
  {
    city: "Antananarivo",
    country: "Madagascar",
  },
  {
    city: "Antofagasta",
    country: "Chile",
  },
  {
    city: "Antwerp",
    country: "Belgium",
  },
  {
    city: "Apia",
    country: "Samoa",
  },
  {
    city: "Arbil",
    country: "Iraq",
  },
  {
    city: "Arequipa",
    country: "Peru",
  },
  {
    city: "Ashgabat",
    country: "Turkmenistan",
  },
  {
    city: "Asmara",
    country: "Eritrea",
  },
  {
    city: "Assis",
    country: "Italy",
  },
  {
    city: "Astana",
    country: "Kazakhstan",
  },
  {
    city: "Asunción",
    country: "Paraguay",
  },
  {
    city: "Athens",
    country: "Greece",
  },
  {
    city: "Atlanta",
    country: "United States",
  },
  {
    city: "Auckland",
    country: "New Zealand",
  },
  {
    city: "Austin",
    country: "United States",
  },
  {
    city: "Avarua",
    country: "Cook Islands",
  },
  {
    city: "Baghdad",
    country: "Iraq",
  },
  {
    city: "Bahía Blanca",
    country: "Argentina",
  },
  {
    city: "Baku",
    country: "Azerbaijan",
  },
  {
    city: "Balikpapan",
    country: "Indonesia",
  },
  {
    city: "Baltimore",
    country: "United States",
  },
  {
    city: "Bamako",
    country: "Mali",
  },
  {
    city: "Banda Aceh",
    country: "Indonesia",
  },
  {
    city: "Bandar Seri Begawan",
    country: "Brunei",
  },
  {
    city: "Bandung",
    country: "Indonesia",
  },
  {
    city: "Bangalore",
    country: "India",
  },
  {
    city: "Bangkok",
    country: "Thailand",
  },
  {
    city: "Bangui",
    country: "Central African Republic",
  },
  {
    city: "Banjul",
    country: "The Gambia",
  },
  {
    city: "Barcelona",
    country: "Spain",
  },
  {
    city: "Barranquilla",
    country: "Colombia",
  },
  {
    city: "Basra",
    country: "Iraq",
  },
  {
    city: "Basse-Terre",
    country: "Guadeloupe",
  },
  {
    city: "Batticaloa",
    country: "Sri Lanka",
  },
  {
    city: "Beijing",
    country: "China",
  },
  {
    city: "Beirut",
    country: "Lebanon",
  },
  {
    city: "Belfast",
    country: "United Kingdom",
  },
  {
    city: "Belgrade",
    country: "Serbia",
  },
  {
    city: "Belize City",
    country: "Belize",
  },
  {
    city: "Belmopan",
    country: "Belize",
  },
  {
    city: "Belém",
    country: "Brazil",
  },
  {
    city: "Bergen",
    country: "Norway",
  },
  {
    city: "Berlin",
    country: "Germany",
  },
  {
    city: "Bern",
    country: "Brazil",
  },
  {
    city: "Bilbao",
    country: "Spain",
  },
  {
    city: "Birkirkara",
    country: "Malta",
  },
  {
    city: "Birmingham",
    country: "United Kingdom",
  },
  {
    city: "Bishkek",
    country: "Kyrgyzstan",
  },
  {
    city: "Bissau",
    country: "Guinea-Bissau",
  },
  {
    city: "Blantyre",
    country: "Malawi",
  },
  {
    city: "Bloemfontein",
    country: "South Africa",
  },
  {
    city: "Boa Vista",
    country: "Brazil",
  },
  {
    city: "Bogor",
    country: "Indonesia",
  },
  {
    city: "Bogotá",
    country: "Colombia",
  },
  {
    city: "Boston",
    country: "United States",
  },
  {
    city: "Brasília",
    country: "Brazil",
  },
  {
    city: "Bratislava",
    country: "Slovakia",
  },
  {
    city: "Bratsk",
    country: "Russia",
  },
  {
    city: "Brazzaville",
    country: "Republic of the Congo",
  },
  {
    city: "Bridgetown",
    country: "Barbados",
  },
  {
    city: "Brikama",
    country: "The Gambia",
  },
  {
    city: "Brisbane",
    country: "Australia",
  },
  {
    city: "Brussels",
    country: "Belgium",
  },
  {
    city: "Bucharest",
    country: "Romania",
  },
  {
    city: "Budapest",
    country: "Hungary",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
  },
  {
    city: "Buffalo",
    country: "United States",
  },
  {
    city: "Bujumbura",
    country: "Burundi",
  },
  {
    city: "Bulawayo",
    country: "Zimbabwe",
  },
  {
    city: "Bursa",
    country: "Turkey",
  },
  {
    city: "Busan",
    country: "South Korea",
  },
  {
    city: "Cairns",
    country: "Australia",
  },
  {
    city: "Cairo",
    country: "Egypt",
  },
  {
    city: "Calama",
    country: "Chile",
  },
  {
    city: "Calgary",
    country: "Canada",
  },
  {
    city: "Cali",
    country: "Colombia",
  },
  {
    city: "Campinas",
    country: "Brazil",
  },
  {
    city: "Campo Grande",
    country: "Brazil",
  },
  {
    city: "Canberra",
    country: "Australia",
  },
  {
    city: "Cannes",
    country: "France",
  },
  {
    city: "Cape Town",
    country: "South Africa",
  },
  {
    city: "Caracas",
    country: "Venezuela",
  },
  {
    city: "Cardiff",
    country: "United Kingdom",
  },
  {
    city: "Cartagena",
    country: "Colombia",
  },
  {
    city: "Casablanca",
    country: "Morocco",
  },
  {
    city: "Castries",
    country: "St. Lucia",
  },
  {
    city: "Cayenne",
    country: "French Guiana",
  },
  {
    city: "Cebu City",
    country: "Philippines",
  },
  {
    city: "Chaguanas",
    country: "Trinidad and Tobago",
  },
  {
    city: "Changchun",
    country: "China",
  },
  {
    city: "Charlotte",
    country: "United States",
  },
  {
    city: "Charlotte Amalie",
    country: "United States",
  },
  {
    city: "Charlottetown",
    country: "Canada",
  },
  {
    city: "Chengdu",
    country: "China",
  },
  {
    city: "Chennai",
    country: "India",
  },
  {
    city: "Chiang Mai",
    country: "Thailand",
  },
  {
    city: "Chicago",
    country: "United States",
  },
  {
    city: "Chihuahua",
    country: "Mexico",
  },
  {
    city: "Chittagong",
    country: "Bangladesh",
  },
  {
    city: "Chişinău",
    country: "Moldova",
  },
  {
    city: "Chongjin",
    country: "North Korea",
  },
  {
    city: "Chongqing",
    country: "China",
  },
  {
    city: "Christchurch",
    country: "New Zealand",
  },
  {
    city: "Chuí",
    country: "Brazil",
  },
  {
    city: "Cincinnati",
    country: "United States",
  },
  {
    city: "City of Halifax",
    country: "Canada",
  },
  {
    city: "City of San Marino",
    country: "San Marino",
  },
  {
    city: "Ciudad del Este",
    country: "Argentina",
  },
  {
    city: "Cleveland",
    country: "United States",
  },
  {
    city: "Cockburn Town",
    country: "Turks and Caicos Islands",
  },
  {
    city: "Cologne",
    country: "Germany",
  },
  {
    city: "Colombo",
    country: "Sri Lanka",
  },
  {
    city: "Columbus",
    country: "United States",
  },
  {
    city: "Conakry",
    country: "Guinea",
  },
  {
    city: "Concepción",
    country: "Chile",
  },
  {
    city: "Copenhagen",
    country: "Denmark",
  },
  {
    city: "Cork (city)",
    country: "Ireland",
  },
  {
    city: "Cotonou",
    country: "Benin",
  },
  {
    city: "Cuiabá",
    country: "Brazil",
  },
  {
    city: "Curitiba",
    country: "Brazil",
  },
  {
    city: "Cusco",
    country: "Peru",
  },
  {
    city: "Córdoba",
    country: "Argentina",
  },
  {
    city: "Da Nang",
    country: "Vietnam",
  },
  {
    city: "Daegu",
    country: "South Korea",
  },
  {
    city: "Dakar",
    country: "Senegal",
  },
  {
    city: "Dalian",
    country: "China",
  },
  {
    city: "Dallas",
    country: "United States",
  },
  {
    city: "Damascus",
    country: "Syria",
  },
  {
    city: "Dammam",
    country: "Saudi Arabia",
  },
  {
    city: "Dar es Salaam",
    country: "Tanzania",
  },
  {
    city: "Darwin",
    country: "Australia",
  },
  {
    city: "Davao City",
    country: "Philippines",
  },
  {
    city: "Dededo",
    country: "United States",
  },
  {
    city: "Denpasar",
    country: "Indonesia",
  },
  {
    city: "Denver",
    country: "United States",
  },
  {
    city: "Detroit",
    country: "United States",
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
  },
  {
    city: "Dibrugarh",
    country: "India",
  },
  {
    city: "Dili",
    country: "Mali",
  },
  {
    city: "Djibouti (city)",
    country: "Djibouti",
  },
  {
    city: "Dodoma",
    country: "Tanzania",
  },
  {
    city: "Doha",
    country: "Qatar",
  },
  {
    city: "Dongguan",
    country: "China",
  },
  {
    city: "Douala",
    country: "Cameroon",
  },
  {
    city: "Douglas",
    country: "Australia",
  },
  {
    city: "Dresden",
    country: "Germany",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
  },
  {
    city: "Dublin",
    country: "Ireland",
  },
  {
    city: "Dunedin",
    country: "New Zealand",
  },
  {
    city: "Durango",
    country: "Mexico",
  },
  {
    city: "Durban",
    country: "South Africa",
  },
  {
    city: "Dushanbe",
    country: "Tajikistan",
  },
  {
    city: "Düsseldorf",
    country: "Germany",
  },
  {
    city: "Edinburgh",
    country: "United Kingdom",
  },
  {
    city: "Edmonton",
    country: "Canada",
  },
  {
    city: "El Aaiún",
    country: "Western Sahara",
  },
  {
    city: "El Paso",
    country: "United States",
  },
  {
    city: "Enugu",
    country: "Nigeria",
  },
  {
    city: "Espoo",
    country: "Finland",
  },
  {
    city: "Fairbanks",
    country: "United States",
  },
  {
    city: "Faisalabad",
    country: "Pakistan",
  },
  {
    city: "Forked River",
    country: "United States",
  },
  {
    city: "Fort-de-France",
    country: "Martinique",
  },
  {
    city: "Fortaleza",
    country: "Brazil",
  },
  {
    city: "Francistown",
    country: "Botswana",
  },
  {
    city: "Frankfurt",
    country: "Germany",
  },
  {
    city: "Fredericton",
    country: "Canada",
  },
  {
    city: "Freetown",
    country: "Sierra Leone",
  },
  {
    city: "Fukuoka",
    country: "Japan",
  },
  {
    city: "Funafuti",
    country: "Tuvalu",
  },
  {
    city: "Gaborone",
    country: "Botswana",
  },
  {
    city: "Gangtok",
    country: "India",
  },
  {
    city: "Gaza",
    country: "Palestine",
  },
  {
    city: "Gaziantep",
    country: "Turkey",
  },
  {
    city: "Gdańsk",
    country: "Poland",
  },
  {
    city: "Geelong",
    country: "Australia",
  },
  {
    city: "Geneva",
    country: "Switzerland",
  },
  {
    city: "George Town",
    country: "Malaysia",
  },
  {
    city: "Gibraltar",
    country: "Gibraltar",
  },
  {
    city: "Glasgow",
    country: "United Kingdom",
  },
  {
    city: "Gold Coast",
    country: "Australia",
  },
  {
    city: "Gothenburg",
    country: "Sweden",
  },
  {
    city: "Graz",
    country: "Austria",
  },
  {
    city: "Greenwich",
    country: "United Kingdom",
  },
  {
    city: "Guadalajara",
    country: "Mexico",
  },
  {
    city: "Guangzhou",
    country: "China",
  },
  {
    city: "Guatemala City",
    country: "Guatemala",
  },
  {
    city: "Guayaquil",
    country: "Ecuador",
  },
  {
    city: "Guwahati",
    country: "India",
  },
  {
    city: "Hagåtña",
    country: "United States",
  },
  {
    city: "Hai Phong",
    country: "Vietnam",
  },
  {
    city: "Hamburg",
    country: "Germany",
  },
  {
    city: "Hamilton",
    country: "Bermuda",
  },
  {
    city: "Handan",
    country: "China",
  },
  {
    city: "Hanga Roa",
    country: "Chile",
  },
  {
    city: "Hangzhou",
    country: "China",
  },
  {
    city: "Hanoi",
    country: "Vietnam",
  },
  {
    city: "Hanover",
    country: "Germany",
  },
  {
    city: "Harare",
    country: "Zimbabwe",
  },
  {
    city: "Harbin",
    country: "China",
  },
  {
    city: "Hargeisa",
    country: "Somalia",
  },
  {
    city: "Hat Yai",
    country: "Thailand",
  },
  {
    city: "Havana",
    country: "Cuba",
  },
  {
    city: "Helsinki",
    country: "Finland",
  },
  {
    city: "Hilo",
    country: "United States",
  },
  {
    city: "Hiroshima",
    country: "Japan",
  },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
  },
  {
    city: "Hobart",
    country: "Australia",
  },
  {
    city: "Hong Kong",
    country: "Hong Kong",
  },
  {
    city: "Honiara",
    country: "Solomon Islands",
  },
  {
    city: "Honolulu",
    country: "United States",
  },
  {
    city: "Horta (Azores)",
    country: "Portugal",
  },
  {
    city: "Houston",
    country: "United States",
  },
  {
    city: "Huế",
    country: "Vietnam",
  },
  {
    city: "Hyderabad",
    country: "India",
  },
  {
    city: "Ibadan",
    country: "Nigeria",
  },
  {
    city: "Ibiza",
    country: "Spain",
  },
  {
    city: "Ilhéus",
    country: "Brazil",
  },
  {
    city: "Iloilo City",
    country: "Philippines",
  },
  {
    city: "Incheon",
    country: "South Korea",
  },
  {
    city: "Indianapolis",
    country: "United States",
  },
  {
    city: "Innsbruck",
    country: "Austria",
  },
  {
    city: "Invercargill",
    country: "New Zealand",
  },
  {
    city: "Ipoh",
    country: "Malaysia",
  },
  {
    city: "Iqaluit",
    country: "Canada",
  },
  {
    city: "Iquique",
    country: "Chile",
  },
  {
    city: "Iquitos",
    country: "Peru",
  },
  {
    city: "Islamabad",
    country: "Pakistan",
  },
  {
    city: "Istanbul",
    country: "Turkey",
  },
  {
    city: "Jacksonville",
    country: "United States",
  },
  {
    city: "Jaipur",
    country: "India",
  },
  {
    city: "Jakarta",
    country: "Indonesia",
  },
  {
    city: "Jamestown",
    country: "United States",
  },
  {
    city: "Jayapura",
    country: "Indonesia",
  },
  {
    city: "Jeddah",
    country: "Saudi Arabia",
  },
  {
    city: "Jersey City",
    country: "United States",
  },
  {
    city: "Jerusalem",
    country: "Israel",
  },
  {
    city: "Jinan",
    country: "China",
  },
  {
    city: "Johannesburg",
    country: "South Africa",
  },
  {
    city: "Johor Bahru",
    country: "Malaysia",
  },
  {
    city: "Juneau",
    country: "United States",
  },
  {
    city: "Kabul",
    country: "Afghanistan",
  },
  {
    city: "Kaesong",
    country: "North Korea",
  },
  {
    city: "Kaliningrad",
    country: "Russia",
  },
  {
    city: "Kandahar",
    country: "Afghanistan",
  },
  {
    city: "Kandy",
    country: "Sri Lanka",
  },
  {
    city: "Kano",
    country: "Nigeria",
  },
  {
    city: "Kanpur",
    country: "India",
  },
  {
    city: "Kansas City",
    country: "United States",
  },
  {
    city: "Kaohsiung",
    country: "Taiwan",
  },
  {
    city: "Karachi",
    country: "Pakistan",
  },
  {
    city: "Kathmandu",
    country: "Nepal",
  },
  {
    city: "Kawasaki",
    country: "Japan",
  },
  {
    city: "Kharkiv",
    country: "Ukraine",
  },
  {
    city: "Khartoum",
    country: "Sudan",
  },
  {
    city: "Kiev",
    country: "Ukraine",
  },
  {
    city: "Kigali",
    country: "Rwanda",
  },
  {
    city: "Kingston",
    country: "Jamaica",
  },
  {
    city: "Kingstown",
    country: "Saint Vincent and the Grenadines",
  },
  {
    city: "Kinshasa",
    country: "Democratic Republic of the Congo",
  },
  {
    city: "Kobe",
    country: "Japan",
  },
  {
    city: "Kolkata",
    country: "India",
  },
  {
    city: "Konya",
    country: "Turkey",
  },
  {
    city: "Koror",
    country: "Republic of Palau",
  },
  {
    city: "Kota Bharu",
    country: "Malaysia",
  },
  {
    city: "Kota Kinabalu",
    country: "Malaysia",
  },
  {
    city: "Koulikoro",
    country: "Mali",
  },
  {
    city: "Kraków",
    country: "Poland",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
  },
  {
    city: "Kuching",
    country: "Malaysia",
  },
  {
    city: "Kunming",
    country: "China",
  },
  {
    city: "Kuwait City",
    country: "Kuwait",
  },
  {
    city: "Kyoto",
    country: "Japan",
  },
  {
    city: "La Paz",
    country: "Bolivia",
  },
  {
    city: "La Serena",
    country: "Chile",
  },
  {
    city: "Labasa",
    country: "Fiji",
  },
  {
    city: "Lagos",
    country: "Nigeria",
  },
  {
    city: "Lahore",
    country: "Pakistan",
  },
  {
    city: "Lanzhou",
    country: "China",
  },
  {
    city: "Las Palmas de Gran Canaria",
    country: "Spain",
  },
  {
    city: "Las Vegas",
    country: "United States",
  },
  {
    city: "Leeds",
    country: "United Kingdom",
  },
  {
    city: "Leipzig",
    country: "Germany",
  },
  {
    city: "Lhasa",
    country: "China",
  },
  {
    city: "Libreville",
    country: "Gabon",
  },
  {
    city: "Lilongwe",
    country: "Malawi",
  },
  {
    city: "Lima",
    country: "Peru",
  },
  {
    city: "Linz",
    country: "Austria",
  },
  {
    city: "Lisbon",
    country: "Portugal",
  },
  {
    city: "Liverpool",
    country: "United Kingdom",
  },
  {
    city: "Livingstone",
    country: "Zambia",
  },
  {
    city: "Ljubljana",
    country: "Slovenia",
  },
  {
    city: "Lobamba",
    country: "Swaziland",
  },
  {
    city: "Lomé",
    country: "Togo",
  },
  {
    city: "London",
    country: "United Kingdom",
  },
  {
    city: "Longyearbyen",
    country: "Svalbard and Jan Mayen",
  },
  {
    city: "Los Angeles",
    country: "United States",
  },
  {
    city: "Louisville",
    country: "United States",
  },
  {
    city: "Luanda",
    country: "Angola",
  },
  {
    city: "Lubumbashi",
    country: "Democratic Republic of the Congo",
  },
  {
    city: "Lucknow",
    country: "India",
  },
  {
    city: "Ludhiana",
    country: "India",
  },
  {
    city: "Lusaka",
    country: "Zambia",
  },
  {
    city: "Luxembourg (city)",
    country: "Luxembourg",
  },
  {
    city: "Luxor",
    country: "Egypt",
  },
  {
    city: "Lviv",
    country: "Ukraine",
  },
  {
    city: "Lyon",
    country: "France",
  },
  {
    city: "Macapá",
    country: "Brazil",
  },
  {
    city: "Macau",
    country: "Macau",
  },
  {
    city: "Maceió",
    country: "Brazil",
  },
  {
    city: "Madrid",
    country: "Spain",
  },
  {
    city: "Magadan",
    country: "Russia",
  },
  {
    city: "Majuro",
    country: "Marshall Islands",
  },
  {
    city: "Makassar",
    country: "Indonesia",
  },
  {
    city: "Makati City",
    country: "Philippines",
  },
  {
    city: "Malabo",
    country: "Philippines",
  },
  {
    city: "Malacca Town",
    country: "Malaysia",
  },
  {
    city: "Malang",
    country: "Indonesia",
  },
  {
    city: "Malmö",
    country: "Sweden",
  },
  {
    city: "Malé",
    country: "Republic of Maldives",
  },
  {
    city: "Mamoudzou",
    country: "Mayotte",
  },
  {
    city: "Managua",
    country: "Nicaragua",
  },
  {
    city: "Manama",
    country: "Bahrain",
  },
  {
    city: "Manaus",
    country: "Brazil",
  },
  {
    city: "Manchester",
    country: "United Kingdom",
  },
  {
    city: "Mandurah",
    country: "Australia",
  },
  {
    city: "Manila",
    country: "Philippines",
  },
  {
    city: "Manzini",
    country: "Swaziland",
  },
  {
    city: "Maputo",
    country: "Mozambique",
  },
  {
    city: "Maracaibo",
    country: "Venezuela",
  },
  {
    city: "Marrakech",
    country: "Morocco",
  },
  {
    city: "Marseille",
    country: "France",
  },
  {
    city: "Maseru",
    country: "Lesotho",
  },
  {
    city: "Mashhad",
    country: "Iran",
  },
  {
    city: "Mata-Utu",
    country: "Wallis and Futuna",
  },
  {
    city: "Mbabane",
    country: "Swaziland",
  },
  {
    city: "Mecca",
    country: "Saudi Arabia",
  },
  {
    city: "Medan",
    country: "Indonesia",
  },
  {
    city: "Medellín",
    country: "Colombia",
  },
  {
    city: "Medina",
    country: "Saudi Arabia",
  },
  {
    city: "Melbourne",
    country: "Australia",
  },
  {
    city: "Melekeok",
    country: "Palau",
  },
  {
    city: "Memphis",
    country: "United States",
  },
  {
    city: "Mendoza",
    country: "Argentina",
  },
  {
    city: "Mersin",
    country: "Turkey",
  },
  {
    city: "Mexicali",
    country: "Mexico",
  },
  {
    city: "Mexico City",
    country: "Mexico",
  },
  {
    city: "Miami",
    country: "United States",
  },
  {
    city: "Milan",
    country: "Italy",
  },
  {
    city: "Milwaukee",
    country: "United States",
  },
  {
    city: "Minneapolis",
    country: "United States",
  },
  {
    city: "Minsk",
    country: "Belarus",
  },
  {
    city: "Miri",
    country: "Malaysia",
  },
  {
    city: "Mogadishu",
    country: "Somalia",
  },
  {
    city: "Monaco",
    country: "Monaco",
  },
  {
    city: "Monrovia",
    country: "Liberia",
  },
  {
    city: "Monterrey",
    country: "Mexico",
  },
  {
    city: "Montevideo",
    country: "Uruguay",
  },
  {
    city: "Montreal",
    country: "Canada",
  },
  {
    city: "Moroni",
    country: "Comoros",
  },
  {
    city: "Moscow",
    country: "Russia",
  },
  {
    city: "Multan",
    country: "Pakistan",
  },
  {
    city: "Mumbai",
    country: "India",
  },
  {
    city: "Munich",
    country: "Germany",
  },
  {
    city: "Murmansk",
    country: "Russia",
  },
  {
    city: "Muscat",
    country: "Oman",
  },
  {
    city: "Mwanza",
    country: "Tanzania",
  },
  {
    city: "Málaga",
    country: "Spain",
  },
  {
    city: "Mérida",
    country: "Mexico",
  },
  {
    city: "N'Djamena",
    country: "Chad",
  },
  {
    city: "Nagoya",
    country: "Japan",
  },
  {
    city: "Nagpur",
    country: "India",
  },
  {
    city: "Nairobi",
    country: "Kenya",
  },
  {
    city: "Nakhon Ratchasima",
    country: "Thailand",
  },
  {
    city: "Namangan",
    country: "Uzbekistan",
  },
  {
    city: "Nanjing",
    country: "China",
  },
  {
    city: "Nanning",
    country: "China",
  },
  {
    city: "Nantes",
    country: "France",
  },
  {
    city: "Naples",
    country: "Italy",
  },
  {
    city: "Nashville",
    country: "United States",
  },
  {
    city: "Nassau",
    country: "The Bahamas",
  },
  {
    city: "Naypyidaw",
    country: "",
  },
  {
    city: "Ndola",
    country: "Zambia",
  },
  {
    city: "New Delhi",
    country: "India",
  },
  {
    city: "New Orleans",
    country: "United States",
  },
  {
    city: "New York City",
    country: "United States",
  },
  {
    city: "Newcastle",
    country: "United Kingdom",
  },
  {
    city: "Niamey",
    country: "Niger",
  },
  {
    city: "Nice",
    country: "France",
  },
  {
    city: "Nicosia",
    country: "Cyprus",
  },
  {
    city: "Nizhny Novgorod",
    country: "Russia",
  },
  {
    city: "Norilsk",
    country: "Russia",
  },
  {
    city: "Nouakchott",
    country: "Mauritania",
  },
  {
    city: "Nouméa",
    country: "New Caledonia",
  },
  {
    city: "Novosibirsk",
    country: "Russia",
  },
  {
    city: "Nukulaelae",
    country: "",
  },
  {
    city: "Nukus",
    country: "Uzbekistan",
  },
  {
    city: "Nukuʻalofa",
    country: "Tonga",
  },
  {
    city: "Nuuk",
    country: "Greenland",
  },
  {
    city: "Odessa",
    country: "Ukraine",
  },
  {
    city: "Okinawa",
    country: "Japan",
  },
  {
    city: "Oklahoma City",
    country: "United States",
  },
  {
    city: "Omdurman",
    country: "Sudan",
  },
  {
    city: "Omsk",
    country: "Russia",
  },
  {
    city: "Oranjestad",
    country: "Aruba",
  },
  {
    city: "Osaka",
    country: "Japan",
  },
  {
    city: "Oslo",
    country: "Norway",
  },
  {
    city: "Ottawa",
    country: "Canada",
  },
  {
    city: "Ouagadougou",
    country: "Burkina Faso",
  },
  {
    city: "Padang",
    country: "Indonesia",
  },
  {
    city: "Pago Pago",
    country: "United States",
  },
  {
    city: "Palembang",
    country: "Indonesia",
  },
  {
    city: "Palikir",
    country: "Federated States of Micronesia",
  },
  {
    city: "Palma",
    country: "Spain",
  },
  {
    city: "Panama City",
    country: "Panama",
  },
  {
    city: "Papeete",
    country: "French Polynesia",
  },
  {
    city: "Paramaribo",
    country: "Suriname",
  },
  {
    city: "Paris",
    country: "France",
  },
  {
    city: "Patna",
    country: "India",
  },
  {
    city: "Pattaya",
    country: "Thailand",
  },
  {
    city: "Pekanbaru",
    country: "Indonesia",
  },
  {
    city: "Pelotas",
    country: "Brazil",
  },
  {
    city: "Perm",
    country: "Russia",
  },
  {
    city: "Perth",
    country: "Australia",
  },
  {
    city: "Peshawar",
    country: "Pakistan",
  },
  {
    city: "Petropavlovsk-Kamchatsky",
    country: "Russia",
  },
  {
    city: "Philadelphia",
    country: "United States",
  },
  {
    city: "Phnom Penh",
    country: "Cambodia",
  },
  {
    city: "Phoenix",
    country: "United States",
  },
  {
    city: "Phuket (city)",
    country: "Thailand",
  },
  {
    city: "Pittsburgh",
    country: "United States",
  },
  {
    city: "Podgorica",
    country: "Montenegro",
  },
  {
    city: "Ponta Delgada",
    country: "Portugal",
  },
  {
    city: "Pontianak",
    country: "Indonesia",
  },
  {
    city: "Port Blair",
    country: "India",
  },
  {
    city: "Port Elizabeth",
    country: "South Africa",
  },
  {
    city: "Port Hedland",
    country: "Australia",
  },
  {
    city: "Port Louis",
    country: "Mauritius",
  },
  {
    city: "Port Moresby",
    country: "Papua New Guinea",
  },
  {
    city: "Port Said",
    country: "Egypt",
  },
  {
    city: "Port Vila",
    country: "Vanuatu",
  },
  {
    city: "Port of Spain",
    country: "Trinidad and Tobago",
  },
  {
    city: "Port-au-Prince",
    country: "Haiti",
  },
  {
    city: "Portland",
    country: "United States",
  },
  {
    city: "Porto",
    country: "Brazil",
  },
  {
    city: "Porto Alegre",
    country: "Brazil",
  },
  {
    city: "Porto Velho",
    country: "Brazil",
  },
  {
    city: "Porto-Novo",
    country: "Benin",
  },
  {
    city: "Prague",
    country: "Czech Republic",
  },
  {
    city: "Praia",
    country: "Brazil",
  },
  {
    city: "Pretoria",
    country: "South Africa",
  },
  {
    city: "Pristina",
    country: "Kosovo",
  },
  {
    city: "Providence",
    country: "United States",
  },
  {
    city: "Puebla",
    country: "Mexico",
  },
  {
    city: "Puerto Williams",
    country: "Chile",
  },
  {
    city: "Pune",
    country: "India",
  },
  {
    city: "Punta Arenas",
    country: "Chile",
  },
  {
    city: "Pyongyang",
    country: "North Korea",
  },
  {
    city: "Qingdao",
    country: "China",
  },
  {
    city: "Quebec City",
    country: "Canada",
  },
  {
    city: "Quetzaltenango",
    country: "Guatemala",
  },
  {
    city: "Quezon City",
    country: "Philippines",
  },
  {
    city: "Quito",
    country: "Ecuador",
  },
  {
    city: "Rabat",
    country: "Morocco",
  },
  {
    city: "Rabi Island",
    country: "",
  },
  {
    city: "Raleigh",
    country: "United States",
  },
  {
    city: "Rawalpindi",
    country: "Pakistan",
  },
  {
    city: "Recife",
    country: "Brazil",
  },
  {
    city: "Regina",
    country: "Canada",
  },
  {
    city: "Reykjavík",
    country: "Iceland",
  },
  {
    city: "Riga",
    country: "Latvia",
  },
  {
    city: "Rio Branco",
    country: "Brazil",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    city: "Riverside",
    country: "United States",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
  },
  {
    city: "Road Town",
    country: "British Virgin Islands",
  },
  {
    city: "Rochester",
    country: "United States",
  },
  {
    city: "Rockhampton",
    country: "Australia",
  },
  {
    city: "Rome",
    country: "Italy",
  },
  {
    city: "Rosario",
    country: "Argentina",
  },
  {
    city: "Roseau",
    country: "Dominica",
  },
  {
    city: "Rotterdam",
    country: "Netherlands",
  },
  {
    city: "Sabha",
    country: "Libya",
  },
  {
    city: "Sacramento",
    country: "United States",
  },
  {
    city: "Saint John",
    country: "Grenada",
  },
  {
    city: "Saint Petersburg",
    country: "Russia",
  },
  {
    city: "Saint-Denis",
    country: "Réunion",
  },
  {
    city: "Saint-Pierre",
    country: "Réunion",
  },
  {
    city: "Saipan",
    country: "United States",
  },
  {
    city: "Salt Lake City",
    country: "United States",
  },
  {
    city: "Salzburg",
    country: "Austria",
  },
  {
    city: "Samara",
    country: "Russia",
  },
  {
    city: "San Antonio",
    country: "United States",
  },
  {
    city: "San Carlos de Bariloche",
    country: "Argentina",
  },
  {
    city: "San Diego",
    country: "United States",
  },
  {
    city: "San Fernando",
    country: "Trinidad and Tobago",
  },
  {
    city: "San Francisco",
    country: "United States",
  },
  {
    city: "San José",
    country: "Costa Rica",
  },
  {
    city: "San Juan",
    country: "Puerto Rico",
  },
  {
    city: "San Salvador",
    country: "El Salvador",
  },
  {
    city: "Sana'a",
    country: "Yemen",
  },
  {
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  {
    city: "Santa Cruz de la Sierra",
    country: "Bolivia",
  },
  {
    city: "Santiago",
    country: "Chile",
  },
  {
    city: "Santiago de Cuba",
    country: "Cuba",
  },
  {
    city: "Santo Domingo",
    country: "Dominican Republic",
  },
  {
    city: "Sapporo",
    country: "Japan",
  },
  {
    city: "Sarajevo",
    country: "Bosnia and Herzegovina",
  },
  {
    city: "Saskatoon",
    country: "Canada",
  },
  {
    city: "Seattle",
    country: "United States",
  },
  {
    city: "Semarang",
    country: "Indonesia",
  },
  {
    city: "Seoul",
    country: "South Korea",
  },
  {
    city: "Serekunda",
    country: "The Gambia",
  },
  {
    city: "Seville",
    country: "Spain",
  },
  {
    city: "Shanghai",
    country: "China",
  },
  {
    city: "Shenyang",
    country: "China",
  },
  {
    city: "Shenzhen",
    country: "China",
  },
  {
    city: "Shigatse",
    country: "China",
  },
  {
    city: "Shijiazhuang",
    country: "China",
  },
  {
    city: "Shillong",
    country: "India",
  },
  {
    city: "Siem Reap",
    country: "Cambodia",
  },
  {
    city: "Simferopol",
    country: "Ukraine",
  },
  {
    city: "Singapore",
    country: "Singapore",
  },
  {
    city: "Sitka",
    country: "United States",
  },
  {
    city: "Skopje",
    country: "Macedonia",
  },
  {
    city: "Sofia",
    country: "Bulgaria",
  },
  {
    city: "South Tarawa",
    country: "",
  },
  {
    city: "Split (city)",
    country: "Croatia",
  },
  {
    city: "Sri Jayawardenapura-Kotte",
    country: "Sri Lanka",
  },
  {
    city: "Srinagar",
    country: "India",
  },
  {
    city: "St. George's",
    country: "Grenada",
  },
  {
    city: "St. John's",
    country: "Canada",
  },
  {
    city: "St. Louis",
    country: "United States",
  },
  {
    city: "Stanley",
    country: "Hong Kong",
  },
  {
    city: "Stepanakert",
    country: "Azerbaijan",
  },
  {
    city: "Stockholm",
    country: "Sweden",
  },
  {
    city: "Strasbourg",
    country: "France",
  },
  {
    city: "Stuttgart",
    country: "Germany",
  },
  {
    city: "Sucre",
    country: "Bolivia",
  },
  {
    city: "Suez",
    country: "Egypt",
  },
  {
    city: "Sukhumi",
    country: "Georgia",
  },
  {
    city: "Surabaya",
    country: "Indonesia",
  },
  {
    city: "Surat",
    country: "India",
  },
  {
    city: "Surat Thani",
    country: "Thailand",
  },
  {
    city: "Suva",
    country: "Fiji",
  },
  {
    city: "Sydney",
    country: "Australia",
  },
  {
    city: "São José dos Campos",
    country: "Brazil",
  },
  {
    city: "São Paulo",
    country: "Brazil",
  },
  {
    city: "São Tomé",
    country: "Brazil",
  },
  {
    city: "Tabriz",
    country: "Iran",
  },
  {
    city: "Tagbilaran",
    country: "Philippines",
  },
  {
    city: "Taichung",
    country: "Taiwan",
  },
  {
    city: "Taipei",
    country: "Taiwan",
  },
  {
    city: "Taiyuan",
    country: "China",
  },
  {
    city: "Tallinn",
    country: "Estonia",
  },
  {
    city: "Tamale",
    country: "Ghana",
  },
  {
    city: "Tampa",
    country: "United States",
  },
  {
    city: "Tampere",
    country: "Finland",
  },
  {
    city: "Tartu",
    country: "Syria",
  },
  {
    city: "Tashkent",
    country: "Uzbekistan",
  },
  {
    city: "Tbilisi",
    country: "Georgia",
  },
  {
    city: "Tegucigalpa",
    country: "Honduras",
  },
  {
    city: "Tehran",
    country: "Iran",
  },
  {
    city: "Tel Aviv",
    country: "Israel",
  },
  {
    city: "The Hague",
    country: "Netherlands",
  },
  {
    city: "The Valley",
    country: "Anguilla",
  },
  {
    city: "Thessaloniki",
    country: "Greece",
  },
  {
    city: "Thimphu",
    country: "Bhutan",
  },
  {
    city: "Thiès",
    country: "Senegal",
  },
  {
    city: "Tianjin",
    country: "China",
  },
  {
    city: "Tijuana",
    country: "Mexico",
  },
  {
    city: "Timbuktu",
    country: "Mali",
  },
  {
    city: "Tirana",
    country: "Albania",
  },
  {
    city: "Tiraspol",
    country: "Moldova",
  },
  {
    city: "Tokyo",
    country: "Japan",
  },
  {
    city: "Toronto",
    country: "Canada",
  },
  {
    city: "Toulouse",
    country: "France",
  },
  {
    city: "Townsville",
    country: "Australia",
  },
  {
    city: "Tripoli",
    country: "Libya",
  },
  {
    city: "Tskhinvali",
    country: "Georgia",
  },
  {
    city: "Tucson",
    country: "United States",
  },
  {
    city: "Tunis",
    country: "Tunisia",
  },
  {
    city: "Turin",
    country: "Italy",
  },
  {
    city: "Tórshavn",
    country: "Faroe Islands",
  },
  {
    city: "Udon Thani",
    country: "Thailand",
  },
  {
    city: "Ulan Bator",
    country: "Mongolia",
  },
  {
    city: "Ushuaia",
    country: "Argentina",
  },
  {
    city: "Vaduz",
    country: "Liechtenstein",
  },
  {
    city: "Valdivia",
    country: "Chile",
  },
  {
    city: "Valencia",
    country: "Spain",
  },
  {
    city: "Valletta",
    country: "Malta",
  },
  {
    city: "Valparaíso",
    country: "Chile",
  },
  {
    city: "Vancouver",
    country: "Canada",
  },
  {
    city: "Vatican City",
    country: "",
  },
  {
    city: "Veracruz",
    country: "Mexico",
  },
  {
    city: "Vienna",
    country: "Austria",
  },
  {
    city: "Vientiane",
    country: "Laos",
  },
  {
    city: "Vilnius",
    country: "Lithuania",
  },
  {
    city: "Virginia Beach",
    country: "United States",
  },
  {
    city: "Vitória",
    country: "Brazil",
  },
  {
    city: "Vladivostok",
    country: "Russia",
  },
  {
    city: "Warsaw",
    country: "Poland",
  },
  {
    city: "Washington",
    country: "United States",
  },
  {
    city: "Wellington",
    country: "New Zealand",
  },
  {
    city: "Weno",
    country: "Federated States of Micronesia",
  },
  {
    city: "Whitehorse",
    country: "Canada",
  },
  {
    city: "Wichita",
    country: "United States",
  },
  {
    city: "Willemstad",
    country: "Netherlands Antilles",
  },
  {
    city: "Winnipeg",
    country: "Canada",
  },
  {
    city: "Wollongong",
    country: "Australia",
  },
  {
    city: "Wonsan",
    country: "North Korea",
  },
  {
    city: "Wuhan",
    country: "China",
  },
  {
    city: "Xi'an",
    country: "China",
  },
  {
    city: "Xining",
    country: "China",
  },
  {
    city: "Yakutsk",
    country: "Russia",
  },
  {
    city: "Yamoussoukro",
    country: "Côte d'Ivoire",
  },
  {
    city: "Yangon",
    country: "Myanmar",
  },
  {
    city: "Yaoundé",
    country: "Cameroon",
  },
  {
    city: "Yaren District",
    country: "Nauru",
  },
  {
    city: "Yekaterinburg",
    country: "Russia",
  },
  {
    city: "Yellowknife",
    country: "Canada",
  },
  {
    city: "Yerevan",
    country: "Armenia",
  },
  {
    city: "Yogyakarta (city)",
    country: "Indonesia",
  },
  {
    city: "Yokohama",
    country: "Japan",
  },
  {
    city: "Zagreb",
    country: "Croatia",
  },
  {
    city: "Zamboanga City",
    country: "Philippines",
  },
  {
    city: "Zanzibar City",
    country: "Tanzania",
  },
  {
    city: "Zapopan",
    country: "Mexico",
  },
  {
    city: "Zhengzhou",
    country: "China",
  },
  {
    city: "Zürich",
    country: "Switzerland",
  },
  {
    city: "Ürümqi",
    country: "China",
  },
  {
    city: "İzmir",
    country: "Turkey",
  }
];

export default cities;
