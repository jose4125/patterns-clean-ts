import * as toastr from 'toastr'

(() => {

  class ErrorHandler {
    static handle(response: Response) {
          if(response.status === 401) {
            toastr.error('you are not authorized to view this content')
            return
          }
          if(response.status === 404) {
            toastr.waning('content not found')
            return
          }
          if(response.status === 500) {
            toastr.error('internal server error')
            return
          }
          toastr.info('unknown error')
          return
    }
  }

  class HttpClient {

    get (url: string) {
      return fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (!response.ok) {
          ErrorHandler.handle(response)
        }

        toastr.success('yeiiiiii!!!!')
        return response.json()
      })
    }

  }

  const http = new HttpClient();
  // http.get('https://httpstat.us/500').then(data => {
  //   console.log('data', data)
  // })
  http.get('https://jsonplaceholder.typicode.com/posts').then(data => {
    console.log('data', data)
  })
})();