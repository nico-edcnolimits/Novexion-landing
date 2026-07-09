import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "preview-cliente", "index.html");

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novexion Q16-H3 — Vista Previa para Aprobación</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    :root {
      --brand: #0A1F44;
      --brand-light: #0d2a5c;
      --accent: #1E90FF;
      --muted: #a9b4c9;
      --text: #e5eaf3;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: "Montserrat", system-ui, sans-serif;
      background: var(--brand);
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }
    img { display: block; max-width: 100%; }
    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; cursor: pointer; }

    .approval-banner {
      position: sticky; top: 0; z-index: 100;
      background: linear-gradient(90deg, #ff6b35, #f7931e);
      color: #fff; text-align: center;
      padding: 10px 16px; font-size: 13px; font-weight: 700;
      letter-spacing: 0.02em;
    }
    .approval-banner span { opacity: 0.9; font-weight: 500; }

    .trust-bar {
      background: var(--brand); height: 32px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 64px; font-size: 12px;
    }
    .trust-bar nav { display: flex; gap: 16px; align-items: center; }
    .trust-bar .sep { color: rgba(255,255,255,0.3); }

    .main-nav {
      background: #fff; height: 80px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 64px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      position: sticky; top: 42px; z-index: 50;
    }
    .logo { font-size: 22px; font-weight: 900; letter-spacing: -0.03em; color: var(--brand); }
    .logo i { color: var(--accent); font-style: normal; }
    .logo-tag { color: #9ca3af; font-size: 13px; font-weight: 500; margin-left: 12px; padding-left: 12px; border-left: 1px solid #e5e7eb; }
    .nav-links { display: flex; gap: 24px; list-style: none; }
    .nav-links a { color: #000; font-size: 14px; font-weight: 500; }
    .nav-links a:hover { color: #666; }
    .nav-right { display: flex; align-items: center; gap: 16px; }
    .nav-icon { width: 20px; height: 20px; color: #000; }

    .sub-nav {
      background: var(--brand-light); height: 46px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 64px; position: sticky; top: 122px; z-index: 40;
    }
    .sub-nav-title { font-size: 14px; font-weight: 700; letter-spacing: -0.04em; }
    .sub-tabs { display: flex; gap: 32px; height: 100%; align-items: center; }
    .sub-tabs a {
      font-size: 14px; font-weight: 500; height: 100%;
      display: flex; align-items: center; position: relative;
    }
    .sub-tabs a.active::after {
      content: ""; position: absolute; bottom: 0; left: 0; right: 0;
      height: 2px; background: var(--accent);
    }
    .btn {
      display: inline-flex; align-items: center; justify-content: center;
      font-weight: 700; border-radius: 24px; transition: opacity 0.2s;
      border: none; white-space: nowrap;
    }
    .btn:hover { opacity: 0.9; }
    .btn-primary { background: var(--accent); color: #fff; padding: 12px 24px; font-size: 16px; border: 1.5px solid var(--accent); }
    .btn-outline { background: transparent; color: #fff; padding: 12px 24px; font-size: 16px; border: 1.5px solid #fff; }
    .btn-sm { padding: 10px 20px; font-size: 14px; }
    .btn-white { background: #fff; color: var(--brand); padding: 8px 20px; font-size: 14px; }

    .section { background: var(--brand); }
    .section-alt { background: #071531; }
    .container { max-width: 1200px; margin: 0 auto; }
    .text-center { text-align: center; }
    .text-muted { color: var(--muted); }
    .eyebrow { font-size: 14px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
    .h1 { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.1; letter-spacing: -0.03em; }
    .h2 { font-size: clamp(32px, 4vw, 48px); font-weight: 800; line-height: 1.2; }
    .h3 { font-size: 28px; font-weight: 700; }
    .lead { font-size: 18px; line-height: 1.6; color: var(--muted); }
    .small { font-size: 14px; }
    .placeholder-note { font-size: 11px; font-style: italic; color: var(--muted); margin-top: 12px; }

    .hero {
      position: relative; min-height: calc(100vh - 126px); overflow: hidden;
    }
    .hero-bg { position: absolute; inset: 0; }
    .hero-bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
    .hero-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent);
    }
    .hero-content {
      position: absolute; top: 50%; transform: translateY(-50%);
      left: 64px; max-width: 560px; display: flex; flex-direction: column; gap: 24px;
    }
    .hero-badges {
      position: absolute; bottom: 32px; left: 64px; right: 64px;
      display: flex; flex-wrap: wrap; gap: 32px 32px;
    }
    .badge { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; }
    .badge svg { width: 20px; height: 20px; flex-shrink: 0; }

    .media-wrap { position: relative; overflow: hidden; }
    .media-wrap img { width: 100%; height: 100%; object-fit: cover; }
    .media-wrap.fill { position: absolute; inset: 0; }
    .ph-tag {
      position: absolute; top: 8px; left: 8px;
      background: var(--accent); color: #fff;
      font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px;
    }

    .audiences { padding: 32px 64px; display: flex; flex-direction: column; align-items: center; gap: 24px; }
    .audiences-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; }
    .audience { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 600; }
    .audience svg { color: var(--accent); width: 22px; height: 22px; }

    .guarantee-big { font-size: clamp(120px, 20vw, 200px); font-weight: 900; line-height: 1; }
    .guarantee-sub { font-size: clamp(36px, 6vw, 60px); font-weight: 900; margin-top: -16px; }
    .glow {
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(30,144,255,0.25), transparent 70%);
    }

    .cards-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; max-width: 1100px; width: 100%; }
    .card {
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
      border-radius: 16px; padding: 24px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .card h4 { font-size: 18px; font-weight: 700; white-space: pre-line; }
    .card p { color: var(--muted); font-size: 13px; margin-top: 4px; }

    .power-grid {
      display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 16px; max-width: 1200px; margin: 0 auto;
    }
    .feature-card {
      border-radius: 16px; overflow: hidden;
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
    }
    .feature-card .img { height: 280px; position: relative; }
    .feature-card .body { padding: 20px; }
    .feature-card h4 { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
    .feature-card p { color: var(--muted); font-size: 14px; }
    .chip-card {
      border-radius: 16px; min-height: 580px; padding: 40px 24px;
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .chip-card .img { width: 100%; height: 320px; position: relative; margin-bottom: 24px; }
    .chip-card p { text-align: center; font-size: 20px; font-weight: 700; line-height: 1.4; }

    .kits { display: flex; gap: 40px; max-width: 1200px; margin: 0 auto; align-items: flex-start; }
    .kit { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; }
    .kit-img { width: 100%; max-width: 380px; aspect-ratio: 1; position: relative; margin-bottom: 24px; border-radius: 12px; overflow: hidden; }
    .kit ul { list-style: none; text-align: left; max-width: 300px; margin: 16px 0; }
    .kit li { display: flex; gap: 8px; align-items: flex-start; margin-bottom: 8px; font-size: 14px; color: var(--text); }
    .kit li svg { color: var(--accent); flex-shrink: 0; margin-top: 3px; }
    .divider-v { width: 1px; background: rgba(255,255,255,0.1); align-self: stretch; }

    .steps-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; max-width: 1200px; margin: 0 auto; }
    .step-col { padding: 0 40px; }
    .step-col:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.1); }
    .step-icon { width: 64px; height: 64px; position: relative; margin-bottom: 24px; border-radius: 8px; overflow: hidden; }
    .step-col.center { text-align: center; }
    .big-num { font-size: 72px; font-weight: 900; color: var(--accent); line-height: 1; }

    .ba-block { padding: 80px 24px; }
    .ba-heading { font-size: clamp(24px, 3vw, 36px); font-weight: 700; text-align: center; max-width: 700px; margin: 0 auto 48px; line-height: 1.25; }
    .ba-row { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; gap: 16px; }
    .ba-cards { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .ba-card {
      position: relative; min-height: 320px; border-radius: 16px; overflow: hidden;
      border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.3s;
    }
    .ba-card.active { border-color: rgba(30,144,255,0.6); transform: scale(1.01); }
    .ba-card.inactive { opacity: 0.8; }
    .ba-card.before { background: linear-gradient(135deg, #0d2a5c, #071531); }
    .ba-card .content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 24px; }
    .ba-card .content.overlay { background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); }
    .pill { display: inline-block; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px; }
    .pill-gray { background: rgba(255,255,255,0.2); }
    .pill-blue { background: var(--accent); color: #000; }
    .ba-arrow {
      width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.3);
      background: transparent; color: #fff; font-size: 20px; flex-shrink: 0;
    }
    .ba-arrow.active { border-color: var(--accent); color: var(--accent); }

    .split { display: flex; flex-wrap: wrap; min-height: 520px; }
    .split > * { flex: 1; min-width: 280px; }
    .split-img { position: relative; min-height: 400px; }
    .split-text { display: flex; flex-direction: column; justify-content: center; padding: 64px 48px; }

    .toggle {
      display: inline-flex; border-radius: 999px; overflow: hidden;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .toggle button {
      padding: 12px 24px; font-size: 14px; font-weight: 600;
      background: transparent; color: var(--muted); border: none;
    }
    .toggle button.active { background: var(--accent); color: #000; }
    .toggle button.active-alt { background: rgba(255,255,255,0.1); color: #fff; }

    .bar-row { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; }
    .bar-label { width: 160px; font-size: 14px; flex-shrink: 0; }
    .bar-track { flex: 1; height: 8px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 999px; }

    .features-scroll { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 16px; }
    .feat-card {
      flex: 0 0 340px; height: 280px; border-radius: 16px; overflow: hidden;
      border: 1px solid rgba(255,255,255,0.1); position: relative;
    }
    .feat-card .overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3), transparent);
    }
    .feat-card .info { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; }

    .cmd-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; max-width: 800px; margin: 0 auto; }
    .cmd-pill {
      padding: 10px 20px; border-radius: 999px; border: 1px solid #fff;
      font-size: 14px; font-weight: 500;
    }

    .voice-pills { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
    .voice-pill {
      padding: 8px 16px; border-radius: 999px; font-size: 14px; font-weight: 600;
      border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.05);
    }
    .voice-pill.active { background: var(--accent); border-color: var(--accent); color: #000; }

    .compare-circle {
      width: 80px; height: 80px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 14px; text-align: center; padding: 8px;
    }

    footer { padding: 60px 64px 40px; }
    .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 40px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .footer-grid h5 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 20px; }
    .footer-grid ul { list-style: none; }
    .footer-grid li { margin-bottom: 8px; }
    .footer-grid a { font-size: 14px; color: var(--muted); }
    .footer-grid a:hover { color: #fff; }
    .footer-bottom { padding-top: 24px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 24px; font-size: 12px; color: var(--muted); }
    .pay-badges { display: flex; flex-wrap: wrap; gap: 4px; }
    .pay-badge {
      height: 24px; padding: 0 8px; font-size: 9px; font-weight: 600;
      border: 1px solid rgba(255,255,255,0.2); border-radius: 4px;
      display: flex; align-items: center; color: rgba(255,255,255,0.6);
    }
    .policy-links { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
    .policy-links .sep { color: rgba(255,255,255,0.2); }

    .py-section { padding: 80px 64px; }
    .py-lg { padding: 80px 32px; }

    @media (max-width: 1024px) {
      .trust-bar, .main-nav, .sub-nav, .hero-content, .hero-badges, .py-section, footer { padding-left: 24px; padding-right: 24px; }
      .trust-bar { flex-direction: column; height: auto; padding: 8px 24px; gap: 4px; }
      .nav-links { display: none; }
      .sub-tabs { display: none; }
      .power-grid { grid-template-columns: 1fr; }
      .steps-3 { grid-template-columns: 1fr; }
      .step-col { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 24px 0; }
      .kits { flex-direction: column; }
      .divider-v { display: none; }
      .ba-cards { grid-template-columns: 1fr; }
      .hero-content { left: 24px; right: 24px; max-width: none; }
    }
  </style>
</head>
<body>

  <div class="approval-banner">
    VISTA PREVIA PARA APROBACIÓN DEL CLIENTE
    <span> — Borrador de diseño Novexion · Abrí este archivo en Chrome o Edge · ${new Date().toLocaleDateString("es-AR")}</span>
  </div>

  <!-- NAV -->
  <header>
    <div class="trust-bar">
      <nav>
        <span>Envío a todo el país</span><span class="sep">|</span>
        <span>Cuotas sin interés con Mercado Pago</span><span class="sep">|</span>
        <span>Garantía 6 meses</span>
      </nav>
      <span>Compra Protegida Mercado Libre</span>
    </div>
    <nav class="main-nav">
      <div style="display:flex;align-items:center;">
        <a href="#" class="logo">NOVEX<span><i>I</i></span>ON</a>
        <span class="logo-tag">Traductor con IA</span>
      </div>
      <ul class="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#thus">Cómo Funciona</a></li>
        <li><a href="#testimonios">Testimonios</a></li>
        <li><a href="#kits">Kits y Precios</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
      </ul>
      <div class="nav-right">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <a href="#kits" class="btn btn-primary btn-sm">Comprar Ahora</a>
      </div>
    </nav>
    <div class="sub-nav">
      <span class="sub-nav-title">Novexion Q16-H3 — Traductor con IA</span>
      <nav class="sub-tabs">
        <a href="#overview" class="active">Resumen</a>
        <a href="#thus">Cómo Funciona</a>
        <a href="#specs">Specs</a>
      </nav>
      <a href="#kits" class="btn btn-white">Comprar Ahora</a>
    </div>
  </header>

  <main id="overview">

    <!-- HERO -->
    <section class="hero section">
      <div class="hero-bg media-wrap fill">
        <img src="images/novexion/hero-driver.webp" alt="Chofer usando Novexion" onerror="this.src='images/novexion/hero-product.svg'" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="small" style="opacity:0.9;">NOVEXION · Traductor con IA en tiempo real</p>
        <h1 class="h1">Cada Cliente Que No<br>Entendés Es Una Venta Que Se Va</h1>
        <p class="small" style="font-weight:500;">No necesitás hablar perfecto. Necesitás entender y responder — al instante, en +140 idiomas.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="#kits" class="btn btn-primary">Comprar Ahora</a>
          <a href="#thus" class="btn btn-outline">Ver Cómo Funciona</a>
        </div>
      </div>
      <div class="hero-badges">
        <div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>+140 idiomas</div>
        <div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Garantía 6 meses</div>
        <div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>Envío a todo el país</div>
        <div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>Compra Protegida Mercado Libre</div>
      </div>
    </section>

    <!-- AUDIENCES -->
    <section class="section audiences">
      <p class="text-muted small" style="font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Pensado para quienes hablan con turistas todos los días</p>
      <div class="audiences-row">
        <div class="audience"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H9c-.6 0-1.1.2-1.5.5L4.2 10.2c-.3.3-.5.7-.5 1.1V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>Choferes y Traslados</div>
        <div class="audience"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>Hotelería y Airbnb</div>
        <div class="audience"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>Comercios y Gastronomía</div>
        <div class="audience"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>Viajeros Frecuentes</div>
      </div>
    </section>

    <!-- GUARANTEE -->
    <section class="section py-section text-center">
      <h2 class="h2" style="max-width:700px;margin:0 auto;">Comprá Tranquilo:<br>Así Te Cubrimos</h2>
      <p class="text-muted lead" style="max-width:560px;margin:24px auto 0;">Compra 100% protegida por Mercado Libre, garantía oficial de Novexion y soporte en español por WhatsApp.</p>
      <div style="position:relative;margin:48px 0 40px;">
        <div class="glow"></div>
        <div class="guarantee-big">6</div>
        <div class="guarantee-sub">Meses de Garantía</div>
      </div>
      <h3 class="h3">Tus 3 Respaldos al Comprar Novexion</h3>
      <div style="display:flex;gap:24px;justify-content:center;margin-top:12px;">
        <a href="#" style="color:var(--accent);font-size:14px;font-weight:500;">Cómo funciona la garantía &gt;</a>
        <a href="#" style="color:var(--accent);font-size:14px;font-weight:500;">Ver términos &gt;</a>
      </div>
      <div class="cards-3" style="margin:40px auto 0;">
        <div class="card"><div><h4>Garantía\nOficial Novexion</h4><p>6 meses contra defectos de fábrica</p></div><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
        <div class="card"><div><h4>Compra\nProtegida</h4><p>Mercado Libre te devuelve el dinero si algo sale mal</p></div><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg></div>
        <div class="card"><div><h4>Cuotas\nSin Interés</h4><p>Pagalo con Mercado Pago, sin recargos</p></div><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
      </div>
    </section>

    <!-- POWER GRID -->
    <section class="section py-section" id="specs">
      <div class="text-center" style="margin-bottom:48px;">
        <h2 class="h2" style="margin-bottom:16px;">Un Motor de Traducción Hecho para Conversar</h2>
        <p class="lead">IA en el auricular — cuatro funciones que cambian cómo te comunicás</p>
      </div>
      <div class="power-grid">
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div class="feature-card"><div class="img media-wrap"><img src="images/novexion/feature-realtime.svg" alt="Traducción instantánea" /><span class="ph-tag">PLACEHOLDER</span></div><div class="body"><h4>Traducción Instantánea</h4><p>Hablás, y la otra persona te entiende al instante, en +140 idiomas</p></div></div>
          <div class="feature-card"><div class="img media-wrap"><img src="images/novexion/feature-facetoface.svg" alt="Modo cara a cara" /><span class="ph-tag">PLACEHOLDER</span></div><div class="body"><h4>Modo Cara a Cara y Altavoz</h4><p>Elegí cómo traducir: charla uno a uno o varias personas escuchando</p></div></div>
        </div>
        <div class="chip-card">
          <div class="img media-wrap"><img src="images/novexion/product-chip.svg" alt="Motor IA" /><span class="ph-tag">PLACEHOLDER</span></div>
          <p>Motor de Traducción IA en Tiempo Real: procesa tu voz y la traduce en milisegundos, directo en el auricular</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div class="feature-card"><div class="img media-wrap"><img src="images/novexion/feature-openear.svg" alt="Open-ear" /><span class="ph-tag">PLACEHOLDER</span></div><div class="body"><h4>Diseño Open-Ear</h4><p>Cómodo todo el día, sin taparte el oído del todo</p></div></div>
          <div class="feature-card"><div class="img media-wrap"><img src="images/novexion/feature-bluetooth.svg" alt="Bluetooth" /><span class="ph-tag">PLACEHOLDER</span></div><div class="body"><h4>Bluetooth 5.4</h4><p>Conexión rápida y estable con tu celular</p></div></div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section" id="testimonios" style="min-height:70vh;">
      <div class="py-lg text-center">
        <h2 class="h2" style="max-width:800px;margin:0 auto 16px;">Lo Que Dicen los Que Ya Lo Usan Todos los Días</h2>
        <p class="lead" style="margin-bottom:32px;">Historias reales de gente que vive del contacto con turistas</p>
        <blockquote style="font-size:24px;font-weight:600;max-width:700px;margin:0 auto 16px;line-height:1.4;">&ldquo;Antes tenía complicaciones para ofrecer bien mi servicio. Con Novexion aumenté considerablemente mis ventas.&rdquo;</blockquote>
        <p class="text-muted small">— Diego, conductor de traslados, Buenos Aires</p>
        <p class="placeholder-note" style="max-width:500px;margin:8px auto 32px;">Testimonio adaptado del relevamiento de mercado. PLACEHOLDER: reemplazar por testimonio real verificado.</p>
        <a href="#thus" class="btn" style="background:#fff;color:var(--brand);padding:14px 32px;border-radius:24px;font-weight:700;display:inline-block;margin-bottom:48px;">Descubrí Cómo Funciona</a>
      </div>
      <div style="max-width:900px;margin:0 auto;aspect-ratio:900/600;position:relative;" class="media-wrap">
        <img src="images/novexion/usecase-driver.svg" alt="Testimonio chofer" />
        <span class="ph-tag">PLACEHOLDER</span>
      </div>
    </section>

    <!-- KITS -->
    <section class="section py-section" id="kits">
      <h2 class="h2 text-center" style="margin-bottom:12px;">Elegí Tu Kit Novexion</h2>
      <p class="text-muted text-center" style="max-width:600px;margin:0 auto 48px;">Mismo hardware Q16-H3, distinto armado según lo uses vos o tu negocio</p>
      <div class="kits">
        <div class="kit">
          <div class="kit-img media-wrap"><img src="images/novexion/product-main.svg" alt="Kit Individual" /><span class="ph-tag">PLACEHOLDER</span></div>
          <p class="text-muted small">Ideal para vos</p>
          <h3 style="font-size:24px;font-weight:700;margin:10px 0 16px;">Kit Individual</h3>
          <ul>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>1 auricular traductor Novexion Q16-H3</li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>Estuche con pantalla LCD</li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>Cable de carga</li>
          </ul>
          <button class="btn btn-primary btn-sm">Comprar Kit Individual</button>
        </div>
        <div class="divider-v"></div>
        <div class="kit">
          <div class="kit-img media-wrap"><img src="images/novexion/product-black.svg" alt="Kit Profesional" /><span class="ph-tag">PLACEHOLDER</span></div>
          <p class="text-muted small">Ideal para choferes, hotelería y comercios</p>
          <h3 style="font-size:24px;font-weight:700;margin:10px 0 16px;">Kit Profesional</h3>
          <ul>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>2 auriculares traductores Novexion Q16-H3</li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>Estuche con pantalla LCD por unidad</li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>Funda protectora extra</li>
            <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>Garantía extendida</li>
          </ul>
          <p class="placeholder-note" style="margin-bottom:16px;">PLACEHOLDER: confirmar contenido y precio del Kit Profesional.</p>
          <button class="btn btn-primary btn-sm">Comprar Kit Profesional</button>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section" id="thus" style="position:relative;min-height:60vh;display:flex;align-items:center;justify-content:center;overflow:hidden;">
      <div class="media-wrap fill" style="position:absolute;inset:0;opacity:0.6;"><img src="images/novexion/translation-bg.svg" alt="" style="width:100%;height:100%;object-fit:cover;" /></div>
      <div style="position:absolute;inset:0;background:rgba(10,31,68,0.5);"></div>
      <div class="text-center" style="position:relative;z-index:1;padding:80px 32px;max-width:800px;">
        <p class="eyebrow" style="margin-bottom:20px;">Tecnología Novexion IA</p>
        <h2 class="h1" style="margin-bottom:20px;">Tu Voz, Traducida al Instante</h2>
        <p class="lead" style="margin-bottom:40px;">Un motor de traducción por IA que entiende, traduce y responde<br>sin que tengas que mirar la pantalla del celular</p>
        <button class="btn btn-outline">Ver Video Demostrativo</button>
        <p class="placeholder-note">PLACEHOLDER: sumar video real demostrando el producto en uso.</p>
      </div>
    </section>

    <section class="section py-section">
      <div class="steps-3">
        <div class="step-col">
          <div class="step-icon media-wrap"><img src="images/novexion/step-listen.svg" alt="Escuchás" /></div>
          <h3 style="font-size:22px;font-weight:700;">Escuchás</h3>
          <p class="text-muted small" style="font-weight:500;margin:4px 0 16px;">Micrófonos de Alta Sensibilidad</p>
          <p class="text-muted small" style="line-height:1.7;">El auricular capta la voz de la otra persona, incluso con ruido de fondo — sin que nadie tenga que gritar ni repetir.</p>
        </div>
        <div class="step-col center">
          <div class="big-num">+140</div>
          <p style="font-size:20px;font-weight:700;margin:4px 0 24px;">Idiomas Disponibles</p>
          <p class="text-muted small" style="line-height:1.7;">De Europa a Brasil, la IA cubre los idiomas de la mayoría de los turistas que llegan a Argentina.</p>
        </div>
        <div class="step-col">
          <div class="step-icon media-wrap"><img src="images/novexion/step-speak.svg" alt="Respondés" /></div>
          <h3 style="font-size:22px;font-weight:700;">Respondés</h3>
          <p class="text-muted small" style="font-weight:500;margin:4px 0 16px;">Traducción Clara y Natural</p>
          <p class="text-muted small" style="line-height:1.7;">La traducción se escucha directo en el oído, casi sin demora — la conversación sigue su ritmo.</p>
        </div>
      </div>
      <div class="text-center" style="margin-top:64px;">
        <a href="#specs" class="btn" style="background:#fff;color:var(--brand);padding:14px 32px;border-radius:24px;font-weight:700;display:inline-block;">+ Conocé Cómo Funciona la Traducción IA</a>
      </div>
    </section>

    <!-- CALL QUALITY -->
    <section class="section">
      <div class="py-lg text-center section-alt" style="min-height:560px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(to bottom,#071531,var(--brand));">
        <h2 class="h2" style="max-width:900px;margin-bottom:24px;">Hablá Cara a Cara. Que Te Entiendan Clara y Directamente.</h2>
        <h3 style="font-size:36px;font-weight:700;margin-bottom:20px;">Conversá Sin Barreras</h3>
        <p class="lead" style="max-width:600px;">Que te entiendan, aunque el idioma sea distinto — sin gritar, sin repetir.</p>
      </div>

      <div class="ba-block" data-ba="ba1">
        <p class="ba-heading">Andá directo al grano, sin el ida y vuelta incómodo del traductor de celular</p>
        <div class="ba-row">
          <button class="ba-arrow" data-side="before">&#8249;</button>
          <div class="ba-cards">
            <div class="ba-card before active" data-side="before">
              <div class="content"><span class="pill pill-gray">Antes</span><p style="font-weight:600;">Traductor de Celular</p><p class="text-muted small">Pantalla en la mano, mirás para abajo, se corta la conversación</p></div>
            </div>
            <div class="ba-card inactive" data-side="after">
              <div class="media-wrap fill"><img src="images/novexion/usecase-hotel.svg" alt="Con Novexion" /><span class="ph-tag">PLACEHOLDER</span></div>
              <div class="content overlay"><span class="pill pill-blue">Con Novexion</span><p style="font-weight:600;">Mirás a los ojos, escuchás la traducción en el oído</p></div>
            </div>
          </div>
          <button class="ba-arrow active" data-side="after">&#8250;</button>
        </div>
      </div>

      <div class="ba-block section-alt" data-ba="ba2">
        <p class="ba-heading">En un local con varios clientes extranjeros, activá el modo altavoz</p>
        <div class="ba-row">
          <button class="ba-arrow" data-side="before">&#8249;</button>
          <div class="ba-cards">
            <div class="ba-card before inactive" data-side="before">
              <div class="content"><span class="pill pill-gray">Antes</span><p style="font-weight:600;">Repetir y Señalar</p><p class="text-muted small">Explicás con señas, se pierde la venta</p></div>
            </div>
            <div class="ba-card active" data-side="after">
              <div class="media-wrap fill"><img src="images/novexion/usecase-shop.svg" alt="Modo altavoz" /><span class="ph-tag">PLACEHOLDER</span></div>
              <div class="content overlay"><span class="pill pill-blue">Con Novexion</span><p style="font-weight:600;">El auricular traduce en voz alta para que todos escuchen</p></div>
            </div>
          </div>
          <button class="ba-arrow active" data-side="after">&#8250;</button>
        </div>
      </div>
    </section>

    <!-- ANC / NOISE -->
    <section class="section">
      <div style="position:relative;min-height:640px;display:flex;flex-direction:column;justify-content:flex-end;">
        <div class="media-wrap fill"><img src="images/novexion/usecase-driver.svg" alt="Ruido calle" /><span class="ph-tag">PLACEHOLDER</span></div>
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.4),transparent);"></div>
        <div style="position:relative;z-index:1;padding:64px;max-width:640px;">
          <p class="eyebrow" style="color:#fff;letter-spacing:0.1em;margin-bottom:16px;">Escuchá Claro, Incluso en la Calle</p>
          <h2 class="h2">Que el Ruido No Te Corte <span style="display:block;">la Conversación.</span></h2>
        </div>
      </div>
      <div class="split">
        <div class="split-img media-wrap"><img src="images/novexion/translation-bg.svg" alt="Reducción ruido" /><span class="ph-tag">PLACEHOLDER</span></div>
        <div class="split-text">
          <h2 class="h2" style="font-size:40px;margin-bottom:12px;">Menos Ruido de Fondo, Más Conversación</h2>
          <h3 style="font-size:22px;font-weight:700;margin-bottom:24px;">Pensado para Ambientes Ruidosos</h3>
          <p class="text-muted lead" style="font-size:16px;">Diseñado para que la traducción se escuche clara aunque estés en la vereda, en el auto o en un local con música de fondo.</p>
          <div style="margin-top:40px;">
            <div class="bar-row"><span class="bar-label text-muted">Sin reducción de ruido</span><div class="bar-track"><div class="bar-fill" style="width:50%;background:rgba(255,255,255,0.3);"></div></div></div>
            <div class="bar-row"><span class="bar-label" style="font-weight:600;">Con Novexion</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:var(--accent);"></div></div></div>
            <p class="placeholder-note">Comparación ilustrativa. PLACEHOLDER: reemplazar por medición real si el fabricante la certifica.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SIGNATURE SOUND -->
    <section class="section">
      <div style="position:relative;min-height:600px;display:flex;align-items:center;justify-content:center;">
        <div class="media-wrap fill"><img src="images/novexion/product-main.svg" alt="Auricular" /><span class="ph-tag">PLACEHOLDER</span></div>
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.8));"></div>
        <h2 class="h2 text-center" style="position:relative;z-index:1;font-size:52px;"><span>Tu Traducción, </span><span style="opacity:0.4;">Con Voz Natural</span></h2>
      </div>
      <div class="section-alt py-section">
        <div class="container" style="display:flex;flex-wrap:wrap;gap:48px;align-items:center;">
          <div style="flex:1;min-width:280px;">
            <h2 class="h2" style="font-size:40px;margin-bottom:16px;">Elegí Cómo Suena tu Traductor</h2>
            <h3 style="font-size:24px;font-weight:700;color:var(--accent);margin-bottom:24px;">Ajustá Velocidad y Voz desde la App</h3>
            <p class="text-muted" style="line-height:1.7;">Elegí la voz, el idioma y la velocidad de traducción que mejor te sirva — encontrá tu configuración ideal en segundos.</p>
            <div class="voice-pills">
              <span class="voice-pill">Voz Femenina</span>
              <span class="voice-pill">Voz Masculina</span>
              <span class="voice-pill">Velocidad Normal</span>
              <span class="voice-pill">Velocidad Rápida</span>
              <span class="voice-pill active">Modo Claridad</span>
            </div>
            <p class="placeholder-note">PLACEHOLDER: confirmar opciones reales de la app.</p>
          </div>
          <div style="flex:1;min-width:280px;aspect-ratio:4/3;position:relative;" class="media-wrap"><img src="images/novexion/smart-case.svg" alt="App" /><span class="ph-tag">PLACEHOLDER</span></div>
        </div>
      </div>
    </section>

    <!-- VOICE CONTROL -->
    <section class="section">
      <div class="py-lg text-center section-alt" style="background:linear-gradient(to bottom,#071531,var(--brand));">
        <h2 class="h2" style="margin-bottom:16px;">Control Táctil, Sin Mirar el Celular</h2>
        <p class="lead" style="max-width:600px;margin:0 auto;">Manos libres, aunque estés manejando o atendiendo un cliente</p>
      </div>
      <div class="split">
        <div class="split-img media-wrap" style="min-height:400px;"><img src="images/novexion/hands-free.svg" alt="Control táctil" /><span class="ph-tag">PLACEHOLDER</span></div>
        <div class="split-text">
          <h2 class="h2" style="font-size:40px;margin-bottom:16px;">Un Toque, Sin Vueltas</h2>
          <p class="text-muted" style="line-height:1.7;margin-bottom:32px;">Controles táctiles directo en el auricular. No hace falta sacar el celular ni abrir ninguna app.</p>
          <div class="card" style="flex-direction:column;align-items:stretch;">
            <p class="text-center small" style="font-weight:600;margin-bottom:20px;">Para Activar la Traducción</p>
            <div style="display:flex;align-items:center;justify-content:space-around;gap:24px;">
              <div style="text-align:center;"><div class="compare-circle" style="border:2px solid var(--accent);color:var(--accent);">1 Toque</div><p class="small" style="margin-top:8px;font-weight:600;">Novexion</p></div>
              <span class="text-muted" style="font-weight:700;">vs</span>
              <div style="text-align:center;"><div class="compare-circle" style="border:2px dashed rgba(255,255,255,0.3);font-size:12px;">Sacar Celular + App</div><p class="text-muted small" style="margin-top:8px;font-weight:600;">Traductor de Celular</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-alt py-lg text-center">
        <h2 class="h2" style="margin-bottom:48px;">Todo Bajo Control</h2>
        <div class="cmd-pills">
          <span class="cmd-pill">Iniciar Traducción</span>
          <span class="cmd-pill">Cambiar Idioma</span>
          <span class="cmd-pill">Modo Altavoz</span>
          <span class="cmd-pill">Subir/Bajar Volumen</span>
          <span class="cmd-pill">Ver Batería</span>
          <span class="cmd-pill">Repetir Traducción</span>
        </div>
        <p class="placeholder-note">PLACEHOLDER: confirmar gestos táctiles reales del Q16-H3.</p>
      </div>
    </section>

    <!-- SCREEN / CASE -->
    <section class="section py-lg text-center">
      <h2 class="h2" style="font-size:52px;">Mirá. Tocá. Traducido.</h2>
      <p style="font-size:30px;margin-top:16px;">Pantalla LCD en el Estuche</p>
      <p class="text-muted lead" style="max-width:560px;margin:24px auto 0;">El texto de la traducción aparece en la pantalla del estuche. Mostráselo a la otra persona cuando haga falta.</p>
      <div style="max-width:800px;margin:40px auto 0;aspect-ratio:800/600;position:relative;" class="media-wrap"><img src="images/novexion/smart-case.svg" alt="Estuche LCD" /><span class="ph-tag">PLACEHOLDER</span></div>
      <div class="container" style="display:flex;flex-wrap:wrap;gap:64px;align-items:center;margin-top:80px;text-align:left;">
        <div style="flex:1;min-width:280px;">
          <h2 class="h2">Control Simple, Resultado Profesional</h2>
          <p class="text-muted lead" style="margin-top:24px;">La pantalla no es solo para mirar la hora: mostrá la traducción, cambiá de idioma y controlá el volumen, todo desde el estuche.</p>
        </div>
        <div style="flex:1;min-width:280px;aspect-ratio:6/5;position:relative;" class="media-wrap"><img src="images/novexion/smart-case.svg" alt="Closeup LCD" /><span class="ph-tag">PLACEHOLDER</span></div>
      </div>
    </section>

    <!-- APP HISTORY -->
    <section class="section py-lg text-center">
      <h2 class="h2" style="font-size:52px;">Traducís. La App Guarda Todo.</h2>
      <p class="placeholder-note" style="max-width:700px;margin:12px auto 0;">PLACEHOLDER: confirmar si la app guarda historial — si no existe, reemplazar por FAQ.</p>
      <div class="container" style="display:flex;flex-wrap:wrap;gap:64px;align-items:center;margin-top:64px;text-align:left;">
        <div style="flex:1;min-width:280px;">
          <h2 class="h2" style="font-size:40px;">No Perdés Ninguna Conversación Importante</h2>
          <p style="margin-top:16px;">Charla terminada. Todo quedó guardado en la app:</p>
          <ul style="margin-top:16px;list-style:none;line-height:2;">
            <li>· Historial de traducciones.</li>
            <li>· Frases frecuentes guardadas para reutilizar.</li>
          </ul>
        </div>
        <div style="flex:1;min-width:280px;aspect-ratio:6/5;position:relative;" class="media-wrap"><img src="images/novexion/specs-infographic.svg" alt="App historial" /><span class="ph-tag">PLACEHOLDER</span></div>
      </div>
      <div style="margin-top:80px;">
        <h2 class="h2" style="font-size:40px;">Tu Conversación, Segura</h2>
        <p class="text-muted lead" style="max-width:600px;margin:24px auto 0;">La traducción se procesa para que puedas usarla al instante, sin exponer tus conversaciones a terceros.</p>
      </div>
    </section>

    <!-- MORE FEATURES -->
    <section class="section py-section">
      <h2 class="h2 text-center">Más Funciones Novexion</h2>
      <p class="text-muted text-center small" style="margin-top:12px;">Todo lo que necesitás saber sobre tu Novexion Q16-H3.</p>
      <div class="features-scroll" style="margin-top:48px;">
        <div class="feat-card"><div class="media-wrap fill"><img src="images/novexion/feature-realtime.svg" alt="" /></div><div class="overlay"></div><div class="info"><p style="font-weight:700;font-size:18px;">+140 Idiomas</p><p class="text-muted small">Traducí con turistas de casi cualquier país.</p></div></div>
        <div class="feat-card"><div class="media-wrap fill"><img src="images/novexion/product-main.svg" alt="" /></div><div class="overlay"></div><div class="info"><p style="font-weight:700;font-size:18px;">Batería de Larga Duración</p><p class="text-muted small">Hasta 8-10 hs de uso continuo</p></div></div>
        <div class="feat-card" style="background:rgba(255,255,255,0.04);"><div class="info" style="position:static;padding:24px;height:100%;display:flex;flex-direction:column;justify-content:flex-end;"><p style="font-weight:700;font-size:18px;">Bluetooth 5.4</p><p class="text-muted small">Conexión rápida y estable con tu celular.</p></div></div>
        <div class="feat-card" style="background:rgba(255,255,255,0.04);"><div class="info" style="position:static;padding:24px;height:100%;display:flex;flex-direction:column;justify-content:flex-end;"><p style="font-weight:700;font-size:18px;">Modo Cara a Cara y Altavoz</p><p class="text-muted small">Elegí cómo traducir según la situación.</p></div></div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="section py-lg text-center">
      <h2 class="h2">Empezá a Entender Todo, Hoy</h2>
      <p class="text-muted lead" style="max-width:560px;margin:16px auto 0;">Elegí tu Kit Novexion y sumá el traductor con IA que te hace ganar tiempo, plata y confianza en cada conversación.</p>
      <div style="max-width:1100px;margin:40px auto 0;aspect-ratio:1100/600;position:relative;" class="media-wrap"><img src="images/novexion/hero-product.svg" alt="Kits finales" /><span class="ph-tag">PLACEHOLDER</span></div>
      <a href="#kits" class="btn btn-primary" style="margin-top:40px;padding:16px 48px;font-size:18px;">Comprar Ahora</a>
    </section>

    <!-- FAQ placeholder -->
    <section class="section-alt py-section text-center" id="faq">
      <h2 class="h2" style="margin-bottom:24px;">Preguntas Frecuentes</h2>
      <p class="text-muted lead" style="max-width:600px;margin:0 auto;">Sección en desarrollo — se completará con las preguntas más comunes antes del lanzamiento en Tiendanube.</p>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="section">
    <div class="container">
      <div class="footer-grid">
        <div><p style="font-size:20px;font-weight:800;margin-bottom:20px;">NOVEXION</p><ul><li><a href="#">Sobre Novexion</a></li><li><a href="#">Garantía</a></li><li><a href="#faq">Preguntas Frecuentes</a></li></ul></div>
        <div><h5>Producto</h5><ul><li><a href="#kits">Novexion Q16-H3</a></li><li><a href="#kits">Kit Individual</a></li><li><a href="#kits">Kit Profesional</a></li></ul></div>
        <div><h5>Ayuda</h5><ul><li><a href="#faq">Preguntas Frecuentes</a></li><li><a href="#">Cómo Funciona la Garantía</a></li><li><a href="#">Política de Envíos</a></li><li><a href="#">Cambios y Devoluciones</a></li></ul></div>
        <div><h5>Comunidad</h5><ul><li><a href="#">Reseñas de Clientes</a></li><li><a href="#">Comprá en Mercado Libre</a></li></ul><h5 style="margin-top:32px;">Consultanos</h5><a href="#" style="display:block;font-size:12px;color:var(--muted);border:1px solid rgba(255,255,255,0.2);border-radius:8px;padding:8px 12px;margin-top:12px;">Escribinos por WhatsApp</a></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:32px 0;border-bottom:1px solid rgba(255,255,255,0.1);flex-wrap:wrap;gap:16px;">
        <div style="display:flex;gap:20px;color:var(--muted);">
          <span>Instagram</span><span>Facebook</span><span>WhatsApp</span>
        </div>
        <span class="text-muted small">Envíos a todo el país — Argentina</span>
      </div>
      <div class="footer-bottom">
        <p>© Novexion 2026. Todos los derechos reservados.</p>
        <div class="pay-badges">
          <span class="pay-badge">Mercado Pago</span><span class="pay-badge">Visa</span><span class="pay-badge">Mastercard</span><span class="pay-badge">Cuotas</span>
        </div>
        <div class="policy-links">
          <a href="#faq">Preguntas Frecuentes</a><span class="sep">|</span>
          <a href="#">Política de Envíos</a><span class="sep">|</span>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    document.querySelectorAll('[data-ba]').forEach(block => {
      const cards = block.querySelectorAll('.ba-card');
      const arrows = block.querySelectorAll('.ba-arrow');
      function activate(side) {
        cards.forEach(c => {
          const isActive = c.dataset.side === side;
          c.classList.toggle('active', isActive);
          c.classList.toggle('inactive', !isActive);
        });
        arrows.forEach(a => {
          a.classList.toggle('active', a.dataset.side === side);
        });
      }
      cards.forEach(c => c.addEventListener('click', () => activate(c.dataset.side)));
      arrows.forEach(a => a.addEventListener('click', () => activate(a.dataset.side)));
    });
  </script>
</body>
</html>`;

writeFileSync(outPath, html, "utf8");
console.log(`Preview generado: ${outPath}`);
