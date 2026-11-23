// Content of the release banners for 11.0. Copy this file for the next major
// (e.g. 12.0.mjs) and run: npm run banners -- 12.0
export default {
  slug: 'v11',
  pill: 'Release 11.0 · August 2024',
  title: ['Measure, pin', { accent: 'and space it out' }],
  body: 'Speccer 11 takes an options object instead of a string, draws a new default measure (the old one lives on as slim), pins text elements, and reads custom pin literals from an attribute.',
  // The diagram, drawn by speccer itself: a card with its padding, its width
  // and a pin on each part
  card: {
    heading: 'Portfolio',
    value: '32,356.40',
    action: 'Full stats'
  }
};
