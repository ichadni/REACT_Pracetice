import React,{useState} from 'react'
import style from './FAQ.module.css';

const FAQ = ({id, question, answer}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <article className={style.faq}>
        <div>
            <h2>{question}</h2>
            <button onClick={() => setToggle(!toggle)}>
                {toggle ? '-' : '+'}
                
            </button>
        </div>
        <div>
            {toggle && <p>{answer}</p>}
        </div>
        
    </article>
  )
}

export default FAQ
