// Sections 7–13 injected via JS to keep HTML file manageable
(function () {
  const target = document.getElementById('part2');
  if (!target) return;

  const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

  target.outerHTML = `

<!-- ========== DECORATIVE IMAGE STRIP ========== -->
<section class="deco-image-section">
  <div class="deco-image-strip">
    <img src="image_2_1x.webp" alt="Imersão Gênesis — Detalhe" loading="lazy">
    <img src="image_3_1x.webp" alt="Imersão Gênesis — Florescer" loading="lazy">
    <img src="image_4_1x.webp" alt="Imersão Gênesis — Palavra" loading="lazy">
  </div>
</section>

<hr class="separator">

<!-- ========== SEÇÃO 7 — LOCAL ========== -->
<section class="section" id="local">
  <div class="container fade-in text-center">
    <span class="badge" style="margin-bottom:1.8rem">O Espaço</span>
    <h2>Um ambiente à altura do que você vai construir.</h2>
    <p style="margin:0 auto 1rem;max-width:560px">Cada detalhe do espaço foi escolhido para que a experiência seja imersiva, elegante e transformadora.</p>

    <div class="venue-gallery">
      <div class="venue-gallery__main">
        <img src="auditorioa.webp" alt="Auditório Evolution Corporate — Vista principal" class="venue-gallery__img">
        <div class="venue-gallery__overlay"></div>
      </div>
      <div class="venue-gallery__secondary">
        <img src="auditoriob.webp" alt="Auditório Evolution Corporate — Vista lateral" class="venue-gallery__img">
        <div class="venue-gallery__overlay"></div>
      </div>
    </div>

    <div class="venue-card">
      <div class="venue-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
      <div class="venue-card__details">
        <h3 style="margin-bottom:4px;font-family:var(--font-serif);font-size:1.3rem">Evolution Corporate</h3>
        <p style="margin:0;color:var(--text-secondary);font-size:0.92rem">Rua Miguel Matte, 687 · Centro<br>Balneário Camboriú/SC</p>
      </div>
    </div>
  </div>
</section>

<hr class="separator">

<!-- ========== SEÇÃO 8 — VÍDEO ========== -->
<section class="section section--alt" id="video">
  <div class="container fade-in text-center">
    <h2>Assista e entenda tudo antes de garantir sua vaga</h2>
    <p style="margin:0 auto 1rem">Um vídeo direto sobre a imersão, vendas e principais dúvidas…</p>
    <div class="video-container">
      <video src="VIDEO-GENESIS.MP4" controls preload="metadata" poster="capavideo.webp">
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  </div>
</section>

<hr class="separator">

<!-- ========== SEÇÃO 9 — INVESTIMENTO ========== -->
<section class="section invest-section" id="investimento">
  <div class="invest-glow"></div>
  <div class="container fade-in text-center" style="position:relative;z-index:1">
    <img src="logo-azul.svg" alt="Imersão Gênesis" class="section-logo">
    <span class="badge" style="margin-bottom:1.8rem">Investimento</span>
    <h2>Não é apenas um evento.<br>É um novo começo.</h2>
    <p style="margin:0 auto 1.5rem;max-width:560px">Tudo foi pensado para que a experiência seja completa, profunda e memorável.</p>

    <div class="invest-divider"></div>

    <h3 class="invest-subtitle">O que está incluído na sua experiência:</h3>
    <div class="value-tags">
      <span class="value-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Experiência imersiva presencial
      </span>
      <span class="value-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Conteúdo estratégico de imagem e identidade
      </span>
      <span class="value-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Dinâmicas profundas
      </span>
      <span class="value-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Material exclusivo
      </span>
      <span class="value-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Networking com mulheres qualificadas
      </span>
      <span class="value-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Ambientação premium
      </span>
      <span class="value-tag">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Coffee break e experiência sensorial
      </span>
    </div>

    <div class="invest-divider"></div>

    <h3 class="invest-subtitle">Escolha seu ingresso:</h3>

    <div class="pricing-grid-v2" id="tabela-precos">

      <!-- 1º LOTE -->
      <div class="price-card-v2">
        <div class="price-card-v2__label">1º Lote</div>
        <div class="price-card-v2__price"><span class="price-card-v2__currency">R$</span>397<span class="price-card-v2__cents">,00</span></div>
        <div class="price-card-v2__tag">Condição especial de lançamento</div>
        <ul class="price-card-v2__benefits">
          <li>${checkSvg}<span>Acesso a Imersão Gênesis</span></li>
          <li>${checkSvg}<span>Kit participante com material de apoio</span></li>
          <li>${checkSvg}<span>Aula pós-imersão com Larissa Bovo</span></li>
          <li>${checkSvg}<span>Acesso ao grupo privado de networking</span></li>
          <li>${checkSvg}<span>Coffee break incluso</span></li>
        </ul>
        <a href="https://chk.eduzz.com/6W4GOKNN0Z" target="_blank" class="btn btn--pricing">
          <span class="btn__text">Garantir Vaga</span>
        </a>
      </div>

      <!-- 2º LOTE -->
      <div class="price-card-v2">
        <div class="price-card-v2__label">2º Lote</div>
        <div class="price-card-v2__price"><span class="price-card-v2__currency">R$</span>497<span class="price-card-v2__cents">,00</span></div>
        <div class="price-card-v2__tag">Após encerramento do 1º lote</div>
        <ul class="price-card-v2__benefits">
          <li>${checkSvg}<span>Acesso a Imersão Gênesis</span></li>
          <li>${checkSvg}<span>Kit participante com material de apoio</span></li>
          <li>${checkSvg}<span>Aula pós-imersão com Larissa Bovo</span></li>
          <li>${checkSvg}<span>Acesso ao grupo privado de networking</span></li>
          <li>${checkSvg}<span>Coffee break incluso</span></li>
        </ul>
        <a href="https://chk.eduzz.com/R9JXD1480X" target="_blank" class="btn btn--pricing">
          <span class="btn__text">Garantir Vaga</span>
        </a>
      </div>

      <!-- DIAMOND -->
      <div class="price-card-v2 price-card-v2--featured">
        <div class="price-card-v2__badge-top">Experiência Premium</div>
        <div class="price-card-v2__label">Participantes Diamond</div>
        <div class="price-card-v2__price"><span class="price-card-v2__currency">R$</span>680<span class="price-card-v2__cents">,00</span></div>
        <div class="price-card-v2__tag">Experiência premium completa</div>
        <ul class="price-card-v2__benefits">
          <li>${checkSvg}<span>Acesso completo à Imersão Gênesis</span></li>
          <li>${checkSvg}<span>Kit participante com material de apoio</span></li>
          <li>${checkSvg}<span class="price-card-v2__benefit-highlight">Kit VIP Diamond com mimos especiais</span></li>
          <li>${checkSvg}<span>Coffee break</span></li>
          <li>${checkSvg}<span class="price-card-v2__benefit-highlight">Jantar exclusivo pré-evento com palestrantes e convidadas especiais</span></li>
          <li>${checkSvg}<span class="price-card-v2__benefit-highlight">Assento reservado (primeiras fileiras)</span></li>
          <li>${checkSvg}<span class="price-card-v2__benefit-highlight">Acesso ao camarim</span></li>
          <li>${checkSvg}<span>Acompanhamento de imagem pós-evento com a Larissa Bovo</span></li>
          <li>${checkSvg}<span>Acesso ao Clube da curadoria por 60 dias</span></li>
          <li>${checkSvg}<span>Acesso ao grupo privado de networking</span></li>
        </ul>
        <a href="https://chk.eduzz.com/797ZDX2V0E" target="_blank" class="btn btn--pricing">
          <span class="btn__text">Garantir Vaga</span>
        </a>
      </div>

      <!-- INGRESSO DUPLO -->
      <div class="price-card-v2">
        <div class="price-card-v2__label">Ingresso Duplo</div>
        <div class="price-card-v2__price"><span class="price-card-v2__currency">R$</span>680<span class="price-card-v2__cents">,00</span></div>
        <div class="price-card-v2__tag">Traga alguém e divida a experiência</div>
        <ul class="price-card-v2__benefits">
          <li>${checkSvg}<span class="price-card-v2__benefit-highlight">2 Ingressos</span></li>
          <li>${checkSvg}<span>Acesso a Imersão Gênesis</span></li>
          <li>${checkSvg}<span>Kit participante com material de apoio</span></li>
          <li>${checkSvg}<span>Aula pós-imersão com Larissa Bovo</span></li>
          <li>${checkSvg}<span>Acesso ao grupo privado de networking</span></li>
          <li>${checkSvg}<span>Coffee break incluso</span></li>
        </ul>
        <a href="https://chk.eduzz.com/D0R8NYB69Y" target="_blank" class="btn btn--pricing">
          <span class="btn__text">Garantir Vaga</span>
        </a>
      </div>

    </div>

    <div style="margin-top:48px">
      <p class="micro-text" style="margin-top:16px">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:4px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Vagas limitadas — garanta a sua antes do próximo lote.
      </p>
    </div>
  </div>
</section>

<hr class="separator">

<!-- ========== SEÇÃO 10 — PARA QUEM É ========== -->
<section class="section section--alt" id="para-quem">
  <div class="container fade-in">
    <h2>Essa imersão é para mulheres que:</h2>
    <div class="for-who-grid">
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Sentem que evoluíram, mas a imagem não acompanha</span>
      </div>
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Querem transmitir mais autoridade e presença</span>
      </div>
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Desejam atrair clientes mais qualificados</span>
      </div>
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Buscam clareza sobre estilo e identidade</span>
      </div>
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Estão cansadas de comprar roupas sem estratégia</span>
      </div>
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Querem se posicionar com segurança profissional</span>
      </div>
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Desejam desenvolver elegância natural</span>
      </div>
      <div class="for-who-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Querem se sentir confiantes em reuniões e eventos</span>
      </div>
    </div>

    <div class="not-for-card">
      <h3 style="color:var(--text-primary);margin-bottom:16px">Importante:</h3>
      <p>Não é para quem quer apenas aprender a combinar roupas. É para quem quer reconstruir quem se tornou.</p>
      <p>Não é para quem quer apenas aprender moda. É para quem quer viver um novo começo.</p>
    </div>
  </div>
</section>

<hr class="separator">

<!-- ========== SEÇÃO 11 — PALESTRANTES ========== -->
<section class="section" id="palestrantes">
  <div class="container fade-in text-center">
    <span class="badge" style="margin-bottom:1.8rem">Quem conduz a imersão</span>
    <h2>Mulheres que vivem o que ensinam.</h2>
    <p style="margin:0 auto 1rem;max-width:560px">Cada palestrante traz uma área de transformação. Juntas, conduzem uma experiência completa.</p>

    <div class="speakers-grid-v2">

      <!-- SPEAKER 1 -->
      <div class="speaker-card-v2">
        <div class="speaker-card-v2__img">
          <img src="sonia.webp" alt="Bispa Sonia Correa" class="speaker-img">
        </div>
        <div class="speaker-card-v2__body">
          <span class="speaker-card-v2__role">Ministra</span>
          <h3>Bispa Sonia Correa</h3>
          <p class="speaker-card-v2__tagline">Especialista em cura, libertação e restauração da identidade feminina.</p>
          <div class="speaker-card-v2__bio" data-collapsed="true">
            <div class="speaker-card-v2__bio-text">
              <p>Há mais de 25 anos cuida de mulheres, sendo especialista em <strong>remover mulheres de cativeiros espirituais, conduzindo à cura, libertação e restauração da identidade.</strong></p>
              <p>Fundadora do Mulheres Magníficas em Deus e cofundadora da União Eclesiástica para as Nações, tem como missão levantar mulheres para viverem seu propósito com liberdade, verdade e posicionamento espiritual.</p>
            </div>
          </div>
          <button class="speaker-card-v2__toggle" onclick="toggleBio(this)">
            <span>Ler mais</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>

      <!-- SPEAKER 2 -->
      <div class="speaker-card-v2">
        <div class="speaker-card-v2__img">
          <img src="karol.webp" alt="Duda Soares" class="speaker-img">
        </div>
        <div class="speaker-card-v2__body">
          <span class="speaker-card-v2__role">Palestrante</span>
          <h3>Duda Soares</h3>
          <p class="speaker-card-v2__tagline">Mentora de mulheres e comunicadora de moda — imagem como expressão de identidade e propósito.</p>
          <div class="speaker-card-v2__bio" data-collapsed="true">
            <div class="speaker-card-v2__bio-text">
              <p>Bacharel em Direito e estudante de psicanálise clínica, mas acima de tudo, uma mulher chamada para despertar outras mulheres para a sua verdadeira identidade. Nascida em Joinville, 31 anos, casada e cristã.</p>
              <p>Lidera o movimento 'Florescer', um espaço onde mulheres são encorajadas a se reconectar com quem realmente são, de dentro para fora. Atua como mentora de mulheres e comunicadora de moda, utilizando a imagem não apenas como estética, mas como expressão de identidade, posicionamento e propósito.</p>
              <p>Acredita que quando uma mulher entende quem ela é no espírito, ela se posiciona com verdade em todas as áreas da sua vida — inclusive na forma como se veste, se comunica e ocupa o seu lugar no mundo.</p>
            </div>
          </div>
          <button class="speaker-card-v2__toggle" onclick="toggleBio(this)">
            <span>Ler mais</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>

      <!-- SPEAKER 3 -->
      <div class="speaker-card-v2">
        <div class="speaker-card-v2__img">
          <img src="duda.webp" alt="Duda Soares" class="speaker-img">
        </div>
        <div class="speaker-card-v2__body">
          <span class="speaker-card-v2__role">Palestrante</span>
          <h3>Karol Valério</h3>
          <p class="speaker-card-v2__tagline">Personal trainer e mentora — transformação integrada de corpo, mente e espírito.</p>
          <div class="speaker-card-v2__bio" data-collapsed="true">
            <div class="speaker-card-v2__bio-text">
              <p>Karol Valerio é personal trainer e mentora de mulheres, apaixonada por despertar o potencial feminino por meio de uma abordagem integrada de corpo, mente e espírito. Como criadora do método SCULPT, conduz mulheres a uma transformação real e sustentável, baseada em estratégia, consciência e propósito.</p>
              <p>Sua própria jornada de transformação vai além do físico: envolve amadurecimento emocional, fortalecimento espiritual e uma profunda conexão com o propósito de vida.</p>
              <p>Hoje, seu propósito é despertar mulheres para viverem com intenção, identidade e posicionamento — tornando-se protagonistas de suas próprias histórias.</p>
            </div>
          </div>
          <button class="speaker-card-v2__toggle" onclick="toggleBio(this)">
            <span>Ler mais</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

<hr class="separator">

<!-- ========== SEÇÃO 12 — SOBRE LARISSA BOVO ========== -->
<section class="section section--alt" id="sobre">
  <div class="container fade-in">
    <h2>Sobre Larissa Bovo</h2>
    <div class="about-grid" style="margin-top:40px">
      <div class="about-text">
        <h3>Formação</h3>
        <p>Formada em Design de moda, com curso profissionalizante em Moda pelo Centro Europeu e pós-graduada em Marketing Digital pelo Senac , possui inúmeros cursos na área do vestuário como modelagem, desenho de moda, costura e computação gráfica para moda. Atualmente é mestranda em Design do Vestuário e Moda pela UDESC.</p>

        <h3>Trajetória</h3>
        <p>Começou a empreender com 24 anos e ganhou vasta experiência em agências de publicidade em marketing de moda e então, no ano de 2020 relançou sua marca de moda fitness. Hoje, após sua especialização em Consultoria de imagem e estilo em Paris com Andréia Furco e sua própria transformação de imagem lançou seu próprio método chamado Gênesis, na qual ajuda mulheres a se posicionarem como referência em suas áreas. Especialista em posicionamento premium transforma mulheres inseguras em mulheres com autoridade.</p>

        <h3>Atuação</h3>
        <p>Trabalha de forma online e presencial através de consultorias, mentorias, palestras, imersões e workshops.</p>
      </div>
      <div>
        <figure class="editorial-frame">
          <div class="editorial-frame__box">
            <img src="fotolari.webp" alt="Larissa Bovo">
          </div>
          <figcaption class="editorial-frame__caption">
            <span>FIG. 01</span>
            <span>LARISSA BOVO</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<hr class="separator">

<!-- ========== SEÇÃO 13 — CTA FINAL ========== -->
<section class="final-cta" id="cta-final">
  <div class="container fade-in">
    <img src="logo-azul.svg" alt="Imersão Gênesis" class="section-logo">
    <h2>Antes de mudar a roupa… uma nova mulher começa a surgir.</h2>
    <p style="max-width:620px">Se você sente que está pronta para ser percebida como a mulher que se tornou… essa imersão é para você.</p>
    <span class="badge">04 de Julho de 2026 • 9:15h às 20h • Balneário Camboriú/SC</span>
    <br>
    <a href="#tabela-precos" class="btn btn--primary btn--large" style="margin-top:8px">
      <span class="btn__text">Quero viver a Imersão Gênesis</span>
      <span class="btn__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </span>
    </a>
  </div>
</section>
`;
})();
