import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown"
import Asciidoctor from "asciidoctor";

const asciidoctor = Asciidoctor()

export default function OutputCol() {
    
    // reads state from store
    const storeInput = useSelector(state => state.input.value)
    
    // local state holds select value
    const inputType = useSelector(state => state.input.inType)

    const html = inputType === "AsciiDoc" ?
        <div dangerouslySetInnerHTML={{ __html: asciidoctor.convert(storeInput) }}></div> :
        <ReactMarkdown>{storeInput}</ReactMarkdown>;

    const showHTML = () => {
        try {
            if (storeInput === '') {
                alert('input was empty.')
            } else {
                alert(html.props.dangerouslySetInnerHTML.__html);
                console.log(html.props.dangerouslySetInnerHTML.__html);
            }
        } catch (e) {
            alert('input was intranslatable (or unchanging).')
        }
    }

    return (
        <div className='column output-col frosted'>
            <div className="content">{html}</div>

            <button
                className="button is-link is-small is-light is-outlined"
                type="submit"
                style={{ margin: 'auto 0' }}
                onClick={showHTML}
            >Show HTML</button>
        </div>
    )
}