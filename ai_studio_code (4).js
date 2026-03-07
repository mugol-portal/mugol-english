const questionDatabase = {
  "A1":[
    { type: "choice", question: "Hangisi 'Elma' anlamına gelir?", options:[ { text: "Apple", emoji: "🍎" }, { text: "Banana", emoji: "🍌" }, { text: "Orange", emoji: "🍊" } ], answer: "Apple" },
    { type: "choice", question: "Hangisi 'Ev' anlamına gelir?", options:[ { text: "Car", emoji: "🚗" }, { text: "House", emoji: "🏠" }, { text: "Tree", emoji: "🌳" } ], answer: "House" },
    { type: "choice", question: "Hangisi 'Süt' anlamına gelir?", options:[ { text: "Water", emoji: "💧" }, { text: "Milk", emoji: "🥛" }, { text: "Coffee", "emoji": "☕" } ], answer: "Milk" },
    { type: "choice", question: "Hangisi 'Köpek' anlamına gelir?", options:[ { text: "Cat", emoji: "🐱" }, { text: "Dog", emoji: "🐶" }, { text: "Bird", emoji: "🐦" } ], answer: "Dog" },
    { type: "arrange", question: "Cümleyi çevirin: 'Ben bir öğrenciyim.'", words: ["am", "I", "student", "a", "teacher"], answer: "I am a student" },
    { type: "arrange", question: "Cümleyi çevirin: 'O (erkek) su içer.'", words:["drinks", "He", "water", "eats", "milk"], answer: "He drinks water" },
    { type: "arrange", question: "Cümleyi çevirin: 'Biz okula gideriz.'", words:["go", "We", "to", "school", "They"], answer: "We go to school" },
    { type: "listen", question: "Duyduğunuz kelimenin anlamı nedir?", textToSpeak: "Good morning", options:[ { text: "İyi akşamlar", emoji: "🌙" }, { text: "Günaydın", emoji: "☀️" }, { text: "Nasılsın", emoji: "🤔" } ], answer: "Günaydın" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "Thank you", options:[ { text: "Özür dilerim", emoji: "😔" }, { text: "Teşekkür ederim", emoji: "🙏" }, { text: "Rica ederim", emoji: "😊" } ], answer: "Teşekkür ederim" },
    { type: "arrange", question: "Cümleyi çevirin: 'Benim adım John.'", words:["name", "My", "is", "John", "Your"], answer: "My name is John" }
  ],
  "A2":[
    { type: "choice", question: "Hangisi 'Mühendis' anlamına gelir?", options:[ { text: "Doctor", emoji: "👨‍⚕️" }, { text: "Engineer", emoji: "👷" }, { text: "Teacher", emoji: "👨‍🏫" } ], answer: "Engineer" },
    { type: "choice", question: "Hangisi 'Bazen' anlamına gelir?", options:[ { text: "Never", emoji: "❌" }, { text: "Sometimes", emoji: "⏳" }, { text: "Always", emoji: "✅" } ], answer: "Sometimes" },
    { type: "arrange", question: "Cümleyi çevirin: 'Şu an çalışıyorum.'", words: ["working", "I", "am", "now", "play"], answer: "I am working now" },
    { type: "arrange", question: "Cümleyi çevirin: 'Dün sinemaya gittim.'", words:["went", "to", "cinema", "the", "I", "yesterday"], answer: "I went to the cinema yesterday" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "Where are you going?", options:[ { text: "Nereye gidiyorsun?", emoji: "🚶" }, { text: "Ne yapıyorsun?", emoji: "🤔" }, { text: "Nerelisin?", emoji: "🌍" } ], answer: "Nereye gidiyorsun?" }
  ],
  "B1":[
    { type: "choice", question: "Hangisi 'Başarmak' anlamına gelir?", options:[ { text: "Fail", emoji: "❌" }, { text: "Achieve", emoji: "🏆" }, { text: "Try", emoji: "🔄" } ], answer: "Achieve" },
    { type: "choice", question: "Hangisi 'Çevre' anlamına gelir?", options:[ { text: "Environment", emoji: "🌳" }, { text: "Economy", emoji: "💰" }, { text: "Society", emoji: "👥" } ], answer: "Environment" },
    { type: "arrange", question: "Cümleyi çevirin: 'Daha önce hiç Paris'te bulunmadım.'", words:["have", "never", "been", "to", "Paris", "I"], answer: "I have never been to Paris" },
    { type: "listen", question: "Duyduğunuz cümlenin anlamı nedir?", textToSpeak: "I am looking forward to seeing you.", options:[ { text: "Seni görmek için sabırsızlanıyorum.", emoji: "🤩" }, { text: "Seni görmeyi umuyorum.", emoji: "👀" }, { text: "Seni gördüğüme sevindim.", emoji: "😊" } ], answer: "Seni görmek için sabırsızlanıyorum." }
  ],
  "B2":[
    { type: "choice", question: "Hangisi 'Kaçınılmaz' anlamına gelir?", options:[ { text: "Crucial", emoji: "❗" }, { text: "Inevitable", emoji: "⏳" }, { text: "Optional", emoji: "🤷" } ], answer: "Inevitable" },
    { type: "arrange", question: "Cümleyi çevirin: 'Sorun hemen çözülmeli.'", words:["problem", "The", "must", "be", "solved", "immediately"], answer: "The problem must be solved immediately" },
    { type: "listen", question: "Duyduğunuz kelimenin anlamı nedir?", textToSpeak: "Consequence", options:[ { text: "Sonuç/Bedel", emoji: "⚖️" }, { text: "Sebep", emoji: "🔍" }, { text: "Tesadüf", emoji: "🎲" } ], answer: "Sonuç/Bedel" }
  ],
  "C1":[
    { type: "choice", question: "Hangisi 'Her yerde bulunan' anlamına gelir?", options:[ { text: "Meticulous", emoji: "🧐" }, { text: "Ubiquitous", emoji: "🌍" }, { text: "Redundant", emoji: "🗑️" } ], answer: "Ubiquitous" },
    { type: "arrange", question: "Cümleyi çevirin: 'Bu kılık değiştirmiş bir lütuftu.'", words: ["was", "a", "blessing", "in", "disguise", "It"], answer: "It was a blessing in disguise" }
  ]
};