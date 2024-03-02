import {BadRole, CampRole, Color, GoodRole, MRole, Role} from "../../types/role";
import {Chip} from "@mui/material";
import "./index.css"

let GoodChips = Object.values(GoodRole).map((role) => {
    return <Chip label={role} color="primary"/>
})


let BadChips = Object.values(BadRole).map((role) => {
    return <Chip label={role} color="error"/>
})

let MChips = Object.values(MRole).map((role) => {
    return <Chip label={role} color="warning"/>
})

function CampRoleChipForShow({
                                 role,
                                 handleAddRole,
                             }: {
    role: Role,
    handleAddRole: (arg0: Role) => void,
}) {

    return <Chip
        label={role}
        color={getColor(role)}
        style={{
            "scale": "200%"
        }}
        onClick={(e) => {
            e.stopPropagation()
            if (handleAddRole) {
                handleAddRole(role)
            }
        }}/>
}

function getColor(role: Role) {
    let color: Color = "primary"
    if (Object.values(MRole).includes(role as MRole) || role === CampRole.ZL) {
        color = "warning"
    } else if (Object.values(BadRole).includes(role as BadRole) || role === CampRole.LR) {
        color = "error"
    }
    return color
}

function RoleChip(
    {
        role,
        handleAddRole,
        handleDeleteRole,
    }: {
        role: Role,
        handleAddRole?: (arg0: Role) => void,
        handleDeleteRole?: (arg0: Role) => void,
    } = {
        role: GoodRole.PM
    }
) {
    let color = getColor(role)
    if (handleAddRole) {
        return <Chip label={role} color={color} onClick={(e) => {
            e.stopPropagation()
            if (handleAddRole) {
                handleAddRole(role)
            }
        }}/>
    }
    return handleDeleteRole ? <Chip label={role} color={color} onDelete={() => {
        if (handleDeleteRole) {
            handleDeleteRole(role)
        }
    }}/> : <Chip label={role} color={color}/>
}

function CardCollection({
                            handleAddRole = (tag: Role) => {
                            }
                        }) {

    return (
        <div className="role-chips-container">
            <section>
                <RoleChip role={CampRole.HR} handleAddRole={handleAddRole}/>
                <RoleChip role={CampRole.ZL} handleAddRole={handleAddRole}/>
                <RoleChip role={CampRole.LR} handleAddRole={handleAddRole}/>
            </section>
            <section>
                {
                    Object.values(GoodRole).map((role) => {
                        return <RoleChip {...{role, handleAddRole}}/>
                    })
                }
            </section>
            <section>
                {
                    Object.values(MRole).map((role) => {
                        return <RoleChip {...{role, handleAddRole}}/>
                    })
                }
            </section>
            <section>
                {
                    Object.values(BadRole).map((role) => {
                        return <RoleChip {...{role, handleAddRole}}/>
                    })
                }
            </section>
        </div>
    )
}


export default CardCollection;
export {
    RoleChip
}