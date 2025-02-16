import styles from "./Login.module.css";
import InputGroup from "../../components/InputGroup";
import { useLoginForm } from "../../features/login/hooks/useLoginForm";

export default function Login() {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useLoginForm();

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-card"]}>
        <h1 className={styles["login-title"]}>Login Here</h1>
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
          <InputGroup>
            <label>Email</label>
            <input
              placeholder="Fill your email..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <label>Password</label>
            <input
              placeholder="Fill your password..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          <button type="submit" className={styles["login-button"]}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
