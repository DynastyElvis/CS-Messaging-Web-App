import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId='9bf12be6-1b16-4d13-9656-538c2b80daec'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
      />
    </div>
  )
}
export default ChatsPage;