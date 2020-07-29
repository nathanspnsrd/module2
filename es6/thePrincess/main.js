'use strict'

let name = ["Mario", "Luigi"]
let totalCoins = 0
let stati = ["Powered Up", "Big", "Small", "Dead"]
let hasStar = false
let gameActive = true
let status = "Big"
let namePicked


class Player {
    constructor(namePicked, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked) {
        let sum
        sum = Math.floor(Math.random() * 2)
        namePicked = name[sum]
        return namePicked
    }
    gotHit = () => status = stati[(stati.indexOf(status) - 1)]
    gotPowerup() {
        status = stati[(stati.indexOf(status) + 1)]
        if (status === "Powered Up") {
            hasStar = true
        }
    }
    addCoin = () => totalCoins += 1
    gameActive(){
        if (status = undefined){
            break
            return status
        }
    }
    print() {
        if (hasStar === true) {
            console.log(
                `
                Name: ${name}
                Status: ${status}
                Total Coins: ${totalCoins}
                You have a star!
                `
            )
        } else {
            console.log(
                `
                Name: ${name}
                Status: ${status}
                Total Coins: ${totalCoins}
                You have a star!
                `
            )
        }  
    }
}

const randomRange = player => {
    let sum
    sum = Math.floor(Math.random() * 3)
    if (sum === 0) {
        player.gotHit()
    } else if (sum === 1) {
        player.gotPowerup()
    } else if (sum === 2) {
        player.addCoin()
    } else if (gameActive === false) {
        return `Game Over`
    }
    player.print()
}

const createPlayer = new Player(name, 0, status, false)

setInterval (() => {
    if(gameActive = true){
        randomRange(createPlayer)
    }
}, 500);