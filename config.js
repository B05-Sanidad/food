// /food/config.js  (PURE DATA — no URL logic, no redirects)
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
    DAYS_PRODUCTION: 4,   // ⬅️ histórico cada 4 días (nunca lunes)
     PROD_ANCHOR: "2025-01-01",
    USE_DAYS: [2, 5]      // (solo se usa si NO hay DAYS_PRODUCTION)
  },

  "11BER610": {
    Food: "BERENJENA",
    PREFIX: "11-BER-",
    latestLotNumber: "11-BER-610",
    PRODUCTO: "Berenjena asada, Ajo, Limón, Tahini, Aceite de oliva, Sal",
    ORIGEN: "Makro / Consum / Oasis",
    LOTE: "Berenjena L610, Tahini L130",
    USADO: "Baba Ghanoush",
    CHEF: "Chef B05",
    EXP_DAYS: 5,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 7,   // ⬅️ histórico cada 7 días (nunca lunes)
     PROD_ANCHOR: "2025-01-01",
    USE_DAYS: [2, 5]
  },

  "29MUH431": {           // ⬅️ clave alineada con el lote
    Food: "LOVEME",
    PREFIX: "29-MUH-",
    latestLotNumber: "29-MUH-431",
    PRODUCTO: "LOvE LOVE rojo, Nueces, Melaza de granada, Pan rallado, Aceite, Especias, Sal",
    ORIGEN: "Makro / Carrefour / Oasis",
    LOTE: "Pimiento L431, Nueces L221",
    USADO: "AIRE",
    CHEF: "Chef B05",
    EXP_DAYS: 180,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 20,  // ⬅️ histórico cada 20 días (nunca lunes)
     PROD_ANCHOR: "2025-01-01",
    USE_DAYS: [2]         // valor válido 0..6; aquí martes (no se usa si hay DAYS_PRODUCTION)
  },

  "29MUH430": {
    Food: "MOUHAMMARA",
    PREFIX: "29-MUH-",
    latestLotNumber: "29-MUH-430",
    PRODUCTO: "Pimiento rojo, Nueces, Melaza de granada, Pan rallado, Aceite, Especias, Sal",
    ORIGEN: "Makro / Carrefour / Oasis",
    LOTE: "Pimiento L430, Nueces L221",
    USADO: "Mezze",
    CHEF: "Chef B05",
    EXP_DAYS: 10,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 15,  // ⬅️ histórico cada 15 días (nunca lunes)
     PROD_ANCHOR: "2025-01-01",
    USE_DAYS: [1]         // lunes (solo si NO hay DAYS_PRODUCTION)
  },

  "11PAR702": {
    Food: "HOJAS DE PARRA",
    PREFIX: "11-PAR-",
    latestLotNumber: "11-PAR-702",
    PRODUCTO: "Hojas de parra cocidas, arroz, tomate, cebolla, perejil, menta, aceite de oliva, limón, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Hojas de parra L7020, Arroz L520, Limón L140",
    USADO: "Hojas de Parra",
    CHEF: "Chef B05",
    EXP_DAYS: 5,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 20,  // ⬅️ histórico cada 20 días (nunca lunes)
    PROD_ANCHOR: "2025-01-01",
    USE_DAYS: [2, 5]
  }
};