
import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class ActionLog extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      log: [],
    }
  }
  
  addPosItem(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const { log, count } = this.state;
    const newLog = log.slice();
    const newCount = count + 1;
    newLog.unshift({count: newCount})
    this.setState({log: newLog, count: newCount});
  }
  
  addNegItem(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const { log, count } = this.state;
    const newLog = log.slice();
    const newCount = count - 1;
    newLog.unshift({count: newCount})
    this.setState({log: newLog, count: newCount});
  }
  
  removeItem(i, ev) {
    const { log } = this.state;
    const newLog = log.slice();
    newLog.splice(i, 1);
    this.setState((prevState) => {
      return {...prevState, log: newLog }
    })
  }
  
  logItem(n, i) {
    return <button type="button" key={ `item-${i}` } className="list-group-item list-group-item-action" onClick={ this.removeItem.bind(this, i)} >{ n }</button>
  }
  
  log() {
    const { log } = this.state;
    if (log.length === 0) return null;
    return (
      <div className="list-group">
        { log.map((logItem, i) => this.logItem(logItem.count, i)) }
      </div>
    )
  }
  
  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button type="button" className="btn hexlet-inc" onClick={ this.addPosItem.bind(this) }>+</button>
          <button type="button" className="btn hexlet-dec" onClick={ this.addNegItem.bind(this) }>-</button>
        </div>
        { this.log() }
      </div>
    );
  }
}

export default ActionLog;