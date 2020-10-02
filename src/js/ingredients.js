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
        "Fat": 95.0,
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
        "Name": "MCT keto source",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 14,
        "Name": "białko jaja kurzego surowe, gotowane",
        "CategoryId": 0,
        "Protein": 10.9,
        "Fat": 0.2,
        "Carbohydrates": 0.7
    },
    {
        "Id": 15,
        "Name": "jaja kurze całe surowe, gotowane",
        "CategoryId": 0,
        "Protein": 12.5,
        "Fat": 9.7,
        "Carbohydrates": 0.6
    },
    {
        "Id": 16,
        "Name": "jajo przepiórcze",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 11.0,
        "Carbohydrates": 0.4
    },
    {
        "Id": 17,
        "Name": "żółtko jaja kurzego surowe, gotowane",
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
        "Name": "Indyk pieczony",
        "CategoryId": 0,
        "Protein": 22.6,
        "Fat": 10.5,
        "Carbohydrates": 0.0
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
        "Name": "Wątróbka kurczaka surowy",
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
        "Name": "Łosoś pieczony",
        "CategoryId": 0,
        "Protein": 27.0,
        "Fat": 15.7,
        "Carbohydrates": 0.0
    },
    {
        "Id": 60,
        "Name": "Łosoś smażony bez tłuszczu",
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
        "Name": "tuńczyk puszka calvo",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 32.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 78,
        "Name": "tuńczyk 1",
        "CategoryId": 0,
        "Protein": 29.0,
        "Fat": 8.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 79,
        "Name": "tuńczyk 2",
        "CategoryId": 0,
        "Protein": 26.0,
        "Fat": 0.8,
        "Carbohydrates": 0.0
    },
    {
        "Id": 80,
        "Name": "100% z mięsa parówki Goodvalley",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 24.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 81,
        "Name": "Boczek Morliny w kostce",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 28.0,
        "Carbohydrates": 0.5
    },
    {
        "Id": 82,
        "Name": "Frankfurterki wedzone Biedronka",
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
        "Name": "Kiełbasa krucha z galaretka Madej Wróbel",
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
        "Name": "Kiełbasa wieprzowa z cielęciną",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 17.0,
        "Carbohydrates": 0.4
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
        "Name": "Parówki Sokoliki Sokołów",
        "CategoryId": 0,
        "Protein": 14.5,
        "Fat": 13.0,
        "Carbohydrates": 0.8
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
        "Name": "Salai delikatesowe Biedronka",
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
        "Name": "Stara wędzarnia parówki z cielęciną",
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
        "Name": "Kabanosy francuskie",
        "CategoryId": 0,
        "Protein": 26.0,
        "Fat": 48.0,
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
        "Name": "Apetina serek kremowy",
        "CategoryId": 0,
        "Protein": 7.8,
        "Fat": 16.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 114,
        "Name": "Feta Apetina Classic Arla",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 17.0,
        "Carbohydrates": 3.9
    },
    {
        "Id": 115,
        "Name": "Feta Athos",
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
        "Name": "Milandia serek śmietankowy Piątnica",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 23.0,
        "Carbohydrates": 3.0
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
        "Name": "Mozarella Galbani w kawałku",
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
        "Name": "Oscypek Mlekowita",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 18.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 123,
        "Name": "Oscypek ser Janosika milkeffekt",
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
        "Name": "Ser gouda Mlekowita plastry",
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
        "Name": "Ser, warkocze wędzone",
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
        "Name": "Serek śmietankowy Twój smak Piątnica",
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
        "Name": "Twaróg sernikowy 18% 3,3w wiaderko Piątnica/Biedronka",
        "CategoryId": 0,
        "Protein": 7.8,
        "Fat": 18.0,
        "Carbohydrates": 3.3
    },
    {
        "Id": 143,
        "Name": "Twaróg sernikowy 18% Piątnica/Biedronka",
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
        "Name": "mleko kobiece",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 4.3,
        "Carbohydrates": 7.0
    },
    {
        "Id": 149,
        "Name": "mleko 2%",
        "CategoryId": 0,
        "Protein": 3.3,
        "Fat": 2.0,
        "Carbohydrates": 4.8
    },
    {
        "Id": 150,
        "Name": "mleko owsiane Barista gluten free oats drink",
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
        "Name": "mleko 3,2% mlekovita",
        "CategoryId": 0,
        "Protein": 3.0,
        "Fat": 3.2,
        "Carbohydrates": 4.7
    },
    {
        "Id": 153,
        "Name": "Mleko kokosowe Vitasia",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 21.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 154,
        "Name": "mleko jaglane",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 1.1,
        "Carbohydrates": 10.5
    },
    {
        "Id": 155,
        "Name": "mleko kozie",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 33.0,
        "Carbohydrates": 32.0
    },
    {
        "Id": 156,
        "Name": "mleko owsiane",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.8,
        "Carbohydrates": 7.7
    },
    {
        "Id": 157,
        "Name": "mleko sojowe Alpro",
        "CategoryId": 0,
        "Protein": 3.2,
        "Fat": 1.8,
        "Carbohydrates": 2.8
    },
    {
        "Id": 158,
        "Name": "mleko sojowe Alpro Light  Fresh",
        "CategoryId": 0,
        "Protein": 2.0,
        "Fat": 1.2,
        "Carbohydrates": 0.1
    },
    {
        "Id": 159,
        "Name": "mleko migdałowe Sante organic",
        "CategoryId": 0,
        "Protein": 0.3,
        "Fat": 1.0,
        "Carbohydrates": 0.3
    },
    {
        "Id": 160,
        "Name": "bakoma jogurt bio jagoda",
        "CategoryId": 0,
        "Protein": 3.4,
        "Fat": 2.5,
        "Carbohydrates": 14.2
    },
    {
        "Id": 161,
        "Name": "bakoma jogurt bio owoce lesne",
        "CategoryId": 0,
        "Protein": 3.4,
        "Fat": 2.5,
        "Carbohydrates": 14.2
    },
    {
        "Id": 162,
        "Name": "bieluch",
        "CategoryId": 0,
        "Protein": 8.6,
        "Fat": 8.5,
        "Carbohydrates": 4.0
    },
    {
        "Id": 163,
        "Name": "bio jogurt bakoma",
        "CategoryId": 0,
        "Protein": 4.8,
        "Fat": 2.0,
        "Carbohydrates": 7.0
    },
    {
        "Id": 164,
        "Name": "bio jogurt naturalny",
        "CategoryId": 0,
        "Protein": 5.0,
        "Fat": 3.8,
        "Carbohydrates": 4.7
    },
    {
        "Id": 165,
        "Name": "danmis kozi ser",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 12.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 166,
        "Name": "danone jogurt",
        "CategoryId": 0,
        "Protein": 4.6,
        "Fat": 3.0,
        "Carbohydrates": 5.8
    },
    {
        "Id": 167,
        "Name": "day up kokos",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 4.9,
        "Carbohydrates": 15.7
    },
    {
        "Id": 168,
        "Name": "jogurt grecki pilos",
        "CategoryId": 0,
        "Protein": 4.0,
        "Fat": 10.0,
        "Carbohydrates": 5.5
    },
    {
        "Id": 169,
        "Name": "jogurt kokosowy planton",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 7.1,
        "Carbohydrates": 6.7
    },
    {
        "Id": 170,
        "Name": "jogurt naturalny piatnica",
        "CategoryId": 0,
        "Protein": 4.0,
        "Fat": 2.0,
        "Carbohydrates": 5.9
    },
    {
        "Id": 171,
        "Name": "jogurt naturalny zott",
        "CategoryId": 0,
        "Protein": 4.8,
        "Fat": 3.1,
        "Carbohydrates": 4.0
    },
    {
        "Id": 172,
        "Name": "jogurt typu greckiego tolonnis",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 0.0,
        "Carbohydrates": 4.6
    },
    {
        "Id": 173,
        "Name": "jogurt typu islandzkiego jagoda",
        "CategoryId": 0,
        "Protein": 9.6,
        "Fat": 0.0,
        "Carbohydrates": 11.0
    },
    {
        "Id": 174,
        "Name": "jogurt z plusem",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 0.0,
        "Carbohydrates": 5.2
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
        "Name": "ser kozi pilos",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 19.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 177,
        "Name": "twaróg Piątnica tłusty",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 8.0,
        "Carbohydrates": 3.7
    },
    {
        "Id": 178,
        "Name": "twaróg półtlusty pilos",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 4.0,
        "Carbohydrates": 3.7
    },
    {
        "Id": 179,
        "Name": "twaróg półtlusty wloszczowa",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 5.8,
        "Carbohydrates": 3.3
    },
    {
        "Id": 180,
        "Name": "twaróg tłusty milsani",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 8.0,
        "Carbohydrates": 3.1
    },
    {
        "Id": 181,
        "Name": "twaróg tłusty pilos",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 8.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 182,
        "Name": "twaróg mlekpol tłusty",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 8.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 183,
        "Name": "twaróg półtłusty ulubione",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 4.0,
        "Carbohydrates": 3.7
    },
    {
        "Id": 184,
        "Name": "Ulubiony twaróg tłusty",
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
        "Name": "Masło z migdałów prażonych Primavika",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 52.0,
        "Carbohydrates": 19.0
    },
    {
        "Id": 190,
        "Name": "Nasiona chia Melvit",
        "CategoryId": 0,
        "Protein": 21.0,
        "Fat": 31.0,
        "Carbohydrates": 5.0
    },
    {
        "Id": 191,
        "Name": "Nasiona chia Sante",
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
        "Name": "chia",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 32.8,
        "Carbohydrates": 3.3
    },
    {
        "Id": 203,
        "Name": "czarnuszka",
        "CategoryId": 0,
        "Protein": 16.0,
        "Fat": 15.0,
        "Carbohydrates": 52.0
    },
    {
        "Id": 204,
        "Name": "masło z orzechów laskowych EkoGram the real hazelnut past",
        "CategoryId": 0,
        "Protein": 11.6,
        "Fat": 67.5,
        "Carbohydrates": 11.0
    },
    {
        "Id": 205,
        "Name": "masło z pekanów Purely Pecans",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 72.0,
        "Carbohydrates": 12.0
    },
    {
        "Id": 206,
        "Name": "Oliwki",
        "CategoryId": 0,
        "Protein": 1.5,
        "Fat": 23.0,
        "Carbohydrates": 0.1
    },
    {
        "Id": 207,
        "Name": "orzechy laskowe Sante",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 61.0,
        "Carbohydrates": 3.4
    },
    {
        "Id": 208,
        "Name": "Orzechy Pecan Lidl",
        "CategoryId": 0,
        "Protein": 10.1,
        "Fat": 72.1,
        "Carbohydrates": 5.2
    },
    {
        "Id": 209,
        "Name": "ostropest plamisty mielony",
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
        "Carbohydrates": 12.1
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
        "Name": "Gerber Jabłko brzoskwinia",
        "CategoryId": 0,
        "Protein": 0.3,
        "Fat": 0.1,
        "Carbohydrates": 10.5
    },
    {
        "Id": 223,
        "Name": "Gerber Jabłko morela",
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
        "Carbohydrates": 3.80
    },
    {
        "Id": 255,
        "Name": "Boćwina",
        "CategoryId": 0,
        "Protein": 2.1,
        "Fat": 0.5,
        "Carbohydrates": 1.10
    },
    {
        "Id": 256,
        "Name": "Bób",
        "CategoryId": 0,
        "Protein": 7.1,
        "Fat": 0.4,
        "Carbohydrates": 8.20
    },
    {
        "Id": 257,
        "Name": "brokuł gotowany w wodzie",
        "CategoryId": 0,
        "Protein": 2.2,
        "Fat": 0.3,
        "Carbohydrates": 2.0
    },
    {
        "Id": 258,
        "Name": "Brokuł mrożony różyczki Chira Lidl",
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
        "Carbohydrates": 2.70
    },
    {
        "Id": 260,
        "Name": "Brukselka",
        "CategoryId": 0,
        "Protein": 4.7,
        "Fat": 0.5,
        "Carbohydrates": 3.30
    },
    {
        "Id": 261,
        "Name": "brukselka gotowana w wodzie",
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
        "Carbohydrates": 7.30
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
        "Name": "buraki gotowane w wodzie",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.1,
        "Carbohydrates": 6.5
    },
    {
        "Id": 265,
        "Name": "Buraki Lidl gotowane ",
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
        "Carbohydrates": 5.20
    },
    {
        "Id": 267,
        "Name": "Chrzan",
        "CategoryId": 0,
        "Protein": 4.5,
        "Fat": 0.6,
        "Carbohydrates": 10.80
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
        "Carbohydrates": 2.20
    },
    {
        "Id": 270,
        "Name": "Cykoria",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 0.2,
        "Carbohydrates": 3.10
    },
    {
        "Id": 271,
        "Name": "Czosnek",
        "CategoryId": 0,
        "Protein": 6.4,
        "Fat": 0.5,
        "Carbohydrates": 28.50
    },
    {
        "Id": 272,
        "Name": "Dynia",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.3,
        "Carbohydrates": 4.90
    },
    {
        "Id": 273,
        "Name": "Fasola biała, nasiona suche",
        "CategoryId": 0,
        "Protein": 21.4,
        "Fat": 1.6,
        "Carbohydrates": 45.90
    },
    {
        "Id": 274,
        "Name": "Fasola mung, kiełki",
        "CategoryId": 0,
        "Protein": 3.0,
        "Fat": 0.4,
        "Carbohydrates": 3.20
    },
    {
        "Id": 275,
        "Name": "Fasola szparagowa",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 0.2,
        "Carbohydrates": 5.00
    },
    {
        "Id": 276,
        "Name": "fasola szparagowa gotowana w wodzie",
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
        "Carbohydrates": 45.20
    },
    {
        "Id": 279,
        "Name": "Groszek zielony",
        "CategoryId": 0,
        "Protein": 6.7,
        "Fat": 0.4,
        "Carbohydrates": 11.00
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
        "Name": "groszek zielony gotowany w wodzie",
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
        "Carbohydrates": 2.30
    },
    {
        "Id": 284,
        "Name": "Kalafior",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 0.2,
        "Carbohydrates": 2.60
    },
    {
        "Id": 285,
        "Name": "kalafior gotowany w wodzie",
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
        "Carbohydrates": 4.30
    },
    {
        "Id": 287,
        "Name": "Kapusta biała",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 0.2,
        "Carbohydrates": 4.90
    },
    {
        "Id": 288,
        "Name": "Kapusta czerwona",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.2,
        "Carbohydrates": 4.20
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
        "Carbohydrates": 1.30
    },
    {
        "Id": 292,
        "Name": "Kapusta włoska",
        "CategoryId": 0,
        "Protein": 3.3,
        "Fat": 0.4,
        "Carbohydrates": 5.20
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
        "Carbohydrates": 2.80
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
        "Carbohydrates": 20.10
    },
    {
        "Id": 301,
        "Name": "Marchew",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 5.10
    },
    {
        "Id": 302,
        "Name": "marchew gotowana w wodzie",
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
        "Name": "Ogórek",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.1,
        "Carbohydrates": 2.40
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
        "Carbohydrates": 4.60
    },
    {
        "Id": 311,
        "Name": "Papryka zielona",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.3,
        "Carbohydrates": 2.60
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
        "Carbohydrates": 11.00
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
        "Carbohydrates": 6.30
    },
    {
        "Id": 316,
        "Name": "Pietruszka, liście",
        "CategoryId": 0,
        "Protein": 4.4,
        "Fat": 0.4,
        "Carbohydrates": 4.80
    },
    {
        "Id": 317,
        "Name": "Pomidor",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.2,
        "Carbohydrates": 2.90
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
        "Carbohydrates": 3.00
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
        "Carbohydrates": 1.40
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
        "Carbohydrates": 4.70
    },
    {
        "Id": 325,
        "Name": "Rzodkiewka",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 1.90
    },
    {
        "Id": 326,
        "Name": "Sałata",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.2,
        "Carbohydrates": 1.50
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
        "Carbohydrates": 2.80
    },
    {
        "Id": 330,
        "Name": "Seler naciowy",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 0.2,
        "Carbohydrates": 1.80
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
        "Carbohydrates": 48.60
    },
    {
        "Id": 334,
        "Name": "Soczewica, kiełki",
        "CategoryId": 0,
        "Protein": 9.0,
        "Fat": 0.6,
        "Carbohydrates": 19.10
    },
    {
        "Id": 335,
        "Name": "Soja, kiełki",
        "CategoryId": 0,
        "Protein": 13.1,
        "Fat": 6.7,
        "Carbohydrates": 7.00
    },
    {
        "Id": 336,
        "Name": "Soja, nasiona suche",
        "CategoryId": 0,
        "Protein": 34.3,
        "Fat": 19.6,
        "Carbohydrates": 17.00
    },
    {
        "Id": 337,
        "Name": "Szczaw",
        "CategoryId": 0,
        "Protein": 1.1,
        "Fat": 0.8,
        "Carbohydrates": 2.30
    },
    {
        "Id": 338,
        "Name": "Szczypiorek",
        "CategoryId": 0,
        "Protein": 4.1,
        "Fat": 0.8,
        "Carbohydrates": 1.70
    },
    {
        "Id": 339,
        "Name": "Szparagi",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.2,
        "Carbohydrates": 2.20
    },
    {
        "Id": 340,
        "Name": "Szpinak",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 0.4,
        "Carbohydrates": 0.90
    },
    {
        "Id": 341,
        "Name": "Zielony groszek, Bonduelle konserwa",
        "CategoryId": 0,
        "Protein": 6.0,
        "Fat": 1.0,
        "Carbohydrates": 7.1
    },
    {
        "Id": 342,
        "Name": "ziemniaki gotowane w wodzie",
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
        "Carbohydrates": 18.90
    },
    {
        "Id": 344,
        "Name": "Ziemniaki, średnio",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 0.1,
        "Carbohydrates": 16.80
    },
    {
        "Id": 345,
        "Name": "Ziemniaki, wczesne",
        "CategoryId": 0,
        "Protein": 1.8,
        "Fat": 0.1,
        "Carbohydrates": 15.00
    },
    {
        "Id": 346,
        "Name": "rabarbar",
        "CategoryId": 0,
        "Protein": 0.9,
        "Fat": 0.2,
        "Carbohydrates": 4.5
    },
    {
        "Id": 347,
        "Name": "przecier pomidorowy Sottile Gusto Biedronka",
        "CategoryId": 0,
        "Protein": 1.6,
        "Fat": 0.5,
        "Carbohydrates": 4.6
    },
    {
        "Id": 348,
        "Name": "koncentrat pomidorowy Pudliszki",
        "CategoryId": 0,
        "Protein": 5.6,
        "Fat": 1.5,
        "Carbohydrates": 16.7
    },
    {
        "Id": 349,
        "Name": "passata pomidorowa Dawtona",
        "CategoryId": 0,
        "Protein": 1.3,
        "Fat": 0.0,
        "Carbohydrates": 3.8
    },
    {
        "Id": 350,
        "Name": "Chleb Pro Body Putka 5,5w",
        "CategoryId": 0,
        "Protein": 25.0,
        "Fat": 18.4,
        "Carbohydrates": 5.5
    },
    {
        "Id": 351,
        "Name": "Chleb Pro Body Putka 6,1w",
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
        "Fat": 1.7,
        "Carbohydrates": 25.0
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
        "Name": "Mąka kokosowa odtłuszczona-Efavit",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 24.0,
        "Carbohydrates": 13.0
    },
    {
        "Id": 360,
        "Name": "Mąka kokosowa-Bio planet",
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
        "Name": "Amarantus",
        "CategoryId": 0,
        "Protein": 8.8,
        "Fat": 4.3,
        "Carbohydrates": 70.0
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
        "Name": "Masło klarowane Mlekowita",
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
        "Name": "Śmietana 36% Piątnica",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 36.0,
        "Carbohydrates": 4.1
    },
    {
        "Id": 376,
        "Name": "Śmietana President 30%",
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
        "Name": "śmietana kokosowa planton",
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
        "Name": "kasza gryczana niepalona",
        "CategoryId": 0,
        "Protein": 6.2,
        "Fat": 3.1,
        "Carbohydrates": 74.0
    },
    {
        "Id": 382,
        "Name": "kasza kuskus po ugotowaniu",
        "CategoryId": 0,
        "Protein": 4.0,
        "Fat": 0.6,
        "Carbohydrates": 20.4
    },
    {
        "Id": 383,
        "Name": "kaszka bio jg z amarantusem",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 4.1,
        "Carbohydrates": 65.0
    },
    {
        "Id": 384,
        "Name": "kaszka czary mamy",
        "CategoryId": 0,
        "Protein": 12.98,
        "Fat": 4.11,
        "Carbohydrates": 65.11
    },
    {
        "Id": 385,
        "Name": "kaszka gryczana",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 2.6,
        "Carbohydrates": 70.0
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
        "Name": "Czekolada gorzka Balance Rossmann",
        "CategoryId": 0,
        "Protein": 5.7,
        "Fat": 36.8,
        "Carbohydrates": 14.0
    },
    {
        "Id": 390,
        "Name": "Czekolada Wawel 90%",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 44.0,
        "Carbohydrates": 17.0
    },
    {
        "Id": 391,
        "Name": "Czkolada gorzka 95% Biedronka",
        "CategoryId": 0,
        "Protein": 12.0,
        "Fat": 51.0,
        "Carbohydrates": 8.5
    },
    {
        "Id": 392,
        "Name": "Galaretka bez cukru Celiko cytryna, sucha ",
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
        "Name": "Seed and berry granola",
        "CategoryId": 0,
        "Protein": 18.9,
        "Fat": 30.7,
        "Carbohydrates": 8.3
    },
    {
        "Id": 398,
        "Name": "Seed and nut granola",
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
        "Name": "Galaretka bez cukru Celiko truskawka, sucha ",
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
        "Name": "Bobovita bukiet jarzyn z kurczakiem",
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
        "Name": "Bobovita Porcja zbóż delikatna owsianka",
        "CategoryId": 0,
        "Protein": 15.0,
        "Fat": 6.9,
        "Carbohydrates": 66.0
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
        "Name": "Gerber delikatny kurczak",
        "CategoryId": 0,
        "Protein": 9.3,
        "Fat": 2.5,
        "Carbohydrates": 3.8
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
        "Name": "Bobovita jablkko z awokado i zielonymi warzywami",
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
        "Name": "Bobovita Bio bezmleczna kaszka wielozboózwa pełnoziarnista ",
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
        "Name": "Babydream danie miesne z wolowina",
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
        "Name": "Przecier Pudliszki",
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
        "Name": "mąka keto cusine",
        "CategoryId": 0,
        "Protein": 4.4,
        "Fat": 73.0,
        "Carbohydrates": 10.0
    },
    {
        "Id": 435,
        "Name": "Gamberi makaron",
        "CategoryId": 0,
        "Protein": 34.8,
        "Fat": 5.0,
        "Carbohydrates": 1.8
    },
    {
        "Id": 436,
        "Name": "gamberi croissant",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 31.0,
        "Carbohydrates": 2.6
    },
    {
        "Id": 437,
        "Name": "Gamberi bułka tarta",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 23.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 438,
        "Name": "Gamberi fetta",
        "CategoryId": 0,
        "Protein": 14.0,
        "Fat": 34.0,
        "Carbohydrates": 2.9
    },
    {
        "Id": 439,
        "Name": "gamberi panino",
        "CategoryId": 0,
        "Protein": 11.0,
        "Fat": 28.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 440,
        "Name": "Gamberi piadina",
        "CategoryId": 0,
        "Protein": 10.0,
        "Fat": 26.0,
        "Carbohydrates": 3.0
    },
    {
        "Id": 441,
        "Name": "ser duński",
        "CategoryId": 0,
        "Protein": 19.0,
        "Fat": 38.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 442,
        "Name": "18%  śmietana Piątnica",
        "CategoryId": 0,
        "Protein": 2.7,
        "Fat": 18.0,
        "Carbohydrates": 4.8
    },
    {
        "Id": 443,
        "Name": "18% Jogo śmietana",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 18.0,
        "Carbohydrates": 2.4
    },
    {
        "Id": 444,
        "Name": "18% Śmietana mlekovita",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 18.0,
        "Carbohydrates": 3.9
    },
    {
        "Id": 445,
        "Name": "finnu",
        "CategoryId": 0,
        "Protein": 0.8,
        "Fat": 75.0,
        "Carbohydrates": 1.1
    },
    {
        "Id": 446,
        "Name": "majonez kielecki",
        "CategoryId": 0,
        "Protein": 1.9,
        "Fat": 68.0,
        "Carbohydrates": 2.3
    },
    {
        "Id": 447,
        "Name": "masło łaciate",
        "CategoryId": 0,
        "Protein": 0.6,
        "Fat": 83.0,
        "Carbohydrates": 0.8
    },
    {
        "Id": 448,
        "Name": "masło mlekovita",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 82.0,
        "Carbohydrates": 1.0
    },
    {
        "Id": 449,
        "Name": "masło tesco bez laktozy",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 83.0,
        "Carbohydrates": 0.7
    },
    {
        "Id": 450,
        "Name": "masło ulubione",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 82.0,
        "Carbohydrates": 0.6
    },
    {
        "Id": 451,
        "Name": "Masło extra 82% ",
        "CategoryId": 0,
        "Protein": 1.0,
        "Fat": 82.0,
        "Carbohydrates": 1.0
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
        "Name": "smalec gęsi",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 100.0,
        "Carbohydrates": 0.0
    },
    {
        "Id": 455,
        "Name": "Śmietana 18 pilos",
        "CategoryId": 0,
        "Protein": 2.4,
        "Fat": 18.0,
        "Carbohydrates": 3.9
    },
    {
        "Id": 456,
        "Name": "ŚMIETANA 18% MILSA",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 18.0,
        "Carbohydrates": 3.5
    },
    {
        "Id": 457,
        "Name": "Śmietana 18% zott",
        "CategoryId": 0,
        "Protein": 2.6,
        "Fat": 18.0,
        "Carbohydrates": 3.1
    },
    {
        "Id": 458,
        "Name": "smalec wieprzowy",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 99.5,
        "Carbohydrates": 0.0
    },
    {
        "Id": 459,
        "Name": "Śmietanka łowicka 36%",
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
        "Name": "KetoClassic 3:1 Bar",
        "CategoryId": 0,
        "Protein": 10.8,
        "Fat": 43.6,
        "Carbohydrates": 3.3
    },
    {
        "Id": 462,
        "Name": "Proszek do pieczenia Delecta",
        "CategoryId": 0,
        "Protein": 1.4,
        "Fat": 0.2,
        "Carbohydrates": 11.0
    },
    {
        "Id": 463,
        "Name": "Seed and berry granola Keto",
        "CategoryId": 0,
        "Protein": 18.9,
        "Fat": 30.7,
        "Carbohydrates": 8.3
    },
    {
        "Id": 464,
        "Name": "Seed and nut granola Keto",
        "CategoryId": 0,
        "Protein": 19.4,
        "Fat": 38.4,
        "Carbohydrates": 5.4
    },
    {
        "Id": 465,
        "Name": "Żelatyna spożywcza Delecta",
        "CategoryId": 0,
        "Protein": 87.0,
        "Fat": 0.02,
        "Carbohydrates": 0.0
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
        "Name": "Keczup z catering IMID",
        "CategoryId": 0,
        "Protein": 0.0,
        "Fat": 0.0,
        "Carbohydrates": 17.0
    },
    {
        "Id": 469,
        "Name": "Keczup Madero",
        "CategoryId": 0,
        "Protein": 1.7,
        "Fat": 0.3,
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
        "Name": "Mus Kubuś ban jab",
        "CategoryId": 0,
        "Protein": 0.7,
        "Fat": 0.3,
        "Carbohydrates": 16.1
    },
    {
        "Id": 472,
        "Name": "Almette z ziołami",
        "CategoryId": 0,
        "Protein": 6.1,
        "Fat": 25.0,
        "Carbohydrates": 2.3
    },
    {
        "Id": 473,
        "Name": "Almette śmietankowy",
        "CategoryId": 0,
        "Protein": 6.7,
        "Fat": 24.0,
        "Carbohydrates": 3.2
    },
    {
        "Id": 474,
        "Name": "Parówki Tarczyński naturalnie",
        "CategoryId": 0,
        "Protein": 17.0,
        "Fat": 16.0,
        "Carbohydrates": 0.2
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
        "Name": "Kleik ryżowy Bobovita ",
        "CategoryId": 0,
        "Protein": 7.6,
        "Fat": 1.0,
        "Carbohydrates": 85.0
    },
    {
        "Id": 477,
        "Name": "Kaszka mleczno ryżowa wanilia Bobovita",
        "CategoryId": 0,
        "Protein": 13.0,
        "Fat": 11.0,
        "Carbohydrates": 69.0
    }
]`;

export const getIngredients = () => {
    const ingredients = JSON.parse(json);
    return ingredients;
}