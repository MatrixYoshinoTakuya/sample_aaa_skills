// PROTOTYPE - NOT FOR PRODUCTION
// Question: 終わりのないスロットで、ベット額の上げ下げだけで「あと1回」が続くか。
// Date: 2026-11-16
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- The challenge: coins and payouts. With these strips and pays the return is about
  // 93.4% of every coin bet (36% of spins pay something, free spins about 1 spin in 64).
  start_coins: { value: 100, min: 20, max: 1000, step: 10 },      // coins at the start of a run
  pay_seven: { value: 120, min: 20, max: 500, step: 5 },          // x line bet, three on a line
  pay_wild: { value: 250, min: 20, max: 1000, step: 10 },         // x line bet, three wilds on a line
  pay_diamond: { value: 50, min: 10, max: 200, step: 5 },         // x line bet
  pay_bar: { value: 25, min: 5, max: 100, step: 1 },              // x line bet
  pay_bell: { value: 12, min: 2, max: 60, step: 1 },              // x line bet
  pay_lemon: { value: 8, min: 1, max: 40, step: 1 },              // x line bet
  pay_cherry: { value: 5, min: 1, max: 30, step: 1 },             // x line bet
  pay_cherry_pair: { value: 2, min: 0, max: 10, step: 1 },        // x line bet, cherries on reels 1 and 2 of a line
  free_spins: { value: 8, min: 1, max: 20, step: 1 },             // free spins for a crown on every reel
  free_multiplier: { value: 2, min: 1, max: 5, step: 1 },         // payout multiplier during free spins

  // ---- The feel of a spin
  reel_speed: { value: 16, min: 6, max: 40, step: 1 },            // symbols per second
  first_stop: { value: 0.7, min: 0.2, max: 2, step: 0.05 },       // seconds until the left reel stops
  stop_gap: { value: 0.32, min: 0.05, max: 1, step: 0.01 },       // seconds between reel stops
  settle_time: { value: 0.34, min: 0.1, max: 1, step: 0.02 },     // seconds a reel takes to land and bounce
  win_show_time: { value: 0.9, min: 0.2, max: 3, step: 0.1 },     // seconds a small win is shown
  free_spin_pause: { value: 0.45, min: 0, max: 2, step: 0.05 },   // seconds between free spins

  // ---- The first minute: taught by doing, in a player's very first run only (0 turns one off)
  guide_small_win_spin: { value: 2, min: 0, max: 20, step: 1 },   // this spin lands three cherries
  guide_free_spin: { value: 7, min: 0, max: 30, step: 1 },        // this spin lands a crown on every reel

  // ---- The machine itself (not sliders). C cherry, L lemon, B bell, R bar, D diamond,
  // S seven, W wild, X crown. A stop shows three symbols in a row of the strip.
  bet_levels: [1, 2, 5, 10], // coins per line; five lines are always played
  strips: [
    'CLBCXLRCBLDCLSCBXLRCLBWL',
    'LBRLXCRLBLDLBSLBXCRLDBWL',
    'BCLCXLBRCLDCLSBCXLRBCLWL',
  ],
};
