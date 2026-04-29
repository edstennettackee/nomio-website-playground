/* Shared homepage copy — identical across every variation */
const nomioCopy = {
  nav: [
    { label: 'Product', hasMenu: true },
    { label: 'Pricing' },
    { label: 'Case Studies' },
    { label: 'Resources', hasMenu: true },
  ],
  hero: {
    pre: null,
    // three-part headline: plain / italic emphasis / plain (when used)
    headline: {
      plain1: 'Contract management you',
      italic: 'don’t have to think about',
      plain2: '',
    },
    sub: 'Forget the manual work of file systems and spreadsheets. Let Nomio build, validate, and maintain a searchable contract repository you can trust.',
    cta: 'Book a demo',
    secondary: 'Watch demo (55 secs)',
  },
  proofLabel: 'Trusted by lean legal and procurement teams',
  testimonials: [
    {
      quote: ['It took me an hour to onboard with Nomio, and ', { em: 'the accuracy has been 100%' }, '.'],
      name: 'Ryan Robinson',
      role: 'Legal Director, Nexus',
      cta: 'Watch case study',
    },
    {
      quote: ['When we sign a contract, we upload it to Nomio and that’s it', { em: '—nothing else to do' }, '.'],
      name: 'James Russell-Jones',
      role: 'General Counsel, Bark',
      cta: 'Watch case study',
    },
    {
      quote: [{ em: 'I have so much faith in Nomio' }, ' that I don’t spend any time thinking about it.'],
      name: 'Tom Plowman',
      role: 'General Counsel, Technetix',
      cta: 'Read case study',
    },
    {
      quote: [{ em: 'Nomio did everything for us' }, '—it’s given me so much time back to do more valuable things.'],
      name: 'Meghan Pretorius',
      role: 'Legal Manager, Mark Anthony',
      cta: 'Watch case study',
    },
  ],
  features: [
    {
      tag: 'Build',
      title: 'A repository that builds itself',
      body: 'Drop in a folder, a mailbox, a messy drive. Nomio reads every page, extracts the fields that matter, and files each agreement where it belongs.',
    },
    {
      tag: 'Validate',
      title: 'Every field, checked twice',
      body: 'Counterparties, dates, values, renewal terms — validated against the source document. If something’s off, Nomio flags it before you do.',
    },
    {
      tag: 'Maintain',
      title: 'A repository that stays true',
      body: 'Amendments, renewals, side letters — Nomio keeps everything current, so the search result you get is the answer, not a starting point.',
    },
  ],
  howSteps: [
    { n: '01', t: 'Connect your sources', b: 'Shared drives, email, e-sign tools. Nothing to migrate.' },
    { n: '02', t: 'Nomio reads everything', b: 'Agreements, amendments, exhibits. Every word.' },
    { n: '03', t: 'Ask anything', b: 'Search, filter, export. Answers you can trust.' },
  ],
  stats: [
    { big: '< 1 hr', small: 'onboarding, on average' },
    { big: '100%', small: 'field accuracy, validated' },
    { big: '0', small: 'things to think about' },
  ],
  logoBar: ['Nexus', 'Bark', 'Technetix', 'Mark Anthony', 'Tinyleap', 'Fieldwise', 'Hursley & Co', 'Orinoco'],
  closing: {
    kicker: 'Your contracts, handled',
    headline: 'Stop managing. Start trusting.',
    sub: 'Let us show you what a contract repository that maintains itself actually feels like.',
    cta: 'Book a demo',
    secondary: 'Talk to us',
  },
  footer: {
    columns: [
      { title: 'Product', items: ['Overview', 'Build', 'Validate', 'Maintain', 'Security', 'Pricing'] },
      { title: 'Company', items: ['About', 'Careers', 'Customers', 'Contact'] },
      { title: 'Resources', items: ['Blog', 'Case studies', 'Changelog', 'Guides'] },
      { title: 'Legal', items: ['Terms', 'Privacy', 'DPA', 'Subprocessors'] },
    ],
    small: '© 2026 Nomio Ltd · Made for lean legal teams',
  },
};

// helper: render a mixed quote array (strings + {em})
const renderQuote = (parts, EmTag = 'em') =>
  parts.map((p, i) =>
    typeof p === 'string'
      ? <React.Fragment key={i}>{p}</React.Fragment>
      : <EmTag key={i}>{p.em}</EmTag>
  );

Object.assign(window, { nomioCopy, renderQuote });
