/* A clean, schematic "contract repository" product visual — no raster screenshot.
   Each variation can theme it via CSS vars. */
const ContractTable = ({
  accent = 'var(--accent)',
  ink = 'var(--ink)',
  paper = 'var(--paper)',
  muted = 'var(--muted)',
  radius = 14,
  rows = 12,
  searchText = 'Search agreements',
  showChrome = true,
  density = 'cozy', // 'cozy' | 'tight'
}) => {
  const rowH = density === 'tight' ? 26 : 32;
  const sample = [
    ['MSA — Helping Hand Ltd', 'Customer', '9 Oct 2023', '3 years', 'Yes'],
    ['DPA — Amplify Limited', 'Distributor', '3 Sep 2023', '3 years', 'Yes'],
    ['NDA — Rokenore Ltd', 'Partnership', '14 Jul 2023', '2 years', 'No'],
    ['Reseller — Keto Ltd', 'Reseller', '4 Jan 2024', '18 mo', 'Yes'],
    ['SOW — Lightning Ltd', 'Customer', '1 Jun 2023', '1 year', 'Yes'],
    ['MSA — Northmoor', 'Customer', '7 Mar 2024', '16 mo', 'No'],
    ['Order Form — JA Boot', 'Customer', '21 Nov 2023', '2 years', 'Yes'],
    ['MSA — JA Boot UK', 'Customer', '4 Sep 2023', '1 year', 'Yes'],
    ['DPA — Hillside UK', 'Supplier', '26 Jun 2023', '3 years', 'Yes'],
    ['NDA — LOD Ltd', 'Supplier', '2 Feb 2024', '1 year', 'No'],
    ['MSA — Pillar Group', 'Customer', '15 Aug 2023', '3 years', 'Yes'],
    ['SOW — Greenfield', 'Customer', '19 May 2024', '6 mo', 'Yes'],
  ];
  return (
    <div style={{
      background: paper, borderRadius: radius, boxShadow: '0 1px 0 rgba(40,39,49,.04), 0 24px 48px -24px rgba(40,39,49,.18)',
      overflow: 'hidden', color: ink, fontSize: 11, lineHeight: 1.4,
      border: '1px solid color-mix(in oklab, ' + ink + ' 8%, transparent)',
    }}>
      {showChrome && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 14px', borderBottom: '1px solid color-mix(in oklab, ' + ink + ' 6%, transparent)',
        }}>
          <div style={{
            flex: 1, height: 26, borderRadius: 6, background: 'color-mix(in oklab, ' + ink + ' 4%, transparent)',
            display: 'flex', alignItems: 'center', padding: '0 10px', color: muted, fontSize: 11,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
              <circle cx="11" cy="11" r="7" stroke={muted} strokeWidth="2"/>
              <path d="M20 20L17 17" stroke={muted} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {searchText}
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: 16, padding: '8px 14px', color: muted, fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.4 }}>
        <span style={{ color: ink, borderBottom: `2px solid ${accent}`, paddingBottom: 4 }}>All</span>
        <span>Agreements</span>
        <span>Parties</span>
        <span>Clauses</span>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.6fr .8fr .8fr .6fr .5fr',
        padding: '0 14px',
        borderBottom: '1px solid color-mix(in oklab, ' + ink + ' 8%, transparent)',
        fontSize: 10, fontWeight: 600, color: muted, textTransform: 'uppercase', letterSpacing: 0.5,
        paddingTop: 6, paddingBottom: 6,
      }}>
        <span>Agreement</span><span>Counterparty</span><span>Start</span><span>Term</span><span>Auto-renew</span>
      </div>
      {sample.slice(0, rows).map((r, i) => (
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr .8fr .8fr .6fr .5fr',
          padding: '0 14px',
          alignItems: 'center', height: rowH,
          borderBottom: '1px solid color-mix(in oklab, ' + ink + ' 5%, transparent)',
          fontSize: 11,
        }}>
          <span>{r[0]}</span>
          <span style={{ color: muted }}>{r[1]}</span>
          <span style={{ color: muted }}>{r[2]}</span>
          <span style={{ color: muted }}>{r[3]}</span>
          <span>
            <i style={{
              display: 'inline-block', padding: '2px 8px', borderRadius: 999, fontSize: 10, fontStyle: 'normal',
              background: r[4] === 'Yes' ? `color-mix(in oklab, ${accent} 22%, transparent)` : `color-mix(in oklab, ${ink} 6%, transparent)`,
              color: r[4] === 'Yes' ? `color-mix(in oklab, ${accent} 80%, ${ink})` : muted,
            }}>{r[4]}</i>
          </span>
        </div>
      ))}
    </div>
  );
};

Object.assign(window, { ContractTable });
