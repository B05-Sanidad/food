// /food/config.js  (PURE DATA — no redirects, no URL logic)
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
    USE_DAYS: [2, 5]        // Mar, Vie
  },

  "11BER610": {
    Food: "BERENJENA",
    PREFIX: "11-BER-",       // ⬅️ corrected to match code
    latestLotNumber: "11-BER-610",
    PRODUCTO: "Berenjena asada, Ajo, Limón, Tahini, Aceite de oliva, Sal",
    ORIGEN: "Makro / Consum / Oasis",
    LOTE: "Berenjena L610, Tahini L130",
    USADO: "Baba Ghanoush",
    CHEF: "Chef B05",
    EXP_DAYS: 5,
    MONTHS_BACK: 6,
    USE_DAYS: [2, 5]        // same production days as hummus (change if needed)
  },

  "29MUH430": {
    Food: "MOUHAMMARA",
    PREFIX: "29-MUH-",       // ⬅️ use a consistent prefix
    latestLotNumber: "29-MUH-430",
    PRODUCTO: "Pimiento rojo, Nueces, Melaza de granada, Pan rallado, Aceite, Especias, Sal",
    ORIGEN: "Makro / Carrefour / Oasis",
    LOTE: "Pimiento L430, Nueces L221",
    USADO: "Mezze",
    CHEF: "Chef B05",
    EXP_DAYS: 10,
    MONTHS_BACK: 6,
    USE_DAYS: [1]            // Lun
  }
};