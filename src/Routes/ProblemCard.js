import React, {useState, useEffect} from 'react'
import { AiFillLike } from "react-icons/ai";
import "../index.css"

const ProblemCard = ({problem, addOneLike}) => {
    let [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        setLikeCount(problem.likeCount)
    }, [])

    return (                            
        <div className="message-blue">
            <p className="message-content">{problem.title}
            </p>
            <hr />
            <p className="message-content message-body">{problem.body}</p>
            <hr />
            <button onClick={()=>{
                setLikeCount((prevLike) =>
                    prevLike + 1
                )
                addOneLike(problem)
            }}>
                <AiFillLike />{likeCount}
            </button>
        </div>
    )
}

export default ProblemCard;