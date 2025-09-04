import prisma from "../../prisma/prisma.js";

class BossModel {
    // Obter todos os bosses
    async findAll() {
        const bosses = await prisma.boss.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                diary: true,
            },
        });

        return bosses;
    }

    // Obter um boss pelo ID
    async findById(id) {
        const boss = await prisma.boss.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                diary: true,
            },
        });

        return boss;
    }

    // Criar um novo boss
    async create(title, description, location, imgUrl, diaryId) {
        const newBoss = await prisma.boss.create({
            data: {
                title,
                description,
                location,
                imgUrl,
                diaryId,
            },
        });

        return newBoss;
    }

    // Atualizar um boss
    async update(id, title, description, location, imgUrl, diaryId) {
        const boss = await this.findById(id);

        if (!boss) {
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

        const updatedBoss = await prisma.boss.update({
            where: {
                id: Number(id),
            },
            data,
        });

        return updatedBoss;
    }

    // Remover um boss
    async delete(id) {
        const boss = await this.findById(id);

        if (!boss) {
            return null;
        }

        await prisma.boss.delete({
            where: {
                id: Number(id),
            },
        });

        return true;
    }
}

export default new BossModel();