/* Building on your solutions from the previous exercises, write a function
localGreet that takes a locale as input, and returns a greeting. The locale
allows us to greet people from different countries differently also when they
share the language. 

Distinguish greetings for English speaking countries like the US, UK, Canada,
or Australia in your implementation, and feel free to fall back on the
language-specific greetings in all other cases.*/

function greet (language) {
  switch (language) {
    case "en": return "Hi!"
    case "fr": return "Salut!"
    case "pt": return "Ola"
    case "de": return "Hallo!"
    case "sv": return "Hej!"
    case "af": return "Haai!"
    case "es": return "Hola!"
  }
}

function extractLanguage (locale) {
  return locale.slice(0,2);
}

function extractRegion (locale) {
  return locale.slice(3,5);
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case "US": return "Hey!"
    case "GB": return "Hello!"
    case "AU": return "Ello mate!"
    default: return greet(language);
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));

console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));

console.log(localGreet('es_MX.UTF-8'));
console.log(localGreet('es_ES.UTF-8'));