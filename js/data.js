function getDataDavid() {
    // Статус пользователей другий челленджей
    const Status = {
        Complete: "complete",
        Current: "current",
        Failed: "failed"
    }

    // Создание объекта тайтла
    /////////////////////////////////////////////////////////
    class Title {
        id;
        title;
        count;
        isShowing;

        constructor(id, title) {
            this.id = id;
            this.title = title;
            this.count = 0;
            this.isShowing = false;
        }
    }

    let david = {
        otherUsers: [
            {
                nickname: "GHAUR1",
                image: "images/users/Ghaur1.png",
                url: "https://anilist.co/activity/474754966",
                status: Status.Complete
            },
            {
                nickname: "OskarL",
                image: "images/users/OskarL.jpg",
                url: "https://anilist.co/activity/478516794",
                status: Status.Complete
            },
            {
                nickname: "Karandi",
                image: "images/users/Karandi.webp",
                url: "https://100wordanime.blog/category/30-day-anime-challenge/",
                status: Status.Complete
            },
            {
                nickname: "CH1KIM0N1",
                image: "images/users/CH1KIM0N1.png",
                url: "https://ch1kim0n1.github.io/100DayChallenge_ch1kim0n1.github.io/",
                status: Status.Current
            },
            {
                nickname: "SteveDekart",
                image: "images/users/stevedekart.jpg",
                url: "https://anilist.co/user/SteveDekart/",
                status: Status.Current
            },
            {
                nickname: "F41NZ",
                image: "images/users/F41NZ.jpg",
                url: "https://anilist.co/user/F41NZ/",
                status: Status.Current
            },
            {
                nickname: "Ani-Dotes",
                image: "images/users/dotes.jpg",
                url: "https://anidotesblog.wordpress.com/100-day-anime-challenge/",
                status: Status.Failed
            },
            {
                nickname: "Celestial Sparkles",
                image: "images/users/CelestialSparkles.png",
                url: "https://howanimestuffworks176744600.wordpress.com/category/anime-challenges-events/100-days-of-anime-challenge/",
                status: Status.Failed
            }
        ],
        listTitles: [
            new Title(0, "Attack on Titan"),
            new Title(1, "A Silent Voice"),
            new Title(2, "Hellsing Ultimate"),
            new Title(3, "Berserk"),
            new Title(4, "In the Land of Leadale"),
            new Title(5, "Sword Art Online"),
            new Title(6, "Tokyo Ghoul"),
            new Title(7, "Jujutsu Kaisen"),
            new Title(8, "Eighty-six"),
            new Title(9, "Fullmetal Alchemist Brotherhood"),
            new Title(10, "Welcome to Demon School Iruma-kun"),
            new Title(11, "Your lie in April"),
            new Title(12, "Konosuba"),
            new Title(13, "Demon Slayer"),
            new Title(14, "Death Note"),
            new Title(15, "Dandadan"),
            new Title(16, "Grand Blue"),
            new Title(17, "Chainsaw Man"),
            new Title(18, "That Time I Got Reincarnated as a Slime"),
            new Title(19, "The Rising Of The Shield Hero"),
            new Title(20, "The Eminence in Shadow"),
            new Title(21, "Overlord"),
            new Title(22, "Miss Kobayashi's Dragon Maid"),
            new Title(23, "Call of the Night"),
            new Title(24, "Horimiya"),
            new Title(25, "Kaguya-sama: Love Is War"),
            new Title(26, "Spy x Family"),
            new Title(27, "Yona of the Dawn"),
            new Title(28, "Question not related to a specific title"),
            new Title(29, "Spirited Away"),
            new Title(30, "Drifters"),
            new Title(31, "Bocchi the Rock!"),
            new Title(32, "Code Geass"),
            new Title(33, "Vinland Saga"),
            new Title(34, "Saga of Tanya the Evil"),
            new Title(35, "My Dress-Up Darling"),
            new Title(36, "Fruits Basket"),
            new Title(37, "Record of Ragnarok")
        ],

        // Мой список
        /////////////////////////////////////////////////////////
        listItems: [
            // 1 Day
            {
                title: "Very first anime you watched",
                link: "https://anilist.co/activity/474791414",
                image: "images/challenge/attackontitan.jpg",
                content: [0]
            },
            // 2 Day
            {
                title: "Favourite anime you've watched so far",
                link: "https://anilist.co/activity/475041382",
                image: "images/challenge/asilentvoice.jpg",
                content: [1]
            },
            // 3 Day
            {
                title: "Favourite male anime character ever",
                link: "https://anilist.co/activity/475429285",
                image: "images/challenge/hellsing.jpg",
                content: [2],
                addSortTag: "Alucard" // Additional tags for search
            },
            // 4 Day
            {
                title: "Favorite female anime character",
                link: "https://anilist.co/activity/475840823",
                image: "images/challenge/berserk.jpg",
                content: [3],
                addSortTag: "Casca"
            },
            // 5 Day
            {
                title: "Anime you're ashamed you enjoyed",
                link: "https://anilist.co/activity/476432830",
                image: "images/challenge/IntheLandofLeadale.jpg",
                content: [4]
            },
            // 6 Day
            {
                title: "Anime you want to see but haven't yet",
                link: "https://anilist.co/activity/476852392",
                image: "images/challenge/sao.jpg",
                content: [5]
            },
             // 7 Day
            {
                title: "Your anime crush SCHNOZ DAY",
                link: "https://anilist.co/activity/477204185",
                image: "images/challenge/berserk.jpg",
                content: [3]
            },
            // 8 Day
            {
                title: "Favorite anime couple",
                link: "https://anilist.co/activity/477731439",
                image: "images/challenge/tokyoghoul.jpg",
                content: [6]
            },
             // 9 Day
             {
                title: "Best anime villain",
                link: "https://anilist.co/activity/478050770",
                image: "images/challenge/berserk.jpg",
                content: [3]
            },
             // 10 Day
             {
                title: "Favorite fighter anime",
                link: "https://anilist.co/activity/478503404",
                image: "images/challenge/jjk.jpg",
                content: [7]
            },
            // 11 Day
            {
                title: "Favorite mech anime",
                link: "https://anilist.co/activity/478889478",
                image: "images/challenge/86.jpg",
                content: [8]
            },
            // 12 Day
            {
                title: "Saddest anime scene",
                link: "https://anilist.co/activity/479353075",
                image: "images/challenge/fmab.png",
                content: [9]
            },
            // 13 Day
            {
                title: "Anime character you are most similar to",
                link: "https://anilist.co/activity/479793793",
                image: "images/challenge/iruma.jpg",
                content: [10]
            },
            // 14 Day
            {
                title: "Saddest anime death",
                link: "https://anilist.co/activity/480173772",
                image: "images/challenge/aprillie.jpg",
                content: [11]
            },
            // 15 Day
            {
                title: "Favorite animal sidekick, pet or summoning",
                link: "https://anilist.co/activity/480619127",
                image: "images/challenge/konosuba.jpg",
                content: [12]
            },
            // 16 Day
            {
                title: "Anime with the best animation",
                link: "https://anilist.co/activity/481014488",
                image: "images/challenge/demonslayer.jpg",
                content: [13]
            },
            // 17 Day
            {
                title: "Favorite male supporting character",
                link: "https://anilist.co/activity/481389174",
                image: "images/challenge/hellsing.jpg",
                content: [2]
            },
            // 18 Day
            {
                title: "Favorite female supporting character",
                link: "https://anilist.co/activity/481814847",
                image: "images/challenge/attackontitan.jpg",
                content: [0]
            },
            // 19 Day
            {
                title: "Most epic scene",
                link: "https://anilist.co/activity/482287812",
                image: "images/challenge/hellsing.jpg",
                content: [2]
            },
            // 20 Day
            {
                title: "Character that gets on your nerves",
                link: "https://anilist.co/activity/482796090",
                image: "images/challenge/deathnote.jpg",
                content: [14]
            },
            // 21 Day
            {
                title: "Favorite goofy anime character",
                link: "https://anilist.co/activity/483179778",
                image: "images/challenge/konosuba.jpg",
                content: [12]
            },
            // 22 Day
            {
                title: "Favorite weapon, gear or armour",
                link: "https://anilist.co/activity/483616963",
                image: "images/challenge/berserk.jpg",
                content: [3]
            },
            // 23 Day
            {
                title: "Favorite attack someone used in an anime",
                link: "https://anilist.co/activity/484010706",
                image: "images/challenge/jjk.jpg",
                content: [7]
            },
            // 24 Day
            {
                title: "Moment that shocked you the most",
                link: "https://anilist.co/activity/484358602",
                image: "images/challenge/deathnote.jpg",
                content: [14]
            },
            // 25 Day
            {
                title: "Anime that never gets old",
                link: "https://anilist.co/activity/484794665",
                image: "images/challenge/attackontitan.jpg",
                content: [0]
            },
            // 26 Day
            {
                title: "Best anime fight",
                link: "https://anilist.co/activity/485285020",
                image: "images/challenge/jjk.jpg",
                content: [7]
            },
            // 27 Day
            {
                title: "Most badass scene",
                link: "https://anilist.co/activity/485730176",
                image: "images/challenge/berserk.jpg",
                content: [3]
            },
            // 28 Day
            {
                title: "Favorite quote",
                link: "https://anilist.co/activity/486205242",
                image: "images/challenge/deathnote.jpg",
                content: [14]
            },
            // 29 Day
            {
                title: "An anime you wished was real",
                link: "https://anilist.co/activity/486580479",
                image: "images/challenge/dandadan.jpg",
                content: [15]
            },
            // 30 Day
            {
                title: "An anime you wish never ended and continued on",
                link: "https://anilist.co/activity/486996161",
                image: "images/challenge/grandblue.jpg",
                content: [16]
            },
            // 31 Day
            {
                title: "Favorite anime opening",
                link: "https://anilist.co/activity/487386968",
                image: "images/challenge/chainsawman.jpg",
                content: [17]
            },
            // 32 Day
            {
                title: "Anime character you would want as a best friend",
                link: "https://anilist.co/activity/487756943",
                image: "images/challenge/tensura.jpg",
                content: [18]
            },
            // 33 Day
            {
                title: "Anime character you would like to cosplay as",
                link: "https://anilist.co/activity/488274884",
                image: "images/challenge/shieldhero.jpg",
                content: [19]
            },
            // 34 Day
            {
                title: "What character would be your workout buddy",
                link: "https://anilist.co/activity/488697528",
                image: "images/challenge/shadow.jpg",
                content: [20]
            },
            // 35 Day
            {
                title: "What crossover would you like to see",
                link: "https://anilist.co/activity/489163382",
                image: "images/challenge/overlord.jpg",
                content: [18, 21]
            },
            // 36 Day
            {
                title: "First anime crush",
                link: "https://anilist.co/activity/489589523",
                image: "images/challenge/attackontitan.jpg",
                content: [0]
            },
            // 37 Day
            {
                title: "Anime that changed you",
                link: "https://anilist.co/activity/489994111",
                image: "images/challenge/asilentvoice.jpg",
                content: [1]
            },
            // 38 Day
            {
                title: "Do you like yaoi/yuri?",
                link: "https://anilist.co/activity/490387129",
                image: "images/challenge/dragonmaid.jpg",
                content: [22]
            },
            // 39 Day
            {
                title: "Favorite music in anime",
                link: "https://anilist.co/activity/490785270",
                image: "images/challenge/deathnote.jpg",
                content: [0, 13, 14, 23]
            },
            // 40 Day
            {
                title: "Favorite VA",
                link: "https://anilist.co/activity/491270747",
                image: "images/challenge/hellsing.jpg",
                content: [0, 2]
            },
            // 41 Day
            {
                title: "Anime character you hate",
                link: "https://anilist.co/activity/491716432",
                image: "images/challenge/berserk.jpg",
                content: [3]
            },
            // 42 Day
            {
                title: "Most epic or shocking scene",
                link: "https://anilist.co/activity/492185815",
                image: "images/challenge/tensura.jpg",
                content: [18]
            },
            // 43 Day
            {
                title: "Favorite canon couple",
                link: "https://anilist.co/activity/492524851",
                image: "images/challenge/horimiya.jpg",
                content: [24]
            },
            // 44 Day
            {
                title: "Who do you ship?",
                link: "https://anilist.co/activity/493275600",
                image: "images/challenge/kaguya.jpg",
                content: [25]
            },
            // 45 Day
            {
                title: "Favorite anime ED",
                link: "https://anilist.co/activity/493529509",
                image: "images/challenge/overlord.jpg",
                content: [21, 26]
            },
            // 46 Day
            {
                title: "Favorite shoujo",
                link: "https://anilist.co/activity/493847524",
                image: "images/challenge/yona.jpg",
                content: [27]
            },
            // 47 Day
            {
                title: "Favorite tsundere",
                link: "https://anilist.co/activity/494713953",
                image: "images/challenge/kaguya.jpg",
                content: [25]
            },
            // 48 Day
            {
                title: "Favorite harem/reverse harem",
                link: "https://anilist.co/activity/495015105",
                image: "images/challenge/overlord.jpg",
                content: [21]
            },
            // 49 Day
            {
                title: "Subs or Dubs?",
                link: "https://anilist.co/activity/495491019",
                image: "images/challenge/noimg.png",
                content: [28]
            },
            // 50 Day
            {
                title: "Favorite Studio Ghibli work",
                link: "https://anilist.co/activity/496058831",
                image: "images/challenge/spiritedaway.jpg",
                content: [29]
            },
            // 51 Day
            {
                title: "Experience where you were bullied for liking anime",
                link: "https://anilist.co/activity/496580392",
                image: "images/challenge/noimg.png",
                content: [28]
            },
            // 52 Day
            {
                title: "Character you wish you were like",
                link: "https://anilist.co/activity/497080438",
                image: "images/challenge/86.jpg",
                content: [8]
            },
            // 53 Day
            {
                title: "Anime scene that made you cry",
                link: "https://anilist.co/activity/497373692",
                image: "images/challenge/asilentvoice.jpg",
                content: [1]
            },
            // 54 Day
            {
                title: "Recommend one anime that most people may not have seen",
                link: "https://anilist.co/activity/497829013",
                image: "images/challenge/drifters.jpg",
                content: [30]
            },
             // 55 Day
             {
                title: "Do you share your anime interests with anyone?",
                link: "https://anilist.co/activity/498274106",
                image: "images/challenge/noimg.png",
                content: [28]
            },
            // 56 Day
             {
                title: "Your favorite character",
                link: "https://anilist.co/activity/498955949",
                image: "images/challenge/hellsing.jpg",
                content: [2]
            },
             // 57 Day
             {
                title: "What anime has your heart",
                link: "https://anilist.co/activity/499518238",
                image: "images/challenge/aprillie.jpg",
                content: [11]
            },
            // 58 Day
             {
                title: "Favorite hentai",
                link: "https://anilist.co/activity/500133329",
                image: "images/challenge/noimg.png",
                content: [28]
            },
            // 59 Day
             {
                title: "Favorite yaoi",
                link: "https://anilist.co/activity/501511268",
                image: "images/challenge/noimg.png",
                content: [28]
            },
            // 60 Day
            {
                title: "What manga would you like an anime adaptation for",
                link: "https://anilist.co/activity/501514349",
                image: "images/challenge/dandadan.jpg",
                content: [15]
            },
            // 61 Day
            {
                title: "What current anime are you watching",
                link: "https://anilist.co/activity/501800208",
                image: "images/challenge/iruma.jpg",
                content: [10, 20]
            },
            // 62 Day
            {
                title: "Favorite anime movie",
                link: "https://anilist.co/activity/502345669",
                image: "images/challenge/asilentvoice.jpg",
                content: [1]
            },
            // 63 Day
            {
                title: "Favorite shounen",
                link: "https://anilist.co/activity/503341554",
                image: "images/challenge/spyfamily.jpg",
                content: [26]
            },
            // 64 Day
            {
                title: "Favorite shoujo",
                link: "https://anilist.co/activity/503654170",
                image: "images/challenge/yona.jpg",
                content: [27]
            },
            // 65 Day
            {
                title: "A sports anime",
                link: "https://anilist.co/activity/504337714",
                image: "images/challenge/grandblue.jpg",
                content: [16]
            },
            // 66 Day
            {
                title: "A slice of life anime",
                link: "https://anilist.co/activity/504881943",
                image: "images/challenge/bocchi.jpg",
                content: [31]
            },
            // 67 Day
            {
                title: "A comedy anime",
                link: "https://anilist.co/activity/505392758",
                image: "images/challenge/konosuba.jpg",
                content: [12]
            },
            // 68 Day
            {
                title: "A SciFi/Mech anime",
                link: "https://anilist.co/activity/506184860",
                image: "images/challenge/geass.jpg",
                content: [32]
            },
            // 69 Day
            {
                title: "An action/adventure anime",
                link: "https://anilist.co/activity/506192465",
                image: "images/challenge/vinland.jpg",
                content: [33]
            },
            // 70 Day
            {
                title: "A fantasy anime",
                link: "https://anilist.co/activity/506876874",
                image: "images/challenge/tanya.jpg",
                content: [34]
            },
            // 71 Day
            {
                title: "A romance anime",
                link: "https://anilist.co/activity/507306081",
                image: "images/challenge/dressup.jpg",
                content: [35]
            },
            // 72 Day
            {
                title: "An overrated series",
                link: "https://anilist.co/activity/507598694",
                image: "images/challenge/fruits.jpg",
                content: [36]
            },
            // 73 Day
            {
                title: "An underrated series",
                link: "https://anilist.co/activity/508215874",
                image: "images/challenge/drifters.jpg",
                content: [30]
            },
            // 74 Day
            {
                title: "Series that got you into anime",
                link: "https://anilist.co/activity/509106490",
                image: "images/challenge/attackontitan.jpg",
                content: [0]
            },
            // 75 Day
            {
                title: "Favorite friendship",
                link: "https://anilist.co/activity/509108521",
                image: "images/challenge/tokyoghoul.jpg",
                content: [6]
            },
            // 76 Day
            {
                title: "Favorite bromance",
                link: "https://anilist.co/activity/509619096",
                image: "images/challenge/grandblue.jpg",
                content: [16]
            },
            // 77 Day
            {
                title: "Favorite rivalry",
                link: "https://anilist.co/activity/510050766",
                image: "images/challenge/deathnote.jpg",
                content: [14]
            },
            // 78 Day
            {
                title: "Favorite team",
                link: "https://anilist.co/activity/510964101",
                image: "images/challenge/konosuba.jpg",
                content: [12]
            },
            // 79 Day
            {
                title: "Favorite quote",
                link: "https://anilist.co/activity/510969391",
                image: "images/challenge/fmab.png",
                content: [9]
            },
            // 80 Day
            {
                title: "Favorite scene",
                link: "https://anilist.co/activity/511634624",
                image: "images/challenge/asilentvoice.jpg",
                content: [1]
            },
            // 81 Day
            {
                title: "Favorite episode",
                link: "https://anilist.co/activity/512187808",
                image: "images/challenge/deathnote.jpg",
                content: [14]
            },
            // 82 Day
            {
                title: "Most annoying anime character",
                link: "https://anilist.co/activity/512690965",
                image: "images/challenge/ragnarok.jpg",
                content: [37]
            },
            // 83 Day
            {
                title: "An ecchi picture from your favorite series",
                link: "https://anilist.co/activity/512933198",
                image: "images/challenge/grandblue.jpg",
                content: [16]
            },
            // 84 Day
            {
                title: "Most recent anime wallpaper",
                link: "https://anilist.co/activity/513404412",
                image: "images/challenge/berserk.jpg",
                content: [2, 3, 30]
            },
        ]

    }

    return david;
}