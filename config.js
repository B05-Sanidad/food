// /food/config.js  — PURE DATA (no logic, no redirects)
/*
  HOW TO ADD A NEW PRODUCT
  ------------------------
  1) Copy one of the blocks below and change the key (e.g., "99NEW123")
  2) Fill in the fields. The most important ones are:
       - Food, PREFIX, latestLotNumber, PRODUCTO, ORIGEN, LOTE, USADO, CHEF
       - EXP_DAYS: days until expiry
       - MONTHS_BACK: history length in months
       - DAYS_PRODUCTION: cadence in days between lots (e.g. 7, 14, 20)
       - PROD_ANCHOR: "YYYY-MM-DD" to align the cadence
  3) Save the file and hard-refresh the browser.
*/
window.B05_CONFIGS = {
  "70HUM201": {
    Food: "HOMMUS",
    PREFIX: "70-HOM-",
    latestLotNumber: "70-HOM-201",
    PRODUCTO: "Garbanzos cocidos, Tahini, Limón, Aceite de oliva, Ajo, Sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Garbanzos Makro, Tahini Oasis, Aceite Makro",
    USADO: "Hummus",
    CHEF: "Chef B05",
    EXP_DAYS: 7,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 7,
    PROD_ANCHOR: "2026-05-10"
  },

  "70BER200": {
    Food: "BERENJENA",
    PREFIX: "70-BER-",
    latestLotNumber: "70-BER-200",
    PRODUCTO: "Berenjena asada, Ajo, Limón, Tahini, Aceite de oliva, Sal",
    ORIGEN: "Makro / Consum / Oasis",
    LOTE: "Berenjena Oasis, Tahini Oasis",
    USADO: "Baba Ghanoush",
    CHEF: "Chef B05",
    EXP_DAYS: 7,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 10,
    PROD_ANCHOR: "2026-05-10"
  },

  "70MUH202": {
    Food: "MOUHAMMARA",
    PREFIX: "70-MUH-",
    latestLotNumber: "70-MUH-202",
    PRODUCTO: "Pimiento rojo, Nueces, Melaza de granada, Pan rallado, Aceite, Especias, Sal",
    ORIGEN: "Makro / Carrefour / Oasis",
    LOTE: "Pimiento L430, Nueces L221",
    USADO: "Mezze",
    CHEF: "Chef B05",
    EXP_DAYS: 10,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 14,
    PROD_ANCHOR: "2026-05-10"
  },

  "70PAR22": {
    Food: "HOJAS DE PARRA",
    PREFIX: "70-PAR-",
    latestLotNumber: "70-PAR-22",
    PRODUCTO: "Hojas de parra cocidas, arroz, tomate, c aceite de oliva, limón, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Hojas de parra Oasis, Arroz L520, Limón L140",
    USADO: "Hojas de Parra",
    CHEF: "Chef B05",
    EXP_DAYS: 12,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 10,
    PROD_ANCHOR: "2026-05-10"
  },

  "70TCAR72": {
    Food: "TIRA CARNE",
    PREFIX: "70-TCAR-",
    latestLotNumber: "70-TCAR-72",
    PRODUCTO: "Carne de ternera, cebolla, tomate, yogur, vinagre,limón, especias, ajo, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Carne Makro, Esp Oasis",
    USADO: "Sh. Carne",
    CHEF: "Chef B05",
    EXP_DAYS: 12,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 10,
    PROD_ANCHOR: "2026-05-10"
  },

  "70TPOLLO71": {
    Food: "TIRA POLLO",
    PREFIX: "70-TPOLLO-",
    latestLotNumber: "70-TPOLLO-71",
    PRODUCTO: "Pollo, tomate, yogur, vinagre,limón, especias, ajo, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Pollo Makro, Esp Oasis",
    USADO: "Sh. Pollo",
    CHEF: "Chef B05",
    EXP_DAYS: 12,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 10,
    PROD_ANCHOR: "2026-05-10"
  },


  "70TAOUK50": {
    Food: "TAOUK POLLO",
    PREFIX: "70-TAOUK-",
    latestLotNumber: "70-TAOUK-50",
    PRODUCTO: "Pechuga de pollo, yogur, vinagre, limón, aceite de oliva, ajo, especias, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Pollo Makro, Especias Oasis",
    USADO: "BBQ Pollo",
    CHEF: "Chef B05",
    EXP_DAYS: 14,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 12,
    PROD_ANCHOR: "2026-05-10"
  },

  "70MICHC51": {
    Food: "MICHWI CARNE",
    PREFIX: "70-MICHC-",
    latestLotNumber: "70-MICHC-51",
    PRODUCTO: "Carne , yogur, vinagre, limón, aceite de oliva, ajo, especias, cebolla, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "CARNE ESP MAKRO, Especias Oasis",
    USADO: "BBQ CARNE",
    CHEF: "Chef B05",
    EXP_DAYS: 35,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 30,
    PROD_ANCHOR: "2026-05-10"
  },
  "70KEB210": {
    Food: "KEBBE",
    PREFIX: "70-KEB-",
    latestLotNumber: "70-KEB-210",
    PRODUCTO: "Carne de ternera magra, bulgur (trigo partido fino), cebolla, piñones",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "CARNE - KEBBE , Especias Oasis",
    USADO: "KEBBE",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2026-05-10"
  },

  "70FAL207": {
    Food: "PROD_FALAFEL",
    PREFIX: "70-FAL-",
    latestLotNumber: "12-FAL-207",
    PRODUCTO: "Garbanzos secos, perejil, cilantro, cebolla, bicarbonato, aceite de girasol",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "CARNE - KEBBE , Especias Oasis",
    USADO: "FALAFEL",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2026-05-10"
  },

  "70RAK209": {
    Food: "PROD_RAKA QUESO",
    PREFIX: "70-RAK-",
    latestLotNumber: "70-RAK-209",
    PRODUCTO: "Queso blanco, mozzarella, harina de trigo, agua, sal, aceite de girasol",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Queso Makro , Especias Oasis",
    USADO: "RAKA",
    CHEF: "Chef B05",
    EXP_DAYS: 45,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 40,
    PROD_ANCHOR: "2026-05-10"
  },

  "70SAQ203": {
    Food: "PROD_SAMB-QUESO",
    PREFIX: "70-SAQ-",
    latestLotNumber: "51-SAQ-203",
    PRODUCTO: "Harina de trigo, Queso blanco, mozzarella, harina de trigo, agua, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Queso Makro , Especias Oasis",
    USADO: "SAMB-QUESO",
    CHEF: "Chef B05",
    EXP_DAYS: 60,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 40,
    PROD_ANCHOR: "2026-05-10"
  },

  "70SAC204": {
    Food: "PROD_SAMB-CARNE",
    PREFIX: "70-SAC-",
    latestLotNumber: "70-SAC-204",
    PRODUCTO: "Harina de trigo, Carne Ternera, harina de trigo, agua, sal, aceite de girasol",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Carne Makro , Especias OASIS",
    USADO: "SAM-CARNE",
    CHEF: "Chef B05",
    EXP_DAYS: 60,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2026-05-10"
  },

  "70FAT206": {
    Food: "PROD_FATAYER",
    PREFIX: "70-FAT-",
    latestLotNumber: "70-FAT-206",
    PRODUCTO: "Harina de trigo, espinacas frescas, cebolla, limón, sal, pimienta",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "espinacas , Especias Oasis",
    USADO: "FATAYER",
    CHEF: "Chef B05",
    EXP_DAYS: 60,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2026-05-10"
  },
  "70ARROZ63": {
    Food: "PROD_ARROZ",
    PREFIX: "70-ARROZ-",
    latestLotNumber: "70-RICE-63",
    PRODUCTO: "Arroz , cebolla, perejil, sal, especias",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Arroz Oasis , Especias Oasis",
    USADO: "ARROZ",
    CHEF: "Chef B05",
    EXP_DAYS: 60,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 40,
    PROD_ANCHOR: "2026-05-10"
  },
};
