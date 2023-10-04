

function CharactorList({characters}) {
  return (
    <div className="characters-list">
        {characters.map((item)=>
            <Character key={item.id} item={item}  />

        )}
        
    </div>
  )
}

export default CharactorList;


function Character({item}){
    <div className="list__item"></div>
}