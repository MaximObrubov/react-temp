
import React from 'react';
import cn from 'classnames';
import './Carousel.css';

// BEGIN (write your solution here)
class Carousel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    }
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const mod = ev.currentTarget.getAttribute("data-slide");
    const lastId = this.props.images.length - 1;
    
    let active = mod === "next" ? this.state.active + 1 : this.state.active - 1;
    
    if (active > lastId) active = 0;
    if (active < 0) active = lastId;
    this.setState({ active });
  };
  
  
  item(src, i) {
    const itemClasses = {
      "carousel-item": true,
      "active": i === this.state.active,
    }
    
    return(
      <div className={cn(itemClasses)} key={src}>
        <img alt="" className="d-block w-100" src={src} />
      </div>
    );
  }
  
  render() {
    const classes = {
      carousel: true,
      slide: true,
    }
    return (
      <div id="carousel" className={cn(classes)} data-ride="carousel">
        <div className="carousel-inner">
          { this.props.images.map((src, i) => this.item(src, i))}
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" onClick={ this.onClick } data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" onClick={ this.onClick } data-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;