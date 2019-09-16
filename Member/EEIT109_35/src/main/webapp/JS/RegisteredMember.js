let username_check_val = false;
let password_check_val = false;
let account_check_val = false;
let account_check_val_repeat = false;
let address_check_val = false;
let birth_check_val = false;
let idnumber_check_val = false;

let pwShown = 0;
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("account").addEventListener("blur", check_account);
	document.getElementById("username").addEventListener("blur", check_username); // 事件繫結，事件氣泡(bubbling)
	document.getElementById("password").addEventListener("blur", check_password);
	document.getElementById("alladdress").addEventListener("blur", check_address);
	document.getElementById("idnumber").addEventListener("blur", check_idnumber);
	document.getElementById("date").addEventListener("blur", check_birth);
	document.getElementById("date").addEventListener("blur", opencreate);
});
function check_idnumber() {
	if (document.getElementById("idnumber").value != "") {
		idnumber_check_val = true;
		document.getElementById("idnumber_password").innerHTML = "<img src='../Images/yes.jpg'>格式符合"
	} else {
		document.getElementById("idnumber_password").innerHTML = "<img src='../Images/noway.jpg'>不可空白"

	}
}

function check_address() {
	if (document.getElementById("alladdress").value != "") {
		address_check_val = true;
		document.getElementById("address_password").innerHTML = "<img src='../Images/yes.jpg'>格式符合"
	} else {
		document.getElementById("address_password").innerHTML = "<img src='../Images/noway.jpg'>不可空白"

	}
}
function check_birth() {
	if (document.getElementById("date").value != "") {
		birth_check_val = true;
		document.getElementById("date_password").innerHTML = "<img src='../Images/yes.jpg'>格式符合"
	}else {
		document.getElementById("date_password").innerHTML = "<img src='../Images/noway.jpg'>不可空白"

	}

}
function show() {
	var p = document.getElementById('password');
	p.setAttribute('type', 'text');
}

function hide() {
	var p = document.getElementById('password');
	p.setAttribute('type', 'password');
}

function showHide() {
	if (document.getElementById("password").type == "password") {
		console.log("show");
		console.log(pwShown);
		pwShown = 1;
		show();
	} else {
		console.log("hide");
		console.log(pwShown);
		pwShow = 0;
		hide();
	}

}

function opencreate() {
	if (password_check_val && username_check_val && account_check_val && account_check_val_repeat && address_check_val && birth_check_val && idnumber_check_val) {
		document.getElementById("submit").innerHTML = "<button type='submit'>註冊</button>";
	}
}

function check_account() {

	let PWDVal = document.getElementById("account").value;
	var PWDVallen = PWDVal.length;
	let flag1 = false, flag2 = false, flag3 = false
	let special = [ '!', '@', '#', '$', '%', '^', '&', '*' ]

	if (PWDVal == "") {
		document.getElementById("account_msg").innerHTML = "<img src='../Images/noway.jpg'>不可空白"
	} else if (PWDVallen >= 6) {
		for (let i = 0; i < PWDVallen; i++) {
			let chrPwd = PWDVal.charAt(i).toUpperCase();
			if (chrPwd >= "A" && chrPwd <= "Z") {
				flag1 = true
				console.log(chrPwd)
			} else if (chrPwd >= "0" && chrPwd <= "9") {
				flag2 = true
				console.log(chrPwd)
			} else if (special.lastIndexOf(chrPwd)) {
				console.log(chrPwd)
				flag3 = true
			}
			if (flag1 && flag2 && flag3) {
				document.getElementById("account_msg").innerHTML = "<img src='../Images/yes.jpg'>格式符合";
				account_check_val = true

			} else {
				document.getElementById("account_msg").innerHTML = "<img src='../Images/noway.jpg'>格式不符合"

			}
			;
		}
	} else {
		document.getElementById("account_msg").innerHTML = "<img src='../Images/noway.jpg'>至少六個字"
	}
}
function check_username() {
	let acc = document.getElementById("username").value;
	var acc_length = acc.length;
	var flag4 = false;
	if (acc == "") {
		document.getElementById("msg").innerHTML = "<img src='../Images/noway.jpg'>不可空白"
	} else if (acc_length >= 2) {
		for (let i = 0; i < acc_length; i++) {

			if (acc.charCodeAt(i) >= 0x4e00 && acc.charCodeAt(i) <= 0x9fff) {

				flag4 = true
			} else {
				flag4 = false;
				break;
			}
		}
		if (flag4) {
			document.getElementById("msg").innerHTML = "<img src='../Images/yes.jpg'>格式符合"
			username_check_val = true
		} else {
			document.getElementById("msg").innerHTML = "<img src='../Images/noway.jpg'>必須為中文字"
		}
	} else {
		document.getElementById("msg").innerHTML = "<img src='../Images/noway.jpg'>至少兩個字"

	}

}

function check_password() {
	let PWDVal = document.getElementById("password").value;
	var PWDVallen = PWDVal.length;
	let flag1 = false, flag2 = false
	let special = [ '!', '@', '#', '$', '%', '^', '&', '*' ]

	if (PWDVal == "") {
		document.getElementById("msg_password").innerHTML = "<img src='../Images/noway.jpg'>不可空白"
	} else if (PWDVallen >= 6) {
		for (let i = 0; i < PWDVallen; i++) {
			let chrPwd = PWDVal.charAt(i).toUpperCase();
			if (chrPwd >= "A" && chrPwd <= "Z") {
				flag1 = true
				console.log(chrPwd)
			} else if (chrPwd >= "0" && chrPwd <= "9") {
				flag2 = true
				console.log(chrPwd)
			}
			if (flag1 && flag2) {
				document.getElementById("msg_password").innerHTML = "<img src='../Images/yes.jpg'>格式符合";
				password_check_val = true

			} else {
				document.getElementById("msg_password").innerHTML = "<img src='../Images/noway.jpg'>格式不符合"

			}
			;
		}
	} else {
		document.getElementById("msg_password").innerHTML = "<img src='../Images/noway.jpg'>至少六個字"
	}
	// document.getElementById("msg_password").innerHTML = "<img
	// src='image/yes.jpg'>"
}
$(document).ready(function() {
	$("#check").click(function() {
		if ($("#account").val() != "") {
			$.ajax({
				url : "../Check_Repeat.do",
				data : {
					account : $("#account").val()
				},
				type : "POST",
				success : function(data) {
					if (data == "true") {
						alert("您可以使用此帳號");
						account_check_val_repeat = true;
					} else {
						alert("此帳號已重複註冊")
					}

					console.log(data)
				}
			})
		} else {
			alert("你是不是想找麻煩")
		}
	})
})
