# VICHE CANAO — Design Spec (Informativo + Catálogo)
Fecha: 2026-09-14 | Estado: Aprobado por usuario | Enfoque A

## 1. Contexto y objetivo
Crear página web escalable, fácilmente actualizable, que presente la marca y su catálogo y sirva como archivo vivo de la unidad productiva Delicias del Atrato (Boca de Amé, Medio Atrato, Chocó).

Marca: Viche CANAO, destilado ancestral del Pacífico colombiano. Elaborado por Oswaldo Martínez Chaverra y su hija Liseth Martínez, legado de +20-35 años heredado del padre. Empresa asociativa mayoritariamente mujeres campesinas cabeza de hogar; nombres en botella. Productos: Puro cristalino, Dorado ámbar, Vinete (canela, nuez moscada). Fermentación 8-15 días, trapiche, alambique tradicional. Patrimonio colectivo Ley 2158 de 2021. Aroma silvestre, fresco, plantas recién cortadas, sutil y balanceado.

Recursos actuales: `Recrusos/CANAO X PENUMBRA-*/` (~100 fotos) + `Recrusos/BOCA DE AMÉ JUAN SILVA-*/`. Sin código previo, sin git. Instagram `viche_canao` no accesible sin login; contexto obtenido de web.

Objetivos medibles: LCP <2.5s móvil, Lighthouse ≥95, edición sin código en /admin, ES día 1 + estructura EN fase 2, SEO estándar + analítica privada, entrega en ~15 días hábiles.

## 2. Decisiones aprobadas
- Stack: Astro SSG + Tailwind + Decap CMS + Cloudflare Pages (no WordPress/Divi/Namecheap).
- Alcance: Informativo + catálogo, sin e-commerce. Pedido vía WhatsApp.
- Idioma: ES ahora, EN fase 2 (i18n nativo, sin plugin pago).
- CMS: Decap CMS + Markdown en `src/content/`.
- Estilo: Ancestral premium oscuro.

## 3. Arquitectura
SSG, 0 JS por defecto, islands solo para menú móvil, galería/lightbox y reveal.

```
src/pages/ index.astro, historia.astro, proceso.astro, catalogo/index.astro, catalogo/[slug].astro, archivo/index.astro, archivo/[slug].astro, contacto.astro, 404.astro
src/content/ productos/*.md, historias/*.md, paginas/*.md (Zod schema)
src/components/ Hero, TimelineProceso, FichaProducto, GridArchivo, Header, Footer, SEOHead, WhatsAppCTA
src/i18n/ es.json (en.json fase 2)
src/styles/ tokens + tailwind
public/admin/ config.yml Decap
public/ favicon, og-default.jpg
```

Contenido tipado con Content Collections + Zod. Imágenes vía `astro:assets` → AVIF, responsive, lazy. Rutas ES: `/`, `/historia`, `/proceso`, `/catalogo/[slug]`, `/archivo`.

## 4. Secciones y componentes
1. Hero: foto Penumbra full-bleed oscura, claim “Espíritu del pueblo negro — Boca de Amé”, sub “Destilado ancestral de caña por Delicias del Atrato”, CTAs Ver catálogo / WhatsApp. Nota +18.
2. Marca: Oswaldo + Liseth, relevo familiar, 20+ años, mujeres, nombres en botella. Fotos retrato.
3. Proceso: timeline 6 pasos — siembra/caña nativa, corte lunar, arrume/molienda trapiche, fermentación 8-15d, destilación alambique, embotellado. Cada paso foto + texto corto.
4. Catálogo (3 fichas): Puro cristalino (frutal, cítrico, ahumado), Dorado ámbar (suave aromático), Vinete (canela, nuez moscada). Campos: aroma, notas, usos, foto, CTA WhatsApp con mensaje prellenado.
5. Archivo vivo: grid historias/noticias (cosechas, ferias Petronio Álvarez, visitas). Editable.
6. Cultura/Legal: Ley 2158/2021 patrimonio colectivo, producción exclusiva afrocolombiana, consumo responsable.
7. Contacto/Footer: WhatsApp, Instagram, ubicación Quibdó/Chocó, créditos comunidad.

Aislamiento: cada componente una sola responsabilidad, props tipadas, sin dependencia de CMS para render.

## 5. Sistema de diseño (M3 + Tailwind Animations + Caveman)
- Colores: fondo `#0F0D0B`, superficie `#1A1512`, ámbar `#D9A441`, caña `#7FB069`, texto `#F5EFE6`, muted `#A89C8D`.
- Tipo: Fraunces (display serif artesanal) + Inter (cuerpo). Escala M3.
- Espaciado/radios M3, tarjetas elevadas, foco visible.
- Animaciones solo CSS: fade-up reveal, hover lift en fichas, ken-burns sutil en hero. Respeto `prefers-reduced-motion`.
- Móvil primero, AA contraste, teclado navegable, alt en todas las fotos.

## 6. Modelo de contenido (Decap)
`productos`: nombre, slug, tipo (puro/dorado/vinete), descripción corta, aroma, notas[], usos, foto, destacado bool, whatsapp_msg.
`historias`: título, slug, fecha, resumen, fotos[], cuerpo markdown.
`paginas`: historia, proceso (para edición textos largos sin código).
Validación Zod en build; si falta foto → placeholder + warning, no rompe build.

Flujo: familia edita en `/admin` → commit Markdown → rebuild Cloudflare (~1 min). Capacitación grabada incluida. Rollback por git.

## 7. SEO, i18n, analítica
- SEO: título/meta descripción/keywords por página, canonical, sitemap, robots, OG/Twitter, JSON-LD Organization + Product, semántica H1 único.
- i18n: `src/i18n/es.json` ahora; rutas `/en/` fase 2 sin duplicar componentes.
- Analítica: Cloudflare Web Analytics (sin cookies) + Search Console. Sin GA pesado.
- Performance budget (Addy Osmani): JS <100KB, imágenes AVIF <200KB c/u hero <400KB, LCP <2.5s 4G, CLS <0.1.

## 8. Error handling y calidad
- 404 personalizada +18 con links.
- Imágenes faltantes → placeholder; slug inválido → 404.
- Testing: `astro check`, Lighthouse CI ≥95 perf/a11y/SEO, revisión manual móvil 360px + desktop, links WhatsApp, formulario sin backend (mailto/WhatsApp).
- Accesibilidad: landmarks, labels, contraste, foco.

## 9. Deploy y costos
Cloudflare Pages (gratis, SSL gratis, preview por PR). Dominio .com en Cloudflare (~$10/año) vs Namecheap $6.50+$16.98 renovación + hosting $22.88→$48.88. Ahorro plugin bilingüe. Sin servidor que mantener. Dominio/hosting anual igual que propuesta pero más barato a largo plazo.

## 10. Plan 15 días hábiles
S1: base Astro + tokens + Hero + Historia. S2: Proceso + Catálogo + Decap + optimización fotos. S3: Archivo + Contacto + SEO/analytics + deploy + capacitación grabada.

Fuera de alcance V1: tienda/pagos, EN completo, blog complejo, multiusuario avanzado.

## 11. Inputs requeridos antes de implementar
- Número WhatsApp oficial (con código país) para CTAs.
- URL Instagram oficial + permiso uso fotos Penumbra / Juan Silva.
- Dominio final .com (¿nuevo en Cloudflare o ya comprado en Namecheap?).
- Textos finales ES (si no llegan en 1 mes, se entrega con placeholders según Términos).

## 12. Riesgos
- Contenido cliente >1 mes → entregar estructura con placeholders (según Términos propuesta).
- Fotos pesadas → compresión obligatoria en build.
- INVIMA/registro sanitario → solo informativo, sin promesas medicinales, +18 visible.
