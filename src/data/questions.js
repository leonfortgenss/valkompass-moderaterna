// "Vilket Stenungsund vill du ha?" — satiriskt politiskt test
// Moderaterna i Stenungsund, inför valet 2026.
//
// Varje fråga har fyra svarsalternativ (A–D). Ett alternativ motsvarar
// Moderaterna i Stenungsunds ståndpunkt (moderate: <bokstav>). Övriga
// alternativ är satiriska överdrifter av andra politiska förhållningssätt,
// taggade med en intern profilkod som ALDRIG visas för användaren:
//
//   M     = Handlingskraftig framtidsbyggare (det moderata svaret)
//   SYS   = Kommunala systemälskaren
//   LOCAL = Lokala bevararen
//   LEFT  = Kollektivisten
//   GREEN = Gröna visionsresenären
//   WILD  = Politiska väderflöjeln

export const questions = [
  {
    id: 1,
    category: 'Ekonomi och skatt',
    title: 'När pengarna inte räcker till allt',
    text: 'Vad ska kommunen göra när många behov är viktiga, men pengarna inte räcker till allt?',
    options: [
      { letter: 'A', profile: 'LEFT', text: 'Beskatta hårdare! Saknas det pengar är det väl bara att hämta in?! Förstår inte problemet...' },
      { letter: 'B', profile: 'M', text: 'Prioritera skola, omsorg och trygghet, minska onödiga kostnader och vara ärlig med vad som måste vänta.' },
      { letter: 'C', profile: 'LOCAL', text: 'Lyssna på samtliga protestgrupper och lova alla att just deras fråga är prioriterad. Tillsätt utredningar. Efter en tid startas processen om, alla får komma till tals i en ny samtalsrunda – låt tiden gå. En levande dialog är trots allt det viktigaste.' },
      { letter: 'D', profile: 'SYS', text: 'Skapa en ny kommunal samordningsfunktion som ser till att alla verksamheter får känna sig sedda, bekräftade och ungefär lika underfinansierade.' },
    ],
    moderate: 'B',
  },
  {
    id: 2,
    category: 'Skola och utbildning',
    title: 'Svåra beslut om skolor',
    text: 'Vad ska väga tyngst när kommunen fattar svåra beslut om skolorganisationen?',
    options: [
      { letter: 'A', profile: 'M', text: 'Elevernas kunskaper, trygghet, studiero och tillgång till skickliga lärare, även när beslutet är svårt.' },
      { letter: 'B', profile: 'LOCAL', text: 'Alla delar av kommunen har rätt till full kommunal service. Därför ska varje skola vara kvar, oaktat minskat elevunderlag, kostnad eller kvalitet. Hur svårt kan det va?' },
      { letter: 'C', profile: 'GREEN', text: 'Har en skola funnits länge är den en del av vårt kulturella arv. Då bör den bevaras, även om verksamheten inte längre fungerar särskilt väl.' },
      { letter: 'D', profile: 'SYS', text: 'Ingen elev ska behöva möta höga förväntningar. Det är bättre att varje skola får fortsätta som den gör än att någon riskerar att känna press att förbättra resultaten.' },
    ],
    moderate: 'A',
  },
  {
    id: 3,
    category: 'Campus Nösnäs',
    title: 'Campus Nösnäs',
    text: 'Vad bör Stenungsund göra med Nösnäsområdet och kommunens utbildningsverksamheter efter gymnasiet?',
    options: [
      { letter: 'A', profile: 'M', text: 'Utveckla Campus Nösnäs: samla gymnasium, vuxenutbildning, SFI, yrkesutbildning, studiecirklar och annan utbildning på en gemensam plats: Campus Nösnäs. Använd kommunens lokaler bättre och sök samarbeten med högskolor och universitet, i ett nära samarbete med lokalt näringsliv/industri.' },
      { letter: 'B', profile: 'LOCAL', text: 'Fortsätta betala för flera olika lokaler, utspridda i kommunen. Det är ändå bara skattepengar, och kvadratmeter brukar må bra av lite ensamtid. Överallt ska det finnas lediga lokaler i fall någon vill starta en studiecirkel eller annan fortbildning.' },
      { letter: 'C', profile: 'WILD', text: 'Byta namn på gymnasiet och hoppas att det räknas som utveckling.' },
      { letter: 'D', profile: 'SYS', text: 'Tillsätta en visionsgrupp som träffas på olika platser för att diskutera, ha dialog, varför verksamheterna ligger på olika platser.' },
    ],
    moderate: 'A',
  },
  {
    id: 4,
    category: 'Företagande och jobb',
    title: 'Vägen till det första jobbet',
    text: 'Vad är den bästa hjälpen för en ung person som står långt från arbetsmarknaden?',
    options: [
      { letter: 'A', profile: 'SYS', text: 'Ett kommunalt projekt där deltagaren får stärka sin självkänsla, utforska sina möjligheter och efter två år gå vidare till nästa projekt. Att lära sig bryta normer är att finna sig själv – sedan får samhället ta sitt ansvar och stödja med insatser och bidrag.' },
      { letter: 'B', profile: 'M', text: 'Utbildning som leder till efterfrågad kompetens, tydliga förväntningar, praktik och en verklig väg till det första jobbet.' },
      { letter: 'C', profile: 'LEFT', text: 'Skydda den unge från företag som riskerar att tjäna pengar på att anställa människor. Kommunen bör helst själv skapa en trygg plats utan besvärande vinstintresse.' },
      { letter: 'D', profile: 'SYS', text: 'Sänka kraven tills alla lyckas. Det är betydligt enklare än att ge människor verktygen att klara höga förväntningar.' },
    ],
    moderate: 'B',
  },
  {
    id: 5,
    category: 'Företagande och jobb',
    title: 'Fler jobb i Stenungsund',
    text: 'Hur skapar vi fler jobb och fler växande företag i Stenungsund?',
    options: [
      { letter: 'A', profile: 'SYS', text: 'Genom en ny kommunal näringslivsstrategi, en styrgrupp och en samordnare som hjälper företagarna att hitta rätt samordnare.' },
      { letter: 'B', profile: 'LEFT', text: 'Genom att hålla företagen under noggrann uppsikt. Den som tjänar pengar kan trots allt ha tjänat för mycket pengar.' },
      { letter: 'C', profile: 'LOCAL', text: 'Genom att säga ja till varje etablering tills någon protesterar. Då säger vi nej.' },
      { letter: 'D', profile: 'M', text: 'Genom bättre företagsservice, snabbare kommunala besked, kortare handläggningstider och utbildningar som matchar företagens behov.' },
    ],
    moderate: 'D',
  },
  {
    id: 6,
    category: 'Företagande och jobb',
    title: 'Företagsklimatet',
    text: 'Vilket mål bör Stenungsund ha för kommunens företagsklimat?',
    options: [
      { letter: 'A', profile: 'SYS', text: 'Att kommunen satsar stora resurser på företagarguider som bättre kan informera företagen om hur kommunen kan hjälpa dem att växa.' },
      { letter: 'B', profile: 'M', text: 'Att Stenungsund ska vara bland Sveriges tio bästa kommuner för företagande.' },
      { letter: 'C', profile: 'GREEN', text: 'Företag och klimat i samma ord? Mål? Njae … Det är snarare kulturen som skapar ett människovänligt och hållbart klimat i vår kommun – inte företagen!' },
      { letter: 'D', profile: 'LEFT', text: 'Företagen är till för att tjäna det gemensamma. Företagsklimat borde därför främst handla om klimatet för arbetarna. Det är ju trots allt de som faktiskt utgör företagen.' },
    ],
    moderate: 'B',
  },
  {
    id: 7,
    category: 'Ekonomi och skatt',
    title: 'Kommunens fastigheter',
    text: 'Bör Stenungsund kunna sälja fastigheter som inte behövs för kommunens kärnverksamhet?',
    options: [
      { letter: 'A', profile: 'LEFT', text: 'Nej. Det gemensamma ska äga det gemensamma. Ju mer kommunen äger, desto bättre, även om räntor och underhåll tar pengar från välfärden. Privat ägande leder ändå bara till att någon gör vinst.' },
      { letter: 'B', profile: 'M', text: 'Ja. Fastigheter som inte behövs för skola, omsorg eller annan kärnverksamhet kan säljas för att minska kommunens skulder och räntekostnader. Det gynnar oss alla.' },
      { letter: 'C', profile: 'GREEN', text: 'Nej. En kommunal byggnad är en del av det lokala kulturarvet från den dag kommunen köpte den.' },
      { letter: 'D', profile: 'LOCAL', text: 'Vi bör först fråga alla vad de tycker. Om svaren skiljer sig åt behåller vi allt och kallar det dialog. Hur svårt kan det va?' },
    ],
    moderate: 'B',
  },
  {
    id: 8,
    category: 'Ekonomi och skatt',
    title: 'Skatten',
    text: 'Vad bör kommunen göra när ekonomin är stark och verksamheterna fungerar väl?',
    options: [
      { letter: 'A', profile: 'M', text: 'Sänka kommunalskatten och låta människor behålla mer av sina egna pengar. Det ökar människors frihet, och får fart på hjulen. Bra för dig, bra för Stenungsund!' },
      { letter: 'B', profile: 'SYS', text: 'Höja ambitionsnivån och kostnaderna tills överskottet försvinner. En kommunal budget mår bäst när varje krona redan är bokad.' },
      { letter: 'C', profile: 'LEFT', text: 'Skapa nya bidrag, projekt och satsningar till alla som frågar. Att prioritera kan uppfattas som exkluderande.' },
      { letter: 'D', profile: 'SYS', text: 'Behålla skatten som den är, men tillsätta en arbetsgrupp som utreder hur det skulle kännas att sänka den eller höja den. Att betala skatt är trots allt häftigt.' },
    ],
    moderate: 'A',
  },
  {
    id: 9,
    category: 'Äldreomsorg',
    title: 'Valfrihet i äldreomsorgen',
    text: 'Vad bör valfrihet i äldreomsorgen innebära?',
    options: [
      { letter: 'A', profile: 'SYS', text: 'Att kommunen väljer åt alla. Ett alternativ är trots allt enklare att välja än vad flera alternativ är att välja mellan!' },
      { letter: 'B', profile: 'LEFT', text: 'Att privata utförare hålls borta. Den som tjänar pengar på omsorg måste rimligen vara mer intresserad av vinsten än av människorna. Ideologi skall gå före kvalitet!' },
      { letter: 'C', profile: 'LOCAL', text: 'Att varje äldre får exakt den lösning som önskas, oavsett bemanning, kostnad eller om verksamheten faktiskt finns. Äldreomsorg ska dessutom finnas i alla kommundelar, överallt där någon önskar det.' },
      { letter: 'D', profile: 'M', text: 'Att äldre kan välja mellan kommunala och fristående utförare som uppfyller tydliga kvalitetskrav.' },
    ],
    moderate: 'D',
  },
  {
    id: 10,
    category: 'Äldreomsorg',
    title: 'Maten i äldreomsorgen',
    text: 'Vad är viktigast när kommunen serverar mat till äldre?',
    options: [
      { letter: 'A', profile: 'SYS', text: 'Att kommunen tar fram en gemensam måltidsstrategi, tillsätter ett kommunalt styrt kostråd och följer upp att alla känner sig delaktiga i processen genom en tillsatt utredning.' },
      { letter: 'B', profile: 'LEFT', text: 'Att all mat lagas i offentlig regi. Den kan vara hur god som helst, men om någon privat aktör tjänar pengar på den smakar den ändå lite fel. Kan maten köpas in från statliga producenter så är det att föredra.' },
      { letter: 'C', profile: 'LOCAL', text: 'Att varje kommundel har sitt eget kök, sin egen meny och helst sina egna råvaror från närområdet. Småskaligt är ju alltid bäst, även när portionerna blir dubbelt så dyra.' },
      { letter: 'D', profile: 'M', text: 'Att maten är god, näringsrik och vällagad, att den äldre får inflytande och att kvaliteten följs upp, oavsett vem som lagar den.' },
    ],
    moderate: 'D',
  },
  {
    id: 11,
    category: 'Trygghet',
    title: 'Tryggheten i Stenungsund',
    text: 'Hur skapar vi större trygghet i Stenungsund?',
    options: [
      { letter: 'A', profile: 'M', text: 'Genom bättre belysning, kamerabevakning där det är motiverat, tidiga insatser och arbete för ökad polisnärvaro i kommunen.' },
      { letter: 'B', profile: 'SYS', text: 'Genom ett kommunalt trygghetsråd, en trygghetssamordnare och en ny trygghetsstrategi som beskriver hur viktigt det är att människor känner sig trygga. Alla ska med!' },
      { letter: 'C', profile: 'LOCAL', text: 'Det löser vi lokalt! Varje kommundel tar ansvar för sin egen trygghet. ”God dräng reder sig själv”.' },
      { letter: 'D', profile: 'LEFT', text: 'Genom att sluta prata passivt aggressivt om ”trygghetsarbete”. Problemet är varken påstådd kriminalitet eller ”otrygghet”, utan att den sociala ingenjörskonsten ännu inte har gått tillräckligt långt.' },
    ],
    moderate: 'A',
  },
  {
    id: 12,
    category: 'Trygghet',
    title: 'Ungdomar på väg in i kriminalitet',
    text: 'Hur bör kommunen agera när unga riskerar att dras in i kriminalitet?',
    options: [
      { letter: 'A', profile: 'M', text: 'Genom tidiga insatser, tydliga krav, nära samarbete mellan skola, socialtjänst, polis och familj och genom att agera innan problemen hunnit växa sig stora.' },
      { letter: 'B', profile: 'SYS', text: 'Genom att inrätta ett centralt ungdomsråd, en samordningsfunktion och en särskild handlingsplan som säkerställer att alla berörda känner sig delaktiga i processen.' },
      { letter: 'C', profile: 'LOCAL', text: 'Genom att låta varje kommundel ta fram sin egen modell, anpassad efter lokala önskemål. Om modellerna säger emot varandra får vi helt enkelt respektera den lokala demokratin.' },
      { letter: 'D', profile: 'LEFT', text: 'Genom att bygga ut välfärden, fritidsverksamheten och socialtjänsten tills kriminaliteten inte längre känner sig strukturellt motiverad. Krav och konsekvenser riskerar ju bara att flytta fokus från den verkliga gärningsmannen: klassamhället.' },
    ],
    moderate: 'A',
  },
  {
    id: 13,
    category: 'Bostäder och samhällsplanering',
    title: 'Hur ska hela Stenungsund utvecklas?',
    text: 'Hur bör Stenungsund växa och utvecklas de kommande åren?',
    options: [
      { letter: 'A', profile: 'M', text: 'Genom att utveckla centrum, stärka kommunikationerna och samtidigt skapa bättre förutsättningar för hela kommunen att växa genom att förenkla planarbetet och bättre möjliggöra initiativ till ny bebyggelse.' },
      { letter: 'B', profile: 'LOCAL', text: 'Genom att varje kommundel får samma service, samma investeringar och samma utbud, oavsett befolkningsunderlag, behov eller kostnad. Vanligt bondförnuft säger ju att rättvist alltid betyder exakt lika.' },
      { letter: 'C', profile: 'GREEN', text: 'Genom att bromsa byggandet, minska biltrafiken, begränsa industrin och låta utvecklingen ske varsamt, cirkulärt och gärna i samklang med platsens energi.' },
      { letter: 'D', profile: 'LOCAL', text: 'Genom att säga ja till varje lokalt önskemål, även när önskemålen motsäger varandra. Alla kommundelar ska få allt de vill ha. Hur svårt kan det vara?' },
    ],
    moderate: 'A',
  },
  {
    id: 14,
    category: 'Bostäder och samhällsplanering',
    title: 'Nya bostäder och byggprojekt',
    text: 'Hur bör kommunen hantera nya bostadsprojekt och initiativ till byggande?',
    options: [
      { letter: 'A', profile: 'SYS', text: 'Genom att säga ja i princip, men först efter en bred politisk process, ett särskilt samråd och ett nytt program för hur kommunen ska bli bättre på att säga ja.' },
      { letter: 'B', profile: 'M', text: 'Genom tydliga besked, enklare planprocesser och snabbare handläggning, utan att tumma på kvalitet, ansvar eller långsiktig utveckling.' },
      { letter: 'C', profile: 'LOCAL', text: 'Enkelt! Genom att låta varje lokal opinion avgöra från fall till fall. Vi säger ja tills någon säger nej. Då säger vi också nej.' },
      { letter: 'D', profile: 'LOCAL', text: 'Genom småskalighet, varsamhet och sunt bondförnuft. Nya bostäder är bra, så länge de byggs lite grann, någon annanstans och helst inte förändrar något.' },
    ],
    moderate: 'B',
  },
  {
    id: 15,
    category: 'Klimat, industri och beredskap',
    title: 'Klimat, industri och jobb',
    text: 'Hur bör Stenungsund minska utsläppen utan att samtidigt förlora jobb, kompetens och framtidstro?',
    options: [
      { letter: 'A', profile: 'GREEN', text: 'Genom att begränsa industrin här hemma och i stället köpa samma produkter från andra länder. Då hamnar åtminstone utsläppen längre bort från kommunens klimatbokslut.' },
      { letter: 'B', profile: 'SYS', text: 'Genom att inrätta ett kommunalt klimatråd, anta en ny klimatstrategi och följa upp att samtliga verksamheter har genomfört tillräckligt många klimatdialoger.' },
      { letter: 'C', profile: 'M', text: 'Genom teknik, innovation och samarbete mellan kommunen, industrin och utbildningen, med Campus Nösnäs som en samlande nod för Stenungsunds kompetensförsörjning och hållbara tillväxt. På så sätt kan utsläppen minska samtidigt som jobb och konkurrenskraft stärks.' },
      { letter: 'D', profile: 'LEFT', text: 'Genom att utgå från att företag som tjänar pengar på industriell verksamhet är en del av problemet. Om vinsten försvinner borde utsläppen rimligen känna sig mindre motiverade.' },
    ],
    moderate: 'C',
  },
  {
    id: 16,
    category: 'Politiskt ledarskap',
    title: 'Att lyssna och sedan faktiskt besluta',
    text: 'Vad innebär det att kommunen är lyhörd för invånarnas synpunkter?',
    options: [
      { letter: 'A', profile: 'SYS', text: 'Att alla berörda först ska vara helt överens. Om någon fortfarande är missnöjd får kommunen fortsätta dialogen tills nästa mandatperiod kan ta över.' },
      { letter: 'B', profile: 'LOCAL', text: 'Att den senaste protestlistan får styra. Kommunens långsiktiga planering måste trots allt kunna anpassas efter vem som samlade flest namn i helgen, eller den som skriker högst.' },
      { letter: 'C', profile: 'M', text: 'Att politiken lyssnar, sätter sig in i detaljer, väger för- och nackdelar, redovisar konsekvenserna och prioriterar det som är bäst för kommuninvånarna på lång sikt, även när beslutet är svårt.' },
      { letter: 'D', profile: 'LEFT', text: 'Att alla ska få komma till tals, men att vissa perspektiv naturligtvis är mer jämlika än andra. Företagare och fastighetsägare bör först få sina eventuella vinstintressen ordentligt genomlysta.' },
    ],
    moderate: 'C',
  },
  {
    id: 17,
    category: 'Politiskt ledarskap',
    title: 'Politikens roll i kommunens verksamheter',
    text: 'Hur bör politiker styra skola, omsorg och andra kommunala verksamheter?',
    options: [
      { letter: 'A', profile: 'M', text: 'Genom tydliga mål, ordentlig uppföljning och förtroende för professionen, kommunens förvaltning. Politiken ska ange riktningen, inte detaljstyra varje arbetsdag.' },
      { letter: 'B', profile: 'SYS', text: 'Genom fler politiskt styrda råd, tätare rapportering och tydliga besked om hur varje verksamhet bör arbeta. Har väljarna valt politiker ska politikerna naturligtvis också bestämma, särskilt över dem som faktiskt kan verksamheten.' },
      { letter: 'C', profile: 'LEFT', text: 'Genom att kommunen själv driver allt och att varje försök till effektivisering först granskas för misstänkt vinstintresse. Professionell frihet är bra, så länge den håller sig inom den politiskt godkända planen.' },
      { letter: 'D', profile: 'LOCAL', text: 'Genom att låta varje verksamhet och kommundel välja sin egen modell utifrån dagens lokala opinion. Samordning kan lätt uppfattas som toppstyrning. Hur svårt kan det vara?' },
    ],
    moderate: 'A',
  },
  {
    id: 18,
    category: 'Klimat, industri och beredskap',
    title: 'Kommunens beredskap',
    text: 'Hur bör Stenungsund stärka sin beredskap inför kriser, störningar och allvarliga samhällshändelser?',
    options: [
      { letter: 'A', profile: 'GREEN', text: 'Genom att låta naturen och Moder Jord vara vår ledstjärna och samtidigt vårt största hot och vår största möjlighet. Med cirkulär omtanke, goda energier och kärlek som vårt främsta vapen bygger vi ett resilient Stenungsund i harmoni med planeten.' },
      { letter: 'B', profile: 'M', text: 'Genom tydliga ansvar, regelbundna övningar, säkrad försörjning, fungerande reservlösningar och ett nära samarbete med företag, föreningar och myndigheter.' },
      { letter: 'C', profile: 'LOCAL', text: 'Genom att varje kommundel gör sin egen beredskapsplan utifrån lokala önskemål. Behövs el, vatten eller information löser man det bäst nära människorna. Hur svårt kan det vara?' },
      { letter: 'D', profile: 'SYS', text: 'Genom att först identifiera vilka grupper som kan känna sig exkluderade av ordet ”kris”. Därefter kan kommunen tillsätta en inkluderande beredskapsdialog innan något så drastiskt som en övning genomförs.' },
    ],
    moderate: 'B',
  },
  {
    id: 19,
    category: 'Politiskt ledarskap',
    title: 'Politiskt ansvar',
    text: 'Vad innebär det att ta politiskt ansvar för Stenungsunds framtid?',
    options: [
      { letter: 'A', profile: 'GREEN', text: 'Att sätta upp modiga och hållbara mål till 2045, gärna med ett globalt perspektiv och sikte på mänsklighetens framtid. Då visar Stenungsund handlingskraft och stort ansvar i nutid, samtidigt som någon annan får ansvara för resultatet senare.' },
      { letter: 'B', profile: 'WILD', text: 'Vi kuppar bort det gamla gänget, byter fot totalt och relanserar oss som unga, nytänkare och fräscha. Det går nog bra.' },
      { letter: 'C', profile: 'LOCAL', text: 'Att byta uppfattning så fort en ny protestlista dyker upp. Politik handlar trots allt om att följa folket, särskilt det folk som hörs mest just den veckan. Det är inte så svårt.' },
      { letter: 'D', profile: 'M', text: 'Att fatta nödvändiga beslut, förklara varför, prioritera långsiktigt och stå för resultatet även när beslutet är svårt.' },
    ],
    moderate: 'D',
  },
]
