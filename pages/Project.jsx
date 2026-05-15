// Project player. Mounts a clean Vimeo iframe without autoplay; the user clicks
// the Vimeo player's native play button → video starts with audio. No custom
// overlay (which collided with the browser's autoplay-with-audio policy).
function ProjectPage({ id, lang, openProject, go }) {
  const all = window.SELVA_DATA.projects;
  const p = all.find(x => x.id === id) || all[0];
  const v = p.vimeo;

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") go("work"); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const src = v
    ? `https://player.vimeo.com/video/${v.id}${v.h ? "/" + v.h : ""}?byline=0&title=0&portrait=0&dnt=1&quality=1080p&pip=1&controls=1`
    : null;

  return (
    <div style={pp.root}>
      <div style={pp.bar}>
        <div style={pp.meta}>
          <span style={pp.metaLabel}>{p.client}</span>
          <span style={pp.metaDot}>·</span>
          <span style={pp.metaTitle}>{p.title[lang]}</span>
          <span style={pp.metaDot}>·</span>
          <span style={pp.metaLabel}>{p.year}</span>
        </div>
        <button onClick={() => go("work")} style={pp.close} aria-label="Close">
          <span style={{marginRight:10, fontSize:11, letterSpacing:"0.22em"}}>
            {lang === "es" ? "CERRAR" : "CLOSE"}
          </span>
          <span style={pp.closeX}>×</span>
        </button>
      </div>

      {src ? (
        <div style={pp.stage}>
          <iframe
            src={src}
            title={p.title[lang]}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            style={pp.frame}
          />
        </div>
      ) : (
        <div style={{...pp.stage, display:"flex", alignItems:"center", justifyContent:"center", background:p.frame?.bg || "var(--negro)"}}>
          <div style={{fontFamily:"var(--font-display)", color:p.frame?.fg || "var(--nuez)", fontSize:"clamp(40px, 7vw, 96px)", letterSpacing:"-0.02em", textTransform:"uppercase"}}>
            {p.frame?.word || p.title[lang]}
          </div>
        </div>
      )}
    </div>
  );
}

const pp = {
  root: { position:"fixed", inset:0, zIndex:200, background:"#000", display:"flex", flexDirection:"column" },
  bar: {
    flex:"0 0 auto",
    display:"flex", justifyContent:"space-between", alignItems:"center",
    padding:"16px 24px",
    color:"var(--nuez)", background:"#000",
    borderBottom:"1px solid rgba(244,240,230,0.08)",
  },
  meta: { display:"flex", alignItems:"baseline", gap:10, fontFamily:"var(--font-sans)", minWidth:0, overflow:"hidden" },
  metaLabel: { fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--nuez)", opacity:0.7, whiteSpace:"nowrap" },
  metaTitle: { fontFamily:"var(--font-serif)", fontStyle:"italic", fontSize:15, color:"var(--nuez)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" },
  metaDot: { color:"var(--rosa)", opacity:0.7 },
  close: {
    background:"transparent",
    border:"1px solid rgba(244,240,230,0.4)",
    color:"var(--nuez)",
    cursor:"pointer",
    padding:"8px 14px",
    fontFamily:"var(--font-sans)",
    display:"inline-flex", alignItems:"center",
    transition:"border-color 200ms, color 200ms, background 200ms",
  },
  closeX: { fontSize:18, lineHeight:1 },
  stage: { flex:"1 1 auto", position:"relative", background:"#000", overflow:"hidden" },
  frame: { position:"absolute", inset:0, width:"100%", height:"100%", border:0 },
};

window.ProjectPage = ProjectPage;
