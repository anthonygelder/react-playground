import React from 'react';


class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
            word: '' 
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.count === 7) {
                const boom = 'BOOOOM!!!!';
                this.setState({
                    word: boom
                })
                clearInterval(this.interval);
            } else if (this.state.count % 2 !== 0) {
                const tick = 'tick';
                this.setState({
                    word: tick
                })
            } else {
                const tock = 'tock';
                this.setState({
                    word: tock
                })
            }
            
            const time = this.state.count + 1;
            this.setState({
            count: time
        })
        }, 1000)
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <p>{this.state.word}</p>
            </div>
        )
    }
}

export default Bomb