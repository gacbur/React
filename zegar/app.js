class App extends React.Component {

    state = {
        active: true
    }

    handleClick = () => {
        this.setState((prevState) => ({
            active: !prevState.active
        }))
    }

    render() {
        return (
            <div>
                <SwitchButton active={this.state.active} click={this.handleClick} />
                <br />
                {this.state.active && <Clock />}
            </div>
        )
    }
}

const SwitchButton = (props) => (
    <button onClick={props.click}>{props.active ? 'Wyłącz' : 'Włącz'}</button>
)

class Clock extends React.Component {

    interval = ""

    state = {
        time: this.getTime()
    }

    getTime() {
        const time = new Date();
        return ({
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds()
        }
        )
    }

    setTime() {
        const time = this.getTime()
        this.setState({
            time: time
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        const { hours, minutes, seconds } = this.state.time

        return (
            <>
                <h1>{hours} : {minutes > 9 ? minutes : `0${minutes}`} {seconds}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
