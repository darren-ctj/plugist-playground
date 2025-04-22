import styles from "./Login.module.css";
import InputGroup from "../../components/InputGroup";
import { useLoginForm } from "../../features/login/hooks/useLoginForm";

export default function Login() {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useLoginForm();

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-wrapper"]}>
        <h1 className={styles["login-title"]}>My Login Form</h1>
        <p className={styles["login-subtitle"]}>This is my description </p>
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
          <InputGroup>
            <label style={{ color: "black" }}>Email</label>
            <input
              placeholder="Fill your email address..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <label style={{ color: "black" }}>Password</label>
            <input
              placeholder="Fill your password here..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <button type="submit" className={styles["login-button"]}>
            Click Here
          </button>
        </form>
      </div>
      <div className={styles["login-banner"]} />
    </div>
  );
}
