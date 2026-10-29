// Datos completos de la Familia de los Halógenos (Grupo 17 / VIIA)
// Incluye todos los requisitos del Trabajo Especial + las 4 esquinas interactivas con imágenes

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

    // Requerimientos académicos específicos del Trabajo Especial
    academicCompounds: {
      oxidosAcidos: "Difluoruro de oxígeno (OF₂) y Difluoruro de dioxígeno (O₂F₂) — técnicamente fluoruros de oxígeno debido a que el flúor es más electronegativo que el oxígeno.",
      oxidosBasicos: "No forma óxidos básicos (es un no metal altamente electronegativo; reacciona con metales formando sales halogenadas como CaF₂ o NaF).",
      acidosBinarios: "Ácido fluorhídrico (HF(ac)) — ácido débil pero extremadamente corrosivo capaz de disolver el vidrio (SiO₂).",
      acidosTernarios: "Ácido hipofluórico (HOF) — el único oxoácido conocido del flúor, muy inestable a temperatura ambiente."
    },

    // LAS 4 ESQUINAS INTERACTIVAS
    corners: {
      // Esquina Superior Derecha: Características del elemento
      topRight: {
        cornerLabel: "Esquina Superior Derecha",
        title: "Características y Compuestos Químicos",
        subtitle: "Propiedades atómicas, clasificación y ácidos/óxidos",
        badge: "Característica Química",
        imageType: "svg-atom",
        imageCaption: "Estructura electrónica del Flúor (2, 7) y matraz de reacción con HF",
        points: [
          "Clasificación: Grupo 17 (VIIA), Periodo 2 — Familia de los Halógenos.",
          "Masa atómica: 18.998 u | Configuración: [He] 2s² 2p⁵ | Estado de oxidación: -1.",
          "Óxidos ácidos / Fluoruros: Difluoruro de oxígeno (OF₂), potente oxidante.",
          "Ácido binario común: Ácido fluorhídrico (HF), usado para grabar vidrio.",
          "Ácido ternario (Oxoácido): Ácido hipofluórico (HOF), único oxoácido aislable del flúor."
        ],
        photoUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
      },

      // Esquina Superior Izquierda: Dónde lo encontramos
      topLeft: {
        cornerLabel: "Esquina Superior Izquierda",
        title: "Dónde lo Encontramos",
        subtitle: "Minerales naturales, alimentos y fuentes biológicas",
        badge: "Origen y Alimentos",
        imageCaption: "Cristales naturales de Fluorita (CaF₂) y fuentes alimenticias ricas en flúor",
        points: [
          "Minerales en la corteza terrestre: Fluorita (CaF₂), Criolita (Na₃AlF₆) y Fluorapatita.",
          "Alimentos ricos en flúor: Té negro y té verde, pescados de mar (sardinas, salmón), mariscos y gelatinas.",
          "Agua potable y suelos: Presente de forma natural en aguas subterráneas y agua potable fluorada.",
          "En el cuerpo humano: Se concentra en los huesos y en el esmalte dental (como fluorapatita)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80"
      },

      // Esquina Inferior Izquierda: Dónde lo utilizamos
      bottomLeft: {
        cornerLabel: "Esquina Inferior Izquierda",
        title: "Dónde lo Utilizamos",
        subtitle: "Aplicaciones industriales, médicas y materiales cotidianos",
        badge: "Usos y Materiales",
        imageCaption: "Higiene dental con fluoruro de sodio y recubrimientos antiadherentes de PTFE (Teflón)",
        points: [
          "Odontología y Salud: Pastas dentales, enjuagues bucales y geles con fluoruro de sodio (NaF) contra las caries.",
          "Materiales y Polímeros: Fabricación de Teflón (PTFE - politetrafluoroetileno) para sartenes antiadherentes y trajes espaciales.",
          "Industria tecnológica: Grabado de obleas de silicio (microchips) con ácido fluorhídrico y gases refrigerantes.",
          "Energía Nuclear: Hexafluoruro de uranio (UF₆) empleado en el enriquecimiento de combustible nuclear."
        ],
        photoUrl: "https://images.unsplash.com/photo-1559591937-abc3650167d5?auto=format&fit=crop&w=900&q=80"
      },

      // Esquina Inferior Derecha: Cómo se ve
      bottomRight: {
        cornerLabel: "Esquina Inferior Derecha",
        title: "Cómo se Ve el Flúor",
        subtitle: "Apariencia física real y estado de agregación",
        badge: "Aspecto Visual",
        imageCaption: "Gas flúor diatómico (F₂) amarillo pálido encerrado en ampolla especial y mineral fluorita",
        points: [
          "En estado puro (F₂): Es un gas diatómico de color amarillo muy pálido a temperatura ambiente.",
          "A bajas temperaturas (-188 °C): Se condensa en un líquido amarillo brillante.",
          "Peligrosidad visual: Reacciona tan violentamente con el vidrio común que debe almacenarse en recipientes de cuarzo, níquel o teflón.",
          "En mineral (Fluorita): Forma cristales cúbicos translúcidos que brillan bajo luz ultravioleta (de ahí proviene la palabra «fluorescencia»)."
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
    tagline: "Pilar de la potabilización del agua, la química industrial y el equilibrio electrolítico humano.",

    academicCompounds: {
      oxidosAcidos: "Monóxido de dicloro (Cl₂O - anhídrido hipocloroso), Trióxido de dicloro (Cl₂O₃), Pentóxido de dicloro (Cl₂O₅) y Heptóxido de dicloro (Cl₂O₇ - anhídrido perclórico).",
      oxidosBasicos: "No forma óxidos básicos por ser no metal; con metales alcalinos y alcalinotérreos forma cloruros iónicos fundamentales como NaCl, KCl y CaCl₂.",
      acidosBinarios: "Ácido clorhídrico (HCl(ac)) — ácido fuerte presente en los jugos gástricos del estómago humano.",
      acidosTernarios: "Ácido hipocloroso (HClO), Ácido cloroso (HClO₂), Ácido clórico (HClO₃) y Ácido perclórico (HClO₄)."
    },

    corners: {
      topRight: {
        cornerLabel: "Esquina Superior Derecha",
        title: "Características y Compuestos Químicos",
        subtitle: "Familia completa de anhídridos, hidrácidos y oxoácidos",
        badge: "Característica Química",
        imageCaption: "Configuración [Ne] 3s² 3p⁵ y serie completa de valencias (-1, +1, +3, +5, +7)",
        points: [
          "Clasificación: Grupo 17 (VIIA), Periodo 3 — Halógeno gaseoso de olor penetrante.",
          "Óxidos ácidos (Anhídridos): Cl₂O (hipocloroso), Cl₂O₃ (cloroso), Cl₂O₅ (clórico) y Cl₂O₇ (perclórico).",
          "Ácido binario común: Ácido clorhídrico o muriático (HCl), indispensable en la digestión y la industria.",
          "Ácidos ternarios (Oxoácidos): HClO (hipocloroso), HClO₂ (cloroso), HClO₃ (clórico) y HClO₄ (perclórico).",
          "Sales comunes: Cloruro de sodio (NaCl) e Hipoclorito de sodio (NaClO - lejía/cloro doméstico)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Esquina Superior Izquierda",
        title: "Dónde lo Encontramos",
        subtitle: "Océanos, salinas naturales y alimentos de consumo diario",
        badge: "Origen y Alimentos",
        imageCaption: "Cristales de sal marina (NaCl), aceitunas, apio y alimentos ricos en iones cloruro",
        points: [
          "Océanos y Minas: Abunda en el agua de mar (~1.9% en masa como ion Cl⁻) y en minerales evaporíticos como Halita (NaCl), Silvina (KCl) y Carnalita.",
          "Alimentos naturales: Sal de mesa común, algas marinas, centeno, tomates, lechuga, apio y aceitunas.",
          "Alimentos procesados: Quesos madurados, embutidos, panadería y conservas en salmuera.",
          "En el organismo humano: En el ácido gástrico estomacal (HCl) y regulando la presión osmótica celular."
        ],
        photoUrl: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Esquina Inferior Izquierda",
        title: "Dónde lo Utilizamos",
        subtitle: "Saneamiento de agua, plásticos PVC y desinfección",
        badge: "Usos y Materiales",
        imageCaption: "Potabilización de agua, piscinas y tuberías de policloruro de vinilo (PVC)",
        points: [
          "Potabilización y Salud Pública: Desinfección de agua potable y tratamiento de albercas para eliminar bacterias y virus.",
          "Materiales de Construcción: Producción de PVC (Policloruro de vinilo) para tuberías, cables eléctricos, pisos y ventanas.",
          "Hogar y Limpieza: Blanqueadores y desinfectantes a base de hipoclorito de sodio (NaClO) y ácido muriático (HCl).",
          "Industria Farmacéutica: Síntesis de más del 80% de los medicamentos modernos y suero fisiológico (NaCl al 0.9%)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Esquina Inferior Derecha",
        title: "Cómo se Ve el Cloro",
        subtitle: "Apariencia física del gas Cl₂ y sus sales cristalinas",
        badge: "Aspecto Visual",
        imageCaption: "Gas cloro (Cl₂) de característico color amarillo verdoso dentro de un matraz esférico",
        points: [
          "En estado puro (Cl₂): Es un gas denso de color amarillo verdoso brillante (su nombre proviene del griego «chloros», que significa verde pálido).",
          "Densidad física: Es 2.5 veces más pesado que el aire, por lo que tiende a acumularse a ras del suelo.",
          "En estado líquido (-34 °C): Forma un líquido claro de color ámbar-amarillento.",
          "En sus compuestos cotidianos: Forma cristales cúbicos transparentes o blancos como la sal de roca (Halita)."
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
    tagline: "El único no metal líquido a temperatura ambiente, famoso por sus densos vapores rojizos.",

    academicCompounds: {
      oxidosAcidos: "Monóxido de dibromo (Br₂O), Dióxido de bromo (BrO₂) y Trióxido de dibromo (Br₂O₃) — anhídridos ácidos reactivos.",
      oxidosBasicos: "No forma óxidos básicos; reacciona con metales alcalinos para producir bromuros cristalinos como KBr, NaBr y AgBr.",
      acidosBinarios: "Ácido bromhídrico (HBr(ac)) — ácido mineral muy fuerte, más ácido aún que el ácido clorhídrico.",
      acidosTernarios: "Ácido hipobromoso (HBrO), Ácido bromoso (HBrO₂), Ácido brómico (HBrO₃) y Ácido perbrómico (HBrO₄)."
    },

    corners: {
      topRight: {
        cornerLabel: "Esquina Superior Derecha",
        title: "Características y Compuestos Químicos",
        subtitle: "Único no metal líquido y formador de ácidos bromados",
        badge: "Característica Química",
        imageCaption: "Átomo de Bromo (Z=35) y equilibrio líquido-vapor de Br₂",
        points: [
          "Clasificación: Grupo 17 (VIIA), Periodo 4 — Único no metal líquido a presión y temperatura estándar.",
          "Óxidos ácidos (Anhídridos): Monóxido de dibromo (Br₂O), Trióxido de dibromo (Br₂O₃) y Pentóxido de dibromo (Br₂O₅).",
          "Ácido binario común: Ácido bromhídrico (HBr), un ácido mineral sumamente fuerte empleado en síntesis orgánica.",
          "Ácidos ternarios (Oxoácidos): Ácido hipobromoso (HBrO), Ácido bromoso (HBrO₂), Ácido brómico (HBrO₃) y Ácido perbrómico (HBrO₄).",
          "Punto de ebullición: 58.8 °C, lo que provoca que emita vapores rojizos constantemente a temperatura ambiente."
        ],
        photoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Esquina Superior Izquierda",
        title: "Dónde lo Encontramos",
        subtitle: "Salmueras marinas, lagos salados y alimentos marinos",
        badge: "Origen y Alimentos",
        imageCaption: "Aguas hipersalinas del Mar Muerto, mariscos, nueces y caracoles marinos",
        points: [
          "Salmueras y Océanos: Se extrae principalmente del agua de mar, el Mar Muerto y pozos de salmuera subterráneos en EE. UU., Israel y China.",
          "Minerales raros: Bromargirita (AgBr) y evaporitas salinas asociadas a yacimientos de potasa.",
          "Alimentos donde se encuentra: Mariscos (camarones, ostiones), pescados de mar, algas, frutos secos (nueces, almendras) y cereales integrales.",
          "En la biología: Es un oligoelemento esencial para el ensamblaje del colágeno tipo IV en los tejidos animales."
        ],
        photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Esquina Inferior Izquierda",
        title: "Dónde lo Utilizamos",
        subtitle: "Retardantes de llama, fotografía clásica y electrónica",
        badge: "Usos y Materiales",
        imageCaption: "Tarjetas electrónicas con retardantes de fuego bromados y rollos fotográficos de AgBr",
        points: [
          "Seguridad contra Incendios: Compuestos bromados (retardantes de llama) integrados en placas base de computadoras, carcasas plásticas y textiles.",
          "Fotografía Analógica y Cine: Cristales de bromuro de plata (AgBr) sensibles a la luz en películas y papel fotográfico.",
          "Desinfección de Spas y Jacuzzis: Tabletas de bromo para purificar agua caliente donde el cloro se evapora rápido.",
          "Medicina y Veterinaria: Bromuro de potasio (KBr) usado históricamente como anticonvulsivo y sedante, además de bromuro de ipratropio en inhaladores."
        ],
        photoUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Esquina Inferior Derecha",
        title: "Cómo se Ve el Bromo",
        subtitle: "Líquido denso rojo-marrón oscuro con vapores ámbar",
        badge: "Aspecto Visual",
        imageCaption: "Ampolla de vidrio borosilicato sellada con bromo líquido oscuro y vapor rojizo",
        points: [
          "En estado puro (Br₂): Es un líquido móvil, muy denso (3.12 g/cm³), de color rojo oscuro casi marrón o sangre.",
          "Vapor característico: Desprende de inmediato un humo denso de color rojo-anaranjado o ámbar muy irritante.",
          "Brillo metálico sólido: Al congelarse a -7.2 °C forma cristales sólidos de color rojizo con tenue reflejo metálico.",
          "Precaución: Siempre se exhibe en ampollas de vidrio selladas al vacío con fuego porque corroe tapones de goma y plástico."
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
    tagline: "Cristales oscuros con brillo metálico que subliman en un hipnótico vapor violeta; vital para la glándula tiroides.",

    academicCompounds: {
      oxidosAcidos: "Pentóxido de diyodo (I₂O₅ - anhídrido yódico, sólido blanco estable que oxida el monóxido de carbono), Tetraóxido de diyodo (I₂O₄) y Nonaóxido de tetrayodo (I₄O₉).",
      oxidosBasicos: "No forma óxidos básicos; forma yoduros esenciales con metales alcalinos como el Yoduro de potasio (KI) y Yoduro de sodio (NaI).",
      acidosBinarios: "Ácido yodhídrico (HI(ac)) — el ácido binario (hidrácido) estable más fuerte de todos los halógenos.",
      acidosTernarios: "Ácido hipoyodoso (HIO), Ácido yodoso (HIO₂), Ácido yódico (HIO₃) y Ácido peryódico (HIO₄ / H₅IO₆)."
    },

    corners: {
      topRight: {
        cornerLabel: "Esquina Superior Derecha",
        title: "Características y Compuestos Químicos",
        subtitle: "Sublimación violeta, pentóxido de diyodo y oxoácidos",
        badge: "Característica Química",
        imageCaption: "Estructura cristalina del Yodo (Z=53) y sublimación directa de sólido a gas",
        points: [
          "Clasificación: Grupo 17 (VIIA), Periodo 5 — Halógeno sólido cristalino menos reactivo que F, Cl y Br.",
          "Óxidos ácidos (Anhídridos): Pentóxido de diyodo (I₂O₅), un verdadero anhídrido ácido sólido que al reaccionar con agua forma ácido yódico.",
          "Ácido binario común: Ácido yodhídrico (HI), el hidrácido más fuerte debido al gran radio atómico del yodo.",
          "Ácidos ternarios (Oxoácidos): Ácido hipoyodoso (HIO), Ácido yódico (HIO₃) y Ácido peryódico (HIO₄ / H₅IO₆).",
          "Reacción famosa: Forma un complejo azul-violeta intenso en presencia de almidón (prueba clásica de laboratorio)."
        ],
        photoUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Esquina Superior Izquierda",
        title: "Dónde lo Encontramos",
        subtitle: "Algas marinas, caliche chileno y alimentos para la tiroides",
        badge: "Origen y Alimentos",
        imageCaption: "Algas marinas (Kelp/Nori), sal yodada, pescados, huevos y lácteos",
        points: [
          "Fuentes Naturales y Minerales: Depósitos de caliche en el Desierto de Atacama (Chile, mayor productor mundial) en minerales como Lautarita (Ca(IO₃)₂), y en algas marinas pardas (Kelp).",
          "Alimentos ricos en yodo: Sal yodada de mesa, algas marinas (nori, wakame, kombu), bacalao, atún, camarones, huevos, leche y yogur.",
          "En el cuerpo humano: Es indispensable para que la glándula tiroides sintetice las hormonas T3 (triyodotironina) y T4 (tiroxina), que regulan el metabolismo y el desarrollo cerebral."
        ],
        photoUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Esquina Inferior Izquierda",
        title: "Dónde lo Utilizamos",
        subtitle: "Antisépticos quirúrgicos, medios de contraste y pantallas LCD",
        badge: "Usos y Materiales",
        imageCaption: "Antiséptico de yodopovidona quirúrgico, radiografías médicas y pantallas polarizadas",
        points: [
          "Medicina y Cirugía: Desinfectantes y antisépticos de piel (Yodopovidona / Betadine y tintura de yodo) antes de cirugías.",
          "Diagnóstico por Imagen: Medios de contraste radiopacos yodados inyectables para tomografías (TAC) y angiografías.",
          "Tecnología y Materiales: Películas polarizadoras de pantallas LCD/OLED (celulares y televisores) y lámparas halógenas de cuarzo-yodo.",
          "Siembra de Nubes y Radioprotección: Yoduro de plata (AgI) para inducir lluvia artificial y pastillas de yoduro de potasio (KI) contra emergencias nucleares."
        ],
        photoUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Esquina Inferior Derecha",
        title: "Cómo se Ve el Yodo",
        subtitle: "Escamas negro-azuladas metálicas y denso gas violeta",
        badge: "Aspecto Visual",
        imageCaption: "Cristales de yodo con lustre metálico sublimando en vapor púrpura-violeta dentro de un matraz",
        points: [
          "En estado sólido (I₂): Forma escamas o cristales rómbicos de color gris oscuro o negro-violáceo con un sorprendente brillo cuasi metálico.",
          "En fase de vapor (Sublimación): Al calentarse suavemente pasa de sólido a un espectacular gas color violeta intenso (del griego «ioeides», color violeta).",
          "En disolución: En agua con KI (Lugol) se ve marrón-ámbar, pero disuelto en solventes apolares (como cloroformo o hexano) se torna púrpura brillante."
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
    tagline: "El elemento natural más raro de la corteza terrestre: menos de 1 gramo existe en todo el planeta en un instante dado.",

    academicCompounds: {
      oxidosAcidos: "Especies oxidadas en trazas radiactivas (AtO⁻, AtO₃⁻) estudiadas mediante radioquímica en solución acuosa.",
      oxidosBasicos: "Presenta carácter anfótero/metaloide parcial: puede formar cationes (At⁺ y AtO⁺) además del anión astaturo (At⁻).",
      acidosBinarios: "Ácido astathídrico (HAt) — hidrácido extremadamente inestable que se descompone rápidamente en astato e hidrógeno.",
      acidosTernarios: "Ácido hipoastatoso (HAtO), Ácido astatoso (HAtO₂), Ácido astático (HAtO₃) y Ácido perastático (HAtO₄) en concentraciones sub-nanomolares."
    },

    corners: {
      topRight: {
        cornerLabel: "Esquina Superior Derecha",
        title: "Características y Compuestos Químicos",
        subtitle: "Halógeno pesado radiactivo con rasgos de metaloide",
        badge: "Característica Química",
        imageCaption: "Átomo radiactivo de Astato-211 (Z=85) con emisión de partículas alfa",
        points: [
          "Clasificación: Grupo 17 (VIIA), Periodo 6 — Halógeno radiactivo con propiedades intermedias entre no metal y metaloide.",
          "Vida media: Su isótopo más estable es el Astato-210 (t½ = 8.1 horas), y el de uso médico es el Astato-211 (t½ = 7.2 horas).",
          "Ácido binario: Ácido astathídrico (HAt), donde el hidrógeno y el astato tienen casi la misma electronegatividad.",
          "Ácidos ternarios y oxoaniones: Forma iones hipoastatito (AtO⁻) y astatato (AtO₃⁻) análogos a los del yodo.",
          "Compuestos interhalógenos: Forma monoioduro de astato (AtI) y monobromuro de astato (AtBr) en trazas."
        ],
        photoUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Esquina Superior Izquierda",
        title: "Dónde lo Encontramos",
        subtitle: "Cadenas de desintegración del Uranio y ciclotrones",
        badge: "Origen y Síntesis",
        imageCaption: "Minerales de uranio (Pechblenda) y aceleradores de partículas tipo ciclotrón",
        points: [
          "En la Naturaleza: Aparece únicamente como traza efímera en la desintegración radiactiva de minerales de Uranio (U-235, U-238) y Torio.",
          "Rareza extrema: En toda la corteza terrestre existe menos de 1 gramo (aprox. 0.07 a 25 g) de astato natural en cualquier momento.",
          "En Alimentos: No existe en alimentos ni en el agua de consumo debido a su rapidísima desintegración nuclear.",
          "Producción Artificial: Se obtiene bombardeando blancos de Bismuto-209 con partículas alfa (⁴He) en un ciclotrón."
        ],
        photoUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Esquina Inferior Izquierda",
        title: "Dónde lo Utilizamos",
        subtitle: "Radioinmunoterapia dirigida contra el cáncer (Terapia Alfa)",
        badge: "Usos Médicos Avanzados",
        imageCaption: "Oncología nuclear: anticuerpos monoclonales marcados con Astato-211 contra tumores",
        points: [
          "Oncología Nuclear (Terapia Alfa Dirigida): El isótopo Astato-211 (²¹¹At) se une a anticuerpos monoclonales para destruir células cancerosas con precisión milimétrica sin dañar el tejido sano circundante.",
          "Tratamiento de tumores cerebrales y leucemias: En ensayos clínicos avanzados para glioblastomas, cáncer de ovario y micrometástasis.",
          "Investigación en tiroides: Comparte afinidad química con el yodo pero emite partículas alfa de alta energía y corto alcance."
        ],
        photoUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Esquina Inferior Derecha",
        title: "Cómo se Ve el Astato",
        subtitle: "Apariencia teórica y motivo por el que no puede fotografiarse en masa",
        badge: "Aspecto Visual",
        imageCaption: "Representación de un sólido negro metálico incandescente por su propio calor radiactivo",
        points: [
          "¿Por qué no hay fotos de un trozo de Astato?: Su radiactividad es tan intensa que un cristal visible a simple vista se vaporizaría instantáneamente por su propio calor nuclear.",
          "Apariencia física determinada por física cuántica: Sería un sólido oscuro, negro o gris muy profundo, con un marcado aspecto metálico (más metálico que el yodo).",
          "En laboratorio: Solo se manipula disuelto en líquidos en cantidades microscópicas invisibles al ojo humano, detectado mediante contadores de radiación."
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
    tagline: "El miembro más joven y pesado del Grupo 17, creado átomo por átomo en aceleradores de partículas.",

    academicCompounds: {
      oxidosAcidos: "Compuestos teóricos en fase gaseosa estudiados mediante química cuántica relativista; debido a efectos relativistas prefiere estados positivos (+1, +3).",
      oxidosBasicos: "Por su fuerte carácter metálico relativista, sus óxidos hipotéticos (Ts₂O, Ts₂O₃) tendrían comportamiento más básico o anfótero que ácido.",
      acidosBinarios: "Hidruro de teneso (HTs) — teóricamente el enlace es tan débil y polarizado hacia el hidrógeno que actúa más como un hidruro metálico que como un ácido hidrácido.",
      acidosTernarios: "No forma oxoácidos estables; su vida media es de apenas milisegundos (~51 ms para ²⁹⁴Ts)."
    },

    corners: {
      topRight: {
        cornerLabel: "Esquina Superior Derecha",
        title: "Características y Compuestos Teóricos",
        subtitle: "Efectos relativistas en el elemento 117 del Grupo 17",
        badge: "Característica Química",
        imageCaption: "Átomo superpesado de Teneso (Z=117) con 7 capas electrónicas y núcleo de 294 nucleones",
        points: [
          "Clasificación: Grupo 17 (VIIA), Periodo 7, Bloque p — Elemento superpesado sintético descubierto en 2010 y nombrado oficialmente por la IUPAC en 2016.",
          "Isótopos conocidos: Teneso-294 (vida media ~51 milisegundos) y Teneso-293 (vida media ~22 milisegundos).",
          "Química relativista: Debido a la velocidad cercana a la luz de sus electrones internos, se comporta más como un metal post-transición o metaloide que como un halógeno clásico.",
          "Hidrácido teórico: El compuesto HTs tendría un enlace muy débil comparado con HF, HCl, HBr o HI."
        ],
        photoUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80"
      },
      topLeft: {
        cornerLabel: "Esquina Superior Izquierda",
        title: "Dónde lo Encontramos",
        subtitle: "Exclusivamente en aceleradores de iones pesados",
        badge: "Síntesis Nuclear",
        imageCaption: "Acelerador de partículas donde se fusionan núcleos de Calcio-48 y Berkelio-249",
        points: [
          "No existe en la naturaleza: Ni en minerales, ni en el mar, ni en ningún alimento.",
          "Dónde fue creado: Sintetizado por una colaboración entre el Instituto Conjunto para la Investigación Nuclear (Dubná, Rusia) y el Laboratorio Nacional de Oak Ridge (Tennessee, EE. UU., de donde recibe su nombre).",
          "Reacción nuclear de creación: Se dispara un haz de iones de Calcio-48 (²⁰Ca) contra un blanco radiactivo de Berkelio-249 (⁹⁷Bk) durante meses para producir apenas unos pocos átomos."
        ],
        photoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
      },
      bottomLeft: {
        cornerLabel: "Esquina Inferior Izquierda",
        title: "Dónde lo Utilizamos",
        subtitle: "Física nuclear de frontera y la «Isla de Estabilidad»",
        badge: "Investigación Científica",
        imageCaption: "Detectores de silicio de alta precisión para rastrear cadenas de desintegración alfa",
        points: [
          "Investigación Científica Pura: Su único uso actual es explorar los límites de la tabla periódica y comprobar las predicciones de la mecánica cuántica relativista.",
          "Camino a la «Isla de Estabilidad»: Las cadenas de desintegración del Teneso han demostrado que los núcleos superpesados ricos en neutrones viven más tiempo de lo que se creía hace décadas.",
          "Tecnología derivada: Los blancos de Berkelio y los detectores desarrollados para hallar el Teneso impulsan avances en medicina nuclear y física de materiales."
        ],
        photoUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=900&q=80"
      },
      bottomRight: {
        cornerLabel: "Esquina Inferior Derecha",
        title: "Cómo se Ve el Teneso",
        subtitle: "Aspecto físico predicho y rastro en detectores",
        badge: "Aspecto Visual",
        imageCaption: "Visualización de trazas de colisión nuclear y apariencia metálica gris oscura predicha",
        points: [
          "En la realidad experimental: Solo se han producido unas pocas docenas de átomos individuales, detectados como pulsos de energía alfa en sensores de silicio.",
          "Apariencia macroscópica predicha: Si pudieran reunirse suficientes átomos sin desintegrarse, sería un sólido denso de aspecto francamente metálico, color gris oscuro plateado.",
          "Punto de fusión estimado: Entre 350 °C y 550 °C, continuando la tendencia ascendente desde el flúor gaseoso hasta los sólidos pesados del grupo 17."
        ],
        photoUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80"
      }
    }
  }
];

// Comandos / Prompts creativos utilizados (Evidencia para el Trabajo Especial)
const AI_EVIDENCE_PROMPTS = [
  {
    step: "Comando 1 — Estructura de Clasificación Periódica y Grupo 17",
    command: "Actúa como un experto en Química Inorgánica y Diseñador Web Interactivo. Construye la base de datos científica exclusiva de la familia de los Halógenos (Grupo 17 / VIIA: Flúor, Cloro, Bromo, Yodo, Astato y Teneso) incluyendo número atómico, masa atómica, configuración electrónica, estados de oxidación, clasificación periódica, óxidos ácidos (anhídridos), comparación con óxidos básicos, ácidos binarios (hidrácidos HX) y ácidos ternarios (oxoácidos HXO, HXO₂, HXO₃, HXO₄).",
    resultSummary: "Se estructuraron las fichas completas de los 6 elementos del Grupo 17 con sus fórmulas químicas verificadas (HF, HCl, HBr, HI, HAt, Cl₂O₇, I₂O₅, HClO₄, HIO₃, etc.)."
  },
  {
    step: "Comando 2 — Interfaz Interactiva de 4 Esquinas (Hover Explorer)",
    command: "Diseña una interfaz interactiva tipo HUD de laboratorio donde cada elemento halógeno tenga una tarjeta central rodeada de 4 zonas en las esquinas que se activan al pasar el cursor (hover): Esquina Superior Derecha (Características y compuestos químicos), Esquina Superior Izquierda (Dónde lo encontramos: minerales y alimentos), Esquina Inferior Izquierda (Dónde lo utilizamos: materiales, medicina e industria) y Esquina Inferior Derecha (Cómo se ve físicamente, con fotografías e ilustraciones científicas).",
    resultSummary: "Se programó el sistema de detección por cuadrantes en las 4 esquinas con transiciones suaves, visor fotográfico integrado y diagramas SVG químicos a medida."
  },
  {
    step: "Comando 3 — Tabla Comparativa de Óxidos, Ácidos Binarios/Ternarios y Alimentos",
    command: "Crea una sección documental y comparativa dentro del sitio web que deje evidencia clara por secciones: 1) Clasificación periódica del Grupo 17, 2) Óxidos ácidos vs. Óxidos básicos, 3) Ácidos binarios (hidrácidos) y ternarios (oxoácidos), y 4) Alimentos, sustancias y materiales cotidianos donde se encuentra cada halógeno.",
    resultSummary: "Se integró la matriz química comparativa completa y una guía imprimible/exportable lista para entregar como evidencia del Trabajo Especial."
  }
];
