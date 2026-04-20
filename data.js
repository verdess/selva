// Selva Studio — site data. All content for the prototype lives here.
// Bilingual ES/EN stored as { es, en } pairs; Tweaks toggles which is shown.

window.SELVA_DATA = (function(){

  // ---------- VIMEO ----------
  // Canonical map of project-id → Vimeo reference. The array below is the
  // source of truth; this map is just for components that need lookups by id
  // without walking projects[].
  const VIMEO_HERO = { id: "1117293706" };
  const VIMEO = {
    "amazon-oficina":      { id: "1179328703" },
    "totalplay-roberto":   { id: "1179279265" },
    "grupo-vazol-vivir":   { id: "1101344989" },
    "amazon-nadie":        { id: "1049121851" },
    "totalplay-sonrie":    { id: "1083014404" },
    "mundet-mexicana":     { id: "1046925604" },
    "televisa-mes-patrio": { id: "1049116582" },
    "gaia-disena":         { id: "1114020288" },
    "volvo-invierno":      { id: "1101359145", h: "33802d35da" },
    "corvette-pulso":      { id: "1046908389" },
    "amazon-hotsale":      { id: "1083014234" },
  };


  // ---------- PROJECTS ----------
  // 11 case studies — real Vimeo titles, ordered newest → oldest.
  const projects = [
    {
      id: "amazon-oficina",
      client: "Amazon Prime",
      title: { es: "La Oficina", en: "The Office" },
      kicker: { es: "Adaptación latinoamericana de una serie de culto. Serie original de Amazon Prime.", en: "Latin American adaptation of a cult series. Amazon Prime original." },
      category: "Streaming Original",
      director: "RAGA + BUCAY + TORRES",
      year: 2026,
      vimeo: {"id":"1179328703"},
      agency: "In-house / Amazon Studios",
      frame: { bg: "var(--vino)", fg: "var(--nuez)", word: "OFICINA" },
      tags: ["Streaming", "Series", "LATAM"],
      paragraphs: {
        es: [
          "La versión mexicana de The Office es, en el papel, una apuesta imposible: cómo trasladar un formato de culto a una sensibilidad local sin caer en la imitación ni traicionar el original. Dirección compartida entre Raga, Marcos Bucay y Axel Torres — tres miradas que normalmente no comparten set pero que aquí encontraron una gramática común: mockumentary seco, actuaciones al borde del silencio, una oficina que parece filmada por un pasante con una cámara prestada.",
          "Rodaje continuo de ocho semanas en CDMX. Los actores venían del teatro, no de televisión, y eso se nota: la comedia brota de la pausa, no del chiste."
        ],
        en: [
          "The Mexican version of The Office is, on paper, an impossible bet: how do you transplant a cult format into a local sensibility without imitating it or betraying the original. Direction shared between Raga, Marcos Bucay and Axel Torres — three eyes that don't usually share a set, but here found a common grammar: dry mockumentary, performances on the verge of silence, an office that feels shot by an intern with a borrowed camera.",
          "Eight-week continuous shoot in Mexico City. The cast came from theater, not television — and it shows: the comedy lives in the pause, not the punchline."
        ]
      },
      quote: {
        es: "«La comedia no se actúa. Se aguanta.» — Raga, en rodaje.",
        en: '"Comedy isn\'t performed. It\'s endured." — Raga, on set.'
      },
      credits: [
        ["Dirección", "Raga Ibarra / Marcos Bucay / Axel Torres"],
        ["DOP", "Juan Pablo Ramírez"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Jefe de Producción", "Mariana Solís"],
        ["Dirección de Arte", "Regina Cheang"],
        ["Edición", "Sebastián Díaz"],
        ["Color", "Company 3, MX"],
        ["Sound Design", "La Casa del Sonido"],
        ["Plataforma", "Amazon Prime Video"],
      ]
    },
    {
      id: "totalplay-roberto",
      client: "Totalplay · HBO",
      title: { es: "Roberto", en: "Roberto" },
      kicker: { es: "Teaser para el estreno de la nueva adaptación de Como agua para chocolate.", en: "Teaser for the new adaptation of Like Water for Chocolate." },
      category: "Brand Film",
      director: "RAGA",
      year: 2026,
      vimeo: {"id":"1179279265"},
      agency: "Totalplay / HBO",
      frame: { bg: "var(--negro)", fg: "var(--rosa)", word: "ROBERTO" },
      tags: ["Streaming", "Brand Film", "LATAM"],
      paragraphs: {
        es: [
          "Un teaser construido alrededor de un solo personaje — Roberto — como puerta de entrada a la nueva adaptación de Como agua para chocolate para Totalplay y HBO. Raga lo filmó en 35mm en una hacienda del Bajío, con una luz que cambia al ritmo del fuego. Tres minutos sin diálogo, con la receta del chocolate como banda sonora.",
          "La pieza no cuenta la serie: cuenta el olor de la casa donde pasa la serie."
        ],
        en: [
          "A teaser built around a single character — Roberto — as a door into the new adaptation of Like Water for Chocolate for Totalplay and HBO. Raga shot it on 35mm in a Bajío hacienda, under a light that shifts with the fire. Three minutes without dialogue, with the chocolate recipe as score.",
          "The piece doesn't tell the series. It tells the smell of the house where the series happens."
        ]
      },
      quote: {
        es: "«La atmósfera es el personaje.»",
        en: '"The atmosphere is the character."'
      },
      credits: [
        ["Dirección", "Raga Ibarra"],
        ["DOP", "Juan Pablo Ramírez"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Dirección de Arte", "Daniela Schtulmann"],
        ["Edición", "Ana Laura Calderón"],
        ["Color", "Company 3 NY — Tom Poole"],
        ["Plataforma", "Totalplay · HBO Max"],
      ]
    },
    {
      id: "grupo-vazol-vivir",
      client: "Grupo Vazol",
      title: { es: "Vivir más y mejor", en: "Live Longer, Live Better" },
      kicker: { es: "Campaña institucional de marca para el grupo farmacéutico.", en: "Institutional brand campaign for the pharmaceutical group." },
      category: "Commercial",
      director: "FER ASHANE",
      year: 2025,
      vimeo: {"id":"1101344989","posterIframe":true},
      agency: "Ogilvy",
      frame: { bg: "var(--nuez)", fg: "var(--vino)", word: "VAZOL" },
      tags: ["Commercial", "Institutional"],
      paragraphs: {
        es: [
          "Una campaña de salud que no parece una campaña de salud. Fer Ashane construyó una serie de cuadros familiares — una abuela, un corredor matutino, una niña aprendiendo a nadar — con una paleta cálida de ventana y lámpara. La farmacéutica se presenta sin decir su nombre hasta el último cuadro.",
          "Rodaje de cuatro días en locación real, sin extras, sin utilería. Solo gente viviendo su día."
        ],
        en: [
          "A health campaign that doesn't look like a health campaign. Fer Ashane built a series of family vignettes — a grandmother, a morning runner, a girl learning to swim — in a warm window-and-lamp palette. The brand doesn't name itself until the final frame.",
          "Four-day shoot in real locations. No extras, no propping. Just people living their day."
        ]
      },
      quote: {
        es: "«La salud es lo que no se nota.»",
        en: '"Health is what you don\'t notice."'
      },
      credits: [
        ["Dirección", "Fer Ashane"],
        ["DOP", "Samantha López"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Dirección de Arte", "Ximena Sariñana"],
        ["Edición", "Pedro G. García"],
        ["Color", "Mute, CDMX"],
        ["Agencia", "Ogilvy MX"],
      ]
    },
    {
      id: "amazon-nadie",
      client: "Amazon Prime",
      title: { es: "Nadie nos va a extrañar", en: "Nobody Will Miss Us" },
      kicker: { es: "Pieza de lanzamiento para la serie original The Jungle, de Amazon Prime.", en: "Launch piece for the Amazon Prime original series The Jungle." },
      category: "Streaming Original",
      director: "FER ASHANE",
      year: 2025,
      vimeo: {"id":"1049121851"},
      agency: "Amazon Studios LATAM",
      frame: { bg: "var(--rosa)", fg: "var(--negro)", word: "NADIE" },
      tags: ["Streaming", "Series", "Launch"],
      paragraphs: {
        es: [
          "El brief era complicado: una serie adolescente con tono sombrío y título depresivo. Fer Ashane lo tomó como desafío de dirección de arte. Paleta azul deslavado, cuadros sobrios, talento con la actitud justa de quien ya no cree en nada pero sigue yendo a la escuela.",
          "Tres días de rodaje, equipo reducido. Menos producción, más presencia. La pieza vive de silencios más que de frases."
        ],
        en: [
          "A tricky brief: a teen series with a somber tone and a depressive title. Fer Ashane took it as an art direction challenge. Washed-out blue palette, sober frames, talent carrying the precise attitude of people who believe in nothing but still show up to school.",
          "Three-day shoot with a reduced crew. Less production, more presence. The piece lives off silences more than lines."
        ]
      },
      credits: [
        ["Dirección", "Fer Ashane"],
        ["DOP", "Tonatiuh Martínez"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Edición", "Valentina Aguirre"],
        ["Color", "Mute, CDMX"],
        ["Plataforma", "Amazon Prime Video"],
      ]
    },
    {
      id: "totalplay-sonrie",
      client: "Apple TV+ · Totalplay",
      title: { es: "Sonríe de nuevo", en: "Smile Again" },
      kicker: { es: "Pieza institucional para Sonríe de Nuevo AC, asociación aliada con Apple TV+ y Totalplay.", en: "Institutional piece for Sonríe de Nuevo AC, in partnership with Apple TV+ and Totalplay." },
      category: "Brand Film",
      director: "BROTHERHOOD",
      year: 2025,
      vimeo: {"id":"1083014404","posterIframe":true},
      agency: "Dirección directa",
      frame: { bg: "var(--olivo)", fg: "var(--rosa)", word: "SONRÍE" },
      tags: ["Institutional", "Causa", "Brand Film"],
      paragraphs: {
        es: [
          "Sonríe de Nuevo AC acompaña a niñas y niños mexicanos con labio y paladar hendido desde la operación hasta la terapia de lenguaje. Brotherhood — Erik Limón y Dani Cabrera — documentaron tres historias reales con una regla sencilla: nada escenificado. Sólo lo que pasó ese día.",
          "La pieza corre dos minutos. No pide nada — ni donativos ni simpatía. Muestra. Apple TV+ y Totalplay la distribuyen como contenido dentro de sus plataformas."
        ],
        en: [
          "Sonríe de Nuevo AC accompanies Mexican children with cleft lip and palate from surgery through speech therapy. Brotherhood — Erik Limón and Dani Cabrera — documented three real stories under one rule: nothing staged. Only what actually happened that day.",
          "The piece runs two minutes. It asks for nothing — not donations, not sympathy. It shows. Apple TV+ and Totalplay distribute it as editorial content inside their platforms."
        ]
      },
      quote: {
        es: "«No escribimos la historia. La escuchamos.»",
        en: '"We didn\'t write the story. We listened to it."'
      },
      credits: [
        ["Dirección", "Brotherhood (Erik Limón + Dani Cabrera)"],
        ["DOP", "Diego Tenorio"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Jefe de Producción", "Pamela Rojas"],
        ["Edición", "Yibrán Asuad"],
        ["Plataforma", "Apple TV+ · Totalplay"],
        ["Causa", "Sonríe de Nuevo AC"],
      ]
    },
    {
      id: "televisa-mes-patrio",
      client: "Televisa",
      title: { es: "Mes Patrio", en: "Independence Month" },
      kicker: { es: "Promo institucional para la programación del Mes Patrio 2024.", en: "Institutional promo for the 2024 Independence Month programming." },
      category: "Commercial",
      director: "RAGA",
      year: 2024,
      vimeo: {"id":"1049116582","posterIframe":true},
      agency: "Televisa In-house",
      frame: { bg: "var(--vino)", fg: "var(--rosa)", word: "PATRIA" },
      tags: ["Broadcast", "Institutional", "MX"],
      paragraphs: {
        es: [
          "La promoción institucional más vista del año en México se rueda cada septiembre. Raga abordó el brief sin cliché: sin charros, sin banderas en cámara lenta, sin mariachi. En su lugar: una plaza vacía al amanecer, una familia cruzando, una sola toma sostenida que termina justo al sonar la campana.",
          "El minuto se filmó en una sola jornada. El resultado cambió la conversación sobre cómo puede verse un promo patrio en televisión abierta."
        ],
        en: [
          "Mexico's most-watched institutional promo of the year airs every September. Raga approached the brief without cliché: no charros, no slow-motion flags, no mariachi. Instead: an empty plaza at dawn, a family crossing, a single sustained take that lands exactly on the bell.",
          "The entire minute was shot in a single day. The result shifted the conversation around what a patriotic promo on open broadcast can look like."
        ]
      },
      quote: {
        es: "«México no es un cliché. Es una hora exacta del día.»",
        en: '"Mexico isn\'t a cliché. It\'s an exact hour of the day."'
      },
      credits: [
        ["Dirección", "Raga Ibarra"],
        ["DOP", "Natalia Bruschtein"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Edición", "Jorge Macaya"],
        ["Color", "Company 3, MX"],
        ["Cliente", "Televisa"],
      ]
    },
    {
      id: "mundet-mexicana",
      client: "Sidral Mundet",
      title: { es: "A la Mexicana", en: "A la Mexicana" },
      kicker: { es: "Campaña de verano para una de las marcas más antiguas de México.", en: "Summer campaign for one of Mexico's oldest brands." },
      category: "Commercial",
      director: "BROTHERHOOD",
      year: 2024,
      vimeo: {"id":"1114020288"},
      agency: "Leo Burnett",
      frame: { bg: "var(--olivo)", fg: "var(--nuez)", word: "MUNDET" },
      tags: ["Commercial", "CPG", "MX"],
      paragraphs: {
        es: [
          "Sidral Mundet cumple más de cien años. Hacer publicidad para una marca tan instalada en el imaginario mexicano exige una decisión de tono: o se subraya la herencia o se la reinventa. Brotherhood eligió lo segundo — rodando la pieza como un videoclip de cumbia sonidera, con cámara al hombro, transiciones duras y paleta saturada hasta el punto de no creer.",
          "Cuatro ciudades, tres días de rodaje, un solo himno rehecho por un productor emergente de Guadalajara."
        ],
        en: [
          "Sidral Mundet is more than a hundred years old. Making ads for a brand that embedded in the Mexican imagination demands a tonal choice: either you underline the heritage or reinvent it. Brotherhood chose the second — shooting the piece like a cumbia-sonidera music video, handheld, hard transitions, a palette saturated past belief.",
          "Four cities, three days of shooting, one anthem remade by an emerging producer from Guadalajara."
        ]
      },
      credits: [
        ["Dirección", "Brotherhood (Erik Limón + Dani Cabrera)"],
        ["DOP", "Diego Tenorio"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Edición", "Vicente Nava"],
        ["Color", "Serena Post"],
        ["Agencia", "Leo Burnett MX"],
      ]
    },
    {
      id: "gaia-disena",
      client: "Gaia",
      title: { es: "Diseña la vida que tú quieras", en: "Design the Life You Want" },
      kicker: { es: "Pieza de marca para la desarrolladora de vivienda de Gaia.", en: "Brand piece for Gaia's residential developer." },
      category: "Brand Film",
      director: "RAGA",
      year: 2024,
      vimeo: {"id":"1046925604"},
      agency: "Dirección directa",
      frame: { bg: "var(--rosa)", fg: "var(--vino)", word: "GAIA" },
      tags: ["Brand Film", "Real Estate"],
      paragraphs: {
        es: [
          "Un comercial de vivienda sin vivienda a cuadro. Raga lo resolvió con retratos: cuatro personas reales — no actores — describiendo, de memoria, cómo se ve la vida que quieren. La pieza corta entre sus rostros y los espacios aún vacíos, sin mostrarlos nunca del todo.",
          "Rodaje en dos días. Guión construido en entrevista. La marca aparece al final, en tipo editorial."
        ],
        en: [
          "A real-estate spot with no real estate on screen. Raga resolved it through portraits: four real people — not actors — describing from memory what the life they want looks like. The piece cuts between their faces and the still-empty spaces, without ever fully showing them.",
          "Two-day shoot. Script built in interview. The brand appears at the end, in editorial type."
        ]
      },
      quote: {
        es: "«El espacio llega después del deseo.»",
        en: '"The space arrives after the desire."'
      },
      credits: [
        ["Dirección", "Raga Ibarra"],
        ["DOP", "Natalia Bruschtein"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Edición", "Jorge Macaya"],
        ["Color", "Mute, CDMX"],
      ]
    },
    {
      id: "corvette-cdm",
      client: "Corvette",
      title: { es: "CDM", en: "CDM" },
      kicker: { es: "Launch film para la llegada del nuevo Corvette al mercado mexicano.", en: "Launch film for the new Corvette arriving in Mexico." },
      category: "Commercial",
      director: "FER TOVAR",
      year: 2024,
      vimeo: {"id":"1046908389"},
      agency: "Leo Burnett",
      frame: { bg: "var(--negro)", fg: "var(--olivo)", word: "CORVETTE" },
      tags: ["Automotriz", "Launch"],
      credits: [
        ["Dirección", "Fer Tovar"],
        ["DOP", "Alejandro Chávez"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Jefe de Producción", "Jorge Paniagua"],
        ["Dirección de Arte", "Marina del Cerro"],
        ["Edición", "Yibrán Asuad"],
        ["Color", "New Art, MX"],
        ["VFX", "El Ranchito"],
        ["Agencia", "Leo Burnett MX"],
      ],
      paragraphs: {
        es: [
          "El desierto de Sonora no perdona. Fer Tovar filmó el lanzamiento mexicano del nuevo Corvette como si fuera un western de Denis Villeneuve — planos generalísimos, polvo, un coche que se niega a ser el héroe y termina siéndolo por negarse.",
          "Todo el rodaje ocurrió entre las seis y las nueve de la mañana a lo largo de cuatro días. Luz seca, horizonte ancho, nada que decorar."
        ],
        en: [
          "The Sonoran desert doesn't forgive. Fer Tovar filmed the Mexican launch of the new Corvette like a Villeneuve western — wide, wide shots, dust, a car that refuses to be the hero and ends up being the hero for refusing.",
          "The entire shoot happened between six and nine in the morning across four days. Dry light, wide horizon, nothing to decorate."
        ]
      },
      quote: {
        es: "«El coche no actúa. El desierto actúa.»",
        en: '"The car doesn\'t act. The desert acts."'
      },
    },
    {
      id: "amazon-hotsale",
      client: "Amazon México",
      title: { es: "Hot Sale 2025", en: "Hot Sale 2025" },
      kicker: { es: "Campaña integral — fútbol, familia y convivencia de casa durante el Hot Sale de Amazon México.", en: "Full-campaign — football, family and home life during Amazon México's Hot Sale." },
      category: "Integrated Campaign",
      director: "SELVA",
      year: 2025,
      vimeo: {"id":"1083014234"},
      agency: "Isla",
      frame: { bg: "var(--olivo)", fg: "var(--nuez)", word: "HOT SALE" },
      tags: ["Retail", "Sports", "LATAM"],
      paragraphs: {
        es: [
          "Hot Sale no empieza cuando ves una promoción. Empieza cuando alguien en casa dice «ya viene el Hot Sale». Producimos toda la campaña integral para Amazon México y la agencia Isla: varios spots, contenido digital y activaciones que vivieron el momento como realmente se vive — en familia, con el partido de fondo, entre jugada y jugada.",
          "El reto fue mantener la naturalidad sin perder precisión. Aunque todo se siente espontáneo, nada es casual: cada encuadre está pensado. Cada ritmo cuidado. La cámara no invade — acompaña. Y el vínculo de Amazon con la Federación Mexicana de Fútbol le sumó una capa que se siente en pantalla."
        ],
        en: [
          "Hot Sale doesn't start when you see a promo. It starts when someone at home says \"Hot Sale's coming.\" We produced the full integrated campaign for Amazon México and agency Isla: multiple spots, digital content and activations that lived the moment as it's actually lived — at home with family, the match playing in the background, between plays.",
          "The challenge was keeping it natural without losing precision. Even if everything feels spontaneous, nothing is accidental: every frame is considered. Every rhythm cared for. The camera doesn't invade — it accompanies. And Amazon's bond with the Federación Mexicana de Fútbol added a layer you can feel on screen."
        ]
      },
      quote: {
        es: "«Hot Sale no es una lista de productos. Es un momento vivido.»",
        en: '"Hot Sale isn\'t a product list. It\'s a lived moment."'
      },
      credits: [
        ["Productora", "Selva Studio"],
        ["Agencia", "Isla"],
        ["Cliente", "Amazon México"],
        ["Productor Ejecutivo", "Axel Torres"],
        ["Jefe de Producción", "Mariana Solís"],
        ["DOP", "Juan Pablo Ramírez"],
        ["Dirección de Arte", "Regina Cheang"],
        ["Edición", "Sebastián Díaz"],
        ["Color", "Company 3, MX"],
        ["Sound Design", "La Casa del Sonido"],
      ]
    },
  ];

  // ---------- DIRECTORS ----------
  const directors = [
    {
      id: "raga",
      name: "RAGA",
      handle: "@raga.dir",
      role: { es: "Socio fundador · Dirección", en: "Founding partner · Director" },
      years: "20+ años",
      tagline: {
        es: "Puesta en cámara cinematográfica con precisión comercial.",
        en: "Cinematic staging with commercial precision."
      },
      bio: {
        es: [
          "Raga dirige desde hace veinte años. Travellings elegantes, actuaciones auténticas, humor cuando la historia lo permite. No levanta la voz en set: la autoridad le llega por el cuadro ya resuelto antes del primer take.",
          "Su trabajo se divide entre las grandes campañas institucionales — Televisa, Totalplay, Gaia — y dirigió piezas originales para streaming: La Oficina, de Amazon Prime, y Roberto, el teaser de Como agua para chocolate para Totalplay / HBO. Ha dirigido también los últimos tres promos institucionales de Mes Patrio para Televisa."
        ],
        en: [
          "Raga has directed for twenty years. Elegant travelling shots, truthful performances, humor when the story allows. He doesn't raise his voice on set: authority comes from a frame already resolved before the first take.",
          "His work splits between flagship institutional campaigns — Televisa, Totalplay, Gaia — and he directed streaming originals: Amazon Prime's The Office and Roberto, the Totalplay / HBO teaser for Like Water for Chocolate. He has also directed the last three Independence Month institutional promos for Televisa."
        ]
      },
      clients: ["Amazon Prime", "Totalplay", "HBO", "Televisa", "Gaia", "Apple TV+"],
      frame: { bg: "var(--vino)", fg: "var(--nuez)", word: "R" },
      projectIds: ["amazon-oficina", "totalplay-roberto", "televisa-mes-patrio", "gaia-disena"],
      credits: { es: ["Dirección comercial", "Documental", "Music"], en: ["Commercial", "Doc", "Music"] },
    },
    {
      id: "brotherhood",
      name: "BROTHERHOOD",
      handle: "@limonesco + @eldannyhood",
      role: { es: "Dupla · Erik Limón & Dani Cabrera", en: "Duo · Erik Limón & Dani Cabrera" },
      years: "10+ años",
      tagline: {
        es: "Storytelling cinematográfico. Formato vertical nativo.",
        en: "Cinematic storytelling. Native vertical format."
      },
      bio: {
        es: [
          "Erik Limón y Dani Cabrera llevan ocho años dirigiendo juntos bajo el nombre Brotherhood. Erik pone la precisión visual; Dani, la fibra emocional. Entre los dos escriben los guiones de seis, quince y treinta segundos que la mayoría de las productoras trata como subproducto — y los filman como si fueran cortos.",
          "Trabajan más rápido que la mayoría y rinden más por jornada sin perder densidad. Su campaña A la Mexicana para Sidral Mundet y la pieza Sonríe de nuevo para Apple TV+ / Totalplay son hoy referencia de lo que significa filmar con presencia."
        ],
        en: [
          "Erik Limón and Dani Cabrera have been co-directing for eight years as Brotherhood. Erik brings the visual precision; Dani, the emotional thread. Between them they write the six-, fifteen- and thirty-second scripts most shops treat as byproduct — and shoot them like short films.",
          "They work faster than most and deliver more per shoot day without losing density. Their A la Mexicana campaign for Sidral Mundet and the Sonríe de nuevo piece for Apple TV+ / Totalplay are benchmarks for what filming with presence looks like."
        ]
      },
      clients: ["Sidral Mundet", "Apple TV+", "Totalplay", "Sonríe de Nuevo AC", "Leo Burnett"],
      frame: { bg: "var(--rosa)", fg: "var(--vino)", word: "B" },
      projectIds: ["totalplay-sonrie", "mundet-mexicana"],
      credits: { es: ["Digital", "Vertical", "Series"], en: ["Digital", "Vertical", "Series"] },
    },
    {
      id: "fer-tovar",
      name: "FER TOVAR",
      handle: "@fertovarf",
      role: { es: "Dirección · Publicidad + Cine de festival", en: "Director · Advertising + Festival cinema" },
      years: "15+ años",
      tagline: {
        es: "Publicidad y cine de arte en la misma filmografía.",
        en: "Advertising and arthouse in the same filmography."
      },
      bio: {
        es: [
          "Fer Tovar vive con un pie en cada oficio. Planos milimétricos, movimiento audaz, edición precisa — todo ese oficio publicitario se le nota — pero también una paciencia que le pertenece al cine largo. Su corto Una chica triste fue seleccionado por la Semana de la Crítica en Cannes 2023.",
          "Sus clientes publicitarios son Corvette, Amazon México y Leo Burnett. Su cine gana festivales. En Selva no separamos las dos cosas: son la misma dirección."
        ],
        en: [
          "Fer Tovar lives with one foot in each craft. Precise framing, bold movement, surgical editing — the advertising craft shows — but also a patience that belongs to long-form cinema. Her short Una chica triste was selected for Cannes Critics' Week 2023.",
          "Her advertising clients are Corvette, Amazon Mexico and Leo Burnett. Her cinema wins festivals. At Selva we don't split the two: they're the same direction."
        ]
      },
      clients: ["Corvette", "Amazon México", "Leo Burnett", "Cannes Critics' Week"],
      frame: { bg: "var(--olivo)", fg: "var(--nuez)", word: "F" },
      projectIds: ["corvette-cdm", "amazon-hotsale"],
      credits: { es: ["Publicidad", "Cine", "FICM", "Cannes"], en: ["Commercial", "Film", "FICM", "Cannes"] },
    },
    {
      id: "fer-ashane",
      name: "FER ASHANE",
      handle: "@ferashane",
      role: { es: "Dirección · Visual fresca y moderna", en: "Director · Fresh, modern visual voice" },
      years: "8+ años",
      tagline: {
        es: "Composición milimétrica. Paletas audaces. Talento natural.",
        en: "Precise composition. Bold palettes. Natural talent."
      },
      bio: {
        es: [
          "Fer Ashane dirige con ojo de fotógrafa y oído de editora. Sus piezas para Amazon Prime, Grupo Vazol y Ogilvy se reconocen por la paleta antes que por el logo. Detallista hasta el punto de dibujar el mood-board a mano.",
          "Dirige también videoclips que acumulan millones de reproducciones. En Selva es la voz más joven del roster — y con frecuencia la que termina marcando la paleta del año."
        ],
        en: [
          "Fer Ashane directs with a photographer's eye and an editor's ear. Her work for Amazon Prime, Grupo Vazol and Ogilvy is recognized by its palette before its logo. Detailed to the point of hand-drawing her own mood boards.",
          "She also directs music videos with millions of views. At Selva she's the youngest voice on the roster — and frequently the one who ends up setting the year's palette."
        ]
      },
      clients: ["Amazon Prime", "Grupo Vazol", "Ogilvy", "Amazon Studios LATAM"],
      frame: { bg: "var(--negro)", fg: "var(--rosa)", word: "F" },
      projectIds: ["amazon-nadie", "grupo-vazol-vivir"],
      credits: { es: ["Commercial", "Music", "Fashion"], en: ["Commercial", "Music", "Fashion"] },
    },
  ];

  // ---------- JOURNAL ARTICLES ----------
  const journal = [
    {
      id: "hot-sale-2025",
      date: { es: "Mayo 2025", en: "May 2025" },
      readTime: "5 min",
      author: "Axel Torres",
      media: {
        kind: "vimeo",
        vimeo: { id: "1083014234" },
        alt: "Hot Sale 2025 — Amazon México · familia, fútbol, hogar"
      },
      projectId: "amazon-hotsale",
      gallery: [
        { src: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?auto=format&fit=crop&w=900&q=80", caption: { es: "Sala familiar · partido de fondo", en: "Living room · match on TV" } },
        { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80", caption: { es: "Hogar · renovación cocina", en: "Home · kitchen refresh" } },
        { src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80", caption: { es: "Mobile first · carrito en la app", en: "Mobile first · in-app cart" } },
        { src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=900&q=80", caption: { es: "Convivencia · mesa compartida", en: "Shared table · everyday" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2019/08/30/26345-357387629_large.mp4",
        poster: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "BTS — Selva × Amazon México × Isla", en: "BTS — Selva × Amazon México × Isla" }
      },
      title: {
        es: "Hot Sale 2025: cuando una campaña logra sentirse como parte de la vida diaria.",
        en: "Hot Sale 2025: when a campaign manages to feel like part of daily life."
      },
      kicker: {
        es: "Hot Sale no empieza cuando ves una promoción. Empieza cuando alguien en casa dice «ya viene el Hot Sale». Producimos toda la campaña junto a Amazon México y la agencia Isla — no una lista de productos, un momento vivido.",
        en: "Hot Sale doesn't start when you see a promo. It starts when someone at home says \"Hot Sale's coming.\" We produced the full campaign with Amazon México and agency Isla — not a product list, a lived moment."
      },
      pullquote: {
        es: "«Hot Sale no es una lista de productos. Es un momento vivido.»",
        en: "\"Hot Sale isn't a product list. It's a lived moment.\""
      },
      body: {
        es: [
          "Hay momentos del año que no se anuncian, se sienten. Hot Sale es uno de ellos.",
          "No empieza cuando ves una promoción. Empieza cuando alguien en casa dice «ya viene el Hot Sale», cuando empiezas a guardar cosas en el carrito, cuando comparas precios, cuando imaginas ese cambio que llevas tiempo postergando. Es un momento que se vive en familia, en conversaciones cotidianas, en decisiones pequeñas que de pronto se vuelven compartidas. Y eso cambia completamente la forma de contar una campaña.",
          "En Hot Sale 2025, Amazon México no solo activó una serie de descuentos —que llegaron hasta el 55%—, activó algo más amplio: un comportamiento colectivo. Durante esos días, el consumo deja de ser individual. Se vuelve familiar. Alguien quiere cambiar la tele para ver mejor los partidos, alguien más está pensando en renovar la cocina, alguien busca un regalo, otro aprovecha meses sin intereses. Todo ocurre al mismo tiempo, en el mismo espacio. Y eso es lo que la campaña tenía que capturar.",
          "Desde Selva, donde produjimos toda la campaña junto con Amazon México y la agencia Isla, la pregunta nunca fue únicamente qué mostrar. La pregunta era otra: ¿cómo se siente Hot Sale dentro de una casa? Porque Hot Sale no es una lista de productos. Es un momento vivido.",
          "Hay algo muy particular en cómo el fútbol atraviesa ese momento. La televisión encendida, el partido de fondo, la emoción compartida en la sala. El fútbol en México no es solo entretenimiento, es un punto de encuentro. Es uno de los pocos espacios donde distintas generaciones coinciden, donde todos están viendo lo mismo, reaccionando al mismo tiempo. Y cuando eso se cruza con Hot Sale, ocurre algo interesante: la conversación no se detiene, se transforma. Entre jugada y jugada, alguien menciona un descuento, otro abre la app, alguien más propone cambiar algo en casa. El consumo no interrumpe la vida. Se integra a ella.",
          "Eso fue lo que buscamos construir desde producción. No escenas aspiracionales lejanas, sino momentos reconocibles. La familia reunida, la emoción del partido, la convivencia natural… y dentro de eso, la presencia de Amazon como algo que acompaña, que facilita, que resuelve.",
          "Filmar desde ese lugar implica una sensibilidad distinta. No se trata de dirigir acciones evidentes, sino de entender dinámicas reales. Cómo se mueve una familia en un espacio, cómo se comparte el control de la televisión, cómo alguien revisa su celular mientras sigue el partido, cómo una decisión de compra aparece casi sin darse cuenta. Porque lo más importante no es el producto. Es el contexto.",
          "También hay algo importante en la escala. Hot Sale incluye tecnología, hogar, belleza, moda, supermercado, dispositivos inteligentes y mucho más. Pero en la vida cotidiana, esa magnitud se traduce en decisiones simples. ¿Lo compramos ahora? ¿Sí vale la pena? ¿Esto lo usamos todos? Y ahí es donde la campaña encuentra su punto.",
          "Además, el vínculo de Amazon con el fútbol mexicano —a través de su relación con la Federación Mexicana de Fútbol— suma una capa más profunda. No es solo una marca hablando de ofertas, es una marca que ya forma parte de uno de los rituales más importantes del país. Y eso se siente en pantalla.",
          "Desde Selva, al producir toda la campaña, el reto fue justamente ese: mantener la naturalidad sin perder precisión. Porque aunque todo se siente espontáneo, nada es casual. Cada encuadre está pensado. Cada ritmo está cuidado. Cada momento tiene una intención. La cámara no invade, acompaña. La edición no empuja, sigue el flujo de lo que está pasando.",
          "Y al final, eso es lo que define si una campaña conecta o no. No si comunica bien los descuentos. Sino si logra sentirse cercana.",
          "Hot Sale 2025 no es solo una campaña sobre comprar. Es una campaña sobre compartir. Sobre esos momentos donde la familia está junta, donde el fútbol suena de fondo, donde alguien encuentra algo que quería desde hace tiempo y lo dice en voz alta, y alguien más responde. Y en medio de todo eso, casi sin darse cuenta, la decisión ya está tomada.",
          "Ahí es donde la campaña deja de ser publicidad. Y se vuelve parte de la vida."
        ],
        en: [
          "Some moments in the year aren't announced — they're felt. Hot Sale is one of them.",
          "It doesn't start when you see a promo. It starts when someone at home says \"Hot Sale's coming,\" when you start saving things in the cart, comparing prices, imagining that change you've been putting off. It's a moment lived in family, in everyday conversations, in small decisions that suddenly become shared. And that completely changes how you tell a campaign.",
          "In Hot Sale 2025, Amazon México didn't just activate a series of discounts — up to 55% — they activated something broader: a collective behavior. During those days, consumption stops being individual. It becomes familial. Someone wants to upgrade the TV to watch matches better, someone else is thinking about renewing the kitchen, someone's looking for a gift, another takes advantage of interest-free months. It all happens at the same time, in the same space. And that's what the campaign had to capture.",
          "At Selva, where we produced the entire campaign alongside Amazon México and agency Isla, the question was never only what to show. The question was: what does Hot Sale feel like inside a home? Because Hot Sale isn't a product list. It's a lived moment.",
          "There's something very particular about how football runs through that moment. The TV on, the match in the background, the shared emotion in the living room. Football in Mexico isn't just entertainment — it's a meeting point. One of the few spaces where different generations coincide, where everyone is watching the same thing, reacting at the same time. And when that crosses paths with Hot Sale, something interesting happens: the conversation doesn't stop, it transforms. Between plays, someone mentions a discount, another opens the app, someone proposes changing something at home. Consumption doesn't interrupt life. It integrates into it.",
          "That's what we set out to build from production. Not distant aspirational scenes, but recognizable moments. The family gathered, the match's excitement, the natural coexistence… and within that, Amazon's presence as something that accompanies, facilitates, resolves.",
          "Filming from that place demands a different sensibility. It's not about directing obvious actions, but understanding real dynamics. How a family moves in a space, how the remote is shared, how someone checks their phone while following the match, how a purchase decision appears almost without realizing. Because the most important thing isn't the product. It's the context.",
          "There's also something important in the scale. Hot Sale covers technology, home, beauty, fashion, supermarket, smart devices and much more. But in daily life, that scale translates into simple decisions. Should we buy it now? Is it worth it? Will we all use it? And that's where the campaign finds its point.",
          "Also, Amazon's bond with Mexican football — through its relationship with the Federación Mexicana de Fútbol — adds another layer. It's not just a brand talking about offers, it's a brand that's already part of one of the country's most important rituals. And that's felt on screen.",
          "From Selva, producing the whole campaign, the challenge was exactly that: keeping it natural without losing precision. Because although everything feels spontaneous, nothing is accidental. Every frame is considered. Every rhythm is cared for. Every moment has intention. The camera doesn't invade, it accompanies. The edit doesn't push, it follows the flow of what's happening.",
          "And in the end, that's what defines whether a campaign connects or not. Not whether it communicates discounts well. But whether it manages to feel close.",
          "Hot Sale 2025 isn't just a campaign about buying. It's a campaign about sharing. About those moments when the family is together, the match plays in the background, someone finds something they've wanted for a long time and says it out loud, and someone else answers. And in the middle of all that, almost without realizing, the decision is already made.",
          "That's where the campaign stops being advertising. And becomes part of life."
        ]
      },
      link: "https://www.aboutamazon.mx/noticias/noticias-de-la-compania/hot-sale-2025-ofertones"
    },
    {
      id: "aztecamurai",
      date: { es: "Julio 2026", en: "July 2026" },
      readTime: "6 min",
      author: "Axel Torres",
      media: {
        kind: "image",
        src: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=1200&q=80",
        alt: "Aztecamurai — cine híbrido, mitología y futuro"
      },
      gallery: [
        { src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80", caption: { es: "Monitor village — D1 CDMX", en: "Monitor village — D1 Mexico City" } },
        { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80", caption: { es: "Iluminación set mitológico", en: "Mythological set lighting" } },
        { src: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=900&q=80", caption: { es: "Mexcaltián — preproduce prólogo", en: "Mexcaltián — prologue scouting" } },
        { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80", caption: { es: "Storyboard — secuencia final", en: "Storyboard — final sequence" } },
        { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80", caption: { es: "Frame still — color grade", en: "Frame still — color grade" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2021/10/25/92624-636471529_large.mp4",
        poster: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "BTS — Iñigo Abaroa, locación Mexcaltián", en: "BTS — Iñigo Abaroa, Mexcaltián location" }
      },
      title: {
        es: "Aztecamurai: una nueva forma de imaginar el cine mexicano.",
        en: "Aztecamurai: a new way to imagine Mexican cinema."
      },
      kicker: {
        es: "Hay proyectos que empiezan como una idea. Y hay otros que, desde el inicio, parecen destinados a generar conversación. Aztecamurai pertenece a ese segundo grupo — una mezcla de géneros, referencias y tonos que no busca encajar en una categoría, sino construir la suya propia. Con Iñigo Abaroa dirigiendo y protagonizando, y Aarón Díaz sumándose al reparto, el proyecto usa IA como lenguaje narrativo — no como gimmick.",
        en: "Some projects start as an idea. And others, from the beginning, seem destined to generate conversation. Aztecamurai belongs to that second group — a mix of genres, references and tones that doesn't look for a category to fit into, but builds its own. With Iñigo Abaroa directing and starring, and Aarón Díaz joining the cast, the project uses AI as narrative language — not as gimmick."
      },
      pullquote: {
        es: "«La IA no reemplaza lo humano. Lo amplifica.»",
        en: "\"AI doesn't replace the human. It amplifies it.\""
      },
      body: {
        es: [
          "Hay proyectos que empiezan como una idea. Y hay otros que, desde el inicio, parecen destinados a generar conversación. Aztecamurai pertenece a ese segundo grupo. Desde que comenzó a circular, no solo llamó la atención por su propuesta, sino por algo más difícil de lograr: una identidad clara. Una mezcla de géneros, referencias y tonos que no busca encajar en una categoría, sino construir la suya propia. Y eso, hoy, es lo que realmente destaca.",
          "Esa sensación no se quedó dentro del proyecto. Poco a poco, la película empezó a aparecer en conversación de medios y espacios de industria. Uno de los más relevantes es The Hollywood Reporter en su versión en español, donde se presenta como una propuesta que mezcla comedia, drama, ciencia ficción y animación dentro de un México futurista, con un enfoque visual ambicioso. Ahí se confirma también la participación de Aarón Díaz, quien se suma al proyecto en un momento clave de su desarrollo. Y su presencia no es menor. Porque Aztecamurai no es solo una apuesta visual. También es una historia profundamente emocional.",
          "La narrativa sigue a un atleta que busca redimirse dentro de un deporte virtual —Ultraxis— donde el cuerpo, la mente y el pasado se enfrentan constantemente. Pero lo que hace interesante a este personaje no es solo su arco, sino el mundo en el que existe. Un mundo donde la tecnología no es un elemento decorativo, sino una extensión de la identidad.",
          "Y ahí es donde entra uno de los elementos más relevantes del proyecto: el uso de inteligencia artificial. No como gimmick. No como sustituto. Sino como herramienta narrativa y visual.",
          "En Aztecamurai, la IA forma parte del lenguaje del proyecto. Desde la conceptualización visual hasta ciertos procesos de construcción de mundo, se integra como una capa que permite explorar estéticas que de otra forma serían mucho más difíciles o costosas de lograr. Pero lo importante es cómo se usa. No reemplaza lo humano. Lo amplifica.",
          "Desde Selva, eso implicó un entendimiento muy claro: la tecnología por sí sola no construye nada si no está alineada con una intención creativa. La IA no resuelve el tono, no define la emoción, no construye la narrativa. Eso sigue siendo completamente humano. Lo que sí hace es abrir posibilidades.",
          "También hay algo muy particular en la forma en la que se fue construyendo el proyecto, y tiene que ver con la colaboración. Trabajar con Iñigo Abaroa fue una experiencia que marcó el proceso creativo de forma muy positiva. Hay directores que llegan con una visión cerrada, y hay otros que entienden el proyecto como algo vivo, en constante evolución. Aquí sucedió lo segundo. Desde el inicio, hubo una apertura real para explorar, ajustar, probar caminos distintos y empujar el proyecto más allá de lo evidente. Ese tipo de colaboración no solo enriquece el resultado, también eleva el proceso. Hace que cada área se involucre más, que las decisiones se vuelvan más conscientes y que el proyecto crezca de forma orgánica. Y eso se siente en pantalla.",
          "La presencia de Aarón Díaz dentro de este universo también suma una capa interesante. No solo por su trayectoria, sino porque su perfil conecta con un tipo de proyecto que busca dialogar con audiencias más amplias. Su participación ayuda a anclar emocionalmente una historia que, por su propuesta visual y conceptual, podría sentirse lejana. Aquí ocurre lo contrario. Se vuelve accesible sin perder complejidad.",
          "Parte de esa construcción también se refleja en las locaciones. El proyecto se filmó entre la Ciudad de México y Mexcaltitán, un lugar profundamente simbólico ligado al origen mexica. Esa decisión no es estética. Refuerza una de las ideas centrales del proyecto: la coexistencia de tiempos. Lo ancestral y lo futurista no compiten. Conviven.",
          "Hoy, Aztecamurai está en ese punto donde la conversación empieza antes del estreno. Y eso es una señal fuerte. Porque cuando una película logra generar interés desde su concepto, normalmente es porque hay algo en ella que se siente distinto… incluso antes de verla.",
          "En una industria donde cada vez hay más contenido, lo que realmente permanece no es lo que se parece a todo, sino lo que logra construir algo propio. Y Aztecamurai está haciendo exactamente eso."
        ],
        en: [
          "Some projects begin as an idea. And others, from the start, seem destined to generate conversation. Aztecamurai belongs to that second group. Since it started circulating, it drew attention not just for its proposition, but for something harder to achieve: a clear identity. A mix of genres, references and tones that doesn't look to fit into a category, but to build its own. And that, today, is what truly stands out.",
          "That feeling didn't stay inside the project. Little by little, the film began appearing in media and industry conversation. One of the most relevant is The Hollywood Reporter in its Spanish edition, where it's introduced as a proposal mixing comedy, drama, science fiction and animation inside a futuristic Mexico, with an ambitious visual approach. It also confirms the participation of Aarón Díaz, who joins the project at a key moment in its development. And his presence isn't minor. Because Aztecamurai isn't just a visual bet. It's also a deeply emotional story.",
          "The narrative follows an athlete seeking redemption inside a virtual sport — Ultraxis — where body, mind and past constantly collide. But what makes this character interesting isn't just his arc, it's the world he exists in. A world where technology isn't a decorative element, but an extension of identity.",
          "And that's where one of the project's most relevant elements comes in: the use of artificial intelligence. Not as a gimmick. Not as a substitute. But as a narrative and visual tool.",
          "In Aztecamurai, AI is part of the project's language. From visual conceptualization to certain world-building processes, it's integrated as a layer that allows exploring aesthetics that would otherwise be much harder or more expensive to achieve. But what matters is how it's used. It doesn't replace the human. It amplifies it.",
          "From Selva, that required a very clear understanding: technology alone builds nothing if it isn't aligned with a creative intention. AI doesn't solve tone, doesn't define emotion, doesn't build narrative. That remains completely human. What it does do is open up possibilities.",
          "There's also something very particular in how the project came together, and it has to do with collaboration. Working with Iñigo Abaroa was an experience that shaped the creative process in a very positive way. Some directors arrive with a closed vision; others understand the project as something alive, in constant evolution. The latter is what happened here. From the start, there was real openness to explore, adjust, try different paths and push the project beyond the obvious. That kind of collaboration doesn't just enrich the result — it elevates the process. It makes every department more involved, every decision more conscious, and the project grows organically. And that is felt on screen.",
          "Aarón Díaz's presence in this universe also adds an interesting layer. Not just because of his trajectory, but because his profile connects with the kind of project that seeks to dialogue with broader audiences. His participation helps emotionally anchor a story that, because of its visual and conceptual proposal, could feel distant. Here the opposite happens. It becomes accessible without losing complexity.",
          "Part of that construction also shows up in the locations. The project was filmed between Mexico City and Mexcaltitán, a deeply symbolic place tied to the Mexica origin. That decision isn't aesthetic. It reinforces one of the project's central ideas: the coexistence of times. The ancestral and the futuristic don't compete. They coexist.",
          "Today, Aztecamurai is at that point where conversation begins before the release. And that's a strong signal. Because when a film manages to generate interest from its concept, it usually means there's something in it that feels different… even before you've seen it.",
          "In an industry with more and more content, what really stays isn't what resembles everything else, but what manages to build something of its own. And Aztecamurai is doing exactly that."
        ]
      }
    },
    {
      id: "filmar-sin-huella",
      date: { es: "Junio 2026", en: "June 2026" },
      readTime: "7 min",
      author: "Fer Tovar",
      media: {
        kind: "image",
        src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=1200&q=80",
        alt: "Set sustentable — montaje con materiales reutilizables"
      },
      gallery: [
        { src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=900&q=80", caption: { es: "Estación de filtrado — cero PET", en: "Filtering station — zero PET" } },
        { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80", caption: { es: "Termos reutilizables asignados", en: "Reusable thermoses, assigned per crew" } },
        { src: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=900&q=80", caption: { es: "Separación de residuos desde origen", en: "Waste sorted at source" } },
        { src: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80", caption: { es: "Vajilla reutilizable — catering", en: "Reusable tableware — catering" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2020/07/30/45933-445087658_large.mp4",
        poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "BTS — día de rodaje sin plástico", en: "BTS — zero-plastic shoot day" }
      },
      title: {
        es: "Filmar sin dejar huella: cómo la sostenibilidad dejó de ser discurso y se volvió práctica.",
        en: "Filming without a trace: how sustainability stopped being a talking point and became practice."
      },
      kicker: {
        es: "Durante años la sostenibilidad en producción fue una conversación cómoda — algo que se mencionaba en propuestas, rara vez en la operación. En Selva empezó distinto: no como estrategia de marketing, sino como una incomodidad operativa. Notas sobre lo que cambia cuando se deja de compensar y se empieza a rediseñar.",
        en: "For years, sustainability in production was a comfortable conversation — something mentioned in pitches, rarely in operations. At Selva it started differently: not as a marketing strategy, but as an operational discomfort. Notes on what changes when you stop offsetting and start redesigning."
      },
      pullquote: {
        es: "«La pregunta ya no es si se puede producir de forma sostenible. Es cuánto tiempo más puede la industria seguir produciendo sin hacerlo.»",
        en: "\"The question is no longer whether you can produce sustainably. It's how much longer the industry can keep producing without doing so.\""
      },
      body: {
        es: [
          "Durante mucho tiempo, la sostenibilidad en la industria audiovisual fue una conversación cómoda. Algo que se mencionaba en presentaciones, que se agregaba como valor en propuestas, pero que rara vez atravesaba realmente la operación. Porque la realidad del set es otra. Un set es velocidad, presión, improvisación, tiempos ajustados, decisiones en caliente. Es un sistema diseñado para resolver, no para cuestionarse. Y en ese contexto, lo sostenible muchas veces parecía incompatible con lo posible. Hasta que deja de serlo.",
          "En Selva, la sostenibilidad no empezó como una estrategia de marketing. Empezó como una incomodidad operativa. Era imposible no verlo: montañas de botellas de plástico al final de cada jornada, catering lleno de desechables, materiales de arte usados una vez y descartados, transportes innecesarios, procesos duplicados. No era una excepción, era la norma de la industria. Y cuando algo se vuelve normal, deja de cuestionarse. El punto de quiebre fue entender que no se trataba de 'compensar' ese impacto, sino de rediseñar la forma de producir.",
          "Uno de los cambios más visibles —pero también más estructurales— fue la eliminación total de plásticos de un solo uso en set. No como una intención, sino como una política operativa obligatoria. En Selva, hoy no se compran, no se distribuyen y no se permiten. Eso, que suena sencillo en papel, implica rehacer por completo la logística de producción. El agua deja de resolverse con cajas de botellas y pasa a depender de garrafones, estaciones de filtrado y termos reutilizables asignados a cada miembro del equipo. El catering deja de operar con desechables y se reorganiza alrededor de vajilla reutilizable o, en casos estrictamente necesarios, materiales compostables certificados. Nada de esto es accesorio. Todo cambia.",
          "Pero lo interesante es que la sostenibilidad en producción no se trata solo de sustituir materiales. Se trata de cambiar hábitos. Porque un set no funciona solo por reglas, funciona por cultura. Y ahí es donde entra una de las decisiones más importantes: asignar responsabilidad clara. Cada proyecto cuenta con una figura dedicada exclusivamente a esto: el Green Production Assistant. Su rol no es simbólico, es operativo. Supervisa insumos, capacita al equipo, mide residuos, documenta resultados y tiene la autoridad de intervenir cuando algo no cumple. Eso transforma la sostenibilidad de una intención difusa a un sistema medible.",
          "Hay algo particularmente relevante en cómo se aborda este tema: no desde la perfección, sino desde la mejora continua. Se miden métricas concretas —botellas evitadas, residuos generados, reducción estimada de CO₂— y esos datos regresan a dirección como parte del cierre de cada proyecto. Eso permite algo que pocas veces sucede en producción: aprender del proceso. No repetir errores, ajustar decisiones, evolucionar.",
          "Otro punto clave está en los proveedores. La sostenibilidad no puede existir si solo vive dentro del equipo interno. Por eso, todos los proveedores —desde catering hasta transporte y arte— se integran bajo los mismos lineamientos. No es opcional. Se formaliza, se supervisa y, en caso de incumplimiento, hay consecuencias operativas y económicas. Eso eleva el estándar de todo el ecosistema.",
          "En paralelo, hay decisiones que parecen pequeñas pero que cambian la dinámica del set. Eliminar sobres individuales de condimentos. Servir alimentos a granel. Diseñar props que puedan reutilizarse en múltiples producciones. Separar residuos desde origen con sistemas claros. Pensar el menú considerando dietas vegetarianas, veganas y sin gluten como parte base, no como excepción. No son gestos aislados. Son parte de una lógica.",
          "Lo interesante es que, lejos de entorpecer la producción, estos cambios terminan haciéndola más eficiente. Menos desperdicio significa menos manejo de residuos. Procesos más claros reducen errores. Equipos más conscientes toman mejores decisiones en tiempo real. La sostenibilidad deja de ser una carga y se convierte en una ventaja operativa.",
          "También hay una dimensión menos evidente, pero igual de importante: la narrativa. Hoy, las marcas, las plataformas y las audiencias no solo están interesadas en lo que se produce, sino en cómo se produce. La sostenibilidad ya no es un extra, es parte de la conversación. Y cuando está integrada desde la operación —no desde el discurso— se vuelve creíble.",
          "En un momento donde la industria audiovisual está en plena transformación, este tipo de prácticas empiezan a definir el estándar. No porque sean 'correctas', sino porque son inevitables. La pregunta ya no es si se puede producir de forma sostenible. La pregunta es cuánto tiempo más puede la industria seguir produciendo sin hacerlo.",
          "En Selva, la respuesta fue clara: empezar ahora, desde adentro, desde el set, desde lo operativo. No como promesa. Como sistema."
        ],
        en: [
          "For a long time, sustainability in the audiovisual industry was a comfortable conversation. Something mentioned in presentations, added as a value in pitches, but rarely crossing into actual operations. Because the reality of a set is different. A set is speed, pressure, improvisation, tight timing, decisions made in the heat. It's a system designed to solve, not to question itself. And in that context, sustainability often seemed incompatible with what was possible. Until it stopped being.",
          "At Selva, sustainability didn't start as a marketing strategy. It started as an operational discomfort. It was impossible not to see it: mountains of plastic bottles at the end of each day, catering full of single-use items, art materials used once and discarded, unnecessary transports, duplicated processes. It wasn't an exception — it was the industry norm. And when something becomes normal, it stops being questioned. The breaking point was understanding this wasn't about 'offsetting' that impact, but about redesigning how we produce.",
          "One of the most visible — and most structural — changes was the total elimination of single-use plastics on set. Not as an intention, but as a mandatory operational policy. At Selva, they're no longer purchased, distributed or allowed. That, which sounds simple on paper, means rebuilding production logistics from scratch. Water stops being solved with cases of bottles and starts depending on jugs, filtered stations and reusable thermoses assigned to each team member. Catering stops operating with disposables and reorganizes around reusable tableware or, in strictly necessary cases, certified compostable materials. None of this is accessory. Everything changes.",
          "But the interesting part is that sustainability in production isn't just about substituting materials. It's about changing habits. Because a set doesn't run on rules alone — it runs on culture. And that's where one of the most important decisions comes in: assigning clear responsibility. Every project has a dedicated figure for this: the Green Production Assistant. The role isn't symbolic, it's operational. They oversee supplies, train the team, measure waste, document results, and have the authority to intervene when something isn't compliant. That turns sustainability from a diffuse intention into a measurable system.",
          "Something particularly relevant about how this is approached: not from perfection, but from continuous improvement. Concrete metrics are measured — bottles avoided, waste generated, estimated CO₂ reduction — and that data returns to direction as part of every project's closeout. That enables something that rarely happens in production: learning from the process. Not repeating errors, adjusting decisions, evolving.",
          "Another key point is vendors. Sustainability can't exist if it only lives inside the internal team. That's why every vendor — from catering to transport to art — is integrated under the same guidelines. It's not optional. It's formalized, supervised, and if not met, there are operational and economic consequences. That raises the standard of the entire ecosystem.",
          "In parallel, there are small-seeming decisions that change set dynamics. Eliminating individual condiment packets. Serving food in bulk. Designing props that can be reused across multiple productions. Separating waste at source with clear systems. Planning menus considering vegetarian, vegan and gluten-free diets as a baseline, not an exception. These aren't isolated gestures. They're part of a logic.",
          "What's interesting is that, far from slowing production down, these changes end up making it more efficient. Less waste means less waste handling. Clearer processes reduce errors. More conscious teams make better decisions in real time. Sustainability stops being a burden and becomes an operational advantage.",
          "There's also a less obvious but equally important dimension: narrative. Today, brands, platforms and audiences aren't only interested in what's produced — they care about how it's produced. Sustainability isn't an extra anymore; it's part of the conversation. And when it's integrated from operations — not from discourse — it becomes credible.",
          "At a moment when the audiovisual industry is in full transformation, these practices are starting to define the standard. Not because they're 'correct,' but because they're inevitable. The question is no longer whether you can produce sustainably. The question is how much longer the industry can keep producing without doing so.",
          "At Selva the answer was clear: start now, from the inside, from the set, from operations. Not as a promise. As a system."
        ]
      }
    },
    {
      id: "oficina-mexico",
      date: { es: "Mayo 2026", en: "May 2026" },
      readTime: "8 min",
      author: "Axel Torres",
      media: {
        kind: "video",
        src: "https://cdn.pixabay.com/video/2020/07/30/45930-445087565_large.mp4",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
        alt: "BTS — rodaje oficina"
      },
      gallery: [
        { src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80", caption: { es: "Estadio Chivas — unidad A", en: "Chivas stadium — unit A" } },
        { src: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=900&q=80", caption: { es: "Jerónimo — take 7", en: "Jerónimo — take 7" } },
        { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80", caption: { es: "Diego Schoening — rehearsal", en: "Diego Schoening — rehearsal" } },
        { src: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=900&q=80", caption: { es: "Frame still — lanzamiento", en: "Frame still — launch" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2020/09/10/49020-458475884_large.mp4",
        poster: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "BTS — día 3, campaña Prime Video", en: "BTS — day 3, Prime Video campaign" }
      },
      title: {
        es: "Cuando una serie logra sentirse propia: detrás de La Oficina México.",
        en: "When a show learns to feel like itself: behind La Oficina México."
      },
      kicker: {
        es: "Filmamos la campaña y el lanzamiento de La Oficina México con Amazon Prime Video e Ignition Creative. No era un comercial más — era la extensión publicitaria de un universo que acababa de nacer. Notas desde un set donde el tono se cuidaba en cada mirada.",
        en: "We shot the campaign and launch of La Oficina México with Amazon Prime Video and Ignition Creative. It wasn't just another commercial — it was the advertising extension of a universe being born. Notes from a set where tone was guarded in every glance."
      },
      body: {
        es: [
          "Hay proyectos que no solo se lanzan: se ponen a prueba. Desde el momento en que se anunció La Oficina México era evidente que no iba a ser una serie más dentro del catálogo. Había una expectativa cargada, inevitable, casi automática — no solo por tratarse de una adaptación, sino porque detrás está el peso cultural de The Office, una serie que no solo definió un estilo de comedia, sino una forma muy específica de observar lo cotidiano. Y cuando algo así se reinterpreta, la pregunta no es si se va a ver bien. La pregunta es si se va a sentir bien.",
          "Lo interesante es que, desde muy temprano, La Oficina México empezó a construir su propia identidad. No desde la copia sino desde algo mucho más difícil: la apropiación. Hay algo en esta versión que entiende perfectamente el tipo de incomodidad que vivimos en los espacios de trabajo en México — ese humor que nace de lo incómodo, de lo absurdo, de lo que todos reconocemos pero nadie dice en voz alta. Más allá de referencias o formatos, lo que termina conectando es esa sensación de «esto sí podría pasar aquí»: la naturalidad de los silencios, las miradas, los momentos donde aparentemente no pasa nada pero todo se está construyendo.",
          "Desde adentro, lo que más sorprendía era justo eso: el nivel de precisión que requiere algo que, en pantalla, parece tan simple. Tuvimos la oportunidad de filmar la campaña publicitaria y las fotos de lanzamiento trabajando de la mano con Amazon Prime Video e Ignition Creative. Desde el inicio quedó claro que no se trataba de hacer piezas promocionales tradicionales. La intención era otra: que la campaña <a href=\"https://www.aboutamazon.mx/noticias/entretenimiento/la-oficina-llega-a-prime-video-el-trabajo-nunca-fue-tan-divertido\" target=\"_blank\" rel=\"noopener\">se sintiera como una extensión real del universo de la serie</a>. Y eso cambia completamente la forma de producir. Incluso las activaciones estacionales — como la <a href=\"https://www.omelete.com.mx/series-tv/la-oficina-mira-la-campana-de-14-de-febrero-para-la-serie-mexicana\" target=\"_blank\" rel=\"noopener\">pieza especial de 14 de febrero</a> — se pensaron como extensiones del tono, no como anuncios sueltos.",
          "Recuerdo especialmente el rodaje con Jerónimo en el estadio de Chivas. Era uno de esos días donde todo tiene que alinearse: el espacio, la energía, el ritmo, los tiempos. Pero más allá de la logística, había algo más importante que sostener — el tono. Porque en un proyecto así puedes tener el mejor set, el mejor equipo, las mejores condiciones; pero si el tono no está bien, nada funciona. Y el tono aquí no se dirige de forma obvia. No se empuja. Se cuida.",
          "También trabajamos con Diego Schoening en momentos que tenían que sentirse completamente orgánicos — casi como si la cámara simplemente hubiera estado ahí en el instante exacto. Ese tipo de naturalidad no ocurre por accidente: es el resultado de muchas decisiones pequeñas que se van acumulando hasta que todo empieza a sentirse coherente. Lo que hacía especialmente divertido el proceso era justamente eso: encontrar el equilibrio entre lo controlado y lo espontáneo, entre lo planeado y lo que surgía en el momento. En el set había una energía muy particular, donde sabías que lo mejor podía pasar en los espacios menos esperados.",
          "Y eso es algo que la campaña logra transmitir. No se siente rígida. No se siente sobreproducida. Se siente viva. Cuando empezaron a salir las piezas, la conversación fue interesante de ver. Desde el <a href=\"https://www.infobae.com/mexico/2025/10/14/la-oficina-la-version-mexicana-de-the-office-libera-su-primer-adelanto-y-divide-opiniones-en-redes/\" target=\"_blank\" rel=\"noopener\">primer teaser la gente ya estaba discutiendo en redes</a>. Sí, había comparaciones — era inevitable, y medios como <a href=\"https://www.sopitas.com/cine-y-tv/la-oficina-the-office-estreno-trailer-prime-video/\" target=\"_blank\" rel=\"noopener\">Sopitas</a> y <a href=\"https://www.milenio.com/espectaculos/television/oficina-version-mexicana-the-office-estrena-prime\" target=\"_blank\" rel=\"noopener\">Milenio</a> la cubrieron casi semana a semana — pero también empezó a pasar algo más importante: la gente empezó a reconocer situaciones, a conectar con momentos, a reírse desde un lugar cercano. Ahí es donde todo empieza a tomar forma. En ese punto la serie deja de ser una adaptación y se convierte en algo propio. Algo que ya no necesita compararse para sostenerse.",
          "Hay algo muy valioso en cómo La Oficina México logra moverse en esa línea tan delgada entre respetar un legado y construir una identidad propia. No intenta ser una copia, pero tampoco pierde de vista lo que hace que ese universo funcione. Y eso no es fácil: requiere entendimiento, sensibilidad y mucha precisión en la ejecución. <a href=\"https://www.vogue.mx/articulo/la-oficina-mexico-opinion\" target=\"_blank\" rel=\"noopener\">Medios de lifestyle como Vogue</a> lo analizaron desde la perspectiva cultural, mientras que <a href=\"https://www.avpasion.com/mexico-version-the-office-prime-video/\" target=\"_blank\" rel=\"noopener\">AV Pasión</a> y <a href=\"https://plazadearmas.com.mx/la-oficina-confirma-su-segunda-temporada/\" target=\"_blank\" rel=\"noopener\">Plaza de Armas</a> validaron su desempeño comercial cuando se confirmó la continuidad. La campaña, en ese sentido, acompaña perfectamente ese espíritu. No intenta explicar la serie ni sobrevenderla — se integra. Se siente como si perteneciera al mismo mundo, como si fuera una extensión natural de lo que sucede dentro de la historia. Y eso hoy es cada vez más raro de ver.",
          "Unas semanas después del estreno, <a href=\"https://elpais.com/mexico/gente/2026-04-06/prime-video-confirma-que-la-oficina-tendra-segunda-temporada.html\" target=\"_blank\" rel=\"noopener\">El País confirmó segunda temporada</a>; <a href=\"https://mexico.as.com/tikitakas/cuando-se-estrena-la-segunda-temporada-de-la-oficina-esto-es-lo-que-se-sabe-f202604-n/\" target=\"_blank\" rel=\"noopener\">AS México</a> e <a href=\"https://www.informador.mx/entretenimiento/la-oficina-habra-una-segunda-temporada-de-la-serie-20260320-0080.html\" target=\"_blank\" rel=\"noopener\">Informador</a> levantaron la demanda orgánica del público. El personaje incluso llegó a activaciones físicas: <a href=\"https://as.com/meristation/mexico/ccxp-mx-25-prime-video-da-un-vistazo-a-sus-importantes-productos-para-la-region-n/\" target=\"_blank\" rel=\"noopener\">Prime lo presentó en CCXP México 2025</a> como parte del escaparate regional. Al final, proyectos como este recuerdan algo importante. En una industria donde cada vez hay más contenido, más plataformas y más ruido, lo que realmente hace la diferencia no es cuánto se produce — es qué tan auténtico se siente. Y La Oficina México logra justamente eso: se siente cercana, se siente incómoda en el mejor sentido, se siente real. Gran serie, gran campaña, y de verdad vale la pena verla sin prejuicios. Porque cuando conectas con su ritmo y su humor entiendes que no está intentando ser otra cosa. Está construyendo lo suyo. Y lo está haciendo muy bien."
        ],
        en: [
          "Some projects don't just launch — they get tested. From the moment La Oficina México was announced it was clear this wouldn't be just another title in the catalog. There was a loaded, almost automatic expectation — not only because it's an adaptation, but because behind it stands the cultural weight of The Office, a show that defined not just a comedic style but a very specific way of watching the everyday. When something like that gets reinterpreted, the question isn't whether it will look good. It's whether it will feel right.",
          "What's interesting is that La Oficina México started building its own identity early. Not through copying, but through something harder: appropriation. There's something in this version that deeply understands the kind of discomfort we live in Mexican workspaces — a humor born from the awkward, the absurd, what everyone recognizes but nobody says out loud. Beyond references or formats, what ends up connecting is that feeling of 'this could actually happen here': the naturalness of the silences, the glances, the moments where seemingly nothing happens but everything is being built.",
          "From the inside, what surprised us most was exactly that: the level of precision something apparently simple on screen actually requires. We had the chance to shoot the advertising campaign and launch stills in partnership with Amazon Prime Video and Ignition Creative. From the start it was clear this wasn't about traditional promo pieces. The intention was different: the campaign had to feel like a real extension of the show's universe. And that changes the way you produce — completely.",
          "I specifically remember the shoot with Jerónimo at the Chivas stadium. One of those days where everything has to align: the space, the energy, the rhythm, the timing. But beyond logistics, there was something more important to hold — the tone. Because in a project like this you can have the best set, the best crew, the best conditions; but if the tone isn't right, nothing works. And the tone here isn't directed obviously. It isn't pushed. It's guarded.",
          "We also worked with Diego Schoening in moments that had to feel completely organic — almost as if the camera had just happened to be there at the exact instant. That kind of naturalness doesn't happen by accident: it's the result of many small decisions accumulating until everything starts feeling coherent. What made the process especially fun was exactly that: finding the balance between the controlled and the spontaneous, between what was planned and what emerged in the moment. There was a very particular energy on set, where you knew the best thing could happen in the least expected places.",
          "And that's something the campaign manages to transmit. It doesn't feel rigid. It doesn't feel over-produced. It feels alive. When the pieces started coming out, the conversation was interesting to watch. Yes, there were comparisons — inevitable — but something more important also started happening: people began recognizing situations, connecting with moments, laughing from a close-by place. That's where everything starts to take shape. At that point the show stops being an adaptation and becomes something of its own. Something that no longer needs to be compared to hold up.",
          "There's something very valuable in how La Oficina México walks that thin line between respecting a legacy and building its own identity. It doesn't try to be a copy, but it also doesn't lose sight of what makes that universe work. And that's not easy: it requires understanding, sensitivity and a lot of precision in execution. The campaign, in that sense, accompanies that spirit perfectly. It doesn't try to explain the show or oversell it — it integrates. It feels like it belongs to the same world, like a natural extension of what happens inside the story. And that's something increasingly rare to see.",
          "In the end, projects like this remind you of something important. In an industry with more content, more platforms and more noise every day, what really makes the difference isn't how much you produce — it's how authentic it feels. And La Oficina México achieves exactly that: it feels close, it feels uncomfortable in the best sense, it feels real. Great show, great campaign, and genuinely worth watching without prejudice. Because when you connect with its rhythm and its humor, you understand it isn't trying to be something else. It's building its own thing. And doing it very well."
        ]
      },
      pullquote: {
        es: "«El tono aquí no se dirige de forma obvia. No se empuja. Se cuida.»",
        en: "\"The tone here isn't directed obviously. It isn't pushed. It's guarded.\""
      }
    },
    {
      id: "nueva-era-contenido",
      date: { es: "Abril 2026", en: "April 2026" },
      readTime: "7 min",
      author: "Fer Tovar",
      media: {
        kind: "image",
        src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
        alt: "Producción continua — múltiples pantallas y cámaras"
      },
      gallery: [
        { src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=900&q=80", caption: { es: "Dashboard editorial — 90 días", en: "Editorial dashboard — 90 days" } },
        { src: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=900&q=80", caption: { es: "Unidad embebida — sala marca", en: "Embedded unit — brand room" } },
        { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80", caption: { es: "Planeación semanal — retainer", en: "Weekly planning — retainer" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2020/02/25/32725-394521536_large.mp4",
        poster: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "BTS — sistema always-on en operación", en: "BTS — always-on system running" }
      },
      title: {
        es: "Always On: la nueva forma de producir contenido para marcas.",
        en: "Always On: the new way to produce content for brands."
      },
      kicker: {
        es: "No es una campaña más grande. Es el fin del modelo de campaña. Always On es producción continua — un equipo embebido, planeación editorial a 90 días, más de cien entregables por rodaje. Las marcas que ya lo adoptaron crecen 3.5x más rápido y bajan 60% su costo por pieza.",
        en: "It's not a bigger campaign. It's the end of the campaign model. Always On is continuous production — an embedded team, 90-day editorial planning, over a hundred deliverables per shoot. Brands already on it grow 3.5x faster and cut per-piece cost by 60%."
      },
      pullquote: {
        es: "El cliente ya no encarga una campaña. Encarga un ritmo. Y un ritmo no se produce, se opera.",
        en: "The client no longer commissions a campaign. They commission a cadence. And a cadence isn't produced — it's operated."
      },
      body: {
        es: [
          "Hay un formato nuevo en nuestra industria y tiene nombre: Always On. No es una palabra de marketing — es una forma distinta de operar una marca. Y es, probablemente, el cambio más importante en producción audiovisual de los últimos diez años.",
          "La premisa es simple: en vez de producir dos o tres campañas grandes al año, la marca sostiene una conversación continua — ocho, diez, doce piezas al mes — con un equipo embebido que conoce su ADN, planea a noventa días, y entrega con la misma estética cinematográfica mes tras mes. De un solo rodaje pueden salir más de cien entregables.",
          "¿Por qué ahora? Los números lo explican. El 58% del gasto publicitario mundial ya es digital. En México, 57%. El video superó por primera vez a la TV lineal en inversión. El consumidor promedio pasa más de cinco horas al día en plataformas digitales, y el 70% espera que las marcas le hablen todo el tiempo — no tres veces al año.",
          "El problema: el modelo tradicional no alcanza ese ritmo. Una productora diseñada para entregar un comercial cada tres meses no puede entregar doce piezas cada mes sin colapsar — o sin subcontratar, que es peor: subcontratar es delegar la autoría a otro estudio y pretender que el cliente no lo note.",
          "Por eso en Selva desarrollamos Always On. Una unidad embebida con la marca. Planeación editorial a 90 días. Producción modular — un rodaje bien hecho alimenta semanas de contenido. Post, color, sonido, distribución, todo integrado. Un sistema vivo: contenido que evoluciona mes a mes, sin que nada salga del ADN de la marca.",
          "Los resultados están en los números. Las marcas con estrategia Always-On crecen 3.5x más rápido. El costo por pieza cae hasta 60% con producción modular bien ejecutada. Y lo más importante: la calidad cinematográfica no se pierde — vive 24/7, no una vez por trimestre.",
          "El comercial no desaparece. Sigue siendo el momento grande, el tentpole, el brand film que define la plataforma. Pero ahora está rodeado de cien piezas que lo explotan, lo extienden, lo hacen durar. Always On no reemplaza el comercial. Lo saca de su aislamiento.",
          "Si tu marca todavía opera por campañas, no es que esté haciendo algo mal — es que está operando con la arquitectura de hace diez años. Always On es la arquitectura que sigue.",
        ],
        en: [
          "There's a new format in our industry and it has a name: Always On. It's not a marketing word — it's a different way to operate a brand. And it's probably the most important shift in audiovisual production of the last ten years.",
          "The premise is simple: instead of producing two or three big campaigns a year, the brand sustains a continuous conversation — eight, ten, twelve pieces per month — with an embedded team that knows their DNA, plans 90 days out, and delivers the same cinematic aesthetic month after month. A single shoot can yield over a hundred deliverables.",
          "Why now? The numbers explain it. 58% of global ad spend is now digital. In Mexico, 57%. Video overtook linear TV in investment for the first time. The average consumer spends more than five hours a day on digital platforms, and 70% expect brands to speak to them all the time — not three times a year.",
          "The problem: the traditional model doesn't reach that rhythm. A production house designed to deliver one commercial every three months can't deliver twelve pieces every month without collapsing — or without subcontracting, which is worse: subcontracting is handing authorship to another studio and pretending the client won't notice.",
          "That's why at Selva we developed Always On. A unit embedded with the brand. 90-day editorial planning. Modular production — one well-run shoot feeds weeks of content. Post, color, sound, distribution — all integrated. A living system: content that evolves month by month, without anything drifting from the brand's DNA.",
          "The results are in the numbers. Always-On brands grow 3.5x faster. Per-piece cost drops up to 60% with well-executed modular production. And most importantly: cinematic quality isn't lost — it lives 24/7, not once per quarter.",
          "The commercial doesn't disappear. It's still the big moment, the tentpole, the brand film that defines the platform. But now it's surrounded by a hundred pieces that exploit it, extend it, make it last. Always On doesn't replace the commercial. It takes it out of isolation.",
          "If your brand still operates by campaign, it's not that you're doing something wrong — it's that you're operating with the architecture of ten years ago. Always On is the architecture that follows.",
        ]
      }
    },
    {
      id: "content-day",
      date: { es: "Marzo 2026", en: "March 2026" },
      readTime: "7 min",
      author: "Axel Torres",
      media: {
        kind: "video",
        src: "https://cdn.pixabay.com/video/2021/10/25/92624-636471529_large.mp4",
        poster: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=1200&q=80",
        alt: "BTS Content Day — múltiples unidades en paralelo"
      },
      gallery: [
        { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80", caption: { es: "Unidad A — hero / TVC", en: "Unit A — hero / TVC" } },
        { src: "https://images.unsplash.com/photo-1604514813842-6dd89d2b462e?auto=format&fit=crop&w=900&q=80", caption: { es: "Unidad B — foto fija", en: "Unit B — stills" } },
        { src: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&w=900&q=80", caption: { es: "Unidad C — social mobile-first", en: "Unit C — mobile-first social" } },
        { src: "https://images.unsplash.com/photo-1561489401-fc2876ced162?auto=format&fit=crop&w=900&q=80", caption: { es: "Sets modulares — un foro, 5 outputs", en: "Modular sets — one stage, 5 outputs" } },
        { src: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?auto=format&fit=crop&w=900&q=80", caption: { es: "Post — un grade, todos los formatos", en: "Post — one grade, every format" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2020/03/17/33413-400814321_large.mp4",
        poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "BTS — Content Day, 4 unidades simultáneas", en: "BTS — Content Day, 4 simultaneous units" }
      },
      title: {
        es: "Un Content Day no es un rodaje. Es diseño editorial desde producción.",
        en: "A Content Day isn't a shoot. It's editorial design from production."
      },
      kicker: {
        es: "El formato nació en la convergencia entre plataformas, e-commerce y branded content. Las marcas dejaron de producir piezas aisladas y empezaron a construir ecosistemas — una sola idea que se adapta a múltiples formatos, audiencias y canales. Así lo ejecutamos en Selva.",
        en: "The format was born in the convergence of platforms, e-commerce and branded content. Brands stopped producing isolated pieces and started building ecosystems — one idea that adapts to multiple formats, audiences and channels. Here's how we execute it at Selva."
      },
      body: {
        es: [
          "Un Content Day bien planteado no es un rodaje eficiente. Es un sistema de producción editorial comprimido en uno o pocos días, donde una marca genera meses de contenido con consistencia estética, narrativa y estratégica. Ese es el punto — y es lo que muchas productoras se pierden cuando lo traducen como «grabar mucho en poco tiempo».",
          "Es diseño de contenido desde producción. Se define desde el inicio una arquitectura donde existe una idea central, una jerarquía de piezas — hero, campaña, digital, social, always on — y sets, lighting y blocking pensados para múltiples outputs simultáneos. Cuando el diseño está bien, el día se siente coreografiado; cuando no, se siente a fábrica.",
          "En Selva lo operamos en tres capas. La primera es la capa creativa: concepto rector, narrativa adaptable (modular), estilo visual — fotografía, arte, tono — y definición clara de outputs: TVC / hero film, key visuals, social (reels, TikToks, cuts), digital assets, entrevistas, BTS. Ahí es donde muchas productoras fallan: piensan en piezas, no en sistema.",
          "La segunda es la capa de producción — el Content Day en sí. Se diseña el set para que sea modular y reutilizable: un mismo foro puede tener set principal (hero / TVC), set editorial (foto fija), set digital (contenido rápido), set de entrevistas y set de BTS. Y se trabaja con unidades simultáneas: Unidad A rueda hero en lenguaje de cine; Unidad B captura foto de campaña; Unidad C produce social mobile-first; Unidad D documenta BTS. Todo en paralelo, pero con control total de arte, luz y narrativa.",
          "La tercera es outputs — lo que realmente compra el cliente. De un solo Content Day pueden salir uno a tres comerciales, diez a treinta piezas digitales, veinte a cien fotografías, variantes de pauta, adaptaciones por formato (vertical, horizontal, cuadrado), clips para redes, entrevistas y BTS para branding. El valor no está en el volumen — está en la consistencia visual y narrativa entre todas esas piezas.",
          "Las marcas grandes están migrando a este modelo porque reduce costos frente a producciones separadas, acelera tiempos, mantiene coherencia estética, permite alimentar algoritmos con contenido constante e integra performance con branding en un solo sistema. Pero hay una trampa: muchas ejecuciones se vuelven «fábrica de contenido» sin alma. Ahí es donde entra el diferencial.",
          "En Selva no hacemos Content Days. Hacemos Content Days con lenguaje cinematográfico. Y esa distinción cambia todo. La creatividad nace desde narrativa e imagen — no desde formatos. El lighting está pensado como campaña, no como contenido rápido. El arte no es funcional, es editorial y aspiracional. El blocking y la dirección de talento están concebidos para múltiples outputs sin que ninguno se sienta menor. El rodaje está diseñado como ecosistema — no como shoot.",
          "La frase que usamos internamente, y con la que cerramos cada brief de Content Day, lo resume mejor que cualquier métrica: Selva no produce contenido. Selva diseña sistemas de contenido con calidad cinematográfica."
        ],
        en: [
          "A well-designed Content Day isn't an efficient shoot. It's an editorial production system compressed into one or a few days, where a brand generates months of content with aesthetic, narrative and strategic consistency. That's the point — and it's what most production houses miss when they translate it as 'shooting a lot fast.'",
          "It's content design from production. From the start we define an architecture with one central idea, a hierarchy of pieces — hero, campaign, digital, social, always on — and sets, lighting and blocking built for multiple simultaneous outputs. When the design is right, the day feels choreographed; when it isn't, it feels like a factory.",
          "At Selva we run it in three layers. The first is the creative layer: governing concept, modular narrative, visual style — photography, art, tone — and a clear definition of outputs: TVC / hero film, key visuals, social (reels, TikToks, cuts), digital assets, interviews, BTS. This is where most production houses fail: they think in pieces, not in systems.",
          "The second is the production layer — the Content Day itself. The set is designed to be modular and reusable: a single stage can host main set (hero / TVC), editorial set (stills), digital set (quick content), interview set and BTS set. And we work with simultaneous units: Unit A shoots the hero in cinema language; Unit B captures campaign stills; Unit C produces mobile-first social; Unit D documents BTS. All in parallel — but with total control of art, light and narrative.",
          "The third is outputs — what the client actually buys. A single Content Day can produce one to three commercials, ten to thirty digital pieces, twenty to one hundred photographs, ad variants, format-native adaptations (vertical, horizontal, square), social clips, interviews and BTS for branding. The value isn't in the volume — it's in the visual and narrative consistency across all those pieces.",
          "Major brands are migrating to this model because it reduces cost versus separate productions, accelerates timing, keeps aesthetic coherence, feeds algorithms with constant content, and integrates performance with branding in a single system. But there's a trap: many executions turn into 'content factories' without soul. That's where the differentiator comes in.",
          "At Selva we don't do Content Days. We do Content Days with cinematic language. And that distinction changes everything. Creativity is born from narrative and image — not from formats. Lighting is conceived as a campaign, not as quick content. Art isn't functional, it's editorial and aspirational. Blocking and talent direction are built for multiple outputs without any of them feeling secondary. The shoot is designed as an ecosystem — not as a shoot.",
          "The phrase we use internally, and the one that closes every Content Day brief, sums it up better than any metric: Selva doesn't produce content. Selva designs content systems with cinematic quality."
        ]
      },
      pullquote: {
        es: "«Selva no produce contenido. Selva diseña sistemas de contenido con calidad cinematográfica.»",
        en: "\"Selva doesn't produce content. Selva designs content systems with cinematic quality.\""
      }
    },
    {
      id: "roma-norte",
      date: { es: "Febrero 2026", en: "February 2026" },
      readTime: "4 min",
      author: "Raga",
      media: {
        kind: "image",
        src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80",
        alt: "Puebla 403 — cuadra Roma Norte"
      },
      gallery: [
        { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80", caption: { es: "Puebla 403 — fachada, 2012", en: "Puebla 403 — facade, 2012" } },
        { src: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?auto=format&fit=crop&w=900&q=80", caption: { es: "La esquina que era taller mecánico", en: "The corner that used to be an auto shop" } },
        { src: "https://images.unsplash.com/photo-1542367597-8849eb950fd8?auto=format&fit=crop&w=900&q=80", caption: { es: "Papelería — cartón gris desde 2014", en: "Stationery — grey cardboard since 2014" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2020/01/27/31590-388794121_large.mp4",
        poster: "https://images.unsplash.com/photo-1514896856000-91cb6de818e0?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "La cuadra — amanecer en Puebla 403", en: "The block — dawn at Puebla 403" }
      },
      title: {
        es: "Por qué seguimos aquí: la cuadra de Puebla 403.",
        en: "Why we're still here: the Puebla 403 block."
      },
      kicker: {
        es: "Diez y ocho años en Roma Norte. Notas sobre un barrio que cambia más rápido que un color grading.",
        en: "Eighteen years in Roma Norte. Notes on a neighborhood that changes faster than a color grade."
      },
      body: {
        es: [
          "Selva empezó en 2007 en un departamento que hoy ya no existe en Álvaro Obregón. Nos mudamos a Puebla 403 en 2012, cuando la Roma todavía tenía ferreterías.",
          "Trabajamos aquí porque aquí está todo lo que un rodaje necesita a diez minutos a pie: talleres, sastres, iluminadores, sonidistas, tres cafés donde hacemos briefs, dos cantinas donde los cerramos. La Roma no es un barrio de moda para nosotros — es infraestructura de producción.",
          "La cuadra cambia cada seis meses. La esquina donde estaba el taller mecánico ahora es una galería. Del otro lado, la papelería sigue vendiendo cartón gris del mismo proveedor que nos hace los mood-boards desde 2014. Coexisten.",
          "Un estudio puede vivir donde quiera. Nosotros elegimos Puebla 403 porque desde esta ventana se oye la ciudad."
        ],
        en: [
          "Selva started in 2007 in an apartment that no longer exists on Álvaro Obregón. We moved to Puebla 403 in 2012, when Roma Norte still had hardware stores.",
          "We work here because everything a shoot needs is a ten-minute walk: workshops, tailors, gaffers, sound crews, three cafés where we brief, two cantinas where we close. For us, Roma isn't a fashionable neighborhood — it's production infrastructure.",
          "The block changes every six months. The corner where the auto shop used to be is now a gallery. Across the street, the stationery shop still sells grey cardboard from the same supplier that's made our mood boards since 2014. They coexist.",
          "A studio can live anywhere. We chose Puebla 403 because from this window, you can hear the city."
        ]
      },
      pullquote: {
        es: "«Roma Norte no es un barrio de moda para nosotros — es infraestructura de producción.»",
        en: "\"Roma isn't a fashionable neighborhood for us — it's production infrastructure.\""
      }
    },
    {
      id: "ia-generativa",
      date: { es: "Enero 2026", en: "January 2026" },
      readTime: "8 min",
      author: "Fer Ashane",
      media: {
        kind: "image",
        src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        alt: "IA generativa — proceso visual"
      },
      gallery: [
        { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80", caption: { es: "Moodboard Midjourney — iteraciones", en: "Midjourney moodboard — iterations" } },
        { src: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?auto=format&fit=crop&w=900&q=80", caption: { es: "Previsualización Higgsfield", en: "Higgsfield previz" } },
        { src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80", caption: { es: "Runway — pruebas de concepto", en: "Runway — concept tests" } },
        { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80", caption: { es: "Post — versioning automático", en: "Post — automated versioning" } }
      ],
      bts: {
        src: "https://cdn.pixabay.com/video/2018/12/02/19551-304284115_large.mp4",
        poster: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
        caption: { es: "BTS — sala de post, flujo IA-asistido", en: "BTS — post room, AI-assisted flow" }
      },
      title: {
        es: "IA generativa en producción y post: qué usamos, qué no, y por qué.",
        en: "Generative AI in production and post: what we use, what we don't, and why."
      },
      kicker: {
        es: "La conversación sobre IA en la industria audiovisual se volvió binaria — revolución total o rechazo absoluto. Ninguna de las dos describe lo que realmente está pasando. Lo que vivimos no es una sustitución de la creatividad: es una transformación del proceso. Y entender eso cambia todo.",
        en: "The conversation about AI in the audiovisual industry has gone binary — total revolution or absolute rejection. Neither describes what's really happening. What we're living isn't a substitution of creativity: it's a transformation of the process. And understanding that changes everything."
      },
      body: {
        es: [
          "En muy poco tiempo la inteligencia artificial generativa dejó de ser una curiosidad para convertirse en un tema inevitable. Aparece en juntas con clientes, en conversaciones de producción, en briefs, en pitches. Está en todos lados. Y sin embargo, rara vez se habla de ella con claridad.",
          "Cuando se habla de IA muchas veces se le atribuye una capacidad creativa que no tiene. Herramientas como Midjourney, Runway o Kling pueden generar imágenes o secuencias que parecen originales, pero en realidad están reorganizando información existente — funcionan a partir de patrones, referencias y probabilidades. Eso las vuelve extraordinariamente eficientes para explorar posibilidades, pero no las convierte en autoras. La intención detrás de un proyecto — qué contar, cómo contarlo y por qué — sigue siendo profundamente humana. En producción, eso no es un detalle filosófico: es una diferencia práctica.",
          "Donde la IA empieza a tener un impacto real es en todo lo que sucede antes de que una cámara se encienda. Desarrollar un universo visual — buscar referencias, construir moodboards, alinear visiones entre cliente, agencia y equipo creativo — era un proceso que podía tomar días o semanas. Hoy, con Midjourney, ese mismo proceso sucede en horas. Pero lo importante no es la velocidad: es la claridad que genera. Las conversaciones dejan de ser abstractas. Ya no se trata de describir un tono — se trata de reaccionar a algo visible. Eso cambia la calidad de las decisiones desde el inicio. La IA, en ese contexto, no reemplaza al director de arte ni al fotógrafo: les permite llegar más lejos, más rápido.",
          "Algo similar sucede en la previsualización. Plataformas como Higgsfield permiten anticipar decisiones antes de entrar al set — explorar cómo se puede mover una cámara, entender el ritmo de una escena, visualizar una intención. Esto no sustituye el trabajo real: la luz, el espacio y la energía de un set siguen siendo irreemplazables. Pero sí reduce incertidumbre. Es una capa previa que mejora la ejecución — no algo que la sustituya.",
          "Donde la conversación se vuelve más compleja es en la generación de video. Runway y Kling han avanzado de forma impresionante; hoy ya generan secuencias que hace poco parecían imposibles, y tienen aplicaciones reales en desarrollo de ideas, pruebas de concepto y piezas digitales muy específicas. Pero cuando se trata de narrativa, de dirección de actores, de continuidad visual, todavía hay algo que no se sostiene. Las imágenes pueden ser convincentes por momentos, pero les falta peso. Les falta intención. Les falta esa dimensión física y emocional que aparece cuando una escena está realmente construida. No es una limitación definitiva — pero sí es una realidad actual.",
          "Curiosamente, el lugar donde la IA ya está generando un impacto más sólido es uno menos visible: la postproducción. Ahí, más que transformar el resultado, transforma el proceso. Permite limpiar audio con mayor precisión, acelerar rotoscopía, automatizar tareas repetitivas, generar múltiples versiones de una misma pieza para distintos formatos. Nada de eso cambia la esencia del proyecto — pero cambia tiempos, costos y eficiencia. Y en una industria donde los calendarios son cada vez más exigentes, eso tiene un valor enorme.",
          "Hay territorios, sin embargo, donde la IA sigue sin alcanzar el nivel necesario, y es importante decirlo con claridad. La dirección de actores no se reduce a una serie de instrucciones: hay una dimensión emocional, intuitiva, profundamente humana en la manera en que una persona interpreta una escena — algo que ocurre en los silencios, en las miradas, en lo que no está escrito. Lo mismo sucede con la cinematografía: la luz no es solo una herramienta estética, es un fenómeno físico que interactúa con el espacio, con los materiales, con la piel. Esa complejidad todavía no puede replicarse por completo. Y en la narrativa la limitación es aún más evidente: la IA tiende a producir lo que ya ha funcionado, lo reconocible, lo seguro — pero rara vez produce algo que realmente sorprenda o que tenga voz propia. Ahí es donde se marca la diferencia entre contenido y storytelling.",
          "Hay un riesgo en todo esto que no siempre se menciona. No es que la IA vaya a eliminar trabajos. Es que puede empujar a la industria hacia lo homogéneo. Porque cuando producir se vuelve más fácil, también se vuelve más fácil producir sin criterio. Y cuando todo empieza a parecerse, el valor de cada pieza disminuye.",
          "Por eso en Selva la IA no se plantea como una solución, sino como una herramienta que se integra en momentos muy específicos del proceso. Se utiliza para explorar, para visualizar, para optimizar. Pero no para decidir. Las decisiones siguen pasando por personas. Por una mirada. Por una intención clara. Porque al final, lo que define un proyecto no es la tecnología que se utilizó — es la coherencia de las decisiones que lo construyen.",
          "La inteligencia artificial no es el futuro de la producción: es parte de su presente. Pero su valor no está en su capacidad técnica, sino en el criterio con el que se utiliza. Y en una industria donde cada vez es más fácil producir, el verdadero diferencial empieza a ser ese: no quién tiene acceso a la herramienta, sino quién sabe cuándo usarla — y cuándo no."
        ],
        en: [
          "In very little time, generative AI went from curiosity to unavoidable topic. It shows up in client meetings, in production conversations, in briefs, in pitches. It's everywhere. And yet it's rarely discussed with clarity.",
          "When people talk about AI they often attribute a creative capacity it doesn't have. Tools like Midjourney, Runway or Kling can generate images or sequences that seem original, but they're really reorganizing existing information — they work from patterns, references and probabilities. That makes them extraordinarily efficient for exploring possibilities, but it doesn't make them authors. The intention behind a project — what to tell, how, and why — remains profoundly human. In production, that isn't a philosophical detail: it's a practical difference.",
          "Where AI starts having real impact is everything that happens before a camera turns on. Developing a visual universe — gathering references, building moodboards, aligning visions between client, agency and creative team — used to take days or weeks. Today, with Midjourney, that same process happens in hours. But what matters isn't speed: it's the clarity it generates. Conversations stop being abstract. You're no longer describing a tone — you're reacting to something visible. That changes the quality of decisions from the start. AI, in that context, doesn't replace the art director or the DOP: it lets them go further, faster.",
          "Something similar happens in previsualization. Platforms like Higgsfield allow you to anticipate decisions before stepping onto set — explore how a camera might move, understand the rhythm of a scene, visualize an intention. This doesn't substitute the real work: the light, the space and the energy of a set remain irreplaceable. But it does reduce uncertainty. It's a prior layer that improves execution — not something that replaces it.",
          "Where the conversation gets more complex is in video generation. Runway and Kling have advanced impressively; they now produce sequences that seemed impossible not long ago, with real applications in idea development, concept proofs and very specific digital pieces. But when it comes to narrative, actor direction, visual continuity, something still doesn't hold. The images can be convincing in flashes, but they lack weight. They lack intention. They lack that physical and emotional dimension that appears when a scene is actually built. It's not a definitive limitation — but it is today's reality.",
          "Curiously, where AI is already generating the most solid impact is a less visible place: postproduction. There, more than transforming the result, it transforms the process. It cleans audio with more precision, accelerates roto, automates repetitive tasks, generates multiple versions of the same piece for different formats. None of that changes the essence of the project — but it changes timing, costs and efficiency. And in an industry where calendars are increasingly demanding, that has enormous value.",
          "There are territories, however, where AI still doesn't reach the required level, and it's important to say it clearly. Actor direction can't be reduced to a set of instructions: there's an emotional, intuitive, profoundly human dimension in how a person inhabits a scene — something that happens in the silences, in the glances, in what isn't written. The same goes for cinematography: light isn't just an aesthetic tool, it's a physical phenomenon that interacts with space, materials and skin. That complexity still can't be replicated in full. And in narrative the limitation is even more evident: AI tends to produce what has already worked, what's recognizable, what's safe — but rarely something that genuinely surprises or has its own voice. That's where the line between content and storytelling gets drawn.",
          "There's a risk in all this that isn't always named. It's not that AI will eliminate jobs. It's that it can push the industry toward the homogeneous. Because when producing becomes easier, producing without criterion also becomes easier. And when everything starts to look alike, the value of each piece diminishes.",
          "That's why at Selva AI isn't framed as a solution — it's a tool integrated at very specific moments of the process. We use it to explore, to visualize, to optimize. But not to decide. Decisions still pass through people. Through a gaze. Through a clear intention. Because in the end, what defines a project isn't the technology used — it's the coherence of the decisions that build it.",
          "AI isn't the future of production: it's part of its present. But its value isn't in its technical capacity, it's in the criterion with which it's used. And in an industry where producing is increasingly easy, the real differentiator starts to be exactly that: not who has access to the tool, but who knows when to use it — and when not to."
        ]
      },
      pullquote: {
        es: "«Se utiliza para explorar, para visualizar, para optimizar. Pero no para decidir.»",
        en: "\"We use it to explore, to visualize, to optimize. But not to decide.\""
      }
    }
  ];

  // ---------- STATIC COPY FRAGMENTS ----------
  const copy = {
    nav: [
      { id: "work", es: "Proyectos", en: "Work" },
      { id: "directors", es: "Directores", en: "Directors" },
      { id: "studio", es: "Estudio", en: "Studio" },
      { id: "services", es: "Servicios", en: "Services" },
      { id: "journal", es: "Diario", en: "Journal" },
      { id: "contact", es: "Contacto", en: "Contact" },
    ],
    heroMeta: {
      es: "Casa productora · CDMX · Roma Norte ✦ Desde 2007",
      en: "Production company · CDMX · Roma Norte ✦ Since 2007"
    },
    manifestos: {
      v1: { es: ["Calidad cinematográfica.", "Cada proyecto."], en: ["Cinematic quality.", "Every project."] },
      v2: { es: ["Cine para marcas.", "No publicidad."], en: ["Cinema for brands.", "Not advertising."] },
      v3: { es: ["Contenido que conecta", "por cómo lo dice."], en: ["Content that connects", "by how it says it."] },
      v4: { es: ["Dieciocho años", "filmando memoria."], en: ["Eighteen years", "filming memory."] },
    },
    manifestoEditorial: {
      es: "Llevamos dieciocho años filmando en América Latina. Creemos que una marca se recuerda por cómo hace sentir — no por cuántas veces se repite. Hacemos cine para marcas, no publicidad que se disfraza de cine. Cuadros milimétricos, actuaciones auténticas, travellings que permanecen. El resultado son piezas que elevan KPIs y se quedan en la memoria.",
      en: "We've been filming in Latin America for eighteen years. We believe a brand is remembered for how it makes you feel — not for how many times it repeats itself. We make cinema for brands, not advertising that dresses up as cinema. Precise frames, authentic performances, travelling shots that stay. The result: pieces that raise KPIs and stay in memory."
    },
    valores: [
      {
        n: "01",
        title: { es: "Calidad cinematográfica", en: "Cinematic craft" },
        body: {
          es: "Un comercial no tiene que parecerse a un comercial. Filmamos con la misma disciplina con la que se hace largometraje — misma gente, mismo rigor, misma obsesión por el cuadro — y lo cobramos al precio del oficio publicitario.",
          en: "A commercial doesn't have to look like a commercial. We shoot with the discipline of feature filmmaking — same crews, same rigor, same obsession with the frame — and price it at the rhythm of advertising."
        }
      },
      {
        n: "02",
        title: { es: "Innovación", en: "Innovation" },
        body: {
          es: "IA generativa para resolver lo invisible. Machine learning para pre-visualización. Producción virtual cuando la locación cuesta más que la idea. La tecnología que no se nota — la que libera tiempo para pensar dos veces.",
          en: "Generative AI to solve the invisible. Machine learning for pre-visualization. Virtual production when the location costs more than the idea. Technology you don't notice — the kind that frees up time to think twice."
        }
      },
      {
        n: "03",
        title: { es: "Adaptabilidad", en: "Adaptability" },
        body: {
          es: "No somos un proveedor. Somos un organismo vivo — una extensión creativa del equipo de marca. Entramos a la mesa antes del brief y salimos después del master entregado.",
          en: "We're not a vendor. We're a living organism — a creative extension of the brand team. We sit down before the brief and leave after the final master has shipped."
        }
      },
      {
        n: "04",
        title: { es: "Sustentabilidad", en: "Sustainability" },
        body: {
          es: "Rodajes con huella medida. Cero plástico en catering desde 2023. Talento local, crews locales, materiales reciclados. Producir sin dejar rastro también es oficio.",
          en: "Shoots with measured footprint. Zero plastic in catering since 2023. Local talent, local crews, recycled materials. Producing without leaving a trace is also craft."
        }
      },
    ],
  };

  return { projects, directors, journal, copy, VIMEO_HERO, VIMEO };
})();
