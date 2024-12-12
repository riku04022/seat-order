document.addEventListener('DOMContentLoaded', function() {
    // フォームに初期値を設定
    document.getElementById('nameInput').value = "名前1, 名前2, 名前3, 名前4, 名前5, 名前6, 名前7, 名前8, 名前9, 名前10, 名前11, 名前12, 名前13, 名前14, 名前15, 名前16, 名前17, 名前18, 名前19, 名前20, 名前21, 名前22, 名前23, 名前24, 名前25, 名前26";

    // Startボタンを自動で押す
    document.getElementById('startButton').click();
});

let names = [];

document.getElementById('startButton').addEventListener('click', function() {
    const input = document.getElementById('nameInput').value;
    names = input.split(', ').map(name => name.trim()); // カンマとスペースで分解

    if (names.length === 0 || (names.length === 1 && names[0] === "")) return; // 名前が入力されていない場合は何もしない

    shuffleArray(names);

    // 各テーブルの人数を設定
    const table1 = names.slice(0, 6);
    const table2 = names.slice(6, 13);
    const table3 = names.slice(13, 20);
    const table4 = names.slice(20, 26);

    displaySeats('table1', table1);
    displaySeats('table2', table2);
    displaySeats('table3', table3);
    displaySeats('table4', table4);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displaySeats(tableId, seats) {
    const table = document.getElementById(tableId);
    table.innerHTML = ''; // Clear previous seats
    seats.forEach((seat) => {
        const seatElement = document.createElement('div');
        seatElement.className = 'seat';
        seatElement.textContent = seat; // 名前のみを表示
        table.appendChild(seatElement);
    });
}
