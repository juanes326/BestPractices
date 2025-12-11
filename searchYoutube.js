const { chromium } = require('playwright');

(async () => {
  // Lanzar navegador
  const browser = await chromium.launch({ headless: false }); // Cambia a true si no quieres ver el navegador
  const context = await browser.newContext();
  const page = await context.newPage();

   // 1. Ir a YouTube
  await page.goto('https://www.youtube.com');

  // 3. Esperar al campo de búsqueda (usamos un selector más flexible)
  const searchInput = page.locator('input[placeholder="Search"]');
  await searchInput.waitFor({ state: 'visible' });

  // 4. Escribir búsqueda y presionar Enter
  await searchInput.click();
  await searchInput.fill('Cristiano Ronaldo');
  await searchInput.press('Enter');

  // 5. Esperar a que carguen los resultados
  await page.waitForSelector('ytd-video-renderer', { timeout: 10000 });

  // 6. Esperar unos segundos para que veas los resultados
  await page.waitForTimeout(5000);


  // 5. Cerrar navegador
  await browser.close();
})();