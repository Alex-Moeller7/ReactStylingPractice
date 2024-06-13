import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
      <div className="center">
        <p>Note: The "Sign-In" and "Create Account" buttons are purely for aesthetics.</p>
        <p>This page is purely for styling pratice, meaning the buttons do not have a function.</p>
      </div>
    </>
  );
}
