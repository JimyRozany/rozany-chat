import { Chat, Sidebar } from "../components"


const Home = () => {
  return (
    <div className="w-[50rem] h-[25rem] rounded-lg shadow-lg flex overflow-hidden">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Home