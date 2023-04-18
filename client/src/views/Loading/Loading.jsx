import style from "./Loading.module.css"

const Loading = () => {
    return (
      <div className={style.container}>
        <img className={style.loading}
        src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
        alt="gif"
        />
      </div>
    );
  }
  
  export default Loading;