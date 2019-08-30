import React from 'react';


class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { who: 'World' }
    }
    handleFriendClick = () => {
        const newWho = 'Friend';
        this.setState({e
            who: newWho
        });
    }
    handleWorldClick = () => {
        const newWho = 'World';
        this.setState({
            who: newWho
        });
    }
    handleReactClick = () => {
        const newWho = 'React';
        this.setState({
            who: newWho
        });
    }
    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={this.handleWorldClick}>
                    World
                </button> 
                <button onClick={this.handleFriendClick}>
                    Friend
                </button> 
                <button onClick={this.handleReactClick}>
                    React
                </button> 
            </div>
        )
    }
}

export default HelloWorld