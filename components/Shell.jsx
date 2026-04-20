// Selva Studio — shared primitives
// Logo, header, footer, tweaks panel, mobile menu. All Selva components
// share scope via window.* exports at the bottom.

/* =========================================================
 * LOGO — wordmark using the brand image
 * ========================================================= */
function SelvaLogo({ size = 32, color = "nuez", onClick }) {
  // We have wordmark-nuez, -negro, -rosa, -vino, -olivo.
  const src = `assets/logos/wordmark-${color}.png`;
  return (
    <a href="#" onClick={(e)=>{e.preventDefault(); onClick && onClick();}}
       style={{ display:"inline-flex", alignItems:"center", gap:8 }}>
      <img src={src} alt="Selva Studio"
           style={{ height: size, width:"auto", display:"block" }} />
    </a>
  );
}

/* =========================================================
 * HEADER — top nav. Centered links, logo left, EN/ES right.
 * ========================================================= */
function Header({ page, go, lang, onLang, onOpenMenu, onOpenTweaks, accent, mode }) {
  const nav = window.SELVA_DATA.copy.nav;
  const logoColor = mode === "light" ? "negro" : "nuez";

  return (
    <header style={hdr.root} data-mode={mode}>
      <div style={hdr.inner}>
        <div style={hdr.left}>
          <SelvaLogo size={30} color={logoColor} onClick={() => go("home")} />
        </div>
        <nav style={hdr.center} className="desktop-only">
          {nav.map(n => {
            const active = page === n.id;
            return (
              <a key={n.id}
                 href="#"
                 onClick={(e)=>{e.preventDefault(); go(n.id);}}
                 className="hdr-nav-link"
                 data-active={active ? "1" : "0"}>
                <span className="hdr-nav-dot" aria-hidden="true" />
                <span className="hdr-nav-label">{lang === "es" ? n.es : n.en}</span>
              </a>
            );
          })}
        </nav>
        <div style={hdr.right}>
          <button style={hdr.langBtn} onClick={()=>onLang(lang === "es" ? "en" : "es")} className="desktop-only hdr-lang">
            <span style={{color: lang === "es" ? "var(--accent)" : "currentColor", opacity: lang === "es" ? 1 : 0.45, transition:"color 200ms, opacity 200ms"}}>ES</span>
            <span style={{opacity:0.3}}>/</span>
            <span style={{color: lang === "en" ? "var(--accent)" : "currentColor", opacity: lang === "en" ? 1 : 0.45, transition:"color 200ms, opacity 200ms"}}>EN</span>
          </button>
          <a href="mailto:axel@selvastudio.mx" style={hdr.cta} className="desktop-only hdr-cta">
            {lang === "es" ? "Cotizar proyecto" : "Start a project"}
            <span className="hdr-cta-arrow" style={{ color: "var(--accent)" }}>→</span>
          </a>
          <button style={hdr.burger} onClick={onOpenMenu} aria-label="Menu" className="mobile-only">
            <span /><span /><span />
          </button>
        </div>
      </div>
      {/* Responsive helpers + nav hover styling */}
      <style>{`
        @media (max-width: 1200px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 1201px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 1400px) {
          .desktop-nav-compact { gap: 20px !important; }
        }

        /* ---- Header nav links ---- */
        .hdr-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 6px 2px 6px;
          color: var(--fg-1);
          opacity: 0.72;
          transition: color 240ms ease-out, opacity 240ms ease-out, transform 320ms cubic-bezier(.2,.7,.2,1);
        }
        .hdr-nav-link .hdr-nav-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 260ms ease-out, transform 320ms cubic-bezier(.2,.7,.2,1);
        }
        .hdr-nav-link .hdr-nav-label {
          position: relative;
          display: inline-block;
        }
        .hdr-nav-link .hdr-nav-label::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -5px;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 360ms cubic-bezier(.2,.7,.2,1);
        }
        .hdr-nav-link:hover {
          opacity: 1;
          color: var(--nuez);
        }
        .hdr-nav-link:hover .hdr-nav-dot {
          opacity: 1;
          transform: scale(1);
        }
        .hdr-nav-link:hover .hdr-nav-label::after {
          transform: scaleX(1);
        }
        .hdr-nav-link[data-active="1"] {
          opacity: 1;
          color: var(--nuez);
        }
        .hdr-nav-link[data-active="1"] .hdr-nav-dot {
          opacity: 1;
          transform: scale(1);
        }
        .hdr-nav-link[data-active="1"] .hdr-nav-label::after {
          transform: scaleX(1);
          background: currentColor;
          opacity: 0.6;
        }

        /* ---- Header CTA ---- */
        .hdr-cta {
          position: relative;
          overflow: hidden;
        }
        .hdr-cta::before {
          content: "";
          position: absolute; inset: 0;
          background: var(--accent);
          transform: translateY(101%);
          transition: transform 420ms cubic-bezier(.2,.7,.2,1);
          z-index: 0;
        }
        .hdr-cta > * { position: relative; z-index: 1; }
        .hdr-cta:hover {
          color: var(--negro) !important;
          border-color: var(--accent) !important;
        }
        .hdr-cta:hover::before {
          transform: translateY(0);
        }
        .hdr-cta:hover .hdr-cta-arrow {
          color: var(--negro) !important;
          transform: translateX(3px);
        }
        .hdr-cta-arrow {
          display: inline-block;
          transition: transform 320ms cubic-bezier(.2,.7,.2,1), color 220ms ease-out;
        }

        /* ---- Lang toggle ---- */
        .hdr-lang:hover { opacity: 1; }
      `}</style>
    </header>
  );
}

const hdr = {
  root: {
    position:"fixed", top:0, left:0, right:0, zIndex:40,
    padding:"16px 40px",
    background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)",
    color:"var(--fg-1)",
  },
  inner: {
    display:"grid", gridTemplateColumns:"1fr auto 1fr", alignItems:"center",
    maxWidth:1600, margin:"0 auto",
  },
  left: { display:"flex", alignItems:"center" },
  center: { display:"flex", alignItems:"center", gap:28, justifySelf:"center", flexWrap:"nowrap" },
  right: { display:"flex", alignItems:"center", gap:20, justifySelf:"end" },
  link: {
    fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em",
    textTransform:"uppercase", fontWeight:500,
    paddingBottom:4, transition:"opacity 180ms, border-color 180ms",
  },
  langBtn: {
    background:"transparent", border:0, color:"inherit", cursor:"pointer",
    fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em",
    display:"inline-flex", gap:6, padding:0,
  },
  cta: {
    display:"inline-flex", alignItems:"center", gap:10,
    border:"1px solid currentColor",
    padding:"9px 16px", fontFamily:"var(--font-sans)",
    fontSize:11, letterSpacing:"0.22em", textTransform:"uppercase", fontWeight:500,
    transition:"color 220ms ease-out, border-color 220ms ease-out",
  },
  burger: {
    width:32, height:22, background:"transparent", border:0, cursor:"pointer",
    display:"flex", flexDirection:"column", justifyContent:"space-between",
    padding:"4px 0",
  },
};
// Burger lines
const burgerLineStyle = `
  .mmenu [data-line] { display:block; height:1px; background:var(--fg-1); }
  header button[aria-label="Menu"] > span { display:block; height:1px; background:var(--fg-1); }
`;

/* =========================================================
 * MOBILE MENU — full-screen overlay from right
 * ========================================================= */
function MobileMenu({ open, onClose, go, page, lang, onLang }) {
  const nav = window.SELVA_DATA.copy.nav;
  return (
    <div className="mmenu" data-open={open ? "1" : "0"} style={mm.root} aria-hidden={!open}>
      <div style={mm.top}>
        <span className="eyebrow" style={{color:"var(--fg-2)"}}>Selva · CDMX</span>
        <button onClick={onClose} style={mm.close} aria-label="Close">✕</button>
      </div>
      <nav style={mm.nav}>
        {nav.map(n => (
          <a key={n.id} href="#" onClick={(e)=>{e.preventDefault(); go(n.id); onClose();}}
             style={{ ...mm.link, opacity: page === n.id ? 1 : 0.6 }}>
            {lang === "es" ? n.es : n.en}
          </a>
        ))}
      </nav>
      <div style={mm.bottom}>
        <a href="mailto:axel@selvastudio.mx" style={mm.email}>axel@selvastudio.mx</a>
        <div style={{display:"flex", gap:16, marginTop:20}}>
          <button style={mm.langPill} onClick={()=>onLang("es")} data-active={lang==="es"}>ES</button>
          <button style={mm.langPill} onClick={()=>onLang("en")} data-active={lang==="en"}>EN</button>
        </div>
      </div>
    </div>
  );
}
const mm = {
  root: {
    position:"fixed", inset:0, zIndex:60,
    background:"var(--bg)",
    display:"flex", flexDirection:"column", padding:"24px 32px",
  },
  top: { display:"flex", justifyContent:"space-between", alignItems:"center" },
  close: { background:"transparent", border:0, color:"var(--fg-1)", fontSize:22, cursor:"pointer" },
  nav: { flex:1, display:"flex", flexDirection:"column", justifyContent:"center", gap:10 },
  link: {
    fontFamily:"var(--font-display)", fontSize:42, lineHeight:1.02, letterSpacing:"-0.01em",
    textTransform:"uppercase", color:"var(--fg-1)",
  },
  bottom: { paddingTop:20, borderTop:"1px solid var(--border)" },
  email: { fontFamily:"var(--font-display)", fontSize:22, color:"var(--accent)" },
  langPill: {
    background:"transparent", border:"1px solid var(--border-strong)", padding:"8px 16px",
    color:"var(--fg-1)", fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em",
    cursor:"pointer",
  },
};

/* =========================================================
 * FOOTER
 * ========================================================= */
function Footer({ lang, go }) {
  const isES = lang === "es";
  return (
    <footer className="linen" style={ft.root}>
      <div style={ft.grid}>
        <div style={ft.col1}>
          <div className="eyebrow" style={{marginBottom:28, color:"var(--vino)"}}>
            {isES ? "Escríbenos" : "Get in touch"}
          </div>
          <a href="mailto:axel@selvastudio.mx" style={ft.email}>
            axel@selvastudio.mx
          </a>
          <div style={{marginTop:20, display:"flex", gap:14, flexWrap:"wrap"}}>
            <a href="tel:+525519596185" style={ft.phone}>+52 55 1959 6185</a>
            <span style={{color:"var(--vino)"}}>✦</span>
            <span style={ft.phone}>Axel Torres, Dir. de Producción</span>
          </div>
        </div>

        <div style={ft.col2}>
          <div className="eyebrow" style={{marginBottom:12, color:"var(--negro)", opacity:0.5}}>
            {isES ? "Estudio" : "Studio"}
          </div>
          <div style={ft.addr}>
            Puebla 403<br/>
            Col. Roma Norte<br/>
            Cuauhtémoc, CDMX 06700<br/>
            México
          </div>
        </div>

        <div style={ft.col3}>
          <div className="eyebrow" style={{marginBottom:12, color:"var(--negro)", opacity:0.5}}>
            {isES ? "Redes" : "Social"}
          </div>
          <div style={ft.linkList}>
            <a href="#" className="underline-hairline">Instagram · @selvastudiomx</a>
            <a href="#" className="underline-hairline">Vimeo · /selvastudio</a>
            <a href="#" className="underline-hairline">LinkedIn · Selva Studio</a>
          </div>
        </div>

        <div style={ft.col4}>
          <div className="eyebrow" style={{marginBottom:12, color:"var(--negro)", opacity:0.5}}>
            {isES ? "Navegar" : "Navigate"}
          </div>
          <div style={ft.linkList}>
            {window.SELVA_DATA.copy.nav.map(n => (
              <a key={n.id} href="#" onClick={(e)=>{e.preventDefault(); go(n.id);}}>
                {isES ? n.es : n.en}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={ft.bottom}>
        <div style={{display:"flex", alignItems:"center", gap:18}}>
          <img src="assets/logos/pantera-negro.png" alt="" style={{height:36, opacity:0.9}} />
          <div>
            <div style={ft.bottomWord}>SELVA PROFUNDA STUDIO, SA DE CV</div>
            <div style={ft.bottomSub}>© 2007 — 2026 · RFC disponible a solicitud</div>
          </div>
        </div>
        <div style={ft.credits}>
          <span>selvastudio.mx</span>
          <span style={{color:"var(--vino)"}}>✦</span>
          <span>hecho en Roma Norte</span>
        </div>
      </div>
    </footer>
  );
}
const ft = {
  root: {
    position:"relative", padding:"96px 40px 48px",
    color:"var(--negro)",
  },
  grid: {
    maxWidth:1440, margin:"0 auto",
    display:"grid", gridTemplateColumns:"1.3fr 1fr 1fr 1fr", gap:48,
    paddingBottom:72, borderBottom:"1px solid rgba(4,7,7,0.15)",
  },
  col1: {},
  col2: {},
  col3: {},
  col4: {},
  email: {
    fontFamily:"var(--font-display)",
    fontSize:"clamp(42px, 5.4vw, 72px)", lineHeight:1.02,
    letterSpacing:"-0.01em", color:"var(--vino)",
    display:"inline-block", borderBottom:"2px solid var(--vino)",
    paddingBottom:6,
  },
  phone: {
    fontFamily:"var(--font-sans)", fontSize:13, letterSpacing:"0.08em",
    color:"var(--negro)", opacity:0.75, textTransform:"uppercase",
  },
  addr: {
    fontFamily:"var(--font-serif)", fontSize:15, lineHeight:1.7,
    color:"var(--negro)",
  },
  linkList: {
    display:"flex", flexDirection:"column", gap:10,
    fontFamily:"var(--font-sans)", fontSize:13, color:"var(--negro)",
  },
  bottom: {
    maxWidth:1440, margin:"32px auto 0",
    display:"flex", justifyContent:"space-between", alignItems:"center",
    flexWrap:"wrap", gap:16,
  },
  bottomWord: {
    fontFamily:"var(--font-condensed)", fontSize:13, letterSpacing:"0.06em",
    color:"var(--negro)",
  },
  bottomSub: {
    fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.12em",
    color:"var(--negro)", opacity:0.55, marginTop:2, textTransform:"uppercase",
  },
  credits: {
    fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.22em",
    color:"var(--negro)", opacity:0.7, textTransform:"uppercase",
    display:"flex", gap:12, alignItems:"center",
  },
};

/* =========================================================
 * POSTER THUMB — our universal project thumbnail
 * Silueta tipográfica — project title as poster over solid color.
 * ========================================================= */
function PosterThumb({ project, aspect = "16/9", big = false, hoverable = true }) {
  const f = project.frame || { bg: "var(--negro)", fg: "var(--nuez)", word: project.title.es };
  const [hover, setHover] = React.useState(false);
  const [mountVideo, setMountVideo] = React.useState(false);
  const [imgFailed, setImgFailed] = React.useState(false);
  const v = project.vimeo;
  const canEmbed = v && !v.noembed;
  // Vimeo's public thumbnail service — large landscape frame for the tile.
  // For videos with a privacy hash (v.h), the public thumbnail is often blocked,
  // so we mount the Vimeo background iframe immediately as the poster.
  // Always use the iframe poster for Vimeo projects — it loads real footage
  // and avoids vumbnail's indexing delay on recent uploads. Opt out with
  // v.noembed (no embed at all) or v.useVumbnail (force static thumbnail).
  const thumbSrc = v && v.useVumbnail && !v.noembed ? `https://vumbnail.com/${v.id}_large.jpg` : null;
  const needsIframePoster = canEmbed && !thumbSrc;

  // Lazy-mount Vimeo iframe 140ms after hover to avoid flicker during rapid grid scanning
  React.useEffect(() => {
    if (!hover || !canEmbed || !hoverable) { setMountVideo(false); return; }
    const t = setTimeout(() => setMountVideo(true), 140);
    return () => clearTimeout(t);
  }, [hover, canEmbed, hoverable]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position:"relative", width:"100%", aspectRatio: aspect,
        background: f.bg, color: f.fg, overflow:"hidden",
        transition:"transform 400ms ease-out",
      }}
      className={(thumbSrc || needsIframePoster) ? "" : "grain"}
    >
      {/* Static Vimeo poster thumbnail — loads instantly */}
      {thumbSrc && !imgFailed && (
        <img
          src={thumbSrc}
          alt={project.title.es}
          style={{
            position:"absolute", inset:0, width:"100%", height:"100%",
            objectFit:"cover", display:"block",
            filter: hover && hoverable ? "saturate(1.05) brightness(1.02)" : "saturate(0.92) brightness(0.88)",
            transform: hover && hoverable ? "scale(1.02)" : "scale(1)",
            transition:"transform 600ms ease-out, filter 400ms ease-out",
          }}
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      )}

      {/* Iframe poster fallback — for videos where the vumbnail isn't reachable
          (private hash videos). Uses the Vimeo background player with autoplay so
          the tile still shows real footage. */}
      {needsIframePoster && (
        <div style={{position:"absolute", inset:0, overflow:"hidden", background:"#000"}}>
          <iframe
            src={`https://player.vimeo.com/video/${v.id}${v.h ? "/" + v.h : ""}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&controls=0&muted=1&dnt=1`}
            title={project.title.es}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position:"absolute", top:"50%", left:"50%",
              width:"max(100%, 177.78vh)", height:"max(100%, 56.25vw)",
              transform:"translate(-50%, -50%)",
              border:0, pointerEvents:"none",
              filter: hover && hoverable ? "saturate(1.05) brightness(0.98)" : "saturate(0.9) brightness(0.72)",
              transition:"filter 400ms ease-out",
            }}
          />
        </div>
      )}

      {/* Vimeo preview — mounts on hover for projects that have a vimeo */}
      {mountVideo && (
        <div style={{position:"absolute", inset:0, overflow:"hidden", background:"#000"}}>
          <iframe
            src={`https://player.vimeo.com/video/${v.id}${v.h ? "/" + v.h : ""}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&controls=0&muted=1&dnt=1`}
            title={project.title.es}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position:"absolute", top:"50%", left:"50%",
              width:"max(100%, 177.78vh)", height:"max(100%, 56.25vw)",
              transform:"translate(-50%, -50%)",
              border:0, pointerEvents:"none",
            }}
          />
        </div>
      )}

      {/* Legibility scrim — always over imagery */}
      {(thumbSrc || needsIframePoster) && (
        <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 22%, transparent 70%, rgba(0,0,0,0.55) 100%)", pointerEvents:"none"}} />
      )}

      {/* Frame border hairline */}
      <div style={{position:"absolute", inset:12, border:`1px solid ${f.fg}`, opacity: (thumbSrc || needsIframePoster) ? 0 : (hover && mountVideo ? 0 : 0.25), pointerEvents:"none", transition:"opacity 240ms"}} />

      {/* Big word — only when no real thumbnail (fallback for video-less projects) */}
      {!(thumbSrc || needsIframePoster) && (
        <div style={{
          position:"absolute", inset:0,
          display:"flex", alignItems:"center", justifyContent:"center",
          textAlign:"center",
          padding:"8% 6%",
          opacity: hover && mountVideo ? 0 : 1,
          transition:"opacity 280ms ease-out",
        }}>
          <div style={{
            fontFamily:"var(--font-display)",
            fontSize: big ? "clamp(56px, 7.5vw, 128px)" : "clamp(36px, 4.5vw, 72px)",
            letterSpacing:"-0.015em", lineHeight:0.92,
            transform: hover && hoverable ? "translateY(-6px)" : "translateY(0)",
            transition:"transform 420ms ease-out",
            textTransform:"uppercase",
            wordBreak:"break-word",
          }}>
            {f.word || project.title.es.toUpperCase()}
          </div>
        </div>
      )}

      {/* Real thumb — no text overlay; the tile is just the video. Meta goes below the tile. */}
      {(thumbSrc || needsIframePoster) && false && (
        <div />
      )}

      {/* Corner meta — only shown when there's no real thumbnail (fallback) */}
      {!(thumbSrc || needsIframePoster) && (
        <div style={{position:"absolute", top:20, left:24, right:24, display:"flex", justifyContent:"space-between", fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", fontFamily:"var(--font-sans)", color: f.fg, opacity: 0.8}}>
          <span>{project.category}</span>
          <span>Dir · {project.director}</span>
        </div>
      )}

      {/* Play cue — appears on hover before video mounts */}
      {(thumbSrc || needsIframePoster) && hover && hoverable && !mountVideo && (
        <div style={{
          position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)",
          width:64, height:64, borderRadius:"50%",
          border:"1px solid rgba(247,243,236,0.8)",
          display:"flex", alignItems:"center", justifyContent:"center",
          color:"#F7F3EC", fontSize:20, letterSpacing:"0.1em",
          backdropFilter:"blur(4px)", background:"rgba(0,0,0,0.15)",
          pointerEvents:"none",
        }}>
          ▶
        </div>
      )}

      {/* Hover overlay — subtle darkening */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background: "rgba(0,0,0,0.18)",
        opacity: hover && hoverable ? 1 : 0,
        transition:"opacity 400ms ease-out",
      }} />
    </div>
  );
}

/* =========================================================
 * TWEAKS PANEL
 * ========================================================= */
function TweaksPanel({ open, onClose, tweaks, setTweaks }) {
  if (!open) return null;
  const T = tweaks;
  const set = (k, v) => {
    const next = { ...T, [k]: v };
    setTweaks(next);
    // Persist via editmode protocol
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: next }, "*");
    } catch {}
  };
  return (
    <div style={tw.root}>
      <div style={tw.head}>
        <span style={{fontFamily:"var(--font-condensed)", fontSize:13, letterSpacing:"0.18em"}}>TWEAKS</span>
        <button onClick={onClose} style={tw.close}>✕</button>
      </div>

      <TweakRow label="Language">
        {[{v:"es",l:"ES"},{v:"en",l:"EN"}].map(o => (
          <Pill key={o.v} active={T.lang === o.v} onClick={()=>set("lang", o.v)}>{o.l}</Pill>
        ))}
      </TweakRow>

      <TweakRow label="Mode">
        {[{v:"dark",l:"Oscuro"},{v:"light",l:"Papel"}].map(o => (
          <Pill key={o.v} active={T.mode === o.v} onClick={()=>set("mode", o.v)}>{o.l}</Pill>
        ))}
      </TweakRow>

      <TweakRow label="Accent">
        {[{v:"rosa",l:"Rosa"},{v:"vino",l:"Vino"},{v:"olivo",l:"Olivo"}].map(o => (
          <Pill key={o.v} active={T.accent === o.v} onClick={()=>set("accent", o.v)}>
            <span style={{display:"inline-block", width:10, height:10, borderRadius:"50%", background:`var(--${o.v})`, marginRight:6, verticalAlign:"middle"}} />
            {o.l}
          </Pill>
        ))}
      </TweakRow>

      <TweakRow label="Hero treatment">
        {[{v:"video",l:"Reel (video)"},{v:"stills",l:"Stills loop"},{v:"gradient",l:"Gradiente"},{v:"single",l:"Still único"}].map(o => (
          <Pill key={o.v} active={T.hero === o.v} onClick={()=>set("hero", o.v)}>{o.l}</Pill>
        ))}
      </TweakRow>

      <TweakRow label="Work grid">
        {[{v:"asym",l:"Asimétrico"},{v:"regular",l:"Regular"},{v:"strip",l:"Cinema-strip"}].map(o => (
          <Pill key={o.v} active={T.workGrid === o.v} onClick={()=>set("workGrid", o.v)}>{o.l}</Pill>
        ))}
      </TweakRow>

      <TweakRow label="Manifesto">
        {["v1","v2","v3","v4"].map(v => (
          <Pill key={v} active={T.manifesto === v} onClick={()=>set("manifesto", v)}>{v.toUpperCase()}</Pill>
        ))}
      </TweakRow>

      <div style={tw.footer}>
        <span className="eyebrow" style={{opacity:0.55}}>Selva Studio · Tweaks v1</span>
      </div>
    </div>
  );
}
function TweakRow({ label, children }) {
  return (
    <div style={{padding:"12px 0", borderBottom:"1px solid var(--border)"}}>
      <div className="eyebrow" style={{marginBottom:8, color:"var(--fg-2)"}}>{label}</div>
      <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>{children}</div>
    </div>
  );
}
function Pill({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      background: active ? "var(--nuez)" : "transparent",
      color: active ? "var(--negro)" : "var(--fg-1)",
      border:"1px solid var(--border-strong)",
      padding:"6px 12px",
      fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.12em",
      cursor:"pointer", textTransform:"uppercase",
    }}>{children}</button>
  );
}
const tw = {
  root: {
    position:"fixed", bottom:16, right:16, zIndex:90,
    width:320, background:"#0a0b0b",
    border:"1px solid var(--border-strong)",
    padding:"16px 18px",
    fontFamily:"var(--font-sans)", color:"var(--nuez)",
  },
  head: { display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12, paddingBottom:10, borderBottom:"1px solid var(--border)" },
  close: { background:"transparent", border:0, color:"var(--nuez)", cursor:"pointer", fontSize:14 },
  footer: { paddingTop:12 },
};

Object.assign(window, { SelvaLogo, Header, MobileMenu, Footer, PosterThumb, TweaksPanel });
