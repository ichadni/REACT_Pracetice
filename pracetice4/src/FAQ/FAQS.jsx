import React,{useState} from 'react'
import { FAQData } from './data.jsx';
import FAQ from './FAQ.jsx';
import style from './FAQS.module.css';




const FAQS = () => {
    
    const [faqs, setFaqs] = useState(FAQData);
  return (

    <main className={style.container}>
        <section className={style.faqs}>
            <h1>FAQs</h1>
            {faqs.map((faq) => <FAQ key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
}

export default FAQS
