import { Component } from "react";
import './Home.css'
import Header from "../../common/header/Header";
// import { ImageList } from '@material-ui/core'
// import { ImageListItem } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import moviesData from "../../common/header/moviesData";

class Home extends Component{
    render(){
        const grid = {
            display: "flex",
            padding: 0,
            flexWrap: "nowrap",
            overflowX: "auto",
          };
          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const dateObj='0';
        return(
            <div>
                <Header></Header>
                <p className="title">Upcoming Movies</p>

                <GridList style={grid} cellHeight={250} cols={5} >
                    {moviesData.map(tile => (
                    <GridListTile key={tile.poster_url} cols={1}>
                        <img src={tile.poster_url} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}/>
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div className="left" style={{padding: "20px"}}>
                    <GridList cellHeight={350} cols={3} >
                        {moviesData.slice(0, 4).map(tile => (
                         
                            
                        <GridListTile key={tile.poster_url} cols={1}>
                            <img src={tile.poster_url} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={"Release Date:"+days[new Date(tile.release_date).getDay()]+ " " +months[new Date(tile.release_date).getMonth()]+ " " +new Date(tile.release_date).getDate()+ " " +new Date(tile.release_date).getFullYear()}/>
                            </GridListTile>
                        ))}
                    </GridList>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        )
    }
    date1(){
        var n=[];
        var d = new Date('2014-11-03T19:38:34.203Z');
        var s = d.getUTCDate();
        n.push(s);
        s=d.getUTCMonth();
        n.push(s);
        s=d.getUTCFullYear();
        n.push(s);
    }
}
export default Home