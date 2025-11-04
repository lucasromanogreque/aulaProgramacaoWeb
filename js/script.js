
document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.querySelector('.menu-toggle');
  const slidePanel = document.querySelector('.slide-panel') || createSlidePanel();
  const overlay = createOverlay();
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = slidePanel.classList.toggle('open');
      overlay.classList.toggle('show', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    
      menuToggle.classList.toggle('open', isOpen);
    });
  }


  overlay.addEventListener('click', () => {
    slidePanel.classList.remove('open'); overlay.classList.remove('show');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.classList.remove('open');
  });

  
  function createOverlay(){
    let ov = document.querySelector('.panel-overlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.className = 'panel-overlay';
      document.body.appendChild(ov);
    }
    return ov;
  }

  function createSlidePanel(){
    const existingMenu = document.querySelector('.nav-links');
    const panel = document.createElement('nav');
    panel.className = 'slide-panel';
    panel.innerHTML = `<button class="close-panel" aria-label="Fechar menu">✕</button><div class="panel-links"></div>`;
    const linksWrap = panel.querySelector('.panel-links');
    if (existingMenu) {
    
      const clone = existingMenu.cloneNode(true);
      clone.className = 'panel-links-list';
      const list = document.createElement('div');
      list.appendChild(clone);
      linksWrap.appendChild(clone);
    
      clone.querySelectorAll('a').forEach(a => a.style.display = 'block');
    } else {
      linksWrap.innerHTML = `<a href="index.html">Início</a><a href="projetos.html">Projetos</a><a href="cadastro.html">Cadastre-se</a>`;
    }
    document.body.appendChild(panel);

    panel.querySelector('.close-panel').addEventListener('click', () => {
      panel.classList.remove('open'); document.querySelector('.panel-overlay').classList.remove('show');
      if (menuToggle) { menuToggle.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }
    });
    return panel;
  }

  const form = document.getElementById('cadastroForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.querySelectorAll('.field-error').forEach(n => n.remove());
      form.querySelectorAll('.input-error').forEach(i => i.classList.remove('input-error'));

      let valid = true;
      const nome = form.querySelector('#nome');
      const email = form.querySelector('#email');
      const cpf = form.querySelector('#cpf');

      if (!nome.value || nome.value.trim().length <3) {
        fieldError(nome, 'Nome inválido (mínimo 3 caracteres)');
        valid = false;
      }
      if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        fieldError(email, 'E-mail inválido');
        valid = false;
      }
      if (!cpf.value || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value)) {
        fieldError(cpf, 'CPF no formato: 000.000.000-00');
        valid = false;
      }

      if (valid) {
        showToast('Cadastro enviado com sucesso!');
        form.reset();
      }
    });
  }

  function fieldError(input, msg) {
    input.classList.add('input-error');
    const el = document.createElement('div');
    el.className = 'field-error';
    el.textContent = msg;
    input.insertAdjacentElement('afterend', el);
    input.focus();
  }

  function showToast(msg, ms = 3000) {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t);
    }
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), ms);
  }
});
