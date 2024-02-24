interface State {
  next(ticket: Ticket | undefined): number | null;
  add(ticket: Ticket, quantity: number): void;
}

class Ticket {
  private state: State;
  quantity: number;
  readonly limit: number;
  private number: number;

  constructor(limit: number) {
    this.limit = limit;
    this.quantity = 0;
    this.number = 0;
    this.state = new EmptyState();
  }

  setState(state: State) {
    this.state = state;
  }

  getTicketNumber() {
    return (this.number += 1);
  }

  getState() {
    return this.state;
  }

  next() {
    return this.state.next(this);
  }

  add(quantity: number) {
    this.state.add(this, quantity);
  }
}

class EmptyState implements State {
  next() {
    return null;
  }

  add(ticket: Ticket, quantity: number) {
    if (quantity < ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState(new withStockState());
    }

    if (quantity === ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState(new LimitFullState());
    }
  }
}

class withStockState implements State {
  next(ticket: Ticket) {
    ticket.quantity -= 1;

    if (ticket.quantity <= 0) {
      ticket.setState(new EmptyState());
    }

    return ticket.getTicketNumber();
  }

  add(ticket: Ticket, quantity: number) {
    if (ticket.quantity + quantity < ticket.limit) {
      ticket.quantity += quantity;
    }

    if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState(new LimitFullState());
    }
  }
}

class LimitFullState implements State {
  next(ticket: Ticket) {
    ticket.quantity -= 1;

    if (ticket.quantity <= 0) {
      ticket.setState(new EmptyState());
    }

    if (ticket.quantity > 0) {
      ticket.setState(new withStockState());
    }

    return ticket.getTicketNumber();
  }

  add(ticket: Ticket, quantity: number) {
    console.warn('this  ticket is full', ticket, quantity);
  }
}

const ticket = new Ticket(5);
console.log('=== ticket state :', ticket.getState());
console.log('=== ticket next :', ticket.next());
console.log('=== adding 6 tickets :');
ticket.add(6);
console.log('=== ticket state :', ticket.getState());
console.log('=== ticket next :', ticket.next());
ticket.add(4);
console.log('=== ticket state :', ticket.getState());
console.log('=== ticket next :', ticket.next());
console.log('=== ticket next :', ticket.next());
ticket.add(3);
console.log('=== ticket state :', ticket.getState());
ticket.add(1);
console.log('=== ticket next :', ticket.next());
console.log('=== ticket state :', ticket.getState());
console.log('=== ticket next :', ticket.next());
console.log('=== ticket next :', ticket.next());
console.log('=== ticket next :', ticket.next());
console.log('=== ticket next :', ticket.next());
console.log('=== ticket state :', ticket.getState());
console.log('=== ticket next :', ticket.next());
