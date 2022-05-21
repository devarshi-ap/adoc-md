import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ReactMarkdown from "react-markdown"
import Asciidoctor from "asciidoctor";

const asciidoctor = Asciidoctor()

export default function OutputCol() {
    
    // reads state from store
    const storeInput = useSelector(state => state.input.value)
    
    // local state holds select value
    const [ select, setSelect ] = useState("AsciiDoc");

    const html = select === "AsciiDoc" ?
        <div dangerouslySetInnerHTML={{ __html: asciidoctor.convert(storeInput) }}></div> :
        <ReactMarkdown>{storeInput}</ReactMarkdown>;

    function copyRaw() {
        const data = {content: storeInput}
        const baseFile = select === "Markdown" ? "md" : "adoc"; 
        
        axios
            .post(`http://localhost:3001/api/${baseFile}`, data)
            .then(console.log(`input field written to test.${baseFile}`));
        
        axios
            .get(`http://localhost:3001/file/${baseFile}`)
            .then((res) => {
                alert(res.data.content)
            });
    }

    return (
        <div className='column output-col frosted'>
            <div className="select is-small is-fullwidth">
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option>AsciiDoc</option>
                    <option>Markdown</option>
                </select>
            </div>
            
            <div className="content">{html}</div>



            <button
                className="button is-link is-small is-light is-outlined"
                type="submit"
                style={{ margin: 'auto 1rem' }}
                onClick={copyRaw}
            >View raw {select === "Markdown" ? ".md" : ".adoc"}</button>
        </div>
    )
}