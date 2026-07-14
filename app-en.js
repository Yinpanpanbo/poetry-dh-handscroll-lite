const STOPS = [
  {
    tag: 'OPENING COUPLET · 01 · AFTER FRESH RAIN',
    poem: ['The “empty” mountains', '“Empty” need not mean uninhabited: washerwomen and a fishing boat soon appear. It can first be read as a sparse, quiet space newly cleared by rain.', 'B · RECEIVED READING'],
    painting: ['A clearing begins in mist', 'The original illustration opens with wet paper, low hills, and pale water. Its visual emptiness translates an atmosphere; it does not map a historical location.', 'D · CURATORIAL TRANSLATION'],
    research: ['Keep text and image distinct', 'The mountain scene was composed for this website from the poem’s sequence. It is neither an ancient painting nor evidence of Wang Wei’s actual surroundings.', 'D · RESEARCH BOUNDARY']
  },
  {
    tag: 'SECOND COUPLET · 02 · MOON BETWEEN PINES',
    poem: ['Light acquires direction', 'The line places moonlight between or among pine branches. It follows the path of light without making the pine automatic proof of the poet’s moral character.', 'B · CLOSE READING'],
    painting: ['A high point of attention', 'Moon, branches, and a descending beam redirect the eye from the distant horizon into the near space of the scroll.', 'D · CURATORIAL TRANSLATION'],
    research: ['Symbolism is not the only route', 'The pine has a long symbolic afterlife, but this page gives priority to the line’s spatial and perceptual structure.', 'B · INTERPRETIVE BOUNDARY']
  },
  {
    tag: 'SECOND COUPLET · 03 · SPRING OVER STONE',
    poem: ['The image begins to sound', 'Read beside the moon line, still light and flowing water bring sight and sound into a balanced pair.', 'B · CLOSE READING'],
    painting: ['Water carries the eye', 'The drawn spring crosses stone and pulls the gaze downward. It visualises a relation in the couplet, not a real stream identified with Wang Wei.', 'D · CURATORIAL TRANSLATION'],
    research: ['No simulated soundscape', 'Without a suitable credited field recording, this edition does not use generic noise as a substitute for the poem’s spring.', 'D · RESEARCH BOUNDARY']
  },
  {
    tag: 'THIRD COUPLET · 04 · BAMBOO RESOUNDS',
    poem: ['Sound arrives before its source', 'The bamboo is heard before returning washerwomen are recognised. The line reveals workers through sound, but tells us neither their words nor their emotions.', 'B · CLOSE READING'],
    painting: ['Figures enter at human scale', 'Two small returning figures interrupt the bamboo without turning the workers into decorative court ladies.', 'D · CURATORIAL TRANSLATION'],
    research: ['Human labour, not ornament', 'The primary text supports returning washerwomen. Further claims about dress, tools, or social history would require separate evidence.', 'B · EVIDENCE BOUNDARY']
  },
  {
    tag: 'THIRD COUPLET · 05 · LOTUS LEAVES STIR',
    poem: ['Movement reveals the boat', 'The lotus is perceived in motion before the fishing boat becomes visible. “Down” suggests direction, conventionally read as downriver.', 'B · CLOSE READING'],
    painting: ['A route, not a fixed itinerary', 'Lotus, wake, and boat form a directional sequence. The composition deliberately avoids assigning an exact origin, destination, or viewing angle.', 'D · CURATORIAL TRANSLATION'],
    research: ['“Down” leaves room', '“Moves downriver” is the project translation, not enough evidence to reconstruct a precise waterway or route.', 'B · TRANSLATION BOUNDARY']
  },
  {
    tag: 'CLOSING COUPLET · 06 · ONE MAY REMAIN',
    poem: ['Spring fades; Wangsun may remain', 'The poem turns from describing a scene to considering whether one may stay. “May” preserves permission, judgement, and choice.', 'B · CLOSE READING'],
    painting: ['The valley opens rather than concludes', 'The final clearing slows visual pursuit and leaves a dwelling at the edge of open space: a curatorial answer, not an illustration of authorial intent.', 'D · CURATORIAL TRANSLATION'],
    research: ['Wangsun remains open', 'Wangsun is a traditional literary address for a noble or someone away from home. Reading it against “Summoning the Recluse” is influential, not exclusive.', 'B · RECEIVED READING']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const roll = $('.handscroll');
  const range = $('.scroll-progress');
  const step = $('.step');
  const hint = $('.hint');
  const note = $('.scroll-note');
  const scenes = $$('.scene');
  const stopButtons = $$('.stop-picker button');
  const couplets = ['OPENING', 'SECOND', 'SECOND', 'THIRD', 'THIRD', 'CLOSING'];
  let dragging = false;
  let startX = 0;
  let startScroll = 0;
  let current = 0;
  let lens = 'poem';

  function renderNote() {
    const content = STOPS[current][lens];
    note.querySelector('span').textContent = STOPS[current].tag;
    note.querySelector('h3').textContent = content[0];
    note.querySelector('p').textContent = content[1];
    note.querySelector('small').textContent = content[2];
  }

  function stopPositions() {
    const max = Math.max(0, roll.scrollWidth - roll.clientWidth);
    return scenes.map(scene => {
      const centered = scene.offsetLeft - (roll.clientWidth - scene.offsetWidth) / 2;
      return Math.max(0, Math.min(max, centered));
    });
  }

  function goToStop(index, behavior = 'smooth') {
    const positions = stopPositions();
    roll.scrollTo({ left: positions[index], behavior });
  }

  function sync() {
    const max = roll.scrollWidth - roll.clientWidth;
    const position = max ? roll.scrollLeft / max : 0;
    range.value = position * 100;
    const positions = stopPositions();
    current = positions.reduce((best, value, index) =>
      Math.abs(value - roll.scrollLeft) < Math.abs(positions[best] - roll.scrollLeft) ? index : best, 0);
    step.textContent = `${couplets[current]} · 0${current + 1} / 06`;
    stopButtons.forEach((button, index) => {
      if (index === current) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
    renderNote();
    if (roll.scrollLeft > 20) hint.classList.add('hidden');
  }

  roll.addEventListener('scroll', sync, { passive: true });
  roll.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      roll.scrollLeft += event.deltaY;
    }
  }, { passive: false });
  roll.addEventListener('pointerdown', event => {
    dragging = true;
    startX = event.clientX;
    startScroll = roll.scrollLeft;
    roll.setPointerCapture(event.pointerId);
    roll.classList.add('dragging');
  });
  roll.addEventListener('pointermove', event => {
    if (dragging) roll.scrollLeft = startScroll - (event.clientX - startX);
  });
  ['pointerup', 'pointercancel'].forEach(type => roll.addEventListener(type, () => {
    dragging = false;
    roll.classList.remove('dragging');
  }));
  roll.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToStop(Math.min(5, current + 1));
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToStop(Math.max(0, current - 1));
    }
  });
  range.addEventListener('input', () => {
    roll.scrollLeft = (roll.scrollWidth - roll.clientWidth) * (range.value / 100);
  });
  stopButtons.forEach((button, index) => button.addEventListener('click', () => {
    goToStop(index);
    roll.focus({ preventScroll: true });
  }));

  $$('.lens button').forEach(button => {
    button.setAttribute('aria-pressed', button.classList.contains('active'));
    button.addEventListener('click', () => {
      lens = button.dataset.lens;
      $$('.lens button').forEach(item => {
        item.classList.toggle('active', item === button);
        item.setAttribute('aria-pressed', item === button);
      });
      renderNote();
    });
  });

  $$('.samples button').forEach(button => {
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      const active = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('active', active);
      $(`.layer-demo .${button.dataset.layer}`).classList.toggle('visible', active);
    });
  });

  $('.unroll').addEventListener('click', () => {
    $('.prologue').classList.add('opened');
    setTimeout(() => {
      $('#exhibition').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => roll.focus({ preventScroll: true }), 650);
    }, 850);
  });
  $('.menu').addEventListener('click', event => {
    const open = event.currentTarget.getAttribute('aria-expanded') === 'true';
    event.currentTarget.setAttribute('aria-expanded', String(!open));
    $('.museum-header nav').classList.toggle('open', !open);
  });
  $$('.museum-header nav a').forEach(link => link.addEventListener('click', () => {
    $('.museum-header nav').classList.remove('open');
    $('.menu').setAttribute('aria-expanded', 'false');
  }));

  renderNote();
  sync();
});
