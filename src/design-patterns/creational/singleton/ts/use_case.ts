class HttpClient {
  get(url: string) {
    return fetch(url).then(response => response.json());
  }
}

class PostsService {
  configure(config) {}
  configureHttpClient(config) {
    if (!config.httpClient) {
      throw new Error('httpClient not configured');
    }

    this.httpClient = config.httpClient;
  }
  configureEndpoints(config) {
    if (
      !config.endpoints ||
      config.endpoints.posts ||
      config.endpoints.comments
    ) {
      throw new Error('Endpoints poorly configured');
    }

    this.postsEndpoints = config.endpoints.posts;
    this.commentsEndpoints = config.endpoints.comments;
  }
}
