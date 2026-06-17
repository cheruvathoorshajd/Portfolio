/**
 * Pre-build SPA routes for static hosting (GitHub Pages).
 *
 * GitHub Pages can't rewrite URLs server-side, so a direct hit to /dev would
 * return 404. We copy build/index.html into build/dev/index.html (and any other
 * top-level routes listed below) so each route is served as a real HTTP 200.
 * React Router then takes over client-side once the app boots.
 *
 * Run automatically after `react-scripts build` via the build script in package.json.
 */

const fs = require('fs');
const path = require('path');

const ROUTES = ['dev'];

const buildDir = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexPath)) {
    console.error('[prerender-routes] build/index.html not found. Did `react-scripts build` succeed?');
    process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');

for (const route of ROUTES) {
    const routeDir = path.join(buildDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
    console.log(`[prerender-routes] wrote ${path.relative(buildDir, path.join(routeDir, 'index.html'))}`);
}

// Also write a 404.html fallback so any unknown route still serves the SPA
fs.writeFileSync(path.join(buildDir, '404.html'), indexHtml);
console.log('[prerender-routes] wrote 404.html fallback');
