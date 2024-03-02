import "./index.css"
import {useState} from "react";
import Modal from '@mui/material/Modal';
import {Box, Typography} from "@mui/material";
import {Operation, Role} from "../../types/role";
import CardCollection, {RoleChip} from "../roleCard";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "800px",
    minWidth: "200px",
    width: "0.5vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function PersonCard({num, addOp} = {
    num: 1, addOp: (a: Operation) => {
    }
}) {
    const [tags, setTags] = useState<Role[]>([]);
    const [open, setOpen] = useState(false);
    let handleClose = (event: React.MouseEvent) => {
        event.stopPropagation()
        setOpen(false)
        console.log("closing!!!")
    }
    return (
        <div className="person-card-container" onClick={function (event) {
            setOpen(true)
        }}>
            <div style={{
                width: "100%",
                aspectRatio: "3",
                borderRadius: ".5rem",
                boxShadow: "1px 3px rgb(23,123,22) 0.1",
                background: "linear-gradient(-60deg, rgb(242,241,241) 50%, rgb(131,225,144) 50%)",
                transform: "skewY(0deg)"
            }}>
                <span style={{
                    fontSize: "4rem",
                    color: "rgb(111,198,114)",
                    fontWeight: "600",
                    paddingLeft: "2rem",
                }}>{num}</span>
                <div style={
                    {
                        position: "absolute",
                        bottom: "1rem"
                    }
                }>
                    {tags.map((t) => {
                        return <RoleChip role={t} handleDeleteRole={
                            () => {
                                setTags((tags) => {
                                    // addOp({PlayerNum: num, RemoveRole: t})
                                    return tags.filter((current) => current !== t)
                                })
                            }
                        }/>
                    })}
                </div>
            </div>


            {/*模态框逻辑 => */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        选择猜测角色
                    </Typography>
                    <Typography sx={{mt: 2}}>
                        <CardCollection handleAddRole={(tag) => {
                            setTags((tags) => {
                                addOp({PlayerNum: num, AddRole: tag})
                                return Array.from(new Set([...tags, tag]))
                            })
                        }}/>
                    </Typography>
                    <section style={{
                        "marginTop": "1em",
                    }}>
                    </section>
                </Box>
            </Modal>
        </div>
    )
}


export default PersonCard;