const { SerialPort } = require("serialport")
let portSerial

const fs = require("fs")
const path = require("path")
const comandosRobot = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "..", "..", "src", "json", "comandosRobot.json")
  )
)
let state = false

const encender = (pPath= 'COM3') => {
  state = true
  portSerial = new SerialPort({ path: pPath, baudRate: 9600 }, function (err) {
    if (err) {
      return console.log('Error: ', err.message)
    }
  })
  console.log(`Control robot: CONECTADO`)
  return state
}
const apagar = () => {
  if (state) {
    console.log(`Control Chat: DESCONECTADO`)
    if (portSerial.isOpen == true) {
      portSerial.close()
      state = false
    }
  }
  return state
}
const enviar = (msg) => {
  try {
    if (state) {
      let comando = comandosRobot[msg]
      portSerial.write(comando)
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = { encender, enviar, apagar }