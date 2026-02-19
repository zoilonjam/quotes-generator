const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const copyMsg = document.getElementById("copy-msg");

const quotes = [
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Do something today that your future self will thank you for.", author: "Unknown" },
  {quote: "To be honest with you, I don't have the words to make you feel better, but I do have the arms to give you a hug, ears to listen to whatever you want to talk about, and I have a heart; a heart that's aching to see you smile again.",author: "Laura Ortiz"},
  {quote: "A true friend is someone who thinks that you are a good egg even though he knows that you are slightly cracked.",author: "Bernard Meltzer"},
  {quote: "A friend is someone who knows all about you and still loves you.",author: "Elbert Hubbard"},
  {quote: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",author: "C.S. Lewis"},
  {quote: "A real friend is one who walks in when the rest of the world walks out.",author: "Walter Winchell"},
  {quote: "True friends are like diamonds — bright, beautiful, valuable, and always in style.",author: "Nicole Richie"},
  {quote: "A friend is someone who gives you total freedom to be yourself.",author: "Jim Morrison"},
  {quote: "There is no possession more valuable than a good and faithful friend.",author: "Socrates"},
  {quote: "A smile is a facelift that’s in everyone’s price range!",author: "Tom Wilson"},
  {quote: "A smile is the universal welcome.",author: "Max Eastman"},
  {quote: "A bank is a place that will lend you money if you can prove that you don’t need it.",author: "Bob Hope"},
  {quote: "Marriage is the only war in which you sleep with the enemy.",author: "Francois de La Rochefoucauld"},
  {quote: "Whoever said money can’t buy happiness didn’t know where to shop.",author: "Gertrude Stein"},
  {quote:"The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",author: "Bill Waterson"}
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[randomIndex].quote}"`;
  authorText.textContent = `— ${quotes[randomIndex].author}`;
});

copyBtn.addEventListener("click", async () => {
  const quote = quoteText.textContent;
  const author = authorText.textContent;

  if (quote.includes("Click the button") || quote.includes("Loading")) {
    copyMsg.textContent = "Generate a quote first bestie ";
    setTimeout(() => (copyMsg.textContent = ""), 2000);
    return;
  }

  try {
    await navigator.clipboard.writeText(`${quote} ${author}`);
    copyMsg.textContent = "Copied! ";
    setTimeout(() => (copyMsg.textContent = ""), 2000);
  } catch (err) {
    copyMsg.textContent = "Copy failed. Please try again.";
    setTimeout(() => (copyMsg.textContent = ""), 2000);
  }
});


generateBtn.addEventListener("click", getQuote);
