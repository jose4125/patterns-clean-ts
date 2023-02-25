import { LocalDataBaseService } from "./01-dependency-inversion-c-bad";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor() {}

    async getPosts() {
        const jsonDB = new LocalDataBaseService(); // tiene una fuerte dependencia (dependencia oculta) al LocalDataBaseService
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }
}