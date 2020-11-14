const OutOfStock = (props) => {
    return (
        <>
            <h2 className="outOfStockMessage">{props.txt1}</h2>
            <div className="powiadomEmail">
                <label>Wprowadź email a powiadomimy Cię gdy produkt będzie dostępny!</label>
                <form>
                    <input type="text" placeholder="email"></input>
                    <button className="btnpowiadomEmail" onClick={props.ClickSend}>Powiadom o dostępności</button>
                </form>
            </div>
        </>
    )
}

class App extends React.Component {

    state = {
        availableItems: 8,
        shoppingCart: 1
    }

    handleRemoveCartItem = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }

    handleAddCartItem = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1,
        })
    }

    handleBuyItems = () => {
        this.setState({
            availableItems: this.state.availableItems - this.state.shoppingCart,
            shoppingCart: 0
        })
    }

    handleClickSend = (e) => {
        e.preventDefault()
    }

    render() {

        const { availableItems, shoppingCart } = this.state

        return (
            <>
                <h1
                    style={availableItems === 0 ? { opacity: 0.4 } : null}>{shoppingCart}
                </h1>
                <button
                    className="button-cart"
                    disabled={shoppingCart ? false : true}
                    onClick={this.handleRemoveCartItem}
                >-</button>
                <button
                    className="button-cart"
                    disabled={shoppingCart === availableItems ? true : false} onClick={this.handleAddCartItem}
                >+</button>
                {shoppingCart > 0 && <button className="button-cart-buy" onClick={this.handleBuyItems}>Kup</button>}
                {availableItems === 0 ? <OutOfStock txt1="Nie ma już produktu w magazynie, Przepraszamy :(" ClickSend={this.handleClickSend} /> : null}
            </>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'))
