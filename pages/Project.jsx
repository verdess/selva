// Case study detail page
function ProjectPage({ id, lang, openProject, go }) {
  const all = window.SELVA_DATA.projects;
  const p = all.find(x => x.id === id) || all[0];
  const idx = all.indexOf(p);
  const next = all[(idx + 1) % all.length];
  const f = p.frame;

  return (
    <div className="page-fade">
      {/* Hero full-bleed — Vimeo if available, otherwise poster silhouette */}
      <section style={pp.hero}>
        {p.vimeo ? (
          <div style={pp.heroVideoWrap}>
            <iframe
              src={`https://player.vimeo.com/video/${p.vimeo.id}${p.vimeo.h ? "/" + p.vimeo.h : ""}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&controls=0&muted=1&dnt=1`}
              title={p.title[lang]}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={pp.heroVideoFrame}
            />
            <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)", pointerEvents:"none"}} />
            <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.6) 100%)", pointerEvents:"none"}} />
            <div style={{position:"absolute", top:96, left:40, right:40, display:"flex", justifyContent:"space-between", fontSize:11, letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.85, fontFamily:"var(--font-sans)"}}>
              <span>{p.client}</span>
              <span>{p.year}</span>
            </div>
            <div style={{position:"absolute", bottom:32, left:40, right:40, display:"flex", justifyContent:"space-between", fontSize:11, letterSpacing:"0.28em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.85, fontFamily:"var(--font-sans)"}}>
              <span>{p.category}</span>
              <span>DIR · {p.director}</span>
            </div>
          </div>
        ) : (
          <div style={{...pp.heroBg, background: f.bg}} className="grain">
            <div style={{position:"absolute", inset:20, border:`1px solid ${f.fg}`, opacity:0.18}} />
            <div style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", padding:"10% 6%"}}>
              <div style={{fontFamily:"var(--font-display)", color:f.fg, fontSize:"clamp(56px, 9vw, 140px)", lineHeight:0.9, letterSpacing:"-0.03em", textTransform:"uppercase", textAlign:"center"}}>
                {f.word || p.title[lang]}
              </div>
            </div>
            <div style={{position:"absolute", top:96, left:40, right:40, display:"flex", justifyContent:"space-between", fontSize:11, letterSpacing:"0.28em", textTransform:"uppercase", color:f.fg, opacity:0.85, fontFamily:"var(--font-sans)"}}>
              <span>{p.client}</span>
              <span>{p.year}</span>
            </div>
            <div style={{position:"absolute", bottom:32, left:40, right:40, display:"flex", justifyContent:"space-between", fontSize:11, letterSpacing:"0.28em", textTransform:"uppercase", color:f.fg, opacity:0.85, fontFamily:"var(--font-sans)"}}>
              <span>{p.category}</span>
              <span>DIR · {p.director}</span>
            </div>
          </div>
        )}
      </section>

      {/* Title block */}
      <section style={pp.titleBlock}>
        <div style={pp.titleInner}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:20}}>
            {p.client} · {p.agency || ""} · {p.director} · {p.year}
          </div>
          <h1 style={pp.title}>{p.title[lang]}</h1>
          <p style={pp.kicker}>{p.kicker && p.kicker[lang]}</p>
        </div>
      </section>

      {/* Editorial paragraphs */}
      {p.paragraphs && (
        <section style={pp.body}>
          <div style={pp.bodyInner}>
            {p.paragraphs[lang].map((para, i) => (
              <p key={i} style={pp.p}>{para}</p>
            ))}
          </div>
        </section>
      )}

      {/* Pull quote */}
      {p.quote && (
        <section style={pp.quote}>
          <div style={pp.quoteInner}>
            <span style={{color:"var(--accent)", fontSize:28}}>✦</span>
            <blockquote style={pp.q}>
              {p.quote[lang]}
            </blockquote>
          </div>
        </section>
      )}

      {/* Behind the scenes grid (stylized) */}
      <section style={pp.bts}>
        <div className="eyebrow" style={{maxWidth:1440, margin:"0 auto 24px", opacity:0.6}}>
          {lang === "es" ? "Detrás de cámaras" : "Behind the scenes"}
        </div>
        <div style={pp.btsGrid}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{...pp.btsCell, background: i%2? "var(--negro-500)" : f.bg}} className="grain">
              <div style={{fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.3em", color:f.fg, opacity:0.4, textTransform:"uppercase"}}>
                [ Still · {String(i+1).padStart(2,"0")} ]
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credits */}
      <section style={pp.creditsSec}>
        <div style={pp.creditsInner}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:32}}>Créditos</div>
          <div style={pp.creditsGrid}>
            {p.credits.map(([role, name], i) => (
              <div key={i} style={pp.credRow}>
                <div style={pp.credRole}>{role}</div>
                <div style={pp.credName}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section style={pp.next}>
        <a href="#" onClick={(e)=>{e.preventDefault(); openProject(next.id);}} style={pp.nextLink}>
          <div style={{display:"flex", alignItems:"baseline", gap:18, marginBottom:24}}>
            <span className="eyebrow" style={{opacity:0.6}}>{lang === "es" ? "Siguiente proyecto" : "Next project"}</span>
            <span style={{flex:1, height:1, background:"var(--border-strong)"}} />
            <span className="eyebrow" style={{opacity:0.6}}>{next.client}</span>
          </div>
          <div style={pp.nextTitle}>
            {next.title[lang]} <span style={{color:"var(--accent)"}}>→</span>
          </div>
        </a>
      </section>
    </div>
  );
}

const pp = {
  hero: { position:"relative", height:"88vh", minHeight:560, paddingTop:80 },
  heroBg: { position:"absolute", inset:0, overflow:"hidden" },
  heroVideoWrap: { position:"absolute", inset:0, overflow:"hidden", background:"#000" },
  heroVideoFrame: {
    position:"absolute",
    top:"50%", left:"50%",
    width:"max(100%, 177.78vh)",
    height:"max(100%, 56.25vw)",
    transform:"translate(-50%, -50%)",
    border:0,
    pointerEvents:"none",
  },
  titleBlock: { padding:"100px 40px 40px", borderTop:"1px solid var(--hairline)" },
  titleInner: { maxWidth:1100, margin:"0 auto" },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(48px, 7vw, 108px)", lineHeight:0.92, letterSpacing:"-0.025em", margin:"0 0 24px", textTransform:"uppercase" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(18px, 1.5vw, 24px)", lineHeight:1.45, color:"var(--fg-2)", maxWidth:700, fontStyle:"italic", margin:0, textWrap:"pretty" },
  body: { padding:"60px 40px" },
  bodyInner: { maxWidth:800, margin:"0 auto" },
  p: { fontFamily:"var(--font-serif)", fontSize:"clamp(17px, 1.3vw, 20px)", lineHeight:1.65, color:"var(--fg-1)", margin:"0 0 28px", textWrap:"pretty" },
  quote: { padding:"80px 40px" },
  quoteInner: { maxWidth:900, margin:"0 auto", textAlign:"center" },
  q: { fontFamily:"var(--font-display)", fontStyle:"italic", fontSize:"clamp(28px, 3.8vw, 52px)", lineHeight:1.2, letterSpacing:"-0.01em", color:"var(--fg-1)", margin:"20px 0 0", textWrap:"balance" },
  bts: { padding:"80px 40px 60px", borderTop:"1px solid var(--hairline)" },
  btsGrid: { maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16 },
  btsCell: { position:"relative", aspectRatio:"4/5", display:"flex", alignItems:"center", justifyContent:"center" },
  creditsSec: { padding:"100px 40px", borderTop:"1px solid var(--hairline)" },
  creditsInner: { maxWidth:1100, margin:"0 auto" },
  creditsGrid: { display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"0 64px" },
  credRow: { display:"grid", gridTemplateColumns:"140px 1fr", padding:"14px 0", borderTop:"1px solid var(--border)", gap:20, alignItems:"baseline" },
  credRole: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--fg-2)" },
  credName: { fontFamily:"var(--font-sans)", fontSize:15, color:"var(--fg-1)" },
  next: { padding:"100px 40px 140px", borderTop:"1px solid var(--hairline)" },
  nextLink: { display:"block", maxWidth:1200, margin:"0 auto", textDecoration:"none", color:"inherit" },
  nextTitle: { fontFamily:"var(--font-display)", fontSize:"clamp(44px, 7vw, 104px)", lineHeight:0.95, letterSpacing:"-0.02em", textTransform:"uppercase" },
};

window.ProjectPage = ProjectPage;
