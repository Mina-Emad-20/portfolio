import { useState } from 'react';
import './main.css'
import { myProjects } from './myProjects';



const Main = () => {

    const [currentActive, setCurrentActive] = useState("all")


    const [arr, setArr] = useState(myProjects)


    return (
        <main id='main' className='flex'>
            <section className='flex left-section'>
                {/****************** all button  ********************/}
                <button onClick={() => {
                    setCurrentActive("all")
                    setArr(myProjects)
                }
                } className={currentActive === "all" ? 'active' : null}>All Projects</button>

                {/******************** css button *********************/}
                <button onClick={() => {
                    setCurrentActive("css")
                    const newArr = myProjects.filter((item) => {
                        return item.category === "css"
                    }
                    )
                    setArr(newArr)
                }
                } className={currentActive === "css" ? 'active' : null}>HTML & CSS & BootStrap</button>

                {/********************* java button *******************/}
                <button onClick={() => {
                    setCurrentActive("java")
                    const newArr = myProjects.filter((item) => {
                        return item.category === "java"
                    }
                    )
                    setArr(newArr)
                }
                } className={currentActive === "java" ? 'active' : null}>JavaScript</button>

                {/******************* react button ********************/}
                <button onClick={() => {
                    setCurrentActive("react")
                    const newArr = myProjects.filter((item) => {
                        return item.category === "react"
                    }
                    )
                    setArr(newArr)
                }
                } className={currentActive === "react" ? 'active' : null}>React</button>
            </section>
            <section className='right-section flex'>
                {arr.map((item) => {
                    return (
                        <article key={item.imgpath} className='card'>
                            <img width={255} src={item.imgpath} alt="" />
                            <div style={{ width: "255px" }} className="box">
                                <h6 className='name'>{item.title}</h6>
                                <p className='description'>{item.description}</p>

                                <div className="iconsLink flex">
                                    <a href={item.link} target='blank' className="icon-link"></a>
                                    <a href={item.github} target='blank' className="icon-github"></a>
                                </div>
                            </div>
                        </article>
                    )
                }
                )}
            </section>
        </main>
    );
}

export default Main;