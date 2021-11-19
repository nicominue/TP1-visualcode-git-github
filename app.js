const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    if (countries.iso3[isoCode]) {
        return countries.iso3[isoCode];
    }
    }

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    if (language === 'es') {
        return countries.iso3[isoCode].name_es;
    }
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    if (countries.subregion[subregion]) {
        return countries.subregion[subregion];
    }
}

function main() {
    console.log(getCountryByIso3(isoCode));
    console.log(getCountryTranslatedName(isoCode, language));
    console.log(getCountriesBySubregion(subregion));

}

main();