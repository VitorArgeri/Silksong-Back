import prisma from "../../prisma/prisma.js";

class NPCModel {
  // Obter todos os NPCs
  async findAll() {
    const npcs = await prisma.non.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        diary: true,
      },
    });

    return npcs;
  }

  // Obter um NPC pelo ID
  async findById(id) {
    const npcc = await prisma.non.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        diary: true,
      },
    });

    return npcc;
  }

  // Criar um novo NPC
  async create(name, description, imgUrl, diaryId) {
    console.log(name, description, imgUrl, diaryId);
    
    const novoNPC = await prisma.non.create({
      data: {
        name,
        description,
        imgUrl,
        diaryId,
      },
    });

    return novoNPC;
  }

  // Atualizar um NPC
  async update(id, name, description, imgUrl, diaryId) {
    const non = await this.findById(id);

    if (!non) {
      return null;
    }

    const data = {};
    if (name !== undefined) {
      data.name = name;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (imgUrl !== undefined) {
      data.imgUrl = imgUrl;
    }
    if (diaryId !== undefined) {
      data.diaryId = diaryId;
    }

    const npcAtualizado = await prisma.non.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return npcAtualizado;
  }

  // Remover um NPC
  async delete(id) {
    const non = await this.findById(id);

    if (!non) {
      return null;
    }

    await prisma.non.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new NPCModel();