import { test, expect } from "@playwright/test";

test("Navigate between pages", async ({page}) => {
    await page.goto("http://localhost:3000/");
    await page.click("text=About");
    await expect(page).toHaveURL("http://localhost:3000/about");
    await expect(page.locator("main")).toContainText("About");
})
