const cars = [
  {
    name: "Tesla model 3",
    brand: "Tesla",
    price: 142000,
    color: "White",
    category: "SUV",
  },
  {
    name: "Audi A8",
    brand: "Audi",
    price: 184870,
    color: "Black",
    category: "SUV",
  },
  {
    name: "Vinfast Lux 2.0",
    brand: "Vin",
    price: 21490,
    color: "Gray",
    category: "SUV",
  },
  {
    name: "Honda CRV",
    brand: "Honda",
    price: 84900,
    color: "Blue",
    category: "Hatchback",
  },
];

const inputNumber = +prompt(
  "Nhập:\n1 để hiển thị tên và giá xe.\n2 để hiển thị thông tin của một chiếc xe cụ thể.\n3 để tìm kiếm các xe theo danh mục.\n4 để hiển thị thông tin chi tiết.\n5 để tìm kiếm xe theo nhà cung cấp."
);

switch (inputNumber) {
  case 1:
    cars.forEach((car) => {
      console.log(`Tên: ${car.name}\nGiá: ${car.price}\n`);
    });
    break;

  case 2:
    const carIndex = +prompt("Nhập số thứ tự của xe để hiển thị thông tin");
    const selectedCar = cars[carIndex - 1];
    if (selectedCar) {
      console.log(
        `Tên: ${selectedCar.name}\nHãng: ${selectedCar.brand}\nGiá: ${selectedCar.price}\nMàu: ${selectedCar.color}\nDanh mục: ${selectedCar.category}`
      );
    } else {
      alert("Số thứ tự xe không hợp lệ");
    }
    break;

  case 3:
    const categoryInfo = prompt("Nhập danh mục xe");
    const filteredCars = cars.filter((car) => car.category === categoryInfo);
    if (filteredCars.length > 0) {
      filteredCars.forEach((car) => {
        console.log(
          `Tên: ${car.name}\nHãng: ${car.brand}\nGiá: ${car.price}\nMàu: ${car.color}\nDanh mục: ${car.category}\n`
        );
      });
    } else {
      console.log(`Không tìm thấy xe nào trong danh mục: ${categoryInfo}`);
    }
    break;

  case 4:
    cars[0].providers = ["ZeroAuto", "VhStore"];
    cars[1].providers = ["HAauto", "VhStore"];
    cars[2].providers = ["HAauto"];
    cars[3].providers = ["HAauto"];
    cars.forEach((car) => {
      console.log(
        `Tên: ${car.name}\nHãng: ${car.brand}\nGiá: ${car.price}\nMàu: ${
          car.color
        }\nDanh mục: ${car.category}\nNhà cung cấp: ${car.providers.join(
          " "
        )}\n`
      );
    });
    break;

  default:
    alert("Giá trị không hợp lệ");
    break;
}
