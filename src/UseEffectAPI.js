import React, { useEffect, useState } from 'react'
import App from './App.css'


const UseEffectAPI = () => {

    const [user, setUers] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://api.github.com/users');
        setUers(await response.json());
     }

    useEffect(() => { getUser();}, []
    );

    return (
        <>
            <h2>List  Of GitHub User</h2>

            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        user.map((curElem) => {
                            return (
                                <>

                                    <div className="col-12 col-md-4 mt-5 ">
                                        <div className="card p-2">
                                            <div className="d-flex align-item-center">
                                                <div className="image"><img src={curElem.avatar_url} alt="" className='rounded' width="155" /></div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textleft">{curElem.login}</h4><span className="textLeft">Web devloper</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-while states">
                                                        <div className="d-flex flex-column"> <span className="articles">articles</span> <span className="number1">{curElem.type}</span> </div>
                                                        <div className="d-flex flex-column"> <span className="followers">followers</span> <span className="number2">{curElem.id + 10}</span> </div>
                                                        <div className="d-flex flex-column"> <span className="rating">rating</span> <span className="number3">5.6</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}

export default UseEffectAPI;
