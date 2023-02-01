class OrderManager {
    constructor() {
        this.orders = []
    }

    placeOrder(order, id) {
        this.orders.push(id)
        return `${order} ${id}`
    }

    trackOrder(id) {
        return `${id}`
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !==id)
        return `${id}`
    }
}

const manager = new OrderManager()
manager.placeOrder("Pad Tahi", "1234")
manager.trackOrder("1234")
manager.cancelOrder("1234")