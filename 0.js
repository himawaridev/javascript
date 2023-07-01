function countIncreasingSubarrays(array) {
  function getIncreasingSubarrays(start, subarray) {
    let count = 0;

    if (subarray.length > 1) {
      count++;
    }

    for (let i = start + 1; i < array.length; i++) {
      if (array[i] > subarray[subarray.length - 1]) {
        count += getIncreasingSubarrays(i, [...subarray, array[i]]);
      }
    }

    return count;
  }

  let totalCount = 0;

  for (let i = 0; i < array.length; i++) {
    totalCount += getIncreasingSubarrays(i, [array[i]]);
  }

  return totalCount;
}

console.log('Số lượng mảng con tăng có độ dài lớn hơn 1:', countIncreasingSubarrays([1, 2, 3, 4]));  // Kết quả: 6
