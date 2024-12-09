var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var title = document.getElementById("feedback__title");
var content = document.getElementById("feedback__content");
function checkFeedBack() {

    if (fullName.value == "") {
        alert("Hãy điền họ và tên");
        fullName.focus();
        return false;
    }
    if (email.value == "") {
        alert("Hãy điền email");
        email.focus();
        return false;
    }
    if (title.value == "") {
        alert("Hãy ghi tiêu đề");
        title.focus();
        return false;
    }
    if (content.value == "") {
        alert("Hãy ghi nội dung phản hồi");
        content.focus();
        return false;
    }

    alert("Cám ơn bạn đã phản hồi. Góp ý của bạn đã được ghi nhận <3")
    return true;
}
function clearFeedback() {
    fullName.value = "";
    email.value = "";
    title.value = "";
    content.value = "";
}
