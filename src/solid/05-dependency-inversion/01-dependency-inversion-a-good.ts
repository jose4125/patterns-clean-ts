import { PostService } from './01-dependency-inversion-b-good';
import { LocalDataBaseService, JsonDatabaseService } from "./01-dependency-inversion-c-good";


// Main
(async () => {

    // const postsProvider = new LocalDataBaseService();
    const postsProvider = new JsonDatabaseService();
    const postService = new PostService(postsProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();