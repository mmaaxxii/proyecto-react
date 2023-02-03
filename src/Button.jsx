import PropTypes from 'prop-types'

export function Button({text}){
    return <button>
        {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

//Button.defaultProps = {
    //text: "Some User"
//}