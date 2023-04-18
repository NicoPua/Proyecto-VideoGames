const Paginado = ({currentPage,setCurrentPage,cantGames, gamesPag}) => {

    let pags = [];
    for (let i = 1; i <= Math.ceil(cantGames/gamesPag); i++) {
        pags.push(i);        
    }
    return (
      <div>
        {pags.map((page,index)=>{
            return(
                <button key={index} onClick={()=> setCurrentPage(page) } className={ page === currentPage? "Active": ""}>
                    {page}
                </button>
            )
        })}
      </div>
    );
  }
  
  export default Paginado;