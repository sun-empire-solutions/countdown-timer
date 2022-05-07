import { Footer } from "../components/Footer";
import { CountdownTimer } from "../components/CountdownTimer";

const CountdownContainer = () => {
  return (
    <div className="container-countdown">
      <CountdownTimer />
      <Footer />
    </div>
  );
};

export { CountdownContainer };
