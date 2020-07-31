'use strict'

let names = ["Mario", "Luigi"]
let totalCoins = 0
let stati = ["Powered Up", "Big", "Small", "Dead"]
let hasStar = false
let gameActive = true
let stars

function createRandomName() {
    let sum
    let name
    sum = Math.floor(Math.random() * 2)
    name = names[sum]
    return name
}

function createRandomNameStatus() {
    let sum
    let status
    let stati = ["Powered Up", "Big", "Small"]
    sum = Math.floor(Math.random() * 3)
    status = stati[sum]
    return status
}

class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked) {
        this.name = namePicked
    }
    gotHit = () => {
        if (this.status === "Powered Up") {
            if (this.hasStar === true) {
                console.log("Your star protected you.")
                this.hasStar = false
                this.status = this.status
            } else {
                this.status = stati[(stati.indexOf(this.status) + 1)]
            }
        } else {
            this.status = stati[(stati.indexOf(this.status) + 1)]
            this.hasStar = false
        }
    }
    gotPowerup() {
        this.status = stati[(stati.indexOf(this.status) - 1)]
        if (this.status == undefined) {
            console.log("Congratulations! You got a star.")
            this.hasStar = true
            this.status = "Powered Up"
        }
    }
    addCoin = () => this.totalCoins += 1
    gameActive(){
        console.log(
            `
            Name: ${this.name}
            Status: ${this.status}
            Total Coins: ${this.totalCoins}
            Game over.
            `
        )
        process.exit()
    }
    print() {
        if (this.hasStar === true) {
            console.log(
                `
                Name: ${this.name}
                Status: ${this.status}
                Total Coins: ${this.totalCoins}
                You have a star!
                `
            )
        } else {
            console.log(
                `
                Name: ${this.name}
                Status: ${this.status}
                Total Coins: ${this.totalCoins}
                `
            )
        }  
    }
}


const randomRange = player => {
    let sum
    if (player.hasStar === false) {
        sum = Math.floor(Math.random() * 3)
        if (sum === 0) {
            player.gotHit()
        } else if (sum === 1) {
            player.gotPowerup()
        } else if (sum === 2) {
            player.addCoin()
        } 
        if (player.status === "Dead") {
            player.gameActive()
        }
    } else if (player.hasStar === true) {
        sum = Math.floor(Math.random() * 2)
        if (sum === 0) {
            player.gotHit()
        } else if (sum === 1) {
            player.addCoin()
        } 
        if (player.status === "Dead") {
            player.gameActive()
        }
    }
    player.print()
}

const createPlayer = new Player(createRandomName(), 0, createRandomNameStatus(), false)

setInterval (() => {
    if(gameActive = true){
        randomRange(createPlayer)
    }
}, 500);