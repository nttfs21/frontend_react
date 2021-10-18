
import Button from './Button'


const Header = ({formVisible, buttonClicked}) => {
    return (
        <div>
                <h1 style={{color: 'red'}}>Employee Manager</h1>
                <Button text={formVisible?'Close':'Open'} color={formVisible?'red':'green'} buttonClicked={buttonClicked}/>
        </div>
    )
}


export default Header
