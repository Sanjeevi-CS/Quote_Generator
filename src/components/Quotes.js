import React,{useState,useEffect} from "react";
import {TiSocialTwitter} from 'react-icons/ti'
import {CgTwitter} from 'react-icons/cg'
import {FaQuoteLeft} from 'react-icons/fa'
const Quotes = () => {
    const[quote,setQuote]= useState('title');
    const[author,setAuthor]= useState('');
    useEffect(()=>{
      getQuotes()
    },[]);
    const getQuotes=()=>{
        let url='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(url)
          .then(res=>res.json())
          .then(data=>{
            let dataQuotes=data.quotes;
            let random=Math.floor(Math.random()*dataQuotes.length);
            let randomQuote=dataQuotes[random];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
          })
    }
    const handleClick=()=>{
       getQuotes();
       const randomColors =  '#' + Math.random().toString(16).slice(2,8)
        setChangeColor(randomColors)
    }
    const [changeColor, setChangeColor] =useState('#256894')
    return(
    <div id="main" style={{backgroundColor:`${changeColor}`}}>
     <div id="quote-box"style={{backgroundColor:`${changeColor}`}}>
        <div id="text">
           <p>
            <FaQuoteLeft/><> </>
            {quote}
           </p>
        </div>
        <div id="author">
           <p>- 
            {author}
           </p>
        </div>
        <div id="buttons" >
            <div className="social">
                <a href={`https://twitter.com/intent/tweet?text=${quote}`} id="tweet" target={"_blank"} >
                    <button id="media" style={{backgroundColor:`${changeColor}`}}><TiSocialTwitter size="small"/></button>
                </a>
                <a href="https://www.tumblr.com/" id="tumble">
                    <button id="medias" style={{backgroundColor:`${changeColor}`}}><CgTwitter size="small"/></button>
                </a>
            </div>
            <button onClick={handleClick} id="new-quote">New Quotes</button>
        </div>
     </div>
     </div>
    );
}
export default Quotes;