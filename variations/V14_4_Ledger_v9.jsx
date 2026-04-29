/* V14_4 — "Ledger v3" — Equals-inspired editorial. Updated copy direction:
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
  const ink = '#282731';
  const paper = '#faf9fa';
  const card = '#faf9fa';
  const accent = '#3E5C3A';
  const muted = 'rgba(40,39,49,.56)';
  const faint = 'rgba(40,39,49,.40)';
  const rule = 'rgba(40,39,49,.12)';
  const hair = 'rgba(40,39,49,.08)';

  const wrap = { width: 1280, background: paper, color: ink, fontFamily: '"Inter", sans-serif', fontSize: 15, lineHeight: 1.6 };
  const serif = { fontFamily: '"Fraunces", "Newsreader", Georgia, serif', fontWeight: 380 };
  const PAD = 80;
  const animColors = { ink, paper, accent, muted, faint, hair, rule };

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
    { src: 'assets/logos/fever-tree.svg', alt: 'Fever-Tree', h: 28 },
    { src: 'assets/logos/parcelab.svg', alt: 'parcelLab', h: 26 },
    { src: 'assets/logos/secret-escapes.svg', alt: 'Secret Escapes', h: 22 },
    { src: 'assets/logos/lendinvest.svg', alt: 'LendInvest', h: 20 },
    { src: 'assets/logos/shawbrook.svg', alt: 'Shawbrook', h: 28 },
    { src: 'assets/logos/aa.svg', alt: 'AA', h: 32 },
    { src: 'assets/logos/ms.svg', alt: 'M&S', h: 28 },
    { src: 'assets/logos/tangle-teezer.svg', alt: 'Tangle Teezer', h: 22 },
  ];
  const textLogos = ['Randstad', 'Merseyrail', 'Modaxo', 'Waterstones'];

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

      {/* 1. HERO */}
      <section style={{ padding: `112px ${PAD}px 56px`, position: 'relative' }}>
        <SectionLabel label="Contract management service" />
        <h1 style={{ ...serif, fontSize: 124, lineHeight: 0.96, margin: '28px 0 0', fontWeight: 340, maxWidth: 1120, letterSpacing: "-8px" }}>
          Stop managing your contracts <em style={{ fontWeight: 340 }}>manually.</em>
        </h1>
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'end', maxWidth: 1120 }}>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, color: 'rgba(40,39,49,.82)', maxWidth: 660, letterSpacing: "-0.5px" }}>
            Nomio is the contract repository for in-house legal teams who have <Bold>better things to do</Bold>. We ingest, structure, and maintain. You search, review, and sign off. Live in weeks, not quarters. No manual upkeep.
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
      <section style={{ padding: `0 ${PAD}px 80px` }}>
        <div style={{ borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, padding: '36px 0' }}>
          <div style={{ fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', color: faint, fontWeight: 700, marginBottom: 28 }}>
            Trusted by hundreds of lean in-house legal teams
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0' }}>
            {svgLogos.map(({ src, alt, h }) => (
              <div key={alt} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 24px' }}>
                <img src={src} alt={alt} style={{ height: h, width: 'auto', maxWidth: 130, opacity: 0.42, display: 'block' }} />
              </div>
            ))}
            {textLogos.map((name) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 24px' }}>
                <span style={{ ...serif, fontSize: 18, color: faint, fontWeight: 400, opacity: 0.72 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO ANIMATION */}
      <section style={{ padding: `0 ${PAD}px 96px` }}>
        <Ledger4HeroAnim {...animColors} />
      </section>

      {/* 3. THE PAIN, NAMED — with animations per pain */}
      <section style={{ padding: `80px ${PAD}px 128px`, borderTop: `1px solid ${rule}` }}>
        <SectionLabel label="The pain, named" />
        <h2 style={{ ...serif, fontSize: 68, lineHeight: 1, letterSpacing: '-0.025em', fontWeight: 340, margin: '24px 0 56px', maxWidth: 1080 }}>
          Contract management <em>shouldn’t feel like</em> a full-time job.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${ink}` }}>
          {[
          { t: 'Manual data entry takes forever.', anim: <PainManualAnim {...animColors} />, b: <>Hours lost entering contract details into spreadsheets.</> },
          { t: 'Manual data entry takes forever.', anim: <PainTrustAnim {...animColors} />, b: <>Hours lost entering contract details into spreadsheets.</> },
          { t: 'Manual data entry takes forever.', anim: <PainTimeAnim {...animColors} />, b: <>Hours lost entering contract details into spreadsheets.</> }].
          map((c, i) =>
          <div key={i} style={{ padding: '32px 28px 0', borderRight: i < 2 ? `1px solid ${rule}` : 'none', paddingLeft: i === 0 ? 0 : 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h3 style={{ ...serif, fontSize: 28, lineHeight: 1.15, margin: 0, fontWeight: 380, letterSpacing: '-0.01em' }}>{c.t}</h3>
              {c.anim}
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(40,39,49,.78)', letterSpacing: "-0.5px" }}>{c.b}</p>
            </div>
          )}
        </div>
      </section>

      {/* HARVEY-STYLE: What is Nomio + big product animation */}
      <section style={{ padding: `0 ${PAD}px 128px` }}>
        <h2 style={{ ...serif, lineHeight: 1.05, fontWeight: 340, margin: '0 0 64px', maxWidth: 1080, fontSize: "58px", letterSpacing: "-3.16px", width: "980px" }}>
          Nomio is the contract management service for lean in-house legal teams.{' '}
          <span style={{ color: 'rgba(40,39,49,.45)' }}>
Stop managing your contracts manually, and focus on the work that matters.</span>
        </h2>
        <NomioProductAnim {...animColors} />
      </section>

      {/* 4. IMPLEMENTATION GUARANTEE */}
      <section style={{ padding: `0 ${PAD}px 128px` }}>
        <SectionLabel label="The implementation guarantee" />
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
            <div style={{ ...serif, fontSize: 32, color: accent, lineHeight: 1, height: "32px" }}>“</div>
            <blockquote style={{ ...serif, fontSize: 38, lineHeight: 1.2, letterSpacing: '-0.012em', fontWeight: 380, margin: 0 }}>
              I expected the implementation to be a daunting task. <em>It was anything but.</em> The database was effectively just built in a couple of weeks for us.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 14, borderTop: `1px solid ${hair}` }}>
              <Avatar seed={3} size={44} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25, fontSize: 13, flex: 1 }}>
                <span style={{ color: ink, fontWeight: 600 }}>Alex O'Connell</span>
                <span style={{ color: muted, fontSize: 12.5 }}>General Counsel, Fever Tree</span>
              </div>
              <span style={{ fontSize: 13, color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>Watch →</span>
            </div>
          </figure>
        </div>
      </section>

      {/* 5. THE THREE PILLARS */}
      <section style={{ padding: `0 ${PAD}px 128px` }}>
        <SectionLabel label="The three pillars" />
        <h2 style={{ ...serif, fontSize: 60, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: '22px 0 56px', maxWidth: 920 }}>
          All your contracts, organised, accurate, and <em>searchable</em>, without lifting a finger.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${ink}` }}>
          {[{ tag: 'No more admin, ever', title: 'Managed', body: <>Every time you upload new contracts, we’ll organise them, capture key terms, flag missing documents, and add them to your contract repository.</>, quote: 'We click forward, we type in documents@nomio, and we don\'t have to do anything.', name: 'Sarah Mitchell', role: 'General Counsel, Belron', seed: 0, anim: <Ledger4ManagedAnim {...animColors} /> },
          { tag: 'No more admin, ever', title: 'Accurate', body: <>Every time you upload new contracts, we’ll organise them, capture key terms, flag missing documents, and add them to your contract repository.</>, quote: 'It has performed as expected every time. It\'s pulled back every single one reliably.', name: 'David Chen', role: 'Legal Director, Modaxo', seed: 1, anim: <Ledger4AccurateAnim {...animColors} /> },
          { tag: 'No more admin, ever', title: 'Searchable', body: <>Every time you upload new contracts, we’ll organise them, capture key terms, flag missing documents, and add them to your contract repository.</>, quote: 'If somebody asks a question on a lease, I can find it while we\'re sat in that meeting.', name: 'Priya Shah', role: 'Head of Legal, Randstad', seed: 2, anim: <Ledger4SearchableAnim {...animColors} /> }].
          map((p, i) =>
          <div key={i} style={{ padding: '28px 28px 32px', paddingLeft: i === 0 ? 0 : 28, paddingRight: i === 2 ? 0 : 28, borderRight: i < 2 ? `1px solid ${rule}` : 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', color: accent, fontWeight: 700 }}>{p.tag}</div>
              <h3 style={{ ...serif, fontSize: 40, lineHeight: 1, margin: 0, fontWeight: 340, letterSpacing: '-0.02em' }}><em>{p.title}.</em></h3>
              {p.anim}
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(40,39,49,.78)', letterSpacing: "0px" }}>{p.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: `1px solid ${hair}`, ...serif, fontSize: 18, lineHeight: 1.4, color: ink }}>
                “{p.quote}”
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 6 }}>
                <Avatar seed={p.seed} size={36} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25, fontSize: 12.5, flex: 1 }}>
                  <span style={{ color: ink, fontWeight: 600 }}>{p.name}</span>
                  <span style={{ color: muted }}>{p.role}</span>
                </div>
                <span style={{ fontSize: 13, color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>Watch →</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. HOW NOMIO WORKS — with anims */}
      <section style={{ padding: `0 ${PAD}px 128px` }}>
        <SectionLabel label="How Nomio works" />
        <h2 style={{ ...serif, fontSize: 60, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: '22px 0 56px', maxWidth: 980, width: "963px" }}>
          Put contract management on autopilot with Nomio’s <em>fully managed service.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${ink}` }}>
          {[
          { n: '01', t: 'Find and upload', anim: <HowFindUploadAnim {...animColors} />, b: <>Connect your Docusign or send a shared drive link and we’ll process an initial batch of your contracts.</> },
          { n: '02', t: 'Calibrate', anim: <HowCalibrateAnim {...animColors} />, b: <>Connect your Docusign or send a shared drive link and we’ll process an initial batch of your contracts.</> },
          { n: '03', t: 'Maintain', anim: <HowMaintainAnim {...animColors} />, b: <>Connect your Docusign or send a shared drive link and we’ll process an initial batch of your contracts.</> }].
          map((s, i) =>
          <div key={i} style={{ padding: '32px 28px 28px', paddingLeft: i === 0 ? 0 : 28, paddingRight: i === 2 ? 0 : 28, borderRight: i < 2 ? `1px solid ${rule}` : 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ ...serif, fontSize: 48, color: accent, lineHeight: 1, fontWeight: 340 }}>{s.n}</div>
              <h3 style={{ ...serif, fontSize: 26, lineHeight: 1.15, margin: 0, fontWeight: 380 }}>{s.t}.</h3>
              {s.anim}
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(40,39,49,.78)', letterSpacing: "-0.5px" }}>{s.b}</p>
            </div>
          )}
        </div>
        <p style={{ ...serif, fontSize: 17, color: muted, marginTop: 24 }}>
          Live in around two weeks. Less than an hour of your team’s time.
        </p>
      </section>

      {/* 7. WHY NOMIO SUCCEEDS — six tiles, "Run by experts" */}
      <section style={{ padding: `0 ${PAD}px 128px` }}>
        <SectionLabel label="Why Nomio succeeds" />
        <h2 style={{ ...serif, fontSize: 60, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: '22px 0 48px', maxWidth: 920 }}>
          Where <em>other systems fail</em>, and what we do instead.
        </h2>
        <div style={{ borderTop: `1px solid ${ink}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
          { head: 'Where CLMs fail', body: <>Implementation burden. Rollouts that never finish. <Bold>Nomio is live in weeks</Bold>, no project plan required.</> },
          { head: 'Where spreadsheets fail', body: <>Single point of failure. Goes stale. No audit trail. Nomio updates itself.</> },
          { head: 'Where DIY contract folders fail', body: <>Search is shallow. No structure. No maintenance. Nomio cites the clause.</> },
          { head: 'Built to your schema', body: <>Every contract mapped to your taxonomy, not ours. One working session, then it stays true.</> },
          { head: 'Accuracy that’s checked', body: <>Counterparties, dates, values, renewal terms, validated against the source, row by row.</> },
          { head: 'Run by experts', body: <>You talk to the people who know contracts, not an implementation partner three tiers down.</> }].
          map((s, i) =>
          <div key={i} style={{
            padding: '28px 28px 32px', paddingLeft: i % 3 === 0 ? 0 : 28, paddingRight: i % 3 === 2 ? 0 : 28,
            borderRight: i % 3 < 2 ? `1px solid ${rule}` : 'none',
            borderBottom: i < 3 ? `1px solid ${rule}` : 'none'
          }}>
              <div style={{ ...serif, fontSize: 20, color: faint, fontWeight: 400, marginBottom: 14 }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ ...serif, fontSize: 24, lineHeight: 1.2, margin: '0 0 12px', fontWeight: 380 }}>{s.head}.</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(40,39,49,.78)' }}>{s.body}</p>
            </div>
          )}
        </div>
      </section>

      {/* 8. CUSTOMER STORIES — with thumbnails */}
      <section style={{ padding: `0 ${PAD}px 128px` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <SectionLabel label="Customer stories" />
            <h2 style={{ ...serif, fontSize: 48, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 340, margin: '18px 0 0' }}>In their <em>own words.</em></h2>
          </div>
          <div style={{ display: 'flex', gap: 12, color: muted, fontSize: 13 }}><span>← Prev</span><span>Next →</span></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
          { co: 'Fever Tree', role: 'General Counsel', name: 'Alex O\'Connell', quote: 'I expected the implementation to be daunting. It was anything but.', seed: 0 },
          { co: 'parcelLab', role: 'Head of Legal', name: 'Jessica Bann', quote: 'There is no one else on the market that offers this level of customisation with a repository.', seed: 1 },
          { co: 'Bark', role: 'General Counsel', name: 'James Russell-Jones', quote: 'When we sign a contract, we upload it to Nomio and that\'s it, nothing else to do.', seed: 2 }].
          map((c, i) =>
          <div key={i} style={{ background: card, border: `1px solid ${hair}`, borderRadius: 10, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 18, minHeight: 280 }}>
              <div style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', color: accent, fontWeight: 700 }}>{c.co}</div>
              <p style={{ ...serif, fontSize: 26, lineHeight: 1.3, margin: 0, fontWeight: 380 }}>“{c.quote}”</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 14, paddingTop: 14, borderTop: `1px solid ${hair}` }}>
                <Avatar seed={c.seed} size={44} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25, fontSize: 13, flex: 1 }}>
                  <span style={{ color: ink, fontWeight: 600 }}>{c.name}</span>
                  <span style={{ color: muted, fontSize: 12.5 }}>{c.role}, {c.co}</span>
                </div>
                <span style={{ fontSize: 13, color: accent, fontWeight: 500, whiteSpace: 'nowrap' }}>Watch →</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. CLOSING CTA */}
      <section style={{ padding: `40px ${PAD}px 128px`, borderTop: `1px solid ${rule}` }}>
        <div style={{ paddingTop: 72, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end' }}>
          <h2 style={{ ...serif, fontSize: 104, letterSpacing: '-0.03em', fontWeight: 340, margin: 0, lineHeight: "0.9" }}>
            Stop managing your contracts <em>manually.</em>
          </h2>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(40,39,49,.82)', margin: '0 0 24px' }}>

            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <PrimaryCTA>Book a demo →</PrimaryCTA>
              <SecondaryCTA>Watch demo (55 secs)</SecondaryCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: `40px ${PAD}px 48px`, borderTop: `1px solid ${ink}` }}>
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