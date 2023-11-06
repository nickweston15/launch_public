/* Similar to the previous exercise, now write a function that extracts the
region code from a locale. */

function extractRegion (locale) {
  console.log(locale.slice(3,5));
}

extractRegion('en_US.UTF-8');
extractRegion('en_GB.UTF-8');
extractRegion('ko_KR.UTF-16');