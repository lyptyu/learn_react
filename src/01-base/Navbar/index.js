import React, {Component} from 'react';
import kerwinPropTypes from 'prop-types';
class Navbar extends Component {
  static propTypes = {
    title: kerwinPropTypes.string,
    leftshow: kerwinPropTypes.bool
  }
  static defaultProps = {
    leftshow: true
  }
  render() {
    console.log(this.props)
    let {title,leftshow} = this.props;
    return (
      <div>
        {leftshow && <button>返回</button>}
        navbar-{title}
        <button>home</button>
      </div>
    );
  }
}
export default Navbar;
