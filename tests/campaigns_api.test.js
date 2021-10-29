const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);
test("campagins are returned as json", async () => {
  await api
    .get("/api/campaigns")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
