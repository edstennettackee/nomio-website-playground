/* Animations for Ledger v3 — pure SVG/CSS, looping, restrained.
   Adds 3 pain animations and 3 how-it-works animations on top of the v2 set. */

const Ledger4AnimStyles = () => (
  <style>{`
    @keyframes l4-flow      { 0% { transform:translateX(-40px); opacity:0 } 12%,82% { opacity:1 } 100% { transform:translateX(360px); opacity:0 } }
    @keyframes l4-rowfill   { 0%,8% { opacity:0; transform:translateY(6px) } 24%,100% { opacity:1; transform:translateY(0) } }
    @keyframes l4-blink     { 0%,49% { opacity:1 } 50%,100% { opacity:0 } }
    @keyframes l4-typewrite { 0%,5% { width:0 } 65%,100% { width:var(--w, 220px) } }
    @keyframes l4-checkin   { 0%,40% { stroke-dashoffset:24; opacity:0 } 60%,100% { stroke-dashoffset:0; opacity:1 } }
    @keyframes l4-highlight { 0%,30% { width:0 } 60%,100% { width:100% } }
    @keyframes l4-emit      { 0% { transform:translateX(0); opacity:0 } 10% { opacity:1 } 90% { opacity:1 } 100% { transform:translateX(180px); opacity:0 } }
    @keyframes l4-cite      { 0%,55% { opacity:0; transform:translateX(-8px) } 75%,100% { opacity:1; transform:translateX(0) } }
    /* Pain anims */
    @keyframes l4-typeloop  { 0% { transform:translateX(0) } 25%,30% { transform:translateX(-2px) } 55%,60% { transform:translateX(2px) } 100% { transform:translateX(0) } }
    @keyframes l4-spin      { 0% { transform:rotate(0) } 100% { transform:rotate(360deg) } }
    @keyframes l4-stale     { 0%,40% { opacity:1 } 60%,100% { opacity:.25 } }
    @keyframes l4-warn      { 0%,40% { opacity:0 } 60%,100% { opacity:1 } }
    @keyframes l4-clock     { 0% { transform:rotate(0) } 100% { transform:rotate(360deg) } }
    @keyframes l4-page      { 0%,15% { transform:translateY(0) } 35%,55% { transform:translateY(-12px) } 75%,100% { transform:translateY(-24px) } }
    /* How it works anims */
    @keyframes l4-pull      { 0% { transform:translate(-30px,0); opacity:0 } 15% { opacity:1 } 85% { opacity:1 } 100% { transform:translate(60px,0); opacity:0 } }
    @keyframes l4-tagdrop   { 0%,30% { opacity:0; transform:translateY(-8px) } 50%,100% { opacity:1; transform:translateY(0) } }
    @keyframes l4-pulse2    { 0%,100% { transform:scale(1); opacity:.7 } 50% { transform:scale(1.4); opacity:0 } }
  `}</style>
);

/* ---------- HERO (re-used name) ---------- */
const Ledger4HeroAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => {
  const docs = [0,1,2,3,4];
  return (
    <div style={{ position:'relative', width:'100%', height:340, background:paper, border:`1px solid ${hair}`, borderRadius:12, overflow:'hidden' }}>
      <Ledger4AnimStyles/>
      <div style={{ position:'absolute', top:14, left:18, fontSize:10.5, letterSpacing:1.6, textTransform:'uppercase', color:faint, fontWeight:600 }}>Sources</div>
      <div style={{ position:'absolute', top:14, left:'50%', transform:'translateX(-50%)', fontSize:10.5, letterSpacing:1.6, textTransform:'uppercase', color:accent, fontWeight:700 }}>Nomio</div>
      <div style={{ position:'absolute', top:14, right:18, fontSize:10.5, letterSpacing:1.6, textTransform:'uppercase', color:faint, fontWeight:600 }}>Repository</div>
      <div style={{ position:'absolute', top:50, left:'50%', transform:'translateX(-50%)', width:2, height:240, background:`linear-gradient(180deg, ${accent}, ${accent} 70%, transparent)` }}/>
      <div style={{ position:'absolute', top:160, left:'50%', transform:'translate(-50%,-50%)', width:64, height:64, borderRadius:32, background:paper, border:`1.5px solid ${accent}`, display:'flex', alignItems:'center', justifyContent:'center', zIndex:3 }}>
        <NomioMark size={28} color={accent}/>
      </div>
      {docs.map(i => (
        <div key={`d${i}`} style={{
          position:'absolute', left:30, top: 80 + i*36,
          width:42, height:54, background:paper, border:`1px solid ${rule}`, borderRadius:3,
          animation:`l4-flow 5.4s linear ${i*0.55}s infinite`,
          boxShadow:'0 1px 2px rgba(0,0,0,.06)',
        }}>
          {[6,11,16,21,26,31].map((y,k)=><div key={k} style={{ position:'absolute', top:y, left:6, right:6+(k*2)%14, height:2, background:hair }}/>)}
        </div>
      ))}
      <div style={{ position:'absolute', right:18, top:60, width:300, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
        <div style={{ padding:'8px 12px', fontSize:9.5, letterSpacing:1.2, textTransform:'uppercase', color:muted, fontWeight:600, borderBottom:`1px solid ${hair}` }}>Agreement, Counterparty, Term</div>
        {[
          ['MSA, Helping Hand','Customer','3 yr'],
          ['DPA, Amplify','Distrib.','3 yr'],
          ['NDA, Rokenore','Partner','2 yr'],
          ['Reseller, Keto','Reseller','18m'],
          ['SOW, Lightning','Customer','1 yr'],
          ['MSA, Northmoor','Customer','16m'],
        ].map((r,i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1.4fr .8fr .5fr', padding:'7px 12px', fontSize:11, color:ink, borderBottom: i<5?`1px solid ${hair}`:'none', animation:`l4-rowfill 5.4s ease-out ${0.3 + i*0.55}s infinite` }}>
            <span>{r[0]}</span><span style={{ color:muted, fontSize:10.5 }}>{r[1]}</span><span style={{ color:muted, fontSize:10.5 }}>{r[2]}</span>
          </div>
        ))}
      </div>
      <div style={{ position:'absolute', bottom:14, left:0, right:0, textAlign:'center', fontSize:11.5, color:muted, fontFamily:'"Inter", sans-serif', fontWeight:600 }}>Drives, inboxes, DocuSign in. A structured repository out.</div>
    </div>
  );
};

/* ---------- PAIN ANIMATIONS ---------- */
const PainManualAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:140, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    {/* Doc on left */}
    <div style={{ position:'absolute', left:14, top:14, bottom:14, width:60, background:paper, border:`1px solid ${rule}`, borderRadius:3 }}>
      {[0,1,2,3,4,5].map(i=><div key={i} style={{ position:'absolute', top:8+i*14, left:6, right:6+(i*3)%18, height:2, background:hair }}/>)}
    </div>
    {/* Arrow with hand */}
    <div style={{ position:'absolute', left:84, top:'50%', transform:'translateY(-50%)', fontSize:18 }}>↦</div>
    {/* Spreadsheet */}
    <div style={{ position:'absolute', right:14, top:14, bottom:14, left:120, background:paper, border:`1px solid ${rule}`, borderRadius:3, display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gridTemplateRows:'repeat(4, 1fr)' }}>
      {Array.from({length:16}).map((_,i)=>{
        const filled = i < 7;
        return (
          <div key={i} style={{ borderRight: (i%4)<3?`1px solid ${hair}`:'none', borderBottom: i<12?`1px solid ${hair}`:'none', padding:'4px 6px', fontSize:9, color:i===0?faint:ink, fontFamily:'"Inter", sans-serif', position:'relative' }}>
            {filled ? (
              <span style={{ display:'inline-block', width:'70%', height:2, background:i===6?ink:hair, animation: i===6?'l4-typeloop 1.6s ease-in-out infinite':'none' }}/>
            ) : null}
            {i===6 && <span style={{ position:'absolute', right:2, top:3, width:1, height:8, background:ink, animation:'l4-blink 0.7s steps(2) infinite' }}/>}
          </div>
        );
      })}
    </div>
  </div>
);

const PainTrustAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:140, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    {/* Spreadsheet rows; one row goes stale + warning icon appears */}
    <div style={{ position:'absolute', inset:14, background:paper, border:`1px solid ${rule}`, borderRadius:3 }}>
      {[0,1,2,3,4].map(i=>(
        <div key={i} style={{
          display:'grid', gridTemplateColumns:'1.6fr 1fr 0.8fr 24px',
          padding:'7px 10px', borderBottom: i<4?`1px solid ${hair}`:'none', fontSize:10, color:ink, alignItems:'center',
          opacity: i===2 ? undefined : 1,
          animation: i===2 ? 'l4-stale 3.2s ease-in-out infinite' : 'none',
        }}>
          <span>Contract {String.fromCharCode(65+i)}</span>
          <span style={{ color:muted }}>Counterparty {i+1}</span>
          <span style={{ color:muted }}>{['£500k','£2.5m','£?','£1.2m','£800k'][i]}</span>
          <span style={{ position:'relative', width:14, height:14 }}>
            {i===2 && (
              <span style={{ position:'absolute', inset:0, color:'#C97A5A', fontSize:11, fontWeight:700, animation:'l4-warn 3.2s ease-in-out infinite', display:'flex', alignItems:'center', justifyContent:'center' }}>!</span>
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const PainTimeAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:140, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    {/* Question */}
    <div style={{ position:'absolute', top:18, left:18, right:18, fontSize:13, color:ink, fontFamily:'"Fraunces", serif', fontStyle:'italic' }}>
      "When does this contract expire?"
    </div>
    {/* Stack of pages flipping */}
    <div style={{ position:'absolute', left:24, bottom:18, width:50, height:62 }}>
      {[0,1,2].map(i=>(
        <div key={i} style={{
          position:'absolute', inset:0, background:paper, border:`1px solid ${rule}`, borderRadius:2,
          transform:`translate(${i*3}px, ${i*2}px)`,
          animation: i===0 ? 'l4-page 2.4s ease-in-out infinite' : 'none',
        }}>
          {[0,1,2,3].map(k=><div key={k} style={{ position:'absolute', top:6+k*10, left:5, right:5+(k*2)%10, height:1.5, background:hair }}/>)}
        </div>
      ))}
    </div>
    {/* Clock spinning */}
    <div style={{ position:'absolute', right:32, bottom:30, width:48, height:48, borderRadius:24, border:`1.5px solid ${ink}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', width:1.5, height:14, background:ink, transformOrigin:'50% 0%', transform:'translate(-50%, 0)', animation:'l4-clock 2s linear infinite' }}/>
      <div style={{ position:'absolute', top:'50%', left:'50%', width:1, height:18, background:muted, transformOrigin:'50% 0%', transform:'translate(-50%, 0)', animation:'l4-clock 24s linear infinite' }}/>
    </div>
  </div>
);

/* ---------- PILLAR ANIMATIONS ---------- */
const Ledger4ManagedAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:160, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    <div style={{ position:'absolute', left:18, top:'50%', transform:'translateY(-50%)', width:64, height:48, border:`1.5px solid ${ink}`, borderRadius:4, background:paper }}>
      <div style={{ position:'absolute', top:6, left:0, right:0, textAlign:'center', fontSize:8.5, color:muted, letterSpacing:1, textTransform:'uppercase', fontWeight:700 }}>Inbox</div>
    </div>
    {[0,1,2].map(i => (
      <div key={i} style={{ position:'absolute', left:88, top: 56 + (i-1)*4, width:24, height:30, background:paper, border:`1px solid ${rule}`, borderRadius:2, animation:`l4-emit 3.6s ease-in-out ${i*1.2}s infinite` }}>
        {[4,8,12,16].map((y,k)=><div key={k} style={{ position:'absolute', top:y, left:3, right:3+k, height:1.5, background:hair }}/>)}
      </div>
    ))}
    <div style={{ position:'absolute', right:24, top:'50%', transform:'translateY(-50%)' }}>
      {[0,1,2,3,4].map(i => (
        <div key={i} style={{ width:80, height:8, marginBottom:3, background: i===0 ? accent : `color-mix(in oklab, ${accent} ${30 - i*4}%, ${paper})`, borderRadius:1.5 }}/>
      ))}
      <div style={{ marginTop:6, fontSize:9, color:accent, letterSpacing:1, textTransform:'uppercase', fontWeight:700 }}>Filed</div>
    </div>
    <div style={{ position:'absolute', bottom:8, left:0, right:0, textAlign:'center', fontSize:10.5, color:muted, fontWeight:600 }}>You forward. Nomio files.</div>
  </div>
);

const Ledger4AccurateAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:160, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    <div style={{ position:'absolute', left:18, top:18, bottom:18, width:90, background:paper, border:`1px solid ${rule}`, borderRadius:3 }}>
      {[0,1,2,3,4,5,6].map(i=>(<div key={i} style={{ position:'absolute', top: 12 + i*12, left:8, right: 8 + (i*7)%18, height:2, background:hair }}/>))}
      <div style={{ position:'absolute', top:48, left:8, height:8, background:`color-mix(in oklab, ${accent} 26%, ${paper})`, animation:'l4-highlight 3.2s ease-in-out infinite', borderRadius:1 }}/>
      <div style={{ position:'absolute', bottom:6, left:8, fontSize:7.5, color:faint, letterSpacing:.8, textTransform:'uppercase', fontWeight:700 }}>Source</div>
    </div>
    <div style={{ position:'absolute', left:118, top:'50%', transform:'translateY(-50%)', width:30, height:1, background:rule }}/>
    <div style={{ position:'absolute', right:18, top:'50%', transform:'translateY(-50%)', width:160, background:paper, border:`1px solid ${hair}`, borderRadius:6, padding:'10px 12px' }}>
      <div style={{ fontSize:9, color:faint, letterSpacing:1, textTransform:'uppercase', fontWeight:700 }}>Liability cap</div>
      <div style={{ marginTop:6, display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ overflow:'hidden', whiteSpace:'nowrap', fontFamily:'"Fraunces", serif', fontSize:18, color:ink, animation:'l4-typewrite 3.2s steps(8) infinite', '--w':'92px' }}>£2,500,000</div>
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" stroke={accent} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="24" style={{ animation:'l4-checkin 3.2s ease-out infinite' }}/></svg>
      </div>
      <div style={{ marginTop:8, fontSize:9.5, color:accent, fontWeight:600 }}>Validated, clause 11.2</div>
    </div>
    <div style={{ position:'absolute', bottom:6, left:0, right:0, textAlign:'center', fontSize:10.5, color:muted, fontWeight:600 }}>Every field, checked against the source.</div>
  </div>
);

const Ledger4SearchableAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:160, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    <div style={{ position:'absolute', top:16, left:18, right:18, height:32, background:paper, border:`1px solid ${rule}`, borderRadius:6, display:'flex', alignItems:'center', padding:'0 12px', gap:8 }}>
      <svg width="11" height="11" viewBox="0 0 11 11"><circle cx="4.5" cy="4.5" r="3.5" stroke={muted} strokeWidth="1.4" fill="none"/><path d="M7 7 L10 10" stroke={muted} strokeWidth="1.4" strokeLinecap="round"/></svg>
      <div style={{ position:'relative', overflow:'hidden', whiteSpace:'nowrap', fontSize:13, color:ink, fontFamily:'"Fraunces", serif', animation:'l4-typewrite 4s steps(36) infinite', '--w':'320px' }}>
        Which agreements auto-renew next quarter?
      </div>
      <div style={{ width:1.5, height:14, background:ink, marginLeft:-2, animation:'l4-blink 0.7s steps(2) infinite' }}/>
    </div>
    <div style={{ position:'absolute', left:18, right:18, top:64, background:paper, border:`1px solid ${hair}`, borderRadius:6, padding:'10px 12px', animation:'l4-cite 4s ease-out infinite' }}>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <span style={{ width:6, height:6, borderRadius:3, background:accent }}/>
        <span style={{ fontSize:11.5, color:ink, fontWeight:500 }}>MSA, Helping Hand Ltd</span>
        <span style={{ marginLeft:'auto', fontSize:10, color:muted }}>auto-renews 14 Mar 2026</span>
      </div>
      <div style={{ marginTop:8, paddingLeft:12, borderLeft:`2px solid ${accent}`, fontSize:11, color:muted, fontFamily:'"Fraunces", serif', lineHeight:1.4 }}>
        "...this Agreement shall automatically renew for successive twelve (12) month terms..."
      </div>
      <div style={{ marginTop:4, fontSize:9.5, color:accent, fontWeight:600 }}>Clause 14.1, cited</div>
    </div>
    <div style={{ position:'absolute', bottom:6, left:0, right:0, textAlign:'center', fontSize:10.5, color:muted, fontWeight:600 }}>Plain-English answers, with the clause attached.</div>
  </div>
);

/* ---------- HOW IT WORKS ANIMATIONS ---------- */
const HowFindUploadAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:130, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    {/* Sources stack on left */}
    <div style={{ position:'absolute', left:14, top:14, display:'flex', flexDirection:'column', gap:4 }}>
      {['SharePoint','Drive','Inbox','DocuSign'].map((s,i)=>(
        <div key={i} style={{ fontSize:9.5, padding:'4px 8px', border:`1px solid ${rule}`, borderRadius:3, color:ink, fontWeight:600, background:paper }}>{s}</div>
      ))}
    </div>
    {/* Files moving across */}
    {[0,1,2,3].map(i=>(
      <div key={i} style={{ position:'absolute', left:78, top: 22 + i*22, width:18, height:22, background:paper, border:`1px solid ${rule}`, borderRadius:2, animation:`l4-pull 3s ease-in-out ${i*0.4}s infinite` }}>
        <div style={{ position:'absolute', top:3, left:2, right:2, height:1.5, background:hair }}/>
        <div style={{ position:'absolute', top:6, left:2, right:5, height:1.5, background:hair }}/>
        <div style={{ position:'absolute', top:9, left:2, right:3, height:1.5, background:hair }}/>
      </div>
    ))}
    {/* Nomio target on right */}
    <div style={{ position:'absolute', right:18, top:'50%', transform:'translateY(-50%)', width:56, height:56, borderRadius:28, border:`1.5px solid ${accent}`, background:paper, display:'flex', alignItems:'center', justifyContent:'center', position:'absolute' }}>
      <NomioMark size={22} color={accent}/>
    </div>
  </div>
);

const HowCalibrateAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:130, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    {/* Doc on left */}
    <div style={{ position:'absolute', left:14, top:14, bottom:14, width:60, background:paper, border:`1px solid ${rule}`, borderRadius:3 }}>
      {[0,1,2,3,4,5].map(i=><div key={i} style={{ position:'absolute', top:8+i*12, left:6, right:6+(i*3)%14, height:2, background:hair }}/>)}
    </div>
    {/* Tags dropping into schema slots */}
    <div style={{ position:'absolute', right:14, top:14, bottom:14, left:90, background:paper, border:`1px solid ${rule}`, borderRadius:3, padding:'10px 12px', display:'flex', flexDirection:'column', gap:8 }}>
      {[
        ['Counterparty','Helping Hand Ltd', 0],
        ['Term','3 years', 0.6],
        ['Renewal','Auto', 1.2],
        ['Liability','£2.5m', 1.8],
      ].map((r,i)=>(
        <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'center', gap:10, fontSize:10.5 }}>
          <span style={{ color:muted, letterSpacing:.4, textTransform:'uppercase', fontSize:9, fontWeight:700 }}>{r[0]}</span>
          <span style={{ color:ink, fontWeight:500, animation:`l4-tagdrop 3.6s ease-out ${r[2]}s infinite` }}>
            <span style={{ display:'inline-block', padding:'2px 8px', background:`color-mix(in oklab, ${accent} 15%, ${paper})`, color:accent, borderRadius:3, fontSize:10 }}>{r[1]}</span>
          </span>
        </div>
      ))}
    </div>
  </div>
);

const HowMaintainAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => (
  <div style={{ position:'relative', width:'100%', height:130, background:paper, border:`1px solid ${hair}`, borderRadius:8, overflow:'hidden' }}>
    <Ledger4AnimStyles/>
    {/* Always-on dot */}
    <div style={{ position:'absolute', top:18, left:18, display:'flex', alignItems:'center', gap:8, fontSize:10, color:accent, fontWeight:700, letterSpacing:1, textTransform:'uppercase' }}>
      <span style={{ position:'relative', width:8, height:8 }}>
        <span style={{ position:'absolute', inset:0, background:accent, borderRadius:4 }}/>
        <span style={{ position:'absolute', inset:0, background:accent, borderRadius:4, animation:'l4-pulse2 1.6s ease-out infinite' }}/>
      </span>
      Live sync
    </div>
    {/* Repository rows updating */}
    <div style={{ position:'absolute', top:42, left:18, right:18, bottom:18, background:paper, border:`1px solid ${hair}`, borderRadius:4 }}>
      {[0,1,2,3].map(i=>(
        <div key={i} style={{ display:'grid', gridTemplateColumns:'1.4fr 0.8fr 0.6fr', padding:'6px 10px', borderBottom:i<3?`1px solid ${hair}`:'none', fontSize:10, color:ink, alignItems:'center' }}>
          <span>Agreement {i+1}</span>
          <span style={{ color:muted, fontSize:9.5 }}>Customer</span>
          <span style={{ color: i===1 ? accent : muted, fontSize:9.5, fontWeight: i===1?700:400, animation: i===1 ? 'l4-rowfill 2.8s ease-out infinite' : 'none' }}>
            {i===1 ? 'Updated' : 'Synced'}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ---------- BIG PRODUCT ANIMATION (Harvey-style "what is Nomio") ----------
   Shows the Nomio repository UI: header, search, agreements table.
   Then transitions to a single-agreement detail view with clause highlights.
   Two-state crossfade loop. */
const NomioProductAnim = ({ ink, paper, accent, muted, faint, hair, rule }) => {
  const [view, setView] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setView(v => (v+1) % 2), 5000);
    return () => clearInterval(t);
  }, []);
  const chrome = '#1F1E1A';
  const surface = '#faf9fa';
  const tableStripe = 'rgba(0,0,0,.02)';
  const yellow = '#F4D35E';

  return (
    <div style={{ position:'relative', width:'100%', aspectRatio:'16/9', background:paper, borderRadius:6, overflow:'hidden', border:`1px solid ${rule}` }}>
      <style>{`
        @keyframes l4-fadein { 0% { opacity:0 } 100% { opacity:1 } }
        @keyframes l4-clausepulse { 0%,100% { opacity:.85 } 50% { opacity:1 } }
      `}</style>

      {/* Inner window — sits on chrome with margin like Harvey */}
      <div style={{ position:'absolute', inset:'48px 64px 0', background:'rgb(250, 247, 240)', borderRadius:'4px 4px 0 0', overflow:'hidden', border:`1px solid rgba(0,0,0,.1)`, borderBottom:'none' }}>

        {/* TOP BAR */}
        <div style={{ height:48, borderBottom:`1px solid ${hair}`, display:'flex', alignItems:'center', padding:'0 24px', justifyContent:'space-between', background:surface }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ width:14, height:14, borderRadius:7, background:ink, opacity:.85 }}/>
            <span style={{ fontSize:13, color:ink, fontWeight:500 }}>Infinity Cubed</span>
            <span style={{ fontSize:11, color:muted }}>▾</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:18, color:muted, fontSize:12 }}>
            <span>↑</span>
            <span>≡</span>
          </div>
        </div>

        {/* VIEW 0 — TABLE */}
        <div key={`v0-${view}`} style={{ position:'absolute', inset:'48px 0 0', display: view===0 ? 'block' : 'none', animation:'l4-fadein 0.5s ease-out' }}>
          {/* Search */}
          <div style={{ padding:'24px 64px 16px', display:'flex', flexDirection:'column', alignItems:'center' }}>
            <div style={{ width:'min(640px, 70%)', display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderBottom:`1px solid ${rule}`, fontSize:14, color:ink }}>
              <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="6" cy="6" r="4.5" stroke={muted} strokeWidth="1.4" fill="none"/><path d="M9.5 9.5 L13 13" stroke={muted} strokeWidth="1.4" strokeLinecap="round"/></svg>
              <span>software</span>
            </div>
            <div style={{ marginTop:10, fontSize:11.5, color:muted, display:'flex', gap:14 }}>
              <span>Searching:</span>
              <span style={{ borderBottom:`1.5px solid ${ink}`, color:ink, paddingBottom:1 }}>Agreements</span>
              <span>Timeline</span>
              <span>Clauses</span>
            </div>
          </div>

          {/* Filter pill */}
          <div style={{ padding:'8px 32px', display:'flex', justifyContent:'flex-end' }}>
            <span style={{ background:yellow, color:ink, fontSize:11, fontWeight:600, padding:'4px 10px', borderRadius:3 }}>▾ Viewing 21 of 42 agreements ▾</span>
          </div>

          {/* Table */}
          <div style={{ padding:'0 32px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'2.6fr 0.6fr 1fr 1fr 0.7fr 1.1fr 1fr 1fr 1fr', padding:'10px 8px', borderTop:`1px solid ${hair}`, borderBottom:`1px solid ${hair}`, fontSize:10.5, color:muted, fontWeight:500, gap:8 }}>
              {['Title','ID','Active Date','Initial Term','Auto-Renew','Renewal Notice Period','Labels','Primary Party','Counterparty'].map(h => <span key={h}>{h}</span>)}
            </div>
            {[
              ['Apex - Cloud Indirect Tax Services Offering Terms','IC-25','15 December 2022','No Value','Yes','No Value','Software','Infinity Limited','Apex, Inc'],
              ['Apex - Cloud Indirect Tax Services Order','IC-26','7 June 2023','3 years','Yes','No Value','Software','Infinity Limited','Apex, Inc'],
              ['Apex - Cloud Indirect Tax Services Order','IC-20','15 December 2022','3 years and 1 month','Yes','No Value','Software','Infinity Limited','Apex, Inc'],
              ['CloudPulse Innovations - SOW (iSearch, Merch and Insights)','IC-30','26 June 2020','Yes','45 days','Commercial Software','Infinity Limited','CloudPulse Innovations'],
              ['Fame - Master Services Agreement','IC-64','1 September 2023','6 months','Yes','30 days','Marketing  Software','Infinity Squared Limited','Fame Limited'],
              ['Panda - Master Services Agreement','IC-49','12 August 2020','1 year','Yes','45 days','Software','Infinity Squared Limited','Panda Inc'],
              ['Pothos - Master Services Agreement','IC-05','16 June 2023','3 years','Yes','90 days','Recruitment  Software','Infinity Limited','Pothos Limited'],
              ['Pothos - Order Form (Analytics and Reporting)','IC-14','1 August 2023','6 months','Yes','90 days','Recruitment  Software','Infinity Limited','Pothos, Inc'],
              ['Pothos - Order Form (Data Management)','IC-16','31 October 2023','18 months','Yes','90 days','Recruitment  Software','Infinity Limited','Pothos, Inc'],
              ['Pothos - Order Form (Employee Voice)','IC-42','29 November 2023','24 months','Yes','90 days','Recruitment  Software','Infinity Limited','Pothos, Inc'],
              ['Pothos - Order Form (Payroll Services)','IC-15','1 January 2024','24 months','Yes','90 days','Recruitment  Software','Infinity Limited','Pothos, Inc'],
            ].map((r,i)=>(
              <div key={i} style={{
                display:'grid', gridTemplateColumns:'2.6fr 0.6fr 1fr 1fr 0.7fr 1.1fr 1fr 1fr 1fr',
                padding:'10px 8px', borderBottom:`1px solid ${hair}`, fontSize:11, color:ink, gap:8,
                background: i%2===0 ? 'transparent' : tableStripe, alignItems:'center',
              }}>
                <span style={{ overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{r[0]}</span>
                <span style={{ color:muted }}>{r[1]}</span>
                <span style={{ color:muted }}>{r[2]}</span>
                <span style={{ color: r[3]==='No Value'?faint:muted, fontStyle: r[3]==='No Value'?'italic':'normal' }}>{r[3]}</span>
                <span style={{ color:muted }}>{r[4]}</span>
                <span style={{ color: r[5]==='No Value'?faint:muted, fontStyle: r[5]==='No Value'?'italic':'normal' }}>{r[5]}</span>
                <span style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
                  {r[6].split(/\s{2,}/).map((tag,k)=>(
                    <span key={k} style={{ background:'#faf9fa', color:ink, padding:'2px 7px', borderRadius:3, fontSize:10 }}>{tag}</span>
                  ))}
                </span>
                <span style={{ color:muted }}>{r[7]}</span>
                <span style={{ color:muted }}>{r[8]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VIEW 1 — DETAIL */}
        <div key={`v1-${view}`} style={{ position:'absolute', inset:'48px 0 0', display: view===1 ? 'grid' : 'none', gridTemplateColumns:'320px 1fr', animation:'l4-fadein 0.5s ease-out' }}>
          {/* Left rail */}
          <div style={{ borderRight:`1px solid ${hair}`, padding:'18px 20px', overflow:'hidden' }}>
            <div style={{ fontSize:10.5, color:muted, marginBottom:6 }}>IC-64</div>
            <h4 style={{ margin:'0 0 10px', fontSize:18, fontWeight:600, color:ink, lineHeight:1.15, fontFamily:'"Inter", sans-serif' }}>Fame, Master Services Agreement</h4>
            <div style={{ display:'flex', gap:6, marginBottom:14 }}>
              <span style={{ background:'#faf9fa', padding:'2px 8px', borderRadius:3, fontSize:10, color:ink }}>Marketing</span>
              <span style={{ background:'#faf9fa', padding:'2px 8px', borderRadius:3, fontSize:10, color:ink }}>Software</span>
            </div>
            <div style={{ display:'flex', gap:4, marginBottom:18 }}>
              <span style={{ border:`1px solid ${rule}`, padding:'3px 10px', borderRadius:3, fontSize:10.5 }}>PDF</span>
              <span style={{ background:ink, color:paper, padding:'3px 10px', borderRadius:3, fontSize:10.5 }}>Smart</span>
            </div>
            {[
              ['Clause Search', null],
              ['Documents', 'Copy of Basic Draft 2 (1)'],
              ['Issues', null],
              ['Notes', '+'],
              ['Data Points', '+'],
            ].map((s,i)=>(
              <div key={i} style={{ borderTop:`1px solid ${hair}`, padding:'10px 0', fontSize:11.5, color:ink, fontWeight:500, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span>▾ {s[0]}</span>
                {s[1] && <span style={{ color:muted, fontWeight:400, fontSize:10.5 }}>{s[1]}</span>}
              </div>
            ))}
            <div style={{ borderTop:`1px solid ${hair}`, marginTop:6, paddingTop:12 }}>
              {[
                ['Primary Party','Infinity Squared Limited'],
                ['Counterparty','Fame Limited'],
                ['Active Date','01 Sep 2023'],
                ['Initial Term','6 months'],
                ['Auto-Renew','Yes'],
                ['Renewal Term','6 months'],
                ['Renewal Date','01 Sep 2026'],
                ['Renewal Notice Period','30 days'],
                ['Renewal Notice Deadline','01 Aug 2026'],
              ].map((r,i)=>(
                <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr auto', padding:'5px 0', fontSize:10.5, borderBottom: i<8?`1px dotted ${hair}`:'none' }}>
                  <span style={{ color:muted }}>{r[0]}</span>
                  <span style={{ color:ink, fontWeight:500 }}>{r[1]}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right doc */}
          <div style={{ padding:'18px 32px 0', overflow:'hidden', position:'relative', background:'#FFFEFB' }}>
            <div style={{ fontSize:10.5, color:muted, marginBottom:8, fontFamily:'"Fraunces", serif' }}>THE PARTIES AGREE as follows:</div>
            <div style={{ fontSize:11.5, color:ink, fontFamily:'"Fraunces", serif', lineHeight:1.6 }}>
              <p style={{ margin:'0 0 10px', fontWeight:600 }}>1 APPLICATION OF THIS AGREEMENT</p>
              <p style={{ margin:'0 0 8px' }}><span style={{ color:muted, marginRight:8 }}>1.1</span>This agreement applies to the licencing of marketing software, the provision of Products and the supply of Services to the extent set out in the Order Form.</p>
              <p style={{ margin:'0 0 14px' }}><span style={{ color:muted, marginRight:8 }}>1.2</span>Any subsequent Order Forms shall be subject to the same terms and conditions of this Agreement.</p>
              <p style={{ margin:'0 0 10px', fontWeight:600 }}>2 COMMENCEMENT AND DURATION</p>
              <p style={{ margin:'0 0 8px' }}>
                <span style={{ background:'#F0D5E8', padding:'1px 5px', borderRadius:2, animation:'l4-clausepulse 2s ease-in-out infinite', display:'inline-block', marginBottom:2 }}>Initial Term</span>
              </p>
              <p style={{ margin:'0 0 8px', background:'#F0D5E8', padding:'4px 8px', borderRadius:3, animation:'l4-clausepulse 2s ease-in-out infinite' }}>
                <span style={{ color:muted, marginRight:8 }}>2.1</span>This Agreement shall commence on the Commencement Date and subject to provisions for earlier termination in this Agreement, shall continue in full force and effect for 6 months from the Commencement Date (the "Initial Term").
              </p>
              <p style={{ margin:'0 0 6px', display:'flex', gap:6 }}>
                <span style={{ background:'#f4e5f4', color:ink, padding:'1px 6px', borderRadius:2, fontSize:10.5 }}>Auto-Renew</span>
                <span style={{ background:'#f0dff0', color:ink, padding:'1px 6px', borderRadius:2, fontSize:10.5 }}>Renewal Term</span>
                <span style={{ background:'#F0D5E8', color:ink, padding:'1px 6px', borderRadius:2, fontSize:10.5 }}>Renewal Notice Period</span>
              </p>
              <p style={{ margin:'0 0 8px', background:'#F0D5E8', padding:'4px 8px', borderRadius:3 }}>
                <span style={{ color:muted, marginRight:8 }}>2.2</span>The Agreement shall automatically renew for subsequent terms of 6 months ("Subsequent Term" or "Subsequent Terms") unless terminated by either party by giving not less than 30 days' notice prior to the end of the Initial Term or any Subsequent Term.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* State indicator dots */}
      <div style={{ position:'absolute', bottom:18, left:0, right:0, display:'flex', justifyContent:'center', gap:8 }}>
        {[0,1].map(i=>(
          <span key={i} style={{ width:6, height:6, borderRadius:3, background: i===view ? '#FFF' : 'rgba(255,255,255,.3)' }}/>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, {
  NomioProductAnim,
  Ledger4AnimStyles,
  Ledger4HeroAnim,
  Ledger4ManagedAnim,
  Ledger4AccurateAnim,
  Ledger4SearchableAnim,
  PainManualAnim,
  PainTrustAnim,
  PainTimeAnim,
  HowFindUploadAnim,
  HowCalibrateAnim,
  HowMaintainAnim,
});
