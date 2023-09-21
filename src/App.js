import "./styles.css";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import TodoModel from "./components/TodoModel";
import "./styles/app.css";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <div className="container">
        <PageTitle>To Do List</PageTitle>
        <div className="app__wrapper">
          <AppHeader />
          <AppContent />
        </div>
        <TodoModel />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem"
          }
        }}
      />
    </>
  );
}
