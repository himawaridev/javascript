// Math.sqrt(x,y) tính căn bậc hai
// Math.abs(x,y) tính giá trị tuyệt đối
// Math.pow(x,y) tính lũy thừa 
// Math.floor(x,y) làm tròn 1 số xuống số nguyên gần nhất
// Math.random() trả về một số ngẫu nhiên 
// Math.min() để tìm ra giá trị nhỏ nhất trong một tập hợp các số hoặc các đối số truyền vào.
// Math.log() được sử dụng để tính logarit tự nhiên (logarit cơ số e) của một số.()
// Math.min() dùng để tìm gia trị nhỏ nhất trong các tham số được truyền vào
// Math.max() được dùng để tìm giá trị lớn nhất cuar các tham số được truyền vào
// Math.round() được dùng để là tròn đến số nguyên gần nhất


















// Array.from() được sử dụng để tạo một mảng mới từ một đối tượng có khả năng được lặp lại (iterable) hoặc một chuỗi ký tự




// isInteger dùng để kiểm tra xem có phải là số nguyên hay không 
// toStirng chuyen thanh 1 chuoi node
// parseIn dùng để đưa một giá trị thành số nguyên tương ứng
// new Set() dùng để tạo ra các giá trị ko trùng lặp
// new Map() là một cấu trúc dữ liệu để lưu trữ các cặp key-value (khóa-giá trị). Map là một tập hợp có thứ tự của các phần tử, trong đó mỗi phần tử là một cặp key-value duy nhất.
// size dùng để lấy số lượng phần tử hiện có của dối tượng
// has() dung de kiem tra 1 gia tri da ton tai trong set() hay chua
// add() dùng để thêm 1 giá trị vào đóio tượng set()
// set() dùng dể thêm 1 cặp key-value mới vào trong Map()
// forEach() được dùng để lặp qua các phần tử trong một đối tượng set() hoac  Map()
// get()  được sử dụng để truy xuất giá trị tương ứng với một khóa trong Map.
// delete() để xóa một phần tử khỏi Set. Nó nhận vào giá trị cần xóa và sẽ xóa phần tử đó khỏi Set nếu nó tồn tại.
// size là thuộc tính của đối tượng Set trong JavaScript để trả về số lượng phần tử hiện có trong Set.
// includes() được sử dụng để kiểm tra xem một giá trị (value) có tồn tại trong mảng hay không. Nó trả về giá trị boolean (true hoặc false) tùy thuộc vào việc giá trị có được tìm thấy trong mảng hay không
// from để tạo một mảng mới từ một đối tượng có tính chất "iterable" hoặc một đối tượng giống mảng (array-like).
// includes()  Nó được sử dụng để kiểm tra xem một giá trị có tồn tại trong mảng hay không. Phương thức includes trả về giá trị true nếu giá trị được tìm thấy trong mảng và false nếu không tìm thấy.
// sort((a,b) => a - b) dung de sap sep cac so theo thu tu tang dan
// sort((a,b) => b - a) dung de sap sep cac so theo thu tu giam dan
// filter()  là một phương thức của đối tượng mảng trong JavaScript. Nó được sử dụng để tạo một mảng mới chứa các phần tử của mảng gốc thỏa mãn một điều kiện được xác định. 
// indexOf() là một phương thức trong JavaScript được sử dụng để tìm vị trí đầu tiên của một phần tử trong mảng. Nó trả về chỉ số của phần tử đó trong mảng, hoặc -1 nếu phần tử không được tìm thấy.
// concat() là một phương thức của mảng trong JavaScript để kết hợp nhiều mảng thành một mảng mới. Nó tạo ra một mảng mới bằng cách nối các mảng đã cho theo thứ tự.
// reverse() để đảo ngược một mảng
// shift() trong JavaScript được sử dụng để loại bỏ và trả về phần tử đầu tiên của một mảng. Nó thay đổi độ dài của mảng bằng cách xóa phần tử đầu tiên và dịch các phần tử còn lại về phía trước.
// unshift() trong JavaScript được sử dụng để thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng sau khi thêm.
// pop(). Phương thức này sẽ xóa phần tử cuối cùng của mảng và trả về giá trị của phần tử đó.
// slice() là một phương thức của đối tượng mảng trong JavaScript. Nó được sử dụng để tạo một bản sao của một phần của mảng ban đầu, bằng cách chỉ định vị trí bắt đầu và vị trí kết thúc của phần mảng cần tạo ra.
// reduce() là một phương thức của mảng trong JavaScript được sử dụng để thực hiện một phép tính trên từng phần tử của mảng và trả về một giá trị duy nhất.








/*
Thêm phần tử vào mảng: array.splice(start, deleteCount, item1, item2, ...).
start: Vị trí bắt đầu thay đổi mảng.
deleteCount: Số lượng phần tử cần loại bỏ từ vị trí start (nếu có).
item1, item2, ...: Các phần tử mới cần thêm vào mảng từ vị trí start.


Loại bỏ phần tử khỏi mảng: array.splice(start, deleteCount).
start: Vị trí bắt đầu loại bỏ phần tử.
deleteCount: Số lượng phần tử cần loại bỏ từ vị trí start.
*/
//////////////////
/*
Trong JavaScript, toán tử "..." (ba chấm) được gọi là "spread operator" (toán tử trải rộng) 
và được sử dụng để truyền các phần tử của một mảng vào một vị trí nào đó trong một mảng hoặc một hàm.

Khi sử dụng toán tử trải rộng trong mảng, chúng ta viết "..." sau mảng 
và nó sẽ truyền từng phần tử trong mảng đó vào vị trí tương ứng trong mảng hoặc hàm mà chúng ta đang sử dụng.
ex: 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

*/

















































