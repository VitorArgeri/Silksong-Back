import BossModel from "../models/bossModel.js";

class BossController {
    // GET /api/bosses
    async getAllBosses(req, res) {
        try {
            const bosses = await BossModel.findAll();
            res.json(bosses);
        } catch (error) {
            console.error("Erro ao buscar bosses:", error);
            res.status(500).json({ error: "Erro ao buscar bosses" });
        }
    }

    // GET /api/bosses/:id
    async getBossById(req, res) {
        try {
            const { id } = req.params;

            const boss = await BossModel.findById(id);

            if (!boss) {
                return res.status(404).json({ error: "Boss não encontrado" });
            }

            res.json(boss);
        } catch (error) {
            console.error("Erro ao buscar boss:", error);
            res.status(500).json({ error: "Erro ao buscar boss" });
        }
    }

    // POST /api/bosses
    async createBoss(req, res) {
        try {
            const { title, description, location, imgUrl, diaryId } = req.body;

            if (!title || !description || !location || !imgUrl || !diaryId) {
                return res.status(400).json({
                    error: "Os campos 'title', 'description', 'location', 'imgUrl' e 'diaryId' são obrigatórios",
                });
            }

            const newBoss = await BossModel.create(title, description, location, imgUrl, diaryId);

            if (!newBoss) {
                return res.status(400).json({ error: "Erro ao criar boss" });
            }

            res.status(201).json(newBoss);
        } catch (error) {
            console.error("Erro ao criar boss:", error);
            res.status(500).json({ error: "Erro ao criar boss" });
        }
    }

    // PUT /api/bosses/:id
    async updateBoss(req, res) {
        try {
            const { id } = req.params;
            const { title, description, location, imgUrl, diaryId } = req.body;

            const updatedBoss = await BossModel.update(id, title, description, location, imgUrl, diaryId);

            if (!updatedBoss) {
                return res.status(404).json({ error: "Boss não encontrado" });
            }

            res.json(updatedBoss);
        } catch (error) {
            console.error("Erro ao atualizar boss:", error);
            res.status(500).json({ error: "Erro ao atualizar boss" });
        }
    }

    // DELETE /api/bosses/:id
    async deleteBoss(req, res) {
        try {
            const { id } = req.params;

            const result = await BossModel.delete(id);

            if (!result) {
                return res.status(404).json({ error: "Boss não encontrado" });
            }

            res.status(204).end();
        } catch (error) {
            console.error("Erro ao remover boss:", error);
            res.status(500).json({ error: "Erro ao remover boss" });
        }
    }
}

export default new BossController();