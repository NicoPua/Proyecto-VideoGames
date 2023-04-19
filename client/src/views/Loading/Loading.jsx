import style from "./Loading.module.css"

const Loading = () => {
    return (
      <div className={style.container}>
        <img className={style.loading}
        src="https://i.gifer.com/YCZH.gif"
        alt="gif"
        />
      </div>
    );
  }
  
  export default Loading;