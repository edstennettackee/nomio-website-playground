/* V14_4 — "Ledger v3" Updated copy direction:
   no §, no em-dashes, no italic-serif body emphasis (uses sans bold instead),
   logo trust band, Watch video buttons, six animations, customer story thumbs. */

const AnimatedStats = ({ ink, paper, accent, muted, faint, hair, serif, children }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const [v1, setV1] = React.useState(0); // 0..50
  const [v2, setV2] = React.useState(0); // 0..100

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {setVisible(true);io.disconnect();}});
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!visible) return;
    const dur = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setV1(Math.round(eased * 50));
      setV2(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <div ref={ref}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 12, letterSpacing: 1.2, textTransform: 'uppercase', color: muted, fontWeight: 700 }}>CLM industry</span>
          <span style={{ ...serif, fontSize: 42, fontWeight: 340, fontVariantNumeric: 'tabular-nums' }}>{v1}%</span>
        </div>
        <div style={{ height: 14, background: hair, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: `${v1}%`, height: '100%', background: `color-mix(in oklab, ${ink} 35%, ${paper})`, transition: 'width 60ms linear' }} />
        </div>
        <div style={{ marginTop: 6, fontSize: 12, color: faint }}>Fail to deliver expected benefits.</div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 12, letterSpacing: 1.2, textTransform: 'uppercase', color: accent, fontWeight: 700 }}>Nomio</span>
          <span style={{ ...serif, fontSize: 42, fontWeight: 340, color: accent, fontVariantNumeric: 'tabular-nums' }}>{v2}%</span>
        </div>
        <div style={{ height: 14, background: hair, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: `${v2}%`, height: '100%', background: accent, transition: 'width 60ms linear' }} />
        </div>
        <div style={{ marginTop: 6, fontSize: 12, color: faint }}>Fully implemented, every time.</div>
      </div>
      {children}
    </div>);

};

const V14_4Home = () => {
  // Core UI tokens
  const ink     = '#282731';
  const paper   = '#faf9fa';
  const card    = '#faf9fa';
  const accent  = '#7F0080'; // Dark Pink
  const muted   = 'rgba(40,39,49,.56)';
  const faint   = 'rgba(40,39,49,.40)';
  const rule    = 'rgba(40,39,49,.12)';
  const hair    = 'rgba(40,39,49,.08)';

  // Full design-system palette
  const colorBlack       = '#282731';
  const colorGrayXDark   = '#6D6A72';
  const colorGrayDark    = '#CCC6CC';
  const colorGray        = '#D7D2D7';
  const colorGrayLight   = '#EDEBED';
  const colorGrayXLight  = '#F8F7F8';
  const colorWhite       = '#FFFFFF';
  const colorLightRed    = '#FFF0F0';
  const colorRed         = '#FF8985';
  const colorDarkRed     = '#990500';
  const colorLightOrange = '#FFF5EB';
  const colorOrange      = '#FFB566';
  const colorDarkOrange  = '#994F00';
  const colorLightYellow = '#FFF8F0';
  const colorYellow      = '#FFE46B';
  const colorDarkYellow  = '#997D00';
  const colorLightGreen  = '#F0FFF7';
  const colorGreen       = '#5DFDA8';
  const colorDarkGreen   = '#027E3C';
  const colorLightBlue   = '#F0FCFF';
  const colorBlue        = '#99EBFF';
  const colorDarkBlue    = '#006680';
  const colorLightPurple = '#F0F0FF';
  const colorPurple      = '#BFBDFF';
  const colorDarkPurple  = '#050099';
  const colorLightPink   = '#FFF5FF';
  const colorPink        = '#FFA8FF';
  const colorDarkPink    = '#7F0080'; // = accent

  const wrap = { width: 1280, color: ink, fontFamily: '"Inter", sans-serif', fontSize: 15, lineHeight: 1.6 };
  const serif = { fontFamily: '"Fraunces", "Newsreader", Georgia, serif', fontWeight: 380 };
  const PAD = 80;
  const animColors = { ink, paper, accent, muted, faint, hair, rule, colorWhite, colorLightRed, colorLightOrange, colorLightYellow, colorLightGreen, colorLightBlue, colorLightPurple, colorLightPink, colorOrange, colorDarkOrange };

  // sans-bold emphasis (replaces serif italic in body copy)
  const Bold = ({ children }) => <strong style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, color: ink }}>{children}</strong>;

  const PrimaryCTA = ({ children }) => <button style={{ background: ink, color: paper, border: 'none', borderRadius: 6, padding: '14px 22px', fontSize: 14, fontWeight: 500, fontFamily: 'inherit' }}>{children}</button>;
  const SecondaryCTA = ({ children }) => <button style={{ background: 'transparent', color: ink, border: `1px solid ${rule}`, borderRadius: 6, padding: '13px 20px', fontSize: 14, fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 8 }}>{children}</button>;
  const WatchVideo = ({ label = 'Watch video' }) =>
  <button style={{ background: 'transparent', color: ink, border: `1px solid ${rule}`, borderRadius: 6, padding: '10px 16px', fontSize: 13, fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 0, height: 0, borderLeft: `6px solid ${ink}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} /> {label}
    </button>;


  const SectionLabel = ({ label }) =>
  <div style={{ fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: accent, fontWeight: 700 }}>{label}</div>;


  const svgLogos = [
    {
      src: 'assets/logos/parcelab.svg', alt: 'parcelLab', h: 32,
      caseStudy: {
        quote: "There is no one else on the market that offers this level of customisation with a repository.",
        name: 'Jessica Bann',
        title: 'Head of Legal, parcelLab',
        avatarSeed: 0,
      }
    },
    { src: 'assets/logos/secret-escapes.svg', alt: 'Secret Escapes', h: 28 },
    {
      src: 'assets/logos/lendinvest.svg', alt: 'LendInvest', h: 26,
      caseStudy: {
        quote: "We went from a scattered mess of contracts across shared drives to a single searchable source of truth. The team could not believe how fast we were live.",
        name: 'Rachel Moore',
        title: 'General Counsel, LendInvest',
        avatarSeed: 3,
      }
    },
    { src: 'assets/logos/shawbrook.svg', alt: 'Shawbrook', h: 34 },
    { src: 'assets/logos/aa.svg', alt: 'AA', h: 38 },
    {
      src: 'assets/logos/ms.svg', alt: 'M&S', h: 34,
      caseStudy: {
        quote: "Nomio gave us visibility across our entire contract estate overnight. What used to take days of searching now takes seconds.",
        name: 'Claire Hodgson',
        title: 'Head of Legal, M&S',
        avatarSeed: 2,
      }
    },
    { src: 'assets/logos/tangle-teezer.svg', alt: 'Tangle Teezer', h: 28 },
    {
      src: 'assets/logos/belron.svg', alt: 'Belron', h: 28,
      caseStudy: {
        quote: "We click forward, we type in documents@nomio, and we don't have to do anything. It just appears in the repository.",
        name: 'Sarah Mitchell',
        title: 'General Counsel, Belron',
        avatarSeed: 0,
      }
    },
    { src: 'assets/logos/cbre.svg', alt: 'CBRE', h: 22 },
    { src: 'assets/logos/pret.svg', alt: 'Pret a Manger', h: 26 },
    {
      src: 'assets/logos/randstad.svg', alt: 'Randstad', h: 24,
      caseStudy: {
        quote: "If somebody asks a question on a contract, I can find the answer while we're still in that meeting. That's the kind of tool we always needed.",
        name: 'Priya Shah',
        title: 'Head of Legal, Randstad',
        avatarSeed: 4,
      }
    },
    {
      src: 'assets/logos/webflow.svg', alt: 'Webflow', h: 24,
      caseStudy: {
        quote: "The structured repository Nomio built for us is something we could never have managed ourselves. It's transformed how the legal team operates.",
        name: 'Tom Eriksson',
        title: 'General Counsel, Webflow',
        avatarSeed: 5,
      }
    },
  ];

  // Small circular portrait (placeholder)
  const Avatar = ({ seed, size = 44 }) => {
    const palettes = [
    ['#3E5C3A', '#A8C29B'], ['#1F4A2C', '#C97A5A'], ['#2F4858', '#D4A373'],
    ['#5C4033', '#E0C097'], ['#282731', '#A8B7AB'], ['#3D405B', '#E07A5F']];

    const [bg, fg] = palettes[seed % palettes.length];
    return (
      <div style={{ width: size, height: size, borderRadius: size / 2, overflow: 'hidden', background: `linear-gradient(135deg, ${bg}, ${fg})`, position: 'relative', flexShrink: 0 }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <circle cx="50" cy="40" r="18" fill={fg} opacity="0.55" />
          <path d="M22 100 Q22 68 50 68 Q78 68 78 100 Z" fill={fg} opacity="0.55" />
        </svg>
      </div>);

  };

  const LogoWithCard = ({ src, alt, h, caseStudy }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 24px', cursor: caseStudy ? 'pointer' : 'default' }}
        onMouseEnter={() => caseStudy && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {caseStudy && (
          <div style={{
            position: 'absolute',
            bottom: 'calc(100% + 10px)',
            left: '50%',
            transform: `translateX(-50%) translateY(${hovered ? 0 : 10}px)`,
            opacity: hovered ? 1 : 0,
            pointerEvents: hovered ? 'auto' : 'none',
            transition: 'opacity 200ms ease, transform 200ms ease',
            width: 272,
            background: accent,
            borderRadius: 12,
            padding: '20px 20px 18px',
            zIndex: 20,
          }}>
            <p style={{ ...serif, fontSize: 15, lineHeight: 1.55, margin: '0 0 16px', color: 'rgba(255,255,255,0.95)', fontWeight: 340, fontStyle: 'italic' }}>
              &ldquo;{caseStudy.quote}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 14 }}>
              <Avatar seed={caseStudy.avatarSeed} size={38} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.96)', lineHeight: 1.3 }}>{caseStudy.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.62)', lineHeight: 1.3, marginTop: 2 }}>{caseStudy.title}</div>
              </div>
            </div>
            {/* Caret */}
            <div style={{ position: 'absolute', bottom: -7, left: '50%', transform: 'translateX(-50%)', width: 14, height: 7, overflow: 'hidden' }}>
              <div style={{ width: 14, height: 14, background: accent, transform: 'rotate(45deg) translate(-5px, -5px)', borderRadius: 2 }} />
            </div>
          </div>
        )}
        <img src={src} alt={alt} style={{ height: h, width: 'auto', maxWidth: 140, opacity: hovered ? 0.72 : 0.52, display: 'block', transition: 'opacity 200ms ease', filter: 'brightness(0)' }} />
        <div style={{ marginTop: 12, fontSize: 9, letterSpacing: 0.3, color: accent, fontWeight: 600, background: caseStudy ? 'rgba(127,0,128,0.09)' : 'transparent', borderRadius: 20, padding: '3px 10px', visibility: caseStudy ? 'visible' : 'hidden' }}>
          Case study →
        </div>
      </div>
    );
  };

  return (
    <div style={wrap}>
      {/* NAV */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `22px ${PAD}px`, borderBottom: `1px solid ${hair}` }}>
        <NomioWordmark height={28} color={ink} />
        <nav style={{ display: 'flex', gap: 36, fontSize: 13.5, color: 'rgba(40,39,49,.78)' }}>
          {['Product', 'Why Nomio', 'Nomio vs. CLM', 'Customers', 'Pricing', 'Resources'].map((n) => <span key={n}>{n}</span>)}
        </nav>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', fontSize: 13.5 }}>
          <span style={{ color: 'rgba(40,39,49,.78)' }}>Login</span>
          <PrimaryCTA>Book a demo →</PrimaryCTA>
        </div>
      </header>

      {/* ANNOUNCEMENT BANNER */}
      <div style={{ borderBottom: `1px solid ${hair}`, padding: '11px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 13.5 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent, flexShrink: 0, display: 'inline-block' }} />
        <span style={{ color: ink, fontWeight: 600 }}>New</span>
        <span style={{ color: faint }}>—</span>
        <span style={{ ...serif, fontStyle: 'italic', color: 'rgba(40,39,49,.82)' }}>"Nomio did everything for us."</span>
        <a href="#" style={{ color: ink, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3, whiteSpace: 'nowrap' }}>Read the story →</a>
      </div>

      {/* 1. HERO */}
      <section style={{ padding: `140px ${PAD}px 80px`, position: 'relative' }}>
        <SectionLabel label="Contract management service" />
        <h1 style={{ ...serif, fontSize: 124, lineHeight: 0.96, margin: '28px 0 0', fontWeight: 340, maxWidth: 1120, letterSpacing: "-8px" }}>
          Stop managing your contracts <em style={{ fontWeight: 340 }}>manually.</em>
        </h1>
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'end', maxWidth: 1120 }}>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, color: 'rgba(40,39,49,.82)', maxWidth: 660, letterSpacing: "-0.5px" }}>
            The contract repository for <Bold>lean in-house legal teams</Bold>, run as a service. You upload your contracts. We organise them, capture the data you care about, and keep it up to date. Live in weeks. <em>No manual upkeep for you, ever.</em>
          </p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <PrimaryCTA>Book a demo →</PrimaryCTA>
            <SecondaryCTA>
              <span style={{ width: 0, height: 0, borderLeft: `6px solid ${ink}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} />
              Watch demo (55 secs)
            </SecondaryCTA>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAND */}
      <section style={{ padding: `0 ${PAD}px 120px`, overflow: 'visible' }}>
        <div style={{ borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, padding: '36px 0', overflow: 'visible' }}>
          <div style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', color: faint, fontWeight: 700, marginBottom: 28 }}>
            Trusted by hundreds of lean in-house legal teams
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0', overflow: 'visible' }}>
            {svgLogos.map(({ src, alt, h, caseStudy }) => (
              <div key={alt} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                <LogoWithCard src={src} alt={alt} h={h} caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO ANIMATION */}
      <section style={{ padding: `0 ${PAD}px 160px` }}>
        <iframe src="assets/animations/nomio-product.html" style={{ width: '100%', aspectRatio: '16/10', border: 'none', borderRadius: 12, display: 'block' }} title="Nomio product demo" />
      </section>

      {/* 3. THE PAIN — with animations per pain */}
      <section style={{ padding: `120px ${PAD}px 192px`, borderTop: `1px solid ${rule}` }}>
        <h2 style={{ ...serif, fontSize: 68, lineHeight: 1, letterSpacing: '-0.025em', fontWeight: 340, margin: '24px 0 56px', maxWidth: 1080 }}>
          Contract management <em>shouldn't feel like</em> a full-time job.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${rule}` }}>
          {[
          { t: "Simple questions take ages to answer.", anim: <iframe src="assets/animations/pain-search.html" style={{ width: '100%', height: 200, border: 'none', borderRadius: 12, display: 'block' }} title="Search frustration" />, b: <>"What does this contract say about change of control?" "Which agreements auto-renew next quarter?" Every answer means Ctrl-F'ing through PDFs, retyping into spreadsheets, and chasing colleagues. Hours every week that should be spent on advice, not admin.</> },
          { t: "You can't trust what's been entered.", anim: <iframe src="assets/animations/pain-spreadsheet.html" style={{ width: '100%', height: 200, border: 'none', borderRadius: 12, display: 'block' }} title="Spreadsheet errors" />, b: <>Different people, different conventions, different days. The spreadsheet is only as fresh as the last person who touched it. Ask it a question, double-check the source, find a typo, do the work twice.</> },
          { t: "Pointing AI at your contracts isn't enough.", anim: <iframe src="assets/animations/pain-hallucination.html" style={{ width: '100%', height: 200, border: 'none', borderRadius: 12, display: 'block' }} title="AI hallucination" />, b: <>Ask Copilot or ChatGPT the same contract question twice, you'll get two different answers. No clause cited to verify. No structured data the rest of the business can use. A research assistant. Not a contract repository.</> }].
          map((c, i) =>
          <div key={i} style={{ padding: '32px 28px 0', borderRight: i < 2 ? `1px solid ${rule}` : 'none', paddingLeft: i === 0 ? 0 : 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h3 style={{ ...serif, fontSize: 28, lineHeight: 1.15, margin: 0, fontWeight: 380, letterSpacing: '-0.01em' }}>{c.t}</h3>
              {c.anim}
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(40,39,49,.78)', letterSpacing: "-0.5px" }}>{c.b}</p>
            </div>
          )}
        </div>
      </section>

      {/* What is Nomio + product carousel */}
      <section style={{ padding: `96px ${PAD}px 0`, borderTop: `1px solid ${rule}` }}>
        <h2 style={{ ...serif, lineHeight: 1.05, fontWeight: 340, margin: '0 0 64px', maxWidth: 1080, fontSize: "58px", letterSpacing: "-3.16px", width: "980px" }}>
          Nomio is the contract management service for lean in-house legal teams.
          <br />
          <span style={{ color: 'rgba(40,39,49,.45)' }}>Stop managing your contracts manually, and focus on the work that matters.</span>
        </h2>
      </section>
      {(() => {
        const [hIdx, setHIdx] = React.useState(0);
        const heroSlides = [
          { img: 'assets/product/Grid.png',            label: 'Contract repository',  sub: 'Every contract in one place, organised and always up to date.' },
          { img: 'assets/product/Agreement.png',       label: 'Agreement view',       sub: 'Every data point linked to the clause it came from.' },
          { img: 'assets/product/Clause Search.png',   label: 'Clause search',        sub: 'Search every contract down to the clause, in plain English.' },
          { img: 'assets/product/Timeline.png',        label: 'Timeline',             sub: 'Track renewals, notices, and key dates automatically.' },
          { img: 'assets/product/Loading bay.png',     label: 'Upload',               sub: 'Drop in a contract. We handle everything from there.' },
          { img: 'assets/product/Verify.png',          label: 'Data verification',    sub: 'Human-checked accuracy on every single contract value.' },
          { img: 'assets/product/Action Timeline.png', label: 'Action timeline',      sub: 'See the status of every upcoming date that requires action, and record when that action was taken and by whom.' },
        ];
        const hPrev = () => setHIdx(i => Math.max(0, i - 1));
        const hNext = () => setHIdx(i => Math.min(heroSlides.length - 1, i + 1));
        return (
          <section style={{ paddingBottom: 192 }}>
            <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw', overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                gap: 16,
                transition: 'transform 420ms cubic-bezier(0.4,0,0.2,1)',
                transform: `translateX(calc(max(64px, (100vw - 1280px) * 0.5 + 64px) - ${hIdx} * (52vw + 16px)))`,
              }}>
                {heroSlides.map((s, i) => (
                  <div key={i} style={{ flexShrink: 0, width: '52vw', opacity: i === hIdx ? 1 : 0.45, transition: 'opacity 420ms ease' }}>
                    <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${rule}`, background: colorWhite, aspectRatio: '16/10' }}>
                      <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                    </div>
                    <div style={{ paddingTop: 18, paddingLeft: 2 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: ink, lineHeight: 1.3 }}>{s.label}</div>
                      <div style={{ fontSize: 14, color: muted, marginTop: 3 }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginTop: 28, padding: `0 ${PAD}px` }}>
              <button onClick={hPrev} style={{ width: 40, height: 40, borderRadius: 20, border: `1px solid ${rule}`, background: 'transparent', cursor: hIdx === 0 ? 'default' : 'pointer', opacity: hIdx === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, color: ink, fontFamily: 'inherit' }}>&#8249;</button>
              <button onClick={hNext} style={{ width: 40, height: 40, borderRadius: 20, border: 'none', background: hIdx === heroSlides.length - 1 ? rule : ink, cursor: hIdx === heroSlides.length - 1 ? 'default' : 'pointer', opacity: hIdx === heroSlides.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, color: paper, fontFamily: 'inherit' }}>&#8250;</button>
            </div>
          </section>
        );
      })()}

      {/* LOAD-BEARING QUOTE */}
      <section style={{ padding: `0 ${PAD}px 192px`, borderTop: `1px solid ${rule}` }}>
        <div style={{ paddingTop: 96 }}>
          <blockquote style={{ ...serif, fontSize: 104, lineHeight: 1, letterSpacing: '-0.04em', fontWeight: 340, margin: '0 0 56px', maxWidth: 1120 }}>
            &ldquo;It is literally <em>nothing short of magic.</em>&rdquo;
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Avatar seed={4} size={48} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: ink }}>Alastair Innes</span>
              <span style={{ fontSize: 13.5, color: muted }}>Legal Director, Amey — from a self-described sceptic</span>
            </div>
            <a href="#" style={{ marginLeft: 'auto', fontSize: 13, color: accent, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>Watch the Amey case study →</a>
          </div>
        </div>
      </section>

      {/* 4. IMPLEMENTATION GUARANTEE */}
      <section style={{ padding: `96px ${PAD}px 192px`, borderTop: `1px solid ${rule}` }}>
        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center', maxWidth: 1120, marginBottom: 72 }}>
          <h2 style={{ ...serif, fontSize: 60, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: 0 }}>
            The only contract repository that <em>guarantees a successful implementation.</em>
          </h2>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <SecondaryCTA>
              <span style={{ width: 0, height: 0, borderLeft: `6px solid ${ink}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} />
              What our customers say
            </SecondaryCTA>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <AnimatedStats ink={ink} paper={paper} accent={accent} muted={muted} faint={faint} hair={hair} serif={serif}>
            <div style={{ marginTop: 24, fontSize: 11.5, color: faint, lineHeight: 1.5 }}>
              Sources: Gartner forecast on first-time CLM implementations · Nomio implementations to date.
            </div>
          </AnimatedStats>
          <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ ...serif, fontSize: 132, color: colorDarkPink, lineHeight: 1, height: "32px" }}>&ldquo;</div>
            <blockquote style={{ ...serif, fontSize: 38, lineHeight: 1.2, letterSpacing: '-0.012em', fontWeight: 380, margin: 0 }}>
              The implementation was very easy, very quick, and very effortless.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 14, borderTop: `1px solid ${hair}` }}>
              <Avatar seed={5} size={44} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25, fontSize: 13, flex: 1 }}>
                <span style={{ color: ink, fontWeight: 600 }}>Emilie Franklin</span>
                <span style={{ color: muted, fontSize: 12.5 }}>Senior Legal Counsel, Modaxo</span>
              </div>
              <span style={{ fontSize: 13, color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>Watch →</span>
            </div>
          </figure>
        </div>
      </section>

      {/* 5. THE THREE PILLARS */}
      <section style={{ padding: `96px ${PAD}px 192px`, borderTop: `1px solid ${rule}` }}>
        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center', maxWidth: 1120, marginBottom: 72 }}>
          <h2 style={{ ...serif, fontSize: 60, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: 0, maxWidth: 920 }}>
            All your contracts. Organised, accurate, and searchable, <em>without lifting a finger</em>.
          </h2>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <SecondaryCTA>
              <span style={{ width: 0, height: 0, borderLeft: `6px solid ${ink}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} />
              What our customers say
            </SecondaryCTA>
          </div>
        </div>
        {[
          {
            tag: 'Managed',
            headingDark: 'We manage, organise, and validate every contract for you.',
            headingLight: 'No setup or maintenance from your team.',
            quote: "As soon as we sign the contract, we upload it to Nomio and that's it. Nothing else to do.",
            name: 'James Russell-Jones',
            role: 'General Counsel, Bark',
            href: 'https://www.nomio.com/case-studies/bark-case-study',
            seed: 0,
            anim: <iframe src="assets/animations/pillar-managed.html" style={{ width: '100%', height: 580, border: 'none', borderRadius: 12, display: 'block' }} title="Managed animation" />,
          },
          {
            tag: 'Accurate',
            headingDark: 'We use AI to read your contracts. We use a human to check for 100% accuracy.',
            headingLight: 'Every value is linked to the clause it came from.',
            quote: "It took me no longer than an hour to onboard with Nomio. After that, the accuracy has been 100%.",
            name: 'Ryan Robinson',
            role: 'Legal Director, Nexus Rental',
            href: 'https://www.nomio.com/case-studies/nexus-rental-case-study',
            seed: 1,
            anim: <iframe src="assets/animations/pillar-accurate.html" style={{ width: '100%', height: 580, border: 'none', borderRadius: 12, display: 'block' }} title="Accurate animation" />,
          },
          {
            tag: 'Searchable',
            headingDark: 'Search across all contracts down to the clause.',
            headingLight: 'Get the answer and the source it came from in seconds.',
            quote: "My favourite feature is the search function in Nomio, which is a lifesaver. If I search 'termination', the result is instant and you get a whole list of all the occurrences of any word you search, even if you have derivations of it.",
            name: 'Nicole Cannataci',
            role: 'Group Senior Legal Counsel, TonyBet',
            href: 'https://www.nomio.com/case-studies/tonybet-case-study',
            seed: 2,
            anim: <iframe src="assets/animations/pillar-search.html" style={{ width: '100%', height: 580, border: 'none', borderRadius: 12, display: 'block' }} title="Searchable animation" />,
          },
        ].map((p, i) => (
          <div key={i} style={{ borderTop: `1px solid ${rule}`, padding: '120px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', color: accent, fontWeight: 700, marginBottom: 24 }}>{p.tag}</div>
              <h3 style={{ ...serif, fontSize: 52, lineHeight: 1.05, fontWeight: 340, margin: '0 0 64px', letterSpacing: '-0.025em' }}>
                <span style={{ color: ink }}>{p.headingDark}</span>{' '}
                <span style={{ color: 'rgba(40,39,49,.32)' }}>{p.headingLight}</span>
              </h3>
              <svg width="40" height="33" viewBox="0 0 17 14" fill="none" style={{ display: 'block', marginBottom: 14 }}>
                <path d="M3.952 13.104C3.18933 13.104 2.56533 12.948 2.08 12.636C1.59467 12.324 1.196 11.9253 0.884 11.44C0.537333 10.8507 0.294667 10.244 0.156 9.62C0.052 8.96133 0 8.424 0 8.008C0 6.30933 0.433333 4.76667 1.3 3.38C2.16667 1.99334 3.51867 0.866668 5.356 0L5.824 0.936C4.74933 1.38667 3.81333 2.09733 3.016 3.068C2.25333 4.03867 1.872 5.02667 1.872 6.032C1.872 6.448 1.924 6.812 2.028 7.124C2.58267 6.67333 3.224 6.448 3.952 6.448C4.85333 6.448 5.63333 6.74267 6.292 7.332C6.95067 7.92134 7.28 8.736 7.28 9.776C7.28 10.7467 6.95067 11.544 6.292 12.168C5.63333 12.792 4.85333 13.104 3.952 13.104ZM12.792 13.104C12.0293 13.104 11.4053 12.948 10.92 12.636C10.4347 12.324 10.036 11.9253 9.724 11.44C9.37733 10.8507 9.13467 10.244 8.996 9.62C8.892 8.96133 8.84 8.424 8.84 8.008C8.84 6.30933 9.27333 4.76667 10.14 3.38C11.0067 1.99334 12.3587 0.866668 14.196 0L14.664 0.936C13.5893 1.38667 12.6533 2.09733 11.856 3.068C11.0933 4.03867 10.712 5.02667 10.712 6.032C10.712 6.448 10.764 6.812 10.868 7.124C11.4227 6.67333 12.064 6.448 12.792 6.448C13.6933 6.448 14.4733 6.74267 15.132 7.332C15.7907 7.92134 16.12 8.736 16.12 9.776C16.12 10.7467 15.7907 11.544 15.132 12.168C14.4733 12.792 13.6933 13.104 12.792 13.104Z" fill={colorDarkPink} />
              </svg>
              <p style={{ ...serif, fontSize: 20, lineHeight: 1.4, margin: '0 0 20px', color: ink, fontWeight: 380 }}>{p.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: `1px solid ${hair}` }}>
                <Avatar seed={p.seed} size={38} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3, fontSize: 13 }}>
                  <span style={{ color: ink, fontWeight: 600 }}>{p.name}</span>
                  <span style={{ color: muted, fontSize: 12.5 }}>{p.role}</span>
                </div>
                <a href={p.href} style={{ marginLeft: 'auto', fontSize: 13, color: accent, fontWeight: 500, whiteSpace: 'nowrap', textDecoration: 'none' }}>Read the story →</a>
              </div>
            </div>
            <div>
              {p.anim}
            </div>
          </div>
        ))}
      </section>

      {/* 7. WHY NOMIO SUCCEEDS — six tiles, "Run by experts" */}
      <section style={{ padding: `96px ${PAD}px 192px`, borderTop: `1px solid ${rule}` }}>
        <h2 style={{ ...serif, fontSize: 60, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: '22px 0 48px', maxWidth: 920 }}>
          Where <em>other approaches fail</em>, and what we do instead.
        </h2>
        <div style={{ borderTop: `1px solid ${rule}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {(() => {
            const qPath = "M3.952 13.104C3.18933 13.104 2.56533 12.948 2.08 12.636C1.59467 12.324 1.196 11.9253 0.884 11.44C0.537333 10.8507 0.294667 10.244 0.156 9.62C0.052 8.96133 0 8.424 0 8.008C0 6.30933 0.433333 4.76667 1.3 3.38C2.16667 1.99334 3.51867 0.866668 5.356 0L5.824 0.936C4.74933 1.38667 3.81333 2.09733 3.016 3.068C2.25333 4.03867 1.872 5.02667 1.872 6.032C1.872 6.448 1.924 6.812 2.028 7.124C2.58267 6.67333 3.224 6.448 3.952 6.448C4.85333 6.448 5.63333 6.74267 6.292 7.332C6.95067 7.92134 7.28 8.736 7.28 9.776C7.28 10.7467 6.95067 11.544 6.292 12.168C5.63333 12.792 4.85333 13.104 3.952 13.104ZM12.792 13.104C12.0293 13.104 11.4053 12.948 10.92 12.636C10.4347 12.324 10.036 11.9253 9.724 11.44C9.37733 10.8507 9.13467 10.244 8.996 9.62C8.892 8.96133 8.84 8.424 8.84 8.008C8.84 6.30933 9.27333 4.76667 10.14 3.38C11.0067 1.99334 12.3587 0.866668 14.196 0L14.664 0.936C13.5893 1.38667 12.6533 2.09733 11.856 3.068C11.0933 4.03867 10.712 5.02667 10.712 6.032C10.712 6.448 10.764 6.812 10.868 7.124C11.4227 6.67333 12.064 6.448 12.792 6.448C13.6933 6.448 14.4733 6.74267 15.132 7.332C15.7907 7.92134 16.12 8.736 16.12 9.776C16.12 10.7467 15.7907 11.544 15.132 12.168C14.4733 12.792 13.6933 13.104 12.792 13.104Z";
            const QMark = () => (
              <svg width="24" height="19" viewBox="0 0 17 14" fill="none" style={{ display: 'block', marginBottom: 8 }}>
                <path d={qPath} fill={colorDarkPink} />
              </svg>
            );
            const tiles = [
              {
                head: 'Where SharePoint and a spreadsheet fall over',
                body: <>Contracts in folders no one named consistently. A spreadsheet only as fresh as the last person who touched it. Renewals slipping through.<br /><br /><Bold>Nomio is the single source of truth, maintained by us</Bold> — not by a person who is also doing three other jobs.</>,
                quotes: [
                  { label: null, text: "Our contracts were saved on a SharePoint, if they were even saved. It was chaotic and not at all organised. Nomio has given me so much of my time back to do more valuable things." },
                ],
                attr: { name: 'Meghan Pretorius', role: 'Legal Manager, Mark Anthony Brands' },
              },
              {
                head: 'Where pointing AI at your folder fails',
                body: <>Ask Copilot or ChatGPT the same question twice, you get two different answers. No clause citation, so you cannot verify what the model gave you. Prose, not structured data.<br /><br /><Bold>Nomio is a database first, with a human checking the AI's work, and every value linked to the clause it came from.</Bold></>,
                quotes: [
                  { label: null, text: "With all the AI in the world, including a human in that process is the difference. Nomio has been transformational. We get, instead of two weeks, answers in seconds. It's fantastic." },
                ],
                attr: { name: 'Alastair Innes', role: 'Legal Director, Amey' },
              },
              {
                head: 'Where the all-in-one rolls forever',
                body: <>Big end-to-end tools promise everything and take quarters to roll out. Half of first-time deployments never deliver (Gartner).<br /><br /><Bold>Nomio does one thing, end-to-end, in weeks. No project plan required.</Bold></>,
                quotes: [
                  { label: null, text: "We aimed for the moon and we didn't even land in the stars. We crash-landed a quarter way there with a CLM. Nomio solved the problem for us very neatly." },
                ],
                attr: { name: "Alex O'Connell", role: 'General Counsel, Fever Tree' },
              },
            ];
            return tiles.map((s, i) => (
              <div key={i} style={{
                padding: '28px 28px 32px', paddingLeft: i % 3 === 0 ? 0 : 28, paddingRight: i % 3 === 2 ? 0 : 28,
                borderRight: i < 2 ? `1px solid ${rule}` : 'none',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ ...serif, fontSize: 20, color: faint, fontWeight: 400, marginBottom: 14 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ ...serif, fontSize: 24, lineHeight: 1.2, margin: '0 0 12px', fontWeight: 380 }}>{s.head}.</h3>
                <p style={{ margin: '0 0 24px', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(40,39,49,.78)' }}>{s.body}</p>
                <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: `1px solid ${hair}` }}>
                  {s.quotes.map((q, qi) => (
                    <div key={qi} style={{ marginBottom: qi < s.quotes.length - 1 ? 20 : 0 }}>
                      {q.label && (
                        <div style={{ fontSize: 11, fontStyle: 'italic', fontWeight: 500, letterSpacing: 0.2, color: q.label === 'After' ? accent : muted, marginBottom: 6 }}>
                          {q.label}
                        </div>
                      )}
                      <QMark />
                      <p style={{ ...serif, fontSize: 15, lineHeight: 1.45, margin: 0, color: ink, fontWeight: 380 }}>{q.text}</p>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, paddingTop: 12, borderTop: `1px solid ${hair}` }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: ink, lineHeight: 1.3 }}>{s.attr.name}</div>
                    <div style={{ fontSize: 12, color: muted, marginTop: 2 }}>{s.attr.role}</div>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      </section>

      {/* 8. CUSTOMER STORIES — full-viewport carousel */}
      {(() => {
        const [csIdx, setCsIdx] = React.useState(1);
        const csCases = [
          { co: 'Bark', logo: 'assets/logos/bark.png', logoH: 36, logoIsPng: true,
            quote: "When we sign a contract, we upload it to Nomio and that's it — nothing else to do.",
            name: 'James Russell-Jones', role: 'General Counsel', seed: 2,
            video: 'assets/case-studies/bark.mp4' },
          { co: 'parcelLab', logo: 'assets/logos/parcelab.svg', logoH: 36, logoIsPng: false,
            quote: "There is no one else on the market that offers this level of customisation with a repository.",
            name: 'Jessica Bann', role: 'Head of Legal', seed: 1,
            video: 'assets/case-studies/parcellab.mp4' },
          { co: 'Fever Tree', logo: 'assets/logos/fever-tree.svg', logoH: 36, logoIsPng: false,
            quote: "We first crash-landed with a CLM, versus Nomio, which solved our problem very neatly.",
            name: "Alex O'Connell", role: 'General Counsel', seed: 0,
            video: 'assets/case-studies/fever-tree.mp4' },
        ];
        const csPrev = () => setCsIdx(i => Math.max(0, i - 1));
        const csNext = () => setCsIdx(i => Math.min(csCases.length - 1, i + 1));
        return (
          <section style={{ paddingBottom: 192, borderTop: `1px solid ${rule}` }}>
            <div style={{ padding: `96px ${PAD}px 48px`, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <SectionLabel label="Customer stories" />
                <h2 style={{ ...serif, fontSize: 48, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: '18px 0 0' }}>In their <em>own words.</em></h2>
              </div>
            </div>
            {/* Full-viewport track */}
            <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw', overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                gap: 20,
                transition: 'transform 420ms cubic-bezier(0.4,0,0.2,1)',
                transform: `translateX(calc(50vw - 512px - ${csIdx} * (1024px + 20px)))`,
              }}>
                {csCases.map((c, i) => (
                  <div key={i} style={{
                    flexShrink: 0,
                    width: 1024,
                    border: `1px solid ${rule}`,
                    borderRadius: 16,
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: '3fr 2fr',
                    height: 440,
                    opacity: i === csIdx ? 1 : 0.45,
                    transition: 'opacity 420ms ease',
                  }}>
                    {/* Left: text */}
                    <div style={{ padding: '40px 44px 36px', display: 'flex', flexDirection: 'column' }}>
                      {c.logoIsPng ? (
                        <div style={{ width: 120, height: c.logoH, marginBottom: 36, overflow: 'hidden', flexShrink: 0, alignSelf: 'flex-start' }}>
                          <img src={c.logo} alt={c.co} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                      ) : (
                        <img src={c.logo} alt={c.co} style={{ height: c.logoH, width: 'auto', maxWidth: 160, display: 'block', marginBottom: 36, filter: 'brightness(0)', opacity: 0.85, flexShrink: 0, alignSelf: 'flex-start' }} />
                      )}
                      <p style={{ ...serif, fontSize: 30, lineHeight: 1.3, fontWeight: 380, color: ink, margin: '0 0 auto', paddingBottom: 36, letterSpacing: '-0.02em' }}>
                        &ldquo;{c.quote}&rdquo;
                      </p>
                      <div style={{ borderTop: `1px dashed ${rule}`, paddingTop: 20, marginTop: 36, display: 'flex', alignItems: 'center', gap: 14 }}>
                        <Avatar seed={c.seed} size={40} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 600, color: ink, lineHeight: 1.3 }}>{c.name}</div>
                          <div style={{ fontSize: 13, color: muted, marginTop: 2 }}>{c.role}, {c.co}</div>
                        </div>
                        <a href="#" style={{ fontSize: 13, color: accent, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>Watch →</a>
                      </div>
                    </div>
                    {/* Right: video */}
                    <div style={{ position: 'relative', overflow: 'hidden', background: ink }}>
                      <video
                        src={c.video}
                        autoPlay muted loop playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                        <div style={{ width: 60, height: 60, borderRadius: 30, background: colorDarkPink, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                          <div style={{ width: 0, height: 0, borderLeft: `20px solid ${colorLightPink}`, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', marginLeft: 5 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 32 }}>
              <button onClick={csPrev} style={{ width: 44, height: 44, borderRadius: 22, border: `1px solid ${rule}`, background: 'transparent', cursor: csIdx === 0 ? 'default' : 'pointer', opacity: csIdx === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: ink, fontFamily: 'inherit' }}>
                &#8249;
              </button>
              <button onClick={csNext} style={{ width: 44, height: 44, borderRadius: 22, border: 'none', background: csIdx === csCases.length - 1 ? rule : ink, cursor: csIdx === csCases.length - 1 ? 'default' : 'pointer', opacity: csIdx === csCases.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: paper, fontFamily: 'inherit' }}>
                &#8250;
              </button>
            </div>
          </section>
        );
      })()}

      {/* 9. CLOSING CTA */}
      <section style={{ padding: `80px ${PAD}px 192px`, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ paddingTop: 80, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
          <h2 style={{ ...serif, fontSize: 104, letterSpacing: '-0.03em', fontWeight: 340, margin: 0, lineHeight: "0.9" }}>
            Stop managing your contracts <em>manually.</em>
          </h2>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(40,39,49,.82)', margin: '0 0 24px' }}>

            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <PrimaryCTA>Book a demo →</PrimaryCTA>
              <SecondaryCTA>Talk to a lawyer</SecondaryCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: `40px ${PAD}px 48px`, borderTop: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: 40 }}>
          <div>
            <NomioWordmark height={16} color={ink} />
            <div style={{ marginTop: 16, fontSize: 13, color: muted, maxWidth: 280, lineHeight: 1.55 }}>The contract management service for lean in-house legal teams.

            </div>

          </div>
          {[{ title: 'Product', items: ['Overview', 'Repository', 'Schema', 'Answers', 'Security', 'Pricing'] },
          { title: 'Why Nomio', items: ['vs. CLM', 'vs. Spreadsheets', 'vs. DIY AI', 'Implementation guarantee'] },
          { title: 'Customers', items: ['All stories', 'Fever Tree', 'parcelLab', 'Bark'] },
          { title: 'Legal', items: ['Terms', 'Privacy', 'DPA', 'Subprocessors'] }].
          map((c) =>
          <div key={c.title}>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.8, color: faint, marginBottom: 14, fontWeight: 600 }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5 }}>
                {c.items.map((i) => <li key={i} style={{ color: 'rgba(40,39,49,.78)' }}>{i}</li>)}
              </ul>
            </div>
          )}
        </div>
        <div style={{ marginTop: 56, paddingTop: 20, borderTop: `1px solid ${hair}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12.5, color: faint }}>
          <span>© 2026 Nomio Ltd</span>
          <span style={{ ...serif, fontSize: 14 }}>
</span>
        </div>
      </footer>
    </div>);
};
Object.assign(window, { V14_4Home });