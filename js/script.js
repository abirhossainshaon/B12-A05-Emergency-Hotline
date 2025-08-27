// counts
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Elements
const heartCounter = document.getElementById("heartCountDisplay");
const coinCounter = document.getElementById("coinCountDisplay");
const copyCounter = document.getElementById("copyCountDisplay");
const cardContainer = document.getElementById("cardContainer");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Hotline Data
const hotlines = [
  { name: "জাতীয় জরুরি সেবা", en: "National Emergency", number: "999", category: "সার্বজনীন", icon: "🔥" },
  { name: "পুলিশ", en: "Police", number: "999", category: "পুলিশ", icon: "👮" },
  { name: "অ্যাম্বুলেন্স", en: "Ambulance", number: "1994-999999", category: "স্বাস্থ্য", icon: "🚑" },
  { name: "গ্যাস সার্ভিস ", en: "গ্যাস ", number: "16456", category: "গ্যাস ", icon: "⛽" },
  { name: "বিদ্যুৎ বিভ্রাট", en: "Electricity Outage", number: "16216", category: "বিদ্যুৎ", icon: "⚡" },
  { name: "নারী ও শিশু সহায়তা", en: "Women & Child Helpline", number: "109", category: "সহায়তা", icon: "👶" }
];


