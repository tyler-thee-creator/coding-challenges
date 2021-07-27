/*https://leetcode.com/problems/design-parking-system/*/

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

const ParkingSystem = function(big, medium, small) {
  this.bigSlots = big;
  this.mediumSlots = medium;
  this.smallSlots = small;
};

/**
* @param {number} carType
* @return {boolean}
*/
ParkingSystem.prototype.addCar = function(carType) {
  const spotTypes = {
      1: 'bigSlots',
      2: 'mediumSlots',
      3: 'smallSlots',
  };

  if (this[spotTypes[carType]]) {
      this[spotTypes[carType]]--;
      return true;
  } else {
      return false;
  }
};

/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/

export default ParkingSystem;
