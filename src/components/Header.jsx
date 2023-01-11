import Avatar from './Avatar'
import Card from './Card'
 import  './Header.css'

const Header = (props) => {
    const newDate = new Intl.DateTimeFormat('en-US').format()


   
    return (
      <Card className='header'>
       
        <Avatar authorInfo={props.author}/>
        <div>Hello {props.author.name}</div>
        <div className="header-text">{props.text}</div>
        <div className="header-date">{newDate}</div>
        <input className='search' type="text" placeholder="Search"/>
      </Card>
    )
}

export default Header;