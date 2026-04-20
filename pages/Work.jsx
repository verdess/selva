// Selva Studio — Work page (full grid with filters + density modes)

function WorkPage({ lang, openProject, tweaks }) {
  const all = window.SELVA_DATA.projects;
  const [filter, setFilter] = React.useState("all");
  const density = tweaks.workGrid || "asym";

  const cats = Array.from(new Set(all.map(p => p.category)));
  const dirs = Array.from(new Set(all.map(p => p.director)));

  const filtered = all.filter(p => {
    if (filter === "all") return true;
    return p.category === filter || p.director === filter;
  });

  return (
    <div className="page-fade" style={{paddingTop:96}}>
      <section style={wp.head}>
        <div style={wp.headInner}>
          <div className="eyebrow" style={{opacity:0.6, marginBottom:12}}>Archivo · {all.length} piezas</div>
          <h1 style={wp.title}>{lang === "es" ? "Proyectos" : "Work"}</h1>
          <p style={wp.kicker}>
            {lang === "es"
              ? "Comerciales, brand films, música, documental. Dieciocho años filmando entre Ciudad de México y el mundo."
              : "Commercials, brand films, music, documentary. Eighteen years filming between Mexico City and the world."}
          </p>
        </div>
      </section>

      <section style={wp.filters}>
        <div style={wp.filtersInner}>
          <div style={wp.filterGroup}>
            <span className="eyebrow" style={{opacity:0.55, marginRight:14}}>{lang === "es" ? "Categoría" : "Category"}</span>
            <FilterPill active={filter==="all"} onClick={()=>setFilter("all")}>{lang==="es"?"Todo":"All"}</FilterPill>
            {cats.map(c => <FilterPill key={c} active={filter===c} onClick={()=>setFilter(c)}>{c}</FilterPill>)}
          </div>
          <div style={wp.filterGroup}>
            <span className="eyebrow" style={{opacity:0.55, marginRight:14}}>{lang === "es" ? "Director" : "Director"}</span>
            {dirs.map(d => <FilterPill key={d} active={filter===d} onClick={()=>setFilter(d)}>{d}</FilterPill>)}
          </div>
        </div>
      </section>

      {density === "asym" && <AsymGrid items={filtered} openProject={openProject} lang={lang} />}
      {density === "regular" && <RegularGrid items={filtered} openProject={openProject} lang={lang} />}
      {density === "strip" && <CinemaStrip items={filtered} openProject={openProject} lang={lang} />}
    </div>
  );
}

function FilterPill({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      background: active ? "var(--fg-1)" : "transparent",
      color: active ? "var(--bg)" : "var(--fg-1)",
      border:"1px solid var(--border-strong)",
      padding:"7px 14px",
      fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.14em",
      textTransform:"uppercase", cursor:"pointer",
      marginRight:8, marginBottom:8,
    }}>{children}</button>
  );
}

// Asymmetric — rows of 3 with first of each rotation larger
function AsymGrid({ items, openProject, lang }) {
  // Build rows of varied spans
  const rows = [];
  let i = 0;
  const patterns = [[7,5], [5,7], [4,4,4]];
  let pat = 0;
  while (i < items.length) {
    const p = patterns[pat % patterns.length];
    rows.push(items.slice(i, i + p.length).map((proj, j) => ({ proj, span: p[j] })));
    i += p.length; pat++;
  }
  return (
    <section style={wp.gridWrap}>
      <div style={wp.asymGrid}>
        {rows.flat().map(({proj, span}) => (
          <a key={proj.id} href="#" onClick={(e)=>{e.preventDefault(); openProject(proj.id);}}
             style={{...wp.tile, gridColumn: `span ${span}`}}>
            <PosterThumb project={proj} big={span >= 7} />
            <div style={wp.meta}>
              <div style={wp.metaTop}>{proj.category} · {proj.director} · {proj.year}</div>
              <div style={wp.metaTitle}>{proj.client} — {proj.title[lang]}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function RegularGrid({ items, openProject, lang }) {
  return (
    <section style={wp.gridWrap}>
      <div style={wp.regGrid}>
        {items.map(proj => (
          <a key={proj.id} href="#" onClick={(e)=>{e.preventDefault(); openProject(proj.id);}} style={wp.tile}>
            <PosterThumb project={proj} />
            <div style={wp.meta}>
              <div style={wp.metaTop}>{proj.category} · {proj.director} · {proj.year}</div>
              <div style={wp.metaTitle}>{proj.client} — {proj.title[lang]}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function CinemaStrip({ items, openProject, lang }) {
  return (
    <section style={{padding:"40px 0 120px"}}>
      <div style={{maxWidth:"100%", overflowX:"auto", padding:"0 40px", scrollSnapType:"x mandatory"}} className="no-scrollbar">
        <div style={{display:"flex", gap:24, paddingBottom:24}}>
          {items.map(proj => (
            <a key={proj.id} href="#" onClick={(e)=>{e.preventDefault(); openProject(proj.id);}}
               style={{flex:"0 0 720px", scrollSnapAlign:"start", textDecoration:"none", color:"inherit"}}>
              <div style={{width:720, aspectRatio:"16/9"}}>
                <PosterThumb project={proj} big />
              </div>
              <div style={wp.meta}>
                <div style={wp.metaTop}>{proj.category} · {proj.director} · {proj.year}</div>
                <div style={wp.metaTitle}>{proj.client} — {proj.title[lang]}</div>
              </div>
            </a>
          ))}
        </div>
        <div style={{maxWidth:1440, margin:"0 auto", fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--fg-2)"}}>
          ← {lang === "es" ? "Desliza" : "Scroll"} →
        </div>
      </div>
    </section>
  );
}

const wp = {
  head: { padding:"100px 40px 72px", borderBottom:"1px solid var(--hairline)" },
  headInner: { maxWidth:1440, margin:"0 auto" },
  title: { fontFamily:"var(--font-display)", fontSize:"clamp(56px, 9vw, 128px)", lineHeight:0.92, letterSpacing:"-0.03em", margin:"0 0 32px", textTransform:"uppercase" },
  kicker: { fontFamily:"var(--font-serif)", fontSize:"clamp(18px, 1.5vw, 24px)", lineHeight:1.45, color:"var(--fg-2)", maxWidth:640, margin:0, textWrap:"pretty" },
  filters: { padding:"32px 40px", borderBottom:"1px solid var(--hairline)", background:"var(--bg)", position:"sticky", top:0, zIndex:20 },
  filtersInner: { maxWidth:1440, margin:"0 auto", display:"flex", flexDirection:"column", gap:8 },
  filterGroup: { display:"flex", flexWrap:"wrap", alignItems:"center" },
  gridWrap: { padding:"56px 40px 120px" },
  asymGrid: { maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:"56px 24px" },
  regGrid: { maxWidth:1440, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"48px 24px" },
  tile: { textDecoration:"none", color:"inherit" },
  meta: { marginTop:14 },
  metaTop: { fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--fg-2)", marginBottom:4 },
  metaTitle: { fontFamily:"var(--font-display)", fontSize:"clamp(18px, 1.4vw, 24px)", letterSpacing:"-0.005em", textTransform:"uppercase", lineHeight:1.1 },
};

window.WorkPage = WorkPage;
