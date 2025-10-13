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
  "5HUM517": {
    Food: "HOMMUS",
    PREFIX: "5-HOM-",
    latestLotNumber: "5-HOM-517",
    PRODUCTO: "Garbanzos cocidos, Tahini, Limón, Aceite de oliva, Ajo, Sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Garbanzos L778, Tahini L120, Aceite L221",
    USADO: "Hummus",
    CHEF: "Chef B05",
    EXP_DAYS: 7,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 7,
    PROD_ANCHOR: "2025-10-01"
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
    DAYS_PRODUCTION: 10,
    PROD_ANCHOR: "2025-09-10"
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
    DAYS_PRODUCTION: 14,
    PROD_ANCHOR: "2025-08-15"
  },

  "29MUH431": {
    Food: "LOVEME",
    PREFIX: "29-MUH-",
    latestLotNumber: "29-MUH-431",
    PRODUCTO: "Love roja, Nueces, Melaza de granada, Pan rallado, Aceite, Especias, Sal",
    ORIGEN: "Makro / Carrefour / Oasis",
    LOTE: "Pimiento L431, Nueces L221",
    USADO: "AIRE",
    CHEF: "Chef B05",
    EXP_DAYS: 12,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 20,
    PROD_ANCHOR: "2025-07-25"
  },

  "11PAR654": {
    Food: "HOJAS DE PARRA",
    PREFIX: "11-PAR-",
    latestLotNumber: "11-PAR-654",
    PRODUCTO: "Hojas de parra cocidas, arroz, tomate, cebolla, perejil, menta, aceite de oliva, limón, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Hojas de parra L7020, Arroz L520, Limón L140",
    USADO: "Hojas de Parra",
    CHEF: "Chef B05",
    EXP_DAYS: 12,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 10,
    PROD_ANCHOR: "2025-09-01"
  },

  "17SHC544": {
    Food: "SHAWARMA CARNE",
    PREFIX: "17-SHC544-",
    latestLotNumber: "17-SHC-544",
    PRODUCTO: "Carne de ternera, cebolla, tomate, yogur, vinagre, aceite de oliva, limón, especias, ajo, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Carne L7021, Esp Oasis L440",
    USADO: "Sh. Carne",
    CHEF: "Chef B05",
    EXP_DAYS: 12,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 10,
    PROD_ANCHOR: "2025-10-10"
  },
  "23BQP533": {
    Food: "BBQ POLLO",
    PREFIX: "23-SHP-",
    latestLotNumber: "23-BQP-533",
    PRODUCTO: "Pechuga de pollo, yogur, vinagre, limón, aceite de oliva, ajo, especias, cebolla, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Pollo L7022, Especias L440",
    USADO: "BBQ Pollo",
    CHEF: "Chef B05",
    EXP_DAYS: 14,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 12,
    PROD_ANCHOR: "2025-10-10"
  }, 

  "25BQC342": {
    Food: "BBQ CARNE",
    PREFIX: "25-BQC-",
    latestLotNumber: "25-BQC-342",
    PRODUCTO: "Carne , yogur, vinagre, limón, aceite de oliva, ajo, especias, cebolla, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "CARNE ESP MAKRO, Especias L440",
    USADO: "BBQ CARNE",
    CHEF: "Chef B05",
    EXP_DAYS: 35,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 30,
    PROD_ANCHOR: "2025-10-10"
  }, 
  "9KEB345": {
    Food: "KEBBE",
    PREFIX: "9-KEB-",
    latestLotNumber: "9-KEB-345",
    PRODUCTO: "Carne de ternera magra, bulgur (trigo partido fino), cebolla, piñones",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "CARNE - KEBBE , Especias L440",
    USADO: "KEBBE",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2025-10-10"
  }, 

  "12FAL215": {
    Food: "KEBBE",
    PREFIX: "12-FAL-",
    latestLotNumber: "12-FAL-215",
    PRODUCTO: "Carne de ternera magra, bulgur (trigo partido fino), cebolla, piñones",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "CARNE - KEBBE , Especias L440",
    USADO: "KEBBE",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2025-10-10"
  }, 

  "8RAK934": {
    Food: "RAKA",
    PREFIX: "8RAK-",
    latestLotNumber: "8-RAK-934",
    PRODUCTO: "Queso blanco, mozzarella, harina de trigo, agua, sal, aceite de girasol",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Queso Makro , Especias L440",
    USADO: "RAKA",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2025-10-10"
  }, 
   
   "51SAQ423": {
    Food: "SAMB-QUESO",
    PREFIX: "51-SAQ-",
    latestLotNumber: "51-SAQ-423",
    PRODUCTO: "Harina de trigo, Queso blanco, mozzarella, harina de trigo, agua, sal, aceite de girasol",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Queso Makro , Especias L440",
    USADO: "SAMB-QUESO",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2025-10-10"
  }, 

  "51SAQ234": {
    Food: "SAMB-CARNE",
    PREFIX: "51-SAC-",
    latestLotNumber: "51-SAC-234",
    PRODUCTO: "Harina de trigo, Carne Ternera, harina de trigo, agua, sal, aceite de girasol",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Carne Makro , Especias L440",
    USADO: "SAM-CARNE",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2025-10-10"
  },
 
 "53FAT243": {
    Food: "FATAYER",
    PREFIX: "53-FAT-",
    latestLotNumber: "53-FAT-243",
    PRODUCTO: "Harina de trigo, espinacas frescas, cebolla, limón, aceite de oliva, sal, pimienta",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "espinacas , Especias L440",
    USADO: "FATAYER",
    CHEF: "Chef B05",
    EXP_DAYS: 40,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 45,
    PROD_ANCHOR: "2025-10-10"
  },

  "19SHP533": {
    Food: "SHAWARMA POLLO",
    PREFIX: "19-SHP-",
    latestLotNumber: "19-SHP-533",
    PRODUCTO: "Pechuga de pollo, yogur, vinagre, limón, aceite de oliva, ajo, especias, cebolla, sal",
    ORIGEN: "Makro / Oasis / Consum",
    LOTE: "Pollo L7022, Especias L440",
    USADO: "Shawarma Pollo",
    CHEF: "Chef B05",
    EXP_DAYS: 12,
    MONTHS_BACK: 6,
    DAYS_PRODUCTION: 14,
    PROD_ANCHOR: "2025-10-10"
  }
};
