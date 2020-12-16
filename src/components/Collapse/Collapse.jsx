import React from 'react';
import cn from 'classnames';
import './Collapse.css';

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      opened: typeof(props.opened) === "boolean" ? props.opened : true
    };
  }

  toggle(ev) {
    ev.preventDefault();
    const { opened } = this.state;
    this.setState({ opened: !opened });
  };

  render() {
    const { text } = this.props;
    const classNames = {
      "collapse": true,
      "show": !!this.state.opened,
    }
    
    return (
      <div>
        <p>
          <a className="btn btn-primary" href="#" onClick={ this.toggle.bind(this) }>Link with href</a>
        </p>
        <div className={ cn(classNames) }>
          <div className="card card-body">
            { text }
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;