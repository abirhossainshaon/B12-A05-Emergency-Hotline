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


// Render Cards
function renderCards() {
  cardContainer.innerHTML = "";
  hotlines.forEach(service => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow text-center flex flex-col space-y-2";

    card.innerHTML = `
      <div class="text-4xl">${service.icon}</div>
      <h3 class="text-lg font-bold">${service.name}</h3>
      <p class="text-sm text-gray-600">${service.en}</p>
      <p class="font-mono text-blue-600">${service.number}</p>
      <span class="text-xs bg-white-200 text-green-800 px-2 py-1 rounded">${service.category}</span>
      
      <button class="heartBtn text-red-500 mt-2"></button>
      
      <div class="flex justify-between mt-2">
        <button class="copyBtn bg-gray-200 px-3 py-1 rounded w-[10] h-10 items-center "><i class="fa-regular fa-"></i>Copy</button>
        <button class="callBtn bg-blue-500 text-white px-3 py-1 rounded bg-green-700">📞 Call</button>
      </div>
    `;

    // Heart Function
    card.querySelector(".heartBtn").addEventListener("click", () => {
      heartCount++;
      heartCounter.textContent = heartCount;
    });

    // Copy Function
    card.querySelector(".copyBtn").addEventListener("click", () => {
      navigator.clipboard.writeText(service.number);
      alert(`Copied: ${service.number}`);
      copyCount++;
      copyCounter.textContent = copyCount;
    });

    // Call Function
    card.querySelector(".callBtn").addEventListener("click", () => {
      if (coinCount < 20) {
        alert("Not enough coins to make a call!");
        return;
      }
      coinCount -= 20;
      coinCounter.textContent = coinCount;
      const now = new Date().toLocaleString();
      alert(`Calling ${service.name} at ${service.number}`);
      addToHistory(service, now);
    });

    cardContainer.appendChild(card);
  });
}

// Add to History
function addToHistory(service, time) {
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-100 p-2 rounded";
  li.innerHTML = `
    <span>${service.name} - ${service.number}</span>
    <span class="text-sm text-gray-500">${time}</span>
  `;
  historyList.appendChild(li);
}

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
  alert("History cleared!");
});

// Initial render
renderCards();
