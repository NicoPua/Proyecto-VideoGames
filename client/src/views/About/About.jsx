import style from "./About.module.css";

const About = () => {
    return (
      <div className={style.globalCont}>
        <div className={style.contMyProfile}>
          <h2 className={style.title}>Gonzalo Nicolás Púa</h2>
          <div className={style.contTacts}>
            <img className={style.imgProfile} src="https://media.licdn.com/dms/image/C4E03AQEKF2VugY2kPw/profile-displayphoto-shrink_200_200/0/1600421962063?e=1686787200&v=beta&t=9F10SC3iABYkwZJoWkLxlWnyFRTVFsunL0O93weZJzA" alt=""/>
            <div>
              <p>Contacts:</p>
              <ul>
                <li>LinkedIn: <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gonzalo-nicolas-pua-a962901b6/'>Gonzalo Nicolas Pua</a></li>
                <li>GitHub: <a target="_blank" rel="noopener noreferrer" href='https://github.com/NicoPua'>NicoPua</a></li>
                <li>Instagram: <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nicoo.pua/'>@nicoo.pua</a></li>
                <li>E-mail: nicopua7@gmail.com</li>
              </ul>
            </div>
          </div>
          <p className={style.aboutMe}>¡Hola! Mi nombre es Gonzalo Nicolás Púa, creador de esta API.
            Realicé esta aplicación con herramientas que me brindó el Bootcamp de SoyHenry.<br/>
            Soy técnico electrónico, aposté por SoyHenry porque decidí incorporarme al amplio sector IT 
            y así poder obtener grandes oportunidades en este nuevo mundo. <br/>¡Espero que la API les sea agradable y puedan disfrutar los estilos
            y el diseño de cada componente!</p>
        </div>
      </div>
    );
  }
  
  export default About;