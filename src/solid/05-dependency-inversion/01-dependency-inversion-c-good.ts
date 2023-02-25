import { Post } from './01-dependency-inversion-b-good'
import localPosts from './local-database.json'


export interface PostsProvider {
    getPosts(): Promise<Post[]>
}

// tambien se puede solucionar con una clase abstracta si se necesita que luego quede reflejado en el código final(cuando se transpila a js)
// export abstract class PostsProvider {
//     abstract getPosts(): Promise<Post[]>
// }


export class LocalDataBaseService implements PostsProvider {
  async getPosts() {
      return [
          {
              'userId': 1,
              'id': 1,
              'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
          },
          {
              'userId': 1,
              'id': 2,
              'title': 'qui est esse',
              'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }]
  }
}

export class JsonDatabaseService implements PostsProvider {
    async getPosts() {
        return localPosts
    }
}