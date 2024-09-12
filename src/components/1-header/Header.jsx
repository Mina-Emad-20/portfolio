import { useEffect, useState } from "react";
import "./header.css";


const Header = () => {
    const [showModel, setShowModel] = useState(() => false)
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }, [theme])

    return (
        <header className="flex">
            <button className="menu icon-menu flex" />
            <div />
            <nav>
                <ul className="flex">
                    <li>
                        <a href="#hero">About</a>
                    </li>
                    <li>
                        <a href="#main">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <button className="mode flex" onClick={() => {
                //! send value to local storage
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                //! get value from local storage
                setTheme(localStorage.getItem("currentMode"))
            }
            }>
                {theme === "dark" ? (<span className="icon-moon-o"></span>) : (<span className="icon-sun"></span>)}
            </button>
            {showModel && (
                <div className="fixed">
                    <ul className="model">
                        <li>
                            <button className="icon-close" onClick={() => {
                                setShowModel(false)
                            }
                            } />
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Articles</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Speaking</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Uses</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;