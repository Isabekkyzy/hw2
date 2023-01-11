 import './Avatar.css'
 
const Avatar =(props)=> {
    return (
      <img
       className="avatar" 
    src={props.authorInfo.avatarUrl} 
    alt={props.authorInfo.name}
     />
    )
}

export default Avatar;