import Donut from "@/components/Donut";
import Sprinkle from "@/components/Sprinkle";
import { randomColor } from "@/utils/randomColor";

function Experience() {
  return (
    <>
      {/* Lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <color attach="background" args={["#FF86C4"]} />

      {/* Objects */}
      <Donut />
      {/* <Sprinkle /> */}
      {Array.from({ length: 200 }).map((_, i) => {
        const color = randomColor();
        return <Sprinkle key={i} z={-i * 0.1 - 10} color={color} />;
      })}
    </>
  );
}

export default Experience;