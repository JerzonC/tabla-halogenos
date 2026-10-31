// Datos completos de la Familia de los Halógenos (Grupo 17 / VIIA)
// Textos limpios y directos (sin etiquetas "Esquina superior..." ni referencias al enunciado)

const HALOGENS_DATA = [
  {
    id: "fluorine",
    number: 9,
    symbol: "F",
    name: "Flúor",
    atomicMass: "18.998 u",
    period: 2,
    group: "17 (VIIA)",
    family: "Halógeno (No metal)",
    state: "Gas a 20 °C",
    electronConfig: "[He] 2s² 2p⁵",
    electronegativity: "3.98 (Escala Pauling - El más electronegativo)",
    oxidationStates: "-1",
    colorAccent: "#d4ff47",
    gradientBg: "radial-gradient(circle at 30% 30%, rgba(212, 255, 71, 0.28), rgba(20, 28, 12, 0.92))",
    tagline: "El elemento más reactivo y electronegativo de toda la tabla periódica.",
    ionization: {
      naturalColorName: "Gas amarillo muy pálido (F₂)",
      naturalHex: "#e9ff99",
      plasmaColorName: "Naranja-rojizo intenso y destellos violeta",
      plasmaCoreHex: "#ff5e3a",
      plasmaGlowHex: "#ff2a6d",
      energyEv: "17.42 eV (1681 kJ/mol — El más alto del grupo)",
      spectralLines: [
        // Líneas reales NIST Atomic Spectra Database (F I y F II)
        { wl: 384.7, intensity: 0.45, species: "F II" },
        { wl: 402.5, intensity: 0.55, species: "F II" },
        { wl: 410.3, intensity: 0.48, species: "F II" },
        { wl: 424.6, intensity: 0.52, species: "F II" },
        { wl: 444.7, intensity: 0.38, species: "F II" },
        { wl: 623.9, intensity: 0.82, species: "F I" },
        { wl: 634.8, intensity: 0.78, species: "F I" },
        { wl: 641.3, intensity: 0.72, species: "F I" },
        { wl: 677.4, intensity: 0.68, species: "F I" },
        { wl: 685.6, intensity: 1.00, species: "F I (Principal)" },
        { wl: 690.2, intensity: 0.86, species: "F I" },
        { wl: 703.7, intensity: 0.95, species: "F I (Intensa)" },
        { wl: 712.8, intensity: 0.74, species: "F I" },
        { wl: 731.1, intensity: 0.65, species: "F I" },
        { wl: 739.8, intensity: 0.88, species: "F I" },
        { wl: 748.9, intensity: 0.58, species: "F I" }
      ],
      explanation: "Al aplicar alto voltaje al gas flúor (F₂) a baja presión, sus electrones en el subnivel 2p⁵ absorben energía y saltan a niveles 3s y 3p. Al regresar a su estado basal emiten fotones principalmente en la región rojo-naranja brillante (685.6 nm y 703.7 nm), transformando su tenue color amarillo natural en un plasma rojizo-anaranjado incandescente."
    },

    academicCompounds: {
      oxidosAcidos: "Difluoruro de oxígeno (OF₂) y Difluoruro de dioxígeno (O₂F₂) — compuestos oxigenados donde el flúor actúa con estado -1 por ser más electronegativo que el oxígeno.",
      oxidosBasicos: "No forma óxidos básicos por su carácter no metálico; al combinarse con metales forma sales halogenadas (fluoruros) como CaF₂ o NaF.",
      acidosBinarios: "Ácido fluorhídrico (HF(ac)) — ácido binario capaz de atacar y disolver el vidrio (SiO₂).",
      acidosTernarios: "Ácido hipofluórico (HOF) — el único oxoácido conocido del flúor, altamente reactivo."
    },

    corners: {
      // Superior Derecha: Características del elemento
      topRight: {
        cornerLabel: "Características del Elemento",
        title: "Características y Compuestos Químicos",
        subtitle: "Propiedades atómicas, clasificación periódica, óxidos y ácidos",
        badge: "Propiedades Químicas",
        imageType: "svg-atom",
        imageCaption: "Estructura electrónica del Flúor (2, 7) y reactividad química del HF",
        points: [
          "Clasificación periódica: Grupo 17 (VIIA), Periodo 2 — Familia de los Halógenos.",
          "Masa atómica: 18.998 u | Configuración electrónica: [He] 2s² 2p⁵ | Valencia: -1.",
          "Óxidos / Fluoruros de oxígeno: Difluoruro de oxígeno (OF₂), potente agente oxidante.",
          "Ácido binario común: Ácido fluorhídrico (HF), empleado en el grabado de cristal.",
          "Ácido ternario (Oxoácido): Ácido hipofluórico (HOF), único oxoácido aislable del flúor."
        ],
        photoUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
      },

      // Superior Izquierda: Dónde lo encontramos
      topLeft: {
        cornerLabel: "Dónde lo Encontramos",
        title: "Dónde lo Encontramos",
        subtitle: "Minerales naturales, alimentos y presencia biológica",
        badge: "Origen y Alimentos",
        imageCaption: "Cristales naturales de Fluorita (CaF₂) y fuentes alimenticias con flúor",
        points: [
          "Minerales en la corteza terrestre: Fluorita (CaF₂), Criolita (Na₃AlF₆) y Fluorapatita.",
          "Alimentos ricos en flúor: Hojas de té negro y té verde, pescados de mar (sardinas, salmón), mariscos y gelatinas.",
          "Agua y naturaleza: Presente en aguas subterráneas y en el agua potable fluorada.",
          "En el cuerpo humano: Forma parte estructural de los huesos y del esmalte dental (como fluorapatita)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
      },

      // Inferior Izquierda: Dónde lo utilizamos
      bottomLeft: {
        cornerLabel: "Dónde lo Utilizamos",
        title: "Dónde lo Utilizamos",
        subtitle: "Aplicaciones industriales, médicas y materiales cotidianos",
        badge: "Usos y Materiales",
        imageCaption: "Productos de higiene dental con fluoruro y polímeros antiadherentes de PTFE (Teflón)",
        points: [
          "Odontología y Salud: Pastas dentales, colutorios y geles con fluoruro de sodio (NaF) para prevenir la caries.",
          "Materiales y Polímeros: Fabricación de Teflón (PTFE - politetrafluoroetileno) para utensilios antiadherentes y aislantes.",
          "Industria Electrónica: Grabado de obleas de silicio para microprocesadores y gases de refrigeración.",
          "Sector Energético: Hexafluoruro de uranio (UF₆) utilizado en el procesamiento de combustible nuclear."
        ],
        photoUrl: "https://images.unsplash.com/photo-1559591937-abc3650167d5?auto=format&fit=crop&w=900&q=80"
      },

      // Inferior Derecha: Cómo se ve
      bottomRight: {
        cornerLabel: "Cómo se Ve",
        title: "Cómo se Ve el Flúor",
        subtitle: "Apariencia física real y estado de agregación",
        badge: "Aspecto Visual",
        imageCaption: "Gas flúor diatómico (F₂) amarillo pálido y cristales fluorescentes de fluorita",
        points: [
          "En estado puro (F₂): Es un gas diatómico de color amarillo muy pálido a temperatura ambiente.",
          "A bajas temperaturas (-188 °C): Se condensa formando un líquido amarillo brillante.",
          "Almacenamiento especial: Reacciona con el vidrio común, por lo que se guarda en recipientes de cuarzo, níquel o teflón.",
          "En forma mineral (Fluorita): Forma cristales cúbicos de colores intensos que brillan bajo luz ultravioleta (fluorescencia)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80"
      }
    }
  },

  {
    id: "chlorine",
    number: 17,
    symbol: "Cl",
    name: "Cloro",
    atomicMass: "35.45 u",
    period: 3,
    group: "17 (VIIA)",
    family: "Halógeno (No metal)",
    state: "Gas a 20 °C",
    electronConfig: "[Ne] 3s² 3p⁵",
    electronegativity: "3.16 (Escala Pauling)",
    oxidationStates: "-1, +1, +3, +5, +7",
    colorAccent: "#65f07d",
    gradientBg: "radial-gradient(circle at 30% 30%, rgba(101, 240, 125, 0.28), rgba(11, 29, 17, 0.92))",
    tagline: "Pilar de la potabilización del agua, la industria química y el equilibrio electrolítico humano.",
    ionization: {
      naturalColorName: "Gas amarillo-verdoso (Cl₂)",
      naturalHex: "#8ef59e",
      plasmaColorName: "Verde azulado blanquecino brillante",
      plasmaCoreHex: "#b8fff1",
      plasmaGlowHex: "#00ffa6",
      energyEv: "12.97 eV (1251 kJ/mol)",
      spectralLines: [
        // Líneas reales NIST Atomic Spectra Database (Cl I y Cl II)
        { wl: 386.1, intensity: 0.42, species: "Cl II" },
        { wl: 413.2, intensity: 0.55, species: "Cl II" },
        { wl: 434.3, intensity: 0.62, species: "Cl II" },
        { wl: 452.6, intensity: 0.78, species: "Cl I" },
        { wl: 460.1, intensity: 0.64, species: "Cl I" },
        { wl: 479.4, intensity: 1.00, species: "Cl II (Principal)" },
        { wl: 481.0, intensity: 0.92, species: "Cl II" },
        { wl: 481.9, intensity: 0.85, species: "Cl II" },
        { wl: 489.6, intensity: 0.72, species: "Cl II" },
        { wl: 507.8, intensity: 0.58, species: "Cl II" },
        { wl: 521.8, intensity: 0.94, species: "Cl II (Intensa)" },
        { wl: 542.3, intensity: 0.88, species: "Cl II" },
        { wl: 544.3, intensity: 0.70, species: "Cl II" },
        { wl: 614.0, intensity: 0.48, species: "Cl I" },
        { wl: 725.6, intensity: 0.84, species: "Cl I" },
        { wl: 741.4, intensity: 0.76, species: "Cl I" }
      ],
      explanation: "Cuando el gas cloro (Cl₂) se ioniza en un tubo de descarga eléctrica, las moléculas se disocian en iones Cl⁺ y átomos excitados. Sus transiciones electrónicas desde el nivel 3p⁵ emiten intensas líneas en el azul-cian (479.4 nm) y verde esmeralda (521.8 nm), generando un característico resplandor verde-azulado blanquecino usado en grabado por plasma de microchips."
    },

    academicCompounds: {
      oxidosAcidos: "Monóxido de dicloro (Cl₂O - anhídrido hipocloroso), Trióxido de dicloro (Cl₂O₃), Pentóxido de dicloro (Cl₂O₅) y Heptóxido de dicloro (Cl₂O₇ - anhídrido perclórico).",
      oxidosBasicos: "No forma óxidos básicos; al reaccionar con metales alcalinos y alcalinotérreos forma cloruros iónicos como NaCl, KCl y CaCl₂.",
      acidosBinarios: "Ácido clorhídrico (HCl(ac)) — ácido fuerte presente en los jugos gástricos del estómago humano.",
      acidosTernarios: "Ácido hipocloroso (HClO), Ácido cloroso (HClO₂), Ácido clórico (HClO₃) y Ácido perclórico (HClO₄)."
    },

    corners: {
      topRight: {
        cornerLabel: "Características del Elemento",
        title: "Características y Compuestos Químicos",
        subtitle: "Serie completa de anhídridos, hidrácidos y oxoácidos del cloro",
        badge: "Propiedades Químicas",
        imageCaption: "Configuración [Ne] 3s² 3p⁵ y estados de oxidación (-1, +1, +3, +5, +7)",
        points: [
          "Clasificación periódica: Grupo 17 (VIIA), Periodo 3 — Halógeno gaseoso de alta reactividad.",
          "Óxidos ácidos (Anhídridos): Cl₂O (hipocloroso), Cl₂O₃ (cloroso), Cl₂O₅ (clórico) y Cl₂O₇ (perclórico).",
          "Ácido binario común: Ácido clorhídrico o muriático (HCl), esencial en la digestión y en la industria.",
          "Ácidos ternarios (Oxoácidos): HClO (hipocloroso), HClO₂ (cloroso), HClO₃ (clórico) y HClO₄ (perclórico).",
          "Sales comunes: Cloruro de sodio (NaCl) e Hipoclorito de sodio (NaClO - blanqueador doméstico)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Dónde lo Encontramos",
        title: "Dónde lo Encontramos",
        subtitle: "Océanos, salinas naturales y alimentos de consumo diario",
        badge: "Origen y Alimentos",
        imageCaption: "Cristales de sal marina (NaCl), aceitunas, vegetales y alimentos ricos en cloruros",
        points: [
          "Océanos y Minerales: Abundante en el agua de mar (~1.9% en masa como ion Cl⁻) y en minerales como Halita (NaCl), Silvina (KCl) y Carnalita.",
          "Alimentos naturales: Sal de mesa común, algas marinas, centeno, tomates, lechuga, apio y aceitunas.",
          "Alimentos elaborados: Quesos, embutidos, panadería y conservas.",
          "En el organismo humano: Forma el ácido clorhídrico gástrico (HCl) y regula el equilibrio de líquidos celulares."
        ],
        photoUrl: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Dónde lo Utilizamos",
        title: "Dónde lo Utilizamos",
        subtitle: "Saneamiento de agua, polímeros PVC y desinfección médica",
        badge: "Usos y Materiales",
        imageCaption: "Potabilización de agua, piscinas y tuberías de policloruro de vinilo (PVC)",
        points: [
          "Potabilización y Salud Pública: Purificación de agua potable y desinfección de piscinas contra bacterias y virus.",
          "Materiales de Construcción: Fabricación de PVC (Policloruro de vinilo) para tuberías, recubrimiento de cables, pisos y perfiles de ventanas.",
          "Hogar y Limpieza: Desinfectantes y blanqueadores a base de hipoclorito de sodio (NaClO) y ácido muriático (HCl).",
          "Medicina y Farmacia: Interviene en la síntesis de la mayoría de fármacos y en el suero fisiológico (NaCl al 0.9%)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Cómo se Ve",
        title: "Cómo se Ve el Cloro",
        subtitle: "Apariencia física del gas Cl₂ y sus sales cristalinas",
        badge: "Aspecto Visual",
        imageCaption: "Gas cloro (Cl₂) de característico color amarillo verdoso contenido en vidrio",
        points: [
          "En estado puro (Cl₂): Es un gas denso de color amarillo verdoso brillante (del griego «chloros», verde pálido).",
          "Densidad física: Es 2.5 veces más pesado que el aire.",
          "En estado líquido (-34 °C): Se condensa en un líquido claro de color ámbar amarillento.",
          "En compuestos minerales: Forma cristales cúbicos transparentes o blancos como la sal gema (Halita)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80"
      }
    }
  },

  {
    id: "bromine",
    number: 35,
    symbol: "Br",
    name: "Bromo",
    atomicMass: "79.904 u",
    period: 4,
    group: "17 (VIIA)",
    family: "Halógeno (No metal)",
    state: "Líquido a 20 °C",
    electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵",
    electronegativity: "2.96 (Escala Pauling)",
    oxidationStates: "-1, +1, +3, +5, +7",
    colorAccent: "#ff6e40",
    gradientBg: "radial-gradient(circle at 30% 30%, rgba(255, 110, 64, 0.30), rgba(33, 14, 10, 0.94))",
    tagline: "El único no metal líquido a temperatura ambiente, reconocido por sus densos vapores rojizos.",
    ionization: {
      naturalColorName: "Líquido rojo-marrón y vapor ámbar (Br₂)",
      naturalHex: "#d94f26",
      plasmaColorName: "Rosa-durazno luminoso con halo violeta-azulado",
      plasmaCoreHex: "#ff94b8",
      plasmaGlowHex: "#ff4d6d",
      energyEv: "11.81 eV (1140 kJ/mol)",
      spectralLines: [
        // Líneas reales NIST Atomic Spectra Database (Br I y Br II)
        { wl: 398.6, intensity: 0.50, species: "Br II" },
        { wl: 422.3, intensity: 0.58, species: "Br II" },
        { wl: 436.5, intensity: 0.66, species: "Br II" },
        { wl: 447.7, intensity: 0.85, species: "Br I" },
        { wl: 454.2, intensity: 0.62, species: "Br I" },
        { wl: 470.5, intensity: 0.98, species: "Br II (Intensa)" },
        { wl: 478.5, intensity: 0.90, species: "Br II" },
        { wl: 481.6, intensity: 0.82, species: "Br II" },
        { wl: 518.2, intensity: 0.72, species: "Br II" },
        { wl: 523.8, intensity: 0.68, species: "Br II" },
        { wl: 533.2, intensity: 0.80, species: "Br II" },
        { wl: 585.2, intensity: 0.64, species: "Br I" },
        { wl: 614.9, intensity: 0.92, species: "Br I" },
        { wl: 635.1, intensity: 1.00, species: "Br I (Principal)" },
        { wl: 655.9, intensity: 0.78, species: "Br I" },
        { wl: 663.2, intensity: 0.74, species: "Br I" },
        { wl: 700.5, intensity: 0.65, species: "Br I" },
        { wl: 734.8, intensity: 0.58, species: "Br I" }
      ],
      explanation: "En estado neutro el vapor de bromo absorbe luz azul-verde y por eso se ve rojizo oscuro. Sin embargo, al ser ionizado por alto voltaje, los electrones 4p⁵ excitados emiten una combinación de líneas azules (470.5 nm) y rojas-anaranjadas (614.9 y 635.1 nm), produciendo un plasma brillante de color rosa-salmón o durazno con bordes violáceos."
    },

    academicCompounds: {
      oxidosAcidos: "Monóxido de dibromo (Br₂O), Dióxido de bromo (BrO₂) y Trióxido de dibromo (Br₂O₃) — anhídridos ácidos.",
      oxidosBasicos: "No forma óxidos básicos; con metales alcalinos produce sales como KBr, NaBr y AgBr.",
      acidosBinarios: "Ácido bromhídrico (HBr(ac)) — ácido mineral muy fuerte, de mayor acidez que el HCl.",
      acidosTernarios: "Ácido hipobromoso (HBrO), Ácido bromoso (HBrO₂), Ácido brómico (HBrO₃) y Ácido perbrómico (HBrO₄)."
    },

    corners: {
      topRight: {
        cornerLabel: "Características del Elemento",
        title: "Características y Compuestos Químicos",
        subtitle: "Único no metal líquido y formador de hidrácidos y oxoácidos bromados",
        badge: "Propiedades Químicas",
        imageCaption: "Átomo de Bromo (Z=35) y equilibrio líquido-vapor de Br₂",
        points: [
          "Clasificación periódica: Grupo 17 (VIIA), Periodo 4 — Único no metal líquido a presión y temperatura estándar.",
          "Óxidos ácidos (Anhídridos): Monóxido de dibromo (Br₂O), Trióxido de dibromo (Br₂O₃) y Pentóxido de dibromo (Br₂O₅).",
          "Ácido binario común: Ácido bromhídrico (HBr), ácido mineral fuerte empleado en síntesis química.",
          "Ácidos ternarios (Oxoácidos): Ácido hipobromoso (HBrO), Ácido bromoso (HBrO₂), Ácido brómico (HBrO₃) y Ácido perbrómico (HBrO₄).",
          "Volatilidad: Hierve a 58.8 °C, emitiendo vapores rojizos densos a temperatura ambiente."
        ],
        photoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Dónde lo Encontramos",
        title: "Dónde lo Encontramos",
        subtitle: "Salmueras marinas, lagos salados y alimentos del mar",
        badge: "Origen y Alimentos",
        imageCaption: "Aguas hipersalinas del Mar Muerto, mariscos, frutos secos y algas",
        points: [
          "Salmueras y Océanos: Se extrae del agua de mar, del Mar Muerto y de pozos de salmuera subterráneos.",
          "Minerales naturales: Bromargirita (AgBr) y depósitos salinos evaporíticos.",
          "Alimentos donde se encuentra: Mariscos (camarones, ostiones), pescados marinos, algas, frutos secos (nueces, almendras) y cereales integrales.",
          "Función biológica: Oligoelemento necesario para el desarrollo de las membranas basales de colágeno tipo IV."
        ],
        photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Dónde lo Utilizamos",
        title: "Dónde lo Utilizamos",
        subtitle: "Retardantes de fuego en electrónica, fotografía y tratamiento de agua",
        badge: "Usos y Materiales",
        imageCaption: "Circuitos electrónicos con retardantes de llama bromados y películas de AgBr",
        points: [
          "Seguridad Electrónica: Retardantes de llama bromados integrados en tarjetas madre de computadoras, carcasas plásticas y cables.",
          "Fotografía Clásica y Cine: Cristales fotosensibles de bromuro de plata (AgBr) en películas fotográficas.",
          "Tratamiento de Agua Caliente: Tabletas desinfectantes de bromo para spas y piscinas climatizadas.",
          "Uso Farmacéutico: Bromuro de ipratropio en inhaladores broncodilatadores y bromuro de potasio (KBr) en medicina veterinaria."
        ],
        photoUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Cómo se Ve",
        title: "Cómo se Ve el Bromo",
        subtitle: "Líquido denso rojo-marrón oscuro con vapores color ámbar",
        badge: "Aspecto Visual",
        imageCaption: "Ampolla de vidrio borosilicato sellada con bromo líquido oscuro y vapor rojizo",
        points: [
          "En estado puro (Br₂): Es un líquido móvil y muy denso (3.12 g/cm³), de color rojo oscuro o pardo rojizo.",
          "Vapor característico: Desprende de forma continua un vapor denso de color rojo-anaranjado.",
          "En estado sólido (-7.2 °C): Forma cristales rojizos oscuros con un ligero brillo metálico.",
          "Conservación: Se resguarda en ampollas de vidrio selladas con fuego para contener sus vapores."
        ],
        photoUrl: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80"
      }
    }
  },

  {
    id: "iodine",
    number: 53,
    symbol: "I",
    name: "Yodo",
    atomicMass: "126.904 u",
    period: 5,
    group: "17 (VIIA)",
    family: "Halógeno (No metal)",
    state: "Sólido a 20 °C",
    electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵",
    electronegativity: "2.66 (Escala Pauling)",
    oxidationStates: "-1, +1, +3, +5, +7",
    colorAccent: "#c06cff",
    gradientBg: "radial-gradient(circle at 30% 30%, rgba(192, 108, 255, 0.30), rgba(26, 12, 38, 0.94))",
    tagline: "Cristales oscuros con brillo metálico que subliman en un intenso vapor violeta; esencial para la glándula tiroides.",
    ionization: {
      naturalColorName: "Cristales negros y vapor violeta (I₂)",
      naturalHex: "#a64dff",
      plasmaColorName: "Dorado-amarillo central con halo púrpura-magenta",
      plasmaCoreHex: "#ffe066",
      plasmaGlowHex: "#b84dff",
      energyEv: "10.45 eV (1008 kJ/mol)",
      spectralLines: [
        // Líneas reales NIST Atomic Spectra Database (I I y I II)
        { wl: 412.8, intensity: 0.52, species: "I II" },
        { wl: 445.3, intensity: 0.64, species: "I II" },
        { wl: 466.6, intensity: 0.80, species: "I II" },
        { wl: 486.2, intensity: 0.72, species: "I I" },
        { wl: 511.9, intensity: 0.92, species: "I I (Intensa)" },
        { wl: 516.1, intensity: 0.78, species: "I II" },
        { wl: 533.8, intensity: 0.84, species: "I II" },
        { wl: 540.7, intensity: 0.76, species: "I II" },
        { wl: 546.4, intensity: 0.90, species: "I II" },
        { wl: 562.5, intensity: 0.82, species: "I II" },
        { wl: 576.4, intensity: 1.00, species: "I I (Principal Dorada)" },
        { wl: 589.4, intensity: 0.95, species: "I I (Intensa)" },
        { wl: 608.2, intensity: 0.88, species: "I I" },
        { wl: 629.4, intensity: 0.68, species: "I I" },
        { wl: 658.5, intensity: 0.72, species: "I I" },
        { wl: 695.8, intensity: 0.60, species: "I I" },
        { wl: 740.2, intensity: 0.55, species: "I I" }
      ],
      explanation: "El vapor de yodo es famoso porque al calentarse es violeta, pero al ser ionizado en un tubo de descarga eléctrica emite una sorprendente columna luminosa de color amarillo-dorado pálido en el centro rodeada de un halo magenta/púrpura. Gracias a su baja energía de ionización (10.45 eV), también se investiga como propulsor de plasma iónico para satélites espaciales."
    },

    academicCompounds: {
      oxidosAcidos: "Pentóxido de diyodo (I₂O₅ - anhídrido yódico, sólido cristalino estable), Tetraóxido de diyodo (I₂O₄) y Nonaóxido de tetrayodo (I₄O₉).",
      oxidosBasicos: "No forma óxidos básicos; forma yoduros iónicos con metales como el Yoduro de potasio (KI) y Yoduro de sodio (NaI).",
      acidosBinarios: "Ácido yodhídrico (HI(ac)) — el ácido binario (hidrácido) estable más fuerte del grupo de los halógenos.",
      acidosTernarios: "Ácido hipoyodoso (HIO), Ácido yodoso (HIO₂), Ácido yódico (HIO₃) y Ácido peryódico (HIO₄ / H₅IO₆)."
    },

    corners: {
      topRight: {
        cornerLabel: "Características del Elemento",
        title: "Características y Compuestos Químicos",
        subtitle: "Sublimación violeta, pentóxido de diyodo y oxoácidos del yodo",
        badge: "Propiedades Químicas",
        imageCaption: "Estructura cristalina del Yodo (Z=53) y sublimación a gas violeta",
        points: [
          "Clasificación periódica: Grupo 17 (VIIA), Periodo 5 — Halógeno sólido cristalino.",
          "Óxidos ácidos (Anhídridos): Pentóxido de diyodo (I₂O₅), anhídrido ácido sólido que con agua produce ácido yódico.",
          "Ácido binario común: Ácido yodhídrico (HI), el hidrácido más fuerte debido a su gran radio atómico.",
          "Ácidos ternarios (Oxoácidos): Ácido hipoyodoso (HIO), Ácido yódico (HIO₃) y Ácido peryódico (HIO₄ / H₅IO₆).",
          "Prueba química clásica: Se tiñe de color azul-violeta oscuro al contacto con el almidón."
        ],
        photoUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Dónde lo Encontramos",
        title: "Dónde lo Encontramos",
        subtitle: "Algas marinas, caliche del desierto y alimentos ricos en yodo",
        badge: "Origen y Alimentos",
        imageCaption: "Algas marinas (Kelp/Nori), sal yodada, pescados de mar, huevos y lácteos",
        points: [
          "Fuentes Naturales y Minerales: Depósitos de caliche en el Desierto de Atacama (Chile) en minerales como Lautarita (Ca(IO₃)₂), y en algas marinas pardas (Kelp).",
          "Alimentos ricos en yodo: Sal yodada, algas marinas (nori, wakame, kombu), bacalao, atún, camarones, huevos, leche y yogur.",
          "En el cuerpo humano: Nutriente indispensable para que la glándula tiroides produzca las hormonas T3 y T4 que regulan el metabolismo."
        ],
        photoUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Dónde lo Utilizamos",
        title: "Dónde lo Utilizamos",
        subtitle: "Antisépticos quirúrgicos, medios de contraste y pantallas LCD",
        badge: "Usos y Materiales",
        imageCaption: "Antiséptico quirúrgico de yodopovidona, tomografías médicas y pantallas polarizadas",
        points: [
          "Medicina y Cirugía: Antisépticos y desinfectantes para la piel (Yodopovidona / Betadine y solución de Lugol).",
          "Diagnóstico Médico: Medios de contraste radiopacos inyectables para tomografías (TAC) y estudios vasculares.",
          "Tecnología y Materiales: Filtros polarizadores de pantallas LCD/OLED (celulares, monitores y televisores) y lámparas halógenas.",
          "Meteorología y Protección Nuclear: Yoduro de plata (AgI) para sembrar nubes y comprimidos de yoduro de potasio (KI) para proteger la tiroides."
        ],
        photoUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Cómo se Ve",
        title: "Cómo se Ve el Yodo",
        subtitle: "Escamas negro-azuladas con lustre metálico y vapor violeta",
        badge: "Aspecto Visual",
        imageCaption: "Cristales de yodo con brillo metálico sublimando en vapor púrpura dentro de un matraz",
        points: [
          "En estado sólido (I₂): Forma escamas o cristales rómbicos de color negro-azulado o gris oscuro con brillo metálico.",
          "En fase de vapor (Sublimación): Al calentarse pasa de sólido a un llamativo gas color violeta intenso (del griego «ioeides», violeta).",
          "En disolución: En solución acuosa con KI se observa color ámbar-marrón, y en solventes orgánicos adquiere un tono púrpura brillante."
        ],
        photoUrl: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=900&q=80"
      }
    }
  },

  {
    id: "astatine",
    number: 85,
    symbol: "At",
    name: "Astato",
    atomicMass: "[210] u",
    period: 6,
    group: "17 (VIIA)",
    family: "Halógeno / Metaloide radiactivo",
    state: "Sólido radiactivo a 20 °C",
    electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    electronegativity: "2.20 (Escala Pauling)",
    oxidationStates: "-1, +1, +3, +5, +7",
    colorAccent: "#00e5ff",
    gradientBg: "radial-gradient(circle at 30% 30%, rgba(0, 229, 255, 0.28), rgba(10, 26, 36, 0.94))",
    tagline: "El elemento natural más escaso de la Tierra: existe menos de 1 gramo en toda la corteza terrestre en un momento dado.",
    ionization: {
      naturalColorName: "Sólido metálico oscuro radiactivo",
      naturalHex: "#4da6ff",
      plasmaColorName: "Azul Cherenkov y emisión UV-violeta",
      plasmaCoreHex: "#ccf9ff",
      plasmaGlowHex: "#00d9ff",
      energyEv: "9.31 eV (899 kJ/mol — Medido por láser en CERN)",
      spectralLines: [
        // Espectro láser RIMS CERN ISOLDE + transiciones ópticas calculadas
        { wl: 396.2, intensity: 0.75, species: "At I" },
        { wl: 415.4, intensity: 0.96, species: "At I (Resonancia)" },
        { wl: 438.0, intensity: 0.62, species: "At II" },
        { wl: 448.1, intensity: 0.88, species: "At I" },
        { wl: 472.5, intensity: 0.70, species: "At II" },
        { wl: 482.3, intensity: 1.00, species: "At I (Principal)" },
        { wl: 508.6, intensity: 0.65, species: "At I" },
        { wl: 535.2, intensity: 0.82, species: "At I" },
        { wl: 578.4, intensity: 0.58, species: "At I" },
        { wl: 619.0, intensity: 0.68, species: "At I" },
        { wl: 668.5, intensity: 0.54, species: "At I" }
      ],
      explanation: "Por su extrema rareza, el espectro del Astato fue medido en el CERN usando espectroscopía de ionización por resonancia láser sobre átomos individuales. Su energía de ionización es de 9.31 eV y su intensa radiactividad alfa auto-ioniza el medio circundante produciendo un resplandor azulado-violeta."
    },

    academicCompounds: {
      oxidosAcidos: "Especies oxidadas en trazas radiactivas (AtO⁻, AtO₃⁻) identificadas mediante radioquímica en solución acuosa.",
      oxidosBasicos: "Presenta carácter anfótero/metaloide parcial: puede formar cationes (At⁺, AtO⁺) además del anión astaturo (At⁻).",
      acidosBinarios: "Ácido astathídrico (HAt) — hidrácido muy inestable debido a la baja electronegatividad del astato.",
      acidosTernarios: "Ácido hipoastatoso (HAtO), Ácido astatoso (HAtO₂), Ácido astático (HAtO₃) y Ácido perastático (HAtO₄) en trazas."
    },

    corners: {
      topRight: {
        cornerLabel: "Características del Elemento",
        title: "Características y Compuestos Químicos",
        subtitle: "Halógeno pesado radiactivo con comportamiento de metaloide",
        badge: "Propiedades Químicas",
        imageCaption: "Átomo radiactivo de Astato-211 (Z=85) emisor de partículas alfa",
        points: [
          "Clasificación periódica: Grupo 17 (VIIA), Periodo 6 — Halógeno radiactivo con propiedades entre no metal y metaloide.",
          "Vida media: Su isótopo más estable es el Astato-210 (8.1 horas), y el de mayor utilidad médica es el Astato-211 (7.2 horas).",
          "Ácido binario: Ácido astathídrico (HAt), donde el hidrógeno y el astato poseen electronegatividades muy similares.",
          "Ácidos ternarios y oxoaniones: Forma especies hipoastatito (AtO⁻) y astatato (AtO₃⁻) similares a las del yodo.",
          "Compuestos interhalógenos: Forma monoioduro de astato (AtI) y monobromuro de astato (AtBr)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Dónde lo Encontramos",
        title: "Dónde lo Encontramos",
        subtitle: "Minerales de uranio en desintegración y ciclotrones",
        badge: "Origen y Síntesis",
        imageCaption: "Minerales de uranio (Pechblenda) y aceleradores de partículas tipo ciclotrón",
        points: [
          "En la Naturaleza: Se forma en trazas microscópicas durante la desintegración radiactiva natural del Uranio y el Torio.",
          "Escasez extrema: En toda la corteza terrestre hay menos de 1 gramo de astato natural en cualquier instante.",
          "En Alimentos: No se encuentra en los alimentos ni en el agua debido a su corta vida media.",
          "Obtención en Laboratorio: Se produce bombardeando Bismuto-209 con partículas alfa (⁴He) en un ciclotrón."
        ],
        photoUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Dónde lo Utilizamos",
        title: "Dónde lo Utilizamos",
        subtitle: "Radioinmunoterapia dirigida contra el cáncer (Terapia Alfa)",
        badge: "Aplicaciones Médicas",
        imageCaption: "Oncología nuclear: anticuerpos marcados con Astato-211 contra células tumorales",
        points: [
          "Medicina Nuclear (Terapia Alfa Dirigida): El isótopo Astato-211 (²¹¹At) se acopla a anticuerpos monoclonales para destruir células cancerosas sin dañar el tejido sano vecino.",
          "Oncología Avanzada: Se emplea en estudios clínicos para tumores cerebrales, cáncer de ovario y leucemias.",
          "Investigación Radioquímica: Estudio de radiofármacos de alta precisión y corto alcance."
        ],
        photoUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Cómo se Ve",
        title: "Cómo se Ve el Astato",
        subtitle: "Apariencia física de un sólido metálico oscuro y radiactivo",
        badge: "Aspecto Visual",
        imageCaption: "Representación del Astato como un sólido metálico oscuro incandescente por su calor nuclear",
        points: [
          "Calor radiactivo propio: Una muestra macroscópica visible se vaporizaría de inmediato debido al intenso calor generado por su propia radiactividad.",
          "Apariencia física: De acuerdo con sus propiedades periódicas y cuánticas, es un sólido negro o gris muy oscuro con brillo francamente metálico.",
          "En el laboratorio: Se manipula en disoluciones ultradiluidas alojadas en viales blindados y se monitorea mediante detectores de radiación."
        ],
        photoUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
      }
    }
  },

  {
    id: "tennessine",
    number: 117,
    symbol: "Ts",
    name: "Teneso",
    atomicMass: "[294] u",
    period: 7,
    group: "17 (VIIA)",
    family: "Halógeno superpesado sintético",
    state: "Sólido sintético (predicho)",
    electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    electronegativity: "~1.8 (Predicción relativista)",
    oxidationStates: "+1, +3, -1 (predichos)",
    colorAccent: "#ff4db8",
    gradientBg: "radial-gradient(circle at 30% 30%, rgba(255, 77, 184, 0.28), rgba(34, 10, 28, 0.94))",
    tagline: "El elemento más pesado del Grupo 17, sintetizado átomo por átomo en aceleradores de partículas.",
    ionization: {
      naturalColorName: "Sólido superpesado de aspecto metálico",
      naturalHex: "#ff80cc",
      plasmaColorName: "Destello magenta-violeta relativista (Predicción cuántica)",
      plasmaCoreHex: "#ffd6f0",
      plasmaGlowHex: "#ff1a9c",
      energyEv: "~7.7 eV (743 kJ/mol — Predicción relativista)",
      spectralLines: [
        // Transiciones electrónicas relativistas Dirac-Fock (7s²7p⁵ -> 7s²7p⁴8s)
        { wl: 392.0, intensity: 0.72, species: "Ts II (Teórica)" },
        { wl: 410.5, intensity: 0.94, species: "Ts I (7p -> 8s)" },
        { wl: 442.8, intensity: 0.68, species: "Ts I" },
        { wl: 465.2, intensity: 1.00, species: "Ts I (Principal)" },
        { wl: 502.4, intensity: 0.64, species: "Ts II" },
        { wl: 555.0, intensity: 0.85, species: "Ts I" },
        { wl: 604.6, intensity: 0.74, species: "Ts I" },
        { wl: 645.3, intensity: 0.92, species: "Ts I (Intensa)" },
        { wl: 708.1, intensity: 0.60, species: "Ts I" }
      ],
      explanation: "En el Teneso (Z=117), los electrones internos se mueven a velocidades cercanas a la de la luz (efectos relativistas), lo que divide el subnivel 7p y reduce drásticamente su energía de ionización a ~7.7 eV. Al ionizarse en el haz del acelerador, sus transiciones electrónicas calculadas emiten destellos en el violeta, azul y rojo."
    },

    academicCompounds: {
      oxidosAcidos: "Compuestos teóricos estudiados por química cuántica relativista; prefiere estados de oxidación positivos (+1 y +3).",
      oxidosBasicos: "Por su marcado carácter metálico relativista, sus óxidos teóricos (Ts₂O, Ts₂O₃) presentarían carácter básico o anfótero.",
      acidosBinarios: "Hidruro de teneso (HTs) — el enlace es tan polarizado hacia el hidrógeno que se comporta más como un hidruro metálico que como un hidrácido.",
      acidosTernarios: "No forma oxoácidos estables debido a su vida media de milisegundos (~51 ms para ²⁹⁴Ts)."
    },

    corners: {
      topRight: {
        cornerLabel: "Características del Elemento",
        title: "Características y Compuestos Químicos",
        subtitle: "Efectos relativistas en el elemento superpesado 117",
        badge: "Propiedades Químicas",
        imageCaption: "Átomo superpesado de Teneso (Z=117) con 7 niveles de energía",
        points: [
          "Clasificación periódica: Grupo 17 (VIIA), Periodo 7, Bloque p — Elemento superpesado sintético reconocido por la IUPAC en 2016.",
          "Isótopos sintetizados: Teneso-294 (vida media ~51 milisegundos) y Teneso-293 (vida media ~22 milisegundos).",
          "Comportamiento relativista: Debido a la alta velocidad de sus electrones internos, muestra propiedades de metal o metaloide post-transición.",
          "Compuesto binario: Hidruro de teneso (HTs), donde el teneso prefiere actuar con estado +1 o +3."
        ],
        photoUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Dónde lo Encontramos",
        title: "Dónde lo Encontramos",
        subtitle: "Creado exclusivamente en aceleradores de iones pesados",
        badge: "Síntesis Nuclear",
        imageCaption: "Acelerador de partículas donde se fusionan núcleos de Calcio-48 y Berkelio-249",
        points: [
          "Elemento 100% sintético: No se encuentra en la corteza terrestre, océanos ni alimentos.",
          "Lugar de creación: Sintetizado por la colaboración entre el instituto JINR (Dubná) y el Laboratorio Nacional de Oak Ridge (Tennessee, EE. UU.).",
          "Reacción nuclear: Se obtiene fusionando un haz de iones de Calcio-48 (²⁰Ca) contra un blanco de Berkelio-249 (⁹⁷Bk)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Dónde lo Utilizamos",
        title: "Dónde lo Utilizamos",
        subtitle: "Investigación nuclear y exploración de la «Isla de Estabilidad»",
        badge: "Investigación Científica",
        imageCaption: "Detectores de silicio de alta precisión para registrar cadenas de desintegración alfa",
        points: [
          "Física Nuclear de Frontera: Se utiliza para estudiar la estructura de los núcleos superpesados y comprobar modelos de física cuántica relativista.",
          "Exploración de la «Isla de Estabilidad»: Sus productos de desintegración demostraron mayor estabilidad nuclear en elementos superpesados.",
          "Desarrollo Tecnológico: Impulsa la creación de detectores de radiación ultrarrápidos y blancos isotópicos."
        ],
        photoUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Cómo se Ve",
        title: "Cómo se Ve el Teneso",
        subtitle: "Apariencia metálica predicha y detección atómica",
        badge: "Aspecto Visual",
        imageCaption: "Visualización de colisión nuclear y apariencia metálica gris plateada predicha",
        points: [
          "Observación en laboratorio: Se identifica átomo por átomo a través de las señales de desintegración alfa en detectores de silicio.",
          "Apariencia física predicha: Sólido denso de aspecto metálico, color gris oscuro plateado.",
          "Punto de fusión estimado: Entre 350 °C y 550 °C, siguiendo la tendencia ascendente del Grupo 17."
        ],
        photoUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80"
      }
    }
  }
];
