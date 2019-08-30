import React from 'react';


class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            chamber: null,
            spinningTheChamber: false 
        }
    }
    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        });
        this.timeout = setTimeout(() => {
            let rand = Math.ceil(Math.random() * 8)
            this.setState({
                spinningTheChamber: false,
                chamber: rand
            });
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state;
        const { bulletInChamber } = this.props;
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!!'
        } else {
            return 'you\'re safe!'
        }
    }


    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!
                </button> 
            </div>
        )
    }
}

export default Bomb