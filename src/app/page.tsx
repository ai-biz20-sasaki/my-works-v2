import Link from 'next/link';
import Navbar from "@/components/navibar"
import Header from "@/components/header"
import LeftSidebar from "@/components/left-sideber"
import RightSidebar from "@/components/right-sidebar"
import Footer from "@/components/footer"

export default function Home() {
 
  return (
    <div>
      <nav className="flex flex-row justify-center p-2 m-1">
        <Header />
      </nav>
      <div className="flex flex-row p-2 m-1">
        <div className="basis-1/2 p-2 m-1">
          <LeftSidebar />
        </div>        
        <div className="basis-1/2 p-2 m-1">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}
