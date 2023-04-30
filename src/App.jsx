import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import './App.css'
import Loader from "./components/Loader";
// import { Loader } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;