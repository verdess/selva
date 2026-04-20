// Selva Studio — Home page. Seven folds per brief.

/* ---------- Fold 1: Hero — Vimeo reel (selvastudio.mx institutional reel) ---------- */
function HeroReel({ sound, setSound, tweaks, lang }) {
  const treatment = tweaks.hero || "video";
  const heroVimeo = window.SELVA_DATA.VIMEO_HERO || { id: "1117293706" };

  // Four distinct hero treatments. Default is the real Vimeo reel.
  const mode = treatment === "gradient" ? "gradient"
             : treatment === "single"   ? "single"
             : treatment === "stills"   ? "stills"
             : "video";

  return (
    <section style={hero.root}>
      {mode === "video"    && <VimeoBackground vimeoId={heroVimeo.id} sound={sound} />}
      {mode === "gradient" && <GradientReel />}
      {mode === "single"   && <SingleStill />}
      {mode === "stills"   && <StillsLoop />}

      <div style={hero.metaBL}>
        <span className="eyebrow" style={{color:"var(--nuez)"}}>
          {window.SELVA_DATA.copy.heroMeta[lang]}
        </span>
      </div>

      <button onClick={()=>setSound(!sound)} style={hero.sound} aria-pressed={sound}>
        <span style={{opacity:sound?1:0.55}}>{sound ? "SOUND ON" : "SOUND OFF"}</span>
        <span style={{width:7, height:7, borderRadius:"50%", background: sound ? "var(--rosa)" : "var(--nuez)", boxShadow:"0 0 0 1px rgba(244,240,230,.4)", transition:"background 200ms"}} />
      </button>

      <div style={hero.reelTag}>
        <span>REEL · 2026</span>
        <span style={{width:0, height:0, borderLeft:"6px solid currentColor", borderTop:"4px solid transparent", borderBottom:"4px solid transparent"}} />
      </div>

      {/* Scroll hint */}
      <div style={hero.scroll}>
        <span>{lang === "es" ? "Desliza" : "Scroll"}</span>
        <span style={{display:"inline-block", width:1, height:32, background:"currentColor", marginTop:8, animation:"scrollLine 2s ease-in-out infinite"}} />
      </div>
    </section>
  );
}

/* Vimeo background — full-bleed, autoplay, loop, muted/unmuted via sound toggle.
   Uses Vimeo player-params so the UI is completely hidden.  */
function VimeoBackground({ vimeoId, sound }) {
  const src =
    `https://player.vimeo.com/video/${vimeoId}` +
    `?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&controls=0&muted=${sound ? 0 : 1}&dnt=1`;
  return (
    <div style={hero.reelStage}>
      <div style={hero.videoWrap}>
        <iframe
          key={sound ? "on" : "off"}
          src={src}
          title="Selva Studio reel"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={hero.videoFrame}
        />
      </div>
      <div style={hero.vignette} />
      <div style={hero.bottomScrim} />
    </div>
  );
}

/* --- Hero variants --- */

// Stills loop: 4 cross-fading film-stills evoking real frames.
function StillsLoop() {
  const stills = [
    // desert dawn — Toyota-like
    { name:"desert", layers: [
      "radial-gradient(ellipse 90% 60% at 50% 80%, #8a5a2e 0%, transparent 60%)",
      "radial-gradient(ellipse 60% 50% at 60% 35%, rgba(255,200,140,0.4) 0%, transparent 60%)",
      "linear-gradient(180deg, #1a0f08 0%, #2c1a0f 40%, #61371a 70%, #8a5a2e 100%)",
    ]},
    // humid jungle night — Apple-like
    { name:"jungle", layers: [
      "radial-gradient(ellipse 80% 55% at 30% 60%, rgba(40,80,55,0.7) 0%, transparent 60%)",
      "radial-gradient(ellipse 50% 40% at 75% 45%, rgba(200,140,100,0.25) 0%, transparent 60%)",
      "linear-gradient(180deg, #050a06 0%, #0d1a10 50%, #1a2d1d 100%)",
    ]},
    // kitchen warm interior — Amazon Casa-like
    { name:"kitchen", layers: [
      "radial-gradient(ellipse 70% 50% at 55% 50%, rgba(230,150,80,0.55) 0%, transparent 60%)",
      "radial-gradient(ellipse 40% 30% at 25% 30%, rgba(240,200,160,0.3) 0%, transparent 60%)",
      "linear-gradient(180deg, #2b1a0f 0%, #4a2a18 60%, #6a3d22 100%)",
    ]},
    // rosa neon city — Mercado Pago-like
    { name:"city", layers: [
      "radial-gradient(ellipse 70% 60% at 40% 55%, rgba(243,174,180,0.45) 0%, transparent 60%)",
      "radial-gradient(ellipse 40% 30% at 70% 30%, rgba(102,69,69,0.6) 0%, transparent 60%)",
      "linear-gradient(180deg, #0a0808 0%, #1a1010 50%, #2d1a1c 100%)",
    ]},
  ];
  return (
    <div style={hero.reelStage} className="grain">
      {stills.map((s, i) => (
        <div key={s.name} style={{
          position:"absolute", inset:0,
          background: s.layers.join(", "),
          animation: `stillFade 16s ease-in-out infinite`,
          animationDelay: `${i * 4}s`,
          opacity: 0,
        }} />
      ))}
      {/* Letterbox */}
      <div style={{position:"absolute", left:0, right:0, top:0, height:64, background:"#000", pointerEvents:"none"}} />
      <div style={{position:"absolute", left:0, right:0, bottom:0, height:64, background:"#000", pointerEvents:"none"}} />
      {/* Vignette */}
      <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)", pointerEvents:"none"}} />
    </div>
  );
}

function GradientReel() {
  return (
    <div style={hero.reelStage} className="grain">
      <div style={{position:"absolute", inset:"-10%", background:"radial-gradient(ellipse 70% 60% at 35% 65%, rgba(200,110,60,0.55), transparent 55%)", animation:"reelPan 24s ease-in-out infinite alternate"}} />
      <div style={{position:"absolute", inset:"-10%", background:"radial-gradient(ellipse 55% 40% at 70% 40%, rgba(40,80,60,0.45), transparent 60%)", animation:"reelPan 32s ease-in-out infinite alternate-reverse", mixBlendMode:"screen"}} />
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, transparent 65%, rgba(0,0,0,0.65) 100%)"}} />
      <div style={{position:"absolute", left:0, right:0, top:0, height:56, background:"#000"}} />
      <div style={{position:"absolute", left:0, right:0, bottom:0, height:56, background:"#000"}} />
    </div>
  );
}

function SingleStill() {
  return (
    <div style={hero.reelStage} className="grain">
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, #120a06 0%, #3a1f12 50%, #6e3f22 100%)"}} />
      <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 50% at 50% 65%, rgba(243,174,180,0.18) 0%, transparent 60%)"}} />
      <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)"}} />
    </div>
  );
}

const hero = {
  root: {
    position:"relative", height:"100vh", minHeight:680, maxHeight:1100,
    overflow:"hidden", color:"var(--nuez)",
  },
  reelStage: { position:"absolute", inset:0, background:"#050505", overflow:"hidden" },
  videoWrap: {
    position:"absolute",
    top:"50%", left:"50%",
    // Force a 16:9 iframe that always covers the viewport — ours is fixed-height,
    // so scale 177.77vh (16/9) up to cover the width. This is the classic bg-video trick.
    width:"max(100vw, 177.78vh)",
    height:"max(56.25vw, 100vh)",
    transform:"translate(-50%, -50%)",
    pointerEvents:"none",
  },
  videoFrame: { width:"100%", height:"100%", border:0, display:"block" },
  vignette: { position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)", pointerEvents:"none" },
  bottomScrim: { position:"absolute", left:0, right:0, bottom:0, height:"35%", background:"linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.75) 100%)", pointerEvents:"none" },
  metaBL: { position:"absolute", left:40, bottom:40, zIndex:3, display:"flex", alignItems:"center", gap:14 },
  sound: {
    position:"absolute", right:40, bottom:40, zIndex:3,
    display:"inline-flex", alignItems:"center", gap:10,
    background:"transparent", border:0, color:"var(--nuez)", cursor:"pointer",
    fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase",
    fontWeight:500, padding:0,
  },
  reelTag: {
    position:"absolute", right:40, top:96, zIndex:3,
    display:"inline-flex", alignItems:"center", gap:10,
    fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.24em", color:"var(--nuez)", opacity:0.75,
  },
  scroll: {
    position:"absolute", left:"50%", bottom:40, transform:"translateX(-50%)", zIndex:3,
    display:"flex", flexDirection:"column", alignItems:"center",
    fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase",
    color:"var(--nuez)", opacity:0.55,
  },
};

/* ---------- Fold 2: Manifiesto ---------- */
function FoldManifesto({ tweaks, lang }) {
  const m = window.SELVA_DATA.copy.manifestos[tweaks.manifesto || "v1"];
  const lines = m[lang];
  return (
    <section style={mf.root}>
      <div style={mf.eyebrow}>
        <span className="hairline" />
        <span className="eyebrow">Manifiesto · 01</span>
        <span className="hairline" />
      </div>
      <h2 style={mf.headline}>
        {lines[0]}<br/><span style={{color:"var(--accent)"}}>{lines[1]}</span>
      </h2>
      <div style={mf.markWrap}>
        <img src="assets/logos/pantera-nuez.png" alt="" style={{height:44, opacity:0.5}} />
      </div>
    </section>
  );
}
const mf = {
  root: { position:"relative", background:"var(--bg)", color:"var(--fg-1)", minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"140px 40px", gap:48 },
  eyebrow: { display:"flex", alignItems:"center", gap:14, color:"var(--fg-1)", opacity:0.7 },
  headline: { fontFamily:"var(--font-display)", fontWeight:400, fontSize:"clamp(38px, 7vw, 160px)", lineHeight:0.92, letterSpacing:"-0.02em", textAlign:"center", margin:0, textTransform:"uppercase", textWrap:"balance", width:"100%", maxWidth:"100%", overflowWrap:"break-word", wordBreak:"break-word", hyphens:"auto" },
  markWrap: { marginTop:16, opacity:0.8 },
};

/* ---------- Fold 3: Directors ---------- */
function FoldDirectors({ lang, go }) {
  const dirs = window.SELVA_DATA.directors;
  return (
    <section style={dr.root}>
      <div style={dr.head}>
        <span className="eyebrow" style={{opacity:0.6}}>{lang === "es" ? "Directores · Roster" : "Directors · Roster"}</span>
        <h3 style={dr.title}>{lang === "es" ? "Directores" : "Directors"}</h3>
        <a href="#" onClick={(e)=>{e.preventDefault(); go("directors");}} className="eyebrow underline-hairline" style={{justifySelf:"end", color:"var(--fg-1)"}}>
          {lang === "es" ? "Ver todos →" : "See all →"}
        </a>
      </div>
      <div style={dr.row}>
        {dirs.map((d, i) => (
          <a key={d.id} href="#" onClick={(e)=>{e.preventDefault(); go({ name: "director", id: d.id });}} style={dr.card}>
            <div style={{...dr.portrait, background: d.frame.bg, color: d.frame.fg}} className="grain">
              <div style={dr.portraitFrame}>
                <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(72px, 10vw, 180px)", lineHeight:1}}>
                  {d.frame.word}
                </div>
                <div style={{fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.3em", opacity:0.75, marginTop:18, textTransform:"uppercase"}}>
                  {d.handle}
                </div>
              </div>
              <div style={{position:"absolute", top:16, left:16, fontSize:10, letterSpacing:"0.28em", fontFamily:"var(--font-sans)", textTransform:"uppercase", opacity:0.8}}>
                {`0${i+1}`.slice(-2)}
              </div>
              <div style={{position:"absolute", bottom:16, right:16, fontSize:10, letterSpacing:"0.28em", fontFamily:"var(--font-sans)", textTransform:"uppercase", opacity:0.8}}>
                DIR
              </div>
            </div>
            <div style={dr.name}>{d.name}</div>
            <div style={dr.tag}>{d.tagline[lang]}</div>
            <div style={dr.credits}>{d.credits[lang].join(" · ")}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
const dr = {
  root: { background:"var(--bg)", color:"var(--fg-1)", padding:"120px 40px 140px", borderTop:"1px solid var(--hairline)" },
  head: { maxWidth:1440, margin:"0 auto 64px", display:"grid", gridTemplateColumns:"1fr auto 1fr", alignItems:"baseline", gap:24 },
  title: { fontFamily:"var(--font-display)", fontWeight:400, fontSize:"clamp(48px, 8vw, 120px)", letterSpacing:"-0.02em", lineHeight:1, margin:0, textTransform:"uppercase", textAlign:"center" },
  row: { maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:24 },
  card: { textDecoration:"none", color:"inherit", cursor:"pointer" },
  portrait: { position:"relative", width:"100%", aspectRatio:"3/4", overflow:"hidden", marginBottom:18, display:"flex", alignItems:"center", justifyContent:"center" },
  portraitFrame: { display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" },
  name: { fontFamily:"var(--font-display)", fontWeight:400, fontSize:"clamp(22px, 2vw, 30px)", letterSpacing:"-0.005em", lineHeight:1.05, textTransform:"uppercase", marginBottom:8 },
  tag: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:14, lineHeight:1.4, color:"var(--fg-2)", marginBottom:10 },
  credits: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--fg-2)", opacity:0.7 },
};

/* ---------- Fold 4: Work grid (asymmetric hero) ---------- */
function FoldWork({ lang, go, openProject }) {
  const ps = window.SELVA_DATA.projects.slice(0, 8);
  return (
    <section style={wf.root}>
      <div style={wf.head}>
        <div>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:8}}>Selected · 2024 — 2026</div>
          <h3 style={wf.title}>{lang === "es" ? "Proyectos" : "Work"}</h3>
        </div>
        <a href="#" onClick={(e)=>{e.preventDefault(); go("work");}} className="eyebrow underline-hairline" style={{alignSelf:"end"}}>
          {lang === "es" ? "Archivo completo →" : "Full archive →"}
        </a>
      </div>
      <div style={wf.grid}>
        {ps.map((p, i) => (
          <a key={p.id} href="#" onClick={(e)=>{e.preventDefault(); openProject(p.id);}} style={{...wf.tile, ...wf["tile"+i]}}>
            <PosterThumb project={p} big={i===0} />
            <div style={wf.meta}>
              <div style={wf.titleSmall}>{p.title[lang]}</div>
              <div style={wf.client}>{p.client} · Dir · {p.director} · {p.year}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
const wf = {
  root: { background:"var(--bg)", color:"var(--fg-1)", padding:"120px 40px 160px", borderTop:"1px solid var(--hairline)" },
  head: { maxWidth:1440, margin:"0 auto 56px", display:"flex", justifyContent:"space-between", alignItems:"flex-end" },
  title: { fontFamily:"var(--font-display)", fontWeight:400, fontSize:"clamp(48px, 8vw, 120px)", letterSpacing:"-0.02em", lineHeight:1, margin:0, textTransform:"uppercase" },
  grid: { maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:"32px 24px" },
  tile: { textDecoration:"none", color:"inherit" },
  tile0: { gridColumn:"1 / span 8", gridRow:"span 2" },
  tile1: { gridColumn:"9 / span 4", gridRow:"span 1" },
  tile2: { gridColumn:"9 / span 4", gridRow:"span 1" },
  tile3: { gridColumn:"1 / span 4", gridRow:"span 1" },
  tile4: { gridColumn:"5 / span 4", gridRow:"span 1" },
  tile5: { gridColumn:"9 / span 4", gridRow:"span 1" },
  tile6: { gridColumn:"1 / span 6", gridRow:"span 1" },
  tile7: { gridColumn:"7 / span 6", gridRow:"span 1" },
  meta: { marginTop:14, display:"flex", flexDirection:"column", gap:6 },
  client: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--fg-2)", opacity:0.75 },
  titleSmall: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:"clamp(18px, 1.4vw, 22px)", letterSpacing:"0", textTransform:"none", lineHeight:1.15, color:"var(--fg-1)" },
};

/* ---------- Fold 5: Content Day ---------- */
function FoldContentDay({ lang, go }) {
  return (
    <section style={cd.root}>
      <div style={cd.inner}>
        <div style={cd.left}>
          <div className="eyebrow" style={{color:"var(--nuez)", opacity:0.7, marginBottom:24}}>
            <span className="hairline" style={{marginRight:12}} />
            Formato propietario · Selva
          </div>
          <h3 style={cd.title}>
            Content<br/>Day<span style={{color:"var(--rosa)"}}>.</span>
          </h3>
          <p style={cd.desc}>
            {lang === "es"
              ? "Una jornada. Una locación. Cuatro, cinco, seis piezas simultáneas. El formato que desarrollamos para que una marca obtenga un paquete completo sin triplicar el presupuesto — ni perder calidad cinematográfica."
              : "One day. One location. Four, five, six simultaneous pieces. The format we developed so a brand gets a full package without tripling the budget — or losing cinematic quality."}
          </p>
          <a href="#" onClick={(e)=>{e.preventDefault(); go("content-day");}} style={cd.cta}>
            <span>{lang === "es" ? "Cómo funciona" : "How it works"}</span>
            <span style={{marginLeft:10}}>→</span>
          </a>
          <div style={cd.stats}>
            <div>
              <div style={cd.statN}>35—50%</div>
              <div style={cd.statL}>{lang === "es" ? "Ahorro en costo total" : "Total cost savings"}</div>
            </div>
            <div>
              <div style={cd.statN}>4—6</div>
              <div style={cd.statL}>{lang === "es" ? "Piezas por jornada" : "Pieces per day"}</div>
            </div>
            <div>
              <div style={cd.statN}>6 sem.</div>
              <div style={cd.statL}>{lang === "es" ? "Pre-producción" : "Pre-production"}</div>
            </div>
          </div>
        </div>
        <div style={cd.right}>
          <div style={cd.poster}>
            <div style={cd.posterInner}>
              <div style={{fontFamily:"var(--font-display)", fontSize:"clamp(48px, 7vw, 120px)", lineHeight:0.9, letterSpacing:"-0.02em", color:"var(--vino)"}}>
                CONTENT<br/>DAY
              </div>
              <div style={{marginTop:20, fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:18, color:"var(--vino)"}}>
                Un formato Selva.
              </div>
              <div style={cd.posterStrip}>
                <span>GUADALAJARA</span>
                <span>✦</span>
                <span>CDMX</span>
                <span>✦</span>
                <span>MONTERREY</span>
              </div>
            </div>
            <div style={cd.posterMark}>
              <img src="assets/logos/pantera-nuez.png" alt="" style={{height:48}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const cd = {
  root: { position:"relative", background:"var(--vino)", color:"var(--nuez)", padding:"140px 40px", borderTop:"1px solid var(--hairline)" },
  inner: { maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:80, alignItems:"center" },
  left: {},
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(56px, 8vw, 120px)", lineHeight:0.9, letterSpacing:"-0.03em", color:"var(--nuez)", textTransform:"uppercase", margin:"0 0 32px" },
  desc: { fontFamily:"var(--font-serif)", fontSize:"clamp(17px, 1.5vw, 22px)", lineHeight:1.5, color:"var(--nuez)", opacity:0.9, maxWidth:520, marginBottom:40, textWrap:"pretty" },
  cta: { display:"inline-flex", alignItems:"center", border:"1px solid var(--nuez)", padding:"14px 22px", fontFamily:"var(--font-sans)", fontSize:12, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--nuez)" },
  stats: { marginTop:56, display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24, paddingTop:32, borderTop:"1px solid rgba(244,240,230,0.2)" },
  statN: { fontFamily:"var(--font-display)", fontSize:"clamp(28px, 3vw, 42px)", lineHeight:1, color:"var(--rosa)" },
  statL: { fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.7, marginTop:8 },
  right: { position:"relative" },
  poster: { position:"relative", aspectRatio:"3/4", background:"var(--rosa)", padding:40, display:"flex", flexDirection:"column", justifyContent:"space-between", border:"1px solid rgba(102,69,69,0.3)" },
  posterInner: { textAlign:"left" },
  posterStrip: { marginTop:36, fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--vino)", display:"flex", gap:10, flexWrap:"wrap" },
  posterMark: { alignSelf:"center", filter:"invert(25%) sepia(33%) saturate(584%) hue-rotate(314deg)" },
};

/* ---------- Fold 6: Valores manifesto ---------- */
function FoldValores({ lang }) {
  const vals = window.SELVA_DATA.copy.valores;
  // Per-card accent treatment — alternating, high contrast
  const treatments = [
    { bg:"var(--rosa)",  ink:"var(--vino)",  accent:"var(--vino)",  chip:"rgba(102,69,69,0.18)" },
    { bg:"var(--vino)",  ink:"var(--rosa)",  accent:"var(--nuez)",  chip:"rgba(244,240,230,0.12)" },
    { bg:"var(--nuez)",  ink:"var(--vino)",  accent:"var(--vino)",  chip:"rgba(102,69,69,0.14)" },
    { bg:"var(--negro-500)", ink:"var(--nuez)", accent:"var(--rosa)", chip:"rgba(244,240,230,0.08)" },
  ];
  return (
    <section style={vl.root}>
      {/* Decorative rail of repeating title */}
      <div style={vl.marquee} aria-hidden>
        <span style={vl.marqueeTxt}>
          {Array.from({length:6}).map((_,i)=>(
            <span key={i} style={{marginRight:32}}>
              {lang === "es" ? "CALIDAD · INNOVACIÓN · ADAPTABILIDAD · SUSTENTABILIDAD" : "CRAFT · INNOVATION · ADAPTABILITY · SUSTAINABILITY"}
              <span style={{color:"var(--rosa)", margin:"0 20px"}}>✦</span>
            </span>
          ))}
        </span>
      </div>

      <div style={vl.head}>
        <span className="eyebrow" style={{opacity:0.6}}>
          <span className="hairline" style={{marginRight:10}} />Manifiesto · 02
        </span>
        <h3 style={vl.title}>
          {lang === "es"
            ? <>Cómo <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>trabajamos</em></>
            : <>How we <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>work</em></>}
        </h3>
        <p style={vl.sub}>
          {lang === "es"
            ? "Cuatro decisiones que tomamos todos los días — cada una cambia el resultado."
            : "Four decisions we make every day — each one changes the outcome."}
        </p>
      </div>

      <div style={vl.grid}>
        {vals.map((v, i) => {
          const t = treatments[i % treatments.length];
          return (
            <article key={v.n} style={{...vl.card, background:t.bg, color:t.ink}} className="grain">
              <div style={{...vl.sparkle, color:t.accent, opacity:0.7}}>✦</div>
              <div style={{...vl.n, color:t.accent}}>{v.n}</div>
              <h4 style={vl.cardTitle}>{v.title[lang]}</h4>
              <p style={vl.p}>{v.body[lang]}</p>
              <div style={vl.pillRow}>
                {(v.tags && v.tags[lang]
                  ? v.tags[lang]
                  : (i === 0 ? (lang==="es"?["Cine","Festivales","Cuadro"]:["Cinema","Festivals","Frame"])
                    : i === 1 ? (lang==="es"?["IA","ML","Virtual"]:["AI","ML","Virtual"])
                    : i === 2 ? (lang==="es"?["Organismo","Brief","Master"]:["Organism","Brief","Master"])
                    : (lang==="es"?["Huella","Local","Reciclado"]:["Footprint","Local","Recycled"]))
                ).map(tag => (
                  <span key={tag} style={{...vl.pill, background:t.chip, color:t.ink}}>{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div style={vl.foot}>
        <span style={vl.footLine} />
        <span style={vl.footLabel}>{lang==="es"?"MÉXICO · DESDE 2007":"MÉXICO · SINCE 2007"}</span>
        <span style={vl.footLine} />
      </div>
    </section>
  );
}
const vl = {
  root: { position:"relative", background:"var(--negro)", color:"var(--nuez)", padding:"140px 40px 120px", borderTop:"1px solid var(--hairline)", overflow:"hidden" },
  marquee: { position:"absolute", top:24, left:0, right:0, whiteSpace:"nowrap", overflow:"hidden", pointerEvents:"none", opacity:0.12 },
  marqueeTxt: { display:"inline-block", fontFamily:"var(--font-display)", fontSize:"clamp(56px, 9vw, 140px)", color:"var(--nuez)", letterSpacing:"-0.02em", textTransform:"uppercase", lineHeight:1 },
  head: { position:"relative", maxWidth:1440, margin:"0 auto 64px", paddingTop:40 },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(56px, 9vw, 140px)", lineHeight:0.92, letterSpacing:"-0.03em", margin:"16px 0 24px", textTransform:"uppercase", color:"var(--nuez)" },
  sub: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:"clamp(18px, 1.5vw, 22px)", lineHeight:1.45, color:"var(--nuez)", opacity:0.75, maxWidth:640, margin:0, textWrap:"pretty" },
  grid: { position:"relative", maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:20 },
  card: { position:"relative", padding:"44px 28px 36px", minHeight:420, display:"flex", flexDirection:"column", transition:"transform 0.3s cubic-bezier(.22,1,.36,1)" },
  sparkle: { position:"absolute", top:16, right:18, fontSize:22, lineHeight:1 },
  n: { fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:"0.26em", marginBottom:40, opacity:0.8 },
  cardTitle: { fontFamily:"var(--font-display)", fontSize:"clamp(26px, 2.1vw, 34px)", lineHeight:1, letterSpacing:"-0.01em", textTransform:"uppercase", margin:"0 0 20px", textWrap:"balance" },
  p: { fontFamily:"var(--font-serif)", fontSize:15, lineHeight:1.55, margin:"0 0 24px", textWrap:"pretty", opacity:0.9, flex:1 },
  pillRow: { display:"flex", flexWrap:"wrap", gap:6, marginTop:"auto" },
  pill: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", padding:"6px 10px", borderRadius:2 },
  foot: { maxWidth:1440, margin:"80px auto 0", display:"flex", alignItems:"center", gap:20 },
  footLabel: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.32em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.55, whiteSpace:"nowrap" },
  footLine: { flex:1, height:1, background:"rgba(244,240,230,0.3)" },
};

/* ---------- Fold 7: Journal ---------- */
function FoldJournal({ lang, go, openArticle }) {
  const entries = window.SELVA_DATA.journal;
  const [lead, ...rest] = entries;
  return (
    <section style={jn.root}>
      {/* Subtle pantera watermark */}
      <div style={jn.watermark} aria-hidden>
        <img src="assets/logos/pantera-nuez.png" alt="" style={{width:"100%", height:"100%", objectFit:"contain", objectPosition:"center"}} />
      </div>

      <div style={jn.inner}>
        <div style={jn.head}>
          <div>
            <span className="eyebrow" style={{color:"var(--rosa)"}}>
              <span className="hairline" style={{marginRight:10, background:"var(--rosa)"}} />
              {lang==="es"?"Diario · Selva":"Journal · Selva"}
            </span>
            <h3 style={jn.title}>
              {lang === "es"
                ? <>Notas &amp; <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>piezas</em></>
                : <>Notes &amp; <em style={{fontStyle:"italic", fontFamily:"var(--font-serif)", color:"var(--rosa)"}}>pieces</em></>}
            </h3>
            <p style={jn.sub}>
              {lang === "es"
                ? "Apuntes de taller, notas de set, reflexiones de post. Lo que escribimos cuando no estamos rodando."
                : "Workshop notes, set observations, post reflections. What we write when we're not shooting."}
            </p>
          </div>
          <a href="#" onClick={(e)=>{e.preventDefault(); go("journal");}} style={jn.allLink}>
            <span>{lang === "es" ? "Leer el diario" : "Read the journal"}</span>
            <span style={{color:"var(--rosa)", marginLeft:12}}>→</span>
          </a>
        </div>

        {/* Lead article */}
        {lead && (
          <a href="#" onClick={(ev)=>{ev.preventDefault(); openArticle(lead.id);}} style={jn.lead}>
            <div style={jn.leadMeta}>
              <span style={jn.leadLabel}>{lang==="es"?"Lo más reciente":"Latest"}</span>
              <span style={jn.leadDot}>✦</span>
              <span style={jn.leadDate}>{lead.date[lang]} · {lead.readTime} · {lead.author}</span>
            </div>
            <h4 style={jn.leadTitle}>{lead.title[lang]}</h4>
            <p style={jn.leadKicker}>{lead.kicker[lang]}</p>
            <div style={jn.leadRead}>{lang === "es" ? "Leer el artículo" : "Read the piece"} <span style={{color:"var(--rosa)"}}>→</span></div>
          </a>
        )}

        {/* Secondary list — single-line entries */}
        <div style={jn.list}>
          {rest.map((e, i) => (
            <a key={e.id} href="#" onClick={(ev)=>{ev.preventDefault(); openArticle(e.id);}} style={jn.row}>
              <div style={jn.rowNum}>{String(i+2).padStart(2,"0")}</div>
              <div style={jn.rowDate}>{e.date[lang]}</div>
              <div style={jn.rowTitle}>{e.title[lang]}</div>
              <div style={jn.rowAuthor}>— {e.author}</div>
              <div style={jn.rowRead}>{e.readTime}</div>
              <div style={jn.rowArrow}>→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
const jn = {
  root: {
    position:"relative",
    background:"var(--negro)",
    color:"var(--nuez)",
    padding:"140px 40px 160px",
    borderTop:"1px solid var(--hairline)",
    overflow:"hidden",
  },
  watermark: {
    position:"absolute",
    right:"-8%", top:"50%",
    width:"clamp(400px, 48vw, 720px)",
    height:"clamp(400px, 48vw, 720px)",
    transform:"translateY(-50%)",
    opacity:0.06,
    pointerEvents:"none",
    filter:"grayscale(1)",
  },
  inner: { position:"relative", maxWidth:1440, margin:"0 auto" },
  head: {
    display:"grid",
    gridTemplateColumns:"1fr auto",
    gap:40,
    alignItems:"end",
    marginBottom:72,
    paddingBottom:28,
    borderBottom:"1px solid rgba(244,240,230,0.2)",
  },
  title: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(56px, 9vw, 140px)",
    lineHeight:0.92,
    letterSpacing:"-0.03em",
    margin:"18px 0 20px",
    textTransform:"uppercase",
  },
  sub: {
    fontFamily:"var(--font-serif)",
    fontStyle:"italic",
    fontSize:"clamp(17px, 1.4vw, 20px)",
    lineHeight:1.45,
    color:"var(--nuez)",
    opacity:0.7,
    maxWidth:480,
    margin:0,
    textWrap:"pretty",
  },
  allLink: {
    fontFamily:"var(--font-sans)",
    fontSize:11,
    letterSpacing:"0.22em",
    textTransform:"uppercase",
    color:"var(--nuez)",
    textDecoration:"none",
    paddingBottom:4,
    borderBottom:"1px solid var(--nuez)",
    whiteSpace:"nowrap",
  },
  /* Lead */
  lead: {
    display:"block",
    textDecoration:"none",
    color:"inherit",
    padding:"56px 0 64px",
    borderBottom:"1px solid rgba(244,240,230,0.2)",
    marginBottom:0,
    maxWidth:1000,
  },
  leadMeta: {
    display:"flex",
    alignItems:"center",
    gap:16,
    marginBottom:28,
  },
  leadLabel: {
    fontFamily:"var(--font-sans)",
    fontSize:10,
    letterSpacing:"0.26em",
    textTransform:"uppercase",
    color:"var(--vino)",
    background:"var(--rosa)",
    padding:"6px 12px",
  },
  leadDot: { color:"var(--rosa)", fontSize:14, opacity:0.9 },
  leadDate: {
    fontFamily:"var(--font-mono)",
    fontSize:11,
    letterSpacing:"0.2em",
    textTransform:"uppercase",
    color:"var(--nuez)",
    opacity:0.7,
  },
  leadTitle: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(36px, 4.5vw, 68px)",
    lineHeight:1.02,
    letterSpacing:"-0.02em",
    textTransform:"uppercase",
    margin:"0 0 24px",
    textWrap:"balance",
    maxWidth:900,
  },
  leadKicker: {
    fontFamily:"var(--font-serif)",
    fontSize:"clamp(17px, 1.35vw, 20px)",
    lineHeight:1.55,
    color:"var(--nuez)",
    opacity:0.85,
    margin:"0 0 32px",
    maxWidth:760,
    textWrap:"pretty",
  },
  leadRead: {
    fontFamily:"var(--font-sans)",
    fontSize:12,
    letterSpacing:"0.22em",
    textTransform:"uppercase",
    color:"var(--nuez)",
  },
  /* Secondary list */
  list: { display:"flex", flexDirection:"column" },
  row: {
    display:"grid",
    gridTemplateColumns:"48px 140px 1fr auto 60px 24px",
    alignItems:"baseline",
    gap:24,
    padding:"28px 4px 26px",
    borderBottom:"1px solid rgba(244,240,230,0.15)",
    textDecoration:"none",
    color:"inherit",
    transition:"padding 0.3s cubic-bezier(.22,1,.36,1), background 0.3s",
  },
  rowNum: {
    fontFamily:"var(--font-mono)",
    fontSize:11,
    letterSpacing:"0.22em",
    color:"var(--rosa)",
    opacity:0.85,
  },
  rowDate: {
    fontFamily:"var(--font-sans)",
    fontSize:11,
    letterSpacing:"0.22em",
    textTransform:"uppercase",
    color:"var(--nuez)",
    opacity:0.6,
  },
  rowTitle: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(18px, 1.5vw, 24px)",
    letterSpacing:"-0.005em",
    textTransform:"uppercase",
    color:"var(--nuez)",
    lineHeight:1.15,
    textWrap:"balance",
  },
  rowAuthor: {
    fontFamily:"var(--font-serif)",
    fontStyle:"italic",
    fontSize:14,
    color:"var(--nuez)",
    opacity:0.6,
    whiteSpace:"nowrap",
  },
  rowRead: {
    fontFamily:"var(--font-mono)",
    fontSize:10,
    letterSpacing:"0.22em",
    color:"var(--nuez)",
    opacity:0.55,
    textAlign:"right",
  },
  rowArrow: {
    fontFamily:"var(--font-sans)",
    fontSize:16,
    color:"var(--rosa)",
    textAlign:"right",
  },
};

/* ---------- Full Home ---------- */
function Home({ tweaks, go, openProject, openArticle, lang }) {
  const [sound, setSound] = React.useState(false);
  return (
    <div className="page-fade">
      <HeroReel sound={sound} setSound={setSound} tweaks={tweaks} lang={lang} />
      <FoldManifesto tweaks={tweaks} lang={lang} />
      <FoldDirectors lang={lang} go={go} />
      <FoldWork lang={lang} go={go} openProject={openProject} />
      <FoldValores lang={lang} />
      <FoldJournal lang={lang} go={go} openArticle={openArticle} />
    </div>
  );
}

// Inject keyframes once
if (typeof document !== "undefined" && !document.getElementById("selva-home-kf")) {
  const s = document.createElement("style");
  s.id = "selva-home-kf";
  s.textContent = `
    @keyframes reelPan { 0% { transform: translate(-3%,-2%) scale(1.05);} 100% { transform: translate(4%,3%) scale(1.1);} }
    @keyframes stillFade {
      0%, 100% { opacity: 0; }
      5%, 22%  { opacity: 1; }
      28%      { opacity: 0; }
    }
    @keyframes scrollLine {
      0%,100% { transform: scaleY(0); transform-origin: top; }
      50%     { transform: scaleY(1); transform-origin: top; }
    }
  `;
  document.head.appendChild(s);
}

window.Home = Home;
