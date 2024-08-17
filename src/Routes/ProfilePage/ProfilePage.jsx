import Chat from '../../components/Chat/Chat'
import List from '../../components/List/List'
import './ProfilePage.scss'

function ProfilePage(){
return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Infomation</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="/profile.png" alt="" /></span>
                    <span>Username: <b>Anik Barua</b></span>
                    <span>E-mail: <b>anik@gmail.com</b></span>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List/>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}
export default ProfilePage