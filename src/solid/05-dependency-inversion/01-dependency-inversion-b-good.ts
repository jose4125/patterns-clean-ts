import { JsonDatabaseService, PostsProvider } from "./01-dependency-inversion-c-good";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postsProvider: PostsProvider ) {}

    async getPosts() {
        this.posts = await this.postsProvider.getPosts();

        return this.posts;
    }
}