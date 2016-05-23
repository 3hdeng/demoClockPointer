import React, {Component, PropTypes} from 'react';

function calcAngle(value, base) {
    value %= base;
    const angle = 360 / base * value;
    return angle;
}

function getStyles(props, context, state) {
    const {hasSelected, type, value, mystyle} = props;
    //const {inner} = state;
    //const {timePicker} = context.muiTheme;
    const angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60);

    const accColor=mystyle.accColor;
    const textColor= mystyle.textColor;

    const styles = {
        rod: {
            height: '40%',
            background: `${accColor}`,
            width: 2,
            left: 'calc(50% - 1px)',
            position: 'absolute',
            bottom: '50%',
            transformOrigin: 'bottom',
            pointerEvents: 'none',
            transform: `rotateZ(${angle}deg)`,
        },
        mark: {
            background:`${textColor}`,
            border: `4px solid ${accColor}`,
            display: 'block',
            width: 7,
            height: 7,
            position: 'absolute',
            top: -5,
            left: -6,
            borderRadius: '100%',
        },
    };

    return styles;
}

class ClockPointer extends Component {
    constructor(props) {
        super(props);
        //let year = date.year();

        this.state = {
            inner: false
        };
    }

    /*    static propTypes = {
          hasSelected: PropTypes.bool,
          type: PropTypes.oneOf(['hour', 'minute']),
          value: PropTypes.number,
          mystyle:PropTypes.object
          };

          static defaultProps = {
          value: null,
          type: 'minute',
          hasSelected: false,
          }; */

    /*   static contextTypes = {
         muiTheme: PropTypes.object.isRequired,
         };
     */

    componentWillReceiveProps(nextProps) {
        this.setState({
            inner: false,
        });
    }

    render() {
        if (this.props.value === null) {
            return(<div></div>);
        }

        const styles = getStyles(this.props, this.context, this.state);
        //const {prepareStyles} = this.context.muiTheme;

        return (
                <div style={styles.rod} >
                <div style={styles.mark} />
                </div>
               );
    }
}


ClockPointer.PropTypes= {
    hasSelected: PropTypes.bool,
    type: PropTypes.oneOf(['hour', 'minute']),
    value: PropTypes.number,
    mystyle:PropTypes.object
};

ClockPointer.defaultProps = {
    value: null,
    type: 'hour',
    hasSelected: false,
    mystyle:{accColor:'blue', textColor:'green'}
};

export default ClockPointer;

