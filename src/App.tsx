import Nav from "./componets/Nav"
import Banner from "./componets/Banner"
import Techstack from "./componets/Techstack/techstack";
import YourStack from "./componets/YourStack";
import Footer from "./componets/Footer";
import { Suspense, useState } from "react";
import type TechType from "./Types/techtypes";
import { toast } from "react-toastify";

const techStackPromise = async()=>{
  const res=await fetch('/data.json');
  const data= await res.json();
  return data;
}


function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<TechType[]>([]);

  const addToStack = (technology: TechType) => {
    setSelectedTechnologies((current) => {
      if (current.some((item) => item.id === technology.id)) {
        toast.warning(`${technology.name} is already in your stack.`);
        return current;
      }

      toast.success(`${technology.name} added to your stack.`);
      return [...current, technology];
    });
  };

  const removeFromStack = (technologyId: string) => {
    const technology = selectedTechnologies.find((item) => item.id === technologyId);

    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== technologyId),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (selectedTechnologies.length > 0) {
      setSelectedTechnologies([]);
      toast.info("All technologies removed from your stack.");
    }
  };

  return (
    <>
     <Nav/>
     <Banner/>
     <Suspense fallback={<h2>loading......</h2>}>
        <main className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Techstack
            techStackPromise={techStackPromise()}
            selectedTechnologies={selectedTechnologies}
            onAddToStack={addToStack}
          />
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </main>
     </Suspense>
    <Footer/>
     
    </>
  )
}

export default App
