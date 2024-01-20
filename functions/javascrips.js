// xac dinh ham
function sayHello() {
    console.log('Hello World');
  }
  
  // goi 1 ham
  sayHello();
  
  // xac dinh ham voi cac tham so
  function add(num1, num2) {
    console.log(num1 + num2);
  }
  
  // goi ham
  add(5, 10);
//   Tham số so với đối số
//   Tham số là tên của các biến được sử dụng để truyền dữ liệu vào một hàm.
//   Đối số là các giá trị được truyền vào hàm
// Trả về giá trị

  function subtract(num1, num2) {
    return num1 - num2;
  
    console.log('After the return');
  }
  
  // Gán giá trị trả về cho một biến
  const result = subtract(10, 2);
  
  console.log(result, subtract(20, 5));