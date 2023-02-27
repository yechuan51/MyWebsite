import {expect, test} from "@playwright/test";


test.describe("/api/hello", () => {
    test("Call Hello API", async ({page}) => {
        await page.goto("/api/hello");
        await expect(page.getByText("Hello, Next.js!")).toBeVisible();
    })

    test("GET Hello API", async ({ request }) => {
        const response = await request.get("/api/hello", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        expect(response.status()).toBe(200);
        expect(await response.text()).toBe("Hello, Next.js!");
    });
})
