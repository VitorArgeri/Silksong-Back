import prisma from "../../prisma/prisma.js";

class EnemyModel {
    // Obter todos os inimigos
    async findAll() {
        const enemies = await prisma.enemy.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                diary: true,
            },
        });

        return enemies;
    }

    // Obter um inimigo pelo ID
    async findById(id) {
        const enemy = await prisma.enemy.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                diary: true,
            },
        });

        return enemy;
    }

    // Criar um novo inimigo
    async create(title, description, location, imgUrl, diaryId) {
        const newEnemy = await prisma.enemy.create({
            data: {
                title,
                description,
                location,
                imgUrl,
                diaryId,
            },
        });

        return newEnemy;
    }

    // Atualizar um inimigo
    async update(id, title, description, location, imgUrl, diaryId) {
        const enemy = await this.findById(id);

        if (!enemy) {
            return null;
        }

        const data = {};
        if (title !== undefined) {
            data.title = title;
        }
        if (description !== undefined) {
            data.description = description;
        }
        if (location !== undefined) {
            data.location = location;
        }
        if (imgUrl !== undefined) {
            data.imgUrl = imgUrl;
        }
        if (diaryId !== undefined) {
            data.diaryId = diaryId;
        }

        const updatedEnemy = await prisma.enemy.update({
            where: {
                id: Number(id),
            },
            data,
        });

        return updatedEnemy;
    }

    // Remover um inimigo
    async delete(id) {
        const enemy = await this.findById(id);

        if (!enemy) {
            return null;
        }

        await prisma.enemy.delete({
            where: {
                id: Number(id),
            },
        });

        return true;
    }
}

export default new EnemyModel();