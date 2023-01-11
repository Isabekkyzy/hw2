import './App.css'
import Header from './components/Header';


const headerData = {
  author: {
    name: 'Kitty',
    avatarUrl:'https://mixmag.io/wp-content/pics/93055/image009-98-720x720.jpg',
  
  },
  text: 'hi how are you 🧡',
    date: new Date(),
 
}


function App() {
  return (
    <div>
    <Header
    name={headerData.author} 
    author={headerData.author}
    text={headerData.text}
    date={headerData.date.toString()}/>
    </div>
  );
}

export default App;
