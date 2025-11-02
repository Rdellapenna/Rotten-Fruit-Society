/* Rotten Fruit Society - Mobile-Friendly Dark Theme */

:root {
  --bg: #0b0b0b;
  --bg-alt: #121212;
  --fg: #eaeaea;
  --muted: #a5a5a5;
  --accent: #9cf23a;
  --border: #262626;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

a {
  color: var(--fg);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  width: min(1100px, 92vw);
  margin: 0 auto;
}

.site-header {
  background: rgba(11,11,11,0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--fg);
  padding: .4rem .6rem;
  border-radius: 6px;
}

.btn {
  background: var(--accent);
  color: #0b0b0b;
  padding: .7rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  display: inline-block;
  border: none;
}

.btn:hover {
  filter: brightness(1.1);
}

.btn.ghost {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--fg);
}

.btn.small {
  padding: .4rem .7rem;
  font-size: .9rem;
}

/* HERO SECTION */
.hero {
  padding: 4rem 0 2rem;
  background: radial-gradient(900px 400px at 70% 0%, rgba(156,242,58,0.08), transparent 70%);
  text-align: center;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.8rem);
  line-height: 1.1;
  margin-bottom: .8rem;
}

.hero .lead {
  color: var(--muted);
  max-width: 65ch;
  margin: 0 auto 1.5rem;
  font-size: 1.1rem;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .8rem;
  margin-bottom: 2rem;
}

/* SECTIONS */
.section {
  padding: 3rem 0;
}

.section--alt {
  background: var(--bg-alt);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.gallery h3 {
  margin-top: .5rem;
  text-align: center;
}

.social {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social li {
  margin: .4rem 0;
}

footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  text-align: center;
  color: var(--muted);
  font-size: .9rem;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .nav-toggle {
    display: block;
  }
}
