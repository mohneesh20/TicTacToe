import "./styles.css";
import React, { useState } from "react";
export default function App() {
  let flag = true;
  let counter = 0;
  let Vals = {};
  const [points, setPoints] = useState({
    player1: 0,
    player2: 0
  });
  var configure = (task) => {
    if (task === "NEW") {
      for (let i = 1; i < 10; i++) {
        document.getElementById(i.toString()).style.pointerEvents = "auto";
        document.getElementById(i.toString()).style.backgroundColor = "white";
        document.getElementById(i.toString()).innerHTML = "";
        Vals[i.toString()] = undefined;
      }
    } else {
      for (let i = 1; i < 10; i++) {
        document.getElementById(i.toString()).style.pointerEvents = "auto";
        document.getElementById(i.toString()).style.backgroundColor = "white";
        document.getElementById(i.toString()).innerHTML = "";
        Vals[i.toString()] = undefined;
      }
      points.player1 = 0;
      points.player2 = 0;
      setPoints({ ...points });
    }
  };
  var finish = () => {
    for (let i = 1; i < 10; i++) {
      document.getElementById(i.toString()).style.pointerEvents = "none";
    }
  };
  var chkDia = () => {
    if (Vals["1"] === Vals["5"] && Vals["9"] === Vals["5"]) {
      if (Vals["1"] === 0) {
        document.getElementById("1").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("9").style.backgroundColor = "green";
        document.getElementById("winner_status").innerHTML = "PLAYER1 WINS!";
        points.player1++;
        console.log(points.player1);
        setPoints({ ...points });
        console.log("PLAYER1 WINS!");
        finish();
        return;
      } else {
        if (Vals["1"] === 1) {
          document.getElementById("1").style.backgroundColor = "green";
          document.getElementById("5").style.backgroundColor = "green";
          document.getElementById("9").style.backgroundColor = "green";
          document.getElementById("winner_status").innerHTML = "PLAYER2 WINS!";
          console.log("PLAYER2 WINS!");
          points.player2++;
          setPoints({ ...points });
          finish();
          return;
        }
      }
    }
    if (Vals["3"] === Vals["5"] && Vals["7"] === Vals["5"]) {
      if (Vals["3"] === 0) {
        document.getElementById("3").style.backgroundColor = "green";
        document.getElementById("5").style.backgroundColor = "green";
        document.getElementById("7").style.backgroundColor = "green";
        document.getElementById("winner_status").innerHTML = "PLAYER1 WINS!";
        console.log("PLAYER1 WINS!");
        points.player1++;
        setPoints({ ...points });
        finish();
        return;
      } else {
        if (Vals["3"] === 1) {
          document.getElementById("3").style.backgroundColor = "green";
          document.getElementById("5").style.backgroundColor = "green";
          document.getElementById("7").style.backgroundColor = "green";
          document.getElementById("winner_status").innerHTML = "PLAYER2 WINS!";
          console.log("PLAYER2 WINS!");
          points.player2++;
          setPoints({ ...points });
          finish();
          return;
        }
      }
    }
  };
  var chkRow = () => {
    for (let i = 0; i < 7; i += 3) {
      let index1 = i + 1;
      let index2 = i + 2;
      let index3 = i + 3;
      if (
        Vals[index1.toString()] === Vals[index2.toString()] &&
        Vals[index2.toString()] === Vals[index3.toString()]
      ) {
        if (Vals[index1.toString()] === 0) {
          document.getElementById("winner_status").innerHTML = "PLAYER1 WINS!";
          console.log("PLAYER1 WINS!");
          document.getElementById(index1.toString()).style.backgroundColor =
            "green";
          document.getElementById(index2.toString()).style.backgroundColor =
            "green";
          document.getElementById(index3.toString()).style.backgroundColor =
            "green";
          points.player1++;
          setPoints({ ...points });
          finish();
          return;
        } else {
          if (Vals[index1.toString()] === 1) {
            document.getElementById("winner_status").innerHTML =
              "PLAYER2 WINS!";
            document.getElementById(index1.toString()).style.backgroundColor =
              "green";
            document.getElementById(index2.toString()).style.backgroundColor =
              "green";
            document.getElementById(index3.toString()).style.backgroundColor =
              "green";
            points.player2++;
            setPoints({ ...points });
            console.log("PLAYER2 WINS!");
            finish();
            return;
          }
        }
      }
    }
  };
  var chkCol = () => {
    for (let i = 0; i < 3; i++) {
      let index1 = i + 1;
      let index2 = i + 4;
      let index3 = i + 7;
      if (
        Vals[index1.toString()] === Vals[index2.toString()] &&
        Vals[index3.toString()] === Vals[index2.toString()]
      ) {
        if (Vals[index1.toString()] === 0) {
          console.log("PLAYER1 WINS!");
          document.getElementById("winner_status").innerHTML = "PLAYER1 WINS!";
          document.getElementById(index1.toString()).style.backgroundColor =
            "green";
          document.getElementById(index2.toString()).style.backgroundColor =
            "green";
          document.getElementById(index3.toString()).style.backgroundColor =
            "green";
          points.player1++;
          setPoints({ ...points });
          finish();
          return;
        } else {
          if (Vals[index1.toString()] === 1) {
            document.getElementById("winner_status").innerHTML =
              "PLAYER2 WINS!";
            document.getElementById(index1.toString()).style.backgroundColor =
              "green";
            document.getElementById(index2.toString()).style.backgroundColor =
              "green";
            document.getElementById(index3.toString()).style.backgroundColor =
              "green";
            console.log("PLAYER2 WINS!");
            points.player2++;
            setPoints({ ...points });
            finish();
            return;
          }
        }
      }
    }
  };
  var Output = (e) => {
    counter++;
    if (counter === 8) {
      document.getElementById("winner_status").innerHTML = "DRAW!";
    }
    document.getElementById(e.target.id).style.backgroundColor = "red";
    if (flag) {
      document.getElementById(e.target.id).innerHTML = "X";
      document.getElementById(e.target.id).style.pointerEvents = "none";
      Vals[e.target.id] = 0;
      flag = false;
    } else {
      document.getElementById(e.target.id).style.pointerEvents = "none";
      document.getElementById(e.target.id).innerHTML = "O";
      Vals[e.target.id] = 1;
      flag = true;
    }
    chkDia();
    chkRow();
    chkCol();
  };
  return (
    <div className="App">
      <h1>TIC TAC TOE</h1>
      <h2 id="winner_status">LET'S PLAY</h2>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <th
                id="1"
                onClick={(e) => {
                  Output(e);
                }}
              ></th>
              <th
                id="2"
                onClick={(e) => {
                  Output(e);
                }}
              ></th>
              <th
                id="3"
                onClick={(e) => {
                  Output(e);
                }}
              ></th>
            </tr>
            <tr>
              <td
                id="4"
                onClick={(e) => {
                  Output(e);
                }}
              ></td>
              <td
                id="5"
                onClick={(e) => {
                  Output(e);
                }}
              ></td>
              <td
                id="6"
                onClick={(e) => {
                  Output(e);
                }}
              ></td>
            </tr>
            <tr>
              <td
                id="7"
                onClick={(e) => {
                  Output(e);
                }}
              ></td>
              <td
                id="8"
                onClick={(e) => {
                  Output(e);
                }}
              ></td>
              <td
                id="9"
                onClick={(e) => {
                  Output(e);
                }}
              ></td>
            </tr>
          </tbody>
        </table>
        <table width="300px" height="50px" style={{ marginLeft: "50px" }}>
          <tbody>
            <tr>
              <th>P1(X)</th>
              <th>P2(O)</th>
            </tr>
            <tr>
              <th>{points.player1}</th>
              <th>{points.player2}</th>
            </tr>
            <tr>
              <th>
                <input
                  type="button"
                  value="NEW GAME"
                  onClick={() => {
                    configure("NEW");
                  }}
                  className="btn"
                ></input>
              </th>
              <th>
                <input
                  type="button"
                  value="RESET GAME"
                  onClick={() => {
                    configure("RESET");
                  }}
                  className="btn"
                ></input>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
