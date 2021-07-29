import { useEffect, useState } from "react"
import Instance from "./Instance"
const DeleteTournament = (props) => {
    const [del, setDel]= useState([]);
    const delTournament=(url)=>{
        Instance
        .delete('/tournaments/'+url, {data:null})
        .then((response) => {
            setDel(response)
        })
          .catch((error) => { console.error(error) })
          props.updated();
      }
        return (
            <div>
            {props.isLoading && <div>Loading..</div>}
    {!props.isLoading && 
        <div>
            {props.tournaments.data.data.map((tournament) => {
                return(
                    <p key={tournament.id}>
                        {tournament.attributes.name}<br/>
                        {tournament.attributes.url}
                        {tournament.attributes.tournamentType}
                        <button onClick={()=>{delTournament(tournament.attributes.url)}}>Delete</button>
                    </p>
                )
            })}
        </div>}
        </div>
        )
}
export default DeleteTournament;