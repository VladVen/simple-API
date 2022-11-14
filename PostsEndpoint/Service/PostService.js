import Post from "../Schemas/Post.js";
import fileService from "../../fileService.js";

class PostService {
    async create(data, picture) {
        const file = fileService.saveFile(picture)
        const post = await Post.create({...data, picture: file})
        return post
    }

    async getAll() {
        const post = await Post.find()
        return post
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id required ')
        }
        const post = await Post.findById(id)
        return post
    }

    async update(post, id) {
        if (!id) {
            throw new Error('id required ')
        }
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true})
        return updatedPost
    }

    async delete(id) {
        if (!id) {
            throw new Error('id required ')
        }
        await Post.findByIdAndDelete(id)
        const post = await Post.find()
        return post
    }
}

export default new PostService()