function Search_stock() {
  // 宣告變數
  var input, filter, table, tr, td, i, txtValue;

  // 取得搜尋框輸入值
  input = document.getElementById("search_name");  
  filter = input.value.toUpperCase();  // 將輸入轉成大寫（不區分大小寫比對）

  // 獲取表格和所有的行
  table = document.getElementById("stock_table");  // 確保表格 ID 與 HTML 一致
  if (!table) {
      console.error("Error: 表格 'stock_table' 不存在！");
      return;
  }
  tr = table.getElementsByTagName("tr");  

  // 遍歷表格行，從第1行（忽略表頭）開始
  for (i = 1; i < tr.length; i++) {  
      // 獲取第二個單元格 (股票名稱/代碼)function Search_stock() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("search_name");
    filter = input.value.toUpperCase();
    table = document.getElementById("stock_table");
    if (!table) {
        console.error("Error: 表格 'stock_table' 不存在！");
        return;
    }
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        let rowMatch = false;
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) { // 遍歷每一行的每個單元格
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    rowMatch = true; // 若匹配則設為 true
                    break;
                }
            }
        }
        tr[i].style.display = rowMatch ? "" : "none"; // 顯示或隱藏行
    }
}

      td = tr[i].getElementsByTagName("td")[1];  
      if (td) {
          txtValue = td.textContent || td.innerText;  // 取得單元格內的文本
          // 檢查是否匹配
          if (txtValue.toUpperCase().indexOf(filter) > -1) {  
              tr[i].style.display = "";  // 顯示匹配的行
          } else {
              tr[i].style.display = "none";  // 隱藏不匹配的行
          }
      }
  }
}