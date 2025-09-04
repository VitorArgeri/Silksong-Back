import express from "express";
import EnemiesController from "../controllers/enemiesController.js";

const enemyRouter = express.Router();

// Rotas de Enemies
// GET /api/enemies - Listar todos os inimigos
enemyRouter.get("/", EnemiesController.getAllEnemies);

// GET /api/enemies/:id - Obter um inimigo pelo ID
enemyRouter.get("/:id", EnemiesController.getEnemyById);

// POST /api/enemies - Criar um novo inimigo
enemyRouter.post("/", EnemiesController.createEnemy);

// PUT /api/enemies/:id - Atualizar um inimigo
enemyRouter.put("/:id", EnemiesController.updateEnemy);

// DELETE /api/enemies/:id - Remover um inimigo
enemyRouter.delete("/:id", EnemiesController.deleteEnemy);

export default enemyRouter;