import { test, expect } from "@playwright/test";

test("Navigate to About page", async ({page}) => {
    await page.goto("/");
    await page.getByText("About").click();
    await expect(page).toHaveURL("/about");
    await expect(page.locator("main")).toContainText("About this site");
})

test("Navigate to Blog page", async ({page}) => {
    await page.goto("/");
    await page.getByText("Blog").click();
    await expect(page).toHaveURL("/blogs");
    await expect(page.getByText("WIP")).toBeVisible();
})

test("Navigate between Navbar pages", async ({page}) => {
    await page.goto("/about");
    await page.getByText("Blog").click();
    await expect(page).toHaveURL("/blogs");
    await page.getByTitle("Logo").click();
    await expect(page).toHaveURL("/");
})