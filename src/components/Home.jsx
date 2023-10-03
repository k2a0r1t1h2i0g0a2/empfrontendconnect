import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [empData, setEmpData] = useState([]);
    useEffect(() => {
        fetchData();
},[])
    const fetchData = async () => {
        await axios
          .get("http://localhost:4000/api/getemp")
          .then(res => setEmpData(res.data))
          .catch((err) => {
            console.log(err);
          });
    }
    console.log(empData);
    return (
        <div>
            {empData.map((item,index) => {
                return (
                  <>
                        <div key={index}>
                            <h4>_id:{item._id}</h4>
                      <h4>FirstName:{item.firstName}</h4>
                      <h4>SecondName:{item.lastName}</h4>
                      <h4>Email:{item.email}</h4>
                      <h4>Position:{item.position}</h4>
                    </div>
                  </>
                );
            })}
           
        </div>
    );
};

export default Home;