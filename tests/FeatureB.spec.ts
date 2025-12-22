import test from "@playwright/test";

test('@regression Verify an item in Mis Compras', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co')
  await page.locator('input[id=\'cb1-edit\']').fill('iphone 14 pro max')
  await page.keyboard.press('Enter')
  await page.locator('//ol[contains(@class, \'ui-search-layout\')]').waitFor({ state: 'visible' })
  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout__item\')]//li//h3').allInnerTexts()
  console.log('The total number of results was: ', titles.length)
  for (let title of titles)
  {
    console.log('the title is: ', title)
  }
  await page.waitForTimeout(5000);
});

test('@smoke Click Mis Compras', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co');
  const misCompras = page.getByRole('link', { name: 'Mis compras', exact: true });
  await misCompras.waitFor({ state: 'visible' });
  await misCompras.click();
});

test('@regression Purchase an item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')

  const UserName = page.locator('input[id=\'user-name\']')
  const Password = page.locator('input[id=\'password\']')
  const LoginButton =  page.locator('input[id=\'login-button\']')

  await UserName.click()
  await UserName.fill("standard_user")
  await Password.click()
  await Password.fill("secret_sauce")
  await LoginButton.click()
  await page.waitForTimeout(5000);
});


