import express from "express";
import BossController from "../controllers/bossController.js";

const bossRouter = express.Router();

// Rotas de Bosses
// GET /api/bosses - Listar todos os bosses
bossRouter.get("/", BossController.getAllBosses);

// GET /api/bosses/:id - Obter um boss pelo ID
bossRouter.get("/:id", BossController.getBossById);

// POST /api/bosses - Criar um novo boss
bossRouter.post("/", BossController.createBoss);

// PUT /api/bosses/:id - Atualizar um boss
bossRouter.put("/:id", BossController.updateBoss);

// DELETE /api/bosses/:id - Remover um boss
bossRouter.delete("/:id", BossController.deleteBoss);

export default bossRouter;