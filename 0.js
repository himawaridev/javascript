function countOccurrences(a, b) {
    return a.map(function(x) {
      return b.filter(function(y) {
        return x === y;
      }).length;
    });
  }
  
  // Sử dụng đoạn code trên
  var a = [1, 2, 3];
  var b = [1, 2, 2, 3, 3, 3];
  console.log(countOccurrences(a, b)); // Kết quả là: [1, 2, 3]
  