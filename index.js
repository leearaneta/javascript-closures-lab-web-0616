const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }

  function getBumps() {
    return counter
  }

  return {addBump, getBumps}
}

const {addBump, getBumps} = bumpCounter()

function createAnimal(animal) {
  function deadlyDevice(device) {
    var obj = {}
    obj.animalType = animal
    obj.deadlyDevice = device
    return obj
  }
  return deadlyDevice
}

sharkCreator = createAnimal('Shark')
sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
sharkWithFrickinCannon = sharkCreator('Cannon')
