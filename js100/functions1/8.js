/* Write a function that takes ISO 639-1 language code and returns a greeting
in that language. You can take the examples below or add whatever languages
you like */

function greet (language) {
  switch (language) {
    case "en": return "Hi!"
    case "fr": return "Salut!"
    case "pt": return "Ola"
    case "de": return "Hallo!"
    case "sv": return "Hej!"
    case "af": return "Haai!"
  }
};

greet("en");
greet("fr");
greet("pt");
greet("de");
console.log(greet("sv"));
greet("af");