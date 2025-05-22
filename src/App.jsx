import ChatIcon from "./components/ChatBotIcon";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <main
      className="relative flex flex-col min-h-screen w-full px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-10 pb-20 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/bg-3.jpg')" }}
    >
      <Header />
      <Hero />
      <ChatIcon />
      <ChatWidget />
    </main>
  );
}

export default App;
