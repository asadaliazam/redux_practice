import React, { Component } from 'react'
class FooterMenu extends Component {

    state = {
        activeFilter: 'all',
    };

    handleFilter = (filter) => {
        this.setState({
            activeFilter: filter,
        });
        // todo: Write an action here
    }
    render() {
        const { activeFilter } = this.state;
        return (
            <div>
                <span>Show: </span>
                <button disabled={activeFilter === 'all'}
                    onClick={() => this.handleFilter('all')}
                >
                    All
                </button>
                <button
                    disabled={activeFilter === 'active'}
                    onClick={() => this.handleFilter('active')}
                >
                    Active
                </button>
                <button
                    disabled={activeFilter === 'completed'}
                    onClick={() => this.handleFilter('completed')}
                >
                    Completed
                </button>
            </div>
        )
    }
}

export default FooterMenu;