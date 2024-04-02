import avatarJessica from './assets/avatar-jessica.jpeg';
import './App.css'
import SocialLinksProfile from './component/SocialLinksProfile';

function App() {


  return (
    <>
      <div className='container'>
        <SocialLinksProfile profilePicture={avatarJessica} profileName={"Jessica Randall"} current={'London, United Kingdom'} jobDescription={`"Front-end developer and avid reader."`} />

      </div>
    </>
  )
}

export default App
