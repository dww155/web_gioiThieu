members = [
    {ten:"Ngô Kiều Oanh", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Trần Ngọc Đan Thanh", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Nguyễn Hoàng Bảo Vy", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Vy Đỗ Phương Thảo", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Trần Diệp Hải Lam", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Trần Thụy Minh Nguyệt", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Lê Ngọc Nhi", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Hoàng Thị Kiều Nhi", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
    {ten:"Lâm Ngọc Thanh Tâm", gioiTinh:"nữ", ngaySinh:"", contact:"", image:""},
]

function showDetail (member_id) {
    let member_detail = document.getElementById("members__detail");
    let member_info = `
        <div class="members__detail__container">
            <img src="" alt="anh thanh vien">
            <div class="members__detail__content">
                <p class="member__detail">Tên: ${members[member_id].ten}</p>
                <p class="member__detail">Ngày sinh: ${members[member_id].ngaySinh}</p>
                <p class="member__detail">Giới tính: ${members[member_id].gioiTinh}</p>
                <a class="member__detail" href="${members[member_id].contact}">
                    <i class="fa-brands fa-facebook"></i>
                    Liên hệ
                </a>
            </div>
        </div>
    `

    member_detail.innerHTML = member_info;
    member_detail.style = "display: flex";
    member_detail.addEventListener("click", () => {
        member_detail.style = "display: none";
    })
    
    document.addEventListener("keyup", (e) => {
        if (e.keyCode == 27) {
            member_detail.style = "display:none";
        }
    })
    document.querySelector(".members__detail__container").addEventListener("click", (e) => {
        e.stopPropagation();
    })
}

let member_btns = document.querySelectorAll(".members__list li");
member_btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        showDetail(index);
    })
})