// Lógica interactiva para el Explorador de las 4 Esquinas de los Halógenos (Grupo 17)

document.addEventListener("DOMContentLoaded", () => {
  let activeElement = HALOGENS_DATA[0]; // Flúor por defecto

  const selectorListEl = document.getElementById("halogen-selector-list");
  const ambientGlowEl = document.getElementById("ambient-glow");
  const stageStatusTextEl = document.getElementById("stage-status-text");
  const detailOverlayEl = document.getElementById("corner-detail-overlay");
  const btnCloseDetail = document.getElementById("btn-close-detail");
  const btnResetView = document.getElementById("btn-reset-view");

  // Generador de ilustraciones SVG científicas personalizadas para cada esquina y elemento
  function createCornerSVG(element, cornerKey) {
    const c = element.colorAccent;
    if (cornerKey === "topRight") {
      // Diagrama atómico + orbitales 7 electrones de valencia
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="${c}" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="50" cy="50" r="28" stroke="${c}" stroke-opacity="0.65" stroke-width="1.5"/>
          <circle cx="50" cy="50" r="12" fill="${c}" fill-opacity="0.25" stroke="${c}" stroke-width="2"/>
          <text x="50" y="54" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold" font-family="Space Grotesk, sans-serif">${element.symbol}</text>
          <!-- 7 electrones de valencia característicos del Grupo 17 -->
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
      // Mineral cristalino + hoja/alimento natural
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
      // Matraz / Engranaje industrial y médico
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

    // bottomRight: Ampolla sellada de muestra física real
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

  // Fallback SVG elegante si una imagen externa no carga por falta de internet
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

  // 2. Actualizar el elemento central y las miniaturas de las 4 esquinas
  function selectElement(elementId) {
    const found = HALOGENS_DATA.find((item) => item.id === elementId);
    if (!found) return;
    activeElement = found;

    // Actualizar variables CSS globales con el color del halógeno
    document.documentElement.style.setProperty("--accent", activeElement.colorAccent);
    document.documentElement.style.setProperty("--accent-soft", `${activeElement.colorAccent}26`);
    ambientGlowEl.style.background = `radial-gradient(circle at 50% 25%, ${activeElement.colorAccent}22, transparent 62%)`;

    // Actualizar estado activo en la lista izquierda
    renderHalogenSelector();

    // Actualizar tarjeta central
    document.getElementById("hub-number").textContent = activeElement.number;
    document.getElementById("hub-state").textContent = activeElement.state;
    document.getElementById("hub-symbol").textContent = activeElement.symbol;
    document.getElementById("hub-name").textContent = activeElement.name;
    document.getElementById("hub-mass").textContent = `Masa: ${activeElement.atomicMass} • Periodo ${activeElement.period}`;
    document.getElementById("hub-config").textContent = activeElement.electronConfig;
    document.getElementById("hub-tagline").textContent = activeElement.tagline;

    // Actualizar las 4 esquinas (miniaturas + íconos SVG)
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

    // Cerrar vista expandida si estaba abierta para apreciar el cambio o actualizarla
    hideCornerDetail();
  }

  // 3. Mostrar el detalle completo cuando el usuario pasa el mouse por una esquina
  function showCornerDetail(cornerKey) {
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

    const pointsListEl = document.getElementById("detail-points-list");
    pointsListEl.innerHTML = cornerData.points
      .map((pt) => `<li>${pt}</li>`)
      .join("");

    // Resumen químico contextual según la esquina
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
        <strong>Dato Clave del Grupo 17 (${activeElement.name}):</strong> Electronegatividad ${activeElement.electronegativity} | Estados de oxidación: <b>${activeElement.oxidationStates}</b> | Configuración: <b>${activeElement.electronConfig}</b>.
      `;
    }

    stageStatusTextEl.innerHTML = `Inspeccionando <strong>${cornerData.cornerLabel}</strong> de <strong>${activeElement.name} (${activeElement.symbol})</strong> — Mueve el cursor fuera del recuadro o pulsa «Cerrar vista» para volver a las 4 esquinas.`;
    detailOverlayEl.classList.add("visible");
  }

  function hideCornerDetail() {
    detailOverlayEl.classList.remove("visible");
    stageStatusTextEl.innerHTML = `Elemento activo: <strong>${activeElement.name} (${activeElement.symbol})</strong>. Pasa el cursor por cualquiera de las <strong>4 esquinas</strong> para observar su información e imágenes.`;
  }

  // Eventos hover y click en las 4 esquinas del tablero
  const cornerZones = document.querySelectorAll(".corner-zone");
  cornerZones.forEach((zone) => {
    const cornerKey = zone.getAttribute("data-corner");
    zone.addEventListener("mouseenter", () => {
      showCornerDetail(cornerKey);
    });
    zone.addEventListener("click", () => {
      showCornerDetail(cornerKey);
    });
    zone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showCornerDetail(cornerKey);
      }
    });
  });

  // Cuando el cursor sale del área del escenario de 4 esquinas, vuelve a mostrar las 4 esquinas
  const stageEl = document.getElementById("four-corners-stage");
  stageEl.addEventListener("mouseleave", () => {
    hideCornerDetail();
  });

  btnCloseDetail.addEventListener("click", hideCornerDetail);
  btnResetView.addEventListener("click", hideCornerDetail);

  // Chips de acceso rápido del banner superior
  document.querySelectorAll("[data-corner-btn]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetCorner = chip.getAttribute("data-corner-btn");
      document.getElementById("explorador-esquinas").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => showCornerDetail(targetCorner), 350);
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

  // 6. Renderizar sección de Evidencia de Comandos con IA
  function renderEvidencePrompts() {
    const container = document.getElementById("evidence-list");
    container.innerHTML = AI_EVIDENCE_PROMPTS.map(
      (item) => `
      <div class="evidence-card">
        <h3>${item.step}</h3>
        <div class="prompt-box"><strong>Comando proporcionado a la IA:</strong><br/>"${item.command}"</div>
        <p class="evidence-result"><strong>Evidencia del resultado obtenido:</strong> ${item.resultSummary}</p>
      </div>
    `
    ).join("");
  }

  // Inicializar todo el sitio
  selectElement("fluorine");
  renderChemistryCards();
  renderComparisonTable();
  renderEvidencePrompts();
});
