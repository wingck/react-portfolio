import {useState, useEffect} from "react";

export default function Project(){
    const [project, setProject] = useState([]);

useEffect(() => {
    const getProject = async () => {
          fetch('https://laravel.wingochan.com/api/projects')
          .then(res => res.json())
          .then(data => setProject(data));
        }
       getProject();
      }, []);
return (
    <div>
       <main id="main">
        <h1 class="title">Project</h1>
        <div class="project-block">
        {project.map(item => (
          <div key={item.id} class="project-subblock">
            <a href={item.url}><img class="project-img" src={item.image}></img></a>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <div  class="img-block">
            {item.skills.map(skill => (
                <div key={skill.id}>
                    <div>
                        <p><img src={`http://laravel.wingochan.com/storage/${skill.logo}`} alt={skill.name} class="skill-img"/> </p>
                    </div>
                </div>
                ))}
              </div>
          </div>
        ))}
        </div>
       </main>
    </div>
);
}