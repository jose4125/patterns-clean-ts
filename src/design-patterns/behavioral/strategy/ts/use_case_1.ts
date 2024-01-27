import toastr from 'toastr';

interface HandlerStrategy {
  handle(errorTitle: string, errorBody: string, errorObject: unknown): void
}

class ErrorHandler {
  private strategy: HandlerStrategy

  constructor(strategy: HandlerStrategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy: HandlerStrategy) {
    this.strategy = strategy;
  }

  handle(errorTitle: string, errorBody: string, errorObject: unknown) {
    this.strategy.handle(errorTitle, errorBody, errorObject)
  }
}


class ConsoleLogHandler implements HandlerStrategy {
  handle(errorTitle: string, errorBody: string, errorObject: unknown) {
    console.error('error title:', errorTitle)
    console.log('error body:', errorBody)
    console.info('error', errorObject)

  }
}

class ToastrHandler implements HandlerStrategy {
  handle(errorTitle: string, errorBody: string, errorObject: unknown) {
     toastr.error(`${errorTitle} - ${errorBody}`)
     console.error('error:', errorObject)
  }
}

const consoleLogHandler = new ConsoleLogHandler()
const toastrHandler = new ToastrHandler()

const errorHandler = new ErrorHandler(consoleLogHandler)

try {
  throw new Error('Dummy error')
} catch (err) {
  errorHandler.handle('test error', 'Ooops, seems like something went wrong', err)
  errorHandler.setStrategy(toastrHandler)
  errorHandler.handle('test error', 'Ooops, seems like something went wrong', err)
}
