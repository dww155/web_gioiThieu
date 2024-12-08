members = [
    {ten:"", gioiTinh:"", ngaySinh:"", contact:""},
    {ten:"", gioiTinh:"", ngaySinh:"", contact:""},
    {ten:"", gioiTinh:"", ngaySinh:"", contact:""},
    {ten:"", gioiTinh:"", ngaySinh:"", contact:""},
    {ten:"", gioiTinh:"", ngaySinh:"", contact:""},
]

function showDetail (member_id) {
    let member_detail = document.getElementById("members__detail");
    let member_info = `
        <div class="members__detail__container">
            <img src="" alt="anh thanh vien">
            <div class="members__detail__content">
                <p class="member__detail">Tên: ${member_id.ten}</p>
                <p class="member__detail">Ngày sinh: ${member_id.ngaySinh}</p>
                <p class="member__detail">Giới tính: ${member_id.gioiTinh}</p>
                <a class="member__detail" href="${member_id.contact}">
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
    document.querySelector(".members__detail__container").addEventListener("click", (e) => {
        e.stopPropagation();
    })
}

let member_btns = document.querySelectorAll(".members__list li");
member_btns.forEach((btn, index) => {
    btn.addEventListener("click", (index) => {
        showDetail(index);
    })
})