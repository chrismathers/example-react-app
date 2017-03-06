import React, {Component} from 'react'
import cx from 'classnames'

class Tab extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }


  render () {

    return (
      <li
        aria-controls={'panel-' + this.props.id}
        aria-selected="true"
        role="tab"
        className={
          cx({
            'tablist__tab': true,
            'tablist__tab--is-active': this.props.isCurrent
          })
        }>
        <a onClick={this.handleClick}>
          {this.props.name}
        </a>
      </li>
    )
  }
}

export default Tab;
