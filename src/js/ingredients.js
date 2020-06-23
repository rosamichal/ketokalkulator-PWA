const json = `[{
    "Id": 1,
    "Name": "KetoCal 3:1 proszek",
    "CategoryId": 1,
    "Protein": 15.3,
    "Fat": 67.7,
    "Carbohydrates": 7.2
}, {
    "Id": 2,
    "Name": "KetoCal 4:1 LQ",
    "CategoryId": 1,
    "Protein": 3.09,
    "Fat": 14.8,
    "Carbohydrates": 0.61
}, {
    "Id": 3,
    "Name": "Betaquik",
    "CategoryId": 1,
    "Protein": 0.0,
    "Fat": 21.0,
    "Carbohydrates": 0.0
}, {
    "Id": 4,
    "Name": "Calogen neutral",
    "CategoryId": 1,
    "Protein": 0.0,
    "Fat": 50.0,
    "Carbohydrates": 0.1
}, {
    "Id": 5,
    "Name": "Calogen truskawka",
    "CategoryId": 1,
    "Protein": 0.0,
    "Fat": 50.0,
    "Carbohydrates": 4.3
}, {
    "Id": 6,
    "Name": "Carb Zero",
    "CategoryId": 1,
    "Protein": 0.0,
    "Fat": 20.0,
    "Carbohydrates": 0.0
}, {
    "Id": 7,
    "Name": "KetoCal 4:1 proszek neutral",
    "CategoryId": 1,
    "Protein": 14.35,
    "Fat": 69.1,
    "Carbohydrates": 2.86
}, {
    "Id": 8,
    "Name": "Keyo 3:1",
    "CategoryId": 1,
    "Protein": 8.0,
    "Fat": 30.0,
    "Carbohydrates": 2.0
}, {
    "Id": 9,
    "Name": "Liquigen",
    "CategoryId": 1,
    "Protein": 0.0,
    "Fat": 50.0,
    "Carbohydrates": 0.0
}, {
    "Id": 10,
    "Name": "MCT Protocal",
    "CategoryId": 1,
    "Protein": 12.5,
    "Fat": 63.1,
    "Carbohydrates": 20.6
}, {
    "Id": 11,
    "Name": "białko jaja kurzego surowe i gotowane",
    "CategoryId": 2,
    "Protein": 10.9,
    "Fat": 0.2,
    "Carbohydrates": 0.7
}, {
    "Id": 12,
    "Name": "jaja kurze całe surowe i gotowane",
    "CategoryId": 2,
    "Protein": 12.5,
    "Fat": 9.7,
    "Carbohydrates": 0.6
}, {
    "Id": 13,
    "Name": "jajo przepiórcze",
    "CategoryId": 2,
    "Protein": 13.0,
    "Fat": 11.0,
    "Carbohydrates": 0.4
}, {
    "Id": 14,
    "Name": "żółtko jaja kurzego surowe i gotowane",
    "CategoryId": 2,
    "Protein": 15.5,
    "Fat": 28.2,
    "Carbohydrates": 0.3
}, {
    "Id": 15,
    "Name": "Cielęcina, łopatka surowa",
    "CategoryId": 3,
    "Protein": 19.9,
    "Fat": 2.8,
    "Carbohydrates": 0.0
}, {
    "Id": 16,
    "Name": "Cielęcina, sznyclówka surowa",
    "CategoryId": 3,
    "Protein": 20.5,
    "Fat": 2.4,
    "Carbohydrates": 0.0
}, {
    "Id": 17,
    "Name": "Cielęcina, udziec surowy",
    "CategoryId": 3,
    "Protein": 19.9,
    "Fat": 3.1,
    "Carbohydrates": 0.0
}, {
    "Id": 18,
    "Name": "Filet z indyka, smażony bez tłuszczu",
    "CategoryId": 3,
    "Protein": 24.4,
    "Fat": 0.8,
    "Carbohydrates": 0.5
}, {
    "Id": 19,
    "Name": "Filet z kurczaka smażony bez tłuszczu",
    "CategoryId": 3,
    "Protein": 26.1,
    "Fat": 1.4,
    "Carbohydrates": 0.0
}, {
    "Id": 20,
    "Name": "Filet z kurczaka, gotowany na parze",
    "CategoryId": 3,
    "Protein": 26.7,
    "Fat": 1.4,
    "Carbohydrates": 0.0
}, {
    "Id": 21,
    "Name": "Filet z kurczaka, gotowany w wodzie",
    "CategoryId": 3,
    "Protein": 26.3,
    "Fat": 1.4,
    "Carbohydrates": 0.0
}, {
    "Id": 22,
    "Name": "Filety z indyka, smażone bez tłuszczu",
    "CategoryId": 3,
    "Protein": 24.4,
    "Fat": 0.8,
    "Carbohydrates": 0.0
}, {
    "Id": 23,
    "Name": "Indyk pieczony",
    "CategoryId": 3,
    "Protein": 22.6,
    "Fat": 10.5,
    "Carbohydrates": 0.0
}, {
    "Id": 24,
    "Name": "Mięso z piersi indyka, bez skóry surowy",
    "CategoryId": 3,
    "Protein": 19.2,
    "Fat": 0.7,
    "Carbohydrates": 0.0
}, {
    "Id": 25,
    "Name": "Mięso z piersi kurczaka, bez skóry surowe",
    "CategoryId": 3,
    "Protein": 21.5,
    "Fat": 1.3,
    "Carbohydrates": 0.0
}, {
    "Id": 26,
    "Name": "Mięso z podudzia indyka, bez skóry surowe",
    "CategoryId": 3,
    "Protein": 16.6,
    "Fat": 3.7,
    "Carbohydrates": 0.0
}, {
    "Id": 27,
    "Name": "Mięso z ud kurczaka, bez skóry surowe",
    "CategoryId": 3,
    "Protein": 17.8,
    "Fat": 6.0,
    "Carbohydrates": 0.0
}, {
    "Id": 28,
    "Name": "Mięso z udźca indyka, bez skóry surowe",
    "CategoryId": 3,
    "Protein": 19.4,
    "Fat": 2.8,
    "Carbohydrates": 0.0
}, {
    "Id": 29,
    "Name": "Schab pieczony",
    "CategoryId": 3,
    "Protein": 32.4,
    "Fat": 5.0,
    "Carbohydrates": 0.0
}, {
    "Id": 30,
    "Name": "Wątróbka kurczaka surowy",
    "CategoryId": 3,
    "Protein": 19.1,
    "Fat": 6.3,
    "Carbohydrates": 0.6
}, {
    "Id": 31,
    "Name": "Wieprzowina, karkówka surowa",
    "CategoryId": 3,
    "Protein": 18.8,
    "Fat": 14.4,
    "Carbohydrates": 0.0
}, {
    "Id": 32,
    "Name": "Wieprzowina, łopatka surowa",
    "CategoryId": 3,
    "Protein": 20.6,
    "Fat": 8.6,
    "Carbohydrates": 0.0
}, {
    "Id": 33,
    "Name": "Wieprzowina, polędwica surowa",
    "CategoryId": 3,
    "Protein": 22.54,
    "Fat": 1.92,
    "Carbohydrates": 0.0
}, {
    "Id": 34,
    "Name": "Wieprzowina, schab surowy",
    "CategoryId": 3,
    "Protein": 22.9,
    "Fat": 4.2,
    "Carbohydrates": 0.0
}, {
    "Id": 35,
    "Name": "Wieprzowina, szynka surowa",
    "CategoryId": 3,
    "Protein": 21.4,
    "Fat": 4.7,
    "Carbohydrates": 0.0
}, {
    "Id": 36,
    "Name": "Wołowina, pieczeń surowa",
    "CategoryId": 3,
    "Protein": 20.9,
    "Fat": 3.6,
    "Carbohydrates": 0.0
}, {
    "Id": 37,
    "Name": "Wołowina, polędwica surowa",
    "CategoryId": 3,
    "Protein": 20.1,
    "Fat": 3.5,
    "Carbohydrates": 0.0
}, {
    "Id": 38,
    "Name": "Wołowina, rostbef surowy",
    "CategoryId": 3,
    "Protein": 21.5,
    "Fat": 7.3,
    "Carbohydrates": 0.0
}, {
    "Id": 39,
    "Name": "Wołowina, rozbratel surowy",
    "CategoryId": 3,
    "Protein": 16.7,
    "Fat": 10.1,
    "Carbohydrates": 0.0
}, {
    "Id": 40,
    "Name": "Wołowina, szponder surowy",
    "CategoryId": 3,
    "Protein": 19.3,
    "Fat": 15.7,
    "Carbohydrates": 0.0
}, {
    "Id": 41,
    "Name": "Żołądek kurczaka surowy",
    "CategoryId": 3,
    "Protein": 18.2,
    "Fat": 4.2,
    "Carbohydrates": 0.6
}, {
    "Id": 42,
    "Name": "Dorsz, filet gotowany na parze",
    "CategoryId": 4,
    "Protein": 19.8,
    "Fat": 0.3,
    "Carbohydrates": 0.0
}, {
    "Id": 43,
    "Name": "Dorsz, filet gotowany w wodzie",
    "CategoryId": 4,
    "Protein": 19.8,
    "Fat": 0.3,
    "Carbohydrates": 0.0
}, {
    "Id": 44,
    "Name": "Dorsz, filet pieczony bez tłuszczu",
    "CategoryId": 4,
    "Protein": 22.8,
    "Fat": 0.4,
    "Carbohydrates": 0.0
}, {
    "Id": 45,
    "Name": "Dorsz, świeży",
    "CategoryId": 4,
    "Protein": 17.7,
    "Fat": 0.7,
    "Carbohydrates": 0.0
}, {
    "Id": 46,
    "Name": "Dorsz, świeży, filety bez skóry",
    "CategoryId": 4,
    "Protein": 16.5,
    "Fat": 0.3,
    "Carbohydrates": 0.0
}, {
    "Id": 47,
    "Name": "Dorsz, wędzony",
    "CategoryId": 4,
    "Protein": 22.1,
    "Fat": 0.5,
    "Carbohydrates": 0.0
}, {
    "Id": 48,
    "Name": "Halibut biały, świeży",
    "CategoryId": 4,
    "Protein": 20.1,
    "Fat": 1.9,
    "Carbohydrates": 0.0
}, {
    "Id": 49,
    "Name": "Karp, gotowany na parze",
    "CategoryId": 4,
    "Protein": 20.8,
    "Fat": 4.1,
    "Carbohydrates": 0.0
}, {
    "Id": 50,
    "Name": "Karp, gotowany w wodzie",
    "CategoryId": 4,
    "Protein": 20.7,
    "Fat": 4.1,
    "Carbohydrates": 0.0
}, {
    "Id": 51,
    "Name": "Karp, świeży",
    "CategoryId": 4,
    "Protein": 18.0,
    "Fat": 4.2,
    "Carbohydrates": 0.0
}, {
    "Id": 52,
    "Name": "Krewetki białe całe, gotowane Delux Lidl",
    "CategoryId": 4,
    "Protein": 17.0,
    "Fat": 1.0,
    "Carbohydrates": 0.0
}, {
    "Id": 53,
    "Name": "Łosoś gotowany na parze",
    "CategoryId": 4,
    "Protein": 22.3,
    "Fat": 13.0,
    "Carbohydrates": 0.0
}, {
    "Id": 54,
    "Name": "Łosoś gotowany w wodzie",
    "CategoryId": 4,
    "Protein": 22.2,
    "Fat": 12.9,
    "Carbohydrates": 0.0
}, {
    "Id": 55,
    "Name": "Łosoś pacyficzny Suempol",
    "CategoryId": 4,
    "Protein": 20.0,
    "Fat": 3.4,
    "Carbohydrates": 0.9
}, {
    "Id": 56,
    "Name": "Łosoś pieczony",
    "CategoryId": 4,
    "Protein": 27.0,
    "Fat": 15.7,
    "Carbohydrates": 0.0
}, {
    "Id": 57,
    "Name": "Łosoś smażony bez tłuszczu",
    "CategoryId": 4,
    "Protein": 23.0,
    "Fat": 13.3,
    "Carbohydrates": 0.0
}, {
    "Id": 58,
    "Name": "Łosoś, świeży",
    "CategoryId": 4,
    "Protein": 19.9,
    "Fat": 13.6,
    "Carbohydrates": 0.0
}, {
    "Id": 59,
    "Name": "Łosoś, wędzony",
    "CategoryId": 4,
    "Protein": 21.5,
    "Fat": 8.4,
    "Carbohydrates": 0.0
}, {
    "Id": 60,
    "Name": "Makrela, świeża",
    "CategoryId": 4,
    "Protein": 18.7,
    "Fat": 11.9,
    "Carbohydrates": 0.0
}, {
    "Id": 61,
    "Name": "Makrela, wędzona",
    "CategoryId": 4,
    "Protein": 20.7,
    "Fat": 15.5,
    "Carbohydrates": 0.0
}, {
    "Id": 62,
    "Name": "Mintaj, świeży",
    "CategoryId": 4,
    "Protein": 16.6,
    "Fat": 0.6,
    "Carbohydrates": 0.0
}, {
    "Id": 63,
    "Name": "Morszczuk, świeży",
    "CategoryId": 4,
    "Protein": 17.2,
    "Fat": 2.2,
    "Carbohydrates": 0.0
}, {
    "Id": 64,
    "Name": "Ogonki raków Akerman",
    "CategoryId": 4,
    "Protein": 14.0,
    "Fat": 0.5,
    "Carbohydrates": 0.0
}, {
    "Id": 65,
    "Name": "Pstrąg tęczowy patroszony, Marinero Biedronka",
    "CategoryId": 4,
    "Protein": 20.0,
    "Fat": 4.5,
    "Carbohydrates": 0.1
}, {
    "Id": 66,
    "Name": "Pstrąg tęczowy pieczony",
    "CategoryId": 4,
    "Protein": 25.2,
    "Fat": 11.1,
    "Carbohydrates": 0.0
}, {
    "Id": 67,
    "Name": "Pstrąg tęczowy, świeży",
    "CategoryId": 4,
    "Protein": 18.6,
    "Fat": 9.6,
    "Carbohydrates": 0.0
}, {
    "Id": 68,
    "Name": "Sandacz, świeży",
    "CategoryId": 4,
    "Protein": 19.2,
    "Fat": 0.7,
    "Carbohydrates": 0.0
}, {
    "Id": 69,
    "Name": "Sardynka, świeża",
    "CategoryId": 4,
    "Protein": 20.6,
    "Fat": 9.6,
    "Carbohydrates": 0.0
}, {
    "Id": 70,
    "Name": "Sola, świeża",
    "CategoryId": 4,
    "Protein": 17.5,
    "Fat": 1.4,
    "Carbohydrates": 0.0
}, {
    "Id": 71,
    "Name": "Śledź, solony",
    "CategoryId": 4,
    "Protein": 19.8,
    "Fat": 15.4,
    "Carbohydrates": 0.0
}, {
    "Id": 72,
    "Name": "Śledź, świeży",
    "CategoryId": 4,
    "Protein": 16.3,
    "Fat": 10.7,
    "Carbohydrates": 0.0
}, {
    "Id": 73,
    "Name": "Tuńczyk, świeży",
    "CategoryId": 4,
    "Protein": 23.7,
    "Fat": 4.6,
    "Carbohydrates": 0.0
}, {
    "Id": 74,
    "Name": "Frankfurterki wedzone Biedronka",
    "CategoryId": 5,
    "Protein": 16.8,
    "Fat": 27.0,
    "Carbohydrates": 0.8
}, {
    "Id": 75,
    "Name": "Filet wędzony z indyka Lidl ",
    "CategoryId": 5,
    "Protein": 19.0,
    "Fat": 1.0,
    "Carbohydrates": 2.0
}, {
    "Id": 76,
    "Name": "Kabanos Kapelana",
    "CategoryId": 5,
    "Protein": 13.5,
    "Fat": 12.0,
    "Carbohydrates": 3.7
}, {
    "Id": 77,
    "Name": "Kabanosy klasyczne Sokołów",
    "CategoryId": 5,
    "Protein": 20.0,
    "Fat": 30.0,
    "Carbohydrates": 0.6
}, {
    "Id": 78,
    "Name": "Kabanosy z filetem z kurczaka Olewnik",
    "CategoryId": 5,
    "Protein": 25.0,
    "Fat": 39.0,
    "Carbohydrates": 0.3
}, {
    "Id": 79,
    "Name": "Kabanosy z kurcząt Drobimex",
    "CategoryId": 5,
    "Protein": 19.0,
    "Fat": 15.0,
    "Carbohydrates": 0.7
}, {
    "Id": 80,
    "Name": "Kaszanka gryczana Olewnik",
    "CategoryId": 5,
    "Protein": 9.0,
    "Fat": 16.0,
    "Carbohydrates": 11.0
}, {
    "Id": 81,
    "Name": "Kiełbasa babuni pieczona Sokołów",
    "CategoryId": 5,
    "Protein": 19.0,
    "Fat": 13.0,
    "Carbohydrates": 0.5
}, {
    "Id": 82,
    "Name": "Kiełbasa biała z szynki Pikok Lidl",
    "CategoryId": 5,
    "Protein": 16.0,
    "Fat": 20.0,
    "Carbohydrates": 0.6
}, {
    "Id": 83,
    "Name": "Kiełbasa krakowska sucha Biedronka",
    "CategoryId": 5,
    "Protein": 28.0,
    "Fat": 11.0,
    "Carbohydrates": 0.2
}, {
    "Id": 84,
    "Name": "Kiełbasa krucha z galaretka Madej Wróbel",
    "CategoryId": 5,
    "Protein": 19.0,
    "Fat": 27.0,
    "Carbohydrates": 0.2
}, {
    "Id": 85,
    "Name": "Kiełbasa myśliwska Krakus",
    "CategoryId": 5,
    "Protein": 24.0,
    "Fat": 20.0,
    "Carbohydrates": 0.5
}, {
    "Id": 86,
    "Name": "Kiełbasa myśliwska Nasze smaki Biedronka",
    "CategoryId": 5,
    "Protein": 27.0,
    "Fat": 30.0,
    "Carbohydrates": 0.8
}, {
    "Id": 87,
    "Name": "Kiełbasa podwawelska Sokołów",
    "CategoryId": 5,
    "Protein": 15.0,
    "Fat": 27.0,
    "Carbohydrates": 0.6
}, {
    "Id": 88,
    "Name": "Kiełbasa wieprzowa z cielęciną",
    "CategoryId": 5,
    "Protein": 21.0,
    "Fat": 17.0,
    "Carbohydrates": 0.4
}, {
    "Id": 89,
    "Name": "Kiełbaski śląskie z szynki Biedronka",
    "CategoryId": 5,
    "Protein": 16.0,
    "Fat": 19.0,
    "Carbohydrates": 1.0
}, {
    "Id": 90,
    "Name": "Parówki Piratki Lidl",
    "CategoryId": 5,
    "Protein": 14.0,
    "Fat": 24.0,
    "Carbohydrates": 1.2
}, {
    "Id": 91,
    "Name": "Parówki Sokoliki Sokołów",
    "CategoryId": 5,
    "Protein": 14.5,
    "Fat": 13.0,
    "Carbohydrates": 0.8
}, {
    "Id": 92,
    "Name": "Parówki z indyka Indykpol",
    "CategoryId": 5,
    "Protein": 12.9,
    "Fat": 16.5,
    "Carbohydrates": 0.7
}, {
    "Id": 93,
    "Name": "Parówki z szynki Pikok Lidl",
    "CategoryId": 5,
    "Protein": 14.0,
    "Fat": 24.0,
    "Carbohydrates": 1.2
}, {
    "Id": 94,
    "Name": "Polędwica sopocka, Sokołów",
    "CategoryId": 5,
    "Protein": 18.0,
    "Fat": 2.6,
    "Carbohydrates": 1.0
}, {
    "Id": 95,
    "Name": "Polędwica wieprzowa pieczona Pikok Lidl",
    "CategoryId": 5,
    "Protein": 21.0,
    "Fat": 3.5,
    "Carbohydrates": 0.8
}, {
    "Id": 96,
    "Name": "Salai delikatesowe Biedronka",
    "CategoryId": 5,
    "Protein": 19.0,
    "Fat": 30.0,
    "Carbohydrates": 1.0
}, {
    "Id": 97,
    "Name": "Salami ostródzkie Biedronka",
    "CategoryId": 5,
    "Protein": 22.0,
    "Fat": 41.0,
    "Carbohydrates": 0.3
}, {
    "Id": 98,
    "Name": "Salami ostródzkie Morliny",
    "CategoryId": 5,
    "Protein": 22.0,
    "Fat": 41.0,
    "Carbohydrates": 0.3
}, {
    "Id": 99,
    "Name": "Stara wędzarnia parówki z cielęciną",
    "CategoryId": 5,
    "Protein": 13.7,
    "Fat": 17.8,
    "Carbohydrates": 0.5
}, {
    "Id": 100,
    "Name": "Szynka krucha Kraina Wędlin Biedronka",
    "CategoryId": 5,
    "Protein": 21.0,
    "Fat": 3.2,
    "Carbohydrates": 0.3
}, {
    "Id": 101,
    "Name": "Szynka z wędzarni H.Kania Biedronka",
    "CategoryId": 5,
    "Protein": 21.0,
    "Fat": 3.0,
    "Carbohydrates": 0.3
}, {
    "Id": 102,
    "Name": "Feta Apetina Classic Arla",
    "CategoryId": 6,
    "Protein": 13.0,
    "Fat": 17.0,
    "Carbohydrates": 3.9
}, {
    "Id": 103,
    "Name": "Feta Athos",
    "CategoryId": 6,
    "Protein": 16.0,
    "Fat": 24.2,
    "Carbohydrates": 0.2
}, {
    "Id": 104,
    "Name": "Mascarpone Piątnica",
    "CategoryId": 6,
    "Protein": 3.5,
    "Fat": 40.0,
    "Carbohydrates": 5.1
}, {
    "Id": 105,
    "Name": "Mascarpone Tesco",
    "CategoryId": 6,
    "Protein": 6.0,
    "Fat": 44.0,
    "Carbohydrates": 3.5
}, {
    "Id": 106,
    "Name": "Milandia serek śmietankowy Piątnica",
    "CategoryId": 6,
    "Protein": 6.0,
    "Fat": 23.0,
    "Carbohydrates": 3.0
}, {
    "Id": 107,
    "Name": "Mozarela latteo OSM Grodzisk Maz.",
    "CategoryId": 6,
    "Protein": 19.0,
    "Fat": 17.0,
    "Carbohydrates": 0.5
}, {
    "Id": 108,
    "Name": "Mozarella Galbani w kawałku",
    "CategoryId": 6,
    "Protein": 24.0,
    "Fat": 20.0,
    "Carbohydrates": 0.3
}, {
    "Id": 109,
    "Name": "Mozzarella mini latteo OSM Grodzisk Maz.",
    "CategoryId": 6,
    "Protein": 19.0,
    "Fat": 17.0,
    "Carbohydrates": 0.5
}, {
    "Id": 110,
    "Name": "Oscypek Mlekowita",
    "CategoryId": 6,
    "Protein": 25.0,
    "Fat": 18.5,
    "Carbohydrates": 0.0
}, {
    "Id": 111,
    "Name": "Oscypek ser Janosika milkeffekt",
    "CategoryId": 6,
    "Protein": 29.0,
    "Fat": 25.0,
    "Carbohydrates": 1.0
}, {
    "Id": 112,
    "Name": "Ricotta Tesco",
    "CategoryId": 6,
    "Protein": 7.4,
    "Fat": 10.7,
    "Carbohydrates": 2.5
}, {
    "Id": 113,
    "Name": "Ser cheddar Światowid Biedronka",
    "CategoryId": 6,
    "Protein": 25.0,
    "Fat": 35.0,
    "Carbohydrates": 0.2
}, {
    "Id": 114,
    "Name": "Ser Edamski Biedronka",
    "CategoryId": 6,
    "Protein": 26.0,
    "Fat": 27.0,
    "Carbohydrates": 0.0
}, {
    "Id": 115,
    "Name": "Ser Gouda Biedronka",
    "CategoryId": 6,
    "Protein": 26.0,
    "Fat": 27.0,
    "Carbohydrates": 0.0
}, {
    "Id": 116,
    "Name": "Ser gouda Mlekowita plastry",
    "CategoryId": 6,
    "Protein": 25.0,
    "Fat": 26.0,
    "Carbohydrates": 0.0
}, {
    "Id": 117,
    "Name": "Ser kozi Euroser",
    "CategoryId": 6,
    "Protein": 23.0,
    "Fat": 32.0,
    "Carbohydrates": 0.0
}, {
    "Id": 118,
    "Name": "Ser kozi Milbona Lidl",
    "CategoryId": 6,
    "Protein": 25.2,
    "Fat": 30.2,
    "Carbohydrates": 0.0
}, {
    "Id": 119,
    "Name": "Ser kozi w plastrach Euroser",
    "CategoryId": 6,
    "Protein": 23.0,
    "Fat": 32.0,
    "Carbohydrates": 0.0
}, {
    "Id": 120,
    "Name": "Ser twarogowy śmietankowy MONA ",
    "CategoryId": 6,
    "Protein": 11.3,
    "Fat": 16.5,
    "Carbohydrates": 1.6
}, {
    "Id": 121,
    "Name": "Ser tylżycki wędzony Biedronka",
    "CategoryId": 6,
    "Protein": 25.0,
    "Fat": 26.0,
    "Carbohydrates": 0.1
}, {
    "Id": 122,
    "Name": "Ser wędzony Jadel Pilos Lidl",
    "CategoryId": 6,
    "Protein": 23.5,
    "Fat": 20.2,
    "Carbohydrates": 1.5
}, {
    "Id": 123,
    "Name": "Ser, warkocze wędzone",
    "CategoryId": 6,
    "Protein": 28.0,
    "Fat": 29.0,
    "Carbohydrates": 1.0
}, {
    "Id": 124,
    "Name": "Serek Nasz kremowy z ziołami NaTurek",
    "CategoryId": 6,
    "Protein": 7.3,
    "Fat": 18.0,
    "Carbohydrates": 3.5
}, {
    "Id": 125,
    "Name": "Serek śmietankowy Hochland trójkaty",
    "CategoryId": 6,
    "Protein": 11.0,
    "Fat": 19.0,
    "Carbohydrates": 6.5
}, {
    "Id": 126,
    "Name": "Serek śmietankowy Krówka OSM Rawicz",
    "CategoryId": 6,
    "Protein": 12.0,
    "Fat": 18.0,
    "Carbohydrates": 1.6
}, {
    "Id": 127,
    "Name": "Serek śmietankowy Twój smak Piątnica",
    "CategoryId": 6,
    "Protein": 6.0,
    "Fat": 23.0,
    "Carbohydrates": 3.0
}, {
    "Id": 128,
    "Name": "Serek wiejski ziarnisty Piątnica",
    "CategoryId": 6,
    "Protein": 11.0,
    "Fat": 5.0,
    "Carbohydrates": 2.0
}, {
    "Id": 129,
    "Name": "Twaróg 0% President",
    "CategoryId": 6,
    "Protein": 17.0,
    "Fat": 0.0,
    "Carbohydrates": 2.5
}, {
    "Id": 130,
    "Name": "Twaróg sernikowy 18% 3,3w wiaderko Piątnica/Biedronka",
    "CategoryId": 6,
    "Protein": 7.8,
    "Fat": 18.0,
    "Carbohydrates": 3.3
}, {
    "Id": 131,
    "Name": "Twaróg sernikowy 18% Piątnica/Biedronka",
    "CategoryId": 6,
    "Protein": 8.0,
    "Fat": 18.0,
    "Carbohydrates": 2.6
}, {
    "Id": 132,
    "Name": "Twaróg tłusty Mazurski Smak Mlekpol",
    "CategoryId": 6,
    "Protein": 16.0,
    "Fat": 8.0,
    "Carbohydrates": 3.5
}, {
    "Id": 133,
    "Name": "Twaróg tłusty wiejski Piątnica",
    "CategoryId": 6,
    "Protein": 15.0,
    "Fat": 8.0,
    "Carbohydrates": 3.7
}, {
    "Id": 134,
    "Name": "Twaróg wędzony Łowicz",
    "CategoryId": 6,
    "Protein": 11.0,
    "Fat": 17.0,
    "Carbohydrates": 1.6
}, {
    "Id": 135,
    "Name": "mleko kobiece",
    "CategoryId": 7,
    "Protein": 1.3,
    "Fat": 4.3,
    "Carbohydrates": 7.0
}, {
    "Id": 136,
    "Name": "mleko 2%",
    "CategoryId": 7,
    "Protein": 3.3,
    "Fat": 2.0,
    "Carbohydrates": 4.8
}, {
    "Id": 137,
    "Name": "Dynia, pestki",
    "CategoryId": 8,
    "Protein": 24.5,
    "Fat": 45.8,
    "Carbohydrates": 12.7
}, {
    "Id": 138,
    "Name": "Len mielony odtłuszczony BioAvena",
    "CategoryId": 8,
    "Protein": 40.0,
    "Fat": 9.0,
    "Carbohydrates": 3.0
}, {
    "Id": 139,
    "Name": "Len, nasiona",
    "CategoryId": 8,
    "Protein": 24.5,
    "Fat": 31.0,
    "Carbohydrates": 31.1
}, {
    "Id": 140,
    "Name": "Mak niebieski",
    "CategoryId": 8,
    "Protein": 20.1,
    "Fat": 42.9,
    "Carbohydrates": 4.2
}, {
    "Id": 141,
    "Name": "Masło z migdałów prażonych Primavika",
    "CategoryId": 8,
    "Protein": 21.0,
    "Fat": 52.0,
    "Carbohydrates": 19.0
}, {
    "Id": 142,
    "Name": "Nasiona chia Melvit",
    "CategoryId": 8,
    "Protein": 21.0,
    "Fat": 31.0,
    "Carbohydrates": 5.0
}, {
    "Id": 143,
    "Name": "Nasiona chia Sante",
    "CategoryId": 8,
    "Protein": 20.0,
    "Fat": 34.0,
    "Carbohydrates": 0.7
}, {
    "Id": 144,
    "Name": "Orzechy brazylijskie Bakalland",
    "CategoryId": 8,
    "Protein": 14.3,
    "Fat": 66.4,
    "Carbohydrates": 4.8
}, {
    "Id": 145,
    "Name": "Orzechy macadamia bez soli Helio",
    "CategoryId": 8,
    "Protein": 7.9,
    "Fat": 76.0,
    "Carbohydrates": 5.0
}, {
    "Id": 146,
    "Name": "Orzechy pecan Helio",
    "CategoryId": 8,
    "Protein": 9.2,
    "Fat": 72.0,
    "Carbohydrates": 4.3
}, {
    "Id": 147,
    "Name": "Orzechy włoskie Alesto Lidl",
    "CategoryId": 8,
    "Protein": 15.5,
    "Fat": 69.1,
    "Carbohydrates": 3.7
}, {
    "Id": 148,
    "Name": "Orzechy włoskie Biedronka",
    "CategoryId": 8,
    "Protein": 16.0,
    "Fat": 60.0,
    "Carbohydrates": 12.0
}, {
    "Id": 149,
    "Name": "Quinoa Melvit",
    "CategoryId": 8,
    "Protein": 15.0,
    "Fat": 6.7,
    "Carbohydrates": 55.0
}, {
    "Id": 150,
    "Name": "Sezam biały Helio",
    "CategoryId": 8,
    "Protein": 23.0,
    "Fat": 60.0,
    "Carbohydrates": 2.1
}, {
    "Id": 151,
    "Name": "Słonecznik, nasiona",
    "CategoryId": 8,
    "Protein": 24.4,
    "Fat": 43.7,
    "Carbohydrates": 18.6
}, {
    "Id": 152,
    "Name": "Wiórki kokosowe Tesco",
    "CategoryId": 8,
    "Protein": 5.6,
    "Fat": 63.2,
    "Carbohydrates": 5.9
}, {
    "Id": 153,
    "Name": "Agrest",
    "CategoryId": 9,
    "Protein": 0.8,
    "Fat": 0.2,
    "Carbohydrates": 8.8
}, {
    "Id": 154,
    "Name": "Ananas",
    "CategoryId": 9,
    "Protein": 0.4,
    "Fat": 0.2,
    "Carbohydrates": 12.4
}, {
    "Id": 155,
    "Name": "Arbuz",
    "CategoryId": 9,
    "Protein": 0.6,
    "Fat": 0.1,
    "Carbohydrates": 8.1
}, {
    "Id": 156,
    "Name": "Awokado",
    "CategoryId": 9,
    "Protein": 2.0,
    "Fat": 15.3,
    "Carbohydrates": 4.1
}, {
    "Id": 157,
    "Name": "Banan",
    "CategoryId": 9,
    "Protein": 1.0,
    "Fat": 0.3,
    "Carbohydrates": 21.8
}, {
    "Id": 158,
    "Name": "Brzoskwinia",
    "CategoryId": 9,
    "Protein": 1.0,
    "Fat": 0.2,
    "Carbohydrates": 10.0
}, {
    "Id": 159,
    "Name": "Cytryna",
    "CategoryId": 9,
    "Protein": 0.8,
    "Fat": 0.3,
    "Carbohydrates": 7.5
}, {
    "Id": 160,
    "Name": "Cytryna, sok",
    "CategoryId": 9,
    "Protein": 0.35,
    "Fat": 0.24,
    "Carbohydrates": 6.9
}, {
    "Id": 161,
    "Name": "Czarne jagody",
    "CategoryId": 9,
    "Protein": 0.8,
    "Fat": 0.6,
    "Carbohydrates": 9.0
}, {
    "Id": 162,
    "Name": "Czereśnie",
    "CategoryId": 9,
    "Protein": 1.0,
    "Fat": 0.3,
    "Carbohydrates": 13.3
}, {
    "Id": 163,
    "Name": "Gerber Jabłko brzoskwinia",
    "CategoryId": 9,
    "Protein": 0.3,
    "Fat": 0.1,
    "Carbohydrates": 10.5
}, {
    "Id": 164,
    "Name": "Gerber Jabłko morela",
    "CategoryId": 9,
    "Protein": 0.4,
    "Fat": 0.1,
    "Carbohydrates": 10.7
}, {
    "Id": 165,
    "Name": "Gerber jabłko, jagoda, banan",
    "CategoryId": 9,
    "Protein": 0.2,
    "Fat": 0.1,
    "Carbohydrates": 11.4
}, {
    "Id": 166,
    "Name": "Grejpfrut",
    "CategoryId": 9,
    "Protein": 0.6,
    "Fat": 0.2,
    "Carbohydrates": 7.9
}, {
    "Id": 167,
    "Name": "Gruszka",
    "CategoryId": 9,
    "Protein": 0.6,
    "Fat": 0.2,
    "Carbohydrates": 12.3
}, {
    "Id": 168,
    "Name": "Gujawa",
    "CategoryId": 9,
    "Protein": 0.8,
    "Fat": 0.6,
    "Carbohydrates": 7.2
}, {
    "Id": 169,
    "Name": "Jabłko",
    "CategoryId": 9,
    "Protein": 0.4,
    "Fat": 0.4,
    "Carbohydrates": 10.1
}, {
    "Id": 170,
    "Name": "Jagody mrożone Hortex",
    "CategoryId": 9,
    "Protein": 0.8,
    "Fat": 0.6,
    "Carbohydrates": 9.0
}, {
    "Id": 171,
    "Name": "Jeżyna mrożona Lidl Devaldano",
    "CategoryId": 9,
    "Protein": 1.2,
    "Fat": 1.0,
    "Carbohydrates": 6.2
}, {
    "Id": 172,
    "Name": "Kiwi",
    "CategoryId": 9,
    "Protein": 0.9,
    "Fat": 0.5,
    "Carbohydrates": 11.8
}, {
    "Id": 173,
    "Name": "Maliny",
    "CategoryId": 9,
    "Protein": 1.3,
    "Fat": 0.3,
    "Carbohydrates": 5.3
}, {
    "Id": 174,
    "Name": "Maliny mrożone Hortex",
    "CategoryId": 9,
    "Protein": 1.3,
    "Fat": 0.3,
    "Carbohydrates": 5.3
}, {
    "Id": 175,
    "Name": "Maliny mrożone Lidl",
    "CategoryId": 9,
    "Protein": 1.3,
    "Fat": 0.3,
    "Carbohydrates": 5.3
}, {
    "Id": 176,
    "Name": "Mandarynki",
    "CategoryId": 9,
    "Protein": 0.6,
    "Fat": 0.2,
    "Carbohydrates": 9.3
}, {
    "Id": 177,
    "Name": "Mango",
    "CategoryId": 9,
    "Protein": 0.5,
    "Fat": 0.3,
    "Carbohydrates": 15.3
}, {
    "Id": 178,
    "Name": "Melon",
    "CategoryId": 9,
    "Protein": 0.9,
    "Fat": 0.3,
    "Carbohydrates": 7.4
}, {
    "Id": 179,
    "Name": "Morele",
    "CategoryId": 9,
    "Protein": 0.9,
    "Fat": 0.2,
    "Carbohydrates": 10.2
}, {
    "Id": 180,
    "Name": "Nektarynka",
    "CategoryId": 9,
    "Protein": 0.9,
    "Fat": 0.2,
    "Carbohydrates": 10.6
}, {
    "Id": 181,
    "Name": "Papaja",
    "CategoryId": 9,
    "Protein": 0.6,
    "Fat": 0.1,
    "Carbohydrates": 9.2
}, {
    "Id": 182,
    "Name": "Pomarańcza",
    "CategoryId": 9,
    "Protein": 0.9,
    "Fat": 0.2,
    "Carbohydrates": 9.4
}, {
    "Id": 183,
    "Name": "Porzeczki białe",
    "CategoryId": 9,
    "Protein": 1.0,
    "Fat": 0.2,
    "Carbohydrates": 6.7
}, {
    "Id": 184,
    "Name": "Porzeczki czarne",
    "CategoryId": 9,
    "Protein": 1.3,
    "Fat": 0.2,
    "Carbohydrates": 7.1
}, {
    "Id": 185,
    "Name": "Porzeczki czerwone",
    "CategoryId": 9,
    "Protein": 1.1,
    "Fat": 0.2,
    "Carbohydrates": 6.1
}, {
    "Id": 186,
    "Name": "Poziomki",
    "CategoryId": 9,
    "Protein": 0.8,
    "Fat": 0.5,
    "Carbohydrates": 6.3
}, {
    "Id": 187,
    "Name": "Śliwki",
    "CategoryId": 9,
    "Protein": 0.6,
    "Fat": 0.2,
    "Carbohydrates": 10.1
}, {
    "Id": 188,
    "Name": "Truskawki",
    "CategoryId": 9,
    "Protein": 0.7,
    "Fat": 0.4,
    "Carbohydrates": 5.8
}, {
    "Id": 189,
    "Name": "Truskawki liofilizowane Frupp Celiko",
    "CategoryId": 9,
    "Protein": 8.0,
    "Fat": 4.0,
    "Carbohydrates": 55.0
}, {
    "Id": 190,
    "Name": "Truskawki mrożone Hortex",
    "CategoryId": 9,
    "Protein": 0.7,
    "Fat": 0.3,
    "Carbohydrates": 5.4
}, {
    "Id": 191,
    "Name": "Truskawki mrożone Lidl",
    "CategoryId": 9,
    "Protein": 0.7,
    "Fat": 0.4,
    "Carbohydrates": 5.4
}, {
    "Id": 192,
    "Name": "Winogrona",
    "CategoryId": 9,
    "Protein": 0.5,
    "Fat": 0.2,
    "Carbohydrates": 16.1
}, {
    "Id": 193,
    "Name": "Wiśnie",
    "CategoryId": 9,
    "Protein": 0.9,
    "Fat": 0.4,
    "Carbohydrates": 9.9
}, {
    "Id": 194,
    "Name": "Bakłażan",
    "CategoryId": 10,
    "Protein": 1.1,
    "Fat": 0.1,
    "Carbohydrates": 3.8
}, {
    "Id": 195,
    "Name": "Boćwina",
    "CategoryId": 10,
    "Protein": 2.1,
    "Fat": 0.5,
    "Carbohydrates": 1.1
}, {
    "Id": 196,
    "Name": "Bób",
    "CategoryId": 10,
    "Protein": 7.1,
    "Fat": 0.4,
    "Carbohydrates": 8.2
}, {
    "Id": 197,
    "Name": "brokuł gotowany w wodzie",
    "CategoryId": 10,
    "Protein": 2.2,
    "Fat": 0.3,
    "Carbohydrates": 2.0
}, {
    "Id": 198,
    "Name": "Brokuł mrożony różyczki Chira Lidl",
    "CategoryId": 10,
    "Protein": 2.7,
    "Fat": 0.1,
    "Carbohydrates": 2.4
}, {
    "Id": 199,
    "Name": "Brokuły",
    "CategoryId": 10,
    "Protein": 3.0,
    "Fat": 0.4,
    "Carbohydrates": 2.7
}, {
    "Id": 200,
    "Name": "Brukselka",
    "CategoryId": 10,
    "Protein": 4.7,
    "Fat": 0.5,
    "Carbohydrates": 3.3
}, {
    "Id": 201,
    "Name": "brukselka gotowana w wodzie",
    "CategoryId": 10,
    "Protein": 4.2,
    "Fat": 0.5,
    "Carbohydrates": 2.9
}, {
    "Id": 202,
    "Name": "Burak",
    "CategoryId": 10,
    "Protein": 1.8,
    "Fat": 0.1,
    "Carbohydrates": 7.3
}, {
    "Id": 203,
    "Name": "Burak suszony Zdrowe Pola Rossmann",
    "CategoryId": 10,
    "Protein": 12.0,
    "Fat": 0.0,
    "Carbohydrates": 50.0
}, {
    "Id": 204,
    "Name": "buraki gotowane w wodzie",
    "CategoryId": 10,
    "Protein": 1.6,
    "Fat": 0.1,
    "Carbohydrates": 6.5
}, {
    "Id": 205,
    "Name": "Cebula",
    "CategoryId": 10,
    "Protein": 1.4,
    "Fat": 0.4,
    "Carbohydrates": 5.2
}, {
    "Id": 206,
    "Name": "Chrzan",
    "CategoryId": 10,
    "Protein": 4.5,
    "Fat": 0.6,
    "Carbohydrates": 10.8
}, {
    "Id": 207,
    "Name": "Chrzan Proeco ",
    "CategoryId": 10,
    "Protein": 2.1,
    "Fat": 8.1,
    "Carbohydrates": 9.5
}, {
    "Id": 208,
    "Name": "Cukinia",
    "CategoryId": 10,
    "Protein": 1.2,
    "Fat": 0.1,
    "Carbohydrates": 2.2
}, {
    "Id": 209,
    "Name": "Cykoria",
    "CategoryId": 10,
    "Protein": 1.7,
    "Fat": 0.2,
    "Carbohydrates": 3.1
}, {
    "Id": 210,
    "Name": "Czosnek",
    "CategoryId": 10,
    "Protein": 6.4,
    "Fat": 0.5,
    "Carbohydrates": 28.5
}, {
    "Id": 211,
    "Name": "Dynia",
    "CategoryId": 10,
    "Protein": 1.3,
    "Fat": 0.3,
    "Carbohydrates": 4.9
}, {
    "Id": 212,
    "Name": "Fasola biała, nasiona suche",
    "CategoryId": 10,
    "Protein": 21.4,
    "Fat": 1.6,
    "Carbohydrates": 45.9
}, {
    "Id": 213,
    "Name": "Fasola mung, kiełki",
    "CategoryId": 10,
    "Protein": 3.0,
    "Fat": 0.4,
    "Carbohydrates": 3.2
}, {
    "Id": 214,
    "Name": "Fasola szparagowa",
    "CategoryId": 10,
    "Protein": 2.4,
    "Fat": 0.2,
    "Carbohydrates": 5.0
}, {
    "Id": 215,
    "Name": "fasola szparagowa gotowana w wodzie",
    "CategoryId": 10,
    "Protein": 2.1,
    "Fat": 0.2,
    "Carbohydrates": 4.5
}, {
    "Id": 216,
    "Name": "Fasolka szparagowa mrożona cięta Chira Lidl",
    "CategoryId": 10,
    "Protein": 2.2,
    "Fat": 0.1,
    "Carbohydrates": 3.3
}, {
    "Id": 217,
    "Name": "Groch, nasiona suche",
    "CategoryId": 10,
    "Protein": 23.8,
    "Fat": 1.4,
    "Carbohydrates": 45.2
}, {
    "Id": 218,
    "Name": "Groszek zielony",
    "CategoryId": 10,
    "Protein": 6.7,
    "Fat": 0.4,
    "Carbohydrates": 11.0
}, {
    "Id": 219,
    "Name": "Groszek zielony Chira Lidl konserwa",
    "CategoryId": 10,
    "Protein": 5.0,
    "Fat": 0.7,
    "Carbohydrates": 8.6
}, {
    "Id": 220,
    "Name": "groszek zielony gotowany w wodzie",
    "CategoryId": 10,
    "Protein": 6.0,
    "Fat": 0.4,
    "Carbohydrates": 9.9
}, {
    "Id": 221,
    "Name": "Hummus klasyczny Sante",
    "CategoryId": 10,
    "Protein": 6.0,
    "Fat": 28.0,
    "Carbohydrates": 10.0
}, {
    "Id": 222,
    "Name": "Jarmuż",
    "CategoryId": 10,
    "Protein": 3.3,
    "Fat": 0.7,
    "Carbohydrates": 2.3
}, {
    "Id": 223,
    "Name": "Kalafior",
    "CategoryId": 10,
    "Protein": 2.4,
    "Fat": 0.2,
    "Carbohydrates": 2.6
}, {
    "Id": 224,
    "Name": "kalafior gotowany w wodzie",
    "CategoryId": 10,
    "Protein": 1.8,
    "Fat": 0.1,
    "Carbohydrates": 1.9
}, {
    "Id": 225,
    "Name": "Kalarepa",
    "CategoryId": 10,
    "Protein": 2.2,
    "Fat": 0.3,
    "Carbohydrates": 4.3
}, {
    "Id": 226,
    "Name": "Kapusta biała",
    "CategoryId": 10,
    "Protein": 1.7,
    "Fat": 0.2,
    "Carbohydrates": 4.9
}, {
    "Id": 227,
    "Name": "Kapusta czerwona",
    "CategoryId": 10,
    "Protein": 1.9,
    "Fat": 0.2,
    "Carbohydrates": 4.2
}, {
    "Id": 228,
    "Name": "Kapusta kiszona Lidl",
    "CategoryId": 10,
    "Protein": 1.3,
    "Fat": 0.0,
    "Carbohydrates": 2.7
}, {
    "Id": 229,
    "Name": "Kapusta kwaszona Biedronka",
    "CategoryId": 10,
    "Protein": 1.1,
    "Fat": 0.2,
    "Carbohydrates": 1.3
}, {
    "Id": 230,
    "Name": "Kapusta pekińska",
    "CategoryId": 10,
    "Protein": 1.2,
    "Fat": 0.2,
    "Carbohydrates": 1.3
}, {
    "Id": 231,
    "Name": "Kapusta włoska",
    "CategoryId": 10,
    "Protein": 3.3,
    "Fat": 0.4,
    "Carbohydrates": 5.2
}, {
    "Id": 232,
    "Name": "Ketchup Hellmans ze stewią",
    "CategoryId": 10,
    "Protein": 0.2,
    "Fat": 0.2,
    "Carbohydrates": 11.0
}, {
    "Id": 233,
    "Name": "Kiełki brokułu Uniflora",
    "CategoryId": 10,
    "Protein": 4.7,
    "Fat": 1.3,
    "Carbohydrates": 4.6
}, {
    "Id": 234,
    "Name": "Kiełki brokułu Vital Fresh Biedronka",
    "CategoryId": 10,
    "Protein": 4.7,
    "Fat": 1.3,
    "Carbohydrates": 4.6
}, {
    "Id": 235,
    "Name": "Kiełki lucerny Uniflora",
    "CategoryId": 10,
    "Protein": 2.5,
    "Fat": 0.0,
    "Carbohydrates": 0.3
}, {
    "Id": 236,
    "Name": "Kiełki rzodkiewki Uniflora",
    "CategoryId": 10,
    "Protein": 4.7,
    "Fat": 1.2,
    "Carbohydrates": 5.3
}, {
    "Id": 237,
    "Name": "Koper ogrodowy",
    "CategoryId": 10,
    "Protein": 2.8,
    "Fat": 0.4,
    "Carbohydrates": 2.8
}, {
    "Id": 238,
    "Name": "Kukurydza złocista, Bonduelle konserwowa",
    "CategoryId": 10,
    "Protein": 2.9,
    "Fat": 1.9,
    "Carbohydrates": 10.8
}, {
    "Id": 239,
    "Name": "Kukurydza, kolby",
    "CategoryId": 10,
    "Protein": 3.7,
    "Fat": 1.5,
    "Carbohydrates": 20.1
}, {
    "Id": 240,
    "Name": "Marchew",
    "CategoryId": 10,
    "Protein": 1.0,
    "Fat": 0.2,
    "Carbohydrates": 5.1
}, {
    "Id": 241,
    "Name": "marchew gotowana w wodzie",
    "CategoryId": 10,
    "Protein": 0.9,
    "Fat": 0.2,
    "Carbohydrates": 4.6
}, {
    "Id": 242,
    "Name": "Mix sałat z rukolą fioletowy Lidl",
    "CategoryId": 10,
    "Protein": 2.0,
    "Fat": 0.2,
    "Carbohydrates": 0.9
}, {
    "Id": 243,
    "Name": "Mix sałat ze szpinakiem niebieski Lidl",
    "CategoryId": 10,
    "Protein": 1.8,
    "Fat": 0.1,
    "Carbohydrates": 0.7
}, {
    "Id": 244,
    "Name": "Mix sałatkowy Europeano zielony Lidl",
    "CategoryId": 10,
    "Protein": 1.6,
    "Fat": 0.2,
    "Carbohydrates": 0.8
}, {
    "Id": 245,
    "Name": "Ogórek",
    "CategoryId": 10,
    "Protein": 0.7,
    "Fat": 0.1,
    "Carbohydrates": 2.4
}, {
    "Id": 246,
    "Name": "Ogórki kiszone Lidl",
    "CategoryId": 10,
    "Protein": 0.9,
    "Fat": 0.0,
    "Carbohydrates": 1.0
}, {
    "Id": 247,
    "Name": "Ogórki kwaszone Biedronka",
    "CategoryId": 10,
    "Protein": 1.1,
    "Fat": 0.1,
    "Carbohydrates": 1.4
}, {
    "Id": 248,
    "Name": "Oliwki zielone Biedronka",
    "CategoryId": 10,
    "Protein": 0.9,
    "Fat": 15.0,
    "Carbohydrates": 0.3
}, {
    "Id": 249,
    "Name": "Papryka czerwona",
    "CategoryId": 10,
    "Protein": 1.3,
    "Fat": 0.5,
    "Carbohydrates": 4.6
}, {
    "Id": 250,
    "Name": "Papryka zielona",
    "CategoryId": 10,
    "Protein": 1.1,
    "Fat": 0.3,
    "Carbohydrates": 2.6
}, {
    "Id": 251,
    "Name": "Passata pomidorowa z ziołami Biedronka",
    "CategoryId": 10,
    "Protein": 1.7,
    "Fat": 0.1,
    "Carbohydrates": 4.4
}, {
    "Id": 252,
    "Name": "Pasternak",
    "CategoryId": 10,
    "Protein": 1.6,
    "Fat": 0.6,
    "Carbohydrates": 11.0
}, {
    "Id": 253,
    "Name": "Pietruszka, korzeń",
    "CategoryId": 10,
    "Protein": 2.6,
    "Fat": 0.5,
    "Carbohydrates": 6.3
}, {
    "Id": 254,
    "Name": "Pietruszka, liście",
    "CategoryId": 10,
    "Protein": 4.4,
    "Fat": 0.4,
    "Carbohydrates": 4.8
}, {
    "Id": 255,
    "Name": "Pomidor",
    "CategoryId": 10,
    "Protein": 0.9,
    "Fat": 0.2,
    "Carbohydrates": 2.9
}, {
    "Id": 256,
    "Name": "Pomidory Barilla",
    "CategoryId": 10,
    "Protein": 1.6,
    "Fat": 2.7,
    "Carbohydrates": 6.8
}, {
    "Id": 257,
    "Name": "Pomidory pelati Freshona Lidl",
    "CategoryId": 10,
    "Protein": 1.0,
    "Fat": 0.1,
    "Carbohydrates": 3.1
}, {
    "Id": 258,
    "Name": "Por",
    "CategoryId": 10,
    "Protein": 2.2,
    "Fat": 0.3,
    "Carbohydrates": 3.0
}, {
    "Id": 259,
    "Name": "Przecier pomidorowy Łowicz",
    "CategoryId": 10,
    "Protein": 1.25,
    "Fat": 0.5,
    "Carbohydrates": 3.75
}, {
    "Id": 260,
    "Name": "Rabarbar",
    "CategoryId": 10,
    "Protein": 0.5,
    "Fat": 0.1,
    "Carbohydrates": 1.4
}, {
    "Id": 261,
    "Name": "Rukola Vital Fresh myta Biedronka",
    "CategoryId": 10,
    "Protein": 3.8,
    "Fat": 0.0,
    "Carbohydrates": 0.8
}, {
    "Id": 262,
    "Name": "Rzepa",
    "CategoryId": 10,
    "Protein": 1.1,
    "Fat": 0.3,
    "Carbohydrates": 4.7
}, {
    "Id": 263,
    "Name": "Rzodkiewka",
    "CategoryId": 10,
    "Protein": 1.0,
    "Fat": 0.2,
    "Carbohydrates": 1.9
}, {
    "Id": 264,
    "Name": "Sałata",
    "CategoryId": 10,
    "Protein": 1.4,
    "Fat": 0.2,
    "Carbohydrates": 1.5
}, {
    "Id": 265,
    "Name": "Seler cięty, Chira Lidl",
    "CategoryId": 10,
    "Protein": 0.8,
    "Fat": 0.2,
    "Carbohydrates": 5.5
}, {
    "Id": 266,
    "Name": "Seler cięty, Develey",
    "CategoryId": 10,
    "Protein": 0.7,
    "Fat": 0.2,
    "Carbohydrates": 5.5
}, {
    "Id": 267,
    "Name": "Seler korzeniowy",
    "CategoryId": 10,
    "Protein": 1.6,
    "Fat": 0.3,
    "Carbohydrates": 2.8
}, {
    "Id": 268,
    "Name": "Seler naciowy",
    "CategoryId": 10,
    "Protein": 1.0,
    "Fat": 0.2,
    "Carbohydrates": 1.8
}, {
    "Id": 269,
    "Name": "Seler wiórki Nasza Spiżarnia Biedronka",
    "CategoryId": 10,
    "Protein": 0.8,
    "Fat": 0.1,
    "Carbohydrates": 5.7
}, {
    "Id": 270,
    "Name": "Soczewica czerwona sucha Lidl",
    "CategoryId": 10,
    "Protein": 25.0,
    "Fat": 3.0,
    "Carbohydrates": 49.0
}, {
    "Id": 271,
    "Name": "Soczewica czerwona, nasiona suche",
    "CategoryId": 10,
    "Protein": 25.4,
    "Fat": 3.0,
    "Carbohydrates": 48.6
}, {
    "Id": 272,
    "Name": "Soczewica, kiełki",
    "CategoryId": 10,
    "Protein": 9.0,
    "Fat": 0.6,
    "Carbohydrates": 19.1
}, {
    "Id": 273,
    "Name": "Soja, kiełki",
    "CategoryId": 10,
    "Protein": 13.1,
    "Fat": 6.7,
    "Carbohydrates": 7.0
}, {
    "Id": 274,
    "Name": "Soja, nasiona suche",
    "CategoryId": 10,
    "Protein": 34.3,
    "Fat": 19.6,
    "Carbohydrates": 17.0
}, {
    "Id": 275,
    "Name": "Szczaw",
    "CategoryId": 10,
    "Protein": 1.1,
    "Fat": 0.8,
    "Carbohydrates": 2.3
}, {
    "Id": 276,
    "Name": "Szczypiorek",
    "CategoryId": 10,
    "Protein": 4.1,
    "Fat": 0.8,
    "Carbohydrates": 1.7
}, {
    "Id": 277,
    "Name": "Szparagi",
    "CategoryId": 10,
    "Protein": 1.9,
    "Fat": 0.2,
    "Carbohydrates": 2.2
}, {
    "Id": 278,
    "Name": "Szpinak",
    "CategoryId": 10,
    "Protein": 2.6,
    "Fat": 0.4,
    "Carbohydrates": 0.9
}, {
    "Id": 279,
    "Name": "Zielony groszek, Bonduelle konserwa",
    "CategoryId": 10,
    "Protein": 6.0,
    "Fat": 1.0,
    "Carbohydrates": 7.1
}, {
    "Id": 280,
    "Name": "ziemniaki gotowane w wodzie",
    "CategoryId": 10,
    "Protein": 1.8,
    "Fat": 0.1,
    "Carbohydrates": 15.0
}, {
    "Id": 281,
    "Name": "Ziemniaki, późne",
    "CategoryId": 10,
    "Protein": 1.9,
    "Fat": 0.1,
    "Carbohydrates": 18.9
}, {
    "Id": 282,
    "Name": "Ziemniaki, średnio",
    "CategoryId": 10,
    "Protein": 1.9,
    "Fat": 0.1,
    "Carbohydrates": 16.8
}, {
    "Id": 283,
    "Name": "Ziemniaki, wczesne",
    "CategoryId": 10,
    "Protein": 1.8,
    "Fat": 0.1,
    "Carbohydrates": 15.0
}, {
    "Id": 284,
    "Name": "Pieczarki",
    "CategoryId": 10,
    "Protein": 2.7,
    "Fat": 0.4,
    "Carbohydrates": 0.6
}, {
    "Id": 285,
    "Name": "Chleb Pro Body Putka",
    "CategoryId": 11,
    "Protein": 21.4,
    "Fat": 16.8,
    "Carbohydrates": 6.1
}, {
    "Id": 286,
    "Name": "Kleik ryżowy Nestle",
    "CategoryId": 11,
    "Protein": 6.5,
    "Fat": 1.0,
    "Carbohydrates": 86.5
}, {
    "Id": 287,
    "Name": "Makaron Diet Pasta-Diet Food",
    "CategoryId": 11,
    "Protein": 0.0,
    "Fat": 0.0,
    "Carbohydrates": 0.5
}, {
    "Id": 288,
    "Name": "Makaron Slim noodles Decare",
    "CategoryId": 11,
    "Protein": 0.2,
    "Fat": 0.0,
    "Carbohydrates": 0.0
}, {
    "Id": 289,
    "Name": "Makaron ugotowany Pastani pełnoziarnisty fusilli Biedronka",
    "CategoryId": 11,
    "Protein": 7.1,
    "Fat": 1.7,
    "Carbohydrates": 25.0
}, {
    "Id": 290,
    "Name": "Mąka kokosowa Bio-SuperFoods",
    "CategoryId": 11,
    "Protein": 20.0,
    "Fat": 10.0,
    "Carbohydrates": 4.0
}, {
    "Id": 291,
    "Name": "Mąka kokosowa Coco farm Bio",
    "CategoryId": 11,
    "Protein": 17.0,
    "Fat": 19.0,
    "Carbohydrates": 19.0
}, {
    "Id": 292,
    "Name": "Mąka kokosowa ekologiczna RadixBis Sp zoo",
    "CategoryId": 11,
    "Protein": 16.2,
    "Fat": 12.0,
    "Carbohydrates": 15.0
}, {
    "Id": 293,
    "Name": "Mąka kokosowa odtłuszczona-Efavit",
    "CategoryId": 11,
    "Protein": 11.0,
    "Fat": 24.0,
    "Carbohydrates": 13.0
}, {
    "Id": 294,
    "Name": "Mąka kokosowa-Bio planet",
    "CategoryId": 11,
    "Protein": 5.0,
    "Fat": 45.0,
    "Carbohydrates": 7.0
}, {
    "Id": 295,
    "Name": "Mąka migdałowa  BogutynMłyn",
    "CategoryId": 11,
    "Protein": 22.1,
    "Fat": 52.8,
    "Carbohydrates": 9.7
}, {
    "Id": 296,
    "Name": "Majonez Winiary dekoracyjny",
    "CategoryId": 12,
    "Protein": 1.5,
    "Fat": 76.3,
    "Carbohydrates": 2.9
}, {
    "Id": 297,
    "Name": "Masło extra 82% ",
    "CategoryId": 12,
    "Protein": 1.0,
    "Fat": 82.0,
    "Carbohydrates": 1.0
}, {
    "Id": 298,
    "Name": "Masło klarowane Mlekowita",
    "CategoryId": 12,
    "Protein": 0.1,
    "Fat": 99.8,
    "Carbohydrates": 0.1
}, {
    "Id": 299,
    "Name": "Olej kokosowy Vita Dor Lidl",
    "CategoryId": 12,
    "Protein": 0.0,
    "Fat": 99.9,
    "Carbohydrates": 0.0
}, {
    "Id": 300,
    "Name": "Olej lniany Vita Dor",
    "CategoryId": 12,
    "Protein": 0.0,
    "Fat": 92.0,
    "Carbohydrates": 0.0
}, {
    "Id": 301,
    "Name": "Olej rzepakowy Kujawski",
    "CategoryId": 12,
    "Protein": 0.0,
    "Fat": 100.0,
    "Carbohydrates": 0.0
}, {
    "Id": 302,
    "Name": "Oliwa z oliwek",
    "CategoryId": 12,
    "Protein": 0.0,
    "Fat": 99.6,
    "Carbohydrates": 0.0
}, {
    "Id": 303,
    "Name": "Śmietana 36% Piątnica",
    "CategoryId": 12,
    "Protein": 1.7,
    "Fat": 36.0,
    "Carbohydrates": 4.1
}, {
    "Id": 304,
    "Name": "Śmietanka 42% Piątnica",
    "CategoryId": 12,
    "Protein": 2.2,
    "Fat": 42.0,
    "Carbohydrates": 3.3
}, {
    "Id": 305,
    "Name": "Babydream warzywa z ziemniakami i wołowiną",
    "CategoryId": 13,
    "Protein": 2.7,
    "Fat": 2.2,
    "Carbohydrates": 8.2
}, {
    "Id": 306,
    "Name": "Bebilon Profutura 4",
    "CategoryId": 13,
    "Protein": 10.2,
    "Fat": 17.7,
    "Carbohydrates": 57.8
}, {
    "Id": 307,
    "Name": "Bobovita bukiet jarzyn z kurczakiem",
    "CategoryId": 13,
    "Protein": 2.5,
    "Fat": 2.0,
    "Carbohydrates": 10.0
}, {
    "Id": 308,
    "Name": "Bobovita dynia z kurczakiem i ziemniakami",
    "CategoryId": 13,
    "Protein": 2.3,
    "Fat": 0.9,
    "Carbohydrates": 8.7
}, {
    "Id": 309,
    "Name": "Bobovita jabłko",
    "CategoryId": 13,
    "Protein": 0.4,
    "Fat": 0.1,
    "Carbohydrates": 9.3
}, {
    "Id": 310,
    "Name": "Bobovita jarzynowa",
    "CategoryId": 13,
    "Protein": 0.6,
    "Fat": 1.5,
    "Carbohydrates": 7.4
}, {
    "Id": 311,
    "Name": "Bobovita jarzynowa z kurczakiem",
    "CategoryId": 13,
    "Protein": 2.6,
    "Fat": 1.6,
    "Carbohydrates": 6.8
}, {
    "Id": 312,
    "Name": "Bobovita Porcja zbóż bezmleczna jaglano-ryżowa",
    "CategoryId": 13,
    "Protein": 8.8,
    "Fat": 2.4,
    "Carbohydrates": 81.0
}, {
    "Id": 313,
    "Name": "Bobovita Porcja zbóż delikatna owsianka",
    "CategoryId": 13,
    "Protein": 15.0,
    "Fat": 6.9,
    "Carbohydrates": 66.0
}, {
    "Id": 314,
    "Name": "Bobovita warzywa z delikatną wołowiną",
    "CategoryId": 13,
    "Protein": 3.2,
    "Fat": 2.0,
    "Carbohydrates": 7.6
}, {
    "Id": 315,
    "Name": "Gerber delikatne jarzynki z królikiem",
    "CategoryId": 13,
    "Protein": 2.2,
    "Fat": 1.9,
    "Carbohydrates": 4.6
}, {
    "Id": 316,
    "Name": "Gerber delikatny kurczak",
    "CategoryId": 13,
    "Protein": 9.3,
    "Fat": 2.5,
    "Carbohydrates": 3.8
}, {
    "Id": 317,
    "Name": "Gerber dynia",
    "CategoryId": 13,
    "Protein": 0.8,
    "Fat": 0.3,
    "Carbohydrates": 4.3
}, {
    "Id": 318,
    "Name": "Gerber jarzynki z delikatnym schabem",
    "CategoryId": 13,
    "Protein": 3.0,
    "Fat": 1.8,
    "Carbohydrates": 6.2
}, {
    "Id": 319,
    "Name": "Gerber jarzynowa z cielęciną",
    "CategoryId": 13,
    "Protein": 2.9,
    "Fat": 2.9,
    "Carbohydrates": 9.1
}, {
    "Id": 320,
    "Name": "Gerber jarzynowa z królikiem",
    "CategoryId": 13,
    "Protein": 2.2,
    "Fat": 1.9,
    "Carbohydrates": 6.0
}, {
    "Id": 321,
    "Name": "Gerber marchewka",
    "CategoryId": 13,
    "Protein": 1.0,
    "Fat": 0.2,
    "Carbohydrates": 5.1
}, {
    "Id": 322,
    "Name": "Gerber Obiadek Brokuły ",
    "CategoryId": 13,
    "Protein": 1.9,
    "Fat": 0.6,
    "Carbohydrates": 1.9
}, {
    "Id": 323,
    "Name": "Gerber Obiadek Kurczak w potrawce z jarzynkami",
    "CategoryId": 13,
    "Protein": 3.6,
    "Fat": 2.5,
    "Carbohydrates": 6.8
}, {
    "Id": 324,
    "Name": "Kleik ryżowy Bobovita",
    "CategoryId": 13,
    "Protein": 7.6,
    "Fat": 1.0,
    "Carbohydrates": 85.0
}, {
    "Id": 325,
    "Name": "Aromat na oleju, do ciasta",
    "CategoryId": 14,
    "Protein": 0.0,
    "Fat": 100.0,
    "Carbohydrates": 0.0
}, {
    "Id": 326,
    "Name": "Czekolada Dark Orange Balance Rossmann",
    "CategoryId": 14,
    "Protein": 5.6,
    "Fat": 35.0,
    "Carbohydrates": 16.0
}, {
    "Id": 327,
    "Name": "Czekolada gorzka 99% Lindt",
    "CategoryId": 14,
    "Protein": 13.0,
    "Fat": 49.0,
    "Carbohydrates": 8.0
}, {
    "Id": 328,
    "Name": "Czekolada gorzka Balance Rossmann",
    "CategoryId": 14,
    "Protein": 5.7,
    "Fat": 36.8,
    "Carbohydrates": 14.0
}, {
    "Id": 329,
    "Name": "Czekolada Wawel 90%",
    "CategoryId": 14,
    "Protein": 15.0,
    "Fat": 44.0,
    "Carbohydrates": 17.0
}, {
    "Id": 330,
    "Name": "Galaretka bez cukru Celiko, sucha ",
    "CategoryId": 14,
    "Protein": 76.0,
    "Fat": 0.0,
    "Carbohydrates": 1.7
}, {
    "Id": 331,
    "Name": "Kakao naturalne Wawel",
    "CategoryId": 14,
    "Protein": 22.5,
    "Fat": 10.0,
    "Carbohydrates": 13.6
}, {
    "Id": 332,
    "Name": "Kakao Wedel 11%tł.",
    "CategoryId": 14,
    "Protein": 23.0,
    "Fat": 11.0,
    "Carbohydrates": 11.0
}, {
    "Id": 333,
    "Name": "KetoClassic 3:1 Bar",
    "CategoryId": 14,
    "Protein": 10.8,
    "Fat": 43.6,
    "Carbohydrates": 3.3
}, {
    "Id": 334,
    "Name": "Proszek do pieczenia Delecta",
    "CategoryId": 14,
    "Protein": 1.4,
    "Fat": 0.2,
    "Carbohydrates": 11.0
}, {
    "Id": 335,
    "Name": "Seed and berry granola",
    "CategoryId": 14,
    "Protein": 18.9,
    "Fat": 30.7,
    "Carbohydrates": 8.3
}, {
    "Id": 336,
    "Name": "Seed and nut granola",
    "CategoryId": 14,
    "Protein": 19.4,
    "Fat": 38.4,
    "Carbohydrates": 5.4
}, {
    "Id": 337,
    "Name": "Żelatyna spożywcza Delecta",
    "CategoryId": 14,
    "Protein": 87.0,
    "Fat": 0.02,
    "Carbohydrates": 0.0
}]`;

export const getIngredients = () => {
    const ingredients = JSON.parse(json);
    return ingredients;
}