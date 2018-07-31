import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.setResults.map(newResult => (
                        <li key={newResult.id} onClick={() => this.props.onDeleteResult(newResult.id)}>{newResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        setResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubCounter: () => dispatch(actionCreators.sub(5)),
        onStoreResult: () => dispatch(actionCreators.storeResult()),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);