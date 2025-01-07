function openTab(tabName) {
  let i, tabcontent, tablinks;

  // Ẩn tất cả tabcontent
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Xóa lớp active khỏi tất cả các tablink
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Hiển thị tabcontent đã chọn, thêm màu nền cho tablink đã chọn
  document.getElementById(tabName).style.display = "block";
}