import Accordions from "./Accordions/Accordions";
import { accordionData } from "./Accordions/utils/content";
function App() {
  return (
    <>
      <h1>React 7 hr And 10 Projects </h1>
      <div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => {
            return (
              <Accordions
                title={title}
                content={content}
                key={Math.random() * 100}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
