import React, { useState } from "react"
import styles from "./login.module.css"

const LoginForm = () => {
    const [name, setName] = useState("")

    return (
        <section className={styles.contact}>
            <h3>Login</h3>
            <div className={styles.center}>
            <form>
                <div>
                    <label htmlFor="name">Display Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        className={styles.formControl}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.submit}>Join Video Chat</button>
            </form>
            </div>
        </section>
    )
}

export default LoginForm