import MainComponent from "@/components/main-component";
import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex justify-center w-screen h-screen">
        <SideBar />
        <MainComponent />
      </div>

    </main>
  )
}
