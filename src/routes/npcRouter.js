import express from "express";
import NPCController from "../controllers/npcController.js";

const npcRouter = express.Router();

// Rotas de NPCs
// GET /api/npcs - Listar todos os NPCs
npcRouter.get("/", NPCController.getAllNPCs);

// GET /api/npcs/:id - Obter um NPC pelo ID
npcRouter.get("/:id", NPCController.getNPCById);

// POST /api/npcs - Criar um novo NPC
npcRouter.post("/", NPCController.createNPC);

// PUT /api/npcs/:id - Atualizar um NPC
npcRouter.put("/:id", NPCController.updateNPC);

// DELETE /api/npcs/:id - Remover um NPC
npcRouter.delete("/:id", NPCController.deleteNPC);

export default npcRouter;