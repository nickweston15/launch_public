/* Write a function that extracts the language code from a locale. A locale is a
combination of a language code, a region, and usually also a character set, 
e.g en_US.UTF-8. */

function extractLanguage (locale) {
  console.log(locale.slice(0,2));
}

extractLanguage('en_US.UTF-8');
extractLanguage('en_GB.UTF-8');
extractLanguage('ko_KR.UTF-16');