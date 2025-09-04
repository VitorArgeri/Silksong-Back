import NPCModel from "../models/npcModel.js";

class NPCController {
    // GET /api/npcs
    async getAllNPCs(req, res) {
        try {
            const npcs = await NPCModel.findAll();
            res.json(npcs);
        } catch (error) {
            console.error("Erro ao buscar NPCs:", error);
            res.status(500).json({ error: "Erro ao buscar NPCs" });
        }
    }

    // GET /api/npcs/:id
    async getNPCById(req, res) {
        try {
            const { id } = req.params;

            const npc = await NPCModel.findById(id);

            if (!npc) {
                return res.status(404).json({ error: "NPC não encontrado" });
            }

            res.json(npc);
        } catch (error) {
            console.error("Erro ao buscar NPC:", error);
            res.status(500).json({ error: "Erro ao buscar NPC" });
        }
    }

    // POST /api/npcs
    async createNPC(req, res) {
        try {
            const { name, description, imgUrl, diaryId } = req.body;

            if (!name || !description || !imgUrl || !diaryId) {
                return res.status(400).json({
                    error: "Os campos 'name', 'description', 'imgUrl' e 'diaryId' são obrigatórios",
                });
            }

            const newNPC = await NPCModel.create(name, description, imgUrl, diaryId);

            if (!newNPC) {
                return res.status(400).json({ error: "Erro ao criar NPC" });
            }

            res.status(201).json(newNPC);
        } catch (error) {
            console.error("Erro ao criar NPC:", error);
            res.status(500).json({ error: "Erro ao criar NPC" });
        }
    }

    // PUT /api/npcs/:id
    async updateNPC(req, res) {
        try {
            const { id } = req.params;
            const { name, description, imgUrl, diaryId } = req.body;

            const updatedNPC = await NPCModel.update(id, name, description, imgUrl, diaryId);

            if (!updatedNPC) {
                return res.status(404).json({ error: "NPC não encontrado" });
            }

            res.json(updatedNPC);
        } catch (error) {
            console.error("Erro ao atualizar NPC:", error);
            res.status(500).json({ error: "Erro ao atualizar NPC" });
        }
    }

    // DELETE /api/npcs/:id
    async deleteNPC(req, res) {
        try {
            const { id } = req.params;

            const result = await NPCModel.delete(id);

            if (!result) {
                return res.status(404).json({ error: "NPC não encontrado" });
            }

            res.status(204).end();
        } catch (error) {
            console.error("Erro ao remover NPC:", error);
            res.status(500).json({ error: "Erro ao remover NPC" });
        }
    }
}

export default new NPCController();