// Mảng chứa các lá bài
var cards = [
    { value: 'Át', image: 'path/to/ace.png' },
    { value: '2', image: 'path/to/2.png' },
    { value: '3', image: 'path/to/3.png' },
    // Thêm các lá bài khác vào đây
];

// Hàm chọn một lá bài ngẫu nhiên và hiển thị nó
function pickCard() {
    // Lấy một lá bài ngẫu nhiên từ mảng cards
    var randomIndex = Math.floor(Math.random() * cards.length);
    var selectedCard = cards[randomIndex];

    // Hiển thị giá trị và hình ảnh của lá bài
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '<div class="card">' +
                                  '<img src="' + selectedCard.image + '" alt="' + selectedCard.value + '">' +
                                  '<p>' + selectedCard.value + '</p>' +
                              '</div>';
}
