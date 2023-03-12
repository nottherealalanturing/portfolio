/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/require-default-props */
/* eslint-disable react/sort-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Draggable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relX: 0,
      relY: 0,
      x: props.x,
      y: props.y,
    };
    this.gridX = props.gridX || 1;
    this.gridY = props.gridY || 1;
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  static propTypes = {
    onMove: PropTypes.func,
    onStop: PropTypes.func,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    gridX: PropTypes.number,
    gridY: PropTypes.number,
  };

  onStart(e) {
    const ref = ReactDOM.findDOMNode(this.handle);
    const body = document.body;
    const box = ref.getBoundingClientRect();
    this.setState({
      relX: e.pageX - (box.left + body.scrollLeft - body.clientLeft),
      relY: e.pageY - (box.top + body.scrollTop - body.clientTop),
    });
  }

  onMove(e) {
    const x = Math.trunc((e.pageX - this.state.relX) / this.gridX) * this.gridX;
    const y = Math.trunc((e.pageY - this.state.relY) / this.gridY) * this.gridY;
    if (x !== this.state.x || y !== this.state.y) {
      this.setState({
        x,
        y,
      });
      this.props.onMove && this.props.onMove(this.state.x, this.state.y);
    }
  }

  onMouseDown(e) {
    if (e.button !== 0) return;
    this.onStart(e);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    e.preventDefault();
  }

  onMouseUp(e) {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    this.props.onStop && this.props.onStop(this.state.x, this.state.y);
    e.preventDefault();
  }

  onMouseMove(e) {
    this.onMove(e);
    e.preventDefault();
  }

  onTouchStart(e) {
    this.onStart(e.touches[0]);
    document.addEventListener('touchmove', this.onTouchMove, {
      passive: false,
    });
    document.addEventListener('touchend', this.onTouchEnd, { passive: false });
    e.preventDefault();
  }

  onTouchMove(e) {
    this.onMove(e.touches[0]);
    e.preventDefault();
  }

  onTouchEnd(e) {
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
    this.props.onStop && this.props.onStop(this.state.x, this.state.y);
    e.preventDefault();
  }

  render() {
    return (
      <div
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        style={{
          position: 'absolute',
          left: this.state.x,
          top: this.state.y,
          touchAction: 'none',
        }}
        ref={(div) => {
          this.handle = div;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
