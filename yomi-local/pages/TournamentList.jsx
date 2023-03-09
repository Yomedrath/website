import { request } from "../lib/startggGQL"
import { TOUNREYBYCOUNTRY_QUERY, TOUNREYBYCOUNTRY_VARS } from "../lib/Queries";
import TournamentCard from "../components/TournamentCard";

export async function getStaticProps() {
    const data = await request({
      query: TOUNREYBYCOUNTRY_QUERY,
      variables: TOUNREYBYCOUNTRY_VARS
    });
    return {
        props: { data }
    };
  }

export default function TournamentList(props) {
    const { data } = props;
    const stringifytlist =    JSON.stringify(data.tournaments.nodes);
    const tourneyListHtml = data.tournaments.nodes;
    console.log(tourneyListHtml)

    return (tourneyListHtml.map(item => `<div><h2>` + item.name + `</h2>/div>`))

}


   //const tourneyListHtml = JSON.parse(data);
    /*const outputList = tourneyListHtml.map(item => `<div><h2>` + item.name + `</h2>/div>`);
    const Test = ({tourneyListHtml}) => (
        <div>
          {tourneyListHtml.map(tourney => (
            <div className="tourney" key={tourney.name}>{tourney.url}</div>
          ))}
        </div>
      ); 
      */


      /*render(){
        return(
        <div>
          <Test tourneyListHtml={tourneyListHtml} />
        </div>,
        document.getElementById('container')
      );
      }
      */
    /*return(
            tourneyListHtml.forEach(element => {
                console.log("testarne");
                    <h1>Tst</h1>
            })
   )*/