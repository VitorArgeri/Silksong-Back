import express from "express";
import EnemyController from "../controllers/enemyController.js";

const enemyRouter = express.Router();

// Rotas de Enemies
// GET /api/enemies - Listar todos os inimigos
enemyRouter.get("/", EnemyController.getAllEnemies);

// GET /api/enemies/:id - Obter um inimigo pelo ID
enemyRouter.get("/:id", EnemyController.getEnemyById);

// POST /api/enemies - Criar um novo inimigo
enemyRouter.post("/", EnemyController.createEnemy);

// PUT /api/enemies/:id - Atualizar um inimigo
enemyRouter.put("/:id", EnemyController.updateEnemy);

// DELETE /api/enemies/:id - Remover um inimigo
enemyRouter.delete("/:id", EnemyController.deleteEnemy);

export default enemyRouter;