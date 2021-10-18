import PropTypes from 'prop-types'

const Button = ({text, color, buttonClicked}) => {
    return (
        <button style={{...defaultStyle, backgroundColor: color}} className='btn' onClick={buttonClicked}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    buttonClicked: PropTypes.func
}

const defaultStyle = {
    float: 'right'
}

export default Button
