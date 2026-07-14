const STOPS = [
  {
    tag: '首联 · 01 · 新雨入山',
    poem: ['“空”不是无人', '雨后空气与暮秋同时进入。全诗随后有人与舟，空山更接近幽静疏朗。', 'B 通行解释'],
    painting: ['雨后从疏朗开始', '原创画面让雨脚由左向右逐渐消失，湿石、水面与山坳共同建立澄明的感知条件。', 'D 图像转译'],
    research: ['当代的观看转译', '本页手卷为项目原创；它依据诗句顺序组织阅读，不构成历史图像证据。', 'D 研究边界']
  },
  {
    tag: '颔联 · 02 · 月照松间',
    poem: ['光有了方向', '“间照”让月光经过枝叶遮挡，而不是均匀铺满山林。', 'B 文本细读'],
    painting: ['光被松枝切分', '月不作为独立图标悬空；枝叶切分的斜光把视线从高处带向湿石。', 'D 图像转译'],
    research: ['象征不是唯一答案', '松的品格象征属于常见阅读传统；页面优先呈现光线和空间关系。', 'B 通行解释']
  },
  {
    tag: '颔联 · 03 · 清泉过石',
    poem: ['图像开始有声', '月色与泉声、高处与低处、静观与流动在相邻两句中回应。', 'B 文本细读'],
    painting: ['水脉把视线带向低处', '泉线绕过三组石块形成节拍；它回应月光方向，但并不是从月亮流出的水。', 'D 图像转译'],
    research: ['不复原真实山泉', '画面只呈现诗句内部的高低、静动关系，不指认王维见过的具体地点。', 'D 研究边界']
  },
  {
    tag: '颈联 · 04 · 竹喧人归',
    poem: ['先闻其声，后见其人', '语序先写竹林声响，再揭示浣洗归来的女子。', 'B 文本细读'],
    painting: ['竹叶扰动先出现', '密竹与向右的叶势先制造声音线索，两名小比例归人随后才从竹隙中被发现。', 'D 图像转译'],
    research: ['劳动者不是装饰仕女', '诗中浣女首先是归返中的劳动者；不增绘原文没有说明的服饰等级、表情与工具。', 'B 文本分析']
  },
  {
    tag: '颈联 · 05 · 莲动舟下',
    poem: ['由迹象发现行动', '莲叶先动，舟影随后出现；环境变化先于行动主体。', 'B 文本细读'],
    painting: ['先见水纹与莲叶分开', '水纹和倾斜的莲叶先建立方向，低矮渔舟随后从叶后露出，并保持次级。', 'D 图像转译'],
    research: ['“下”保留方向空间', '通行解释可指舟行经过或顺流而下；页面不绘制确定航线。', 'B 通行解释']
  },
  {
    tag: '尾联 · 06 · 卷末可留',
    poem: ['秋山何以可留？', '任凭春芳消歇，秋山仍值得停留；诗由景物转向精神选择。', 'B 文本细读'],
    painting: ['开谷与路径代替新奇观', '卷末用开放谷地与可进入的小径减慢观看；半隐檐线只是次要停驻暗示。', 'D 图像转译'],
    research: ['与《招隐士》的反向回应', '常见解释认为“王孙”回应劝归传统；这是通行阐释，不是唯一意图。', 'B 通行解释']
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
  const couplets = ['首联', '颔联', '颔联', '颈联', '颈联', '尾联'];
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
    roll.scrollTo({ left: stopPositions()[index], behavior });
  }

  function sync() {
    const max = roll.scrollWidth - roll.clientWidth;
    const position = max ? roll.scrollLeft / max : 0;
    const positions = stopPositions();
    range.value = position * 100;
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
