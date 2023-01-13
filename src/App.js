import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/List/TodoList";
import Create from "./pages/Create/Create";
import Detail from "./pages/Detail/Detail";
import Edit from "./pages/Edit/Edit";
import NavbarApp from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/employee/create" element={<Create />}></Route>

          <Route path="/employee/detail/:empid" element={<Detail />}></Route>
          <Route path="/employee/edit/:empid" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
