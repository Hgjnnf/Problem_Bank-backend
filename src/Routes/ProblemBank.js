import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProblemCard from './ProblemCard'
//import * as styledComponents from "https://cdn.skypack.dev/styled-components@5.3.3";
import "../index.css"


export default function ProblemBank() {
    const [problems, setProblems] = useState([]);
    const [option, setOption] = useState(0);

    const fetchProblemList = () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (option === 0){
            axios.get('https://problem-bank-backend.herokuapp.com/api/list/all', config).then(
                res => {  
                    setProblems(res.data.problems_list.reverse());
                }
            ).catch(
                err => {
                    alert(err.message);
                }
            )
        }else if (option === 1){
            axios.get('https://problem-bank-backend.herokuapp.com/api/list/all_like', config).then(
                res => {
                    setProblems(res.data.problems_list);
                }
            ).catch(
                err => {
                    alert(err.message);
                }
            )
        }
        
    }

    useEffect(() => {
        fetchProblemList();
    }, [option, problems]);


    const addOneLike = (problem) => { 
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }
        const postId = problem._id;
        axios.put('https://problem-bank-backend.herokuapp.com/api/updateLike', {postId}, config);    
        fetchProblemList();       
    }

    const changeToRecent = () => {
        setOption(0);
    }
    const changeToPopular= () => {
        setOption(1);
    }


    return (
        <div>
           <div className="navbar">
                <a href="/">Home</a>
                <Link to = "/Post">Post a problem</Link>
            </div>
            <h2>Problem Bank</h2>
            <div className="container">
                <div className="sortButton">
                    <button onClick={changeToRecent} className="sortButtonTag">
                    Recent
                    </button>
                    <button onClick={changeToPopular} className="sortButtonTag">
                    Popular
                    </button>
                </div>
                {problems.map(                  
                    (problem) => {
                        return <ProblemCard key={problem._id} addOneLike={addOneLike} problem={problem} />
                    }
                )}
            </div>
        </div>

    )
}






