class OrderManager {
    constructor() {
        this.orders = []
    }

    execute(command, ...args) {
        return command.execute(this.orders, ...args)
    }
}

class Command {
    constructor(execute) {
        this.execute = execute
    }
}

function PlaceOrderCommand(order, id) {
    return new Command(orders => {
        orders.push(id)
        return `${order} ${id}`
    })
}

function CancelOrderCommand(id) {
    return new Command(orders => {
        orders = orders.filter(order => order.id !==id)
        return `${id}`
    })
}

function TrackOrderCommand(id) {
    return new Command(()=>`${id}`)
}

const manager = new OrderManager()

manager.execute(new PlaceOrderCommand('팟타이','1234'))
수manager.execute(new TrackOrderCommand('1234'))
manager.execute(new CancelOrderCommand('1234'))