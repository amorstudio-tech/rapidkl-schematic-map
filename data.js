(function() {
  function toXY(lat, lng) {
    var minLat = 2.97, maxLat = 3.23;
    var minLng = 101.56, maxLng = 101.80;
    var padX = 40, padY = 30;
    var w = 720, h = 590;
    return {
      x: Math.round(padX + ((lng - minLng) / (maxLng - minLng)) * w),
      y: Math.round(padY + ((maxLat - lat) / (maxLat - minLat)) * h)
    };
  }

  var lines = [
    { id: "mrt-kajang", name: "MRT Kajang Line", color: "#006747", stationIds: [] },
    { id: "mrt-putrajaya", name: "MRT Putrajaya Line", color: "#D32F2F", stationIds: [] },
    { id: "lrt-kelana", name: "LRT Kelana Jaya Line", color: "#0089C7", stationIds: [] },
    { id: "lrt-ampang", name: "LRT Ampang/Sri Petaling Line", color: "#E57200", stationIds: [] },
    { id: "kl-monorail", name: "KL Monorail", color: "#00985F", stationIds: [] }
  ];

  var rawStations = [

    // === MRT KAJANG LINE (green) — NW to SE ===
    { id: "kg1", name: "Kwasa Sentral", line: "mrt-kajang", lat: 3.1767, lng: 101.5680 },
    { id: "kg2", name: "Kota Damansara", line: "mrt-kajang", lat: 3.1579, lng: 101.5878 },
    { id: "kg3", name: "Surian", line: "mrt-kajang", lat: 3.1472, lng: 101.5984 },
    { id: "kg4", name: "Mutiara Damansara", line: "mrt-kajang", lat: 3.1375, lng: 101.6093 },
    { id: "kg5", name: "Bandar Utama", line: "mrt-kajang", lat: 3.1265, lng: 101.6210 },
    { id: "kg6", name: "TTDI", line: "mrt-kajang", lat: 3.1179, lng: 101.6315 },
    { id: "kg7", name: "Phileo Damansara", line: "mrt-kajang", lat: 3.1055, lng: 101.6425 },
    { id: "kg8", name: "Pusat Bandar Damansara", line: "mrt-kajang", lat: 3.0960, lng: 101.6515 },
    { id: "kg9", name: "Semantan", line: "mrt-kajang", lat: 3.0915, lng: 101.6604 },
    { id: "kg10", name: "Muzium Negara", line: "mrt-kajang", lat: 3.1260, lng: 101.6836 },
    { id: "kg11", name: "Pasar Seni", line: "mrt-kajang", lat: 3.1405, lng: 101.6931 },
    { id: "kg12", name: "Merdeka", line: "mrt-kajang", lat: 3.1420, lng: 101.7009 },
    { id: "kg13", name: "Bukit Bintang", line: "mrt-kajang", lat: 3.1477, lng: 101.7118 },
    { id: "kg14", name: "Tun Razak Exchange", line: "mrt-kajang", lat: 3.1485, lng: 101.7191 },
    { id: "kg15", name: "Cochrane", line: "mrt-kajang", lat: 3.1435, lng: 101.7268 },
    { id: "kg16", name: "Maluri", line: "mrt-kajang", lat: 3.1398, lng: 101.7345 },
    { id: "kg17", name: "Taman Pertama", line: "mrt-kajang", lat: 3.1269, lng: 101.7456 },
    { id: "kg18", name: "Taman Midah", line: "mrt-kajang", lat: 3.1154, lng: 101.7504 },
    { id: "kg19", name: "Taman Mutiara", line: "mrt-kajang", lat: 3.1038, lng: 101.7508 },
    { id: "kg20", name: "Taman Connaught", line: "mrt-kajang", lat: 3.0919, lng: 101.7435 },
    { id: "kg21", name: "Taman Suntex", line: "mrt-kajang", lat: 3.0786, lng: 101.7440 },
    { id: "kg22", name: "Sri Raya", line: "mrt-kajang", lat: 3.0650, lng: 101.7480 },
    { id: "kg23", name: "Bandar Tun Hussein Onn", line: "mrt-kajang", lat: 3.0515, lng: 101.7542 },
    { id: "kg24", name: "Batu Sebelas Cheras", line: "mrt-kajang", lat: 3.0370, lng: 101.7620 },
    { id: "kg25", name: "Bukit Dukung", line: "mrt-kajang", lat: 3.0200, lng: 101.7670 },
    { id: "kg26", name: "Sungai Jernih", line: "mrt-kajang", lat: 3.0010, lng: 101.7760 },
    { id: "kg27", name: "Stadium Kajang", line: "mrt-kajang", lat: 2.9880, lng: 101.7880 },
    { id: "kg28", name: "Kajang", line: "mrt-kajang", lat: 2.9814, lng: 101.7889 },

    // === LRT KELANA JAYA LINE (blue) — NE to SW ===
    { id: "kj1", name: "Gombak", line: "lrt-kelana", lat: 3.2227, lng: 101.7352 },
    { id: "kj2", name: "Wangsa Maju", line: "lrt-kelana", lat: 3.1990, lng: 101.7448 },
    { id: "kj3", name: "Sri Rampai", line: "lrt-kelana", lat: 3.1895, lng: 101.7470 },
    { id: "kj4", name: "Setiawangsa", line: "lrt-kelana", lat: 3.1820, lng: 101.7430 },
    { id: "kj5", name: "Jelatek", line: "lrt-kelana", lat: 3.1725, lng: 101.7390 },
    { id: "kj6", name: "Dato' Keramat", line: "lrt-kelana", lat: 3.1680, lng: 101.7330 },
    { id: "kj7", name: "Damai", line: "lrt-kelana", lat: 3.1635, lng: 101.7280 },
    { id: "kj8", name: "KLCC", line: "lrt-kelana", lat: 3.1575, lng: 101.7130 },
    { id: "kj9", name: "Kampung Baru", line: "lrt-kelana", lat: 3.1615, lng: 101.7055 },
    { id: "kj10", name: "Dang Wangi", line: "lrt-kelana", lat: 3.1550, lng: 101.7000 },
    { id: "kj11", name: "Masjid Jamek", line: "lrt-kelana", lat: 3.1490, lng: 101.6955 },
    { id: "kj12", name: "Pasar Seni", line: "lrt-kelana", lat: 3.1405, lng: 101.6931 },
    { id: "kj13", name: "KL Sentral", line: "lrt-kelana", lat: 3.1340, lng: 101.6860 },
    { id: "kj14", name: "Bangsar", line: "lrt-kelana", lat: 3.1280, lng: 101.6780 },
    { id: "kj15", name: "Abdullah Hukum", line: "lrt-kelana", lat: 3.1210, lng: 101.6700 },
    { id: "kj16", name: "Universiti", line: "lrt-kelana", lat: 3.1110, lng: 101.6585 },
    { id: "kj17", name: "Kelana Jaya", line: "lrt-kelana", lat: 3.1055, lng: 101.6000 },

    // === MRT PUTRAJAYA LINE (red) — NW arc → N → central → S ===
    { id: "py1", name: "Kwasa Damansara", line: "mrt-putrajaya", lat: 3.1792, lng: 101.5758 },
    { id: "py2", name: "Kampung Selamat", line: "mrt-putrajaya", lat: 3.2019, lng: 101.5725 },
    { id: "py3", name: "Sungai Buloh", line: "mrt-putrajaya", lat: 3.2120, lng: 101.5770 },
    { id: "py4", name: "Damansara Damai", line: "mrt-putrajaya", lat: 3.1943, lng: 101.5940 },
    { id: "py5", name: "Sri Damansara Sentral", line: "mrt-putrajaya", lat: 3.1895, lng: 101.6120 },
    { id: "py6", name: "Kepong Baru", line: "mrt-putrajaya", lat: 3.2120, lng: 101.6410 },
    { id: "py7", name: "Jinjang", line: "mrt-putrajaya", lat: 3.2100, lng: 101.6500 },
    { id: "py8", name: "Sri Delima", line: "mrt-putrajaya", lat: 3.2050, lng: 101.6620 },
    { id: "py9", name: "Kampung Batu", line: "mrt-putrajaya", lat: 3.1955, lng: 101.6745 },
    { id: "py10", name: "Kentonmen", line: "mrt-putrajaya", lat: 3.1880, lng: 101.6800 },
    { id: "py11", name: "Jalan Ipoh", line: "mrt-putrajaya", lat: 3.1780, lng: 101.6850 },
    { id: "py12", name: "Sentul Barat", line: "mrt-putrajaya", lat: 3.1730, lng: 101.6940 },
    { id: "py13", name: "Titiwangsa", line: "mrt-putrajaya", lat: 3.1714, lng: 101.7030 },
    { id: "py14", name: "HKL", line: "mrt-putrajaya", lat: 3.1670, lng: 101.7080 },
    { id: "py15", name: "Raja Uda", line: "mrt-putrajaya", lat: 3.1625, lng: 101.7130 },
    { id: "py16", name: "Ampang Park", line: "mrt-putrajaya", lat: 3.1580, lng: 101.7190 },
    { id: "py17", name: "Persiaran KLCC", line: "mrt-putrajaya", lat: 3.1570, lng: 101.7270 },
    { id: "py18", name: "Conlay", line: "mrt-putrajaya", lat: 3.1530, lng: 101.7310 },
    { id: "py19", name: "Tun Razak Exchange", line: "mrt-putrajaya", lat: 3.1485, lng: 101.7191 },
    { id: "py20", name: "Chan Sow Lin", line: "mrt-putrajaya", lat: 3.1310, lng: 101.7250 },
    { id: "py21", name: "Bandar Malaysia", line: "mrt-putrajaya", lat: 3.1110, lng: 101.7090 },
    { id: "py22", name: "Kuchai", line: "mrt-putrajaya", lat: 3.0980, lng: 101.7060 },
    { id: "py23", name: "Sungai Besi", line: "mrt-putrajaya", lat: 3.0820, lng: 101.7050 },

    // === LRT AMPANG / SRI PETALING LINE (orange) — N → central → branch ===
    { id: "asp1", name: "Sentul Timur", line: "lrt-ampang", lat: 3.1895, lng: 101.6960 },
    { id: "asp2", name: "Sentul", line: "lrt-ampang", lat: 3.1820, lng: 101.6980 },
    { id: "asp3", name: "Titiwangsa", line: "lrt-ampang", lat: 3.1714, lng: 101.7030 },
    { id: "asp4", name: "Sultan Ismail", line: "lrt-ampang", lat: 3.1580, lng: 101.7005 },
    { id: "asp5", name: "Bandaraya", line: "lrt-ampang", lat: 3.1530, lng: 101.6980 },
    { id: "asp6", name: "Masjid Jamek", line: "lrt-ampang", lat: 3.1490, lng: 101.6955 },
    { id: "asp7", name: "Plaza Rakyat", line: "lrt-ampang", lat: 3.1450, lng: 101.6985 },
    { id: "asp8", name: "Hang Tuah", line: "lrt-ampang", lat: 3.1418, lng: 101.7040 },
    { id: "asp9", name: "Pudu", line: "lrt-ampang", lat: 3.1380, lng: 101.7090 },
    { id: "asp10", name: "Chan Sow Lin", line: "lrt-ampang", lat: 3.1310, lng: 101.7250 },
    { id: "asp11", name: "Maluri", line: "lrt-ampang", lat: 3.1398, lng: 101.7345 },
    { id: "asp12", name: "Ampang", line: "lrt-ampang", lat: 3.1480, lng: 101.7620 },
    { id: "asp13", name: "Sri Petaling", line: "lrt-ampang", lat: 3.0547, lng: 101.6882 },
    { id: "asp14", name: "Bukit Jalil", line: "lrt-ampang", lat: 3.0565, lng: 101.6765 },

    // === KL MONORAIL (teal) — U-shaped loop in central KL ===
    { id: "mr1", name: "KL Sentral", line: "kl-monorail", lat: 3.1340, lng: 101.6860 },
    { id: "mr2", name: "Tun Sambanthan", line: "kl-monorail", lat: 3.1310, lng: 101.6890 },
    { id: "mr3", name: "Maharajalela", line: "kl-monorail", lat: 3.1375, lng: 101.6965 },
    { id: "mr4", name: "Hang Tuah", line: "kl-monorail", lat: 3.1418, lng: 101.7040 },
    { id: "mr5", name: "Imbi", line: "kl-monorail", lat: 3.1430, lng: 101.7100 },
    { id: "mr6", name: "Bukit Bintang", line: "kl-monorail", lat: 3.1477, lng: 101.7118 },
    { id: "mr7", name: "Raja Chulan", line: "kl-monorail", lat: 3.1520, lng: 101.7105 },
    { id: "mr8", name: "Bukit Nanas", line: "kl-monorail", lat: 3.1550, lng: 101.7050 },
    { id: "mr9", name: "Medan Tuanku", line: "kl-monorail", lat: 3.1580, lng: 101.7000 },
    { id: "mr10", name: "Chow Kit", line: "kl-monorail", lat: 3.1650, lng: 101.6990 },
    { id: "mr11", name: "Titiwangsa", line: "kl-monorail", lat: 3.1714, lng: 101.7030 }
  ];

  var stations = rawStations.map(function(s) {
    var xy = toXY(s.lat, s.lng);
    return { id: s.id, name: s.name, line: s.line, lat: s.lat, lng: s.lng, x: xy.x, y: xy.y, poiIds: [] };
  });

  var pois = [
    { id: "pk1", name: "Central Market", description: "Art deco market with crafts and souvenirs.", stationId: "kg11" },
    { id: "pk2", name: "Petaling Street", description: "Famous Chinatown market district.", stationId: "kg11" },
    { id: "pk3", name: "River of Life", description: "Scenic riverside walkway with light shows.", stationId: "kg11" },
    { id: "pk4", name: "Merdeka 118", description: "Second tallest building in the world.", stationId: "kg12" },
    { id: "pk5", name: "Stadium Merdeka", description: "Historic independence venue.", stationId: "kg12" },
    { id: "pk6", name: "Pavilion KL", description: "Premier shopping mall with luxury brands.", stationId: "kg13" },
    { id: "pk7", name: "Berjaya Times Square", description: "Large shopping and entertainment complex.", stationId: "kg13" },
    { id: "pk8", name: "Fahrenheit 88", description: "Trendy shopping destination.", stationId: "kg13" },
    { id: "pk9", name: "Lot 10", description: "Iconic shopping mall with Isetan.", stationId: "kg13" },
    { id: "pk10", name: "TRX Mall", description: "New shopping and dining precinct.", stationId: "kg14" },
    { id: "pk11", name: "The Exchange 106", description: "Tall skyscraper in the TRX district.", stationId: "kg14" },
    { id: "pk12", name: "Aeon Maluri", description: "Major shopping mall with supermarket.", stationId: "kg16" },
    { id: "pk13", name: "Sunway Velocity", description: "Modern shopping and dining complex.", stationId: "kg16" },
    { id: "pk14", name: "MyTOWN Shopping Centre", description: "Community shopping mall.", stationId: "kg16" },
    { id: "pk15", name: "Kajang Town", description: "Historic town center famous for satay.", stationId: "kg28" },
    { id: "pk16", name: "Kajang Stadium", description: "Multi-purpose sports stadium.", stationId: "kg28" },
    { id: "pk17", name: "Plaza Metro Kajang", description: "Shopping mall with retail and dining.", stationId: "kg28" },
    { id: "pk18", name: "Petronas Twin Towers", description: "Iconic 88-storey twin skyscrapers.", stationId: "kj8" },
    { id: "pk19", name: "Suria KLCC", description: "Upscale shopping mall beneath the towers.", stationId: "kj8" },
    { id: "pk20", name: "KLCC Park", description: "50-acre park with fountains and playground.", stationId: "kj8" },
    { id: "pk21", name: "Aquaria KLCC", description: "Oceanarium with marine life exhibits.", stationId: "kj8" },
    { id: "pk22", name: "Masjid Jamek", description: "One of KL's oldest mosques.", stationId: "kj11" },
    { id: "pk23", name: "Dataran Merdeka", description: "Historic independence square.", stationId: "kj11" },
    { id: "pk24", name: "Sultan Abdul Samad Building", description: "Iconic Moorish-style heritage building.", stationId: "kj11" },
    { id: "pk25", name: "Nu Sentral", description: "Shopping mall connected to station.", stationId: "kj13" },
    { id: "pk26", name: "National Museum", description: "Museum of Malaysian history and culture.", stationId: "kj13" },
    { id: "pk27", name: "KL Bird Park", description: "World's largest free-flight aviary.", stationId: "kj13" },
    { id: "pk28", name: "Bangsar Village", description: "Popular dining and shopping hub.", stationId: "kj14" },
    { id: "pk29", name: "Bangsar Shopping Centre", description: "Upscale retail complex.", stationId: "kj14" },
    { id: "pk30", name: "IKEA Damansara", description: "Swedish furniture store with restaurant.", stationId: "kg4" },
    { id: "pk31", name: "The Curve", description: "Outdoor shopping and dining mall.", stationId: "kg4" },
    { id: "pk32", name: "1 Utama", description: "One of Malaysia's largest shopping malls.", stationId: "kg5" },
    { id: "pk33", name: "TTDI Market", description: "Popular night market and food hub.", stationId: "kg6" },
    { id: "pk34", name: "Tropicana Gardens Mall", description: "Modern shopping centre.", stationId: "kg6" },
    { id: "pk35", name: "Phileo Damansara", description: "Commercial office tower complex.", stationId: "kg7" },
    { id: "pk36", name: "Gasket Alley", description: "Trendy food truck and container park.", stationId: "kg8" },
    { id: "pk37", name: "KL Eco City", description: "Mixed-use development with shops.", stationId: "kg9" },
    { id: "pk38", name: "Muzium Negara", description: "National museum of Malaysian history.", stationId: "kg10" },
    { id: "pk39", name: "KL Sentral", description: "Major transit hub with shopping.", stationId: "kg10" },
    { id: "pk40", name: "Aeon AU2", description: "Shopping mall with supermarket.", stationId: "kg15" },
    { id: "pk41", name: "AEON Taman Maluri", description: "Department store and supermarket.", stationId: "kg17" },
    { id: "pk42", name: "Midah Heights", description: "Local shops and eateries.", stationId: "kg18" },
    { id: "pk43", name: "Mutiara Avenue", description: "Retail and dining street.", stationId: "kg19" },
    { id: "pk44", name: "Connaught Market", description: "Famous night market (pasar malam).", stationId: "kg20" },
    { id: "pk45", name: "Suntex Plaza", description: "Neighbourhood shopping.", stationId: "kg21" },
    { id: "pk46", name: "Sri Raya Market", description: "Local fresh market.", stationId: "kg22" },
    { id: "pk47", name: "Bandar Tun Hussein Onn Plaza", description: "Community mall.", stationId: "kg23" },
    { id: "pk48", name: "Batu Sebelah Market", description: "Local morning market.", stationId: "kg24" },
    { id: "pk49", name: "Bukit Dukung Park", description: "Neighbourhood park.", stationId: "kg25" },
    { id: "pk50", name: "Sungai Jernih Park", description: "Local recreational area.", stationId: "kg26" },
    { id: "pk51", name: "Stadium Kajang", description: "Multi-purpose sports venue.", stationId: "kg27" },
    { id: "pk52", name: "Gombak Terminal", description: "Bus terminal and transit hub.", stationId: "kj1" },
    { id: "pk53", name: "Gombak LRT Park", description: "Park and ride facility.", stationId: "kj1" },
    { id: "pk54", name: "Wangsa Walk Mall", description: "Neighbourhood shopping mall.", stationId: "kj2" },
    { id: "pk55", name: "Setapak Central", description: "Budget-friendly shopping complex.", stationId: "kj2" },
    { id: "pk56", name: "Sri Rampai Market", description: "Local wet market.", stationId: "kj3" },
    { id: "pk57", name: "Setiawangsa Park", description: "Recreational park.", stationId: "kj4" },
    { id: "pk58", name: "Jelatek Market", description: "Local market and food court.", stationId: "kj5" },
    { id: "pk59", name: "Dato' Keramat Market", description: "Traditional market area.", stationId: "kj6" },
    { id: "pk60", name: "Damai Park", description: "Local neighbourhood park.", stationId: "kj7" },
    { id: "pk61", name: "Kampung Baru Night Market", description: "Traditional Malay enclave with food.", stationId: "kj9" },
    { id: "pk62", name: "Dang Wangi KL Tower", description: "Telecommunications tower with observation deck.", stationId: "kj10" },
    { id: "pk63", name: "Central Market", description: "Art deco market with crafts.", stationId: "kj12" },
    { id: "pk64", name: "Petaling Street", description: "Chinatown market district.", stationId: "kj12" },
    { id: "pk65", name: "River of Life", description: "Scenic riverside walkway.", stationId: "kj12" },
    { id: "pk66", name: "Universiti Malaya", description: "Malaysia's oldest university.", stationId: "kj16" },
    { id: "pk67", name: "UM Botanical Garden", description: "University botanical gardens.", stationId: "kj16" },
    { id: "pk68", name: "Kelana Jaya Market", description: "Local market and food street.", stationId: "kj17" },
    { id: "pk69", name: "Paradigm Mall", description: "Shopping mall in Kelana Jaya.", stationId: "kj17" },
    { id: "pk70", name: "Pasar Kepong", description: "Traditional wet market.", stationId: "py6" },
    { id: "pk71", name: "Metro Prima", description: "Shopping mall in Kepong.", stationId: "py6" },
    { id: "pk72", name: "AEON AU2", description: "Shopping mall in Setiawangsa.", stationId: "py12" },
    { id: "pk73", name: "Setiawangsa Business Park", description: "Commercial office park.", stationId: "py12" },
    { id: "pk74", name: "Setapak Central", description: "Budget shopping complex.", stationId: "asp2" },
    { id: "pk75", name: "Quill City Mall", description: "Shopping mall near Sultan Ismail.", stationId: "asp4" },
    { id: "pk76", name: "Maju Junction Mall", description: "Shopping mall in Chow Kit.", stationId: "asp4" },
    { id: "pk77", name: "Plaza Rakyat", description: "Public square and transport hub.", stationId: "asp7" },
    { id: "pk78", name: "Pudu Sentral", description: "Major bus terminal.", stationId: "asp9" },
    { id: "pk79", name: "Chan Sow Lin Market", description: "Local food and market area.", stationId: "asp10" },
    { id: "pk80", name: "Ampang Point", description: "Shopping centre in Ampang.", stationId: "asp12" },
    { id: "pk81", name: "Great Eastern Mall", description: "Upscale mall in Ampang.", stationId: "asp12" },
    { id: "pk82", name: "Bukit Jalil National Stadium", description: "Malaysia's largest stadium.", stationId: "asp14" },
    { id: "pk83", name: "Axiata Arena", description: "Indoor arena for sports and concerts.", stationId: "asp14" },
    { id: "pk84", name: "Tun Sambanthan Brickfields", description: "Little India district with shops.", stationId: "mr2" },
    { id: "pk85", name: "Merdeka Square", description: "Historic field near Maharajalela.", stationId: "mr3" },
    { id: "pk86", name: "Stadium Merdeka", description: "Historic sports stadium.", stationId: "mr3" },
    { id: "pk87", name: "Low Yat Plaza", description: "Top electronics mall at Imbi.", stationId: "mr5" },
    { id: "pk88", name: "Berjaya Times Square", description: "Mega shopping and theme park.", stationId: "mr5" },
    { id: "pk89", name: "Chow Kit Market", description: "Bustling market area.", stationId: "mr10" },
    { id: "pk90", name: "Hospital Kuala Lumpur", description: "Major public hospital.", stationId: "mr10" },
    { id: "pk91", name: "1 Shamelin", description: "Shopping mall in Cheras.", stationId: "py22" },
    { id: "pk92", name: "Sungai Besi Plaza", description: "Retail and dining hub.", stationId: "py23" },
    { id: "pk93", name: "Axiata Arena", description: "Sports and concert venue.", stationId: "py23" }
  ];

  var stationById = {};
  stations.forEach(function(s) { stationById[s.id] = s; });
  var poiById = {};
  pois.forEach(function(p) { poiById[p.id] = p; });

  lines.forEach(function(line) {
    line.stationIds = stations.filter(function(s) { return s.line === line.id; }).map(function(s) { return s.id; });
  });

  stations.forEach(function(station) {
    station.poiIds = pois.filter(function(p) { return p.stationId === station.id; }).map(function(p) { return p.id; });
  });

  window.RAPIDKL_DATA = { lines: lines, stations: stations, pois: pois, stationById: stationById, poiById: poiById };
})();