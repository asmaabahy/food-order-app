import logo from "../assets/logo.jpg";
export function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button className="button">Cart</button>
      </nav>
    </header>
  );
}
