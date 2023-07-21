let height = +prompt("Height");
if(!isNaN(height)&& height>0) {
    if(height<150) {
        alert("Mày là người lùn à");
    } else if (height<=169) {
        alert("Trông mày cũng tàm tạm. Cho 3 điểm");
    } else {
        alert("Mày trông cũng được đấy");
    }
} else {
    alert("Not vaild");
}