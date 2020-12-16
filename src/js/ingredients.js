const json = `[
    {
        "Id": 1,
        "Name": "Betaquik",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 21.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 2,
        "Name": "Calogen neutral",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 50.0,
        "Carbohydrates": 0.1
    },
    {
        "Id": 3,
        "Name": "Calogen truskawka",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 50.0,
        "Carbohydrates": 4.3
    },
    {
        "Id": 4,
        "Name": "Ketocal 2,5:1 MCT",
        "CategoryId": 0,
        "Protein": 4.5,
        "Fat": 14.3,
        "Carbohydrates": 1.1
    },
    {
        "Id": 5,
        "Name": "KetoCal 3:1 proszek",
        "CategoryId": 0,
        "Protein": 15.3,
        "Fat": 67.7,
        "Carbohydrates": 7.2
    },
    {
        "Id": 6,
        "Name": "KetoCal 4:1 LQ",
        "CategoryId": 0,
        "Protein": 3.09,
        "Fat": 14.8,
        "Carbohydrates": 0.61
    },
    {
        "Id": 7,
        "Name": "KetoCal 4:1 proszek neutral, wanilia",
        "CategoryId": 0,
        "Protein": 14.35,
        "Fat": 69.1,
        "Carbohydrates": 2.86
    },
    {
        "Id": 8,
        "Name": "Keyo 3:1",
        "CategoryId": 0,
        "Protein": 8.0,
        "Fat": 30.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 9,
        "Name": "Liquigen",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 50.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 10,
        "Name": "MCT Oil Nutricia",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 11,
        "Name": "MCT Procal",
        "CategoryId": 0,
        "Protein": 12.5,
        "Fat": 63.1,
        "Carbohydrates": 20.6
    },
    {
        "Id": 12,
        "Name": "Protifar",
        "CategoryId": 0,
        "Protein": 87.2,
        "Fat": 1.6,
        "Carbohydrates": 1.4
    },
    {
        "Id": 13,
        "Name": "MCT Keto Source",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 14,
        "Name": "Białko jaja kurzego surowe, gotowane",
        "CategoryId": 0,
        "Protein": 10.9,
        "Fat": 0.2,
        "Carbohydrates": 0.7
    },
    {
        "Id": 15,
        "Name": "Jaja kurze całe surowe, gotowane",
        "CategoryId": 0,
        "Protein": 12.5,
        "Fat": 9.7,
        "Carbohydrates": 0.6
    },
    {
        "Id": 16,
        "Name": "Jajo przepiórcze całe",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 11.0,
        "Carbohydrates": 0.4
    },
    {
        "Id": 17,
        "Name": "Żółtko jaja kurzego surowe, gotowane",
        "CategoryId": 0,
        "Protein": 15.5,
        "Fat": 28.2,
        "Carbohydrates": 0.3
    },
    {
        "Id": 18,
        "Name": "Cielęcina, łopatka surowa",
        "CategoryId": 0,
        "Protein": 19.9,
        "Fat": 2.8,
        "Carbohydrates": 0.0
    },
    {
        "Id": 19,
        "Name": "Cielęcina, sznyclówka surowa",
        "CategoryId": 0,
        "Protein": 20.5,
        "Fat": 2.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 20,
        "Name": "Cielęcina, udziec surowy",
        "CategoryId": 0,
        "Protein": 19.9,
        "Fat": 3.1,
        "Carbohydrates": 0.0
    },
    {
        "Id": 21,
        "Name": "Filet z indyka, smażony bez tłuszczu",
        "CategoryId": 0,
        "Protein": 24.4,
        "Fat": 0.8,
        "Carbohydrates": 0.5
    },
    {
        "Id": 22,
        "Name": "Filet z kurczaka smażony bez tłuszczu",
        "CategoryId": 0,
        "Protein": 26.1,
        "Fat": 1.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 23,
        "Name": "Filet z kurczaka, gotowany na parze",
        "CategoryId": 0,
        "Protein": 26.7,
        "Fat": 1.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 24,
        "Name": "Filet z kurczaka, gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 26.3,
        "Fat": 1.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 25,
        "Name": "Jagody leśne",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.6,
        "Carbohydrates": 9.0
    },
    {
        "Id": 26,
        "Name": "Mięso z piersi indyka, bez skóry surowy",
        "CategoryId": 0,
        "Protein": 19.2,
        "Fat": 0.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 27,
        "Name": "Mięso z piersi kurczaka, bez skóry surowe",
        "CategoryId": 0,
        "Protein": 21.5,
        "Fat": 1.3,
        "Carbohydrates": 0.0
    },
    {
        "Id": 28,
        "Name": "Mięso z podudzia indyka, bez skóry surowe",
        "CategoryId": 0,
        "Protein": 16.6,
        "Fat": 3.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 29,
        "Name": "Mięso z ud kurczaka, bez skóry surowe",
        "CategoryId": 0,
        "Protein": 17.8,
        "Fat": 6.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 30,
        "Name": "Mięso z udźca indyka, bez skóry surowe",
        "CategoryId": 0,
        "Protein": 19.4,
        "Fat": 2.8,
        "Carbohydrates": 0.0
    },
    {
        "Id": 31,
        "Name": "Schab pieczony",
        "CategoryId": 0,
        "Protein": 32.4,
        "Fat": 5.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 32,
        "Name": "Wątróbka kurczaka surowa",
        "CategoryId": 0,
        "Protein": 19.1,
        "Fat": 6.3,
        "Carbohydrates": 0.6
    },
    {
        "Id": 33,
        "Name": "Wieprzowina, karkówka surowa",
        "CategoryId": 0,
        "Protein": 18.8,
        "Fat": 14.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 34,
        "Name": "Wieprzowina, łopatka surowa",
        "CategoryId": 0,
        "Protein": 20.6,
        "Fat": 8.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 35,
        "Name": "Wieprzowina, polędwica surowa",
        "CategoryId": 0,
        "Protein": 22.54,
        "Fat": 1.92,
        "Carbohydrates": 0.0
    },
    {
        "Id": 36,
        "Name": "Wieprzowina, schab surowy",
        "CategoryId": 0,
        "Protein": 22.9,
        "Fat": 4.2,
        "Carbohydrates": 0.0
    },
    {
        "Id": 37,
        "Name": "Wieprzowina, szynka surowa",
        "CategoryId": 0,
        "Protein": 21.4,
        "Fat": 4.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 38,
        "Name": "Wołowina, pieczeń surowa",
        "CategoryId": 0,
        "Protein": 20.9,
        "Fat": 3.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 39,
        "Name": "Wołowina, polędwica surowa",
        "CategoryId": 0,
        "Protein": 20.1,
        "Fat": 3.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 40,
        "Name": "Wołowina, rostbef surowy",
        "CategoryId": 0,
        "Protein": 21.5,
        "Fat": 7.3,
        "Carbohydrates": 0.0
    },
    {
        "Id": 41,
        "Name": "Wołowina, rozbratel surowy",
        "CategoryId": 0,
        "Protein": 16.7,
        "Fat": 10.1,
        "Carbohydrates": 0.0
    },
    {
        "Id": 42,
        "Name": "Wołowina, szponder surowy",
        "CategoryId": 0,
        "Protein": 19.3,
        "Fat": 15.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 43,
        "Name": "Żołądek kurczaka surowy",
        "CategoryId": 0,
        "Protein": 18.2,
        "Fat": 4.2,
        "Carbohydrates": 0.6
    },
    {
        "Id": 44,
        "Name": "Mięso z młodego gołębia, bez skóry, surowe",
        "CategoryId": 0,
        "Protein": 17.5,
        "Fat": 7.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 45,
        "Name": "Dorsz, filet gotowany na parze",
        "CategoryId": 0,
        "Protein": 19.8,
        "Fat": 0.3,
        "Carbohydrates": 0.0
    },
    {
        "Id": 46,
        "Name": "Dorsz, filet gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 19.8,
        "Fat": 0.3,
        "Carbohydrates": 0.0
    },
    {
        "Id": 47,
        "Name": "Dorsz, filet pieczony bez tłuszczu",
        "CategoryId": 0,
        "Protein": 22.8,
        "Fat": 0.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 48,
        "Name": "Dorsz, świeży",
        "CategoryId": 0,
        "Protein": 17.7,
        "Fat": 0.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 49,
        "Name": "Dorsz, świeży, filety bez skóry",
        "CategoryId": 0,
        "Protein": 16.5,
        "Fat": 0.3,
        "Carbohydrates": 0.0
    },
    {
        "Id": 50,
        "Name": "Dorsz, wędzony",
        "CategoryId": 0,
        "Protein": 22.1,
        "Fat": 0.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 51,
        "Name": "Halibut biały, świeży",
        "CategoryId": 0,
        "Protein": 20.1,
        "Fat": 1.9,
        "Carbohydrates": 0.0
    },
    {
        "Id": 52,
        "Name": "Karp, gotowany na parze",
        "CategoryId": 0,
        "Protein": 20.8,
        "Fat": 4.1,
        "Carbohydrates": 0.0
    },
    {
        "Id": 53,
        "Name": "Karp, gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 20.7,
        "Fat": 4.1,
        "Carbohydrates": 0.0
    },
    {
        "Id": 54,
        "Name": "Karp, świeży",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 4.2,
        "Carbohydrates": 0.0
    },
    {
        "Id": 55,
        "Name": "Krewetki białe całe, gotowane Delux Lidl",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 1.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 56,
        "Name": "Łosoś gotowany na parze",
        "CategoryId": 0,
        "Protein": 22.3,
        "Fat": 13.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 57,
        "Name": "Łosoś gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 22.2,
        "Fat": 12.9,
        "Carbohydrates": 0.0
    },
    {
        "Id": 58,
        "Name": "Łosoś pacyficzny Suempol",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 3.4,
        "Carbohydrates": 0.9
    },
    {
        "Id": 59,
        "Name": "Łosoś pieczony bez dodatku tłuszczu",
        "CategoryId": 0,
        "Protein": 27.0,
        "Fat": 15.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 60,
        "Name": "Łosoś smażony bez dodatku tłuszczu",
        "CategoryId": 0,
        "Protein": 23.0,
        "Fat": 13.3,
        "Carbohydrates": 0.0
    },
    {
        "Id": 61,
        "Name": "Łosoś, świeży",
        "CategoryId": 0,
        "Protein": 19.9,
        "Fat": 13.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 62,
        "Name": "Łosoś, wędzony",
        "CategoryId": 0,
        "Protein": 21.5,
        "Fat": 8.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 63,
        "Name": "Makrela, świeża",
        "CategoryId": 0,
        "Protein": 18.7,
        "Fat": 11.9,
        "Carbohydrates": 0.0
    },
    {
        "Id": 64,
        "Name": "Makrela, wędzona",
        "CategoryId": 0,
        "Protein": 20.7,
        "Fat": 15.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 65,
        "Name": "Mintaj, świeży",
        "CategoryId": 0,
        "Protein": 16.6,
        "Fat": 0.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 66,
        "Name": "Morszczuk, świeży",
        "CategoryId": 0,
        "Protein": 17.2,
        "Fat": 2.2,
        "Carbohydrates": 0.0
    },
    {
        "Id": 67,
        "Name": "Ogonki raków Akerman",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 0.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 68,
        "Name": "Pstrąg tęczowy patroszony, Marinero Biedronka",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 4.5,
        "Carbohydrates": 0.1
    },
    {
        "Id": 69,
        "Name": "Pstrąg tęczowy pieczony",
        "CategoryId": 0,
        "Protein": 25.2,
        "Fat": 11.1,
        "Carbohydrates": 0.0
    },
    {
        "Id": 70,
        "Name": "Pstrąg tęczowy, świeży",
        "CategoryId": 0,
        "Protein": 18.6,
        "Fat": 9.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 71,
        "Name": "Sandacz, świeży",
        "CategoryId": 0,
        "Protein": 19.2,
        "Fat": 0.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 72,
        "Name": "Sardynka, świeża",
        "CategoryId": 0,
        "Protein": 20.6,
        "Fat": 9.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 73,
        "Name": "Sola, świeża",
        "CategoryId": 0,
        "Protein": 17.5,
        "Fat": 1.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 74,
        "Name": "Śledź, solony",
        "CategoryId": 0,
        "Protein": 19.8,
        "Fat": 15.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 75,
        "Name": "Śledź, świeży",
        "CategoryId": 0,
        "Protein": 16.3,
        "Fat": 10.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 76,
        "Name": "Tuńczyk, świeży",
        "CategoryId": 0,
        "Protein": 23.7,
        "Fat": 4.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 77,
        "Name": "Tuńczyk w sosie własnym puszka Calvo",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 0.9,
        "Carbohydrates": 0.0
    },
    {
        "Id": 78,
        "Name": "Śmietanka 30% Piątnica",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 30.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 79,
        "Name": "Serek śmietankowy naturalny Twój smak puszysty w kubeczku Piątnica",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 23.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 80,
        "Name": "Parówki z mięsa 100% Goodvalley",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 24.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 81,
        "Name": "Boczek w kostce Morliny ",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 28.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 82,
        "Name": "Frankfurterki wędzone Biedronka",
        "CategoryId": 0,
        "Protein": 16.8,
        "Fat": 27.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 83,
        "Name": "Filet wędzony z indyka Lidl ",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 1.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 84,
        "Name": "Kabanos Kapelana",
        "CategoryId": 0,
        "Protein": 13.5,
        "Fat": 12.0,
        "Carbohydrates": 3.7
    },
    {
        "Id": 85,
        "Name": "Kabanosy klasyczne Sokołów",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 30.0,
        "Carbohydrates": 0.6
    },
    {
        "Id": 86,
        "Name": "Kabanosy z filetem z kurczaka Olewnik",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 39.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 87,
        "Name": "Kabanosy z kurcząt Drobimex",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 15.0,
        "Carbohydrates": 0.7
    },
    {
        "Id": 88,
        "Name": "Kaszanka gryczana Olewnik",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 16.0,
        "Carbohydrates": 11.0
    },
    {
        "Id": 89,
        "Name": "Kiełbasa babuni pieczona Sokołów",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 13.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 90,
        "Name": "Kiełbasa biała z szynki Pikok Lidl",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 20.0,
        "Carbohydrates": 0.6
    },
    {
        "Id": 91,
        "Name": "Kiełbasa krakowska sucha Biedronka",
        "CategoryId": 0,
        "Protein": 28.0,
        "Fat": 11.0,
        "Carbohydrates": 0.2
    },
    {
        "Id": 92,
        "Name": "Kiełbasa krucha z galaretką Madej Wróbel",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 27.0,
        "Carbohydrates": 0.2
    },
    {
        "Id": 93,
        "Name": "Kiełbasa myśliwska Krakus",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 20.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 94,
        "Name": "Kiełbasa myśliwska Nasze smaki Biedronka",
        "CategoryId": 0,
        "Protein": 27.0,
        "Fat": 30.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 95,
        "Name": "Kiełbasa podwawelska Sokołów",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 27.0,
        "Carbohydrates": 0.6
    },
    {
        "Id": 96,
        "Name": "Pesto z bazylią Rana Biedronka",
        "CategoryId": 0,
        "Protein": 5.0,
        "Fat": 54.0,
        "Carbohydrates": 12.0
    },
    {
        "Id": 97,
        "Name": "Kiełbaski śląskie z szynki Biedronka",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 19.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 98,
        "Name": "Parówki Piratki Lidl",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 24.0,
        "Carbohydrates": 1.2
    },
    {
        "Id": 99,
        "Name": "Pomidory pelati Cirio w puszce",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.2,
        "Carbohydrates": 4.2
    },
    {
        "Id": 100,
        "Name": "Parówki z indyka Indykpol",
        "CategoryId": 0,
        "Protein": 12.9,
        "Fat": 16.5,
        "Carbohydrates": 0.7
    },
    {
        "Id": 101,
        "Name": "Parówki z szynki Pikok Lidl",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 24.0,
        "Carbohydrates": 1.2
    },
    {
        "Id": 102,
        "Name": "Polędwica sopocka, Sokołów",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 2.6,
        "Carbohydrates": 1.0
    },
    {
        "Id": 103,
        "Name": "Polędwica wieprzowa pieczona Pikok Lidl",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 3.5,
        "Carbohydrates": 0.8
    },
    {
        "Id": 104,
        "Name": "Salami delikatesowe Biedronka",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 30.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 105,
        "Name": "Salami ostródzkie Biedronka",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 41.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 106,
        "Name": "Salami ostródzkie Morliny",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 41.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 107,
        "Name": "Parówki z cielęciną Stara wędzarnia ",
        "CategoryId": 0,
        "Protein": 13.7,
        "Fat": 17.8,
        "Carbohydrates": 0.5
    },
    {
        "Id": 108,
        "Name": "Szynka krucha Kraina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 3.2,
        "Carbohydrates": 0.3
    },
    {
        "Id": 109,
        "Name": "Szynka z wędzarni H.Kania Biedronka",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 3.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 110,
        "Name": "Parówki Goodvalley",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 24.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 111,
        "Name": "Kabanosy francuskie Gold Sokołów",
        "CategoryId": 0,
        "Protein": 26.0,
        "Fat": 50.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 112,
        "Name": "Salami Chips Sokołów",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 44.0,
        "Carbohydrates": 2.8
    },
    {
        "Id": 113,
        "Name": "Serek kremowy Apetina ",
        "CategoryId": 0,
        "Protein": 7.8,
        "Fat": 16.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 114,
        "Name": "Ser Feta Apetina Classic Arla",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 17.0,
        "Carbohydrates": 3.9
    },
    {
        "Id": 115,
        "Name": "Ser Feta Athos",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 24.2,
        "Carbohydrates": 0.2
    },
    {
        "Id": 116,
        "Name": "Mascarpone Piątnica",
        "CategoryId": 0,
        "Protein": 3.5,
        "Fat": 40.0,
        "Carbohydrates": 5.1
    },
    {
        "Id": 117,
        "Name": "Mascarpone Formagia",
        "CategoryId": 0,
        "Protein": 4.2,
        "Fat": 40.0,
        "Carbohydrates": 2.1
    },
    {
        "Id": 118,
        "Name": "Serek śmietankowy w plastrach Milandia Piątnica",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 29.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 119,
        "Name": "Mozarela latteo OSM Grodzisk Maz.",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 17.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 120,
        "Name": "Mozarellaw kawałku Galbani ",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 20.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 121,
        "Name": "Mozzarella mini latteo OSM Grodzisk Maz.",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 17.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 122,
        "Name": "Oscypek Mlekovita",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 18.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 123,
        "Name": "Oscypek ser Janosika Milkeffekt",
        "CategoryId": 0,
        "Protein": 29.0,
        "Fat": 25.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 124,
        "Name": "Ricotta Tesco",
        "CategoryId": 0,
        "Protein": 7.4,
        "Fat": 10.7,
        "Carbohydrates": 2.5
    },
    {
        "Id": 125,
        "Name": "Ser cheddar Światowid Biedronka",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 35.0,
        "Carbohydrates": 0.2
    },
    {
        "Id": 126,
        "Name": "Ser Edamski Biedronka",
        "CategoryId": 0,
        "Protein": 26.0,
        "Fat": 27.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 127,
        "Name": "Ser Gouda Biedronka",
        "CategoryId": 0,
        "Protein": 26.0,
        "Fat": 27.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 128,
        "Name": "Ser Gouda plastry Mlekovita",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 26.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 129,
        "Name": "Ser kozi Euroser",
        "CategoryId": 0,
        "Protein": 23.0,
        "Fat": 32.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 130,
        "Name": "Ser kozi Milbona Lidl",
        "CategoryId": 0,
        "Protein": 25.2,
        "Fat": 30.2,
        "Carbohydrates": 0.0
    },
    {
        "Id": 131,
        "Name": "Ser kozi w plastrach Euroser",
        "CategoryId": 0,
        "Protein": 23.0,
        "Fat": 32.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 132,
        "Name": "Ser twarogowy śmietankowy MONA ",
        "CategoryId": 0,
        "Protein": 11.3,
        "Fat": 16.5,
        "Carbohydrates": 1.6
    },
    {
        "Id": 133,
        "Name": "Ser tylżycki wędzony Biedronka",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 26.0,
        "Carbohydrates": 0.1
    },
    {
        "Id": 134,
        "Name": "Ser wędzony Jadel Pilos Lidl",
        "CategoryId": 0,
        "Protein": 23.5,
        "Fat": 20.2,
        "Carbohydrates": 1.5
    },
    {
        "Id": 135,
        "Name": "Ser warkocze wędzone",
        "CategoryId": 0,
        "Protein": 28.0,
        "Fat": 29.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 136,
        "Name": "Serek Nasz kremowy z ziołami NaTurek",
        "CategoryId": 0,
        "Protein": 7.3,
        "Fat": 18.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 137,
        "Name": "Serek śmietankowy Hochland trójkaty",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 19.0,
        "Carbohydrates": 6.5
    },
    {
        "Id": 138,
        "Name": "Serek śmietankowy Krówka OSM Rawicz",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 18.0,
        "Carbohydrates": 1.6
    },
    {
        "Id": 139,
        "Name": "Serek śmietankowy puszysty Delikate Biedronka",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 23.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 140,
        "Name": "Serek wiejski ziarnisty Piątnica",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 5.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 141,
        "Name": "Twaróg 0% President",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 0.0,
        "Carbohydrates": 2.5
    },
    {
        "Id": 142,
        "Name": "Twaróg sernikowy 18% 3,2g W wiaderko Piątnica",
        "CategoryId": 0,
        "Protein": 8.0,
        "Fat": 18.0,
        "Carbohydrates": 3.2
    },
    {
        "Id": 143,
        "Name": "Twaróg sernikowy 18% 2,6g W wiaderko Piątnica",
        "CategoryId": 0,
        "Protein": 8.0,
        "Fat": 18.0,
        "Carbohydrates": 2.6
    },
    {
        "Id": 144,
        "Name": "Twaróg tłusty Mazurski Smak Mlekpol",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 8.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 145,
        "Name": "Twaróg tłusty wiejski Piątnica",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 8.0,
        "Carbohydrates": 3.7
    },
    {
        "Id": 146,
        "Name": "Twaróg wędzony Łowicz",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 17.0,
        "Carbohydrates": 1.6
    },
    {
        "Id": 147,
        "Name": "Cheddar Smaki swiata Biedronka",
        "CategoryId": 0,
        "Protein": 25.4,
        "Fat": 34.9,
        "Carbohydrates": 0.0
    },
    {
        "Id": 148,
        "Name": "Mleko kobiece",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 4.3,
        "Carbohydrates": 7.0
    },
    {
        "Id": 149,
        "Name": "Mleko 2%",
        "CategoryId": 0,
        "Protein": 3.3,
        "Fat": 2.0,
        "Carbohydrates": 4.8
    },
    {
        "Id": 150,
        "Name": "Napój owsiany Barista gluten free oats drink",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 1.8,
        "Carbohydrates": 6.0
    },
    {
        "Id": 151,
        "Name": "Twaróg tłusty Pilos z Lidla",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 8.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 152,
        "Name": "Mleko 3,2% Mlekovita",
        "CategoryId": 0,
        "Protein": 3.0,
        "Fat": 3.2,
        "Carbohydrates": 4.7
    },
    {
        "Id": 153,
        "Name": "Mleczko kokosowe Vitasia",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 21.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 154,
        "Name": "Mleko 2% bez laktozy Piątnica",
        "CategoryId": 0,
        "Protein": 3.9,
        "Fat": 2.0,
        "Carbohydrates": 2.6
    },
    {
        "Id": 155,
        "Name": "Mleko kozie",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 33.0,
        "Carbohydrates": 32.0
    },
    {
        "Id": 156,
        "Name": "Keczup łagodny Heinz",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 0.1,
        "Carbohydrates": 23.2
    },
    {
        "Id": 157,
        "Name": "Napój sojowy oryginalny Alpro",
        "CategoryId": 0,
        "Protein": 3.0,
        "Fat": 1.8,
        "Carbohydrates": 2.5
    },
    {
        "Id": 158,
        "Name": "Napój sojowy Alpro Light  Fresh",
        "CategoryId": 0,
        "Protein": 2.0,
        "Fat": 1.2,
        "Carbohydrates": 0.1
    },
    {
        "Id": 159,
        "Name": "Napój migdałowy Organic Sante",
        "CategoryId": 0,
        "Protein": 0.3,
        "Fat": 1.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 160,
        "Name": "Jogurt bio jagoda Bakoma",
        "CategoryId": 0,
        "Protein": 3.4,
        "Fat": 2.5,
        "Carbohydrates": 14.2
    },
    {
        "Id": 161,
        "Name": "Jogurt bio owoce leśne Bakoma",
        "CategoryId": 0,
        "Protein": 3.4,
        "Fat": 2.5,
        "Carbohydrates": 14.2
    },
    {
        "Id": 162,
        "Name": "Serek naturalny Bieluch",
        "CategoryId": 0,
        "Protein": 8.6,
        "Fat": 8.5,
        "Carbohydrates": 4.0
    },
    {
        "Id": 163,
        "Name": "Jogurt naturalny Bio Bakoma",
        "CategoryId": 0,
        "Protein": 4.5,
        "Fat": 2.0,
        "Carbohydrates": 6.8
    },
    {
        "Id": 164,
        "Name": "Śmietana 22% Szefa Kuchni Danone",
        "CategoryId": 0,
        "Protein": 2.8,
        "Fat": 22.0,
        "Carbohydrates": 3.2
    },
    {
        "Id": 165,
        "Name": "Ser kozi Danmis ",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 12.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 166,
        "Name": "Jogurt naturalny łagodny Danone",
        "CategoryId": 0,
        "Protein": 4.6,
        "Fat": 3.0,
        "Carbohydrates": 5.8
    },
    {
        "Id": 167,
        "Name": "Jogurt Day up Yellow",
        "CategoryId": 0,
        "Protein": 2.3,
        "Fat": 2.8,
        "Carbohydrates": 14.8
    },
    {
        "Id": 168,
        "Name": "Jogurt grecki Pilos Lidl",
        "CategoryId": 0,
        "Protein": 4.0,
        "Fat": 10.0,
        "Carbohydrates": 5.5
    },
    {
        "Id": 169,
        "Name": "Jogurt kokosowy Planton",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 7.1,
        "Carbohydrates": 6.7
    },
    {
        "Id": 170,
        "Name": "Jogurt naturalny Piątnica",
        "CategoryId": 0,
        "Protein": 4.0,
        "Fat": 2.0,
        "Carbohydrates": 5.9
    },
    {
        "Id": 171,
        "Name": "Jogurt naturalny Zott",
        "CategoryId": 0,
        "Protein": 4.8,
        "Fat": 3.1,
        "Carbohydrates": 4.0
    },
    {
        "Id": 172,
        "Name": "Jogurt naturalny typu greckiego 0% Tolonis Biedronka",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 0.0,
        "Carbohydrates": 4.6
    },
    {
        "Id": 173,
        "Name": "Jogurt typu islandzkiego jagoda skyr FruVita Biedronka",
        "CategoryId": 0,
        "Protein": 9.6,
        "Fat": 0.0,
        "Carbohydrates": 11.0
    },
    {
        "Id": 174,
        "Name": "Śliwka suszona BakaDor Biedronka",
        "CategoryId": 0,
        "Protein": 3.3,
        "Fat": 2.2,
        "Carbohydrates": 59.0
    },
    {
        "Id": 175,
        "Name": "Mascarpone Tesco",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 44.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 176,
        "Name": "ser kozi Pilos Lidl",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 19.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 177,
        "Name": "Rosół czysty",
        "CategoryId": 0,
        "Protein": 0.5,
        "Fat": 0.4,
        "Carbohydrates": 0.37
    },
    {
        "Id": 178,
        "Name": "Twaróg półtłusty Pilos Lidl",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 4.0,
        "Carbohydrates": 3.7
    },
    {
        "Id": 179,
        "Name": "Twaróg półtłusty Włoszczowa",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 5.8,
        "Carbohydrates": 3.3
    },
    {
        "Id": 180,
        "Name": "Twaróg tłusty Milsani",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 8.0,
        "Carbohydrates": 3.1
    },
    {
        "Id": 181,
        "Name": "Guma guar Glutenex",
        "CategoryId": 0,
        "Protein": 4.5,
        "Fat": 0.6,
        "Carbohydrates": 1.0
    },
    {
        "Id": 182,
        "Name": "Twaróg  tłusty Mlekpol",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 8.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 183,
        "Name": "Twaróg półtłusty Ulubiony Polmlek",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 4.2,
        "Carbohydrates": 3.4
    },
    {
        "Id": 184,
        "Name": "Twaróg tłusty Ulubiony",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 9.7,
        "Carbohydrates": 3.6
    },
    {
        "Id": 185,
        "Name": "Dynia, pestki",
        "CategoryId": 0,
        "Protein": 24.5,
        "Fat": 45.8,
        "Carbohydrates": 12.7
    },
    {
        "Id": 186,
        "Name": "Len mielony odtłuszczony BioAvena",
        "CategoryId": 0,
        "Protein": 40.0,
        "Fat": 9.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 187,
        "Name": "Len, nasiona",
        "CategoryId": 0,
        "Protein": 24.5,
        "Fat": 31.0,
        "Carbohydrates": 31.1
    },
    {
        "Id": 188,
        "Name": "Mak niebieski",
        "CategoryId": 0,
        "Protein": 20.1,
        "Fat": 42.9,
        "Carbohydrates": 4.2
    },
    {
        "Id": 189,
        "Name": "Masło migdałowe prażone Primavika",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 52.0,
        "Carbohydrates": 19.0
    },
    {
        "Id": 190,
        "Name": "Chia Melvit",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 31.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 191,
        "Name": "Chia Sante",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 34.0,
        "Carbohydrates": 0.7
    },
    {
        "Id": 192,
        "Name": "Orzechy brazylijskie Bakalland",
        "CategoryId": 0,
        "Protein": 14.3,
        "Fat": 66.4,
        "Carbohydrates": 4.8
    },
    {
        "Id": 193,
        "Name": "Orzechy macadamia bez soli Helio",
        "CategoryId": 0,
        "Protein": 7.9,
        "Fat": 76.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 194,
        "Name": "Orzechy pecan Helio",
        "CategoryId": 0,
        "Protein": 9.2,
        "Fat": 72.0,
        "Carbohydrates": 4.3
    },
    {
        "Id": 195,
        "Name": "Orzechy włoskie Alesto Lidl",
        "CategoryId": 0,
        "Protein": 15.5,
        "Fat": 69.1,
        "Carbohydrates": 3.7
    },
    {
        "Id": 196,
        "Name": "Orzechy włoskie Biedronka",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 60.0,
        "Carbohydrates": 12.0
    },
    {
        "Id": 197,
        "Name": "Quinoa Melvit",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 6.7,
        "Carbohydrates": 55.0
    },
    {
        "Id": 198,
        "Name": "Sezam biały Helio i wiodąca Marka Leclerc",
        "CategoryId": 0,
        "Protein": 23.0,
        "Fat": 60.0,
        "Carbohydrates": 2.1
    },
    {
        "Id": 199,
        "Name": "Słonecznik, nasiona",
        "CategoryId": 0,
        "Protein": 24.4,
        "Fat": 43.7,
        "Carbohydrates": 18.6
    },
    {
        "Id": 200,
        "Name": "Wiórki kokosowe Tesco",
        "CategoryId": 0,
        "Protein": 5.6,
        "Fat": 63.2,
        "Carbohydrates": 5.9
    },
    {
        "Id": 201,
        "Name": "Pasta z orzechów laskowych  EkoGram",
        "CategoryId": 0,
        "Protein": 11.6,
        "Fat": 67.5,
        "Carbohydrates": 11.0
    },
    {
        "Id": 202,
        "Name": "Chia",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 32.8,
        "Carbohydrates": 3.3
    },
    {
        "Id": 203,
        "Name": "Czarnuszka",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 15.0,
        "Carbohydrates": 52.0
    },
    {
        "Id": 204,
        "Name": "Masło z orzechów laskowych EkoGram the real hazelnut past",
        "CategoryId": 0,
        "Protein": 11.6,
        "Fat": 67.5,
        "Carbohydrates": 11.0
    },
    {
        "Id": 205,
        "Name": "Masło z pekanów Purely Pecans",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 72.0,
        "Carbohydrates": 12.0
    },
    {
        "Id": 206,
        "Name": "Oliwki zielone bez pestek Eridanous Lidl",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 20.7,
        "Carbohydrates": 0.1
    },
    {
        "Id": 207,
        "Name": "Orzechy laskowe Sante",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 61.0,
        "Carbohydrates": 3.4
    },
    {
        "Id": 208,
        "Name": "Orzechy pecan Lidl",
        "CategoryId": 0,
        "Protein": 10.1,
        "Fat": 72.1,
        "Carbohydrates": 5.2
    },
    {
        "Id": 209,
        "Name": "Ostropest plamisty mielony",
        "CategoryId": 0,
        "Protein": 34.0,
        "Fat": 11.0,
        "Carbohydrates": 5.1
    },
    {
        "Id": 210,
        "Name": "Agrest",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.2,
        "Carbohydrates": 8.8
    },
    {
        "Id": 211,
        "Name": "Ananas",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 0.2,
        "Carbohydrates": 12.4
    },
    {
        "Id": 212,
        "Name": "Arbuz",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 0.1,
        "Carbohydrates": 8.1
    },
    {
        "Id": 213,
        "Name": "Awokado Hass",
        "CategoryId": 0,
        "Protein": 1.96,
        "Fat": 15.41,
        "Carbohydrates": 1.84
    },
    {
        "Id": 214,
        "Name": "Awokado zwykłe",
        "CategoryId": 0,
        "Protein": 2.0,
        "Fat": 15.3,
        "Carbohydrates": 4.1
    },
    {
        "Id": 215,
        "Name": "Banan",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.3,
        "Carbohydrates": 21.8
    },
    {
        "Id": 216,
        "Name": "Borówka amerykańska",
        "CategoryId": 0,
        "Protein": 0.74,
        "Fat": 0.33,
        "Carbohydrates": 14.5
    },
    {
        "Id": 217,
        "Name": "Brzoskwinia",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 10.0
    },
    {
        "Id": 218,
        "Name": "Cytryna",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.3,
        "Carbohydrates": 7.5
    },
    {
        "Id": 219,
        "Name": "Cytryna, sok",
        "CategoryId": 0,
        "Protein": 0.35,
        "Fat": 0.24,
        "Carbohydrates": 6.9
    },
    {
        "Id": 220,
        "Name": "Czarne jagody",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.6,
        "Carbohydrates": 9.0
    },
    {
        "Id": 221,
        "Name": "Czereśnie",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.3,
        "Carbohydrates": 13.3
    },
    {
        "Id": 222,
        "Name": "Gerber jabłko brzoskwinia",
        "CategoryId": 0,
        "Protein": 0.3,
        "Fat": 0.1,
        "Carbohydrates": 10.5
    },
    {
        "Id": 223,
        "Name": "Gerber jabłko morela",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 0.1,
        "Carbohydrates": 10.7
    },
    {
        "Id": 224,
        "Name": "Gerber jabłko, jagoda, banan",
        "CategoryId": 0,
        "Protein": 0.2,
        "Fat": 0.1,
        "Carbohydrates": 11.4
    },
    {
        "Id": 225,
        "Name": "Grejpfrut",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 0.2,
        "Carbohydrates": 7.9
    },
    {
        "Id": 226,
        "Name": "Gruszka",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 0.2,
        "Carbohydrates": 12.3
    },
    {
        "Id": 227,
        "Name": "Gujawa",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.6,
        "Carbohydrates": 7.2
    },
    {
        "Id": 228,
        "Name": "Jabłko",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 0.4,
        "Carbohydrates": 10.1
    },
    {
        "Id": 229,
        "Name": "Jagody mrożone Hortex",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.6,
        "Carbohydrates": 9.0
    },
    {
        "Id": 230,
        "Name": "Jeżyna mrożona Lidl Devaldano",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 1.0,
        "Carbohydrates": 6.2
    },
    {
        "Id": 231,
        "Name": "Kiwi",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.5,
        "Carbohydrates": 11.8
    },
    {
        "Id": 232,
        "Name": "Maliny",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.3,
        "Carbohydrates": 5.3
    },
    {
        "Id": 233,
        "Name": "Maliny mrożone Hortex",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.3,
        "Carbohydrates": 5.3
    },
    {
        "Id": 234,
        "Name": "Maliny mrożone Lidl",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.3,
        "Carbohydrates": 5.3
    },
    {
        "Id": 235,
        "Name": "Mandarynki",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 0.2,
        "Carbohydrates": 9.3
    },
    {
        "Id": 236,
        "Name": "Mango",
        "CategoryId": 0,
        "Protein": 0.5,
        "Fat": 0.3,
        "Carbohydrates": 15.3
    },
    {
        "Id": 237,
        "Name": "Melon",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.3,
        "Carbohydrates": 7.4
    },
    {
        "Id": 238,
        "Name": "Morele",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.2,
        "Carbohydrates": 10.2
    },
    {
        "Id": 239,
        "Name": "Nektarynka",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.2,
        "Carbohydrates": 10.6
    },
    {
        "Id": 240,
        "Name": "Papaja",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 0.1,
        "Carbohydrates": 9.2
    },
    {
        "Id": 241,
        "Name": "Pomarańcza",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.2,
        "Carbohydrates": 9.4
    },
    {
        "Id": 242,
        "Name": "Porzeczki białe",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 6.7
    },
    {
        "Id": 243,
        "Name": "Porzeczki czarne",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.2,
        "Carbohydrates": 7.1
    },
    {
        "Id": 244,
        "Name": "Porzeczki czerwone",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.2,
        "Carbohydrates": 6.1
    },
    {
        "Id": 245,
        "Name": "Poziomki",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.5,
        "Carbohydrates": 6.3
    },
    {
        "Id": 246,
        "Name": "Śliwki",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 0.2,
        "Carbohydrates": 10.1
    },
    {
        "Id": 247,
        "Name": "Truskawki",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.4,
        "Carbohydrates": 5.8
    },
    {
        "Id": 248,
        "Name": "Truskawki liofilizowane Frupp Celiko",
        "CategoryId": 0,
        "Protein": 8.0,
        "Fat": 4.0,
        "Carbohydrates": 55.0
    },
    {
        "Id": 249,
        "Name": "Truskawki mrożone Hortex",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.3,
        "Carbohydrates": 5.4
    },
    {
        "Id": 250,
        "Name": "Truskawki mrożone Lidl",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.4,
        "Carbohydrates": 5.4
    },
    {
        "Id": 251,
        "Name": "Winogrona",
        "CategoryId": 0,
        "Protein": 0.5,
        "Fat": 0.2,
        "Carbohydrates": 16.1
    },
    {
        "Id": 252,
        "Name": "Wiśnie",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.4,
        "Carbohydrates": 9.9
    },
    {
        "Id": 253,
        "Name": "Jagoda kamczacka",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.4,
        "Carbohydrates": 8.0
    },
    {
        "Id": 254,
        "Name": "Bakłażan",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.1,
        "Carbohydrates": 3.8
    },
    {
        "Id": 255,
        "Name": "Boćwina",
        "CategoryId": 0,
        "Protein": 2.1,
        "Fat": 0.5,
        "Carbohydrates": 1.1
    },
    {
        "Id": 256,
        "Name": "Bób",
        "CategoryId": 0,
        "Protein": 7.1,
        "Fat": 0.4,
        "Carbohydrates": 8.2
    },
    {
        "Id": 257,
        "Name": "Brokuły gotowane w wodzie",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 0.3,
        "Carbohydrates": 2.0
    },
    {
        "Id": 258,
        "Name": "Brokuły mrożone różyczki Chira Lidl",
        "CategoryId": 0,
        "Protein": 2.7,
        "Fat": 0.1,
        "Carbohydrates": 2.4
    },
    {
        "Id": 259,
        "Name": "Brokuły",
        "CategoryId": 0,
        "Protein": 3.0,
        "Fat": 0.4,
        "Carbohydrates": 2.7
    },
    {
        "Id": 260,
        "Name": "Brukselka",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 0.5,
        "Carbohydrates": 3.3
    },
    {
        "Id": 261,
        "Name": "Brukselka gotowana w wodzie",
        "CategoryId": 0,
        "Protein": 4.2,
        "Fat": 0.5,
        "Carbohydrates": 2.9
    },
    {
        "Id": 262,
        "Name": "Burak",
        "CategoryId": 0,
        "Protein": 1.8,
        "Fat": 0.1,
        "Carbohydrates": 7.3
    },
    {
        "Id": 263,
        "Name": "Burak suszony Zdrowe Pola Rossmann",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 0.0,
        "Carbohydrates": 50.0
    },
    {
        "Id": 264,
        "Name": "Burak gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.1,
        "Carbohydrates": 6.5
    },
    {
        "Id": 265,
        "Name": "Burak gotowany Lidl ",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 0.0,
        "Carbohydrates": 5.8
    },
    {
        "Id": 266,
        "Name": "Cebula",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.4,
        "Carbohydrates": 5.2
    },
    {
        "Id": 267,
        "Name": "Chrzan korzeń",
        "CategoryId": 0,
        "Protein": 4.5,
        "Fat": 0.6,
        "Carbohydrates": 10.8
    },
    {
        "Id": 268,
        "Name": "Chrzan Proeco ",
        "CategoryId": 0,
        "Protein": 2.1,
        "Fat": 8.1,
        "Carbohydrates": 9.5
    },
    {
        "Id": 269,
        "Name": "Cukinia",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 0.1,
        "Carbohydrates": 2.2
    },
    {
        "Id": 270,
        "Name": "Cykoria",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 0.2,
        "Carbohydrates": 3.1
    },
    {
        "Id": 271,
        "Name": "Czosnek",
        "CategoryId": 0,
        "Protein": 6.4,
        "Fat": 0.5,
        "Carbohydrates": 28.5
    },
    {
        "Id": 272,
        "Name": "Dynia",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.3,
        "Carbohydrates": 4.9
    },
    {
        "Id": 273,
        "Name": "Fasola biała, nasiona suche",
        "CategoryId": 0,
        "Protein": 21.4,
        "Fat": 1.6,
        "Carbohydrates": 45.9
    },
    {
        "Id": 274,
        "Name": "Fasola mung, kiełki",
        "CategoryId": 0,
        "Protein": 3.0,
        "Fat": 0.4,
        "Carbohydrates": 3.2
    },
    {
        "Id": 275,
        "Name": "Fasolka szparagowa",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 0.2,
        "Carbohydrates": 5.0
    },
    {
        "Id": 276,
        "Name": "Fasolka szparagowa gotowana w wodzie",
        "CategoryId": 0,
        "Protein": 2.1,
        "Fat": 0.2,
        "Carbohydrates": 4.5
    },
    {
        "Id": 277,
        "Name": "Fasolka szparagowa mrożona cięta Chira Lidl",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 0.1,
        "Carbohydrates": 3.3
    },
    {
        "Id": 278,
        "Name": "Groch, nasiona suche",
        "CategoryId": 0,
        "Protein": 23.8,
        "Fat": 1.4,
        "Carbohydrates": 45.2
    },
    {
        "Id": 279,
        "Name": "Groszek zielony",
        "CategoryId": 0,
        "Protein": 6.7,
        "Fat": 0.4,
        "Carbohydrates": 11.0
    },
    {
        "Id": 280,
        "Name": "Groszek zielony Chira Lidl konserwa",
        "CategoryId": 0,
        "Protein": 5.0,
        "Fat": 0.7,
        "Carbohydrates": 8.6
    },
    {
        "Id": 281,
        "Name": "Groszek zielony gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 0.4,
        "Carbohydrates": 9.9
    },
    {
        "Id": 282,
        "Name": "Hummus klasyczny Sante",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 28.0,
        "Carbohydrates": 10.0
    },
    {
        "Id": 283,
        "Name": "Jarmuż",
        "CategoryId": 0,
        "Protein": 3.3,
        "Fat": 0.7,
        "Carbohydrates": 2.3
    },
    {
        "Id": 284,
        "Name": "Kalafior",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 0.2,
        "Carbohydrates": 2.6
    },
    {
        "Id": 285,
        "Name": "Kalafior gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 1.8,
        "Fat": 0.1,
        "Carbohydrates": 1.9
    },
    {
        "Id": 286,
        "Name": "Kalarepa",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 0.3,
        "Carbohydrates": 4.3
    },
    {
        "Id": 287,
        "Name": "Kapusta biała",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 0.2,
        "Carbohydrates": 4.9
    },
    {
        "Id": 288,
        "Name": "Kapusta czerwona",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.2,
        "Carbohydrates": 4.2
    },
    {
        "Id": 289,
        "Name": "Kapusta kiszona Lidl",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.0,
        "Carbohydrates": 2.7
    },
    {
        "Id": 290,
        "Name": "Kapusta kwaszona Biedronka",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.2,
        "Carbohydrates": 1.3
    },
    {
        "Id": 291,
        "Name": "Kapusta pekińska",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 0.2,
        "Carbohydrates": 1.3
    },
    {
        "Id": 292,
        "Name": "Kapusta włoska",
        "CategoryId": 0,
        "Protein": 3.3,
        "Fat": 0.4,
        "Carbohydrates": 5.2
    },
    {
        "Id": 293,
        "Name": "Ketchup Hellmans ze stewią",
        "CategoryId": 0,
        "Protein": 0.2,
        "Fat": 0.2,
        "Carbohydrates": 11.0
    },
    {
        "Id": 294,
        "Name": "Kiełki brokułu Uniflora",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 1.3,
        "Carbohydrates": 4.6
    },
    {
        "Id": 295,
        "Name": "Kiełki brokułu Vital Fresh Biedronka",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 1.3,
        "Carbohydrates": 4.6
    },
    {
        "Id": 296,
        "Name": "Kiełki lucerny Uniflora",
        "CategoryId": 0,
        "Protein": 2.5,
        "Fat": 0.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 297,
        "Name": "Kiełki rzodkiewki Uniflora",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 1.2,
        "Carbohydrates": 5.3
    },
    {
        "Id": 298,
        "Name": "Koper ogrodowy",
        "CategoryId": 0,
        "Protein": 2.8,
        "Fat": 0.4,
        "Carbohydrates": 2.8
    },
    {
        "Id": 299,
        "Name": "Kukurydza złocista, Bonduelle konserwowa",
        "CategoryId": 0,
        "Protein": 2.9,
        "Fat": 1.9,
        "Carbohydrates": 10.8
    },
    {
        "Id": 300,
        "Name": "Kukurydza, kolby",
        "CategoryId": 0,
        "Protein": 3.7,
        "Fat": 1.5,
        "Carbohydrates": 20.1
    },
    {
        "Id": 301,
        "Name": "Marchew",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 5.1
    },
    {
        "Id": 302,
        "Name": "Marchew gotowana w wodzie",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.2,
        "Carbohydrates": 4.6
    },
    {
        "Id": 303,
        "Name": "Mix sałat z rukolą fioletowy Lidl",
        "CategoryId": 0,
        "Protein": 2.0,
        "Fat": 0.2,
        "Carbohydrates": 0.9
    },
    {
        "Id": 304,
        "Name": "Mix sałat ze szpinakiem niebieski Lidl",
        "CategoryId": 0,
        "Protein": 1.8,
        "Fat": 0.1,
        "Carbohydrates": 0.7
    },
    {
        "Id": 305,
        "Name": "Mix sałatkowy Europeano zielony Lidl",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.2,
        "Carbohydrates": 0.8
    },
    {
        "Id": 306,
        "Name": "Ogórek zielony",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.1,
        "Carbohydrates": 2.4
    },
    {
        "Id": 307,
        "Name": "Ogórki kiszone Lidl",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 308,
        "Name": "Ogórki kwaszone Biedronka",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.1,
        "Carbohydrates": 1.4
    },
    {
        "Id": 309,
        "Name": "Oliwki zielone Biedronka",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 15.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 310,
        "Name": "Papryka czerwona",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.5,
        "Carbohydrates": 4.6
    },
    {
        "Id": 311,
        "Name": "Papryka zielona",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.3,
        "Carbohydrates": 2.6
    },
    {
        "Id": 312,
        "Name": "Passata pomidorowa z ziołami Biedronka",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 0.1,
        "Carbohydrates": 4.4
    },
    {
        "Id": 313,
        "Name": "Pasternak",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.6,
        "Carbohydrates": 11.0
    },
    {
        "Id": 314,
        "Name": "Pieczarki",
        "CategoryId": 0,
        "Protein": 2.7,
        "Fat": 0.4,
        "Carbohydrates": 0.6
    },
    {
        "Id": 315,
        "Name": "Pietruszka, korzeń",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 0.5,
        "Carbohydrates": 6.3
    },
    {
        "Id": 316,
        "Name": "Pietruszka, liście",
        "CategoryId": 0,
        "Protein": 4.4,
        "Fat": 0.4,
        "Carbohydrates": 4.8
    },
    {
        "Id": 317,
        "Name": "Pomidor",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.2,
        "Carbohydrates": 2.9
    },
    {
        "Id": 318,
        "Name": "Pomidory Barilla",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 2.7,
        "Carbohydrates": 6.8
    },
    {
        "Id": 319,
        "Name": "Pomidory pelati Freshona Lidl",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.1,
        "Carbohydrates": 3.1
    },
    {
        "Id": 320,
        "Name": "Por",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 0.3,
        "Carbohydrates": 3.0
    },
    {
        "Id": 321,
        "Name": "Przecier pomidorowy Łowicz",
        "CategoryId": 0,
        "Protein": 1.25,
        "Fat": 0.5,
        "Carbohydrates": 3.75
    },
    {
        "Id": 322,
        "Name": "Rabarbar",
        "CategoryId": 0,
        "Protein": 0.5,
        "Fat": 0.1,
        "Carbohydrates": 1.4
    },
    {
        "Id": 323,
        "Name": "Rukola Vital Fresh myta Biedronka",
        "CategoryId": 0,
        "Protein": 3.8,
        "Fat": 0.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 324,
        "Name": "Rzepa",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.3,
        "Carbohydrates": 4.7
    },
    {
        "Id": 325,
        "Name": "Rzodkiewka",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 1.9
    },
    {
        "Id": 326,
        "Name": "Sałata",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.2,
        "Carbohydrates": 1.5
    },
    {
        "Id": 327,
        "Name": "Seler cięty, Chira Lidl",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.2,
        "Carbohydrates": 5.5
    },
    {
        "Id": 328,
        "Name": "Seler cięty, Develey",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.2,
        "Carbohydrates": 5.5
    },
    {
        "Id": 329,
        "Name": "Seler korzeniowy",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.3,
        "Carbohydrates": 2.8
    },
    {
        "Id": 330,
        "Name": "Seler naciowy",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 1.8
    },
    {
        "Id": 331,
        "Name": "Seler wiórki Nasza Spiżarnia Biedronka",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.1,
        "Carbohydrates": 5.7
    },
    {
        "Id": 332,
        "Name": "Soczewica czerwona sucha Lidl",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 3.0,
        "Carbohydrates": 49.0
    },
    {
        "Id": 333,
        "Name": "Soczewica czerwona, nasiona suche",
        "CategoryId": 0,
        "Protein": 25.4,
        "Fat": 3.0,
        "Carbohydrates": 48.6
    },
    {
        "Id": 334,
        "Name": "Soczewica, kiełki",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 0.6,
        "Carbohydrates": 19.1
    },
    {
        "Id": 335,
        "Name": "Soja, kiełki",
        "CategoryId": 0,
        "Protein": 13.1,
        "Fat": 6.7,
        "Carbohydrates": 7.0
    },
    {
        "Id": 336,
        "Name": "Soja, nasiona suche",
        "CategoryId": 0,
        "Protein": 34.3,
        "Fat": 19.6,
        "Carbohydrates": 17.0
    },
    {
        "Id": 337,
        "Name": "Szczaw",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.8,
        "Carbohydrates": 2.3
    },
    {
        "Id": 338,
        "Name": "Szczypiorek",
        "CategoryId": 0,
        "Protein": 4.1,
        "Fat": 0.8,
        "Carbohydrates": 1.7
    },
    {
        "Id": 339,
        "Name": "Szparagi",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.2,
        "Carbohydrates": 2.2
    },
    {
        "Id": 340,
        "Name": "Szpinak",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 0.4,
        "Carbohydrates": 0.9
    },
    {
        "Id": 341,
        "Name": "Groszek zielony Bonduelle konserwa",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 1.0,
        "Carbohydrates": 7.1
    },
    {
        "Id": 342,
        "Name": "Ziemniaki gotowane w wodzie",
        "CategoryId": 0,
        "Protein": 1.8,
        "Fat": 0.1,
        "Carbohydrates": 15.0
    },
    {
        "Id": 343,
        "Name": "Ziemniaki, późne",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.1,
        "Carbohydrates": 18.9
    },
    {
        "Id": 344,
        "Name": "Ziemniaki, średnio",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.1,
        "Carbohydrates": 16.8
    },
    {
        "Id": 345,
        "Name": "Ziemniaki, wczesne",
        "CategoryId": 0,
        "Protein": 1.8,
        "Fat": 0.1,
        "Carbohydrates": 15.0
    },
    {
        "Id": 346,
        "Name": "Oliwki zielone z migdałami Elios Biedronka",
        "CategoryId": 0,
        "Protein": 3.6,
        "Fat": 21.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 347,
        "Name": "Przecier pomidorowy Sottile Gusto Biedronka",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.5,
        "Carbohydrates": 4.6
    },
    {
        "Id": 348,
        "Name": "Koncentrat pomidorowy Pudliszki",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 0.2,
        "Carbohydrates": 19.0
    },
    {
        "Id": 349,
        "Name": "Passata pomidorowa Dawtona",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.0,
        "Carbohydrates": 3.8
    },
    {
        "Id": 350,
        "Name": "Chleb Pro Body Putka 5,5g W",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 18.4,
        "Carbohydrates": 5.5
    },
    {
        "Id": 351,
        "Name": "Chleb Pro Body Putka 6,1g W",
        "CategoryId": 0,
        "Protein": 21.4,
        "Fat": 16.8,
        "Carbohydrates": 6.1
    },
    {
        "Id": 352,
        "Name": "Kleik ryżowy Nestle",
        "CategoryId": 0,
        "Protein": 6.5,
        "Fat": 1.0,
        "Carbohydrates": 86.5
    },
    {
        "Id": 353,
        "Name": "Makaron Diet Pasta-Diet Food",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 354,
        "Name": "Makaron Slim noodles Decare",
        "CategoryId": 0,
        "Protein": 0.2,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 355,
        "Name": "Makaron ugotowany Pastani pełnoziarnisty fusilli Biedronka",
        "CategoryId": 0,
        "Protein": 7.1,
        "Fat": 1.4,
        "Carbohydrates": 26.0
    },
    {
        "Id": 356,
        "Name": "Mąka kokosowa Bio-SuperFoods",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 10.0,
        "Carbohydrates": 4.0
    },
    {
        "Id": 357,
        "Name": "Mąka kokosowa Coco farm Bio",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 19.0,
        "Carbohydrates": 19.0
    },
    {
        "Id": 358,
        "Name": "Mąka kokosowa ekologiczna RadixBis Sp zoo",
        "CategoryId": 0,
        "Protein": 16.2,
        "Fat": 12.0,
        "Carbohydrates": 15.0
    },
    {
        "Id": 359,
        "Name": "Mąka kokosowa odtłuszczona Efavit",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 24.0,
        "Carbohydrates": 13.0
    },
    {
        "Id": 360,
        "Name": "Mąka kokosowa Bio Planet ",
        "CategoryId": 0,
        "Protein": 5.0,
        "Fat": 45.0,
        "Carbohydrates": 7.0
    },
    {
        "Id": 361,
        "Name": "Mąka migdałowa  BogutynMłyn",
        "CategoryId": 0,
        "Protein": 22.1,
        "Fat": 52.8,
        "Carbohydrates": 9.7
    },
    {
        "Id": 362,
        "Name": "Migdały mielone Bio Planet",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 54.0,
        "Carbohydrates": 5.4
    },
    {
        "Id": 363,
        "Name": "Migdały mielone Belbake Lidl",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 53.0,
        "Carbohydrates": 5.7
    },
    {
        "Id": 364,
        "Name": "Mąka kokosowa Grano Eko",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 10.0,
        "Carbohydrates": 18.0
    },
    {
        "Id": 365,
        "Name": "Mąka migdałowa Targroch",
        "CategoryId": 0,
        "Protein": 21.4,
        "Fat": 50.0,
        "Carbohydrates": 10.7
    },
    {
        "Id": 366,
        "Name": "Amarantus ugotowany",
        "CategoryId": 0,
        "Protein": 6.8,
        "Fat": 3.2,
        "Carbohydrates": 25.5
    },
    {
        "Id": 367,
        "Name": "Amarantus ekspandowany",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 7.1,
        "Carbohydrates": 57.0
    },
    {
        "Id": 368,
        "Name": "Majonez Winiary dekoracyjny",
        "CategoryId": 0,
        "Protein": 1.5,
        "Fat": 76.3,
        "Carbohydrates": 2.9
    },
    {
        "Id": 369,
        "Name": "Masło extra 82% ",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 82.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 370,
        "Name": "Masło klarowane Mlekovita",
        "CategoryId": 0,
        "Protein": 0.1,
        "Fat": 99.8,
        "Carbohydrates": 0.1
    },
    {
        "Id": 371,
        "Name": "Olej kokosowy Vita Dor Lidl",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 99.9,
        "Carbohydrates": 0.0
    },
    {
        "Id": 372,
        "Name": "Olej lniany Vita Dor",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 92.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 373,
        "Name": "Olej rzepakowy Kujawski",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 374,
        "Name": "Oliwa z oliwek",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 99.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 375,
        "Name": "Serek wiejski wysokobiałkowy Piątnica",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 3.0,
        "Carbohydrates": 2.4
    },
    {
        "Id": 376,
        "Name": "Śmietana 30% President ",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 30.0,
        "Carbohydrates": 3.1
    },
    {
        "Id": 377,
        "Name": "Pesto Alla Genovese Borges",
        "CategoryId": 0,
        "Protein": 3.2,
        "Fat": 55.0,
        "Carbohydrates": 4.3
    },
    {
        "Id": 378,
        "Name": "Śmietana kokosowa Planton",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 15.0,
        "Carbohydrates": 4.9
    },
    {
        "Id": 379,
        "Name": "Pesto Baresa",
        "CategoryId": 0,
        "Protein": 4.1,
        "Fat": 35.9,
        "Carbohydrates": 4.8
    },
    {
        "Id": 380,
        "Name": "Mąka kokosowa Coco style",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 12.0,
        "Carbohydrates": 16.0
    },
    {
        "Id": 381,
        "Name": "Kasza gryczana niepalona",
        "CategoryId": 0,
        "Protein": 6.2,
        "Fat": 3.1,
        "Carbohydrates": 74.0
    },
    {
        "Id": 382,
        "Name": "Kasza kuskus po ugotowaniu",
        "CategoryId": 0,
        "Protein": 4.0,
        "Fat": 0.6,
        "Carbohydrates": 20.4
    },
    {
        "Id": 383,
        "Name": "Mąka migdałowa Eureko",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 54.0,
        "Carbohydrates": 5.4
    },
    {
        "Id": 384,
        "Name": "Migdały w płatkach Tablier Blanc Leclerc",
        "CategoryId": 0,
        "Protein": 27.0,
        "Fat": 55.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 385,
        "Name": "Mozarella mini latteo OSM Grodzisk Mazowiecki",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 17.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 386,
        "Name": "Aromat na oleju, do ciasta",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 387,
        "Name": "Czekolada Dark Orange Balance Rossmann",
        "CategoryId": 0,
        "Protein": 5.6,
        "Fat": 35.0,
        "Carbohydrates": 16.0
    },
    {
        "Id": 388,
        "Name": "Czekolada gorzka 99% Lindt",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 49.0,
        "Carbohydrates": 8.0
    },
    {
        "Id": 389,
        "Name": "Czekolada gorzka 95% Ekwador JD Gross",
        "CategoryId": 0,
        "Protein": 12.5,
        "Fat": 51.1,
        "Carbohydrates": 12.7
    },
    {
        "Id": 390,
        "Name": "Czekolada gorzka 90%  Wawel",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 44.0,
        "Carbohydrates": 17.0
    },
    {
        "Id": 391,
        "Name": "Czekolada gorzka 95% Biedronka",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 51.0,
        "Carbohydrates": 8.5
    },
    {
        "Id": 392,
        "Name": "Galaretka bez cukru cytryna Celiko, sucha ",
        "CategoryId": 0,
        "Protein": 76.0,
        "Fat": 0.0,
        "Carbohydrates": 1.5
    },
    {
        "Id": 393,
        "Name": "Kakao naturalne Wawel",
        "CategoryId": 0,
        "Protein": 22.5,
        "Fat": 10.0,
        "Carbohydrates": 13.6
    },
    {
        "Id": 394,
        "Name": "Kakao Wedel 11%tł.",
        "CategoryId": 0,
        "Protein": 23.0,
        "Fat": 11.0,
        "Carbohydrates": 11.0
    },
    {
        "Id": 395,
        "Name": "KetoClassic 3:1 Bar",
        "CategoryId": 0,
        "Protein": 10.8,
        "Fat": 43.6,
        "Carbohydrates": 3.3
    },
    {
        "Id": 396,
        "Name": "Proszek do pieczenia Delecta",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.2,
        "Carbohydrates": 11.0
    },
    {
        "Id": 397,
        "Name": "Seed and berry granola Keto",
        "CategoryId": 0,
        "Protein": 18.9,
        "Fat": 30.7,
        "Carbohydrates": 8.3
    },
    {
        "Id": 398,
        "Name": "Seed and nut granola Keto",
        "CategoryId": 0,
        "Protein": 19.4,
        "Fat": 38.4,
        "Carbohydrates": 5.4
    },
    {
        "Id": 399,
        "Name": "Żelatyna spożywcza Delecta",
        "CategoryId": 0,
        "Protein": 87.0,
        "Fat": 0.02,
        "Carbohydrates": 0.0
    },
    {
        "Id": 400,
        "Name": "Galaretka bez cukru truskawka Celiko, sucha ",
        "CategoryId": 0,
        "Protein": 76.0,
        "Fat": 0.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 401,
        "Name": "Babydream warzywa z ziemniakami i wołowiną",
        "CategoryId": 0,
        "Protein": 2.7,
        "Fat": 2.2,
        "Carbohydrates": 8.2
    },
    {
        "Id": 402,
        "Name": "Bebilon Profutura 4",
        "CategoryId": 0,
        "Protein": 10.2,
        "Fat": 17.7,
        "Carbohydrates": 57.8
    },
    {
        "Id": 403,
        "Name": "Bobovita bukiet warzyw z kurczakiem 10g W",
        "CategoryId": 0,
        "Protein": 2.5,
        "Fat": 2.0,
        "Carbohydrates": 10.0
    },
    {
        "Id": 404,
        "Name": "Bobovita dynia z kurczakiem i ziemniakami",
        "CategoryId": 0,
        "Protein": 2.3,
        "Fat": 0.9,
        "Carbohydrates": 8.7
    },
    {
        "Id": 405,
        "Name": "Bobovita jabłko",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 0.1,
        "Carbohydrates": 9.3
    },
    {
        "Id": 406,
        "Name": "Bobovita jarzynowa",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 1.5,
        "Carbohydrates": 7.4
    },
    {
        "Id": 407,
        "Name": "Bobovita jarzynowa z kurczakiem",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 1.6,
        "Carbohydrates": 6.8
    },
    {
        "Id": 408,
        "Name": "Bobovita Porcja zbóż bezmleczna jaglano-ryżowa",
        "CategoryId": 0,
        "Protein": 8.8,
        "Fat": 2.4,
        "Carbohydrates": 81.0
    },
    {
        "Id": 409,
        "Name": "Bobovita porcja zbóż bezmleczna owsianka z ryżem",
        "CategoryId": 0,
        "Protein": 12.1,
        "Fat": 4.3,
        "Carbohydrates": 76.8
    },
    {
        "Id": 410,
        "Name": "Bobovita warzywa z delikatną wołowiną",
        "CategoryId": 0,
        "Protein": 3.2,
        "Fat": 2.0,
        "Carbohydrates": 7.6
    },
    {
        "Id": 411,
        "Name": "Gerber delikatne jarzynki z królikiem",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 1.9,
        "Carbohydrates": 4.6
    },
    {
        "Id": 412,
        "Name": "Migdały łuskane BakaDor Biedronka",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 52.0,
        "Carbohydrates": 7.6
    },
    {
        "Id": 413,
        "Name": "Gerber dynia",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.3,
        "Carbohydrates": 4.3
    },
    {
        "Id": 414,
        "Name": "Gerber jarzynki z delikatnym schabem",
        "CategoryId": 0,
        "Protein": 3.0,
        "Fat": 1.8,
        "Carbohydrates": 6.2
    },
    {
        "Id": 415,
        "Name": "Gerber jarzynowa z cielęciną",
        "CategoryId": 0,
        "Protein": 2.9,
        "Fat": 2.9,
        "Carbohydrates": 9.1
    },
    {
        "Id": 416,
        "Name": "Gerber jarzynowa z królikiem",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 1.9,
        "Carbohydrates": 6.0
    },
    {
        "Id": 417,
        "Name": "Gerber marchewka",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 5.1
    },
    {
        "Id": 418,
        "Name": "Gerber Obiadek Brokuły ",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.6,
        "Carbohydrates": 1.9
    },
    {
        "Id": 419,
        "Name": "Gerber Obiadek Kurczak w potrawce z jarzynkami",
        "CategoryId": 0,
        "Protein": 3.6,
        "Fat": 2.5,
        "Carbohydrates": 6.8
    },
    {
        "Id": 420,
        "Name": "Kleik ryżowy Bobovita",
        "CategoryId": 0,
        "Protein": 7.6,
        "Fat": 1.0,
        "Carbohydrates": 85.0
    },
    {
        "Id": 421,
        "Name": "Bobovita jabłko z awokado i zielonymi warzywami",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 2.0,
        "Carbohydrates": 10.6
    },
    {
        "Id": 422,
        "Name": "Bobovita porcja zbóż bezmleczna ryżowa o sm waniliowym",
        "CategoryId": 0,
        "Protein": 7.6,
        "Fat": 1.5,
        "Carbohydrates": 85.9
    },
    {
        "Id": 423,
        "Name": "Bobovita Bio bezmleczna kaszka wielozbożowa pełnoziarnista ",
        "CategoryId": 0,
        "Protein": 12.3,
        "Fat": 2.5,
        "Carbohydrates": 68.9
    },
    {
        "Id": 424,
        "Name": "NAN 3 Optipro",
        "CategoryId": 0,
        "Protein": 10.8,
        "Fat": 21.9,
        "Carbohydrates": 61.0
    },
    {
        "Id": 425,
        "Name": "Bobovita jabłko z dynią",
        "CategoryId": 0,
        "Protein": 0.2,
        "Fat": 0.2,
        "Carbohydrates": 12.0
    },
    {
        "Id": 426,
        "Name": "Bobovita mus morele z jabłkiem i gruszką",
        "CategoryId": 0,
        "Protein": 0.5,
        "Fat": 0.0,
        "Carbohydrates": 13.0
    },
    {
        "Id": 427,
        "Name": "Babydream danie mięsne z wołowiną",
        "CategoryId": 0,
        "Protein": 7.3,
        "Fat": 5.3,
        "Carbohydrates": 5.8
    },
    {
        "Id": 428,
        "Name": "Babydream danie z kurczaka",
        "CategoryId": 0,
        "Protein": 7.5,
        "Fat": 4.6,
        "Carbohydrates": 6.4
    },
    {
        "Id": 429,
        "Name": "Bobovita jarzynki z soczystym indykiem",
        "CategoryId": 0,
        "Protein": 3.3,
        "Fat": 1.8,
        "Carbohydrates": 6.9
    },
    {
        "Id": 430,
        "Name": "Bobovita pomidorowa z kurczakiem i ryzem",
        "CategoryId": 0,
        "Protein": 3.1,
        "Fat": 1.8,
        "Carbohydrates": 6.3
    },
    {
        "Id": 431,
        "Name": "Gerber kurczak w potrawce z jarzynkami",
        "CategoryId": 0,
        "Protein": 3.5,
        "Fat": 2.5,
        "Carbohydrates": 5.9
    },
    {
        "Id": 432,
        "Name": "Przecier pomidorowy Pudliszki",
        "CategoryId": 0,
        "Protein": 1.5,
        "Fat": 0.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 433,
        "Name": "Slim Fast Shot",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 10.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 434,
        "Name": "Mąka Keto Cusine",
        "CategoryId": 0,
        "Protein": 4.4,
        "Fat": 73.0,
        "Carbohydrates": 10.0
    },
    {
        "Id": 435,
        "Name": "Makaron Le Gamberi ",
        "CategoryId": 0,
        "Protein": 34.8,
        "Fat": 5.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 436,
        "Name": "Croissant Le Gamberi ",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 31.2,
        "Carbohydrates": 2.6
    },
    {
        "Id": 437,
        "Name": "Bułka tarta Le Gamberi ",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 23.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 438,
        "Name": "Fetta Le Gamberi ",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 34.0,
        "Carbohydrates": 2.9
    },
    {
        "Id": 439,
        "Name": "Panino Le Gamberi ",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 27.9,
        "Carbohydrates": 2.95
    },
    {
        "Id": 440,
        "Name": "Piadina Le Gamberi ",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 26.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 441,
        "Name": "Mozarella w zalewie Sottile Gusto Biedronka",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 18.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 442,
        "Name": "Śmietana 18% Piątnica",
        "CategoryId": 0,
        "Protein": 2.7,
        "Fat": 18.0,
        "Carbohydrates": 4.8
    },
    {
        "Id": 443,
        "Name": "Śmietana 18% Jogo ",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 18.0,
        "Carbohydrates": 2.4
    },
    {
        "Id": 444,
        "Name": "Śmietana 18% Mlekovita",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 18.0,
        "Carbohydrates": 3.9
    },
    {
        "Id": 445,
        "Name": "Finuu klasyczne Miks tłuszczowy 75% ",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 75.0,
        "Carbohydrates": 1.1
    },
    {
        "Id": 446,
        "Name": "Majonez kielecki",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 68.0,
        "Carbohydrates": 2.3
    },
    {
        "Id": 447,
        "Name": "Masło Łaciate",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 83.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 448,
        "Name": "Masło Mlekovita",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 82.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 449,
        "Name": "Masło bez laktozy Tesco ",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 83.0,
        "Carbohydrates": 0.7
    },
    {
        "Id": 450,
        "Name": "Masło Ulubione",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 82.0,
        "Carbohydrates": 0.6
    },
    {
        "Id": 451,
        "Name": "Pesto zielone Alla Genovese GustoBello Biedornka",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 39.0,
        "Carbohydrates": 7.6
    },
    {
        "Id": 452,
        "Name": "Masło Mleczna Dolina",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 82.0,
        "Carbohydrates": 0.7
    },
    {
        "Id": 453,
        "Name": "Olej z pestek dyni",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 454,
        "Name": "Smalec gęsi",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 455,
        "Name": "Śmietana 18% Pilos Lidl",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 18.0,
        "Carbohydrates": 3.9
    },
    {
        "Id": 456,
        "Name": "Śmietana 18% Milsa",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 18.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 457,
        "Name": "Śmietana 18% Zott",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 18.0,
        "Carbohydrates": 3.1
    },
    {
        "Id": 458,
        "Name": "Smalec wieprzowy",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 99.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 459,
        "Name": "Śmietanka 36% tortowa UHT Łowicz",
        "CategoryId": 0,
        "Protein": 2.0,
        "Fat": 36.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 460,
        "Name": "Białko konopne",
        "CategoryId": 0,
        "Protein": 50.0,
        "Fat": 11.0,
        "Carbohydrates": 10.0
    },
    {
        "Id": 461,
        "Name": "Tagliatelle Le Gamberi",
        "CategoryId": 0,
        "Protein": 34.8,
        "Fat": 5.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 462,
        "Name": "Mleczko kokosowe Aroy-D puszka",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 19.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 463,
        "Name": "Tahini premium House of Orient",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 60.0,
        "Carbohydrates": 13.0
    },
    {
        "Id": 464,
        "Name": "Jogurt typu greckiego 2% tł. Tolonis Biedronka",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 2.0,
        "Carbohydrates": 4.0
    },
    {
        "Id": 465,
        "Name": "Twarożek domowy grani Piątnica",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 4.0,
        "Carbohydrates": 2.4
    },
    {
        "Id": 466,
        "Name": "Gerber delikatny indyk w słoiczku",
        "CategoryId": 0,
        "Protein": 10.5,
        "Fat": 1.6,
        "Carbohydrates": 4.0
    },
    {
        "Id": 467,
        "Name": "Gerber delikatny kurczak w słoiczku",
        "CategoryId": 0,
        "Protein": 9.3,
        "Fat": 2.5,
        "Carbohydrates": 3.8
    },
    {
        "Id": 468,
        "Name": "Keczup z cateringu IMID",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 17.0
    },
    {
        "Id": 469,
        "Name": "Keczup Madero Biedronka",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 0.2,
        "Carbohydrates": 22.0
    },
    {
        "Id": 470,
        "Name": "Mus Kubuś trus jab ban mar",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 0.3,
        "Carbohydrates": 12.2
    },
    {
        "Id": 471,
        "Name": "Mus Kubuś banan jabłko",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.3,
        "Carbohydrates": 16.1
    },
    {
        "Id": 472,
        "Name": "Serek twarogowy puszysty z ziołami Almette ",
        "CategoryId": 0,
        "Protein": 6.1,
        "Fat": 25.0,
        "Carbohydrates": 2.3
    },
    {
        "Id": 473,
        "Name": "Serek twarogowy puszysty śmietankowy Almette ",
        "CategoryId": 0,
        "Protein": 6.7,
        "Fat": 24.0,
        "Carbohydrates": 3.2
    },
    {
        "Id": 474,
        "Name": "Parówki 100% z szynki Tarczyński naturalnie",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 27.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 475,
        "Name": "Parówki Głodniaki",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 20.0,
        "Carbohydrates": 1.4
    },
    {
        "Id": 476,
        "Name": "Boczek surowy wędzony w plastrach Pikok Lidl",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 26.0,
        "Carbohydrates": 0.1
    },
    {
        "Id": 477,
        "Name": "Bobovita kaszka mleczno ryżowa wanilia ",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 11.0,
        "Carbohydrates": 69.0
    },
    {
        "Id": 478,
        "Name": "Babka jajowata łupina Intenson",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.2,
        "Carbohydrates": 0.9
    },
    {
        "Id": 479,
        "Name": "Focaccina Olio Le Gamberi",
        "CategoryId": 0,
        "Protein": 30.0,
        "Fat": 27.9,
        "Carbohydrates": 2.95
    },
    {
        "Id": 480,
        "Name": "Mąka kokosowa Look Food",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 8.5,
        "Carbohydrates": 26.0
    },
    {
        "Id": 481,
        "Name": "Mąka pszenna Basia typ 405 GoodMills",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 1.0,
        "Carbohydrates": 71.7
    },
    {
        "Id": 482,
        "Name": "Czekolada gorzka 70% Lindt",
        "CategoryId": 0,
        "Protein": 9.5,
        "Fat": 41.0,
        "Carbohydrates": 34.0
    },
    {
        "Id": 483,
        "Name": "Szynka z fileta indyka Piratki Pikok Lidl",
        "CategoryId": 0,
        "Protein": 20.7,
        "Fat": 5.4,
        "Carbohydrates": 1.7
    },
    {
        "Id": 484,
        "Name": "Kabanoski z kurczaka z indykiem Gryzzale Tarczyński",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 21.0,
        "Carbohydrates": 5.8
    },
    {
        "Id": 485,
        "Name": "Jogurt Protein 0% tł. Truskawka czerwona porzeczka Pilos Lidl",
        "CategoryId": 0,
        "Protein": 6.6,
        "Fat": 0.0,
        "Carbohydrates": 17.0
    },
    {
        "Id": 486,
        "Name": "Kostka rosołowa warzywna Enerbio Rossmann",
        "CategoryId": 0,
        "Protein": 5.0,
        "Fat": 15.0,
        "Carbohydrates": 12.5
    },
    {
        "Id": 487,
        "Name": "Truskawka liofil. łyżka smaku Czary Mamy",
        "CategoryId": 0,
        "Protein": 7.2,
        "Fat": 3.1,
        "Carbohydrates": 59.0
    },
    {
        "Id": 488,
        "Name": "Koncentrat pomidorowy 30% Łowicz",
        "CategoryId": 0,
        "Protein": 5.6,
        "Fat": 1.5,
        "Carbohydrates": 14.0
    },
    {
        "Id": 489,
        "Name": "Kakao Bio Organic Cocoa 60% Bellarom Lidl",
        "CategoryId": 0,
        "Protein": 13.4,
        "Fat": 12.6,
        "Carbohydrates": 46.9
    },
    {
        "Id": 490,
        "Name": "Kakao Bio Organic Cocoa 44% Bellarom Lidl",
        "CategoryId": 0,
        "Protein": 9.9,
        "Fat": 9.3,
        "Carbohydrates": 60.5
    },
    {
        "Id": 491,
        "Name": "Dżem truskawka 100% Łowicz",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.2,
        "Carbohydrates": 33.0
    },
    {
        "Id": 492,
        "Name": "Czekolada gorzka 90% Lindt",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 55.0,
        "Carbohydrates": 14.0
    },
    {
        "Id": 493,
        "Name": "Pomidory krojone bez skórki Łowicz",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 494,
        "Name": "Keto kajzerka Kiełtyka",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 6.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 495,
        "Name": "Czekolada mleczna ze stewią niebieska Pure good Mercatare",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 41.0,
        "Carbohydrates": 15.0
    },
    {
        "Id": 496,
        "Name": "Napój migdałowy Almond Barista Alpro",
        "CategoryId": 0,
        "Protein": 0.5,
        "Fat": 1.2,
        "Carbohydrates": 2.6
    },
    {
        "Id": 497,
        "Name": "Oliwki czarne drylowane Figaro",
        "CategoryId": 0,
        "Protein": 0.5,
        "Fat": 14.6,
        "Carbohydrates": 0.0
    },
    {
        "Id": 498,
        "Name": "Mąka kokosowa Bio Bio Planet 57 g W z błonnikiem",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 12.0,
        "Carbohydrates": 19.0
    },
    {
        "Id": 499,
        "Name": "Kakao DecoMorreno",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 11.0,
        "Carbohydrates": 13.0
    },
    {
        "Id": 500,
        "Name": "Mąka kokosowa bezglutenowa Eko Młyn Niedźwiady",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 10.0,
        "Carbohydrates": 18.0
    },
    {
        "Id": 501,
        "Name": "Babka jajowata łupina Witpak",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 1.5,
        "Carbohydrates": 8.0
    },
    {
        "Id": 502,
        "Name": "Śmietanka 36% tortowa Rolmecz",
        "CategoryId": 0,
        "Protein": 2.0,
        "Fat": 36.0,
        "Carbohydrates": 2.9
    },
    {
        "Id": 503,
        "Name": "Mąka migdałowa Ekologiczna Eko-Wital",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 54.0,
        "Carbohydrates": 5.4
    },
    {
        "Id": 504,
        "Name": "Kiełbasa wiejska z cielęciną Spiżarnia Smaków Piotr i Paweł",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 17.0,
        "Carbohydrates": 0.1
    },
    {
        "Id": 505,
        "Name": "Szynka Juranda Spiżarnia",
        "CategoryId": 0,
        "Protein": 23.0,
        "Fat": 3.2,
        "Carbohydrates": 0.7
    },
    {
        "Id": 506,
        "Name": "Parówki Delikatesowe Krawczyk",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 24.0,
        "Carbohydrates": 1.9
    },
    {
        "Id": 507,
        "Name": "Szynka z Mleczkowa Krawczyk",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 2.1,
        "Carbohydrates": 1.0
    },
    {
        "Id": 508,
        "Name": "Salami rogal JBB Bałdyga",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 43.0,
        "Carbohydrates": 3.6
    },
    {
        "Id": 509,
        "Name": "Bezy waniliowe Crunchy Melts Vanilla Jada Foods",
        "CategoryId": 0,
        "Protein": 7.1,
        "Fat": 0.0,
        "Carbohydrates": 85.7
    },
    {
        "Id": 510,
        "Name": "Nasiona konopi łuskane Bio Planet żółte op",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 48.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 511,
        "Name": "Krem czekoladowo-orzechowy ze stewią Cavalier",
        "CategoryId": 0,
        "Protein": 5.3,
        "Fat": 38.5,
        "Carbohydrates": 9.6
    },
    {
        "Id": 512,
        "Name": "Bisco Natura Le Gamberi",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 34.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 513,
        "Name": "Mąka migdałowa hiszpańska Pięć Przemian",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 59.0,
        "Carbohydrates": 2.5
    },
    {
        "Id": 514,
        "Name": "Granola Keto with Raspberry ",
        "CategoryId": 0,
        "Protein": 14.5,
        "Fat": 44.0,
        "Carbohydrates": 13.5
    },
    {
        "Id": 515,
        "Name": "Granola Keto Peanat Butter Crunch Keto and Co",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 45.6,
        "Carbohydrates": 10.5
    },
    {
        "Id": 516,
        "Name": "Kiełbasa swojska JBB Bałdyga",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 19.0,
        "Carbohydrates": 0.9
    },
    {
        "Id": 517,
        "Name": "Krem orzechowy Keto Cream with MCT Oil Hazelnut Be Keto",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 48.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 518,
        "Name": "Soda oczyszczona spożywcza",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 519,
        "Name": "Owocowe puree tubka jabłko gruszka truskawka Genuss Plus",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 0.5,
        "Carbohydrates": 11.1
    },
    {
        "Id": 520,
        "Name": "Mus tubka jabłko banan szpinak ogórek Erbar Freche Freunde",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.4,
        "Carbohydrates": 11.0
    },
    {
        "Id": 521,
        "Name": "Stewia w kropelkach",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 522,
        "Name": "Erytrytol 100%",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 523,
        "Name": "Woda",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 524,
        "Name": "Erytrytol ze stewią bez innych dodatków",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 525,
        "Name": "Erytrytol z inuliną Zielony Listek",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 6.8
    },
    {
        "Id": 526,
        "Name": "Parówki z szynki Tarczyński",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 27.0,
        "Carbohydrates": 3.4
    },
    {
        "Id": 527,
        "Name": "Kasza gryczana biała Lidl",
        "CategoryId": 0,
        "Protein": 13.9,
        "Fat": 3.0,
        "Carbohydrates": 60.0
    },
    {
        "Id": 528,
        "Name": "Kasza jaglana Lidl",
        "CategoryId": 0,
        "Protein": 11.8,
        "Fat": 1.8,
        "Carbohydrates": 68.8
    },
    {
        "Id": 529,
        "Name": "Kleik kukurydziany Nestle",
        "CategoryId": 0,
        "Protein": 7.5,
        "Fat": 2.0,
        "Carbohydrates": 83.5
    },
    {
        "Id": 530,
        "Name": "Pasta z nasion Pestko Mleczni Bracia",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 62.7,
        "Carbohydrates": 5.2
    },
    {
        "Id": 531,
        "Name": "Pieczywo Vega Lekkie buraczek Sonko",
        "CategoryId": 0,
        "Protein": 7.8,
        "Fat": 1.5,
        "Carbohydrates": 76.9
    },
    {
        "Id": 532,
        "Name": "Śmietana 22% Łaciata",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 22.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 533,
        "Name": "Śmietanka 36% Łaciata różowa UHT",
        "CategoryId": 0,
        "Protein": 2.0,
        "Fat": 36.0,
        "Carbohydrates": 2.9
    },
    {
        "Id": 534,
        "Name": "Kabanoski z szynki Gryzzale Tarczyński",
        "CategoryId": 0,
        "Protein": 28.0,
        "Fat": 30.0,
        "Carbohydrates": 1.9
    },
    {
        "Id": 535,
        "Name": "Ser sałatkowo-kanapkowy Tłusty Tolonis Biedronka",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 18.0,
        "Carbohydrates": 6.0
    },
    {
        "Id": 536,
        "Name": "Mascarpone Galbani",
        "CategoryId": 0,
        "Protein": 3.4,
        "Fat": 40.0,
        "Carbohydrates": 4.9
    },
    {
        "Id": 537,
        "Name": "Mascarpone Sottile Gusto",
        "CategoryId": 0,
        "Protein": 3.4,
        "Fat": 40.0,
        "Carbohydrates": 4.9
    },
    {
        "Id": 538,
        "Name": "Mozarella mini Sottile Gusto Biedronka",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 19.0,
        "Carbohydrates": 1.5
    },
    {
        "Id": 539,
        "Name": "Burrata GustoBello Biedronka",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 23.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 540,
        "Name": "Masło orzechowe peanut crunchy Vitanella Biedronka",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 49.0,
        "Carbohydrates": 17.0
    },
    {
        "Id": 541,
        "Name": "Krem z orzeszków ziemnych Go Vege Biedronka",
        "CategoryId": 0,
        "Protein": 26.2,
        "Fat": 51.9,
        "Carbohydrates": 9.6
    },
    {
        "Id": 542,
        "Name": "Dżem wiśniowy Rapsodia Biedronka",
        "CategoryId": 0,
        "Protein": 0.1,
        "Fat": 0.1,
        "Carbohydrates": 34.0
    },
    {
        "Id": 543,
        "Name": "Napój sojowy naturalny klasyczny Vitanella Biedronka",
        "CategoryId": 0,
        "Protein": 3.2,
        "Fat": 1.8,
        "Carbohydrates": 3.9
    },
    {
        "Id": 544,
        "Name": "Napój migdałowy naturalny Vitanella Biedronka",
        "CategoryId": 0,
        "Protein": 0.3,
        "Fat": 1.1,
        "Carbohydrates": 3.0
    },
    {
        "Id": 545,
        "Name": "Śmietanka 30% UHT Mleczna Dolina Biedronka",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 30.0,
        "Carbohydrates": 3.1
    },
    {
        "Id": 546,
        "Name": "Śmietanka 30% Łaciata czerwona UHT",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 30.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 547,
        "Name": "Płatki orkiszowe Plony Natury Biedronka",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 3.3,
        "Carbohydrates": 64.0
    },
    {
        "Id": 548,
        "Name": "Płatki owsiane górskie Plony Natury Biedronka",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 5.7,
        "Carbohydrates": 60.0
    },
    {
        "Id": 549,
        "Name": "Ciecierzyca w słoiku Gourmes Biedronka",
        "CategoryId": 0,
        "Protein": 6.2,
        "Fat": 2.2,
        "Carbohydrates": 14.0
    },
    {
        "Id": 550,
        "Name": "Fasola czerwona konserwowa Nasza Spiżarnia Biedronka",
        "CategoryId": 0,
        "Protein": 6.4,
        "Fat": 0.2,
        "Carbohydrates": 14.0
    },
    {
        "Id": 551,
        "Name": "Czerwona fasola kidney Bonduelle",
        "CategoryId": 0,
        "Protein": 7.2,
        "Fat": 1.1,
        "Carbohydrates": 15.8
    },
    {
        "Id": 552,
        "Name": "Fasola biała konserwowa Nasza Spiżarnia Biedronka",
        "CategoryId": 0,
        "Protein": 8.2,
        "Fat": 0.6,
        "Carbohydrates": 12.0
    },
    {
        "Id": 553,
        "Name": "Ser Halloumi Eridanous Lidl",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 25.0,
        "Carbohydrates": 1.5
    },
    {
        "Id": 554,
        "Name": "Orzechy laskowe Bakallino Biedronka  ",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 61.0,
        "Carbohydrates": 6.7
    },
    {
        "Id": 555,
        "Name": "Migdały blanszowane w płatkach Bakallino Biedronka",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 51.0,
        "Carbohydrates": 9.5
    },
    {
        "Id": 556,
        "Name": "Mak niebieski mielony Bakallino Biedronka",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 43.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 557,
        "Name": "Migdały łuskane Bakallino Biedronka",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 52.0,
        "Carbohydrates": 7.6
    },
    {
        "Id": 558,
        "Name": "Ser Grana Padano DOP Deluxe Lidl",
        "CategoryId": 0,
        "Protein": 33.0,
        "Fat": 29.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 559,
        "Name": "Proszek do pieczenia Winiary",
        "CategoryId": 0,
        "Protein": 0.1,
        "Fat": 0.1,
        "Carbohydrates": 21.5
    },
    {
        "Id": 560,
        "Name": "Bobovita morele banany jabłka",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.1,
        "Carbohydrates": 13.8
    },
    {
        "Id": 561,
        "Name": "Aromat Pomarańcza z Brazylii Dr Oetker",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 562,
        "Name": "Bobovita kaszka mleczno-ryżowa malina",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 9.2,
        "Carbohydrates": 71.0
    },
    {
        "Id": 563,
        "Name": "Serek śmietankowy Delikate w plastrach klasyczny Biedronka",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 24.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 564,
        "Name": "Orzechy brazylijskie BakaDor Biedronka",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 67.0,
        "Carbohydrates": 4.2
    },
    {
        "Id": 565,
        "Name": "Jogurt grecki bardzo gęsty Bakoma",
        "CategoryId": 0,
        "Protein": 3.5,
        "Fat": 7.5,
        "Carbohydrates": 4.7
    },
    {
        "Id": 566,
        "Name": "Bobovita jarzynowa z cielęciną",
        "CategoryId": 0,
        "Protein": 2.1,
        "Fat": 1.3,
        "Carbohydrates": 7.5
    },
    {
        "Id": 567,
        "Name": "Aromat Migdał z Maroka Dr Oetker",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 568,
        "Name": "Bobovita zupka warzywna z cielęciną",
        "CategoryId": 0,
        "Protein": 2.7,
        "Fat": 1.6,
        "Carbohydrates": 7.8
    },
    {
        "Id": 569,
        "Name": "Gerber schabik ze śliwką w warzywach",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 1.5,
        "Carbohydrates": 5.5
    },
    {
        "Id": 570,
        "Name": "Bobovita suszona śliwka z gruszką i buraczkiem",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 0.1,
        "Carbohydrates": 12.0
    },
    {
        "Id": 571,
        "Name": "Orzechy makadamia prażone solone Alesto Lidl",
        "CategoryId": 0,
        "Protein": 7.1,
        "Fat": 77.8,
        "Carbohydrates": 4.2
    },
    {
        "Id": 572,
        "Name": "Olej z awokado Vita Dor",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 573,
        "Name": "Szynka Nature Kraina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 3.0,
        "Carbohydrates": 1.1
    },
    {
        "Id": 574,
        "Name": "Mozarella kuleczki Bakoma",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 18.5,
        "Carbohydrates": 1.5
    },
    {
        "Id": 575,
        "Name": "Jogurt Protein 0% tł. naturalny Pilos Lidl",
        "CategoryId": 0,
        "Protein": 8.8,
        "Fat": 0.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 576,
        "Name": "Parówki bez laktozy Głodniaki Kraina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 20.0,
        "Carbohydrates": 1.4
    },
    {
        "Id": 577,
        "Name": "Gerber risotto z indykiem i warzywami",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 2.0,
        "Carbohydrates": 7.2
    },
    {
        "Id": 578,
        "Name": "Bobovita krupniczek z cielęciną",
        "CategoryId": 0,
        "Protein": 2.5,
        "Fat": 1.9,
        "Carbohydrates": 6.4
    },
    {
        "Id": 579,
        "Name": "Bobovita bukiet warzyw z kurczakiem 8g W",
        "CategoryId": 0,
        "Protein": 2.3,
        "Fat": 1.9,
        "Carbohydrates": 8.0
    },
    {
        "Id": 580,
        "Name": "Tagliatelle Le Gamberi",
        "CategoryId": 0,
        "Protein": 34.8,
        "Fat": 5.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 581,
        "Name": "Bobovita porcja zbóż bezmleczna 7 zbóż zbożowa-jaglana",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 2.1,
        "Carbohydrates": 73.0
    },
    {
        "Id": 582,
        "Name": "Śmietana 30% President",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 30.0,
        "Carbohydrates": 3.1
    },
    {
        "Id": 583,
        "Name": "Stewia w kropelkach Vanilla Sweet Leaf",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 584,
        "Name": "Chleb proteinowy Grzybki",
        "CategoryId": 0,
        "Protein": 26.5,
        "Fat": 13.4,
        "Carbohydrates": 5.9
    },
    {
        "Id": 585,
        "Name": "Żurek koncentrat Krakus",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 3.5,
        "Carbohydrates": 5.4
    },
    {
        "Id": 586,
        "Name": "Łosoś wędzony na zimno plastry Marinero Biedronka",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 10.0,
        "Carbohydrates": 0.2
    },
    {
        "Id": 587,
        "Name": "Bataty surowe",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.5,
        "Carbohydrates": 17.1
    },
    {
        "Id": 588,
        "Name": "Bataty ugotowane",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.2,
        "Carbohydrates": 15.2
    },
    {
        "Id": 589,
        "Name": "Bataty upieczone bez tłuszczu",
        "CategoryId": 0,
        "Protein": 2.01,
        "Fat": 0.2,
        "Carbohydrates": 17.4
    },
    {
        "Id": 590,
        "Name": "Aromat Cytryna z Sycylii Dr Oetker",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 591,
        "Name": "Ser Favita tłusty Mlekowita",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 18.0,
        "Carbohydrates": 7.0
    },
    {
        "Id": 592,
        "Name": "Masło extra Osełka górska Sobik",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 83.0,
        "Carbohydrates": 0.4
    },
    {
        "Id": 593,
        "Name": "Wiórki kokosowe Bakallino Biedronka",
        "CategoryId": 0,
        "Protein": 5.6,
        "Fat": 63.0,
        "Carbohydrates": 5.9
    },
    {
        "Id": 594,
        "Name": "Kiełbasa aleksandryjska Aleksandria",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 20.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 595,
        "Name": "Parówki Berlinki classic",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 21.0,
        "Carbohydrates": 2.7
    },
    {
        "Id": 596,
        "Name": "Parówki z serem z indyka Indykpol",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 18.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 597,
        "Name": "Czekolada gorzka 85% Lindt",
        "CategoryId": 0,
        "Protein": 12.5,
        "Fat": 46.0,
        "Carbohydrates": 19.0
    },
    {
        "Id": 598,
        "Name": "Keczup łagodny 60% mniej kcal Kotlin",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.2,
        "Carbohydrates": 8.2
    },
    {
        "Id": 599,
        "Name": "Keczup łagodny Kotlin",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.2,
        "Carbohydrates": 23.0
    },
    {
        "Id": 600,
        "Name": "Ser Złoty Mazur Mlekpol",
        "CategoryId": 0,
        "Protein": 26.0,
        "Fat": 27.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 601,
        "Name": "Serek Kiri z twarożku śmietankowego",
        "CategoryId": 0,
        "Protein": 8.5,
        "Fat": 29.0,
        "Carbohydrates": 2.5
    },
    {
        "Id": 602,
        "Name": "Kiełbasa morlińska z piersi kurczaka Morliny",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 13.0,
        "Carbohydrates": 0.6
    },
    {
        "Id": 603,
        "Name": "Mąka kokosowa Targoch",
        "CategoryId": 0,
        "Protein": 19.1,
        "Fat": 12.0,
        "Carbohydrates": 15.0
    },
    {
        "Id": 604,
        "Name": "Jogurt natutralny Augustowski Mlekpol",
        "CategoryId": 0,
        "Protein": 4.3,
        "Fat": 2.5,
        "Carbohydrates": 5.8
    },
    {
        "Id": 605,
        "Name": "Serek puszysty naturalny łaciaty",
        "CategoryId": 0,
        "Protein": 5.8,
        "Fat": 23.0,
        "Carbohydrates": 4.8
    },
    {
        "Id": 606,
        "Name": "Filet wędzony z piersi indyka Pikok Lidl",
        "CategoryId": 0,
        "Protein": 20.7,
        "Fat": 5.4,
        "Carbohydrates": 1.7
    },
    {
        "Id": 607,
        "Name": "Filet z kurczaka 98% Piratki Pikok Lidl",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 1.0,
        "Carbohydrates": 1.7
    },
    {
        "Id": 608,
        "Name": "Mozarella w plastrach Livilio Lidl",
        "CategoryId": 0,
        "Protein": 24.3,
        "Fat": 19.0,
        "Carbohydrates": 0.9
    },
    {
        "Id": 609,
        "Name": "Serowe paluszki Piratki Lidl",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 21.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 610,
        "Name": "Szynka z fileta drobiowa Pikok Lidl",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 2.5,
        "Carbohydrates": 2.2
    },
    {
        "Id": 611,
        "Name": "Serek śmietankowy Mleczwart Wartkowice",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 14.2,
        "Carbohydrates": 1.8
    },
    {
        "Id": 612,
        "Name": "Krem z orzeszków ziemnych z kawałkami Go Vege Biedronka",
        "CategoryId": 0,
        "Protein": 26.4,
        "Fat": 51.6,
        "Carbohydrates": 8.9
    },
    {
        "Id": 613,
        "Name": "Len złoty Bio Planet",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 31.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 614,
        "Name": "Mascarpone kuchmistrza Mlekovita",
        "CategoryId": 0,
        "Protein": 3.4,
        "Fat": 40.0,
        "Carbohydrates": 2.6
    },
    {
        "Id": 615,
        "Name": "Śmietana 18% gęsta Bakoma",
        "CategoryId": 0,
        "Protein": 2.5,
        "Fat": 18.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 616,
        "Name": "Mąka migdałowa Agnex",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 52.0,
        "Carbohydrates": 7.6
    },
    {
        "Id": 617,
        "Name": "Kakao o obniżonej zawartości tłuszczu Carrefour",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 11.0,
        "Carbohydrates": 10.0
    },
    {
        "Id": 618,
        "Name": "Majonez kielecki omega-3",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 78.0,
        "Carbohydrates": 2.8
    },
    {
        "Id": 619,
        "Name": "Orzechy laskowe prażone Alesto Lidl",
        "CategoryId": 0,
        "Protein": 14.3,
        "Fat": 70.5,
        "Carbohydrates": 3.5
    },
    {
        "Id": 620,
        "Name": "Śmietanka 36% Piątnica",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 36.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 621,
        "Name": "Parówki Sokoliki Sokołów",
        "CategoryId": 0,
        "Protein": 15.5,
        "Fat": 13.0,
        "Carbohydrates": 1.7
    },
    {
        "Id": 622,
        "Name": "Topinambur w proszku Go Bio Biedronka",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 1.0,
        "Carbohydrates": 9.0
    },
    {
        "Id": 623,
        "Name": "Mięso mielone z kurczaka Kraina Mięs Biedronka",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 7.7,
        "Carbohydrates": 1.2
    },
    {
        "Id": 624,
        "Name": "Stewia w pudrze",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 625,
        "Name": "Pieczarki Portobello",
        "CategoryId": 0,
        "Protein": 2.1,
        "Fat": 0.4,
        "Carbohydrates": 2.6
    },
    {
        "Id": 626,
        "Name": "Musztarda Sarepska ostra Kamis",
        "CategoryId": 0,
        "Protein": 4.4,
        "Fat": 4.0,
        "Carbohydrates": 7.9
    },
    {
        "Id": 627,
        "Name": "Quinoa ugotowana",
        "CategoryId": 0,
        "Protein": 4.4,
        "Fat": 1.92,
        "Carbohydrates": 18.5
    },
    {
        "Id": 628,
        "Name": "Syrop Davinci wartości uśrednione",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 629,
        "Name": "Pomidorki koktajlowe",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.3,
        "Carbohydrates": 3.6
    },
    {
        "Id": 630,
        "Name": "Pomidory śliwkowe",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 0.3,
        "Carbohydrates": 3.5
    },
    {
        "Id": 631,
        "Name": "Ocet jabłkowy",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.9
    },
    {
        "Id": 632,
        "Name": "Guma ksantanowa Bobs Red Mill",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 1.2
    },
    {
        "Id": 633,
        "Name": "Majonez catering IMiD",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 50.0,
        "Carbohydrates": 6.0
    },
    {
        "Id": 634,
        "Name": "Kurczak gotowany Cedrob catering IMiD",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 1.2,
        "Carbohydrates": 0.2
    },
    {
        "Id": 635,
        "Name": "Pieprzowa z indyka Indykpol catering IMiD",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 4.6,
        "Carbohydrates": 0.3
    },
    {
        "Id": 636,
        "Name": "Ser żółty plasterkowany Włoszczowa catering IMiD",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 26.0,
        "Carbohydrates": 1.1
    },
    {
        "Id": 637,
        "Name": "Szynka od szwagra Krakus catering IMiD",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 13.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 638,
        "Name": "Szynka pieczona Pekpol catering IMiD",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 13.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 639,
        "Name": "Szynka z indyka Lukullus catering IMiD",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 1.6,
        "Carbohydrates": 0.5
    },
    {
        "Id": 640,
        "Name": "Musztarda francuska lekko ostra Kamis",
        "CategoryId": 0,
        "Protein": 6.6,
        "Fat": 9.9,
        "Carbohydrates": 9.5
    },
    {
        "Id": 641,
        "Name": "Chrzan tarty Rolnik",
        "CategoryId": 0,
        "Protein": 2.5,
        "Fat": 3.0,
        "Carbohydrates": 12.0
    },
    {
        "Id": 642,
        "Name": "Chrzan Krakus",
        "CategoryId": 0,
        "Protein": 2.7,
        "Fat": 9.8,
        "Carbohydrates": 12.0
    },
    {
        "Id": 643,
        "Name": "Chrzan tarty Motyl",
        "CategoryId": 0,
        "Protein": 2.5,
        "Fat": 10.0,
        "Carbohydrates": 15.0
    },
    {
        "Id": 644,
        "Name": "Sos tatarski Winiary",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 63.7,
        "Carbohydrates": 7.9
    },
    {
        "Id": 645,
        "Name": "Kefir Robico 1,5% tł.",
        "CategoryId": 0,
        "Protein": 3.1,
        "Fat": 1.5,
        "Carbohydrates": 4.2
    },
    {
        "Id": 646,
        "Name": "Pstrąg tęczowy filet wędzony Nautica Lidl",
        "CategoryId": 0,
        "Protein": 20.6,
        "Fat": 4.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 647,
        "Name": "Śledź filety ala matijas w oleju Nautica Lidl",
        "CategoryId": 0,
        "Protein": 12.1,
        "Fat": 13.7,
        "Carbohydrates": 0.6
    },
    {
        "Id": 648,
        "Name": "Makrela filety wędzone Nautica Lidl",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 21.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 649,
        "Name": "Łosoś atlantycki wędzony na goraco OceanSea Lidl",
        "CategoryId": 0,
        "Protein": 26.6,
        "Fat": 12.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 650,
        "Name": "Halibut niebieski wędzony Nautica Lidl",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 6.9,
        "Carbohydrates": 0.0
    },
    {
        "Id": 651,
        "Name": "Łosoś atlantycki wędzony dzwonko Atlantic Lidl",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 13.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 652,
        "Name": "Pstrąg tęczowy łososiowy Nautica Lidl",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 7.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 653,
        "Name": "Tuńczyk jednolity w sosie własnym Nixe Lidl",
        "CategoryId": 0,
        "Protein": 25.4,
        "Fat": 0.8,
        "Carbohydrates": 0.0
    },
    {
        "Id": 654,
        "Name": "Serek wiejski naturalny Łaciaty",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 5.0,
        "Carbohydrates": 2.5
    },
    {
        "Id": 655,
        "Name": "Mintaj filet zamrożony Ocean Sea Lidl",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 0.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 656,
        "Name": "Krewetki czerwone argentyńskie surowe mrożone",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 2.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 657,
        "Name": "Jeżyny",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 1.0,
        "Carbohydrates": 6.2
    },
    {
        "Id": 658,
        "Name": "Krewetki białe całe gotowane mrożone Deluxe Lidl",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 1.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 659,
        "Name": "Tavoletta al cacao Le Gamberi",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 39.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 660,
        "Name": "Maka pszenna pełnoziarnista Lidl",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 2.2,
        "Carbohydrates": 64.0
    },
    {
        "Id": 661,
        "Name": "Adams Bread Dark",
        "CategoryId": 0,
        "Protein": 32.0,
        "Fat": 10.3,
        "Carbohydrates": 0.64
    },
    {
        "Id": 662,
        "Name": "Makaron niskowęglowodanowy Skinny makaron ActivePol",
        "CategoryId": 0,
        "Protein": 70.7,
        "Fat": 7.9,
        "Carbohydrates": 4.3
    },
    {
        "Id": 663,
        "Name": "Otręby gryczane Melvit",
        "CategoryId": 0,
        "Protein": 36.0,
        "Fat": 9.9,
        "Carbohydrates": 20.0
    },
    {
        "Id": 664,
        "Name": "Konopie z otrębami lnianymi Melvit",
        "CategoryId": 0,
        "Protein": 26.0,
        "Fat": 47.0,
        "Carbohydrates": 2.2
    },
    {
        "Id": 665,
        "Name": "Mleczko kokosowe Thai coco",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 18.2,
        "Carbohydrates": 2.5
    },
    {
        "Id": 666,
        "Name": "Mleczko kokosowe Blue Dragon",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 15.0,
        "Carbohydrates": 3.4
    },
    {
        "Id": 667,
        "Name": "Serek wiejski Mlekovita",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 5.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 668,
        "Name": "Makrela filet wędzony Biedronka",
        "CategoryId": 0,
        "Protein": 19.9,
        "Fat": 23.0,
        "Carbohydrates": 0.1
    },
    {
        "Id": 669,
        "Name": "Len mielony złoty odtłuszczony Plony Natury Biedronka",
        "CategoryId": 0,
        "Protein": 32.0,
        "Fat": 18.0,
        "Carbohydrates": 4.0
    },
    {
        "Id": 670,
        "Name": "Chia Intenson",
        "CategoryId": 0,
        "Protein": 23.0,
        "Fat": 33.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 671,
        "Name": "Napój migdałowy niesłodzony Alpro",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 1.1,
        "Carbohydrates": 0.0
    },
    {
        "Id": 672,
        "Name": "Pistacje kalifornijskie niesolone Alesto Lidl",
        "CategoryId": 0,
        "Protein": 25.4,
        "Fat": 51.7,
        "Carbohydrates": 10.3
    },
    {
        "Id": 673,
        "Name": "Pstrąg tęczowy patroszony Marinero Biedronka",
        "CategoryId": 0,
        "Protein": 18.0,
        "Fat": 5.2,
        "Carbohydrates": 0.0
    },
    {
        "Id": 674,
        "Name": "Musztarda Dijon Kamis",
        "CategoryId": 0,
        "Protein": 7.4,
        "Fat": 11.0,
        "Carbohydrates": 2.8
    },
    {
        "Id": 675,
        "Name": "Olej rzepakowy o smaku masła tłocozny na zimno Olandia",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 676,
        "Name": "Bisco Cocco Le Gamberi",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 34.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 677,
        "Name": "Schab wędzony Nature Kraina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 4.5,
        "Carbohydrates": 1.2
    },
    {
        "Id": 678,
        "Name": "Ryż Basmati Biedronka",
        "CategoryId": 0,
        "Protein": 8.5,
        "Fat": 1.0,
        "Carbohydrates": 77.0
    },
    {
        "Id": 679,
        "Name": "Kasza jęczmienna perłowa Biedronka",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 0.6,
        "Carbohydrates": 65.0
    },
    {
        "Id": 680,
        "Name": "Kabanosy Nature kraina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 40.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 681,
        "Name": "Parówki z szynki Nature Kraina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 24.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 682,
        "Name": "Mozarella tarta wiórki Sottile Gusto Biedronka",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 20.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 683,
        "Name": "Twaróg garwoliński tłusty OSM Garwolin",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 8.0,
        "Carbohydrates": 2.7
    },
    {
        "Id": 684,
        "Name": "Frankfurterki wieprzowe Pikok Pure Lidl",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 19.0,
        "Carbohydrates": 1.5
    },
    {
        "Id": 685,
        "Name": "Kiełbasa śląska Pikok Pure Lidl",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 21.0,
        "Carbohydrates": 1.4
    },
    {
        "Id": 686,
        "Name": "Kabanosy wieprzowe Pikok Pure Lidl",
        "CategoryId": 0,
        "Protein": 28.0,
        "Fat": 37.0,
        "Carbohydrates": 0.7
    },
    {
        "Id": 687,
        "Name": "Kiełbasa szynkowa Pikok Pure Lidl",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 3.9,
        "Carbohydrates": 1.0
    },
    {
        "Id": 688,
        "Name": "Śmietanka 30% Mleczna Dolina Biedronka",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 30.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 689,
        "Name": "Masło Ekstra bez laktozy Mleczna Dolina Biedronka",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 82.0,
        "Carbohydrates": 0.7
    },
    {
        "Id": 690,
        "Name": "Masło Ekstra Mleczna Dolina Biedronka",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 83.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 691,
        "Name": "Chipsy z topinambura z sola morską Crispy natural",
        "CategoryId": 0,
        "Protein": 8.9,
        "Fat": 0.4,
        "Carbohydrates": 2.6
    },
    {
        "Id": 692,
        "Name": "Mleczko kokosowe Smaki Świata Biedronka",
        "CategoryId": 0,
        "Protein": 1.2,
        "Fat": 18.0,
        "Carbohydrates": 1.5
    },
    {
        "Id": 693,
        "Name": "Chipsy kokosowe bio Diet Food",
        "CategoryId": 0,
        "Protein": 6.9,
        "Fat": 64.0,
        "Carbohydrates": 8.4
    },
    {
        "Id": 694,
        "Name": "Krem czekoladowy Le Gamberi",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 48.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 695,
        "Name": "Miąższ kokosowy Bio Coco Farm",
        "CategoryId": 0,
        "Protein": 6.1,
        "Fat": 67.0,
        "Carbohydrates": 9.1
    },
    {
        "Id": 696,
        "Name": "Napój sojowy Adez",
        "CategoryId": 0,
        "Protein": 2.9,
        "Fat": 2.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 697,
        "Name": "Tahini jasne Primavika",
        "CategoryId": 0,
        "Protein": 33.0,
        "Fat": 45.0,
        "Carbohydrates": 4.4
    },
    {
        "Id": 698,
        "Name": "Mozarella BardzoBuona",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 23.0,
        "Carbohydrates": 0.1
    },
    {
        "Id": 699,
        "Name": "Samsok z malin Viands",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.2,
        "Carbohydrates": 4.8
    },
    {
        "Id": 700,
        "Name": "Napoj migdałowy Vitanella Biedronka",
        "CategoryId": 0,
        "Protein": 0.3,
        "Fat": 1.1,
        "Carbohydrates": 3.0
    },
    {
        "Id": 701,
        "Name": "Salami wieprzowo-wołowe Nature Kraina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 31.0,
        "Carbohydrates": 0.2
    },
    {
        "Id": 702,
        "Name": "Kiełki słonecznika Vital fresh Biedronka",
        "CategoryId": 0,
        "Protein": 9.5,
        "Fat": 24.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 703,
        "Name": "Kiełki pora",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 1.4,
        "Carbohydrates": 0.0
    },
    {
        "Id": 704,
        "Name": "Chrupki pałeczki kukurydziane Miami Biedornka",
        "CategoryId": 0,
        "Protein": 8.1,
        "Fat": 2.8,
        "Carbohydrates": 80.0
    },
    {
        "Id": 705,
        "Name": "Pistacje prażone solone Top Biedronka",
        "CategoryId": 0,
        "Protein": 20.0,
        "Fat": 53.0,
        "Carbohydrates": 16.0
    },
    {
        "Id": 706,
        "Name": "Napój kokosowy Adez",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.9,
        "Carbohydrates": 3.2
    },
    {
        "Id": 707,
        "Name": "Napój migdałowy Adez",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 1.1,
        "Carbohydrates": 0.5
    },
    {
        "Id": 708,
        "Name": "Parówki z szynki i cielęciny Głodniaki Karina Wędlin Biedronka",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 20.0,
        "Carbohydrates": 1.4
    },
    {
        "Id": 709,
        "Name": "Czekolada gorzka 85% Cavalier",
        "CategoryId": 0,
        "Protein": 5.3,
        "Fat": 34.8,
        "Carbohydrates": 10.0
    },
    {
        "Id": 710,
        "Name": "Orzechy brazylijskie Alesto Lidl",
        "CategoryId": 0,
        "Protein": 14.7,
        "Fat": 67.4,
        "Carbohydrates": 3.6
    },
    {
        "Id": 711,
        "Name": "Migdały Alesto Lidl",
        "CategoryId": 0,
        "Protein": 24.2,
        "Fat": 56.0,
        "Carbohydrates": 5.4
    },
    {
        "Id": 712,
        "Name": "Orzeszki ziemne Alesto Lidl",
        "CategoryId": 0,
        "Protein": 24.4,
        "Fat": 51.2,
        "Carbohydrates": 11.0
    },
    {
        "Id": 713,
        "Name": "Orzeszki ziemne smażone Alesto Lidl",
        "CategoryId": 0,
        "Protein": 24.4,
        "Fat": 51.2,
        "Carbohydrates": 11.0
    },
    {
        "Id": 714,
        "Name": "Pistacje kalifornijskie prażone i solone Alesto Lidl",
        "CategoryId": 0,
        "Protein": 26.5,
        "Fat": 49.2,
        "Carbohydrates": 10.3
    },
    {
        "Id": 715,
        "Name": "Orzeszki pinii Alesto Lidl",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 55.0,
        "Carbohydrates": 21.7
    },
    {
        "Id": 716,
        "Name": "Migdały całe Belbake Lidl",
        "CategoryId": 0,
        "Protein": 24.2,
        "Fat": 56.0,
        "Carbohydrates": 5.4
    },
    {
        "Id": 717,
        "Name": "Słonecznik prażony i solony Alesto Lidl",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 56.0,
        "Carbohydrates": 7.5
    },
    {
        "Id": 718,
        "Name": "Kapary Freshona Lidl",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 0.6,
        "Carbohydrates": 2.6
    },
    {
        "Id": 719,
        "Name": "Wiórki kokosowe Belbake Lidl",
        "CategoryId": 0,
        "Protein": 7.0,
        "Fat": 61.0,
        "Carbohydrates": 7.3
    },
    {
        "Id": 720,
        "Name": "Masło orzechowe smooth Mcennedy Lidl",
        "CategoryId": 0,
        "Protein": 25.2,
        "Fat": 52.4,
        "Carbohydrates": 10.9
    },
    {
        "Id": 721,
        "Name": "Masło orzechowe crunchy Mcennedy Lidl",
        "CategoryId": 0,
        "Protein": 25.3,
        "Fat": 50.4,
        "Carbohydrates": 12.3
    },
    {
        "Id": 722,
        "Name": "Parówki z indyka Pikok Pure Lidl",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 14.0,
        "Carbohydrates": 0.9
    },
    {
        "Id": 723,
        "Name": "Czekolada gorzka 80% Wedel",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 42.0,
        "Carbohydrates": 20.0
    },
    {
        "Id": 724,
        "Name": "Twaróg śmietankowy ze Strzałkowa",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 16.0,
        "Carbohydrates": 4.2
    },
    {
        "Id": 725,
        "Name": "Mascarpone Mlekpol",
        "CategoryId": 0,
        "Protein": 4.5,
        "Fat": 40.0,
        "Carbohydrates": 2.5
    },
    {
        "Id": 726,
        "Name": "Mąka migdałowa Helcom",
        "CategoryId": 0,
        "Protein": 24.0,
        "Fat": 54.0,
        "Carbohydrates": 10.0
    },
    {
        "Id": 727,
        "Name": "Herbata owocowa, napar bez cukru",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 728,
        "Name": "Serek o smaku naturalnym Krasnystaw",
        "CategoryId": 0,
        "Protein": 6.5,
        "Fat": 9.0,
        "Carbohydrates": 3.9
    },
    {
        "Id": 729,
        "Name": "Mąka z lnu eko Bio Planet",
        "CategoryId": 0,
        "Protein": 40.0,
        "Fat": 8.8,
        "Carbohydrates": 3.9
    },
    {
        "Id": 730,
        "Name": "Sos sojowy bezglutenowy Kikkoman",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 0.0,
        "Carbohydrates": 2.0
    },
    {
        "Id": 731,
        "Name": "Nori wodorosty sushi Asia Flavours",
        "CategoryId": 0,
        "Protein": 54.0,
        "Fat": 3.5,
        "Carbohydrates": 40.0
    },
    {
        "Id": 732,
        "Name": "Ser Halloumi Elios Biedronka",
        "CategoryId": 0,
        "Protein": 22.0,
        "Fat": 25.0,
        "Carbohydrates": 1.9
    },
    {
        "Id": 733,
        "Name": "Barszcz czerwony Krakus w kartonie",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.0,
        "Carbohydrates": 7.1
    },
    {
        "Id": 734,
        "Name": "Szparagi ugotowane",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 0.2,
        "Carbohydrates": 2.1
    },
    {
        "Id": 735,
        "Name": "Karczoch ugotowany z solą",
        "CategoryId": 0,
        "Protein": 2.9,
        "Fat": 2.8,
        "Carbohydrates": 8.6
    },
    {
        "Id": 736,
        "Name": "Banan zielony",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.3,
        "Carbohydrates": 14.2
    },
    {
        "Id": 737,
        "Name": "Pumpernikiel Schulstad",
        "CategoryId": 0,
        "Protein": 5.4,
        "Fat": 2.2,
        "Carbohydrates": 43.0
    },
    {
        "Id": 738,
        "Name": "Ogórki konserwowe Krakus",
        "CategoryId": 0,
        "Protein": 0.4,
        "Fat": 0.4,
        "Carbohydrates": 6.6
    },
    {
        "Id": 739,
        "Name": "Mięso z uda kurczaka ze skórą",
        "CategoryId": 0,
        "Protein": 16.8,
        "Fat": 10.2,
        "Carbohydrates": 0.0
    },
    {
        "Id": 740,
        "Name": "Mięso z królika",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 8.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 741,
        "Name": "Kasza gryczana ugotowana",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 1.1,
        "Carbohydrates": 22.2
    },
    {
        "Id": 742,
        "Name": "Kasza jaglana ugotowana",
        "CategoryId": 0,
        "Protein": 3.6,
        "Fat": 0.9,
        "Carbohydrates": 21.9
    },
    {
        "Id": 743,
        "Name": "Chleb żytni jasny",
        "CategoryId": 0,
        "Protein": 4.1,
        "Fat": 1.3,
        "Carbohydrates": 53.3
    },
    {
        "Id": 744,
        "Name": "Chleb baltonowski",
        "CategoryId": 0,
        "Protein": 7.7,
        "Fat": 1.5,
        "Carbohydrates": 51.5
    },
    {
        "Id": 745,
        "Name": "Chleb mazowiecki",
        "CategoryId": 0,
        "Protein": 8.3,
        "Fat": 1.4,
        "Carbohydrates": 51.8
    },
    {
        "Id": 746,
        "Name": "Bułki grahamki",
        "CategoryId": 0,
        "Protein": 9.6,
        "Fat": 1.7,
        "Carbohydrates": 49.4
    },
    {
        "Id": 747,
        "Name": "Bułki wrocławskie",
        "CategoryId": 0,
        "Protein": 8.8,
        "Fat": 4.4,
        "Carbohydrates": 54.8
    },
    {
        "Id": 748,
        "Name": "Kajzerki",
        "CategoryId": 0,
        "Protein": 9.2,
        "Fat": 3.6,
        "Carbohydrates": 56.7
    },
    {
        "Id": 749,
        "Name": "Chrupki kukurydziane zwykłe",
        "CategoryId": 0,
        "Protein": 8.9,
        "Fat": 3.0,
        "Carbohydrates": 71.3
    },
    {
        "Id": 750,
        "Name": "Herbata, napar bez cukru",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 751,
        "Name": "Kawa, napar bez cukru",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 752,
        "Name": "Drożdże piekarskie świeże",
        "CategoryId": 0,
        "Protein": 11.3,
        "Fat": 2.0,
        "Carbohydrates": 7.1
    },
    {
        "Id": 753,
        "Name": "Sól",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 754,
        "Name": "Żelatyna",
        "CategoryId": 0,
        "Protein": 84.2,
        "Fat": 0.1,
        "Carbohydrates": 0.0
    },
    {
        "Id": 755,
        "Name": "Gęś pieczona",
        "CategoryId": 0,
        "Protein": 19.9,
        "Fat": 19.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 756,
        "Name": "Kaczka pierś ze skórą pieczona",
        "CategoryId": 0,
        "Protein": 24.5,
        "Fat": 10.85,
        "Carbohydrates": 0.0
    },
    {
        "Id": 757,
        "Name": "Watróbka wieprzowa saute, smażona",
        "CategoryId": 0,
        "Protein": 21.8,
        "Fat": 18.0,
        "Carbohydrates": 5.3
    },
    {
        "Id": 758,
        "Name": "Polędwica wołowa w sosie własnym pieczona",
        "CategoryId": 0,
        "Protein": 21.5,
        "Fat": 12.6,
        "Carbohydrates": 0.0
    }
]`;

export const getIngredients = () => {
    const ingredients = JSON.parse(json);
    return ingredients.sort(function(a, b) {
        var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
}