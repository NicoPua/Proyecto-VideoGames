import style from "./Paginado.module.css"

const Paginado = ({currentPage,setCurrentPage,cantGames, gamesPag}) => {
  let pags = [];
  for (let i = 1; i <= Math.ceil(cantGames/gamesPag); i++) {
    pags.push(i);        
  }
  return (
    <div>
      <div className={style.contPages}>
        <p>Pages:</p>
        {currentPage !== 1
        ? <button className={style.buttonPages} onClick={()=> setCurrentPage(currentPage-1) }>◀</button>
        : <></>}

        {pags.map((page,index)=>{
            return(
                <button key={index} onClick={()=> setCurrentPage(page)} className={ page === currentPage? style.buttonC : style.button}>
                    {page}
                </button>
            )
        })}

        {currentPage !== Math.ceil(cantGames/gamesPag)
        ? <button className={style.buttonPages} onClick={()=> setCurrentPage(currentPage+1) }>▶</button>
        : <></>}
      </div>
    </div>
  );
}

export default Paginado;