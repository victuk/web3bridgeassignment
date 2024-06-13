import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VerifyEmail() {

    const params = useParams();

    const [text, setText] = useState("Verifying email... Please wait");
    const [state, setState] = useState("");

    const verifyEmail = async () => {
        const response = await axios.post();
    }

    useEffect(() => {
        console.log(tokenId);
        
    }, []);

    return (
        <div>
            {text}
        </div>
    );
}