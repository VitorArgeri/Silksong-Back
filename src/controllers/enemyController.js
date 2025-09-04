import EnemyModel from "../models/enemyModel.js";

class EnemiesController {
    // GET /api/enemies
    async getAllEnemies(req, res) {
        try {
            const enemies = await EnemyModel.findAll();
            res.json(enemies);
        } catch (error) {
            console.error("Erro ao buscar inimigos:", error);
            res.status(500).json({ error: "Erro ao buscar inimigos" });
        }
    }

    // GET /api/enemies/:id
    async getEnemyById(req, res) {
        try {
            const { id } = req.params;

            const enemy = await EnemyModel.findById(id);

            if (!enemy) {
                return res.status(404).json({ error: "Inimigo não encontrado" });
            }

            res.json(enemy);
        } catch (error) {
            console.error("Erro ao buscar inimigo:", error);
            res.status(500).json({ error: "Erro ao buscar inimigo" });
        }
    }

    // POST /api/enemies
    async createEnemy(req, res) {
        try {
            const { title, description, location, imgUrl, diaryId } = req.body;

            if (!title || !description || !location || !imgUrl || !diaryId) {
                return res.status(400).json({
                    error: "Os campos 'title', 'description', 'location', 'imgUrl' e 'diaryId' são obrigatórios",
                });
            }

            const newEnemy = await EnemyModel.create(title, description, location, imgUrl, diaryId);

            if (!newEnemy) {
                return res.status(400).json({ error: "Erro ao criar inimigo" });
            }

            res.status(201).json(newEnemy);
        } catch (error) {
            console.error("Erro ao criar inimigo:", error);
            res.status(500).json({ error: "Erro ao criar inimigo" });
        }
    }

    // PUT /api/enemies/:id
    async updateEnemy(req, res) {
        try {
            const { id } = req.params;
            const { title, description, location, imgUrl, diaryId } = req.body;

            const updatedEnemy = await EnemyModel.update(id, title, description, location, imgUrl, diaryId);

            if (!updatedEnemy) {
                return res.status(404).json({ error: "Inimigo não encontrado" });
            }

            res.json(updatedEnemy);
        } catch (error) {
            console.error("Erro ao atualizar inimigo:", error);
            res.status(500).json({ error: "Erro ao atualizar inimigo" });
        }
    }

    // DELETE /api/enemies/:id
    async deleteEnemy(req, res) {
        try {
            const { id } = req.params;

            const result = await EnemyModel.delete(id);

            if (!result) {
                return res.status(404).json({ error: "Inimigo não encontrado" });
            }

            res.status(204).end();
        } catch (error) {
            console.error("Erro ao remover inimigo:", error);
            res.status(500).json({ error: "Erro ao remover inimigo" });
        }
    }
}

export default new EnemiesController();