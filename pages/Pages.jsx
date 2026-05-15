// Selva, Directors (roster grid), Director detail, and static pages (Studio, ContentDay, Services, Journal, Article, Contact, NotFound)

/* =========== DIRECTORS ROSTER =========== */
function DirectorsPage({ lang, openDirector }) {
  const dirs = window.SELVA_DATA.directors;
  return (
    <div className="page-fade" style={{paddingTop:96}}>
      <section style={dp.head}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:12}}>Roster</div>
          <h1 style={dp.title}>{lang === "es" ? "Directores" : "Directors"}</h1>
          <p style={dp.kicker}>
            {lang === "es"
              ? "Nuestros directores en casa."
              : "Our directors at home."}
          </p>
        </div>
      </section>
      <section style={dp.list}>
        {dirs.map((d, i) => (
          <a key={d.id} href="#" onClick={(e)=>{e.preventDefault(); openDirector(d.id);}} style={dp.row}>
            <div style={dp.rowLeft}>
              <div className="eyebrow" style={{color:"var(--accent)"}}>0{i+1}, {lang === "es" ? "Director" : "Director"}</div>
              <h2 style={dp.rowName}>{d.name}</h2>
              <div style={dp.rowTag}>{d.tagline[lang]}</div>
              <div style={dp.rowMeta}>{d.handle}</div>
              <div style={dp.rowClients}>
                {d.clients.join(" · ")}
              </div>
            </div>
            <div style={{...dp.rowRight, background: d.frame.bg, color: d.frame.fg}} className="grain">
              <div style={{position:"absolute", inset:16, border:`1px solid ${d.frame.fg}`, opacity:0.2}} />
              <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(60px, 8.5vw, 132px)", lineHeight:1, letterSpacing:"-0.02em"}}>
                {d.frame.word}
              </div>
              <div style={{position:"absolute", bottom:20, right:20, fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.28em", opacity:0.75}}>
                VIEW →
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
const dp = {
  head: { padding:"100px 40px 72px", borderBottom:"1px solid var(--hairline)" },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4.5vw, 64px)", lineHeight:0.92, letterSpacing:"-0.03em", margin:"0 0 32px", textTransform:"uppercase" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(15px, 1.2vw, 19px)", lineHeight:1.45, color:"var(--fg-2)", maxWidth:600, margin:0, textWrap:"pretty" },
  list: { padding:"40px 40px 120px" },
  row: { display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, padding:"72px 0", borderTop:"1px solid var(--border)", maxWidth:1440, margin:"0 auto", alignItems:"center", textDecoration:"none", color:"inherit" },
  rowLeft: { display:"flex", flexDirection:"column", gap:16 },
  rowName: { fontFamily:"var(--font-display)", fontSize:"clamp(34px, 4vw, 56px)", lineHeight:0.98, letterSpacing:"-0.015em", margin:"8px 0 0", textTransform:"uppercase" },
  rowTag: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:"clamp(18px, 1.5vw, 22px)", color:"var(--fg-2)", lineHeight:1.4 },
  rowMeta: { fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--fg-2)", marginTop:4 },
  rowClients: { fontFamily:"var(--font-sans)", fontSize:13, color:"var(--fg-2)", marginTop:12, letterSpacing:"0.05em" },
  rowRight: { position:"relative", aspectRatio:"4/3", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" },
};

/* =========== DIRECTOR DETAIL =========== */
function DirectorPage({ id, lang, openProject, openDirector, go }) {
  const d = window.SELVA_DATA.directors.find(x => x.id === id) || window.SELVA_DATA.directors[0];
  const projects = d.projectIds.map(pid => window.SELVA_DATA.projects.find(p => p.id === pid)).filter(Boolean);
  const roster = window.SELVA_DATA.directors;
  const idx = roster.indexOf(d);
  const nextD = roster[(idx+1) % roster.length];

  return (
    <div className="page-fade">
      {/* Director reel */}
      <section style={dd.reel}>
        <div style={{...dd.reelBg, background: d.frame.bg, color: d.frame.fg}} className="grain">
          <div style={{position:"absolute", inset:20, border:`1px solid ${d.frame.fg}`, opacity:0.15}} />
          <div style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(80px, 12vw, 200px)", lineHeight:0.88, letterSpacing:"-0.04em", textTransform:"uppercase"}}>
              {d.frame.word}
            </div>
          </div>
          <div style={{position:"absolute", bottom:40, left:40, right:40, display:"flex", justifyContent:"space-between", fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.28em", textTransform:"uppercase", opacity:0.85}}>
            <span>REEL · {d.name}</span>
            <span>{d.handle}</span>
          </div>
        </div>
      </section>

      <section style={dd.title}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:12}}>
            {d.role[lang]}
          </div>
          <h1 style={dd.name}>{d.name}</h1>
          <div className="eyebrow" style={{color:"var(--accent)", marginTop:8, marginBottom:14}}>
            {d.role[lang]}
          </div>
          <div style={dd.tagline}>{d.tagline[lang]}</div>
        </div>
      </section>

      <section style={dd.bio}>
        <div style={dd.bioInner}>
          {d.bio[lang].map((para, i) => <p key={i} style={dd.bioP}>{para}</p>)}
        </div>
      </section>

      <section style={dd.clients}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:24}}>{lang==="es"?"Clientes":"Clients"}</div>
          <div style={dd.clientsRow}>
            {d.clients.map((c, i) => (
              <div key={i} style={dd.clientCell}>
                <span style={dd.clientName}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={dd.works}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:24}}>{lang==="es"?"Trabajos destacados":"Selected work"}</div>
          <div style={dd.worksGrid}>
            {projects.map(p => (
              <a key={p.id} href="#" onClick={(e)=>{e.preventDefault(); openProject(p.id);}} style={{textDecoration:"none", color:"inherit"}}>
                <PosterThumb project={p} big />
                <div style={{marginTop:14, fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--fg-2)"}}>
                  {p.category} · {p.client} · {p.year}
                </div>
                <div style={{marginTop:4, fontFamily:"var(--font-display)", fontSize:"clamp(22px, 1.8vw, 30px)", letterSpacing:"-0.005em", textTransform:"uppercase"}}>
                  {p.title[lang]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={dd.nextD}>
        <a href="#" onClick={(e)=>{e.preventDefault(); openDirector(nextD.id);}} style={{textDecoration:"none", color:"inherit", maxWidth:1440, margin:"0 auto", display:"block"}}>
          <div style={{display:"flex", alignItems:"baseline", gap:20, marginBottom:16}}>
            <span className="eyebrow" style={{opacity:0.6}}>{lang==="es"?"Siguiente director":"Next director"}</span>
            <span style={{flex:1, height:1, background:"var(--border-strong)"}} />
          </div>
          <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(48px, 7vw, 108px)", lineHeight:0.95, letterSpacing:"-0.02em", textTransform:"uppercase"}}>
            {nextD.name} <span style={{color:"var(--accent)"}}>→</span>
          </div>
        </a>
      </section>
    </div>
  );
}

const dd = {
  reel: { position:"relative", height:"92vh", minHeight:600, paddingTop:80 },
  reelBg: { position:"absolute", inset:0, overflow:"hidden" },
  title: { padding:"80px 40px 40px", borderTop:"1px solid var(--hairline)" },
  name: { fontFamily:"var(--font-display)", fontSize:"clamp(56px, 8.5vw, 128px)", lineHeight:0.92, letterSpacing:"-0.03em", margin:"0 0 24px", textTransform:"uppercase" },
  tagline: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:"clamp(20px, 1.8vw, 28px)", color:"var(--fg-2)", maxWidth:720 },
  bio: { padding:"60px 40px", borderTop:"1px solid var(--hairline)" },
  bioInner: { maxWidth:800, margin:"0 auto" },
  bioP: { fontFamily:"var(--font-serif)", fontSize:"clamp(17px, 1.3vw, 20px)", lineHeight:1.65, color:"var(--fg-1)", margin:"0 0 28px", textWrap:"pretty" },
  clients: { padding:"80px 40px", borderTop:"1px solid var(--hairline)" },
  clientsRow: { display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:0, borderTop:"1px solid var(--border)", borderLeft:"1px solid var(--border)" },
  clientCell: { padding:"32px 24px", borderRight:"1px solid var(--border)", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center" },
  clientName: { fontFamily:"var(--font-condensed)", fontSize:18, letterSpacing:"0.05em", color:"var(--fg-1)", textTransform:"uppercase" },
  works: { padding:"80px 40px", borderTop:"1px solid var(--hairline)" },
  worksGrid: { display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"48px 24px" },
  cta: { padding:"100px 40px", borderTop:"1px solid var(--hairline)" },
  ctaLink: { display:"inline-block", fontFamily:"var(--font-display)", fontSize:"clamp(40px, 6vw, 84px)", letterSpacing:"-0.02em", textTransform:"uppercase", color:"var(--fg-1)", textDecoration:"none" },
  nextD: { padding:"80px 40px 140px", borderTop:"1px solid var(--hairline)" },
};

/* =========== STUDIO =========== */
function StudioPage({ lang }) {
  const isES = lang === "es";
  return (
    <div className="page-fade" style={{paddingTop:96}}>
      <section style={sp.hero}>
        <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center"}}>
          <div>
            <div className="eyebrow" style={{opacity:0.6, marginBottom:20}}>Estudio audiovisual · CDMX</div>
            <h1 style={sp.hd}>
              {isES
                ? <>Estudio audiovisual mexicano.<br/>Cine publicitario, ficción,<br/>laboratorio de tecnología y <em style={{fontFamily:"var(--font-serif)", fontStyle:"italic", color:"var(--rosa)"}}>sustentabilidad</em>.</>
                : <>Mexican audiovisual studio.<br/>Commercial cinema, fiction,<br/>technology and <em style={{fontFamily:"var(--font-serif)", fontStyle:"italic", color:"var(--rosa)"}}>sustainability</em> lab.</>}
            </h1>
            <p style={sp.kicker}>
              {isES
                ? "Cine para marcas."
                : "Cinema for brands."}
            </p>
          </div>
          <div style={sp.heroRight} className="grain">
            <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(40px, 5.5vw, 88px)", lineHeight:0.92, letterSpacing:"-0.025em", color:"var(--nuez)", textTransform:"uppercase"}}>
              Selva<br/><em style={{fontFamily:"var(--font-serif)", fontStyle:"italic", color:"var(--rosa)", fontSize:"0.85em"}}>Studio</em>
            </div>
            <div style={{marginTop:24, fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--rosa)"}}>
              México 2026 ✦ CDMX
            </div>
          </div>
        </div>
      </section>

      <section style={sp.body}>
        <div style={sp.bodyInner}>
          <div>
            <p style={sp.p}>
              <span style={sp.dropCap}>{isES ? "S" : "S"}</span>
              {isES
                ? "elva es un estudio audiovisual mexicano con base en CDMX. Hacemos cine publicitario, ficción y proyectos originales para streaming. La tecnología forma parte del proceso: previsualización con herramientas de IA, producción virtual cuando la locación cuesta más que la idea, integración de Runway, Midjourney y Sora en pre-producción. La usamos cuando suma al plano, y volvemos a cámara cuando no. Tecnología como método, no como producto."
                : "elva is a Mexican audiovisual studio based in CDMX. We make commercial cinema, fiction and streaming originals. Technology is part of the process: previsualization with AI tools, virtual production when the location costs more than the idea, integration of Runway, Midjourney and Sora in pre-production. We use it when it adds to the frame, and we return to the camera when it doesn't. Technology as method, not as product."}
            </p>
          </div>
        </div>

        {/* Sustainability anchor block */}
        <div style={sp.shortBlock}>
          <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:18}}>
            <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />{isES?"Sustentabilidad":"Sustainability"}
          </div>
          <h3 style={sp.shortTitle}>
            {isES
              ? <>Producir <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>sin dejar huella</em>.</>
              : <>Producing <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>without a trace</em>.</>}
          </h3>
          <p style={sp.shortDesc}>
            {isES
              ? "98% de materiales reciclados en set, 80% de proveedores locales, certificación B Corp en proceso. La sostenibilidad no es declaración, es método y datos."
              : "98% recycled set materials, 80% local suppliers, B Corp certification in process. Sustainability isn't a statement, it's method and data."}
          </p>
        </div>

        {/* 05, Mañana */}
        <div style={sp.future}>
          <div className="eyebrow" style={{opacity:0.55, marginBottom:16}}>05, {isES?"Hacia adelante":"What comes next"}</div>
          <p style={sp.futureP}>
            {isES
              ? "Estamos en desarrollo de tres películas. Los nombres todavía no podemos revelarlos."
              : "We're in development on three feature films. The titles can't be shared yet."}
          </p>
        </div>
      </section>

      {/* ============ VALORES ============ */}
      <section style={sp.values}>
        <div style={sp.valuesRail}>
          <span style={sp.valuesRailText}>{isES ? "VALORES" : "VALUES"}</span>
        </div>
        <div style={sp.valuesInner}>
          <div style={sp.valuesHead}>
            <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:20}}>
              <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />
              {isES ? "Las cuatro cosas que no negociamos" : "Four things we don't negotiate"}
            </div>
            <h2 style={sp.valuesTitle}>
              {isES
                ? <>Cine, laboratorio,<br/>organismo, <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>conciencia</em>.</>
                : <>Cinema, laboratory,<br/>organism, <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>conscience</em>.</>}
            </h2>
          </div>

          <div style={sp.valuesGrid}>
            {[
              {
                n:"01",
                t: isES?"Calidad cinematográfica":"Cinematic quality",
                d: isES
                  ? "Producción con estándares de cine. Cada pieza, comercial, vertical, digital, se rueda, ilumina y edita como si fuera a un festival. La calidad no es opcional, es método."
                  : "Cinema-grade production. Every piece, commercial, vertical, digital, is shot, lit and cut as if it were headed to a festival. Quality isn't optional, it's method.",
              },
              {
                n:"02",
                t: isES?"Laboratorio":"Laboratory",
                d: isES
                  ? "Probamos. Comparamos. Documentamos lo que falla. Usamos Runway, Midjourney, Sora cuando suman al plano, y volvemos a cámara cuando no. La tecnología es método, no producto."
                  : "We test. We compare. We document what fails. We use Runway, Midjourney, Sora when they add to the frame, and we return to the camera when they don't. Technology is method, not product.",
              },
              {
                n:"03",
                t: isES?"Organismo creativo":"Living organism",
                d: isES
                  ? "Nos comportamos como un organismo vivo, adaptándonos a cada proyecto. Una extensión creativa del cliente, alineados a sus objetivos, fieles a su esencia, ajustándonos a distintos presupuestos sin sacrificar calidad."
                  : "We behave like a living organism, adapting to every project. A creative extension of the client, aligned with their goals, faithful to their essence, flexing across budgets without sacrificing quality.",
              },
              {
                n:"04",
                t: isES?"Conciencia":"Conscience",
                d: isES
                  ? "En camino a certificación B Corp en 2026. Hoy: 98% de materiales reciclados en set, 80% de proveedores locales. Lo que falta: transporte. La sostenibilidad no es declaración, es método y datos."
                  : "On the path to B Corp certification in 2026. Today: 98% recycled set materials, 80% local suppliers. What's still pending: transport. Sustainability isn't a statement, it's method and data.",
              },
            ].map((v, i) => (
              <div key={v.n} style={sp.valueCard}>
                <div style={sp.valueSparkle}>✦</div>
                <div style={sp.valueN}>{v.n}</div>
                <h3 style={sp.valueT}>{v.t}</h3>
                <p style={sp.valueD}>{v.d}</p>
              </div>
            ))}
          </div>

          <div style={sp.valuesFoot}>
            <span style={sp.valuesFootLabel}>{isES ? "MÉXICO" : "MÉXICO"}</span>
            <span style={sp.valuesFootLine} />
            <span style={sp.valuesFootLabel}>{isES ? "VALORES" : "VALUES"}</span>
            <span style={sp.valuesFootLine} />
            <span style={sp.valuesFootLabel}>SELVA</span>
          </div>
        </div>
      </section>

      <section style={sp.team}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:24}}>{isES?"Equipo":"Team"}</div>
          <h3 style={sp.teamHd}>{isES ? "Las personas que firman cada pieza." : "The people who sign every piece."}</h3>
          <div style={sp.teamGrid}>
            {[
              ["Axel Torres",         isES ? "Dirección de Producción" : "Head of Production",     isES ? "Ha producido en México, España, Brasil y LATAM. Punto de contacto para clientes y agencias." : "Has produced in Mexico, Spain, Brazil and LATAM. Single point of contact for clients and agencies."],
              ["Raga",                isES ? "Dirección" : "Director",                              isES ? "Dos décadas dirigiendo comerciales. Travellings elegantes, comedia con timing perfecto." : "Two decades directing commercials. Elegant travelling shots, perfect comedic timing."],
              ["Manuel Verde",        isES ? "Productor Ejecutivo · Dirección de Estrategia" : "Executive Producer · Strategy Director",         isES ? "Estrategia creativa y de marca. Traduce briefs en arquitectura de proyecto." : "Creative and brand strategy. Translates briefs into project architecture."],
              ["Itzel Miranda",       isES ? "Producción Ejecutiva" : "Executive Production",        isES ? "Coordinación de rodajes, presupuestos y agenda con clientes y agencias." : "Shoot coordination, budgets and client/agency scheduling."],
              ["Laura Carbajal",      isES ? "Gerente Administrativa" : "Administrative Manager",     isES ? "Finanzas, operación y contabilidad del estudio." : "Finance, operations and studio accounting."],
              ["Moisés de la Cruz",   isES ? "Productor Creativo" : "Creative Producer",             isES ? "Concepto, narrativa y desarrollo creativo de cada proyecto." : "Concept, narrative and creative development for every project."],
              ["Ricardo Centeno",     isES ? "Director de Postproducción" : "Post-production Director", isES ? "Edición, color, sonido. Coordinación con New Art, Company 3 y Mute." : "Editing, color, sound. Coordination with New Art, Company 3 and Mute."],
              ["Charly, Cuco y Jack", isES ? "Seguridad" : "Security",                              isES ? "Vigilancia del estudio, recibimiento del equipo, presencia constante." : "Studio watch, crew welcome, constant presence."],
            ].map(([n, r, d]) => (
              <div key={n} style={sp.teamCard}>
                <div style={sp.teamAvatar} className="grain">
                  <span style={{fontFamily:"var(--font-display)", fontSize:48, color:"var(--nuez)", opacity:0.55}}>
                    {n.split(" ").map(w=>w[0]).slice(0,2).join("")}
                  </span>
                </div>
                <div style={sp.teamName}>{n}</div>
                <div style={sp.teamRole}>{r}</div>
                <div style={sp.teamCraft}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
const sp = {
  hero: { padding:"80px 40px", borderBottom:"1px solid var(--hairline)" },
  hd: { fontFamily:"var(--font-display)", fontSize:"clamp(16px, 2.1vw, 30px)", lineHeight:1.02, letterSpacing:"-0.02em", margin:"0 0 24px", textTransform:"uppercase", textWrap:"balance" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(18px, 1.5vw, 22px)", lineHeight:1.5, color:"var(--fg-2)", maxWidth:560, textWrap:"pretty" },
  heroRight: { position:"relative", aspectRatio:"4/3", background:"var(--vino)", padding:48, display:"flex", flexDirection:"column", justifyContent:"center", overflow:"hidden" },
  body: { padding:"100px 40px", borderTop:"1px solid var(--hairline)" },
  bodyInner: { maxWidth:1100, margin:"0 auto" },
  p: { fontFamily:"var(--font-serif)", fontSize:"clamp(16px, 1.15vw, 19px)", lineHeight:1.65, color:"var(--fg-1)", margin:0, textWrap:"pretty" },
  dropCap: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(64px, 7vw, 96px)",
    lineHeight:0.85,
    float:"left",
    marginRight:14,
    marginTop:6,
    color:"var(--rosa)",
  },
  shortBlock: {
    maxWidth:1100, margin:"96px auto 0",
    padding:"56px 40px",
    background:"var(--negro-500)",
    color:"var(--nuez)",
    border:"1px solid rgba(244,240,230,0.12)",
  },
  shortTitle: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(28px, 3.4vw, 52px)",
    lineHeight:0.98,
    letterSpacing:"-0.02em",
    margin:"0 0 20px",
    textTransform:"uppercase",
    color:"var(--nuez)",
    textWrap:"balance",
  },
  shortDesc: {
    fontFamily:"var(--font-serif)",
    fontStyle:"italic",
    fontSize:"clamp(16px, 1.25vw, 19px)",
    lineHeight:1.55,
    color:"var(--nuez)",
    opacity:0.78,
    margin:0,
    maxWidth:680,
    textWrap:"pretty",
  },
  future: {
    maxWidth:1100, margin:"72px auto 0",
  },
  futureP: {
    fontFamily:"var(--font-serif)",
    fontStyle:"italic",
    fontSize:"clamp(18px, 1.5vw, 24px)",
    lineHeight:1.5,
    color:"var(--fg-2)",
    margin:0,
    maxWidth:760,
    textWrap:"pretty",
  },
  teamCraft: {
    fontFamily:"var(--font-serif)",
    fontStyle:"italic",
    fontSize:13,
    lineHeight:1.5,
    color:"var(--fg-2)",
    marginTop:8,
    textWrap:"pretty",
  },
  team: { padding:"100px 40px 160px", borderTop:"1px solid var(--hairline)" },
  teamHd: { fontFamily:"var(--font-display)", fontSize:"clamp(40px, 5vw, 72px)", lineHeight:0.98, letterSpacing:"-0.02em", margin:"8px 0 56px", textTransform:"uppercase" },
  teamGrid: { display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:32 },
  teamCard: {},
  teamAvatar: { position:"relative", aspectRatio:"1/1", background:"var(--negro-500)", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", marginBottom:14 },
  teamName: { fontFamily:"var(--font-condensed)", fontSize:16, letterSpacing:"0.04em", textTransform:"uppercase" },
  teamRole: { fontFamily:"var(--font-sans)", fontSize:12, letterSpacing:"0.08em", color:"var(--fg-2)", marginTop:2, textTransform:"uppercase" },

  /* ===== VALORES ===== */
  values: {
    position:"relative",
    background:"var(--negro)",
    color:"var(--nuez)",
    padding:"120px 40px 140px",
    borderTop:"1px solid var(--hairline)",
    overflow:"hidden",
  },
  valuesRail: {
    position:"absolute",
    left:-4, top:"50%",
    transform:"translateY(-50%) rotate(-90deg)",
    transformOrigin:"left center",
    fontFamily:"var(--font-display)",
    color:"var(--rosa)",
    letterSpacing:"0.12em",
    opacity:0.95,
    pointerEvents:"none",
  },
  valuesRailText: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(44px, 6vw, 88px)",
    letterSpacing:"0.04em",
    color:"var(--rosa)",
    display:"inline-block",
    padding:"0 20px",
  },
  valuesInner: { maxWidth:1440, margin:"0 auto", position:"relative", paddingLeft:"clamp(48px, 9vw, 140px)" },
  valuesHead: { marginBottom:72, maxWidth:980 },
  valuesTitle: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(52px, 7.5vw, 128px)",
    lineHeight:0.92,
    letterSpacing:"-0.03em",
    margin:"0",
    textTransform:"uppercase",
    color:"var(--nuez)",
    textWrap:"balance",
  },
  valuesGrid: {
    display:"grid",
    gridTemplateColumns:"repeat(4, 1fr)",
    gap:24,
  },
  valueCard: {
    position:"relative",
    background:"var(--rosa)",
    color:"var(--vino)",
    padding:"44px 28px 32px",
    minHeight:340,
  },
  valueSparkle: {
    position:"absolute",
    top:16, right:18,
    color:"var(--vino)",
    opacity:0.7,
    fontSize:20,
    lineHeight:1,
  },
  valueN: {
    fontFamily:"var(--font-mono)",
    fontSize:11,
    letterSpacing:"0.24em",
    color:"var(--vino)",
    opacity:0.65,
    marginBottom:32,
  },
  valueT: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(22px, 1.9vw, 30px)",
    lineHeight:1.02,
    letterSpacing:"-0.01em",
    textTransform:"uppercase",
    color:"var(--vino)",
    margin:"0 0 20px",
    textWrap:"balance",
  },
  valueD: {
    fontFamily:"var(--font-serif)",
    fontSize:14.5,
    lineHeight:1.55,
    color:"var(--vino)",
    opacity:0.88,
    margin:0,
    textWrap:"pretty",
  },
  valuesFoot: {
    marginTop:56,
    display:"flex",
    alignItems:"center",
    gap:20,
  },
  valuesFootLabel: {
    fontFamily:"var(--font-sans)",
    fontSize:10,
    letterSpacing:"0.32em",
    textTransform:"uppercase",
    color:"var(--nuez)",
    opacity:0.55,
  },
  valuesFootLine: {
    flex:1,
    height:1,
    background:"rgba(244,240,230,0.3)",
  },
};

/* =========== CONTENT DAY (premium) =========== */
function ContentDayPage({ lang, go, openProject }) {
  const isES = lang === "es";
  const projects = window.SELVA_DATA.projects.filter(p => ["mercadopago-aqui","aeromexico-ruta","amazon-casa"].includes(p.id));
  return (
    <div className="page-fade">
      <section style={cdp.hero}>
        <div style={cdp.heroInner}>
          <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:28}}>
            <span className="hairline" style={{marginRight:10}} />Formato propietario · Selva
          </div>
          <h1 style={cdp.title}>
            Content<br/>Day<span style={{color:"var(--rosa)"}}>.</span>
          </h1>
          <p style={cdp.kicker}>
            {isES
              ? "Una jornada. Una locación. Hasta seis piezas cinematográficas entregadas simultáneamente. El formato que desarrollamos en 2022 para que una marca obtenga un paquete completo con la calidad de un solo rodaje."
              : "One day. One location. Up to six cinematic pieces delivered simultaneously. The format we developed in 2022 so a brand gets a full package with the quality of a single shoot."}
          </p>
        </div>
      </section>

      <section style={cdp.process}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{color:"var(--nuez)", opacity:0.7, marginBottom:40}}>Cómo funciona</div>
          <div style={cdp.steps}>
            {[
              { n:"01", t: isES?"Briefing estratégico":"Strategic briefing", d: isES?"Seis semanas antes. No escribimos un guión, diseñamos un sistema. Qué plano sirve a qué formato, qué escena se vuelve vertical.":"Six weeks out. We don't write a script, we design a system. Which shot serves which format, which scene becomes vertical."},
              { n:"02", t: isES?"Pre-producción paralela":"Parallel pre-production", d: isES?"Arte, talent, vestuario y post trabajando con el mismo mapa. La locación se diseña para servir a las seis piezas a la vez.":"Art, talent, wardrobe and post all working off the same map. Location designed to serve six pieces at once."},
              { n:"03", t: isES?"Rodaje · 1 día":"Shoot · 1 day", d: isES?"Unidad principal + segunda cámara + foto fija. Coreografiado, no apurado. Nadie repite setup. Nadie espera.":"Main unit + second camera + stills. Choreographed, not rushed. Nobody resets. Nobody waits."},
              { n:"04", t: isES?"Post simultánea":"Parallel post", d: isES?"Seis pistas de edición corriendo en paralelo. Un mismo grade. Sonido unificado. Entrega en dos semanas.":"Six editing tracks running in parallel. One grade. Unified sound. Delivery in two weeks."},
            ].map(s => (
              <div key={s.n} style={cdp.step}>
                <div style={cdp.stepN}>{s.n}</div>
                <div style={cdp.stepT}>{s.t}</div>
                <div style={cdp.stepD}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={cdp.numbers}>
        <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0, borderTop:"1px solid rgba(244,240,230,0.2)"}}>
          {[
            ["4-6", isES?"Piezas por jornada":"Pieces per day"],
            ["35-50%", isES?"Ahorro en costo":"Cost savings"],
            ["2 sem.", isES?"Entrega post":"Post delivery"],
            ["1 día", isES?"En set":"On set"],
          ].map(([n, l]) => (
            <div key={l} style={cdp.numCell}>
              <div style={cdp.numN}>{n}</div>
              <div style={cdp.numL}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={cdp.cases}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{color:"var(--nuez)", opacity:0.7, marginBottom:40}}>{isES?"Content Days realizados":"Content Days delivered"}</div>
          <div style={cdp.caseGrid}>
            {projects.map(p => (
              <a key={p.id} href="#" onClick={(e)=>{e.preventDefault(); openProject(p.id);}} style={{textDecoration:"none", color:"inherit"}}>
                <PosterThumb project={p} />
                <div style={{marginTop:12, fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.7}}>
                  {p.client} · {p.year}
                </div>
                <div style={{marginTop:4, fontFamily:"var(--font-display)", fontSize:22, textTransform:"uppercase", color:"var(--nuez)"}}>
                  {p.title[lang]}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={cdp.cta}>
        <div style={{maxWidth:1100, margin:"0 auto", textAlign:"center"}}>
          <h3 style={cdp.ctaH}>{isES?"¿Listo para un Content Day?":"Ready for a Content Day?"}</h3>
          <a href="mailto:axel@selvastudio.mx?subject=Content Day" style={cdp.ctaLink}>
            axel@selvastudio.mx →
          </a>
        </div>
      </section>
    </div>
  );
}
const cdp = {
  hero: { position:"relative", padding:"140px 40px 120px", background:"var(--vino)", color:"var(--nuez)", paddingTop:180 },
  heroInner: { maxWidth:1200, margin:"0 auto" },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(72px, 11vw, 180px)", lineHeight:0.85, letterSpacing:"-0.04em", margin:"0 0 40px", textTransform:"uppercase" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(20px, 1.7vw, 28px)", lineHeight:1.45, color:"var(--nuez)", maxWidth:720, margin:0, opacity:0.9, textWrap:"pretty" },
  process: { padding:"120px 40px", background:"var(--negro)", color:"var(--nuez)" },
  steps: { display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:32 },
  step: { paddingTop:24, borderTop:"1px solid rgba(244,240,230,0.2)" },
  stepN: { fontFamily:"var(--font-mono)", fontSize:12, letterSpacing:"0.2em", color:"var(--rosa)", marginBottom:24 },
  stepT: { fontFamily:"var(--font-display)", fontSize:"clamp(22px, 1.8vw, 28px)", lineHeight:1.1, textTransform:"uppercase", margin:"0 0 14px" },
  stepD: { fontFamily:"var(--font-serif)", fontSize:15, lineHeight:1.6, color:"var(--nuez)", opacity:0.75, textWrap:"pretty" },
  numbers: { padding:"0 40px", background:"var(--negro)", color:"var(--nuez)" },
  numCell: { padding:"56px 24px", borderRight:"1px solid rgba(244,240,230,0.15)", textAlign:"center" },
  numN: { fontFamily:"var(--font-display)", fontSize:"clamp(48px, 6vw, 88px)", color:"var(--rosa)", lineHeight:1 },
  numL: { fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.7, marginTop:12 },
  cases: { padding:"120px 40px", background:"var(--negro)", color:"var(--nuez)" },
  caseGrid: { display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24 },
  cta: { padding:"140px 40px", background:"var(--rosa)", color:"var(--vino)" },
  ctaH: { fontFamily:"var(--font-display)", fontSize:"clamp(48px, 7vw, 96px)", lineHeight:0.95, letterSpacing:"-0.02em", margin:"0 0 40px", textTransform:"uppercase", color:"var(--vino)" },
  ctaLink: { fontFamily:"var(--font-display)", fontSize:"clamp(32px, 4vw, 56px)", color:"var(--vino)", borderBottom:"2px solid var(--vino)", textDecoration:"none" },
};

/* =========== SERVICES =========== */
function ServicesPage({ lang, go, openProject }) {
  const isES = lang === "es";
  const cdProjects = window.SELVA_DATA.projects.filter(p => ["mercadopago-aqui","aeromexico-ruta","amazon-casa"].includes(p.id));
  return (
    <div className="page-fade" style={{paddingTop:96}}>
      <section style={sv.head}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:12}}>{isES?"Capacidades":"Capabilities"}</div>
          <h1 style={sv.title}>{isES ? "Servicios" : "Services"}</h1>
          <p style={sv.kicker}>
            {isES
              ? "Producción audiovisual para publicidad y música, documental y ficción."
              : "Audiovisual production for advertising and music, documentary and fiction."}
          </p>
        </div>
      </section>

      {/* ========= 01 · DIGITAL ========= */}
      <section style={sv.pillarRoot} data-bg="negro">
        <div style={sv.pillarHead}>
          <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:20}}>
            <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />
            01, {isES?"Pilar":"Pillar"}
          </div>
          <h2 style={sv.pillarTitle}>Digital<span style={{color:"var(--rosa)"}}>.</span></h2>
          <p style={sv.pillarLede}>
            {isES
              ? "Producción digital con estándar cinematográfico. Verticales, shorts, Content Day y Always On."
              : "Digital production with cinematic standard. Verticals, shorts, Content Day and Always On."}
          </p>
        </div>

        {/* ALWAYS ON · sub-format inside Digital */}
        <div style={sv.subFormatAO}>
          <div style={sv.subFormatHead}>
            <h3 style={{...sv.subFormatTitle, color:"var(--vino)"}}>Always On<span style={{color:"var(--vino)"}}>.</span></h3>
            <p style={{...sv.subFormatBody, color:"var(--vino)", opacity:1}}>
              {isES
                ? "Producción continua con tu marca todo el año."
                : "Continuous production with your brand year-round."}
            </p>
            <p style={{...sv.subFormatBody2, color:"var(--vino)", opacity:0.85}}>
              {isES
                ? "Marcas Always-On crecen 3.5x más rápido y reducen hasta 60% el costo por pieza."
                : "Always-On brands grow 3.5x faster and cut per-piece cost by up to 60%."}
            </p>
          </div>
          <div style={sv.aoCols}>
            {[
              {
                k: isES?"Qué incluye":"What's included",
                items: isES
                  ? ["Dirección creativa mensual","Producción de 8–12 piezas / mes","Unidad ligera residente","Edición y corrección de color integradas","Reporte de performance"]
                  : ["Monthly creative direction","8–12 pieces / month in production","Resident light unit","Integrated editing and color correction","Performance reporting"]
              },
              {
                k: isES?"Cómo funciona":"How it works",
                items: isES
                  ? ["Iguala trimestral o anual","Planeación editorial 90 días","Turnaround: 5 días por pieza","Dashboard de tracking","Un solo punto de contacto"]
                  : ["Quarterly or annual partnership","90-day editorial planning","Turnaround: 5 days per piece","Tracking dashboard","Single point of contact"]
              },
            ].map((col, i) => (
              <div key={i} style={sv.aoCol}>
                <div style={sv.aoColTitle}>{col.k}</div>
                <ul style={sv.aoList}>
                  {col.items.map((it, j) => (
                    <li key={j} style={sv.aoItem}><span style={sv.aoBullet}>·</span>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={sv.aoStatsRow}>
            {[
              ["3.5x", isES?"Crecimiento":"Growth"],
              ["−60%", isES?"Costo por pieza":"Cost per piece"],
              ["90 d.", isES?"Plan editorial":"Editorial plan"],
            ].map(([n, l]) => (
              <div key={l} style={sv.aoNumCell}>
                <div style={sv.aoNumN}>{n}</div>
                <div style={sv.aoNumL}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT DAY · sub-format inside Digital */}
        <div style={sv.subFormat}>
          <div style={sv.subFormatHead}>
            <h3 style={sv.subFormatTitle}>Content Day<span style={{color:"var(--rosa)"}}>.</span></h3>
            <p style={sv.subFormatBody}>
              {isES
                ? "Una arquitectura editorial: un concepto rector se vuelve hero film, campaña, social y BTS, todo en un solo día."
                : "An editorial architecture: a governing concept becomes hero film, campaign, social and BTS, all in a single day."}
            </p>
          </div>
          <div style={sv.signSteps}>
            {[
              { n:"01", t: isES?"Unidades simultáneas":"Parallel units", d: isES?"Unidad A: hero / TVC. B: foto fija de campaña. C: social. D: BTS.":"Unit A: hero / TVC. B: campaign stills. C: social. D: BTS."},
              { n:"02", t: isES?"Post por plataforma":"Platform-native post", d: isES?"Versionado masivo y adaptaciones por formato. Un mismo grade y sonido.":"Mass versioning and format-native adaptations. One grade, one sound."},
            ].map(s => (
              <div key={s.n} style={sv.stepCard}>
                <div style={sv.stepN}>{s.n}</div>
                <div style={sv.stepT}>{s.t}</div>
                <div style={sv.stepD}>{s.d}</div>
              </div>
            ))}
          </div>
          <div style={sv.cdNumbers}>
            {[
              ["Hasta 70", isES?"Piezas por rodaje":"Pieces per shoot"],
              ["2-5", isES?"Unidades en paralelo":"Parallel units"],
            ].map(([n, l]) => (
              <div key={l} style={sv.cdNumCell}>
                <div style={sv.numN}>{n}</div>
                <div style={sv.numL}>{l}</div>
              </div>
            ))}
          </div>
          <div style={sv.cdCases}>
            <div className="eyebrow" style={{color:"var(--nuez)", opacity:0.7, marginBottom:28}}>{isES?"Content Days entregados":"Content Days delivered"}</div>
            <div style={sv.caseGrid}>
              {cdProjects.map(p => (
                <a key={p.id} href="#" onClick={(e)=>{e.preventDefault(); openProject && openProject(p.id);}} style={{textDecoration:"none", color:"inherit"}}>
                  <PosterThumb project={p} />
                  <div style={{marginTop:14, fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.7}}>
                    {p.client} · {p.year}
                  </div>
                  <div style={{marginTop:6, fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:20, color:"var(--nuez)"}}>
                    {p.title[lang]}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Otros formatos digitales */}
        <div style={sv.subFormatPlain}>
          <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:18, opacity:0.85}}>
            <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />
            {isES?"Y también":"And also"}
          </div>
          <h3 style={sv.subFormatTitle}>{isES?"Piezas nativas digitales":"Digital-native pieces"}</h3>
          <p style={sv.subFormatBody}>
            {isES
              ? "Reels, TikToks, Shorts, banners, social. Verticales planeados verticales, no recortados."
              : "Reels, TikToks, Shorts, banners, social. Verticals planned vertical, not cropped."}
          </p>
        </div>
      </section>

      {/* ========= 02 · CREATIVIDAD ========= */}
      <section style={{...sv.pillarRoot, background:"var(--vino)", color:"var(--nuez)"}}>
        <div style={sv.pillarHead}>
          <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:20}}>
            <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />
            02, {isES?"Pilar":"Pillar"}
          </div>
          <h2 style={sv.pillarTitle}>{isES?"Creatividad":"Creative"}<span style={{color:"var(--rosa)"}}>.</span></h2>
          <p style={sv.pillarLede}>
            {isES
              ? "Desarrollamos campañas, guiones y conceptos creativos. La idea antes que la cámara."
              : "We develop campaigns, scripts and creative concepts. The idea before the camera."}
          </p>
          <p style={sv.pillarBody}>
            {isES
              ? "Entramos a la mesa antes del brief. Concepto, narrativa, guión y dirección estratégica. La pieza se piensa antes de filmarse."
              : "We sit down before the brief. Concept, narrative, script and strategic direction. The piece is thought before it's shot."}
          </p>
        </div>
        <div style={sv.pillarItems}>
          {[
            { t: isES?"Campañas":"Campaigns", d: isES?"Concepto rector y arquitectura de campaña multi-pieza.":"Governing concept and multi-piece campaign architecture."},
            { t: isES?"Guiones":"Scripts", d: isES?"Escritura y desarrollo narrativo para comercial, ficción y branded.":"Writing and narrative development for commercial, fiction and branded."},
            { t: isES?"Conceptos creativos":"Creative concepts", d: isES?"Big ideas, plataformas de marca, treatments visuales.":"Big ideas, brand platforms, visual treatments."},
            { t: isES?"Dirección estratégica":"Strategic direction", d: isES?"Traducimos objetivos de marca en arquitectura de proyecto.":"We translate brand objectives into project architecture."},
          ].map((it, i) => (
            <div key={it.t} style={sv.pillarItem}>
              <div style={{...sv.pillarItemN, color:"var(--rosa)"}}>{String(i+1).padStart(2,"0")}</div>
              <div style={sv.pillarItemT}>{it.t}</div>
              <div style={sv.pillarItemD}>{it.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= 03 · PUBLICIDAD ========= */}
      <section style={{...sv.pillarRoot, background:"var(--nuez)", color:"var(--negro)"}}>
        <div style={sv.pillarHead}>
          <div className="eyebrow" style={{color:"var(--vino)", marginBottom:20}}>
            <span className="hairline" style={{marginRight:10, background:"var(--vino)"}} />
            03, {isES?"Pilar":"Pillar"}
          </div>
          <h2 style={{...sv.pillarTitle, color:"var(--negro)"}}>{isES?"Cine publicitario":"Commercial cinema"}<span style={{color:"var(--vino)"}}>.</span></h2>
          <p style={{...sv.pillarLede, color:"var(--negro)", opacity:0.95}}>
            {isES
              ? "TVC, brand films, documentales de marca, cortometrajes publicitarios. Cuidados como cine, cámara, luz y actuación al nivel de festival."
              : "TVC, brand films, branded documentary, short-form advertising. Treated as cinema, camera, light and performance at festival level."}
          </p>
          <p style={{...sv.pillarBody, color:"var(--negro)", opacity:0.85}}>
            {isES
              ? "Cada brief se trabaja como un guión. La diferencia entre un commercial que se olvida y uno que se queda está en quién toma cada decisión."
              : "Each brief is worked like a screenplay. The difference between a forgettable commercial and one that stays is in who makes each decision."}
          </p>
        </div>
        <div style={sv.pillarItems}>
          {[
            { t: "TVC", d: isES?"Spots de 15, 30, 60 segundos. Comerciales de TV abierta, cable y streaming. La forma clásica del oficio.":"15, 30, 60-second spots. Open TV, cable and streaming commercials. The classic form of the craft."},
            { t: isES?"Brand films":"Brand films", d: isES?"Piezas de marca de 2 a 5 minutos. Para platforms propias, lanzamientos y posicionamiento.":"Brand pieces from 2 to 5 minutes. For owned platforms, launches and positioning."},
            { t: isES?"Documental de marca":"Branded documentary", d: isES?"Documental encargado por marca. Cuando lo que la marca quiere contar requiere tiempo real, no actuación.":"Brand-commissioned documentary. When what the brand wants to tell requires real time, not acting."},
            { t: isES?"Cortometraje publicitario":"Short-form advertising", d: isES?"Pieza corta con ambición de festival. Distribución de marca, lenguaje de cortometraje.":"Short with festival ambition. Brand distribution, short-film language."},
          ].map((it, i) => (
            <div key={it.t} style={sv.pillarItem}>
              <div style={{...sv.pillarItemN, color:"var(--vino)"}}>{String(i+1).padStart(2,"0")}</div>
              <div style={{...sv.pillarItemT, color:"var(--negro)"}}>{it.t}</div>
              <div style={{...sv.pillarItemD, color:"var(--negro)", opacity:0.7}}>{it.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= 04 · POST-PRODUCCIÓN ========= */}
      <section style={{...sv.pillarRoot, background:"var(--olivo)", color:"var(--nuez)"}}>
        <div style={sv.pillarHead}>
          <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:20}}>
            <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />
            04, {isES?"Pilar":"Pillar"}
          </div>
          <h2 style={sv.pillarTitle}>{isES?"Post-producción":"Post-production"}<span style={{color:"var(--rosa)"}}>.</span></h2>
          <p style={sv.pillarLede}>
            {isES
              ? "Edición, color, sound design, VFX. Talento de largometraje y campañas globales. Somos estudio de AI."
              : "Editing, color, sound design, VFX. Feature-film and global-campaign talent. We are an AI studio."}
          </p>
          <p style={sv.pillarBody}>
            {isES
              ? "Decisión creativa, no logística. La integración entre rodaje y post sostiene la autoría hasta el último frame."
              : "Creative decision, not logistical. The integration between shoot and post holds authorship to the last frame."}
          </p>
        </div>
        <div style={sv.pillarItems}>
          {[
            { t: isES?"Edición":"Editing", d: isES?"Editores que vienen de cine de festival. Ritmo, narrativa y restraint cuando la pieza lo necesita.":"Editors who come from festival cinema. Pacing, narrative and restraint when the piece needs it."},
            { t: "Color", d: isES?"Grade con coloristas de Company 3 y Mute. Look book detallado por proyecto, calibración para distintas plataformas.":"Grade with Company 3 and Mute colorists. Detailed look book per project, calibration for different platforms."},
            { t: "Sound design", d: isES?"Diseño sonoro y mezcla. Atmósfera, foley y voz cuidados como si fueran parte del cuadro, porque lo son.":"Sound design and mix. Atmosphere, foley and voice cared for as if part of the frame, because they are."},
            { t: "VFX", d: isES?"VFX integrados. Limpieza, extensión de set, composición. La regla: si el espectador lo nota, fallamos.":"Integrated VFX. Clean-up, set extension, comp. The rule: if the viewer notices, we failed."},
          ].map((it, i) => (
            <div key={it.t} style={sv.pillarItem}>
              <div style={sv.pillarItemN}>{String(i+1).padStart(2,"0")}</div>
              <div style={sv.pillarItemT}>{it.t}</div>
              <div style={sv.pillarItemD}>{it.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= 05 · FOTO FIJA ========= */}
      <section style={{...sv.pillarRoot, background:"var(--negro-500)", color:"var(--nuez)"}}>
        <div style={sv.pillarHead}>
          <div className="eyebrow" style={{color:"var(--rosa)", marginBottom:20}}>
            <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />
            05, {isES?"Pilar":"Pillar"}
          </div>
          <h2 style={sv.pillarTitle}>{isES?"Foto fija":"Stills"}<span style={{color:"var(--rosa)"}}>.</span></h2>
          <p style={sv.pillarLede}>
            {isES
              ? "Fotografía editorial, key visuals, retrato de talento. La pieza que define la campaña antes que el video."
              : "Editorial stills, key visuals, talent portraiture. The piece that defines the campaign before the video."}
          </p>
          <p style={sv.pillarBody}>
            {isES
              ? "Disciplina propia, con su dirección y luz. Fotógrafos del editorial y el retrato."
              : "Its own discipline, with its own direction and light. Photographers from editorial and portrait."}
          </p>
        </div>
      </section>
    </div>
  );
}
const sv = {
  head: { padding:"100px 40px 80px", borderBottom:"1px solid var(--hairline)" },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4.5vw, 64px)", lineHeight:0.92, letterSpacing:"-0.03em", margin:"0 0 32px", textTransform:"uppercase" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(18px, 1.5vw, 22px)", lineHeight:1.5, color:"var(--fg-2)", maxWidth:700, margin:0 },

  /* Pillar, shared shell for every service section */
  pillarRoot: {
    position:"relative",
    background:"var(--negro)",
    color:"var(--nuez)",
    padding:"120px 40px 140px",
  },
  pillarHead: { maxWidth:1100, margin:"0 auto 64px" },
  pillarTitle: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(56px, 8vw, 128px)",
    lineHeight:0.88,
    letterSpacing:"-0.03em",
    margin:"0 0 32px",
    textTransform:"uppercase",
    color:"var(--nuez)",
  },
  pillarLede: {
    fontFamily:"var(--font-serif)",
    fontStyle:"italic",
    fontSize:"clamp(18px, 1.6vw, 24px)",
    lineHeight:1.45,
    margin:"0 0 28px",
    maxWidth:760,
    textWrap:"pretty",
  },
  pillarBody: {
    fontFamily:"var(--font-serif)",
    fontSize:"clamp(16px, 1.2vw, 19px)",
    lineHeight:1.7,
    color:"var(--nuez)",
    opacity:0.82,
    margin:0,
    maxWidth:760,
    textWrap:"pretty",
  },
  pillarItems: {
    maxWidth:1100, margin:"0 auto",
    display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"40px 64px",
  },
  pillarItem: { paddingTop:24, borderTop:"1px solid rgba(244,240,230,0.2)" },
  pillarItemN: { fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.2em", color:"var(--rosa)", marginBottom:14 },
  pillarItemT: { fontFamily:"var(--font-display)", fontSize:"clamp(22px, 2vw, 30px)", lineHeight:1.1, letterSpacing:"-0.01em", textTransform:"uppercase", margin:"0 0 10px" },
  pillarItemD: { fontFamily:"var(--font-serif)", fontSize:15, lineHeight:1.55, color:"var(--nuez)", opacity:0.78, textWrap:"pretty" },

  /* Sub-format: Content Day inside Digital */
  subFormat: {
    maxWidth:1440, margin:"0 auto",
    padding:"40px 0 0",
    borderTop:"1px solid rgba(244,240,230,0.15)",
    marginTop:32,
  },
  subFormatHead: { maxWidth:1100, margin:"0 auto 56px", paddingTop:48 },
  subFormatTitle: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(40px, 5vw, 72px)",
    lineHeight:0.92,
    letterSpacing:"-0.025em",
    margin:"0 0 24px",
    textTransform:"uppercase",
    color:"var(--nuez)",
  },
  subFormatBody: {
    fontFamily:"var(--font-serif)",
    fontSize:"clamp(17px, 1.4vw, 20px)",
    lineHeight:1.5,
    color:"var(--nuez)",
    opacity:0.9,
    maxWidth:760,
    margin:"0 0 20px",
    textWrap:"pretty",
  },
  subFormatBody2: {
    fontFamily:"var(--font-serif)",
    fontStyle:"italic",
    fontSize:"clamp(16px, 1.3vw, 18px)",
    lineHeight:1.55,
    maxWidth:760,
    margin:0,
    textWrap:"pretty",
  },
  signSteps: { maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"32px 64px", marginBottom:56 },
  stepCard: { paddingTop:20, borderTop:"1px solid rgba(244,240,230,0.2)" },
  stepN: { fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.2em", color:"var(--rosa)", marginBottom:16 },
  stepT: { fontFamily:"var(--font-display)", fontSize:"clamp(20px, 1.6vw, 24px)", lineHeight:1.1, textTransform:"uppercase", margin:"0 0 10px" },
  stepD: { fontFamily:"var(--font-serif)", fontSize:14, lineHeight:1.55, color:"var(--nuez)", opacity:0.75, textWrap:"pretty" },
  cdNumbers: { maxWidth:1100, margin:"0 auto 56px", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0, border:"1px solid rgba(244,240,230,0.15)" },
  cdNumCell: { padding:"32px 20px", borderRight:"1px solid rgba(244,240,230,0.15)", textAlign:"center" },
  numN: { fontFamily:"var(--font-display)", fontSize:"clamp(36px, 4vw, 56px)", color:"var(--rosa)", lineHeight:1 },
  numL: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.7, marginTop:10 },
  cdCases: { maxWidth:1100, margin:"0 auto" },
  caseGrid: { display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24 },

  /* Sub-format: Always On inside Digital (rosa card on negro section) */
  subFormatAO: {
    maxWidth:1200,
    margin:"96px auto 0",
    padding:"72px 56px",
    background:"var(--rosa)",
    color:"var(--vino)",
  },
  aoCols: { display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, maxWidth:1100, margin:"40px auto 56px" },
  aoCol: {},
  aoColTitle: { fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--vino)", marginBottom:20, paddingBottom:12, borderBottom:"1px solid var(--vino)" },
  aoList: { listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:12 },
  aoItem: { fontFamily:"var(--font-serif)", fontSize:15, lineHeight:1.45, color:"var(--vino)", display:"flex", gap:10, textWrap:"pretty" },
  aoBullet: { fontFamily:"var(--font-display)", color:"var(--vino)", opacity:0.6 },
  aoStatsRow: { display:"grid", gridTemplateColumns:"repeat(4, 1fr)", borderTop:"1px solid rgba(58,14,14,0.3)" },
  aoNumCell: { padding:"32px 20px", borderRight:"1px solid rgba(58,14,14,0.2)", textAlign:"center" },
  aoNumN: { fontFamily:"var(--font-display)", fontSize:"clamp(36px, 4vw, 56px)", color:"var(--vino)", lineHeight:1 },
  aoNumL: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--vino)", opacity:0.7, marginTop:10 },

  /* Plain sub-format inside Digital */
  subFormatPlain: { maxWidth:1100, margin:"96px auto 0", paddingTop:48, borderTop:"1px solid rgba(244,240,230,0.15)" },
};

/* =========== JOURNAL HUB =========== */
function JournalPage({ lang, openArticle }) {
  const entries = window.SELVA_DATA.journal;
  return (
    <div className="page-fade" style={{paddingTop:96}}>
      <section style={jp.head}>
        <div style={{maxWidth:1440, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:12}}>Diario editorial · Selva</div>
          <h1 style={jp.title}>{lang==="es"?"Diario":"Journal"}</h1>
          <p style={jp.kicker}>
            {lang==="es"
              ? "Notas desde el estudio."
              : "Notes from the studio."}
          </p>
        </div>
      </section>
      <section style={jp.list}>
        <div style={{maxWidth:1200, margin:"0 auto"}}>
          {entries.map((e, i) => (
            <a key={e.id} href="#" onClick={(ev)=>{ev.preventDefault(); openArticle(e.id);}} style={jp.row}>
              <div style={jp.mediaCell}>
                {e.media && e.media.kind === "video" ? (
                  <video
                    src={e.media.src}
                    poster={e.media.poster}
                    autoPlay muted loop playsInline
                    style={jp.mediaEl}
                  />
                ) : (
                  <img
                    src={(e.media && e.media.src) || `https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80`}
                    alt=""
                    style={jp.mediaEl}
                  />
                )}
                {e.media && e.media.kind === "video" && (
                  <div style={jp.mediaBadge}>BTS · VIDEO</div>
                )}
              </div>
              <div style={jp.textCell}>
                <div style={jp.meta}>
                  <span>{e.date[lang]}</span>
                  <span>{e.author}</span>
                  <span>{e.readTime}</span>
                </div>
                <h2 style={jp.rowTitle}>{e.title[lang]}</h2>
                <p style={jp.rowKicker}>{e.kicker[lang]}</p>
                <div className="eyebrow" style={{color:"var(--accent)"}}>{lang==="es"?"Leer →":"Read →"}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
const jp = {
  head: { padding:"100px 40px 80px", borderBottom:"1px solid var(--hairline)" },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4.5vw, 64px)", lineHeight:0.92, letterSpacing:"-0.03em", margin:"0 0 32px", textTransform:"uppercase" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(18px, 1.5vw, 22px)", lineHeight:1.5, color:"var(--fg-2)", maxWidth:640, margin:0 },
  list: { padding:"60px 40px 140px" },
  row: { display:"grid", gridTemplateColumns:"minmax(280px, 420px) 1fr", gap:48, padding:"48px 0", borderTop:"1px solid var(--border)", textDecoration:"none", color:"inherit", alignItems:"start" },
  mediaCell: { position:"relative", aspectRatio:"4/3", overflow:"hidden", background:"var(--negro)" },
  mediaEl: { width:"100%", height:"100%", objectFit:"cover", display:"block" },
  mediaBadge: { position:"absolute", top:12, left:12, fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--nuez)", background:"rgba(0,0,0,0.55)", padding:"5px 9px", border:"1px solid rgba(244,240,230,0.3)" },
  textCell: { paddingTop:4 },
  meta: { display:"flex", gap:18, fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--fg-2)", marginBottom:16 },
  rowTitle: { fontFamily:"var(--font-display)", fontSize:"clamp(22px, 2.4vw, 34px)", lineHeight:1.08, letterSpacing:"-0.01em", margin:"0 0 16px", textTransform:"uppercase", textWrap:"balance" },
  rowKicker: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:"clamp(15px, 1.15vw, 17px)", lineHeight:1.5, color:"var(--fg-2)", margin:"0 0 18px", textWrap:"pretty" },
};

/* =========== ARTICLE =========== */
function Gallery({ items, cols }) {
  const c = cols || (items.length >= 3 ? 3 : items.length);
  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:`repeat(${c}, 1fr)`,
      gap:10,
      margin:"40px auto",
      width:"min(calc(100vw - 80px), 1120px)",
      position:"relative",
      left:"50%",
      transform:"translateX(-50%)",
    }}>
      {items.map((it, i) => (
        <figure key={i} style={{margin:0, padding:0, position:"relative", aspectRatio: c === 1 ? "16/9" : "4/5", overflow:"hidden", background:"var(--negro)"}}>
          <img src={it.src} alt={it.alt || ""} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}} />
          {it.caption && (
            <figcaption style={{position:"absolute", bottom:0, left:0, right:0, padding:"10px 12px", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--nuez)", background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)"}}>
              {typeof it.caption === "string" ? it.caption : (it.caption.es || it.caption.en)}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function ArticlePage({ id, lang, openArticle, go }) {
  const entries = window.SELVA_DATA.journal;
  const e = entries.find(x => x.id === id) || entries[0];
  const idx = entries.indexOf(e);
  const next = entries[(idx+1) % entries.length];
  return (
    <div className="page-fade" style={{paddingTop:120}}>
      <article style={ap.root}>
        <header style={ap.header}>
          <div style={ap.meta}>
            <span>{e.date[lang]}</span><span>·</span><span>{e.author}</span><span>·</span><span>{e.readTime}</span>
          </div>
          <h1 style={ap.title}>{e.title[lang]}</h1>
          <p style={ap.kicker}>{e.kicker[lang]}</p>
        </header>
        {e.media && (
          <figure style={ap.hero}>
            {e.media.kind === "video" ? (
              <video src={e.media.src} poster={e.media.poster} autoPlay muted loop playsInline style={ap.heroEl} />
            ) : e.media.kind === "vimeo" && e.media.vimeo ? (
              <iframe
                src={`https://player.vimeo.com/video/${e.media.vimeo.id}${e.media.vimeo.h ? "/" + e.media.vimeo.h : ""}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&controls=0&muted=1&dnt=1`}
                title={e.media.alt || ""}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{...ap.heroEl, border:0, pointerEvents:"none"}}
              />
            ) : (
              <img src={e.media.src} alt={e.media.alt || ""} style={ap.heroEl} />
            )}
            {e.media.kind === "video" && <figcaption style={ap.heroCap}>BTS · {lang==="es"?"Detrás de cámaras":"Behind the scenes"}</figcaption>}
          </figure>
        )}
        <div style={ap.divider}><span>✦</span></div>
        <div style={ap.body} className="article-prose">
          {(() => {
            const paras = e.body[lang];
            const total = paras.length;
            const gallery = e.gallery || [];
            const bts = e.bts;
            // Distribute: split gallery into two clusters, BTS sits near the end
            const gal1 = gallery.slice(0, Math.ceil(gallery.length / 2));
            const gal2 = gallery.slice(Math.ceil(gallery.length / 2));
            const gal1After = Math.max(1, Math.floor(total / 3));        // after ~1/3
            const gal2After = Math.max(gal1After + 1, Math.floor(total * 2 / 3)); // after ~2/3
            const btsAfter  = Math.max(gal2After + 1, total - 2);        // near the end
            const pullAfter = 1;                                         // after 2nd paragraph

            return paras.map((para, i) => (
              <React.Fragment key={i}>
                <p
                  style={{...ap.p, ...(i===0 ? ap.lead : {})}}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
                {i === pullAfter && e.pullquote && (
                  <blockquote style={ap.pull}>{e.pullquote[lang]}</blockquote>
                )}
                {i === gal1After && gal1.length > 0 && (
                  <Gallery items={gal1} cols={gal1.length >= 3 ? 3 : gal1.length} />
                )}
                {i === gal2After && gal2.length > 0 && (
                  <Gallery items={gal2} cols={gal2.length >= 2 ? 2 : 1} />
                )}
                {i === btsAfter && bts && (
                  <figure style={ap.bts}>
                    <video src={bts.src} poster={bts.poster} autoPlay muted loop playsInline style={ap.heroEl} />
                    <figcaption style={ap.heroCap}>BTS · {lang==="es"?"Detrás de cámaras":"Behind the scenes"}</figcaption>
                    {bts.caption && (
                      <div style={ap.bodyCap}>{bts.caption[lang] || bts.caption}</div>
                    )}
                  </figure>
                )}
              </React.Fragment>
            ));
          })()}
        </div>
        {e.projectId && (
          <div style={ap.projectCta}>
            <a href="#" onClick={(ev)=>{ev.preventDefault(); go(`project:${e.projectId}`);}} style={ap.projectCtaLink}>
              <span className="eyebrow" style={{opacity:0.6, marginBottom:8, display:"block"}}>
                {lang==="es"?"Ver proyecto":"View project"}
              </span>
              <span style={ap.projectCtaTitle}>
                {(window.SELVA_DATA.projects.find(p => p.id === e.projectId)?.title?.[lang]) || e.title[lang]} <span style={{color:"var(--accent)"}}>→</span>
              </span>
            </a>
          </div>
        )}
      </article>
      <section style={ap.next}>
        <a href="#" onClick={(ev)=>{ev.preventDefault(); openArticle(next.id);}} style={{textDecoration:"none", color:"inherit", maxWidth:1100, margin:"0 auto", display:"block"}}>
          <div style={{display:"flex", gap:20, alignItems:"baseline", marginBottom:16}}>
            <span className="eyebrow" style={{opacity:0.6}}>{lang==="es"?"Siguiente nota":"Next piece"}</span>
            <span style={{flex:1, height:1, background:"var(--border-strong)"}} />
          </div>
          <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(24px, 3vw, 40px)", lineHeight:1.1, letterSpacing:"-0.01em", textTransform:"uppercase", textWrap:"balance"}}>
            {next.title[lang]} <span style={{color:"var(--accent)"}}>→</span>
          </div>
        </a>
      </section>
    </div>
  );
}
const ap = {
  root: { maxWidth:800, margin:"0 auto", padding:"40px" },
  header: { marginBottom:40 },
  hero: { margin:"16px 0 0", padding:0, position:"relative", aspectRatio:"16/9", overflow:"hidden", background:"var(--negro)" },
  heroEl: { width:"100%", height:"100%", objectFit:"cover", display:"block" },
  heroCap: { position:"absolute", top:14, left:14, fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--nuez)", background:"rgba(0,0,0,0.55)", padding:"6px 10px", border:"1px solid rgba(244,240,230,0.3)" },
  bts: { margin:"48px auto 52px", padding:0, position:"relative", aspectRatio:"16/9", overflow:"hidden", background:"var(--negro)", width:"min(calc(100vw - 80px), 1120px)", left:"50%", transform:"translateX(-50%)" },
  bodyCap: { position:"absolute", bottom:14, left:14, right:14, fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--nuez)", background:"rgba(0,0,0,0.55)", padding:"10px 12px", maxWidth:"fit-content" },
  meta: { display:"flex", gap:12, fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--fg-2)", marginBottom:24 },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(28px, 3.2vw, 44px)", lineHeight:1.08, letterSpacing:"-0.015em", margin:"0 0 20px", textTransform:"uppercase", textWrap:"balance" },
  kicker: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:"clamp(17px, 1.35vw, 20px)", lineHeight:1.5, color:"var(--fg-2)", margin:0, textWrap:"pretty" },
  divider: { textAlign:"center", color:"var(--accent)", margin:"48px 0", fontSize:22 },
  body: {},
  p: { fontFamily:"var(--font-serif)", fontSize:"clamp(17px, 1.2vw, 19px)", lineHeight:1.7, color:"var(--fg-1)", margin:"0 0 24px", textWrap:"pretty" },
  lead: { fontSize:"clamp(20px, 1.4vw, 24px)", color:"var(--fg-1)" },
  pull: { fontFamily:"var(--font-display)", fontStyle:"italic", fontSize:"clamp(26px, 3vw, 38px)", lineHeight:1.25, color:"var(--fg-1)", margin:"40px 0", padding:"24px 0", borderTop:"1px solid var(--border-strong)", borderBottom:"1px solid var(--border-strong)", textAlign:"center", textWrap:"balance" },
  next: { padding:"80px 40px 140px", borderTop:"1px solid var(--hairline)" },
};

/* =========== CONTACT =========== */
function ContactPage({ lang }) {
  const isES = lang === "es";
  const [form, setForm] = React.useState({ name:"", email:"", message:"" });
  const [sent, setSent] = React.useState(false);
  const handle = (k, v) => setForm(f => ({...f, [k]: v}));
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <div className="page-fade" style={{paddingTop:96}}>
      <section style={cp.head}>
        <div style={{maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:64, alignItems:"end"}}>
          <div>
            <div className="eyebrow" style={{opacity:0.6, marginBottom:12}}>Ciudad de México</div>
            <h1 style={cp.title}>{isES?"Escríbenos.":"Write to us."}</h1>
                      </div>
          <div>
            <a href="mailto:info@selvastudio.mx" style={cp.email}>info@selvastudio.mx</a>
            <div style={cp.phones}>
              <div><span className="eyebrow" style={{opacity:0.55, marginRight:12}}>TEL</span>+52 55 1959 6185</div>
              <div><span className="eyebrow" style={{opacity:0.55, marginRight:12}}>IG</span>@selvastudiomx</div>
              <div><span className="eyebrow" style={{opacity:0.55, marginRight:12}}>DIR</span>Ciudad de México</div>
            </div>
          </div>
        </div>
      </section>

      <section style={cp.form}>
        <div style={{maxWidth:900, margin:"0 auto"}}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:32}}>{isES?"Cuéntanos":"Tell us"}</div>
          {sent ? (
            <div style={cp.sent}>
              <div style={{fontFamily:"var(--font-display)", fontSize:48, textTransform:"uppercase", marginBottom:20}}>
                ✦ {isES?"Gracias.":"Thank you."}
              </div>
              <p style={{fontFamily:"var(--font-serif)", fontSize:18, color:"var(--fg-2)"}}>
                {isES?"Te contactamos en menos de 24 horas.":"We'll contact you within 24 hours."}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={cp.formBody} action="mailto:info@selvastudio.mx" method="post" encType="text/plain">
              <Field label={isES?"Nombre":"Name"} v={form.name} onChange={v=>handle("name", v)} />
              <Field label="Email" v={form.email} onChange={v=>handle("email", v)} />
              <Field label={isES?"Mensaje":"Message"} v={form.message} onChange={v=>handle("message", v)} textarea />
              <button type="submit" style={cp.submit}>
                {isES?"Enviar brief":"Send brief"} <span style={{color:"var(--accent)"}}>→</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
function Field({ label, v, onChange, placeholder, textarea }) {
  return (
    <div style={{padding:"20px 0", borderTop:"1px solid var(--border)"}}>
      <div className="eyebrow" style={{opacity:0.55, marginBottom:8}}>{label}</div>
      {textarea ? (
        <textarea value={v} onChange={e=>onChange(e.target.value)} rows={4}
          style={{width:"100%", background:"transparent", border:0, color:"var(--fg-1)", fontFamily:"var(--font-serif)", fontSize:18, lineHeight:1.5, outline:"none", padding:0, resize:"vertical"}}
          placeholder={placeholder||""}/>
      ) : (
        <input type="text" value={v} onChange={e=>onChange(e.target.value)}
          style={{width:"100%", background:"transparent", border:0, color:"var(--fg-1)", fontFamily:"var(--font-serif)", fontSize:22, outline:"none", padding:0}}
          placeholder={placeholder||""}/>
      )}
    </div>
  );
}
const cp = {
  head: { padding:"100px 40px", borderBottom:"1px solid var(--hairline)" },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(28px, 4.5vw, 64px)", lineHeight:0.9, letterSpacing:"-0.03em", margin:"0 0 28px", textTransform:"uppercase", color:"var(--rosa)" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(18px, 1.5vw, 22px)", lineHeight:1.5, color:"var(--fg-2)", maxWidth:560, margin:0 },
  email: { fontFamily:"var(--font-display)", fontSize:"clamp(32px, 4vw, 56px)", color:"var(--accent)", borderBottom:"2px solid var(--accent)", display:"inline-block", paddingBottom:4, textDecoration:"none" },
  phones: { marginTop:28, display:"flex", flexDirection:"column", gap:10, fontFamily:"var(--font-sans)", fontSize:14 },
  form: { padding:"80px 40px 140px" },
  formBody: { display:"flex", flexDirection:"column" },
  submit: { marginTop:40, background:"transparent", border:"1px solid var(--fg-1)", padding:"16px 28px", fontFamily:"var(--font-sans)", fontSize:13, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--fg-1)", cursor:"pointer", alignSelf:"flex-start" },
  sent: { padding:"60px 0", textAlign:"center" },
};

/* =========== 404 =========== */
function NotFoundPage({ lang, go }) {
  return (
    <div className="page-fade" style={{paddingTop:120, minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:32, padding:"120px 40px", textAlign:"center"}}>
      <div className="eyebrow" style={{color:"var(--accent)"}}>404 · Take · No hubo</div>
      <h1 style={{fontFamily:"var(--font-display)", fontSize:"clamp(56px, 10vw, 140px)", lineHeight:0.88, letterSpacing:"-0.03em", margin:0, textTransform:"uppercase"}}>
        Corte.<br/><span style={{color:"var(--accent)"}}>Acción.</span>
      </h1>
      <p style={{fontFamily:"var(--font-serif)", fontSize:22, color:"var(--fg-2)", maxWidth:640, margin:0}}>
        {lang === "es"
          ? "Esta página se quedó en el piso de edición. Vuelve al Home o busca otra escena."
          : "This page ended up on the edit room floor. Head back home or pick another scene."}
      </p>
      <div style={{display:"flex", gap:14, marginTop:16}}>
        <button onClick={()=>go("home")} style={{border:"1px solid var(--fg-1)", background:"transparent", padding:"14px 22px", fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--fg-1)", cursor:"pointer"}}>
          {lang==="es"?"Volver al Home":"Back to home"} →
        </button>
        <button onClick={()=>go("work")} style={{border:"1px solid var(--border-strong)", background:"transparent", padding:"14px 22px", fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--fg-2)", cursor:"pointer"}}>
          {lang==="es"?"Ver el trabajo":"See the work"} →
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { DirectorsPage, DirectorPage, StudioPage, ContentDayPage, ServicesPage, JournalPage, ArticlePage, ContactPage, NotFoundPage });
