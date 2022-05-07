import { CountdownContainer } from "./containers/CountdownContainer";
import { Footer } from "./containers/Footer";

const App = () => {
  return (
    <div className="countdown-timer_container">
      <CountdownContainer />
      <Footer />
    </div>
  );
};
export { App };
