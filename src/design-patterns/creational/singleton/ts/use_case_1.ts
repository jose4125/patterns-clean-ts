type Config = {
  httpClient: HttpClient,
  endpoints: {
    posts: string;
    comments: string;
  }
}
class HttpClient {
  get(url: string) {
    return fetch(url).then(response => response.json());
  }
}

class PostsService {
  private httpClient: HttpClient;
  private postsEndpoints: string;
  private commentsEndpoints: string;

  configure(config: Config) {
    this.configureHttpClient(config);
    this.configureEndpoints(config);
  }

  configureHttpClient(config: Config) {
    if (!config.httpClient) {
      throw new Error('httpClient not configured');
    }

    this.httpClient = config.httpClient;
  }

  configureEndpoints(config: Config) {
    if (
      !config.endpoints ||
      !config.endpoints.posts ||
      !config.endpoints.comments
    ) {
      throw new Error('Endpoints poorly configured');
    }

    this.postsEndpoints = config.endpoints.posts;
    this.commentsEndpoints = config.endpoints.comments;
  }

  getPosts() {
    return this.httpClient.get(this.postsEndpoints)
  }

  getComments() {
    return this.httpClient.get(this.commentsEndpoints)
  }
}

class PostsServiceFactory {
  postsService: PostsService;

  prepareInstance() {
    let config = {
      httpClient: new HttpClient(),
      endpoints: {
        posts: 'http://jsonplaceholder.typicode.com/posts',
        comments: 'http://jsonplaceholder.typicode.com/comments'
      }
    }

    this.postsService = new PostsService();
    this.postsService.configure(config);
  }

  getInstance() {
    if(!this.postsService) {
      this.prepareInstance()
    }

    return this.postsService;
  }
}


let postsServiceFactory = new PostsServiceFactory()
let postsService = postsServiceFactory.getInstance()
postsService.getPosts().then((posts) => console.log('Posts: ', posts))
postsService.getComments().then((comments) => console.log('Comments: ', comments))