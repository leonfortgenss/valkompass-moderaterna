// Profiltexter, delresultat och jämförelsetexter för
// "Vilket Stenungsund vill du ha?"

// ---- 9. Val av slutprofil / 10. Profiltexter ----
// Nycklar: 'FRAMTIDSBYGGARE' och 'VALFARDSREALIST' väljs enbart på
// moderat matchningsprocent. Övriga väljs på vilken icke-moderat
// profilkod som fått flest poäng (LOCAL / SYS / LEFT / GREEN / WILD).
export const PROFILES = {
  FRAMTIDSBYGGARE: {
    name: 'Den handlingskraftiga framtidsbyggaren',
    text: 'Du vill att politiken lyssnar, sätter sig in i frågorna och sedan faktiskt fattar beslut. Du prioriterar kunskap framför nostalgi, kvalitet framför organisationsform och resultat framför ännu en kommunal strategi. Du tycker att företag ska få växa, att skattepengar ska användas varsamt och att Stenungsund ska våga investera i framtiden.',
    closing: 'Dina svar ligger mycket nära Moderaterna i Stenungsunds politik inför valet 2026.',
  },
  VALFARDSREALIST: {
    name: 'Den varma välfärdsrealisten',
    text: 'Du har hjärtat i välfärden, men vill också att satsningar ska vara finansierade och fungera i verkligheten. Du uppskattar omtanke, kvalitet och trygghet, men har begränsat tålamod med tomma löften och symbolpolitik.',
    closing: 'Du delar mycket av Moderaternas syn på kvalitet, ansvar och trygghet, även om ni inte tycker lika i alla frågor.',
  },
  LOCAL: {
    name: 'Den lokala bevararen',
    text: 'Du tycker om när saker finns nära, känns bekanta och helst fortsätter ungefär som tidigare. Du lyssnar gärna på lokala opinioner och vill att hela kommunen ska leva. Din stora utmaning blir att förklara hur allt ska bevaras, utvecklas och finansieras samtidigt.',
    closing: 'Du står en bit från Moderaternas mer förändringsinriktade linje, men ni delar sannolikt engagemanget för hela Stenungsund.',
  },
  SYS: {
    name: 'Den kommunala systemälskaren',
    text: 'Du känner stor tillit till kommunala lösningar, politiskt styrda råd och gemensamma modeller. När ett problem uppstår ser du gärna en strategi, en samordnare och en ordentlig uppföljning. Du riskerar möjligen att skapa så välorganiserade processer att själva problemet får vänta lite.',
    closing: 'Du ligger längre från Moderaternas syn på valfrihet, företagsamhet och begränsad politisk detaljstyrning.',
  },
  LEFT: {
    name: 'Den kollektiva problemlösaren',
    text: 'Du tror starkt på gemensamt ägande, offentliga lösningar och politikens möjlighet att fördela resurser rättvist. Du är vaksam mot privata vinster och tycker gärna att kommunen ska ta ett större ansvar. Ibland kan dock misstänksamheten mot företag och valfrihet göra lösningarna färre.',
    closing: 'Du delar Moderaternas ambition om en stark välfärd, men inte alltid synen på ägande, valfrihet och företagsamhet.',
  },
  GREEN: {
    name: 'Den gröna visionsresenären',
    text: 'Du tänker långsiktigt, globalt och gärna cirkulärt. Du ser samband där andra mest ser budgetposter och praktiska hinder. Ibland återstår dock en liten detalj: vem som ska genomföra visionen, när det ska ske och hur den ska finansieras.',
    closing: 'Du delar Moderaternas vilja att minska utsläppen, men inte alltid synen på vägen dit.',
  },
  WILD: {
    name: 'Den politiska nystartaren',
    text: 'Du är öppen för snabba kursändringar, nya ansikten och en och annan total relansering. Stabilitet är bra, men förändring ser ofta bättre ut på valaffischen. Det kan bli spännande. Det går nog bra.',
    closing: 'Du och Moderaterna delar viljan att utveckla Stenungsund, men har olika syn på långsiktighet och stabilitet.',
  },
}

// Prioritetsordning vid lika poäng bland icke-moderata profiler (sektion 9)
export const PROFILE_TIEBREAK_ORDER = ['LOCAL', 'SYS', 'LEFT', 'GREEN', 'WILD']

// ---- 11. Tre delresultat ----
export const SUBSCORES = [
  {
    key: 'handlingskraft',
    label: 'Handlingskraft',
    questionIds: [2, 7, 11, 12, 14, 16, 17, 18, 19],
    tiers: [
      { min: 75, text: 'Du föredrar beslut och genomförande framför långdragna processer.' },
      { min: 50, text: 'Du uppskattar handlingskraft, men vill ofta väga in fler perspektiv innan beslut.' },
      { min: 0, text: 'Du föredrar bred förankring och försiktighet framför snabba beslut.' },
    ],
  },
  {
    key: 'ekonomi',
    label: 'Ekonomiskt ansvar',
    questionIds: [1, 5, 6, 7, 8, 9, 15],
    tiers: [
      { min: 75, text: 'Du vill prioritera, hushålla och respektera att skattepengar kommer från människor som arbetar.' },
      { min: 50, text: 'Du vill ha ordning i ekonomin, men är också öppen för fler offentliga satsningar.' },
      { min: 0, text: 'Du ser gärna att kommunen tar ett större ekonomiskt ansvar och gör fler gemensamma satsningar.' },
    ],
  },
  {
    key: 'framtidstro',
    label: 'Framtidstro',
    questionIds: [3, 4, 5, 6, 13, 14, 15, 19],
    tiers: [
      { min: 75, text: 'Du vill utveckla Campus Nösnäs, företagsklimatet och Stenungsunds möjligheter att växa.' },
      { min: 50, text: 'Du vill se utveckling, men balanserar den mot bevarande och försiktighet.' },
      { min: 0, text: 'Du prioriterar bevarande, småskalighet och försiktiga förändringar.' },
    ],
  },
]

// ---- 12. Frågor där användaren och Moderaterna tycker lika ----
// Prioritetsordning enligt underlaget. Visas högst 3, i denna ordning,
// filtrerat på de frågor där användaren valt det moderata alternativet.
export const AGREEMENT_PRIORITY = [
  { id: 3, label: 'Campus Nösnäs', text: 'Du delar vår ambition att samla utbildning, använda kommunens lokaler bättre och söka samarbete med högskolor, universitet och näringsliv.' },
  { id: 2, label: 'Skolorganisationen', text: 'Du delar vår syn att elevernas kunskaper, trygghet och tillgång till skickliga lärare ska väga tyngst, även när besluten är svåra.' },
  { id: 15, label: 'Industri, klimat och Campus Nösnäs', text: 'Du delar vår tro på teknik, innovation och samarbete mellan kommun, industri och utbildning för att minska utsläppen utan att tappa jobb och konkurrenskraft.' },
  { id: 6, label: 'Företagsklimat', text: 'Du delar vår ambition att Stenungsund ska vara bland Sveriges tio bästa kommuner för företagande.' },
  { id: 7, label: 'Kommunens fastigheter', text: 'Du delar vår syn att fastigheter som inte behövs för kärnverksamheten kan säljas för att minska skulder och räntekostnader.' },
  { id: 8, label: 'Skatten', text: 'Du delar vår syn att en stark ekonomi ska komma invånarna till del genom en sänkt kommunalskatt.' },
  { id: 11, label: 'Tryggheten', text: 'Du delar vår syn att trygghet skapas genom bättre belysning, kamerabevakning där det behövs och ökad polisnärvaro.' },
  { id: 13, label: 'Kommunens utveckling', text: 'Du delar vår syn att hela Stenungsund ska kunna växa genom enklare planarbete och bättre förutsättningar för ny bebyggelse.' },
  { id: 9, label: 'Valfrihet i äldreomsorgen', text: 'Du delar vår syn att äldre ska kunna välja mellan kommunala och fristående utförare som uppfyller tydliga kvalitetskrav.' },
]

// ---- 13. Frågor där användaren och Moderaterna tycker olika ----
// Respektfulla, generella jämförelser. Visas högst 2, i frågeordning,
// för de frågor där användaren inte valt det moderata alternativet.
export const DISAGREEMENT_TEXTS = {
  1: 'Du vill hantera en pressad kommunal ekonomi på ett annat sätt, medan Moderaterna vill prioritera skola, omsorg och trygghet, minska onödiga kostnader och vara ärliga med vad som måste vänta.',
  2: 'Du väger andra hänsyn tyngre kring skolorganisationen, medan Moderaterna vill sätta elevernas kunskaper, trygghet och tillgång till skickliga lärare främst, även när besluten är svåra.',
  3: 'Du föredrar en annan lösning för kommunens utbildningslokaler, medan Moderaterna vill samla gymnasium, vuxenutbildning och yrkesutbildning i ett utvecklat Campus Nösnäs, i samarbete med högskolor och näringsliv.',
  4: 'Du ser en annan väg till det första jobbet, medan Moderaterna vill satsa på utbildning som leder till efterfrågad kompetens, praktik och en verklig väg till jobb.',
  5: 'Du vill skapa fler jobb på ett annat sätt, medan Moderaterna vill satsa på bättre företagsservice, snabbare besked och kortare handläggningstider.',
  6: 'Du sätter ett annat mål för kommunens företagsklimat, medan Moderaterna vill att Stenungsund ska vara bland Sveriges tio bästa kommuner för företagande.',
  7: 'Du vill hellre behålla kommunens fastigheter, medan Moderaterna vill kunna sälja sådant som inte behövs för kärnverksamheten för att minska skulder och räntekostnader.',
  8: 'Du vill hantera ett starkt ekonomiskt läge på ett annat sätt, medan Moderaterna vill sänka kommunalskatten och låta människor behålla mer av sina egna pengar.',
  9: 'Du väger valfriheten i äldreomsorgen annorlunda, medan Moderaterna vill att äldre ska kunna välja mellan kommunala och fristående utförare som uppfyller tydliga kvalitetskrav.',
  10: 'Du ser andra saker som viktigast kring maten i äldreomsorgen, medan Moderaterna vill att maten ska vara god, näringsrik och vällagad, oavsett vem som lagar den.',
  11: 'Du vill skapa trygghet på ett annat sätt, medan Moderaterna vill satsa på bättre belysning, kamerabevakning där det är motiverat och ökad polisnärvaro.',
  12: 'Du ser en annan lösning för unga som riskerar kriminalitet, medan Moderaterna vill satsa på tidiga insatser, tydliga krav och nära samarbete mellan skola, socialtjänst, polis och familj.',
  13: 'Du ser en annan väg för hela Stenungsunds utveckling, medan Moderaterna vill utveckla centrum, stärka kommunikationerna och förenkla planarbetet för hela kommunen.',
  14: 'Du ser byggprocessen på ett annat sätt, medan Moderaterna vill ha tydliga besked, enklare planprocesser och snabbare handläggning.',
  15: 'Du vill minska utsläppen på ett annat sätt, medan Moderaterna vill satsa på teknik, innovation och samarbete mellan kommun, industri och utbildning, med Campus Nösnäs som en samlande nod.',
  16: 'Du ser lyhördhet på ett annat sätt, medan Moderaterna vill lyssna, väga för- och nackdelar och prioritera det som är bäst för kommuninvånarna på lång sikt.',
  17: 'Du ser politikens roll i kommunens verksamheter på ett annat sätt, medan Moderaterna vill sätta tydliga mål och lita på professionen, snarare än att detaljstyra.',
  18: 'Du ser kommunens beredskap på ett annat sätt, medan Moderaterna vill ha tydliga ansvar, regelbundna övningar och nära samarbete med företag, föreningar och myndigheter.',
  19: 'Du ser politiskt ansvar på ett annat sätt, medan Moderaterna vill fatta nödvändiga beslut, förklara varför och stå för resultatet även när det är svårt.',
}
