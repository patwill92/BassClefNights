import React from 'react';
import {connect} from 'react-redux'

import {beginAnimation} from "../../actions";

@connect(({ui}) => ({animation: ui.animation}), {beginAnimation})
export default Component => {
    return class HOC extends React.Component {
        state = {
            visible: this.props.animation
        };

        componentDidMount = async () => {
            if (this.element) {
                await document.addEventListener('scroll', this.matchScroll);
                this.matchScroll()
            }
            if (!this.isInViewport(this.element)) {
                this.setState({visible: false})
            }
        };

        isInViewport = (element) => {
            let rect = element.getBoundingClientRect();
            let size = (rect.bottom - rect.top) / 2;
            return (window.innerHeight - rect.top) >= size;
        };

        matchScroll = () => {
            if (this.props.animation) {
                this.props.beginAnimation(false)
            }
            if (this.element) {
                if (this.isInViewport(this.element)) {
                    this.setState({visible: true})
                }
            }
        };

        render() {
            return <Component this={this} visible={this.state.visible} {...this.props} />;
        }
    }

}