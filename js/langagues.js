// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
   location.hash = lang;
   location.reload();
}

// Define the language reload anchors
var language = {
   pt: {
      welcome: "Criação, aplicação e melhora de produtos digitais com alta qualidade e rendimento superior"
   },
   es: {
      welcome: "Creación, aplicación y mejora de productos digitales con alta calidad y rendimiento superior"
   },
   eng: {
      welcome: "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
         "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " +
         "भाषा को चुन सकते हैं!"
   }
};

// Check if a hash value exists in the URL
if (window.location.hash) {

   // Set the content of the webpage 
   // depending on the hash value
   if (window.location.hash == "#es") {
      siteContent.textContent =
         language.es.welcome;
   }
   else if (window.location.hash == "#hin") {
      siteContent.textContent =
         language.hin.welcome;
   }
}