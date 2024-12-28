
const countryObjects = {
    'AF': 'Afghanistan',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AR': 'Argentina',
    'AU': 'Australia',
    'AT': 'Austria',
    'BE': 'Belgium',
    'BR': 'Brazil',
    'CA': 'Canada',
    'CN': 'China',
    'CO': 'Colombia',
    'DK': 'Denmark',
    'EG': 'Egypt',
    'FI': 'Finland',
    'FR': 'France',
    'DE': 'Germany',
    'GR': 'Greece',
    'IN': 'India',
    'ID': 'Indonesia',
    'IE': 'Ireland',
    'IL': 'Israel',
    'IT': 'Italy',
    'JP': 'Japan',
    'KR': 'South Korea',
    'MX': 'Mexico',
    'NL': 'Netherlands',
    'NZ': 'New Zealand',
    'NO': 'Norway',
    'PK': 'Pakistan',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PL': 'Poland',
    'PT': 'Portugal',
    'RU': 'Russia',
    'SA': 'Saudi Arabia',
    'SG': 'Singapore',
    'ZA': 'South Africa',
    'ES': 'Spain',
    'SE': 'Sweden',
    'CH': 'Switzerland',
    'TH': 'Thailand',
    'TR': 'Turkey',
    'AE': 'United Arab Emirates',
    'GB': 'United Kingdom',
    'US': 'United States',
    'VN': 'Vietnam'
  };


  let countryCodes = [];

  for (const code in countryObjects) {
    if (countryObjects.hasOwnProperty(code)) {
      countryCodes.push([code, countryObjects[code]]);
    }
  }
  
  export default countryCodes;

//   ...................................................................

