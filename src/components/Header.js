import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  // onclick
  const onClick = ()=>{
    console.log("Clicked")
  }


  return (
    <header className = 'header'> 
       <h1>{title}</h1> 
       < Button color = 'green' text = 'Add' 
       onClick ={onClick} />
    </header>
  )
}


Header.defaultProps = {
    title: 'To do list' 
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const heading = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }
export default Header