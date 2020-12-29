import LocalizedStrings from 'react-localization';
let en = require('./en.json');
let de = require('./de.json');
let fr = require('./fr.json');
let ja = require('./ja.json');

const strings = new LocalizedStrings({ en: en });

export function translate(str, defaultStr?:string) {
    return strings[str] || defaultStr || '';
}
