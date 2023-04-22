import Project from "../components/Project";
import Education from "../components/Education";
import Employment from "../components/Employment";
import Skill from "../components/Skill";

export default function Home() {
  return(
    <main id="main">
      <div class="site-slogan">
          <h1>Wingo Chan</h1>
          <p>Web Designer / Developer</p>
          <p>Your solution to all Web Problems</p>
        </div>   
      <Education />
      <Employment />
      <Project />
      <Skill />
      <form>
        <label>Contact</label>
        <input type="text" class="text-input"></input>
        <label>Message</label>
        <textarea rows="6"></textarea>
        <input type="submit" id="submit"></input>
      </form>
    </main>
  );
}
/*
{
  "id":"80179f4c4dc176c5bcc86f839fa6d416",
  "text":"When possums are playing `possum`, they are not \"playing.\" They actually pass out from sheer terror.",
  "source":"djtech.net",
  "source_url":"http://www.djtech.net/humor/useless_facts.htm",
  "language":"en",
  "permalink":"https://uselessfacts.jsph.pl/api/v2/facts/80179f4c4dc176c5bcc86f839fa6d416"
}
*/