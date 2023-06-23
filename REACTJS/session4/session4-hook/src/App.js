import "./App.css";
import ParentContext from "./components/DemoUseContext/ParentContext";
import DemoUseEffect from "./components/DemoUseEffect";
import DemoUseReducer from "./components/DemoUseReducer";
import DemoUseRef from "./components/DemoUseRef";
import DemouseState from "./components/DemouseState";
import IndexColor from "./components/LiftingStateUp/IndexColor";
import Count from "./components/MD02-S04-BT-Bai 1/Count";
import CountText from "./components/MD02-S04-BT-Bai 2/CountText";
import CountTime from "./components/MD02-S04-BT-Bai 4/CountTime";
import Counter from "./components/MD02-S04-TH-Bai 1/Counter";
import OrderForm from "./components/MD02-S04-TH-Bai 2/OrderForm";
import ProductList from "./components/MD02-S04-TH-Bai 3/ProductList";
import TaskList from "./components/MD02-S04-TH-Bai 4/TaskList";
import SearchAndFilter from "./components/MD02-S04-TH-Bai 5/SearchAndFilter";
import Form from "./components/MD02-S04-TH-Bai 6/Form";
import TemperatureConverter from "./components/MD02-S04-TH-Bai 7/TemperatureConverter";
import ShippingCalculator from "./components/MD02-S04-TH-Bai 8/ShippingCalculator";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* <DemouseState /> */}
      {/* <DemoUseEffect /> */}
      {/* <Counter /> */}
      {/* <OrderForm /> */}
      {/* <ProductList /> */}
      {/* <TaskList /> */}
      {/* <SearchAndFilter /> */}
      {/* <Form /> */}
      {/* <TemperatureConverter /> */}
      {/* <ShippingCalculator /> */}
      {/* <Count /> */}
      {/* <CountText /> */}
      {/* <CountTime /> */}
      {/* <TodoList /> */}
      {/* <Todo /> */}
      {/* <IndexColor /> */}
      {/* <ParentContext /> */}
      {/* <DemoUseReducer /> */}
      <DemoUseRef />
    </div>
  );
}

export default App;
