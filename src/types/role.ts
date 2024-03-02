enum GoodRole {
    PM = "平民",
    JZ = "警长",
    TPG = "调皮鬼",
    ZT = "侦探",
    ZCR = "主持人",
    YS = "勇士",
    ZXS = "占星师",
    TS = "天使😇",
    SZ = "哨子"
}

enum MRole {
    CY = "臭鼬",
    XC = "小丑",
    SJ = "赏金猎人",
    DT = "赌徒"
}

enum BadRole {
    LR = "狼人",
    ZDL = "炸弹狼💣",
    QXL = "潜行狼",
    DL = "独狼"
}

enum CampRole {
    HR = "好人阵营",
    LR = "狼人阵营",
    ZL = "中立阵营"
}

type Role = BadRole | MRole | GoodRole | CampRole

type Color = "primary" | "error" | "warning"

type Operation = {
    PlayerNum: number
    AddRole?: Role
    RemoveRole?: Role
}

export {
    GoodRole,
    BadRole,
    MRole,
    CampRole
}

export type {
    Role,
    Color,
    Operation
}

