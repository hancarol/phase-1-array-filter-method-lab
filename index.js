const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(driver, name) {
  const driverName = driver.filter((el) => el === name);
  console.log(driverName);
}
findMatching(drivers, value);
