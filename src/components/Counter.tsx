import React from 'react';

interface IProps {
    num: number;
    handleAppState(): void;
}

class Counter extends React.Component<IProps>{
    handleClick = () => {
        this.props.handleAppState();
    }

    render() {
        return (
            <div>
                <h1></h1>
                    <button type="button" onClick={this.handleClick}>
                        Click me
                    </button>
            </div>
        )
    }       
}

export default Counter;