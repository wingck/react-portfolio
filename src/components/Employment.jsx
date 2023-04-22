import {useState, useEffect} from "react";

export default function Employment(){
    const [employment, setEmployment] = useState([]);

useEffect(() => {
    const getEmployment = async () => {
          fetch('https://laravel.wingochan.com/api/employment')
          .then(res => res.json())
          .then(data => setEmployment(data));
        }
       getEmployment();
      }, []);
return (
    <div>
       <main id="main">
        <div class="employment-block">
        <h1 class="title">Employment</h1>
        {employment.map(item => (
          <div className="basic-item" key={item.id}>
            <h2>{item.employer}</h2>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <p>Start Date: {item.started_at}</p>
            <p>End Date: {item.ended_at}</p>
          </div>
        ))}
        </div>
       </main>
    </div>
);
}