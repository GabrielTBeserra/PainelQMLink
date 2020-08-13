import openSocket from 'socket.io-client';


const socket = openSocket("http://localhost:5050");


export function listPlayers(){
    socket.on("player-list" , (playerList:any) => console.log(playerList));
}