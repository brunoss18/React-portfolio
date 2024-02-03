import './style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="container">

     <nav className='navbar'>
      <span className='nameLogo'>Name Name</span>
        <ol>
          <li>
            About Me
            </li>
            <li>
            Experience
            </li>
            <li>
            Projects
            </li>
            <li>
           Hire me
            </li>
        </ol>
     </nav>

     <main className='main'>
        <div>
          <p>
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised
          </p>
          <div className='buttons'>
            <button>linkedin</button>
            <button>github</button>
            <button>saiba-mais</button>
          </div>
        </div>
     </main>

     <section className="sectionAbout">
     

    <div>

</div>
     </section>

    </div>
  );
}

export default App;
