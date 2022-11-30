basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    } else {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
            DFRobotMaqueenPlus.mototStop(Motors.M2)
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
            }
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
            DFRobotMaqueenPlus.mototStop(Motors.M1)
        }
    }
})
