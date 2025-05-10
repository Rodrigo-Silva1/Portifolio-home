// Alternância entre tema claro e escuro
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Scroll suave para links da navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Exibir seções com efeito de fade-in ao rolar a página
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Filtro de projetos
const filtroBtns = document.querySelectorAll('.filtro button');
const projetos = document.querySelectorAll('.projeto');

filtroBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Atualiza botão ativo
    filtroBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filtro = btn.getAttribute('data-filter');

    projetos.forEach(projeto => {
      const categoria = projeto.getAttribute('data-category');
      if (filtro === 'todos' || filtro === categoria) {
        projeto.style.display = 'block';
      } else {
        projeto.style.display = 'none';
      }
    });
  });
});

// Validação simples do formulário de contato
const formContato = document.getElementById('formContato');
const feedback = document.getElementById('feedback');

formContato.addEventListener('submit', function(e) {
  e.preventDefault();
  // Coleta dos dados
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Validação simples
  if (!nome || !email || !mensagem) {
    feedback.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  // Aqui você pode integrar com um serviço de envio de e-mail ou API
  feedback.style.color = 'green';
  feedback.textContent = 'Mensagem enviada com sucesso!';

  // Limpar formulário
  formContato.reset();

  // Remover mensagem após alguns segundos
  setTimeout(() => {
    feedback.textContent = '';
  }, 3000);
});