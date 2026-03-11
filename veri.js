--- START OF FILE veri.js ---
const questionDatabase = {
  "A1":[
    { type: "choice", question: "Hangisi 'Elma' anlamına gelir?", options:[ { text: "Apple", emoji: "🍎" }, { text: "Banana", emoji: "🍌" }, { text: "Orange", emoji: "🍊" } ], answer: "Apple" },
    { type: "choice", question: "Hangisi 'Ev' anlamına gelir?", options:[ { text: "Car", emoji: "🚗" }, { text: "House", emoji: "🏠" }, { text: "Tree", emoji: "🌳" } ], answer: "House" },
    { type: "choice", question: "Hangisi 'Süt' anlamına gelir?", options:[ { text: "Water", emoji: "💧" }, { text: "Milk", emoji: "🥛" }, { text: "Coffee", emoji: "☕" } ], answer: "Milk" },
    { type: "choice", question: "Hangisi 'Güneş' anlamına gelir?", options:[ { text: "Moon", emoji: "🌙" }, { text: "Sun", emoji: "☀️" }, { text: "Star", emoji: "⭐" } ], answer: "Sun" },
    { type: "choice", question: "Hangisi 'Kitap' anlamına gelir?", options:[ { text: "Book", emoji: "📖" }, { text: "Pen", emoji: "🖊️" }, { text: "Paper", emoji: "📄" } ], answer: "Book" },
    { type: "choice", question: "Hangisi 'Köpek' anlamına gelir?", options:[ { text: "Cat", emoji: "🐱" }, { text: "Dog", emoji: "🐶" }, { text: "Bird", emoji: "🐦" } ], answer: "Dog" },
    { type: "arrange", question: "Cümleyi çevirin: 'Ben bir öğrenciyim.'", words: ["am", "I", "student", "a", "teacher"], answer: "I am a student" },
    { type: "arrange", question: "Cümleyi çevirin: 'O (erkek) su içer.'", words:["drinks", "He", "water", "eats", "milk"], answer: "He drinks water" },
    { type: "arrange", question: "Cümleyi çevirin: 'Biz okula gideriz.'", words:["go", "We", "to", "school", "They"], answer: "We go to school" },
    { type: "arrange", question: "Cümleyi çevirin: 'Ben mutluyum.'", words:["am", "I", "happy", "sad", "are"], answer: "I am happy" },
    { type: "arrange", question: "Cümleyi çevirin: 'Bu bir elma.'", words:["is", "This", "an", "apple", "a"], answer: "This is an apple" },
    { type: "arrange", question: "Cümleyi çevirin: 'Benim adım John.'", words:["name", "My", "is", "John", "Your"], answer: "My name is John" },
    { type: "listen", question: "Duyduğunuz kelimenin anlamı nedir?", textToSpeak: "Good morning", options:[ { text: "İyi akşamlar", emoji: "🌙" }, { text: "Günaydın", emoji: "☀️" }, { text: "Nasılsın", emoji: "🤔" } ], answer: "Günaydın" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "Thank you", options:[ { text: "Özür dilerim", emoji: "😔" }, { text: "Teşekkür ederim", emoji: "🙏" }, { text: "Rica ederim", emoji: "😊" } ], answer: "Teşekkür ederim" },
    { type: "listen", question: "Duyduğunuz kelimenin anlamı nedir?", textToSpeak: "Hello", options:[ { text: "Güle güle", emoji: "👋" }, { text: "Merhaba", emoji: "💬" }, { text: "Lütfen", emoji: "🥺" } ], answer: "Merhaba" }
  ],
  "A2":[
    { type: "choice", question: "Hangisi 'Mühendis' anlamına gelir?", options:[ { text: "Doctor", emoji: "👨‍⚕️" }, { text: "Engineer", emoji: "👷" }, { text: "Teacher", emoji: "👨‍🏫" } ], answer: "Engineer" },
    { type: "choice", question: "Hangisi 'Sürücü' anlamına gelir?", options:[ { text: "Driver", emoji: "🚗" }, { text: "Pilot", emoji: "✈️" }, { text: "Chef", emoji: "🍳" } ], answer: "Driver" },
    { type: "choice", question: "Hangisi 'Bazen' anlamına gelir?", options:[ { text: "Never", emoji: "❌" }, { text: "Sometimes", emoji: "⏳" }, { text: "Always", emoji: "✅" } ], answer: "Sometimes" },
    { type: "arrange", question: "Cümleyi çevirin: 'Şu an çalışıyorum.'", words:["working", "I", "am", "now", "play"], answer: "I am working now" },
    { type: "arrange", question: "Cümleyi çevirin: 'Dün sinemaya gittim.'", words:["went", "to", "cinema", "the", "I", "yesterday"], answer: "I went to the cinema yesterday" },
    { type: "arrange", question: "Cümleyi çevirin: 'Yarın sinemaya gideceğim.'", words:["will", "go", "I", "to", "the", "cinema", "tomorrow"], answer: "I will go to the cinema tomorrow" },
    { type: "arrange", question: "Cümleyi çevirin: 'O genellikle erken uyanır.'", words:["He", "usually", "wakes", "up", "early", "late"], answer: "He usually wakes up early" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "Where are you going?", options:[ { text: "Nereye gidiyorsun?", emoji: "🚶" }, { text: "Ne yapıyorsun?", emoji: "🤔" }, { text: "Nerelisin?", emoji: "🌍" } ], answer: "Nereye gidiyorsun?" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "I was watching TV", options:[ { text: "Müzik dinliyordum", emoji: "🎧" }, { text: "Televizyon izliyordum", emoji: "📺" }, { text: "Kitap okuyordum", emoji: "📖" } ], answer: "Televizyon izliyordum" }
  ],
  "B1":[
    { type: "choice", question: "Hangisi 'Başarmak' anlamına gelir?", options:[ { text: "Fail", emoji: "❌" }, { text: "Achieve", emoji: "🏆" }, { text: "Try", emoji: "🔄" } ], answer: "Achieve" },
    { type: "choice", question: "Hangisi 'Önermek' anlamına gelir?", options:[ { text: "Suggest", emoji: "💡" }, { text: "Forbid", emoji: "🚫" }, { text: "Ignore", emoji: "🙈" } ], answer: "Suggest" },
    { type: "choice", question: "Hangisi 'Çevre' anlamına gelir?", options:[ { text: "Environment", emoji: "🌳" }, { text: "Economy", emoji: "💰" }, { text: "Society", emoji: "👥" } ], answer: "Environment" },
    { type: "arrange", question: "Cümleyi çevirin: 'Daha önce hiç Paris'te bulunmadım.'", words:["have", "never", "been", "to", "Paris", "I"], answer: "I have never been to Paris" },
    { type: "arrange", question: "Cümleyi çevirin: 'Eğer yağmur yağarsa, evde kalacağız.'", words:["If", "it", "rains", "we", "will", "stay", "at", "home"], answer: "If it rains we will stay at home" },
    { type: "arrange", question: "Cümleyi çevirin: 'O gelene kadar beklemeliyiz.'", words:["We", "should", "wait", "until", "he", "arrives", "goes"], answer: "We should wait until he arrives" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "I am looking forward to seeing you.", options:[ { text: "Seni görmek için sabırsızlanıyorum.", emoji: "🤩" }, { text: "Seni görmeyi umuyorum.", emoji: "👀" }, { text: "Seni gördüğüme sevindim.", emoji: "😊" } ], answer: "Seni görmek için sabırsızlanıyorum." },
    { type: "listen", question: "Duyduğunuz kelimenin anlamı nedir?", textToSpeak: "Opportunity", options:[ { text: "Zorluk", emoji: "🧱" }, { text: "Fırsat", emoji: "🎁" }, { text: "Tehlike", emoji: "⚠️" } ], answer: "Fırsat" }
  ],
  "B2":[
    { type: "choice", question: "Hangisi 'Kaçınılmaz' anlamına gelir?", options:[ { text: "Crucial", emoji: "❗" }, { text: "Inevitable", emoji: "⏳" }, { text: "Optional", emoji: "🤷" } ], answer: "Inevitable" },
    { type: "choice", question: "Hangisi 'Araştırmak' anlamına gelir?", options:[ { text: "Investigate", emoji: "🔍" }, { text: "Hide", emoji: "🙈" }, { text: "Forget", emoji: "🧠" } ], answer: "Investigate" },
    { type: "arrange", question: "Cümleyi çevirin: 'Sorun hemen çözülmeli.'", words:["problem", "The", "must", "be", "solved", "immediately"], answer: "The problem must be solved immediately" },
    { type: "arrange", question: "Cümleyi çevirin: 'Bu kadar pahalı olmasaydı, onu alırdım.'", words:["If", "it", "were", "not", "so", "expensive", "I", "would", "buy", "it"], answer: "If it were not so expensive I would buy it" },
    { type: "listen", question: "Duyduğunuz kelimenin anlamı nedir?", textToSpeak: "Consequence", options:[ { text: "Sonuç/Bedel", emoji: "⚖️" }, { text: "Sebep", emoji: "🔍" }, { text: "Tesadüf", emoji: "🎲" } ], answer: "Sonuç/Bedel" }
  ],
  "C1":[
    { type: "choice", question: "Hangisi 'Her yerde bulunan' anlamına gelir?", options:[ { text: "Meticulous", emoji: "🧐" }, { text: "Ubiquitous", emoji: "🌍" }, { text: "Redundant", emoji: "🗑️" } ], answer: "Ubiquitous" },
    { type: "choice", question: "Hangisi 'Titiz / Özenli' anlamına gelir?", options:[ { text: "Meticulous", emoji: "🧐" }, { text: "Careless", emoji: "🤷" }, { text: "Clumsy", emoji: "🤡" } ], answer: "Meticulous" },
    { type: "arrange", question: "Cümleyi çevirin: 'Bu kılık değiştirmiş bir lütuftu.'", words:["was", "a", "blessing", "in", "disguise", "It"], answer: "It was a blessing in disguise" },
    { type: "arrange", question: "Cümleyi çevirin: 'Konuyu dolandırmayı bırak ve sadede gel.'", words:["Stop", "beating", "around", "the", "bush", "and", "get", "to", "point"], answer: "Stop beating around the bush and get to the point" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "Actions speak louder than words", options:[ { text: "Eylemler sözlerden daha etkilidir", emoji: "💥" }, { text: "Söz gümüşse sükut altındır", emoji: "🤫" }, { text: "Kelimeler her şeyi çözer", emoji: "🗣️" } ], answer: "Eylemler sözlerden daha etkilidir" }
  ]
};
--- END OF FILE veri.js ---