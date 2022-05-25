import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateValue, updateInputType } from '../store/inputSlice';
import TextareaAutosize from 'react-textarea-autosize';

export default function InputCol() {
    
    // for dispatching actions
    const dispatch = useDispatch();

    // state for input from textarea
    const [inputValue, setInputValue] = useState('');

    // local state holds select value
    const [ select, setSelect ] = useState("AsciiDoc");

    // UPDATES input type in store
    const handleSelectChange = (event) => {
        dispatch(updateInputType({ inType: event.target.value }));
        setSelect(event.target.value);
    }

    // UPDATES textarea input field
    const handleChange = (event) => {
        dispatch(updateValue({ value: event.target.value }));
        setInputValue(event.target.value);
    };

    // CLEARS textarea input field
    const handleReset = () => {
        setInputValue('');
        dispatch(updateValue({ value: '' }));
    };

    return (
        <div className="column input-col frosted">
            <form>

                <div className="select is-small is-fullwidth">
                    <select value={select} onChange={handleSelectChange}>
                        <option>AsciiDoc</option>
                        <option>Markdown</option>
                    </select>
                </div>

                <div className="control">
                    <TextareaAutosize
                        className="textarea"
                        value={inputValue}
                        onChange={handleChange}
                        minRows={10}
                        placeholder={'Type text here'}
                    />
                </div>

                <button
                    className="button is-link is-small is-light is-outlined"
                    type="submit"
                    style={{ margin: 'auto 0' }}
                    onClick={handleReset}
                >Clear</button>

            </form>
        </div>
    );
}
