import {useState, useEffect} from "react";

export default function  EducationList() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const getEducation = async () => {
      fetch('https://laravel.wingochan.com/api/education')
      .then(res => res.json())
      .then(data => setEducation(data));
    }
   getEducation();
  }, []);

  return (
    <div>
       <main id="main">
        <div class="education-block">
        <h1 class="title">Education</h1>
        {education.map(item => (
          <div className="basic-item" key={item.id}>
            <h2>{item.title}</h2>
            <p>Program: {item.content}</p>
            <p>Graduation Date: {item.graduated_at}</p>
          </div>
        ))}
        </div>
       </main>
    </div>
  );
};