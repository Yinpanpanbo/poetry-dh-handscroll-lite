const EN_STOPS = [
  {
    tag: '01 · AFTER RAIN',
    reading: ['The “empty” mountains', '“Empty” describes a clear, quiet field of perception—not a place without people.', 'B · RECEIVED READING'],
    design: ['Rain clears from left to right', 'Wet stone, low hills and a brightening field translate the opening change in weather.', 'D · VISUAL TRANSLATION'],
    boundary: ['An interface, not a reconstruction', 'The landscape was drawn for this project and does not identify a historical location.', 'D · RESEARCH BOUNDARY']
  },
  {
    tag: '02 · MOON / PINES',
    reading: ['Light acquires direction', 'The moon is perceived between branches rather than as an isolated symbol.', 'B · CLOSE READING'],
    design: ['Branches cut the light', 'A descending beam moves the eye from the moon towards the lower spring scene.', 'D · VISUAL TRANSLATION'],
    boundary: ['The pine does not prove character', 'Moral symbolism is possible, but the page first follows the spatial language of the line.', 'B · INTERPRETIVE BOUNDARY']
  },
  {
    tag: '03 · SPRING / STONE',
    reading: ['The image begins to sound', 'Still moonlight and flowing water form a balanced visual and auditory pair.', 'B · CLOSE READING'],
    design: ['Water carries the eye', 'A curved spring meets irregular stones and draws attention down through the scene.', 'D · VISUAL TRANSLATION'],
    boundary: ['No real stream is claimed', 'The drawing visualises a relation inside the couplet, not a place seen by Wang Wei.', 'D · RESEARCH BOUNDARY']
  },
  {
    tag: '04 · BAMBOO / RETURN',
    reading: ['Sound arrives before its source', 'The bamboo is heard first; returning washerwomen are recognised afterwards.', 'B · CLOSE READING'],
    design: ['Leaves move before figures appear', 'The left-to-right rhythm preserves the sentence order and keeps the workers secondary.', 'D · VISUAL TRANSLATION'],
    boundary: ['Workers, not decorative court ladies', 'The poem does not supply costume, emotion or biographical detail.', 'B · EVIDENCE BOUNDARY']
  },
  {
    tag: '05 · LOTUS / BOAT',
    reading: ['Movement reveals the boat', 'Lotus leaves stir before the fishing boat becomes visible.', 'B · CLOSE READING'],
    design: ['Ripple, leaf, then hull', 'The composition lets an environmental trace reveal its human cause.', 'D · VISUAL TRANSLATION'],
    boundary: ['“Downriver” remains a choice', 'The translation suggests direction without reconstructing an exact route.', 'B · TRANSLATION BOUNDARY']
  },
  {
    tag: '06 · FADE / REMAIN',
    reading: ['The scene becomes a choice', 'Description gives way to a judgement: this autumn world is a place where one may remain.', 'B · CLOSE READING'],
    design: ['The valley opens', 'Fewer objects, a path and a small hidden eave slow the final act of looking.', 'D · VISUAL TRANSLATION'],
    boundary: ['Wangsun remains open', 'The traditional address does not identify one fixed person in the image.', 'B · RECEIVED READING']
  }
];

const ZH_STOPS = [
  {
    tag: '01 · 新雨入山',
    reading: ['“空”不是无人', '“空山”首先描述清明、幽静的感知空间，而不是没有人的地理事实。', 'B · 通行解释'],
    design: ['雨脚由左向右消散', '湿石、低山与逐渐明亮的画面转译天气变化。', 'D · 视觉转译'],
    boundary: ['界面不是历史复原', '画面为本项目原创，不指认王维曾见过的真实地点。', 'D · 研究边界']
  },
  {
    tag: '02 · 明月松间',
    reading: ['光有了方向', '月光从松枝之间被感知，而不是一个孤立的文化符号。', 'B · 细读'],
    design: ['松枝切分月光', '向下的光束把视线从明月引向下一幕的清泉。', 'D · 视觉转译'],
    boundary: ['不把松等同诗人格', '松的道德象征可以讨论，但界面首先回应诗句的空间关系。', 'B · 解释边界']
  },
  {
    tag: '03 · 清泉石上',
    reading: ['图像开始有声', '静止的月光与流动的清泉构成视觉和听觉的平衡。', 'B · 细读'],
    design: ['水流带动视线', '弯曲水线穿过不规则山石，让观看从上方向下移动。', 'D · 视觉转译'],
    boundary: ['不指认真实山泉', '画面呈现的是联句内部的关系，而不是王维见过的具体地点。', 'D · 研究边界']
  },
  {
    tag: '04 · 竹喧人归',
    reading: ['先闻其声，后见其人', '先听见竹林喧响，随后才辨认出归来的浣女。', 'B · 细读'],
    design: ['竹叶先动，人物后出现', '从左到右的节奏保留句序，也避免人物抢占景观。', 'D · 视觉转译'],
    boundary: ['劳动者不是装饰仕女', '诗中并未提供服饰、神情或人物生平等细节。', 'B · 证据边界']
  },
  {
    tag: '05 · 莲动舟下',
    reading: ['由迹象发现行动', '莲叶先动，渔舟随后才在视觉中显现。', 'B · 细读'],
    design: ['水纹、莲叶、舟影', '环境留下的痕迹逐步揭示造成变化的人类行动。', 'D · 视觉转译'],
    boundary: ['“下”保留方向空间', '译文暗示水流方向，但不重建一条确定的真实航线。', 'B · 翻译边界']
  },
  {
    tag: '06 · 春歇可留',
    reading: ['风景转成选择', '景物描写最终转向判断：这个秋日世界可以让人留下。', 'B · 细读'],
    design: ['卷末开谷', '减少物象，以小径和隐约屋檐放慢最后一幕的观看。', 'D · 视觉转译'],
    boundary: ['王孙的指向保持开放', '传统称谓并不要求画面确认一个唯一、固定的人物。', 'B · 通行解释']
  }
];

const STOPS = document.documentElement.lang.startsWith('zh') ? ZH_STOPS : EN_STOPS;

document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const scroll = $('.handscroll');
  const scenes = $$('.scene');
  const stopButtons = $$('.stop-picker button');
  const viewButtons = $$('.view-tabs button');
  const range = $('.scroll-range');
  const output = $('.range-row output');
  const note = $('.stop-note');
  let current = 0;
  let view = 'reading';
  let dragging = false;
  let pointerStart = 0;
  let scrollStart = 0;

  const positions = () => scenes.map(scene => scene.offsetLeft);

  function render() {
    const content = STOPS[current][view];
    note.querySelector('span').textContent = STOPS[current].tag;
    note.querySelector('h3').textContent = content[0];
    note.querySelector('p').textContent = content[1];
    note.querySelector('small').textContent = content[2];
    output.value = `0${current + 1} / 06`;
    stopButtons.forEach((button, index) => {
      if (index === current) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }

  function sync() {
    const max = scroll.scrollWidth - scroll.clientWidth;
    range.value = max ? scroll.scrollLeft / max * 100 : 0;
    const anchors = positions();
    current = anchors.reduce((best, left, index) =>
      Math.abs(left - scroll.scrollLeft) < Math.abs(anchors[best] - scroll.scrollLeft) ? index : best, 0);
    render();
  }

  function goTo(index, behavior = 'smooth') {
    scroll.scrollTo({ left: positions()[index], behavior });
  }

  scroll.addEventListener('scroll', sync, { passive: true });
  scroll.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      scroll.scrollLeft += event.deltaY;
    }
  }, { passive: false });
  scroll.addEventListener('pointerdown', event => {
    dragging = true;
    pointerStart = event.clientX;
    scrollStart = scroll.scrollLeft;
    scroll.setPointerCapture(event.pointerId);
    scroll.classList.add('dragging');
  });
  scroll.addEventListener('pointermove', event => {
    if (dragging) scroll.scrollLeft = scrollStart - (event.clientX - pointerStart);
  });
  ['pointerup', 'pointercancel'].forEach(type => scroll.addEventListener(type, () => {
    dragging = false;
    scroll.classList.remove('dragging');
  }));
  scroll.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(Math.min(5, current + 1)); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(Math.max(0, current - 1)); }
  });

  range.addEventListener('input', () => {
    scroll.scrollLeft = (scroll.scrollWidth - scroll.clientWidth) * range.value / 100;
  });
  stopButtons.forEach((button, index) => button.addEventListener('click', () => {
    goTo(index);
    scroll.focus({ preventScroll: true });
  }));
  viewButtons.forEach(button => button.addEventListener('click', () => {
    view = button.dataset.view;
    viewButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    render();
  }));

  $('.open-scroll').addEventListener('click', () => {
    $('.hero').classList.add('opened');
    setTimeout(() => $('#scroll').scrollIntoView({ behavior: 'smooth' }), 650);
  });
  $('.menu').addEventListener('click', event => {
    const open = event.currentTarget.getAttribute('aria-expanded') === 'true';
    event.currentTarget.setAttribute('aria-expanded', String(!open));
    $('.site-header nav').classList.toggle('open', !open);
  });
  $$('.site-header nav a').forEach(link => link.addEventListener('click', () => {
    $('.site-header nav').classList.remove('open');
    $('.menu').setAttribute('aria-expanded', 'false');
  }));

  render();
  sync();
});
