import PersonCard from "../../compoments/personCard";
import "./index.css"
import {Operation} from "../../types/role";
import {useState} from "react";
import {useMediaQuery} from "@mui/material";


function PlayerPage({playerNum = 10}) {
    const matches = useMediaQuery('(max-width:768px)');
    let column = playerNum > 10 ? 3 : 2;
    if (matches) {
        column = 1
    }

    const [_, setOperations] = useState<Operation[]>([]);
    let addOp = (op: Operation) => {
        setOperations(ops => [...ops, op])
    }

    let cards = Array.from({
        length: playerNum
    }, (v, idx) => {
        return <PersonCard num={idx + 1} addOp={addOp}/>
    })


    return (
        <section className="player-page-container">
            <div style={{
                display: "grid",
                width: "100%",
                minWidth: "100px",
                columnGap: "0.5rem",
                rowGap: ".25rem",
                gridTemplateColumns: `repeat(${column},1fr)`
            }}>
                {cards}
            </div>
            {/*<div className="quickmark-container">*/}
            {/*    {*/}
            {/*        operations?.reverse().map((item) => {*/}
            {/*            if (item.AddRole) {*/}
            {/*                return <div className="mt-1">*/}
            {/*                    推测{item.PlayerNum}号玩家是<RoleChip role={item.AddRole}/>*/}
            {/*                </div>*/}
            {/*            }*/}
            {/*            return item.RemoveRole && <div className="mt-1">*/}
            {/*                推测{item.PlayerNum}号玩家不是<RoleChip role={item.RemoveRole}/>*/}
            {/*            </div>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </section>
    )
}


export default PlayerPage;