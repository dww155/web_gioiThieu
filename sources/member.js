
members = [
    {ten:"Ngô Kiều Oanh", gioiTinh:"nữ", ngaySinh:"2/06/2007", contact:"https://www.facebook.com/profile.php?id=100038441464155&mibextid=kFxxJD", image:"./assets/images/Oanh.jpg"},
    {ten:"Trần Ngọc Đan Thanh", gioiTinh:"nữ", ngaySinh:"8/11/2007", contact:"https://www.facebook.com/profile.php?id=100041107571159&mibextid=kFxxJD", image:"./assets/images/Thanh.jpg"},
    {ten:"Nguyễn Hoàng Bảo Vy", gioiTinh:"nữ", ngaySinh:"10/11/2007", contact:"https://www.facebook.com/profile.php?id=100094283712177&mibextid=kFxxJD", image:"./assets/images/Vy.jpg"},
    {ten:"Vy Đỗ Phương Thảo", gioiTinh:"nữ", ngaySinh:"18/11/2007", contact:"https://www.facebook.com/profile.php?id=100083207255517&mibextid=kFxxJD", image:"./assets/images/Thao.jpg"},
    {ten:"Trần Diệp Hải Lam", gioiTinh:"nữ", ngaySinh:"12/08/2007", contact:"https://www.facebook.com/profile.php?id=100057758035208&mibextid=kFxxJD", image:"./assets/images/Lam.jpg"},
    {ten:"Trần Thụy Minh Nguyệt", gioiTinh:"nữ", ngaySinh:"23/12/2007", contact:"https://www.facebook.com/profile.php?id=100068248125167&mibextid=kFxxJD", image:"./assets/images/Nguyet.jpg"},
    {ten:"Lê Ngọc Nhi", gioiTinh:"nữ", ngaySinh:"24/01/2007", contact:"https://www.facebook.com/le.nhii.1428?mibextid=kFxxJD", image:"./assets/images/NNhi.jpg"},
    {ten:"Hoàng Thị Kiều Nhi", gioiTinh:"nữ", ngaySinh:"12/5/2007", contact:"https://www.facebook.com/profile.php?id=100084495785906&mibextid=kFxxJD", image:"./assets/images/KNhi.jpg"},
    {ten:"Lâm Ngọc Thanh Tâm", gioiTinh:"nữ", ngaySinh:"27/01/2007", contact:"https://www.facebook.com/profile.php?id=100079693208026&mibextid=kFxxJD", image:"./assets/images/Tam.jpg"},
]

function showDetail (member_id) {
    let member_detail = document.getElementById("members__detail");
    let member_info = `
        <div class="members__detail__container">
            <img src="${members[member_id].image}" alt="anh thanh vien">
            <div class="members__detail__content">
                <p class="member__detail">Tên: ${members[member_id].ten}</p>
                <p class="member__detail">Ngày sinh: ${members[member_id].ngaySinh}</p>
                <p class="member__detail">Giới tính: ${members[member_id].gioiTinh}</p>
                <a class="member__detail" href="${members[member_id].contact}">
                    <i class="fa-brands fa-facebook"></i>
                    Liên hệ
                </a>
                <button class="members__detail__cancel">Đóng</button>
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
    document.querySelector(".members__detail__cancel").addEventListener("click", () => {
        member_detail.style = "display:none";
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