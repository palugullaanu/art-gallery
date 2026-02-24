export default function Login() {
  return (
    <div style={{
      maxWidth: "400px",
      margin: "auto",
      padding: "20px"
    }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <button
        style={{
          width: "100%",
          padding: "10px",
          background: "black",
          color: "white",
          border: "none"
        }}
      >
        Login
      </button>
    </div>
  );
}