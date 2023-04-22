import {useState, useEffect} from "react";

export default function Skill(){
    const [skill, setSkill] = useState([]);

useEffect(() => {
    const getSkill = async () => {
          fetch('https://laravel.wingochan.com/api/skills')
          .then(res => res.json())
          .then(data => setSkill(data));
        }
       getSkill();
      }, []);
return (
    <div>
       <main id="main">
        <div class="skill-block">
        <h1 class="title">Skill</h1>
        {skill.map(item => (
          <div key={item.id}>
            <div class="skill-title">
                <p>{item.name}(<img src={`http://laravel.wingochan.com/storage/${item.logo}`} class="skill-img"></img>) {item.percent}%</p>
            </div>
            <div class="skill-bar" style={{width: `${item.percent}%`, backgroundColor: 'rgb(232, 189, 72)'}}></div>
          </div>
        ))}
        </div>
       </main>
    </div>
);
}