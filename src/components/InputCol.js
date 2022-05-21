import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../store/inputSlice';
import TextareaAutosize from 'react-textarea-autosize';

export default function InputCol() {
    
    // for dispatching actions
    const dispatch = useDispatch();

    // state for input from textarea
    const [inputValue, setInputValue] = useState('');

    // updates state of textarea input on change
    const handleChange = (event) => {
        dispatch(updateValue({ value: event.target.value }));
        setInputValue(event.target.value);
    };

    // clears state of textarea input of change
    const handleReset = () => {
        setInputValue('');
        dispatch(updateValue({ value: '' }));
    };

    return (
        <div className="column input-col frosted">
            <form>
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
