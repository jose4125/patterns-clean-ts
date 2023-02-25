import { PostService } from './01-dependency-inversion-b-bad';


// Main
(async () => {

    const postService = new PostService();

    const posts = await postService.getPosts();

    console.log({ posts })


})();