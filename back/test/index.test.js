const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = (await agent.get("/rickandmorty/character/1")).body;
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("name");
      expect(response).toHaveProperty("species");
      expect(response).toHaveProperty("gender");
      expect(response).toHaveProperty("status");
      expect(response).toHaveProperty("origin");
      expect(response).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/nmuu").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("la informacion del login es correcta", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=diegoduvan321@gmail.com&password=abcd123"
        )
      ).body;
      expect(response.access).toEqual(true);
    });
    it("la informacion del login es incorrecta", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=diego321@gmail.com&password=123"
        )
      ).body;
      expect(response.access).toEqual(false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: 1, name: "Diego" };
    const character2 = { id: 2, name: "Yinnec" };
    it("devuelve el elemento enviado por body", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character1))
        .body;
      expect(response).toContainEqual(character1);
    });
    it("devuelve el elemento previo y el actual", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character2))
        .body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = { id: 1, name: "Diego" };
    const character2 = { id: 2, name: "Yinnec" };
    it("devuelve el arregloc correspondiente si no se le agraga ningun personaje", async () => {
      const response = (await agent.delete("/rickandmorty/fav/6769890")).body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
    it("elimina correpondiente al personaje que see specifica por ID", async () => {
      const response = (await agent.delete("/rickandmorty/fav/1")).body;
      expect(response).not.toContainEqual(character1);
    });
  });
});
