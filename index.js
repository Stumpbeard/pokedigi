var body = document.getElementById("body")
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")


const main = () => {
    canvas.width = body.clientWidth
    canvas.height = body.clientHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    var egg = document.getElementById("one")
    var baby = document.getElementById("two")

    var child1 = document.getElementById("three")
    var child2 = document.getElementById("four")

    var adult1 = document.getElementById("five")
    var adult2 = document.getElementById("six")
    var adult3 = document.getElementById("seven")
    var adult4 = document.getElementById("eight")
    var adult5 = document.getElementById("nine")
    var adult6 = document.getElementById("ten")
    var adult7 = document.getElementById("eleven")

    var perfect1 = document.getElementById("twelve")
    var perfect2 = document.getElementById("thirteen")
    var perfect3 = document.getElementById("fourteen")

    drawEvoLine(egg, baby)

    drawEvoLine(baby, child1)
    drawEvoLine(baby, child2)

    drawEvoLine(child1, adult1, { vOffset: -1 })
    drawEvoLine(child1, adult2, { vOffset: -1, hOffset: "1/2" })
    drawEvoLine(child1, adult4, { vOffset: -1, hOffset: "1/2" })
    drawEvoLine(child1, adult5, { vOffset: -1 })
    drawEvoLine(child1, adult6, { vOffset: -1, hOffset: "1/2" })

    drawEvoLine(child2, adult2, { vOffset: 1, hOffset: "2/2" })
    drawEvoLine(child2, adult3, { vOffset: 1 })
    drawEvoLine(child2, adult4, { vOffset: 1, hOffset: "2/2" })
    drawEvoLine(child2, adult6, { vOffset: 1, hOffset: "2/2" })
    drawEvoLine(child2, adult7, { vOffset: 1 })

    drawEvoLine(adult1, perfect1, { hOffset: "1/3" })
    drawEvoLine(adult2, perfect1, { hOffset: "2/3" })
    drawEvoLine(adult3, perfect1, { hOffset: "3/3" })

    drawEvoLine(adult4, perfect2)

    drawEvoLine(adult5, perfect3, { hOffset: "1/3" })
    drawEvoLine(adult6, perfect3, { hOffset: "2/3" })
    drawEvoLine(adult7, perfect3, { hOffset: "3/3" })
}

function drawEvoLine(one, two, options) {
    ctx.strokeStyle = one.style['border-color']
    ctx.lineWidth = 5;

    var onePos = {
        x: one.x + one.width / 2,
        y: one.y + one.height / 2,
    }
    var twoPos = {
        x: two.x + two.width / 2,
        y: two.y + two.height / 2,
    }

    var hOffsetTotal = (two.height / Number(options?.hOffset ? options.hOffset[2] : NaN)) | 0
    var hOffsetPos = (((Number(options?.hOffset ? options.hOffset[0] : NaN) - 1)) | 0) * hOffsetTotal + hOffsetTotal / 2

    ctx.beginPath();
    ctx.moveTo(onePos.x, onePos.y);
    ctx.lineTo(onePos.x + (twoPos.x - onePos.x) / 2 + (options?.vOffset * 8 | 0), onePos.y)
    ctx.lineTo(onePos.x + (twoPos.x - onePos.x) / 2 + (options?.vOffset * 8 | 0), twoPos.y - hOffsetTotal + hOffsetPos)
    ctx.lineTo(twoPos.x, twoPos.y - hOffsetTotal + hOffsetPos);
    ctx.stroke();
}


window.setInterval(main, 16)