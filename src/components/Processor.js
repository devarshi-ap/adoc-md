import InputCol from "./InputCol";
import OutputCol from "./OutputCol";

export default function Processor() {
    return (
        <div className='columns' style={{width: "100%", height: "fit-content"}}>
            
            <InputCol />
            <OutputCol />

        </div>
    )
}