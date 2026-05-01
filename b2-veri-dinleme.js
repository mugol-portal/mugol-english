// B2 DİNLEME SORULARI
const veri_b2_dinleme = [
  { type:"listen", question:"Duyduğunuz kelimenin anlamı nedir?", textToSpeak:"Consequence", options:[{text:"Sonuç/Bedel",emoji:"⚖️"},{text:"Sebep",emoji:"🔍"},{text:"Tesadüf",emoji:"🎲"}], answer:"Sonuç/Bedel" },
  { type:"listen", question:"Duyduğunuz cümlenin anlamı nedir?", textToSpeak:"The report should have been submitted by now", options:[{text:"Rapor şimdiye kadar teslim edilmeliydi.",emoji:"📋"},{text:"Raporun hazır olması gerekiyor.",emoji:"📝"},{text:"Raporu henüz sunmadım.",emoji:"🤷"}], answer:"Rapor şimdiye kadar teslim edilmeliydi." },
  { type:"listen", question:"Duyduğunuz kelimenin anlamı nedir?", textToSpeak:"Ambiguous", options:[{text:"Açık / Belirgin",emoji:"✅"},{text:"Belirsiz / İki anlamlı",emoji:"❓"},{text:"Kesin / Net",emoji:"🎯"}], answer:"Belirsiz / İki anlamlı" },
  { type:"listen", question:"Duyduğunuz cümlenin anlamı nedir?", textToSpeak:"She tends to overthink everything", options:[{text:"O her şeyi fazla düşünme eğilimindedir.",emoji:"🤯"},{text:"O hiçbir şey hakkında düşünmez.",emoji:"😶"},{text:"O her zaman doğru düşünür.",emoji:"🎯"}], answer:"O her şeyi fazla düşünme eğilimindedir." }
];
