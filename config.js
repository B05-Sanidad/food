// config.js
const parts = location.pathname.split('/').filter(Boolean);
let keyFromPath = (parts[parts.length - 1] || '').toUpperCase();

// If GitHub Pages is serving 404.html, don't treat "404" as a product key
if (keyFromPath === '404' || keyFromPath === '404.HTML') {
  keyFromPath = '';
}

const keyFromQuery = new URLSearchParams(location.search).get('item')?.toUpperCase();
const KEY = keyFromQuery || keyFromPath;
const CONFIG = (window.B05_CONFIGS || {})[KEY];

if (!CONFIG) {
  // fall back gracefully
  location.replace('./');  // or kkshow a nicer message if you prefer
}
window.B05_CONFIGS = {
    "5HUM517": {
    Food: "HOMMUS",
    PREFIX: "5-HOM-",
    latestLotNumber: "5-HOM-517",
    PRODUCTO: "Garbanzos cocidos, Tahini, Limón, Aceite de oliva, Ajo, Sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Garbanzos L778, Tahini L120, Aceite L221",
    USADO: "Hummus",
    CHEF: "Chef B05",
    EXP_DAYS: 4,
    MONTHS_BACK: 6,
    USE_DAYS: [2, 5]
  },

  "11BER610": {
    Food: "BERENJENA",
    PREFIX: "5-BER-",
    latestLotNumber: "11-BER-610",
    PRODUCTO: "Berenjena asada, Ajo, Limón, Tahini, Aceite de oliva, Sal",
    ORIGEN: "Makro / Consum / Oasis",
    LOTE: "Berenjena L902, Tahini L130",
    USADO: "Baba Ghanoush",
    CHEF: "Chef B05",
    EXP_DAYS: 5,
    MONTHS_BACK: 6,
    USE_DAYS: [4]
  },

  "29MUH430": {
    Food: "MOUHAMARA",
    PREFIX: "5-LAB-",
    latestLotNumber: "5-LAB-222",
    PRODUCTO: "mouhamaara colado, Sal, Aceite de oliva",
    ORIGEN: "Makro / Carrefour",
    LOTE: "Yogur L400",
    USADO: "moujhan Bowl",
    CHEF: "Chef B05",
    EXP_DAYS: 10,
    MONTHS_BACK: 6,
    USE_DAYS: [1] // Lunes 
  }
  
};