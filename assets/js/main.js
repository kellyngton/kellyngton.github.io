// Observador de Intersecção para exibir animações de "Fade In" conforme o usuário rola a tela.
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    // Variáveis do Typewriter
    const typewriterEl = document.getElementById('typewriter');
    const textToType = typewriterEl ? typewriterEl.getAttribute('data-text') : '';
    let isTyped = false;

    function typeWriter(text, index) {
        if (index < text.length) {
            typewriterEl.textContent += text.charAt(index);
            setTimeout(() => typeWriter(text, index + 1), 60); // 60ms de velocidade por letra
        }
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                
                // Se a seção visível for a de experiência, inicia a digitação
                if (entry.target.id === 'experiencia' && !isTyped) {
                    isTyped = true;
                    setTimeout(() => typeWriter(textToType, 0), 400); // Aguarda 400ms para dar tempo do fade-in acontecer
                }

                observer.unobserve(entry.target); // Para a animação ocorrer apenas na primeira vez
            }
        });
    }, observerOptions);

    const hiddenSections = document.querySelectorAll('.section-hidden');
    hiddenSections.forEach(section => {
        observer.observe(section);
    });

    // Envio do Formulário de Contato via AJAX e Animação do Terminal Sênior
    const contactForm = document.querySelector('.contact-form');
    const successMessage = document.getElementById('successMessage');
    const btnBack = document.getElementById('btnBack');
    const terminalLogs = document.getElementById('terminalLogs');
    
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); 
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Autenticando...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    // Esconde o form e mostra a tela de sucesso
                    contactForm.style.display = 'none'; 
                    successMessage.style.display = 'flex'; 
                    
                    // Inicia a animação do Terminal (Estilo "Senior Deploy")
                    terminalLogs.innerHTML = '<span class="log-cursor"></span>';
                    
                    // Obter data e hora atual no formato ISO simplificado
                    const now = new Date();
                    const timestamp = now.toISOString().split('T')[1].substring(0,8);
                    
                    const logs = [
                        { text: `[${timestamp}] INFO: Initializing contact payload...`, delay: 300, class: "" },
                        { text: `[${timestamp}] INFO: Authenticating via OAuth 2.0`, delay: 400, class: "" },
                        { text: `[${timestamp}] SUCCESS: Authentication Token acquired.`, delay: 300, class: "success" },
                        { text: `[${timestamp}] INFO: Establishing secure tunnel (WSS)`, delay: 500, class: "" },
                        { text: `[${timestamp}] INFO: Handshake completed. Encrypting payload (AES-256-GCM)...`, delay: 600, class: "" },
                        { text: `[${timestamp}] SUCCESS: Payload encrypted. Transmitting data to edge node.`, delay: 500, class: "success" },
                        { text: `[${timestamp}] INFO: Uploading [====================] 100%`, delay: 800, class: "success" },
                        { text: `[${timestamp}] INFO: Awaiting acknowledgment from upstream server...`, delay: 1000, class: "warning" },
                        { text: `[${timestamp}] SUCCESS: HTTP 201 Created. Message stored successfully.`, delay: 400, class: "success" },
                        { text: `[${timestamp}] INFO: Tearing down connection gracefully.`, delay: 300, class: "" },
                        { text: `[${timestamp}] INFO: Redirecting to main dashboard...`, delay: 1200, class: "warning" }
                    ];

                    for (const log of logs) {
                        await sleep(log.delay);
                        const cursor = terminalLogs.querySelector('.log-cursor');
                        if (cursor) cursor.remove(); 
                        
                        const p = document.createElement('div');
                        p.className = `log-line ${log.class}`;
                        p.textContent = log.text;
                        terminalLogs.appendChild(p);
                        
                        // Auto-scroll the terminal content down
                        terminalLogs.scrollTop = terminalLogs.scrollHeight;
                        
                        const newCursor = document.createElement('span');
                        newCursor.className = 'log-cursor';
                        terminalLogs.appendChild(newCursor);
                    }

                    await sleep(800);
                    // Rola pro topo (dashboard principal) suavemente
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                    // Reseta silenciosamente o formulário
                    setTimeout(() => {
                        contactForm.reset();
                        successMessage.style.display = 'none';
                        contactForm.style.display = 'block';
                    }, 1000);

                } else {
                    alert('Oops! Ocorreu um problema ao enviar a mensagem. Verifique se configurou o link corretamente.');
                }
            } catch (error) {
                alert('Erro de conexão. Por favor, tente novamente mais tarde.');
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.opacity = '1';
            }
        });
    }

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            successMessage.style.display = 'none';
            contactForm.style.display = 'block';
        });
    }
});