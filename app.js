// Lógica interactiva para la Tabla Periódica de los Halógenos (Grupo 17)

document.addEventListener("DOMContentLoaded", () => {
  let activeElement = HALOGENS_DATA[0]; // Flúor por defecto
  let closeLockUntil = 0; // Evita que el hover vuelva a abrir inmediatamente después de pulsar "Cerrar"

  const selectorListEl = document.getElementById("halogen-selector-list");
  const ambientGlowEl = document.getElementById("ambient-glow");
  const stageStatusTextEl = document.getElementById("stage-status-text");
  const detailOverlayEl = document.getElementById("corner-detail-overlay");
  const btnCloseDetail = document.getElementById("btn-close-detail");
  const btnResetView = document.getElementById("btn-reset-view");

  // Generador de ilustraciones SVG científicas personalizadas para cada sección y elemento
  function createCornerSVG(element, cornerKey) {
    const c = element.colorAccent;
    if (cornerKey === "topRight") {
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="${c}" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="50" cy="50" r="28" stroke="${c}" stroke-opacity="0.65" stroke-width="1.5"/>
          <circle cx="50" cy="50" r="12" fill="${c}" fill-opacity="0.25" stroke="${c}" stroke-width="2"/>
          <text x="50" y="54" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold" font-family="Space Grotesk, sans-serif">${element.symbol}</text>
          <circle cx="50" cy="8" r="3.5" fill="${c}"/>
          <circle cx="84" cy="25" r="3.5" fill="${c}"/>
          <circle cx="91" cy="58" r="3.5" fill="${c}"/>
          <circle cx="71" cy="86" r="3.5" fill="${c}"/>
          <circle cx="29" cy="86" r="3.5" fill="${c}"/>
          <circle cx="9" cy="58" r="3.5" fill="${c}"/>
          <circle cx="16" cy="25" r="3.5" fill="${c}"/>
        </svg>
      `;
    }

    if (cornerKey === "topLeft") {
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,12 80,32 70,82 30,82 20,32" fill="${c}" fill-opacity="0.18" stroke="${c}" stroke-width="2.2"/>
          <polyline points="50,12 50,82" stroke="${c}" stroke-opacity="0.5" stroke-width="1.5"/>
          <polyline points="20,32 80,32" stroke="${c}" stroke-opacity="0.5" stroke-width="1.5"/>
          <circle cx="50" cy="48" r="9" fill="${c}"/>
          <text x="50" y="95" text-anchor="middle" fill="${c}" font-size="9" font-weight="bold">ORIGEN</text>
        </svg>
      `;
    }

    if (cornerKey === "bottomLeft") {
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 18H62M43 18V38L22 76C19 81 23 86 29 86H71C77 86 81 81 78 76L57 38V18" stroke="${c}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 64H71L77 75C79 79 76 84 71 84H29C24 84 21 79 23 75L29 64Z" fill="${c}" fill-opacity="0.32"/>
          <circle cx="45" cy="73" r="3" fill="#fff"/>
          <circle cx="56" cy="69" r="2.2" fill="#fff"/>
          <circle cx="52" cy="52" r="2.5" fill="${c}"/>
        </svg>
      `;
    }

    return `
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="34" y="14" width="32" height="72" rx="16" stroke="${c}" stroke-width="2.5"/>
        <rect x="38" y="42" width="24" height="40" rx="12" fill="${c}" fill-opacity="0.45"/>
        <circle cx="46" cy="34" r="3" fill="${c}" fill-opacity="0.8"/>
        <circle cx="55" cy="28" r="2.2" fill="${c}" fill-opacity="0.7"/>
        <text x="50" y="66" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">${element.symbol}₂</text>
      </svg>
    `;
  }

  // Fallback SVG elegante si una imagen externa no carga
  function generateFallbackImageDataURI(element, cornerData) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="${element.colorAccent}" stop-opacity="0.38"/>
          <stop offset="100%" stop-color="#070b14" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#g)"/>
      <circle cx="400" cy="220" r="110" fill="none" stroke="${element.colorAccent}" stroke-width="3" stroke-dasharray="10 6"/>
      <text x="400" y="245" text-anchor="middle" fill="${element.colorAccent}" font-family="sans-serif" font-size="88" font-weight="bold">${element.symbol}</text>
      <text x="400" y="385" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold">${element.name} (Z=${element.number}) — ${cornerData.title}</text>
      <text x="400" y="425" text-anchor="middle" fill="#9aa8c7" font-family="sans-serif" font-size="18">${cornerData.subtitle}</text>
    </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  // 1. Renderizar botones de la columna Grupo 17
  function renderHalogenSelector() {
    selectorListEl.innerHTML = "";
    HALOGENS_DATA.forEach((el) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `halogen-btn ${el.id === activeElement.id ? "active" : ""}`;
      btn.style.setProperty("--el-color", el.colorAccent);
      btn.innerHTML = `
        <div class="el-mini-box">
          <small>${el.number}</small>
          <strong>${el.symbol}</strong>
        </div>
        <div class="el-btn-info">
          <strong>${el.name}</strong>
          <span>${el.state}</span>
        </div>
      `;
      btn.addEventListener("click", () => {
        selectElement(el.id);
      });
      selectorListEl.appendChild(btn);
    });
  }

  // 2. Actualizar el elemento central y las miniaturas de las 4 secciones
  function selectElement(elementId) {
    const found = HALOGENS_DATA.find((item) => item.id === elementId);
    if (!found) return;
    activeElement = found;

    document.documentElement.style.setProperty("--accent", activeElement.colorAccent);
    document.documentElement.style.setProperty("--accent-soft", `${activeElement.colorAccent}26`);
    ambientGlowEl.style.background = `radial-gradient(circle at 50% 25%, ${activeElement.colorAccent}22, transparent 62%)`;

    renderHalogenSelector();

    document.getElementById("hub-number").textContent = activeElement.number;
    document.getElementById("hub-state").textContent = activeElement.state;
    document.getElementById("hub-symbol").textContent = activeElement.symbol;
    document.getElementById("hub-name").textContent = activeElement.name;
    document.getElementById("hub-mass").textContent = `Masa: ${activeElement.atomicMass} • Periodo ${activeElement.period}`;
    document.getElementById("hub-config").textContent = activeElement.electronConfig;
    document.getElementById("hub-tagline").textContent = activeElement.tagline;

    const cornerMap = [
      { key: "topLeft", imgId: "thumb-tl", svgId: "svg-tl" },
      { key: "topRight", imgId: "thumb-tr", svgId: "svg-tr" },
      { key: "bottomLeft", imgId: "thumb-bl", svgId: "svg-bl" },
      { key: "bottomRight", imgId: "thumb-br", svgId: "svg-br" }
    ];

    cornerMap.forEach(({ key, imgId, svgId }) => {
      const cData = activeElement.corners[key];
      const imgEl = document.getElementById(imgId);
      const svgEl = document.getElementById(svgId);

      imgEl.onerror = () => {
        imgEl.src = generateFallbackImageDataURI(activeElement, cData);
      };
      imgEl.src = cData.photoUrl;
      imgEl.alt = `${activeElement.name} - ${cData.title}`;
      svgEl.innerHTML = createCornerSVG(activeElement, key);
    });

    hideCornerDetail(false);
    updateIonizationSimulator();
  }

  // 3. Mostrar el detalle completo de una sección
  function showCornerDetail(cornerKey, forceOpen = false) {
    if (!forceOpen && Date.now() < closeLockUntil) {
      return;
    }

    const cornerData = activeElement.corners[cornerKey];
    if (!cornerData) return;

    const detailPhoto = document.getElementById("detail-photo");
    detailPhoto.onerror = () => {
      detailPhoto.src = generateFallbackImageDataURI(activeElement, cornerData);
    };
    detailPhoto.src = cornerData.photoUrl;
    detailPhoto.alt = cornerData.imageCaption;

    document.getElementById("detail-svg-illustration").innerHTML = createCornerSVG(activeElement, cornerKey);
    document.getElementById("detail-corner-badge").textContent = cornerData.cornerLabel;
    document.getElementById("detail-image-caption").textContent = cornerData.imageCaption;
    document.getElementById("detail-kicker").textContent = `${activeElement.name.toUpperCase()} (${activeElement.symbol}, Z=${activeElement.number}) • ${cornerData.badge}`;
    document.getElementById("detail-title").textContent = cornerData.title;
    document.getElementById("detail-subtitle").textContent = cornerData.subtitle;

    // Marcar botón activo dentro del selector rápido
    document.querySelectorAll(".quick-switch-btn").forEach((btn) => {
      const key = btn.getAttribute("data-switch-corner");
      btn.classList.toggle("active", key === cornerKey);
    });

    const pointsListEl = document.getElementById("detail-points-list");
    pointsListEl.innerHTML = cornerData.points
      .map((pt) => `<li>${pt}</li>`)
      .join("");

    const extraChemEl = document.getElementById("detail-extra-chemistry");
    if (cornerKey === "topRight") {
      extraChemEl.innerHTML = `
        <strong>Síntesis de Óxidos y Ácidos (${activeElement.name}):</strong><br/>
        • <b>Óxidos ácidos:</b> ${activeElement.academicCompounds.oxidosAcidos}<br/>
        • <b>Ácido binario:</b> ${activeElement.academicCompounds.acidosBinarios}<br/>
        • <b>Ácidos ternarios:</b> ${activeElement.academicCompounds.acidosTernarios}
      `;
    } else {
      extraChemEl.innerHTML = `
        <strong>Dato Químico (${activeElement.name}):</strong> Electronegatividad ${activeElement.electronegativity} | Estados de oxidación: <b>${activeElement.oxidationStates}</b> | Configuración: <b>${activeElement.electronConfig}</b>.
      `;
    }

    stageStatusTextEl.innerHTML = `Viendo <strong>${cornerData.cornerLabel}</strong> de <strong>${activeElement.name} (${activeElement.symbol})</strong> — Pulsa «✕ Cerrar» o la tecla <b>Esc</b> para regresar al mapa general.`;
    detailOverlayEl.classList.add("visible");
  }

  // Cerrar el panel de detalle con bloqueo temporal anti-rebote para que el botón Cerrar funcione siempre al primer clic
  function hideCornerDetail(lockHover = true) {
    if (lockHover) {
      closeLockUntil = Date.now() + 650;
    }
    detailOverlayEl.classList.remove("visible");
    stageStatusTextEl.innerHTML = `Elemento activo: <strong>${activeElement.name} (${activeElement.symbol})</strong>. Pasa el cursor o haz clic sobre cualquiera de las 4 secciones para explorar su información e imágenes.`;
  }

  // Eventos hover y click en las 4 zonas alrededor del elemento
  const cornerZones = document.querySelectorAll(".corner-zone");
  cornerZones.forEach((zone) => {
    const cornerKey = zone.getAttribute("data-corner");
    zone.addEventListener("mouseenter", () => {
      showCornerDetail(cornerKey, false);
    });
    zone.addEventListener("click", (e) => {
      e.stopPropagation();
      showCornerDetail(cornerKey, true);
    });
    zone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showCornerDetail(cornerKey, true);
      }
    });
  });

  // Botones para cambiar entre las 4 secciones directamente desde adentro de la vista abierta
  document.querySelectorAll(".quick-switch-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetKey = btn.getAttribute("data-switch-corner");
      showCornerDetail(targetKey, true);
    });
  });

  // Botón Cerrar vista
  btnCloseDetail.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    hideCornerDetail(true);
  });

  // Botón Vista general de la barra superior
  btnResetView.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    hideCornerDetail(true);
  });

  // Cerrar al hacer clic en el fondo oscuro del overlay o en la tarjeta central
  detailOverlayEl.addEventListener("click", (e) => {
    if (e.target === detailOverlayEl) {
      hideCornerDetail(true);
    }
  });

  document.getElementById("center-element-hub").addEventListener("click", () => {
    hideCornerDetail(true);
  });

  // Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detailOverlayEl.classList.contains("visible")) {
      hideCornerDetail(true);
    }
  });

  // Cuando el cursor sale del área del escenario, vuelve a la vista general
  const stageEl = document.getElementById("four-corners-stage");
  stageEl.addEventListener("mouseleave", () => {
    hideCornerDetail(false);
  });

  // Chips de acceso rápido del banner superior
  document.querySelectorAll("[data-corner-btn]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetCorner = chip.getAttribute("data-corner-btn");
      document.getElementById("explorador-esquinas").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => showCornerDetail(targetCorner, true), 350);
    });
  });

  // 4. Renderizar tarjetas de Clasificación Periódica, Óxidos y Ácidos
  function renderChemistryCards() {
    const grid = document.getElementById("chemistry-cards-grid");
    grid.innerHTML = HALOGENS_DATA.map(
      (el) => `
      <article class="chem-card" style="--el-color: ${el.colorAccent}">
        <div class="chem-card-header">
          <div class="chem-symbol-badge">${el.symbol}</div>
          <div>
            <h3>${el.name} (Z = ${el.number})</h3>
            <small style="color: var(--text-muted)">${el.group} • Periodo ${el.period} • ${el.family}</small>
          </div>
        </div>
        <div class="chem-item">
          <strong>Óxidos Ácidos (Anhídridos)</strong>
          <p>${el.academicCompounds.oxidosAcidos}</p>
        </div>
        <div class="chem-item">
          <strong>Óxidos Básicos (Relación con Metales)</strong>
          <p>${el.academicCompounds.oxidosBasicos}</p>
        </div>
        <div class="chem-item">
          <strong>Ácidos Binarios Comunes (Hidrácidos HX)</strong>
          <p>${el.academicCompounds.acidosBinarios}</p>
        </div>
        <div class="chem-item">
          <strong>Ácidos Ternarios Comunes (Oxoácidos HXOₙ)</strong>
          <p>${el.academicCompounds.acidosTernarios}</p>
        </div>
      </article>
    `
    ).join("");
  }

  // 5. Renderizar tabla comparativa de alimentos, sustancias y materiales
  function renderComparisonTable() {
    const tbody = document.getElementById("comparison-table-body");
    tbody.innerHTML = HALOGENS_DATA.map(
      (el) => `
      <tr>
        <td>
          <strong style="color: ${el.colorAccent}; font-size: 1.05rem;">${el.symbol} — ${el.name}</strong><br/>
          <small style="color: var(--text-muted)">Z=${el.number} | ${el.atomicMass}</small>
        </td>
        <td>${el.corners.topLeft.points.slice(0, 2).join("<br/><br/>")}</td>
        <td>
          <b>Binario:</b> ${el.academicCompounds.acidosBinarios}<br/><br/>
          <b>Ternarios:</b> ${el.academicCompounds.acidosTernarios}
        </td>
        <td>${el.corners.bottomLeft.points.slice(0, 2).join("<br/><br/>")}</td>
        <td>
          <b>${el.state}</b><br/>
          ${el.corners.bottomRight.points[0]}
        </td>
      </tr>
    `
    ).join("");
  }

  // 6. SIMULADOR DIDÁCTICO DE IONIZACIÓN Y ESPECTRO ATÓMICO
  const voltageSlider = document.getElementById("voltage-slider");
  const voltageValueLabel = document.getElementById("voltage-value-label");
  const btnIonOff = document.getElementById("btn-ion-off");
  const btnIonMax = document.getElementById("btn-ion-max");

  function renderIonElementTabs() {
    const tabsContainer = document.getElementById("ion-element-tabs");
    if (!tabsContainer) return;
    tabsContainer.innerHTML = HALOGENS_DATA.map(
      (el) => `
      <button type="button" class="ion-tab-btn ${el.id === activeElement.id ? "active" : ""}"
              style="--tab-color: ${el.colorAccent}"
              data-ion-el="${el.id}">
        <span class="ion-tab-dot"></span>
        <span>${el.symbol} — ${el.name}</span>
      </button>
    `
    ).join("");

    tabsContainer.querySelectorAll(".ion-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-ion-el");
        selectElement(targetId);
      });
    });
  }

  function renderQuantumJumpSVG(ionInfo, voltagePct) {
    const isIonized = voltagePct > 20;
    const core = ionInfo.plasmaCoreHex;
    const glow = ionInfo.plasmaGlowHex;
    const electronRadius = isIonized ? 54 : 30;
    const photonOpacity = Math.min(1, voltagePct / 75);

    return `
      <svg viewBox="0 0 140 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Nivel basal n -->
        <circle cx="70" cy="70" r="30" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
        <!-- Nivel excitado n+1 -->
        <circle cx="70" cy="70" r="54" fill="none" stroke="${glow}" stroke-opacity="${0.25 + photonOpacity * 0.65}" stroke-width="1.8" stroke-dasharray="4 3"/>
        <!-- Núcleo atómico -->
        <circle cx="70" cy="70" r="14" fill="${glow}" fill-opacity="0.3" stroke="${core}" stroke-width="2"/>
        <text x="70" y="74" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold" font-family="Space Grotesk, sans-serif">${activeElement.symbol}${isIonized ? "⁺" : ""}</text>

        <!-- Electrón saltando de órbita -->
        <circle cx="70" cy="${70 - electronRadius}" r="5" fill="${core}" stroke="#fff" stroke-width="1.5"/>

        ${
          isIonized
            ? `
          <!-- Flecha de caída cuántica -->
          <path d="M 76 ${70 - 52} Q 92 32 76 ${70 - 32}" fill="none" stroke="${core}" stroke-width="2"/>
          <!-- Onda de fotón emitido (h·ν) -->
          <path d="M 85 35 Q 92 26, 99 35 T 113 35 T 127 35" fill="none" stroke="${core}" stroke-width="2.5" opacity="${photonOpacity}"/>
          <text x="108" y="22" text-anchor="middle" fill="${core}" font-size="9" font-weight="bold">Fotón hν</text>
        `
            : `
          <text x="70" y="133" text-anchor="middle" fill="#9aa8c7" font-size="8.5">Átomo en estado basal</text>
        `
        }
      </svg>
    `;
  }

  function updateIonizationSimulator() {
    const ion = activeElement.ionization;
    if (!ion || !voltageSlider) return;

    renderIonElementTabs();

    const pct = Number(voltageSlider.value); // 0 a 100
    const kv = ((pct / 100) * 15).toFixed(1);

    // Etiquetas superiores
    const modeBadge = document.getElementById("ion-mode-badge");
    const energyBadge = document.getElementById("ion-energy-badge");
    energyBadge.textContent = `1ª Energía de Ionización: ${ion.energyEv}`;

    if (pct === 0) {
      voltageValueLabel.textContent = "0.0 kV (Sin descarga — Color Natural)";
      modeBadge.textContent = `Estado Neutro (${ion.naturalColorName})`;
      modeBadge.style.borderColor = "rgba(255,255,255,0.18)";
      modeBadge.style.color = "#f3f6fc";
    } else if (pct < 45) {
      voltageValueLabel.textContent = `${kv} kV (Excitación electrónica parcial)`;
      modeBadge.textContent = `Gas Excitado — Iniciando emisión de fotones`;
      modeBadge.style.borderColor = ion.plasmaGlowHex;
      modeBadge.style.color = ion.plasmaCoreHex;
    } else {
      voltageValueLabel.textContent = `${kv} kV (¡Plasma Ionizado ${activeElement.symbol}⁺ + e⁻!)`;
      modeBadge.textContent = `⚡ Plasma Ionizado: ${ion.plasmaColorName}`;
      modeBadge.style.borderColor = ion.plasmaCoreHex;
      modeBadge.style.color = ion.plasmaCoreHex;
    }

    // Actualizar tubo de vidrio (gas natural vs haz de plasma)
    const naturalFill = document.getElementById("natural-gas-fill");
    const plasmaBeam = document.getElementById("plasma-beam");
    const particlesLayer = document.getElementById("ion-particles-layer");

    naturalFill.style.background = `radial-gradient(circle, ${ion.naturalHex}88, ${ion.naturalHex}22)`;
    naturalFill.style.opacity = Math.max(0.15, 0.55 - (pct / 100) * 0.4);

    const beamRatio = pct / 100;
    plasmaBeam.style.opacity = beamRatio;
    plasmaBeam.style.height = `${16 + beamRatio * 44}px`;
    plasmaBeam.style.background = `linear-gradient(90deg, ${ion.plasmaGlowHex}, ${ion.plasmaCoreHex}, #ffffff, ${ion.plasmaCoreHex}, ${ion.plasmaGlowHex})`;
    plasmaBeam.style.boxShadow = `0 0 ${15 + beamRatio * 45}px ${ion.plasmaGlowHex}, 0 0 ${8 + beamRatio * 25}px ${ion.plasmaCoreHex}`;

    // Partículas atómicas / iones dentro del tubo
    const particleCount = 6;
    const isIonized = pct >= 35;
    particlesLayer.innerHTML = Array.from({ length: particleCount })
      .map((_, i) => {
        const label = isIonized ? `${activeElement.symbol}⁺` : `${activeElement.symbol}₂`;
        const anim = pct > 5 ? `animation: plasmaJitter ${(1.2 - beamRatio * 0.85).toFixed(2)}s infinite ${(i * 0.12).toFixed(2)}s;` : "";
        const glowStyle = isIonized
          ? `border-color: ${ion.plasmaCoreHex}; box-shadow: 0 0 12px ${ion.plasmaGlowHex}; color: ${ion.plasmaCoreHex};`
          : `border-color: ${ion.naturalHex}; color: ${ion.naturalHex};`;
        return `<div class="ion-particle" style="${glowStyle} ${anim}">${label}</div>`;
      })
      .join("");

    // Actualizar muestras comparativas de color
    const swatchNatural = document.getElementById("swatch-natural");
    const swatchPlasma = document.getElementById("swatch-plasma");
    swatchNatural.style.background = `radial-gradient(circle, ${ion.naturalHex}, #0b1020)`;
    swatchPlasma.style.background = `radial-gradient(circle, #ffffff 5%, ${ion.plasmaCoreHex} 45%, ${ion.plasmaGlowHex} 90%)`;
    swatchPlasma.style.boxShadow = `0 0 ${10 + beamRatio * 25}px ${ion.plasmaGlowHex}`;

    document.getElementById("natural-color-title").textContent = ion.naturalColorName;
    document.getElementById("plasma-color-title").textContent = ion.plasmaColorName;
    document.getElementById("ion-explanation-text").textContent = ion.explanation;

    // Actualizar diagrama cuántico SVG
    document.getElementById("quantum-svg-wrap").innerHTML = renderQuantumJumpSVG(ion, pct);

    // Actualizar espectroscopio realista en Canvas (380 nm a 760 nm)
    renderRealisticSpectrumCanvas(ion, pct);
  }

  // Conversión física exacta de longitud de onda (380 nm - 760 nm) a RGB real (algoritmo óptico de Bruton)
  function wavelengthToRGB(wavelength) {
    let r = 0, g = 0, b = 0;
    if (wavelength >= 380 && wavelength < 440) {
      r = -(wavelength - 440) / (440 - 380);
      g = 0;
      b = 1;
    } else if (wavelength >= 440 && wavelength < 490) {
      r = 0;
      g = (wavelength - 440) / (490 - 440);
      b = 1;
    } else if (wavelength >= 490 && wavelength < 510) {
      r = 0;
      g = 1;
      b = -(wavelength - 510) / (510 - 490);
    } else if (wavelength >= 510 && wavelength < 580) {
      r = (wavelength - 510) / (580 - 510);
      g = 1;
      b = 0;
    } else if (wavelength >= 580 && wavelength < 645) {
      r = 1;
      g = -(wavelength - 645) / (645 - 580);
      b = 0;
    } else if (wavelength >= 645 && wavelength <= 760) {
      r = 1;
      g = 0;
      b = 0;
    }

    // Atenuación en los bordes del espectro visible humano (UV cercano e IR cercano)
    let factor = 1;
    if (wavelength >= 380 && wavelength < 420) {
      factor = 0.35 + 0.65 * ((wavelength - 380) / (420 - 380));
    } else if (wavelength >= 700 && wavelength <= 760) {
      factor = 0.35 + 0.65 * ((760 - wavelength) / (760 - 700));
    }

    const gamma = 0.82;
    const R = Math.round(255 * Math.pow(r * factor, gamma));
    const G = Math.round(255 * Math.pow(g * factor, gamma));
    const B = Math.round(255 * Math.pow(b * factor, gamma));
    return { r: R, g: G, b: B, css: `rgb(${R}, ${G}, ${B})` };
  }

  let highlightedWavelength = null;

  function renderRealisticSpectrumCanvas(ion, pct) {
    const canvas = document.getElementById("spectrum-canvas");
    const tagsContainer = document.getElementById("spectral-wavelength-tags");
    const spectroHint = document.getElementById("spectro-state-hint");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const minWL = 380;
    const maxWL = 760;
    const beamRatio = pct / 100;

    spectroHint.textContent =
      pct === 0
        ? "0 kV (Sin emisión) — Sube el voltaje para revelar el espectro"
        : `Potencia óptica: ${pct}% (${ion.spectralLines.length} líneas NIST activas)`;

    ctx.clearRect(0, 0, W, H);

    // 1. Fondo negro profundo de cámara espectrométrica
    ctx.fillStyle = "#03050b";
    ctx.fillRect(0, 0, W, H);

    // 2. Banda superior de referencia del espectro continuo (0 a 18px)
    for (let x = 0; x < W; x++) {
      const wl = minWL + (x / W) * (maxWL - minWL);
      const col = wavelengthToRGB(wl);
      ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, 0.28)`;
      ctx.fillRect(x, 0, 1, 16);
    }

    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.beginPath();
    ctx.moveTo(0, 16.5);
    ctx.lineTo(W, 16.5);
    ctx.stroke();

    // 3. Placa fotográfica de líneas de emisión (y = 18 a y = 108)
    const plateTop = 18;
    const plateHeight = 88;
    const plateBottom = plateTop + plateHeight;

    // Tenue resplandor continuo de fondo proporcional al voltaje
    for (let x = 0; x < W; x++) {
      const wl = minWL + (x / W) * (maxWL - minWL);
      const col = wavelengthToRGB(wl);
      ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${0.02 + beamRatio * 0.05})`;
      ctx.fillRect(x, plateTop, 1, plateHeight);
    }

    // Dibujar cada línea de emisión con perfil Gaussiano/Lorentziano realista (difracción óptica)
    const powerFactor = pct === 0 ? 0.08 : 0.2 + 0.8 * beamRatio;

    ion.spectralLines.forEach((line) => {
      const xCenter = ((line.wl - minWL) / (maxWL - minWL)) * W;
      const col = wavelengthToRGB(line.wl);
      const isHighlighted = highlightedWavelength === line.wl;
      const relInt = line.intensity * powerFactor * (isHighlighted ? 1.35 : 1);

      // Halo difuso exterior (dispersión en la rendija del espectrógrafo)
      const haloRadius = (6 + line.intensity * 12) * (isHighlighted ? 1.5 : 1);
      const grad = ctx.createLinearGradient(xCenter - haloRadius, 0, xCenter + haloRadius, 0);
      grad.addColorStop(0, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);
      grad.addColorStop(0.35, `rgba(${col.r}, ${col.g}, ${col.b}, ${Math.min(0.65, relInt * 0.45)})`);
      grad.addColorStop(0.5, `rgba(255, 255, 255, ${Math.min(1, relInt * 0.95)})`);
      grad.addColorStop(0.65, `rgba(${col.r}, ${col.g}, ${col.b}, ${Math.min(0.65, relInt * 0.45)})`);
      grad.addColorStop(1, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);

      ctx.fillStyle = grad;
      ctx.fillRect(xCenter - haloRadius, plateTop, haloRadius * 2, plateHeight);

      // Núcleo nítido de la línea de emisión
      ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${Math.min(1, relInt)})`;
      ctx.fillRect(xCenter - 1.2, plateTop, 2.4, plateHeight);

      if (pct > 25 && line.intensity >= 0.75) {
        // Centro saturado blanco incandescente en las líneas más intensas (igual que en un espectrómetro real)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.95, (pct / 100) * line.intensity)})`;
        ctx.fillRect(xCenter - 0.6, plateTop, 1.2, plateHeight);
      }
    });

    // Línea divisoria entre placa fotográfica y gráfico espectrométrico inferior
    ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
    ctx.beginPath();
    ctx.moveTo(0, plateBottom + 0.5);
    ctx.lineTo(W, plateBottom + 0.5);
    ctx.stroke();

    // 4. Curva inferior del perfil espectrofotométrico de intensidad I(λ) (y = 108 a y = 165)
    const graphTop = plateBottom + 6;
    const graphBottom = H - 6;
    const graphHeight = graphBottom - graphTop;

    ctx.beginPath();
    ctx.moveTo(0, graphBottom);

    for (let x = 0; x <= W; x += 2) {
      const wl = minWL + (x / W) * (maxWL - minWL);
      let sumIntensity = 0;
      for (let i = 0; i < ion.spectralLines.length; i++) {
        const l = ion.spectralLines[i];
        const sigma = 1.6 + l.intensity * 1.1;
        const diff = wl - l.wl;
        sumIntensity += l.intensity * Math.exp(-(diff * diff) / (2 * sigma * sigma));
      }
      const clamped = Math.min(1.15, sumIntensity * powerFactor);
      const y = graphBottom - (clamped / 1.15) * graphHeight;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(W, graphBottom);
    ctx.closePath();

    const curveFill = ctx.createLinearGradient(0, graphTop, 0, graphBottom);
    curveFill.addColorStop(0, `${ion.plasmaCoreHex}66`);
    curveFill.addColorStop(1, "rgba(0, 0, 0, 0.05)");
    ctx.fillStyle = curveFill;
    ctx.fill();

    ctx.strokeStyle = ion.plasmaCoreHex;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 5. Marcas de graduación cada 25 nm
    ctx.fillStyle = "rgba(255, 255, 255, 0.32)";
    for (let w = 400; w <= 750; w += 25) {
      const xTick = ((w - minWL) / (maxWL - minWL)) * W;
      ctx.fillRect(xTick, plateBottom - 4, 1, 8);
    }

    // 6. Renderizar etiquetas interactivas de cada línea espectral debajo
    tagsContainer.innerHTML = ion.spectralLines
      .map((line) => {
        const col = wavelengthToRGB(line.wl);
        const isMain = line.intensity >= 0.9;
        return `
          <span class="wl-tag" data-wl="${line.wl}" style="${isMain ? `border-color: ${col.css};` : ""}">
            <span class="wl-dot" style="background: ${col.css}; box-shadow: 0 0 6px ${col.css}"></span>
            <b>${line.wl.toFixed(1)} nm</b> <small style="opacity:0.78">(${line.species} • ${Math.round(line.intensity * 100)}%)</small>
          </span>
        `;
      })
      .join("");

    tagsContainer.querySelectorAll(".wl-tag").forEach((tag) => {
      tag.addEventListener("mouseenter", () => {
        highlightedWavelength = Number(tag.getAttribute("data-wl"));
        renderRealisticSpectrumCanvas(activeElement.ionization, Number(voltageSlider.value));
      });
      tag.addEventListener("mouseleave", () => {
        highlightedWavelength = null;
        renderRealisticSpectrumCanvas(activeElement.ionization, Number(voltageSlider.value));
      });
    });
  }

  // Tooltip al pasar el cursor directamente sobre el lienzo del espectroscopio
  const spectrumCanvasEl = document.getElementById("spectrum-canvas");
  const spectrumTooltipEl = document.getElementById("spectrum-hover-tooltip");

  if (spectrumCanvasEl && spectrumTooltipEl) {
    spectrumCanvasEl.addEventListener("mousemove", (e) => {
      const rect = spectrumCanvasEl.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const hoverWL = 380 + relX * (760 - 380);
      const lines = activeElement.ionization.spectralLines;

      // Buscar si el cursor está cerca de una línea de emisión real
      let nearest = null;
      let minDist = 999;
      lines.forEach((l) => {
        const d = Math.abs(l.wl - hoverWL);
        if (d < minDist) {
          minDist = d;
          nearest = l;
        }
      });

      spectrumTooltipEl.style.opacity = "1";
      spectrumTooltipEl.style.left = `${Math.min(88, Math.max(12, relX * 100))}%`;

      if (nearest && minDist < 6.5) {
        const col = wavelengthToRGB(nearest.wl);
        highlightedWavelength = nearest.wl;
        spectrumTooltipEl.style.borderColor = col.css;
        spectrumTooltipEl.innerHTML = `<span style="color:${col.css}">●</span> <b>${nearest.wl.toFixed(1)} nm</b> — ${nearest.species} (Intensidad: ${Math.round(nearest.intensity * 100)}%)`;
        renderRealisticSpectrumCanvas(activeElement.ionization, Number(voltageSlider.value));
      } else {
        if (highlightedWavelength !== null) {
          highlightedWavelength = null;
          renderRealisticSpectrumCanvas(activeElement.ionization, Number(voltageSlider.value));
        }
        const col = wavelengthToRGB(hoverWL);
        spectrumTooltipEl.style.borderColor = "rgba(255,255,255,0.25)";
        spectrumTooltipEl.innerHTML = `<span style="color:${col.css}">●</span> Longitud de onda: <b>${Math.round(hoverWL)} nm</b>`;
      }
    });

    spectrumCanvasEl.addEventListener("mouseleave", () => {
      spectrumTooltipEl.style.opacity = "0";
      highlightedWavelength = null;
      renderRealisticSpectrumCanvas(activeElement.ionization, Number(voltageSlider.value));
    });
  }

  if (voltageSlider) {
    voltageSlider.addEventListener("input", updateIonizationSimulator);
    btnIonOff.addEventListener("click", () => {
      voltageSlider.value = 0;
      updateIonizationSimulator();
    });
    btnIonMax.addEventListener("click", () => {
      voltageSlider.value = 100;
      updateIonizationSimulator();
    });
  }

  // Inicializar todo el sitio con el simulador encendido al 85% para que se aprecie de inmediato
  if (voltageSlider) {
    voltageSlider.value = 85;
  }
  selectElement("fluorine");
  renderChemistryCards();
  renderComparisonTable();
});
