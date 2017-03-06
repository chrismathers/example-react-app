import React, {Component} from 'react'
import cx from 'classnames'
import Tab from '../components/Tab.js'

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    this.props.changeTab(tab);
  }

  render () {


    return (

      <ul role='tablist' className={ cx({ 'm_tablist': true }) }>
        {this.props.data.map(function(tab) {
          return (
            <Tab
              key={tab.id}
              handleClick={this.handleClick.bind(this, tab)}
              name={tab.name}
              isCurrent={(this.props.currentTab === tab.id)}
            />
          );
        }.bind(this))}
      </ul>
    )
  }
}

export default Tabs;
