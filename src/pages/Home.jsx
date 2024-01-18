import { Chat, Sidebar } from "../components"


const Home = () => {
  return (
    <div className="w-[50rem] h-[25rem] border border-red-500 rounded-lg shadow-lg flex overflow-hidden">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Home